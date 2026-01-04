import Image from "next/image";
import Link from "next/link";

export default function HomeDashboard() {
  return (
    <main className="min-h-screen bg-[#f5eee2] text-[#262626]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="flex w-64 flex-col border-r border-[#eadfce] bg-[#fff7ea]">
          <div className="flex h-16 items-center px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Imólè"
                width={110}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
          </div>

          <nav className="mt-4 flex-1 space-y-1 px-3 text-sm">
            {[
              { label: "Home", icon: "home", href: "/home", active: true },
              { label: "Devices", icon: "devices", href: "/home/devices" },
              { label: "Insights", icon: "insights", href: "/home/insights" },
              { label: "Routine", icon: "routine", href: "/home/routine" },
              { label: "Budget", icon: "budget", href: "/home/budget" },
              { label: "Rooms", icon: "rooms", href: "/home/rooms" },
              { label: "Members", icon: "members", href: "/home/members" },
              { label: "Settings", icon: "settings", href: "/home/settings" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={`flex w-full items-center gap-3 rounded-full px-3 py-2.5 text-left transition ${
                  item.active
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

        {/* Main content */}
        <section className="flex-1 overflow-y-auto">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-end border-b border-[#eadfce] bg-[#fdf6eb] px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Notifications"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0d4c2] bg-white text-[#8a7b65]"
              >
                !
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#4b4b4b] shadow-sm"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f3d8b2] text-xs font-semibold">
                  A
                </span>
                <span>Alex</span>
              </button>
            </div>
          </header>

          {/* Content area */}
          <div className="px-8 pb-10 pt-8">
            <h1 className="text-2xl font-semibold tracking-tight text-[#262626]">
              My home
            </h1>

            {/* Top KPI grid */}
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Available unit */}
              <div className="rounded-2xl bg-[#fefaf3] p-4 shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#7b6b53]">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f59d1a]" />
                    Available unit
                  </span>
                  <button className="text-[11px] font-medium text-[#a07b3a]">
                    Prepaid meter &gt;
                  </button>
                </div>
                <p className="mt-4 text-3xl font-semibold text-[#262626]">
                  46.74
                </p>
                <p className="mt-1 text-xs text-[#7b6b53]">23.5 kWh</p>
              </div>

              {/* Current consumption */}
              <div className="rounded-2xl bg-[#fefaf3] p-4 shadow-sm">
                <p className="text-xs text-[#7b6b53]">Current consumption</p>
                <p className="mt-4 text-3xl font-semibold text-[#262626]">
                  1.2
                  <span className="ml-1 text-sm font-normal text-[#7b6b53]">
                    kWh
                  </span>
                </p>
              </div>

              {/* Est. Days left */}
              <div className="rounded-2xl bg-[#fefaf3] p-4 shadow-sm">
                <p className="text-xs text-[#7b6b53]">Est. Days left</p>
                <p className="mt-4 text-3xl font-semibold text-[#262626]">
                  13
                  <span className="ml-1 text-sm font-normal text-[#7b6b53]">
                    days
                  </span>
                </p>
              </div>

              {/* CO2 saved */}
              <div className="rounded-2xl bg-[#fefaf3] p-4 shadow-sm">
                <p className="text-xs text-[#7b6b53]">Energy used</p>
                <p className="mt-4 text-2xl font-semibold text-[#262626]">
                  0.173 kW
                </p>
                <p className="mt-1 text-xs text-[#7b6b53]">₦12.80 @ ₦2/kWh</p>
              </div>

              <div className="rounded-2xl bg-[#fefaf3] p-4 shadow-sm">
                <p className="text-xs text-[#7b6b53]">Cost saved today</p>
                <p className="mt-4 text-3xl font-semibold text-[#262626]">
                ₦12,500
                </p>
              </div>
              <div className="rounded-2xl bg-[#fefaf3] p-4 shadow-sm">
                <p className="text-xs text-[#7b6b53]">CO2 saved today</p>
                <p className="mt-4 text-3xl font-semibold text-[#262626]">
                  2.1
                  <span className="ml-1 text-sm font-normal text-[#7b6b53]">
                    kg
                  </span>
                </p>
              </div>
            </div>

            

            {/* Active devices */}
            <section className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#262626]">
                  Active devices
                </h2>
                <button className="text-xs font-medium text-[#a07b3a]">
                  All devices
                </button>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {[
                  { name: "Fridge", power: "0.9kw" },
                  { name: "Room AC", power: "0.9kw" },
                  { name: "Standing fan", power: "0.9kw" },
                ].map((device) => (
                  <div
                    key={device.name}
                    className="flex items-center justify-between rounded-2xl bg-[#f6d6a4] px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/70 text-xs font-semibold text-[#a07020]">
                        {/* icon placeholder */}
                        {device.name[0]}
                      </div>
                      <div className="text-xs">
                        <p className="font-medium text-[#262626]">
                          {device.name}
                        </p>
                        <p className="text-[11px] text-[#7b6b53]">On</p>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-[#7b6b53]">
                      {device.power}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick actions */}
            <section className="mt-8">
              <h2 className="text-sm font-semibold text-[#262626]">
                Quick actions
              </h2>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {["Budget", "Routine", "Rooms"].map((action) => (
                  <button
                    key={action}
                    type="button"
                    className="flex items-center justify-between rounded-2xl bg-[#fdf6eb] px-4 py-3 text-left text-xs font-medium text-[#262626] shadow-sm hover:bg-[#f6ebdd]"
                  >
                    <span>{action}</span>
                    <span className="text-[#c2a57b]">&gt;</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}


