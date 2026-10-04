"use client";

// Route-level error boundary. Without one, an uncaught client render error is a
// blank white page in production. Next mounts this by filename — nothing
// imports it.
//
// No loading.tsx alongside it: every fetch in this app is client-side, so a
// server-suspense fallback would never fire.

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5eee2] px-4 text-[#262626]">
      <div className="w-full max-w-md rounded-2xl border border-[#eadfce] bg-white p-8 text-center">
        <h1 className="text-lg font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-[#6b6b6b]">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-[#f9e0b8] px-5 py-2.5 text-sm font-semibold text-[#5b3b13] transition hover:bg-[#f4d49f]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
