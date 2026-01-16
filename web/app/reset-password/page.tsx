"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook up real password reset API
    // For now, navigate to check-email page with email in query params
    router.push(`/reset-password/check-email?email=${encodeURIComponent(email)}`);
  };

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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#262626]">
              Reset Password
            </h1>
            <p className="mt-2 text-sm text-[#6b6b6b]">
              Enter the email address you registered with and we will send you a link to reset your password.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#404040]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#e4e4e4] bg-white px-4 py-3.5 text-sm text-[#262626] outline-none transition focus:border-[#f59d1a] focus:ring-2 focus:ring-[#fcd39a]"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f59d1a] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e48805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fcd39a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Send password reset link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-[#a3a3a3] hover:text-[#737373]"
          >
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}

