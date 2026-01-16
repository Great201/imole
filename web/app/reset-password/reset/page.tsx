"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPasswordFormPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // TODO: hook up real password reset API
    // For now, navigate to success page
    router.push("/reset-password/success");
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0e6ff]">
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
                  className="text-[#a855f7]"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#262626]">
              Reset your password
            </h1>
            <p className="mt-2 text-sm text-[#6b6b6b]">
              This will reset your password and it cannot be undone.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="newPassword"
              className="text-sm font-medium text-[#404040]"
            >
              New password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-xl border border-[#e4e4e4] bg-white px-4 py-3.5 pr-11 text-sm text-[#262626] outline-none transition focus:border-[#f59d1a] focus:ring-2 focus:ring-[#fcd39a]"
                required
              />
              <button
                type="button"
                aria-label={showNewPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#a3a3a3] hover:text-[#737373]"
                onClick={() => setShowNewPassword((prev) => !prev)}
              >
                <EyeIcon crossed={!showNewPassword} />
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-[#404040]"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-[#e4e4e4] bg-white px-4 py-3.5 pr-11 text-sm text-[#262626] outline-none transition focus:border-[#f59d1a] focus:ring-2 focus:ring-[#fcd39a]"
                required
              />
              <button
                type="button"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#a3a3a3] hover:text-[#737373]"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <EyeIcon crossed={!showConfirmPassword} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f59d1a] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e48805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fcd39a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Confirm
          </button>
        </form>
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

