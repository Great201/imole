"use client";

import Image from "next/image";
import Link from "next/link";

export default function ResetPasswordSuccessPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#f7ecdd] px-4">
      {/* Background cross overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-full max-w-screen bg-[#e5d6c4]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-px bg-[#e5d6c4]" />
        </div>
      </div>

      <section className="relative z-10 w-full max-w-md rounded-3xl border border-[#f3e5d6] bg-white/95 p-8 shadow-[0_22px_60px_rgba(0,0,0,0.06)] sm:p-10">
        <div className="mb-8 flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="Imolè"
            width={96}
            height={40}
            priority
          />
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10b981]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#262626]">
              Password updated
            </h1>
            <p className="mt-2 text-sm text-[#6b6b6b]">
              Now head on to log into your account.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/login"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#f59d1a] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e48805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fcd39a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Continue to login
          </Link>
        </div>
      </section>
    </main>
  );
}

