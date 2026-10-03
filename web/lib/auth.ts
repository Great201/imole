"use client";

// The auth flow. Session *storage* lives in api.ts (apiFetch needs to read the
// token and clear it on 401); this module owns the user-facing operations.
//
// Two constraints from the API shape the whole file:
//   - There is no /me and no `GET /userprofiles/{id}` (PATCH only), so the user
//     object can only be captured from the signin response and never re-fetched.
//   - There is no /refresh and no /signout, so a token cannot be renewed and
//     signing out is purely local.

import { ApiError, USER_KEY, apiFetch, clearSession, getToken, setSession, tokenFrom } from "./api";
import type {
  AuthUser,
  ResendOtpDto,
  ResetPasswordRequestDto,
  SignInDto,
  VerifyEmailDto,
} from "./types";

export { getToken };

export function isAuthed(): boolean {
  return getToken() !== null;
}

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    const u = JSON.parse(raw) as unknown;
    return u && typeof u === "object" && typeof (u as AuthUser).email === "string"
      ? (u as AuthUser)
      : null;
  } catch {
    // Corrupt entry — treat as no user rather than throwing on every page.
    return null;
  }
}

/**
 * ponytail: unverified response shape. The user may arrive under `user`,
 * `userProfile`, `profile`, or be the top-level body itself. Tightened once
 * Phase 0's capture script shows the real one.
 */
function userFrom(body: unknown): AuthUser | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const src = (b.user ?? b.userProfile ?? b.profile ?? b.data ?? b) as Record<string, unknown>;

  const email = typeof src.email === "string" ? src.email : null;
  if (!email) return null;

  const id = typeof src.id === "string" ? src.id : typeof src._id === "string" ? src._id : null;

  return {
    id,
    email,
    firstName: typeof src.firstName === "string" ? src.firstName : null,
    lastName: typeof src.lastName === "string" ? src.lastName : null,
  };
}

/**
 * Signs in and persists the session. Returns the user when the response carried
 * one — a null user is not an error, since the token is what gates the app.
 *
 * Throws ApiError on bad credentials (404 "User doesnt exist") or on an
 * unverified account (400 "User not verified").
 */
export async function signIn(email: string, password: string): Promise<AuthUser | null> {
  const body = await apiFetch<unknown>("/authentication/signin", {
    method: "POST",
    body: { email, password } satisfies SignInDto,
  });

  const token = tokenFrom(body);
  if (!token) {
    // ponytail: if this fires, the signin response does not use any of the field
    // names tokenFrom() guesses. Log `body`, then fix tokenFrom() in api.ts.
    throw new ApiError(0, "Signed in, but no token was found in the response.");
  }

  const user = userFrom(body);
  setSession(token, user);
  return user;
}

/** Local only — the API has no /signout endpoint. */
export function signOut(): void {
  clearSession();
  if (typeof window !== "undefined") window.location.replace("/login");
}

/** Resends the email-verification OTP. Body is undocumented; `{email}` verified live. */
export function resendOtp(email: string): Promise<void> {
  return apiFetch<void>("/authentication/resend-otp", {
    method: "POST",
    body: { email } satisfies ResendOtpDto,
  });
}

export function verifyEmail(email: string, otp: string): Promise<void> {
  return apiFetch<void>("/authentication/verify-email", {
    method: "POST",
    body: { email, otp } satisfies VerifyEmailDto,
  });
}

export function requestPasswordReset(email: string): Promise<void> {
  return apiFetch<void>("/authentication/reset-password-request", {
    method: "POST",
    body: { email } satisfies ResetPasswordRequestDto,
  });
}
