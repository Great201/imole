"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function CheckEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";

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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#737373]"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#262626]">
              Check your mail
            </h1>
            <p className="mt-2 text-sm text-[#6b6b6b]">
              We sent an email to <span className="font-semibold text-[#404040]">{email}</span>. Remember to check your spam folder if you don&apos;t receive the email.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#f59d1a] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e48805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fcd39a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function CheckEmailPage() {
  return (
    <Suspense fallback={
      <main className="relative flex min-h-screen items-center justify-center bg-[#f7ecdd] px-4">
        <section className="relative z-10 w-full max-w-md rounded-3xl border border-[#f3e5d6] bg-white/95 p-8 shadow-[0_22px_60px_rgba(0,0,0,0.06)] sm:p-10">
          <div className="text-center text-[#6b6b6b]">Loading...</div>
        </section>
      </main>
    }>
      <CheckEmailContent />
    </Suspense>
  );
}

