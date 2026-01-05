"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "devices" | "forecast" | "efficiency">("overview");

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
              { label: "Home", icon: "home", href: "/home" },
              { label: "Devices", icon: "devices", href: "/devices" },
              { label: "Insights", icon: "insights", href: "/insights", active: true },
              { label: "Routine", icon: "routine", href: "/routines" },
              { label: "Budget", icon: "budget", href: "/budget" },
              { label: "Rooms", icon: "rooms", href: "/rooms" },
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
          <header className="flex h-16 items-center justify-between border-b border-[#eadfce] bg-[#fdf6eb] px-8">
            <h1 className="text-3xl font-bold text-[#262626]">Insights</h1>
            <div className="flex items-center gap-4">
              <select className="text-sm border border-[#e0d4c2] rounded-lg px-3 py-1.5 bg-white text-[#262626]">
                <option>Month</option>
                <option>Week</option>
                <option>Day</option>
              </select>
              <button
                type="button"
                aria-label="Notifications"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0d4c2] bg-white text-[#8a7b65] hover:bg-[#f5eee2] transition"
              >
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
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <div className="flex items-center gap-2 rounded-full border border-[#e0d4c2] bg-white px-3 py-1.5">
                <div className="h-6 w-6 rounded-full bg-[#f59d1a] flex items-center justify-center text-white text-xs font-semibold">
                  U
                </div>
                <span className="text-sm font-medium text-[#262626]">User</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-8">
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {[
                { id: "overview", label: "Overview" },
                { id: "devices", label: "Devices" },
                { id: "forecast", label: "Forecast" },
                { id: "efficiency", label: "Efficiency" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-[#f9e0b8] text-[#5b3b13]"
                      : "bg-white text-[#4b4b4b] hover:bg-[#f5eee2]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Total consumption */}
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#eadfce]">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/img/wb_incandescent.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-[#7b6b53]">Total consumption</span>
                    </div>
                    <p className="text-3xl font-semibold text-[#262626] mb-1">32.4</p>
                    <p className="text-xs text-[#f59d1a]">+8% vs last month</p>
                  </div>

                  {/* Total unit used */}
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#eadfce]">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/img/energy_savings_leaf.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-[#7b6b53]">Total unit used</span>
                    </div>
                    <p className="text-3xl font-semibold text-[#262626] mb-1">42.6</p>
                    <p className="text-xs text-[#f59d1a]">+2% vs last month</p>
                  </div>

                  {/* Total cost */}
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#eadfce]">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/img/energy_savings_leaf.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-[#7b6b53]">Total cost</span>
                    </div>
                    <p className="text-3xl font-semibold text-[#262626] mb-1">₦3,540</p>
                    <p className="text-xs text-[#f59d1a]">₦120 saved this month</p>
                  </div>

                  {/* CO2 Saved */}
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#eadfce]">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/img/wb_incandescent.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-[#7b6b53]">CO2 Saved</span>
                    </div>
                    <p className="text-3xl font-semibold text-[#262626] mb-1">12.5</p>
                    <p className="text-xs text-[#f59d1a]">2 trees</p>
                  </div>
                </div>

                {/* Graphs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Energy Trend Graph */}
                  <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                    <h3 className="text-sm font-semibold text-[#262626] mb-4">Energy trend</h3>
                    <div className="h-64 bg-[#f5eee2] rounded-lg flex items-center justify-center border border-[#eadfce]">
                      <p className="text-sm text-[#8a7b65]">Energy trend graph placeholder</p>
                    </div>
                    <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-[#f59d1a]" />
                        <span className="text-[#8a7b65]">Energy consumption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-purple-500" />
                        <span className="text-[#8a7b65]">Anomaly</span>
                      </div>
                    </div>
                  </div>

                  {/* Cost Savings Graph */}
                  <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                    <h3 className="text-sm font-semibold text-[#262626] mb-4">Cost savings</h3>
                    <div className="h-64 bg-[#f5eee2] rounded-lg flex items-center justify-center border border-[#eadfce]">
                      <p className="text-sm text-[#8a7b65]">Cost savings graph placeholder</p>
                    </div>
                  </div>
                </div>

                {/* Anomalies Detected */}
                <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                  <h3 className="text-sm font-semibold text-[#262626] mb-4">Anomalies detected</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between p-3 rounded-lg border border-[#eadfce] hover:bg-[#f5eee2] transition cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-medium text-[#262626]">
                            Tuesday, 7 - 9 pm
                          </p>
                          <p className="text-xs text-[#8a7b65]">
                            Ac consumption is 42% higher than usual
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#8a7b65]"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 rounded-lg bg-[#f9e0b8] px-4 py-2 text-sm font-medium text-[#5b3b13] hover:bg-[#f6d6a4] transition">
                    View all
                  </button>
                </div>
              </div>
            )}

            {activeTab === "forecast" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Predicted usage chart */}
                <div className="lg:col-span-2 rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#262626]">Predicted usage chart</h3>
                    <select className="text-sm border border-[#eadfce] rounded-lg px-3 py-1.5 bg-white text-[#262626]">
                      <option>Month</option>
                      <option>Week</option>
                      <option>Day</option>
                    </select>
                  </div>
                  <div className="h-64 bg-[#f5eee2] rounded-lg flex items-center justify-center border border-[#eadfce] mb-4">
                    <p className="text-sm text-[#8a7b65]">Predicted usage chart placeholder</p>
                  </div>
                  <div className="flex items-center justify-center gap-6 mb-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-0.5 bg-purple-500" />
                      <span className="text-[#8a7b65]">Consumption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-0.5 border-dashed border-[#f59d1a] border-t-2" />
                      <span className="text-[#8a7b65]">Projected</span>
                    </div>
                  </div>
                  <div className="border-t border-[#eadfce] pt-4">
                    <p className="text-xs text-[#7b6b53] mb-1">Predicted usage next month</p>
                    <p className="text-2xl font-semibold text-[#262626] mb-1">35 kWh</p>
                    <p className="text-sm text-[#8a7b65]">₦32,540</p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                  <h3 className="text-sm font-semibold text-[#262626] mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg border border-[#eadfce] bg-[#f5eee2]">
                      <p className="text-sm text-[#262626]">
                        Consider turning off idle devices between 12-3 PM.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-[#eadfce] bg-[#f5eee2]">
                      <p className="text-sm text-[#262626]">
                        Enable Eco Mode to reduce 10% load.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "efficiency" && (
              <div className="flex items-center justify-center">
                <div className="rounded-xl bg-white p-12 shadow-sm border border-[#eadfce] max-w-md">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                      <Image
                        src="/img/energy_savings_leaf.svg"
                        alt="CO2 Saved"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-4xl font-semibold text-[#262626] mb-2">12.5 kg</p>
                    <p className="text-sm text-[#7b6b53] mb-6">CO2 saved this month</p>
                    <div className="flex items-center gap-2 text-[#f59d1a]">
                      <Image
                        src="/img/wb_incandescent.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Equivalent to planting two trees</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "devices" && (
              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                <h3 className="text-sm font-semibold text-[#262626] mb-4">Device Insights</h3>
                <p className="text-sm text-[#8a7b65]">Device insights content coming soon...</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

