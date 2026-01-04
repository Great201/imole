import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header Section */}
      <header className="pt-4 px-4 sm:pt-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-full border border-[#e5e5e5] bg-white px-3 py-2.5 shadow-sm sm:px-4 sm:py-3 md:px-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Imolè"
              width={72}
              height={30}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/login"
              className="flex items-center gap-1 rounded-full border border-[#e4e4e4] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#f59d1a] transition hover:bg-[#faf7f3] sm:gap-1.5 sm:px-3 sm:text-xs"
            >
              Log in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-3.5 sm:h-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-1 rounded-full bg-[#f59d1a] px-2.5 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#e48805] sm:gap-1.5 sm:px-3 sm:text-xs"
            >
              <span className="hidden sm:inline">Get started</span>
              <span className="sm:hidden">Start</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-3.5 sm:h-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-visible">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(245, 157, 26, 0.05) 40px,
              rgba(245, 157, 26, 0.05) 80px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(245, 157, 26, 0.05) 40px,
              rgba(245, 157, 26, 0.05) 80px
            )`,
          }}
        />

        <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Content container - positioned in upper portion */}
          <div className="flex flex-col items-center pt-20 sm:pt-24 lg:pt-28 pb-28 sm:pb-36 lg:pb-44">
            <div className="mx-auto max-w-4xl text-center w-full">
              {/* Main Headline */}
              <h1 className="text-3xl font-bold tracking-tight text-[#262626] leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Track & manage your energy consumption -{" "}
                <span className="relative inline-block">
                  <span className="text-[#f59d1a]">Intelligently</span>
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#404040] sm:mt-6 sm:text-lg sm:leading-8 md:text-xl md:leading-8">
                Imólè gives you real-time insight into your electricity consumption
                and helps you reduce waste, cut costs, and live more sustainably -
                at home or in your business.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 md:gap-6">
              <Link
                href="#"
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#262626] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#383838] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Google Play Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  {/* Apple App Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Download app</span>
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 rounded-full bg-[#f59d1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e48805] sm:px-6 sm:py-3.5 sm:text-base"
              >
                <span className="whitespace-nowrap">Create your account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-[#0d1a1a]">


        <div
          className="flex w-full"
          style={{
            backgroundImage: 'url("/img/sec2bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] mt-16 lg:-mt-36 mx-auto"
          >
            <Image
              src="/img/mockup-center-phone.png"
              alt="Imólè app interface showing energy consumption tracking"
              width={420}
              height={840}
              className="w-full h-auto drop-shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
              priority
              quality={95}
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white px-4 py-28 sm:px-6 sm:py-28 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-5xl">
          {/* Pill label */}
          <div className="inline-flex items-center rounded-full bg-[#FEF0DC] px-4 py-1 mb-6">
            <span className="text-xs font-medium tracking-[0.12em] text-[#7A5A2F] uppercase">
              THE PROBLEM
            </span>
          </div>

          {/* Problem copy */}
          <p className="text-left text-[#262626] text-2xl leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:text-[40px] lg:leading-[1.25] font-semibold">
            Many households and businesses have little or no visibility into
            their energy usage. This often leads to high energy consumption and
            bills.
          </p>
        </div>
      </section>

      {/* Introducing Imole Section */}
      <section className="relative bg-[#faf2e6] px-4 pt-20 pb-0 sm:px-6 sm:pt-24 sm:pb-0 lg:px-8 lg:pt-28 lg:pb-0">
        <div className="mx-auto max-w-5xl">
          {/* Logo + pill */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md shadow-black/5">
              <Image
                src="/circle_logo.png"
                alt="Imólè logo"
                width={48}
                height={48}
                className="h-10 w-10"
              />
            </div>
            <div className="inline-flex items-center rounded-full bg-white px-4 py-1 text-[10px] font-medium tracking-[0.16em] text-[#7A5A2F] uppercase shadow-sm shadow-black/5">
              INTRODUCING IMÓLÈ
            </div>
          </div>

          {/* Heading & copy */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#262626] leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:text-[40px] lg:leading-[1.25]">
              <span className="text-[#f59d1a] font-semibold">Imole</span>{" "}
              gives you full control over your energy consumption so you can cut
              costs not comfort.
            </h2>
            <p className="mt-4 text-sm text-[#404040] sm:mt-5 sm:text-base md:text-lg">
              Imole helps you save and manage your energy consumption by
              offering personalized insights to help you track and automate
              where your energy goes.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 md:gap-6">
            <Link
              href="#"
              className="flex items-center justify-center gap-2.5 rounded-full bg-[#262626] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#383838] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Google Play Store Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                {/* Apple App Store Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                </svg>
              </div>
              <span className="whitespace-nowrap">Download app</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 rounded-full bg-[#f59d1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e48805] sm:px-6 sm:py-3.5 sm:text-base"
            >
              <span className="whitespace-nowrap">Get started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-5 sm:h-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Phone visual */}
          <div className="mt-10 sm:mt-12 lg:mt-16 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/img/mockup-2.png"
                alt="Imólè app showing energy dashboard"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Pill + heading */}
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-[#F4E9DA] px-4 py-1 text-[10px] font-medium tracking-[0.16em] text-[#7A5A2F] uppercase">
              Features
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[#262626] leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:text-[40px] lg:leading-[1.25]">
              Imole puts power back in your hands while helping you save cost
            </h2>
          </div>

          {/* Content grid */}
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left - copy & bullets */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#262626] sm:text-2xl">
                  Real-time energy monitoring at your fingertips.
                </h3>
                <p className="mt-3 text-sm text-[#404040] sm:text-base">
                  Imole gives you real-time insights into your energy
                  consumption, helping you make smarter decisions.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Monitor energy consumption",
                  "See which appliances use more energy",
                  "Make smarter decisions with real time insights",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 border-b border-[#f0e4d6] pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f59d1a] text-white text-xs">
                      ✓
                    </span>
                    <p className="text-sm text-[#262626] sm:text-base">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#262626] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#383838] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Google Play Store Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    {/* Apple App Store Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="sm:w-6 sm:h-6"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                    </svg>
                  </div>
                  <span className="whitespace-nowrap">Download app</span>
                </Link>
              </div>
            </div>

            {/* Right - mockup card */}
            <div className="flex justify-center">
                <Image
                  src="/img/insights-mockup.png"
                  alt="Imólè insights screen"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
      </section>

      {/* Energy savings on autopilot Section */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="flex justify-center">
              <Image
                src="/img/budget-mockup.png"
                alt="Imólè energy budget screen"
                width={600}
                height={700}
                className="w-full h-auto"
                quality={95}
                sizes="(max-width: 768px) 100vw, 600px"
              />
          </div>

          {/* Right - copy, bullets, button */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#262626] leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug">
                Energy savings on autopilot
              </h2>
              <p className="mt-3 text-sm text-[#404040] sm:text-base">
                Imole puts you back in control by allowing you automate your
                devices so they only turn on when needed.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Automatically turn on and off devices",
                "Get instant alerts on excess power usage.",
                "Receive energy saving recommendations",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 border-b border-[#f0e4d6] pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f59d1a] text-white text-xs">
                    ✓
                  </span>
                  <p className="text-sm text-[#262626] sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#262626] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#383838] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Google Play Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  {/* Apple App Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Download app</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Control how your energy is consumed Section */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - copy, bullets, button */}
          <div className="order-2 space-y-6 lg:order-1">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#262626] leading-snug sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug">
                Control how your energy is consumed.
              </h2>
              <p className="mt-3 text-sm text-[#404040] sm:text-base">
                Drill down into room-by-room or appliance-level data to stop
                energy waste and cut costs effortlessly.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Monitor individual appliance usage.",
                "Set energy budgets and usage limits",
                "Receive alerts when limits are exceeded.",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 border-b border-[#f0e4d6] pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f59d1a] text-white text-xs">
                    ✓
                  </span>
                  <p className="text-sm text-[#262626] sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#262626] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#383838] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Google Play Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  {/* Apple App Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Download app</span>
              </Link>
            </div>
          </div>

          {/* Right - mockup with pink background card */}
          <div className="order-1 flex justify-center lg:order-2">
              <Image
                src="/img/devices-mockup.png"
                alt="Imólè devices screen"
                width={600}
                height={700}
                className="w-full h-auto"
                quality={95}
                sizes="(max-width: 768px) 100vw, 600px"
              />
          </div>
        </div>
      </section>

      {/* Cross-platform Section */}
      <section className="relative overflow-hidden bg-[#15100b] px-4 pt-20 pb-0 sm:px-6 sm:pt-24 sm:pb-0 lg:px-8 lg:pt-28 lg:pb-0">
        {/* Textured background image */}
        <div className="absolute inset-0">
          <Image
            src="/img/cpbg.png"
            alt=""
            fill
            className="object-cover opacity-80"
            priority
            quality={80}
          />
        </div>

        {/* Gradient overlay for vignette effect */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0)_0,_rgba(0,0,0,0.8)_65%,_rgba(0,0,0,1)_100%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center">
          {/* Pill label */}
          <div className="inline-flex items-center rounded-full bg-[#2b2118] px-4 py-1 text-[10px] font-medium tracking-[0.16em] text-[#f3d9ac] uppercase">
            Cross platform
          </div>

          {/* Heading & copy */}
          <div className="mt-6 text-center text-white">
            <h2 className="text-3xl font-semibold tracking-tight leading-snug sm:text-4xl md:text-5xl">
              Available on all your devices
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-[#f5e8d4] sm:text-base">
              Imole delivers automated, data-driven, and user-centric energy
              management.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f59d1a] px-6 py-3 text-sm font-semibold text-[#1e1205] shadow-lg shadow-black/40 transition hover:bg-[#e48805] sm:px-7 sm:py-3.5 sm:text-base"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Google Play Store Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                {/* Apple App Store Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                </svg>
              </div>
              <span className="whitespace-nowrap">Download app</span>
            </Link>
          </div>

          {/* Cross-platform mockup */}
          <div className="relative mt-16 w-full max-w-5xl">
            <Image
              src="/img/cp-mockup.png"
              alt="Imólè on mobile and desktop devices"
              width={1200}
              height={700}
              className="w-full h-auto"
              quality={95}
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Use cases Section */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full bg-[#F4E9DA] px-4 py-1 text-[10px] font-medium tracking-[0.16em] text-[#7A5A2F] uppercase">
              Use case
            </div>
          </div>

          {/* Heading & copy */}
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262626] leading-snug sm:text-4xl md:text-5xl">
              Smarter energy for everyone
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-sm text-[#404040] sm:text-base">
              Imólè empowers both homes and businesses to track, manage, and optimize
              their electricity consumption in real time while saving money and
              protecting the planet.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* For homes */}
            <article className="relative overflow-hidden rounded-[32px] bg-black/5 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
                <Image
                  src="/img/homes.png"
                  alt="Family at home managing energy usage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10 text-left text-white">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/80">
                    For homes
                  </p>
                  <p className="mt-2 text-lg font-semibold sm:text-xl leading-snug">
                    Take control of your home&apos;s electricity and cut down your
                    monthly bills effortlessly.
                  </p>
                </div>
              </div>
            </article>

            {/* For businesses */}
            <article className="relative overflow-hidden rounded-[32px] bg-black/5 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
                <Image
                  src="/img/business.png"
                  alt="Modern office environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10 text-left text-white">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/80">
                    For businesses
                  </p>
                  <p className="mt-2 text-lg font-semibold sm:text-xl leading-snug">
                    Optimize energy usage, reduce operational costs, and boost
                    sustainability with real-time insights.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA + Footer Section */}
      <section className="bg-[#15100b] text-white">
        {/* Final CTA */}
        <div className="px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl md:text-5xl">
              Take control of your <span className="text-[#f59d1a]">energy</span>.
              <br />
              Save more. Live smarter.
            </h2>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f59d1a] px-6 py-3 text-sm font-semibold text-[#1e1205] shadow-lg shadow-black/40 transition hover:bg-[#e48805] sm:px-7 sm:py-3.5 sm:text-base"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Google Play Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  {/* Apple App Store Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.34 13,3.5Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Download app</span>
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#15100b] shadow-lg shadow-black/40 transition hover:bg-[#f5f5f5] sm:px-7 sm:py-3.5 sm:text-base"
              >
                <span className="whitespace-nowrap">Create account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#2a2218]" />

        {/* Footer */}
        <footer className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              {/* Brand + socials */}
              <div className="space-y-4">
                <Link href="/" className="inline-flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Imólè"
                    width={100}
                    height={32}
                    className="h-7 w-auto"
                  />
                </Link>
                <div className="flex items-center gap-3 text-white/70">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X (Twitter)"
                    className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Image
                      src="/img/x.svg"
                      alt="X (Twitter) logo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch us on YouTube"
                    className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Image
                      src="/img/youtube.svg"
                      alt="YouTube logo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Image
                      src="/img/instagram.svg"
                      alt="Instagram logo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                    className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Image
                      src="/img/linkedin.svg"
                      alt="LinkedIn logo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>

              {/* Link columns */}
              <div className="grid flex-1 gap-8 text-sm text-white/80 sm:grid-cols-3">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        href="/monitor-energy"
                        aria-label="Learn how Imólè helps you monitor energy"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Monitor energy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/save-energy"
                        aria-label="Learn how to save energy with Imólè"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Save energy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cross-platform"
                        aria-label="See Imólè cross platform features"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Cross platform
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/use-cases"
                        aria-label="Explore Imólè use cases"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Use case
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        href="/terms"
                        aria-label="Read Imólè terms and conditions"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        aria-label="Read Imólè privacy policy"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    Help
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        href="/contact"
                        aria-label="Contact Imólè support"
                        className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f59d1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100b]"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[#2a2218] pt-6 text-center text-xs text-white/50">
              © {new Date().getFullYear()} Imole. All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
