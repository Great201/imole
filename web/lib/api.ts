"use client";

// Transport for the Imole API. Everything that talks to the network goes
// through `apiFetch()` so no caller can forget the token, the timeout, the error
// envelope, or the 401 bounce.
//
// Client-side only: the token lives in localStorage because cookie auth is
// impossible against this API — it answers `Access-Control-Allow-Origin: *`
// with no `Vary: Origin`, and browsers reject wildcard ACAO on requests made
// with `credentials: "include"`. Until the backend sets an HttpOnly cookie on a
// non-wildcard origin, the token is reachable from JS, and that XSS exposure is
// real and not fixable from this side.

import { useCallback, useEffect, useState } from "react";
import type { Resource } from "./types";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const TOKEN_KEY = "imole.token";
export const USER_KEY = "imole.user";

/**
 * Staging has been observed taking 31s on the signup/OTP paths. Without a cap a
 * dead call hangs forever; this is deliberately longer than that observed worst
 * case so a slow-but-alive request still completes.
 */
const TIMEOUT_MS = 45_000;

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// --- session storage -------------------------------------------------------
// Lives here rather than in auth.ts because `apiFetch()` needs to read the token
// and clear it on 401; putting it in auth.ts would make the two files circular.

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setSession(token: string, user: unknown): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TOKEN_KEY, token);
  if (user) window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
}

// --- the two unverified shapes ---------------------------------------------

/**
 * ponytail: every `*ResponseDto` in the spec declares zero properties, so we do
 * not know whether lists come back bare or wrapped as `{data: [...]}`. If they
 * are bare, this is a no-op. ONE edit here once Phase 0's capture script runs.
 */
function unwrap(json: unknown): unknown {
  return json && typeof json === "object" && !Array.isArray(json) && "data" in json
    ? (json as { data: unknown }).data
    : json;
}

/**
 * ponytail: the token field name is unverified — signin is unreachable because
 * staging's mailer never delivers the OTP, so no account can be verified. These
 * are the plausible names in a NestJS codebase, widest-first. Collapse to the
 * real one once observed.
 */
export function tokenFrom(body: unknown): string | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const nested = (b.data ?? {}) as Record<string, unknown>;
  const candidates = [b.accessToken, b.token, b.access_token, b.jwt, nested.accessToken, nested.token];
  for (const v of candidates) {
    if (typeof v === "string" && v) return v;
  }
  return null;
}

/** Normalizes all three error envelopes this API is known to emit. */
function messageFrom(json: unknown): string | null {
  if (!json || typeof json !== "object") return null;
  const m = (json as { message?: unknown }).message;
  if (typeof m === "string") return m;
  // The validation pipe returns {message: string[], error, statusCode}
  if (Array.isArray(m)) {
    const parts = m.filter((x): x is string => typeof x === "string");
    if (parts.length) return parts.join("; ");
  }
  return null;
}

// --- request ---------------------------------------------------------------

type Init = { method?: string; body?: unknown };

export async function apiFetch<T>(path: string, init?: Init): Promise<T> {
  if (!BASE) {
    throw new ApiError(0, "NEXT_PUBLIC_API_BASE_URL is not set — check .env.local");
  }

  const token = getToken();
  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, {
      method: init?.method ?? "GET",
      headers: {
        ...(init?.body === undefined ? {} : { "Content-Type": "application/json" }),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: init?.body === undefined ? undefined : JSON.stringify(init.body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (e) {
    const timedOut = e instanceof DOMException && e.name === "TimeoutError";
    throw new ApiError(
      0,
      timedOut
        ? "The server took too long to respond. Please try again."
        : "Network error — could not reach the server.",
    );
  }

  // No /refresh endpoint exists, so an expired token has exactly one remedy:
  // drop the session and send the user back to login. Centralized here so no
  // caller can forget it.
  if (res.status === 401) {
    clearSession();
    if (typeof window !== "undefined" && !window.location.pathname.startsWith("/login")) {
      window.location.replace("/login");
    }
    throw new ApiError(401, "Your session has expired. Please sign in again.");
  }

  // Every PATCH in this API returns 204, and `res.json()` throws on an empty
  // body — so bail before parsing.
  if (res.status === 204) return undefined as T;

  const text = await res.text();
  let json: unknown;
  if (text) {
    try {
      json = JSON.parse(text);
    } catch {
      // Non-JSON body (e.g. an nginx error page); leave json undefined.
    }
  }

  if (!res.ok) {
    throw new ApiError(res.status, messageFrom(json) ?? `Request failed (${res.status})`);
  }

  return unwrap(json) as T;
}

/**
 * All 13 resources share the identical `GET list / POST / GET {id} / PATCH {id}`
 * quartet, so four generic calls cover the whole API. No per-entity wrappers —
 * `api.list<Device>("device")` already reads fine.
 */
export const api = {
  list: <T>(r: Resource, query = "") => apiFetch<T[]>(`/${r}${query}`),
  get: <T>(r: Resource, id: string) => apiFetch<T>(`/${r}/${id}`),
  create: <T>(r: Resource, body: unknown) => apiFetch<T>(`/${r}`, { method: "POST", body }),
  /** `termsofservice` is the one resource whose update is PUT, not PATCH. */
  update: <T>(r: Resource, id: string, body: unknown, method: "PATCH" | "PUT" = "PATCH") =>
    apiFetch<T>(`/${r}/${id}`, { method, body }),
};

// --- read hook -------------------------------------------------------------

export type ResourceState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  reload: () => void;
};

/**
 * One fetch per mount, with reload. `deps` is explicit because `fn` is a fresh
 * closure on every render and so cannot itself be a dependency.
 */
export function useResource<T>(fn: () => Promise<T>, deps: unknown[] = []): ResourceState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [nonce, setNonce] = useState(0);
  const reload = useCallback(() => setNonce((n) => n + 1), []);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    fn().then(
      (d) => {
        if (!alive) return;
        setData(d);
        setLoading(false);
      },
      (e: unknown) => {
        if (!alive) return;
        setError(e instanceof Error ? e.message : String(e));
        setLoading(false);
      },
    );
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, nonce]);

  return { data, error, loading, reload };
}
