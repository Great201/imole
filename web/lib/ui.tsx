"use client";

// The three states no page in this app currently has: loading, error, empty.
// Deliberately small — a centered spinner inside the existing card or table area
// is enough. Skeletons can come when someone complains about layout shift.

import { useEffect, useState } from "react";

/**
 * Staging has been measured at 31s on some calls, so a bare spinner reads as a
 * hung page. After 8s it says so rather than leaving the user guessing.
 */
export function Spinner({ label = "Loading…" }: { label?: string }) {
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSlow(true), 8_000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 py-16 text-sm text-[#8a7b65]"
    >
      <span
        aria-hidden="true"
        className="h-6 w-6 animate-spin rounded-full border-2 border-[#e0d4c2] border-t-[#b98a3a]"
      />
      <span>{label}</span>
      {slow && <span className="text-xs text-[#a3937c]">Still loading — the server is slow.</span>}
    </div>
  );
}

export function ErrorBox({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div
      role="alert"
      className="flex flex-col items-start gap-2 rounded-xl border border-[#e8c4c4] bg-[#fdf1f1] px-4 py-3 text-sm text-[#8d3b3b]"
    >
      <span>{message}</span>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full border border-[#d9a9a9] px-3 py-1 text-xs font-medium transition hover:bg-[#f7e3e3]"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export function Empty({ label, action }: { label: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-sm text-[#8a7b65]">
      <span>{label}</span>
      {action}
    </div>
  );
}
