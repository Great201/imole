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
      <section className="relative min-h-[70vh] md:min-h-[70vh] lg:min-h-[90vh] overflow-visible pb-0">
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

        <div className="relative h-full w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* Content container - positioned in upper portion */}
          <div className="flex-1 flex flex-col justify-center items-center pt-16 sm:pt-20 md:pt-24 lg:pt-14 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
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
            className="flex w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] -mt-24 sm:mt-24 md:-mt-20 lg:-mt-36 mx-auto"
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

      <section className="flex bg-white px-8 py-12">
        <div className="flex flex-col w-full w-80% py-8">
          {/* Pill label so to speak */}
          <div className="flex flex-col mb-4 px-4 br-4 rounded-full" style={{ width: "fit-content", height: "24px", backgroundColor: "#FEF0DC" }}>
            <span className="flex text-[#262626]" style={{ fontSize: "12px", textAlign: "left", margin: "auto" }}>THE PROBLEM</span>
          </div>

          <span className="text-[#262626] leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight" style={{ textAlign: "left", marginLeft: "auto", marginRight: "auto" }}>Many households and businesses have little or no visibility into their energy usage. This often leads to high energy consumption and bills.</span>
        </div>
      </section>
    </main>
  );
}
