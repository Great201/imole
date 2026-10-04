"use client";

// The authenticated app frame: window chrome + sidebar + route guard.
//
// The guard lives here rather than in middleware.ts because the token is in
// localStorage, which the edge runtime cannot read. Mirroring it into a cookie
// just so middleware could see it would create a second source of truth for no
// benefit — no server rendering depends on auth.
//
// Every signed-in page already needs this frame, and /login and
// /reset-password/* don't use it, so they stay public by construction.

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { isAuthed } from "./auth";

type NavItem = { label: string; icon: string; href: string };

const NAV: readonly NavItem[] = [
  { label: "Home", icon: "home", href: "/home" },
  { label: "Devices", icon: "devices", href: "/devices" },
  { label: "Insights", icon: "insights", href: "/insights" },
  { label: "Routine", icon: "routine", href: "/routines" },
  { label: "Budget", icon: "budget", href: "/budget" },
  { label: "Rooms", icon: "rooms", href: "/rooms" },
  { label: "Members", icon: "members", href: "/members" },
  { label: "Settings", icon: "settings", href: "/settings" },
];

/**
 * Active state is derived from the URL, not passed in. The 9 copies of this
 * sidebar differed *only* in which item carried `active: true`, so a prop would
 * just reintroduce the thing that drifts. Prefix match so /devices/<id> keeps
 * "Devices" lit.
 */
function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Sidebar() {
  const pathname = usePathname() ?? "";
  return (
    <aside className="flex w-64 flex-col border-r border-[#eadfce] bg-[#fff7ea]">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Imólè" width={110} height={32} className="h-7 w-auto" />
        </Link>
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-3 text-sm">
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className={`flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-left transition ${
              isActive(pathname, item.href)
                ? "bg-[#f9e0b8] font-semibold text-[#5b3b13]"
                : "text-[#4b4b4b] hover:bg-[#f6ead6]"
            }`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent">
              <Image
                src={`/img/${item.icon}.svg`}
                alt={item.label}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

/**
 * Wraps a signed-in page. `children` are rendered as siblings of the sidebar
 * inside the flex row — the page supplies its own `<section>`, so per-page
 * backgrounds and the modals that sit *beside* the section (not inside it) keep
 * working unchanged.
 *
 * `className` overrides the <main> background: most pages use the cream ground,
 * /devices and /devices/[id] are white.
 */
/**
 * localStorage is state React doesn't own, so it's read through
 * useSyncExternalStore rather than copied into useState inside an effect.
 * The server snapshot is always `false`, so the first paint renders nothing and
 * hydration can't mismatch. Subscribing to `storage` means signing out in one
 * tab bounces the others too.
 */
function subscribeToSession(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

export function Shell({
  children,
  className = "bg-[#f5eee2] text-[#262626]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const authed = useSyncExternalStore(
    subscribeToSession,
    () => isAuthed(),
    () => false,
  );

  useEffect(() => {
    // Re-read rather than trusting `authed`: during hydration that still holds
    // the server snapshot (`false`), so acting on it would bounce a signed-in
    // user. Effects only run client-side, where isAuthed() is accurate.
    if (!isAuthed()) router.replace("/login");
  }, [authed, router]);

  // Render nothing until a token is seen, so protected content never flashes
  // before the redirect.
  if (!authed) return null;

  return (
    <main className={`min-h-screen ${className}`}>
      <div className="flex h-screen">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
