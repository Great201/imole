"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook up real authentication
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
            <h1 className="text-2xl font-semibold tracking-tight text-[#262626]">
              Log in
            </h1>
            <p className="mt-1 text-sm text-[#6b6b6b]">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                className="font-medium text-[#f59d1a] hover:text-[#e48805]"
              >
                Sign up
              </Link>
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
              className="w-full rounded-xl border border-[#e4e4e4] bg-white px-4 py-3.5 text-sm text-[#262626] outline-none transition focus:border-[#f59d1a] focus:ring-2 focus:ring-[#fcd39a]"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#404040]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-[#e4e4e4] bg-white px-4 py-3.5 pr-11 text-sm text-[#262626] outline-none transition focus:border-[#f59d1a] focus:ring-2 focus:ring-[#fcd39a]"
                required
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#a3a3a3] hover:text-[#737373]"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <EyeIcon crossed={!showPassword} />
              </button>
            </div>
            <Link
              href="/reset-password"
              className="block text-xs text-right font-medium text-[#a3a3a3] hover:text-[#737373]"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f59d1a] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e48805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fcd39a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Continue
          </button>
        </form>

        <div className="my-6 flex items-center gap-4 text-xs text-[#a3a3a3]">
          <div className="h-px flex-1 bg-[#ece4da]" />
          <span>OR</span>
          <div className="h-px flex-1 bg-[#ece4da]" />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#e4e4e4] bg-white px-4 py-3 text-sm font-medium text-[#262626] transition hover:bg-[#faf7f3]"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#e4e4e4] bg-white px-4 py-3 text-sm font-medium text-[#262626] transition hover:bg-[#faf7f3]"
          >
            <AppleIcon />
            <span>Continue with Apple</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function EyeIcon({ crossed }: { crossed: boolean }) {
  return (
    <span className="relative inline-flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 12S4.5 5.5 12 5.5 22.5 12 22.5 12 19.5 18.5 12 18.5 1.5 12 1.5 12Z" />
        <circle cx="12" cy="12" r="3.25" />
      </svg>
      {crossed && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="h-[1.5px] w-6 rotate-45 rounded-full bg-current" />
        </span>
      )}
    </span>
  );
}

function GoogleIcon() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e4e4e4] bg-white text-[11px] font-semibold text-[#4285F4]">
      G
    </span>
  );
}

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-black"
    >
      <path d="M17.27 12.29c.01 1.98 1.75 2.64 1.77 2.65-.01.05-.28.96-.92 1.9-.55.81-1.12 1.62-2.02 1.64-.88.02-1.16-.53-2.17-.53-1.01 0-1.33.51-2.17.55-.87.03-1.53-.88-2.08-1.69-1.13-1.66-2-4.69-1.04-6.74.72-1.5 2.01-2.45 3.41-2.48.86-.02 1.68.58 2.17.58.49 0 1.5-.72 2.52-.61.43.02 1.64.17 2.42 1.62-.06.04-1.44.84-1.44 2.32Zm-1.64-4.52c.46-.56.77-1.35.69-2.13-.67.03-1.49.45-1.97 1.01-.43.5-.8 1.31-.7 2.09.74.06 1.51-.38 1.98-.97Z" />
    </svg>
  );
}


