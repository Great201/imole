"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BudgetPage() {
  const [selectedBudgetId, setSelectedBudgetId] = useState<string | null>("1");
  const [showEditDrawer, setShowEditDrawer] = useState(false);
  const [showNewDrawer, setShowNewDrawer] = useState(false);

  const budgets = [
    {
      id: "1",
      name: "My budget",
      usedPercent: 72,
      goalKwh: 32,
      usedKwh: 21,
    },
    {
      id: "2",
      name: "My budget",
      usedPercent: 72,
      goalKwh: 32,
      usedKwh: 21,
    },
  ];

  const activeBudget = budgets.find((b) => b.id === selectedBudgetId) ?? budgets[0];

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
              { label: "Insights", icon: "insights", href: "/insights" },
              { label: "Routine", icon: "routine", href: "/routines" },
              { label: "Budget", icon: "budget", href: "/budget", active: true },
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
            <h1 className="text-3xl font-bold text-[#262626]">Budget</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowNewDrawer(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#f59d1a] px-4 py-2 text-sm font-medium text-white hover:bg-[#e48805] transition"
              >
                <span className="text-lg leading-none">+</span>
                <span>New budget</span>
              </button>
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
            {/* Budget cards row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {budgets.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => setSelectedBudgetId(budget.id)}
                  className={`w-full rounded-2xl bg-white px-6 py-5 text-left shadow-sm border transition ${
                    selectedBudgetId === budget.id
                      ? "border-[#f59d1a] shadow-md"
                      : "border-[#eadfce] hover:shadow-md"
                  }`}
                >
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-[#262626]">
                      {budget.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#8a7b65] mb-1">
                    <span>0 kWh</span>
                    <span>{budget.goalKwh} kWh</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-[#f1e5d2] overflow-hidden mb-1.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#3fbf3a] via-[#f9ce46] to-[#f5553d]"
                      style={{ width: `${budget.usedPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-center text-[#8a7b65]">
                    {budget.usedPercent}% used
                  </p>
                </button>
              ))}
            </div>

            {/* Selected budget detail */}
            {activeBudget && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-[#262626]">
                    {activeBudget.name}
                  </h2>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowEditDrawer(true)}
                      className="flex items-center gap-2 rounded-full border border-[#e0d4c2] bg-white px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] transition"
                    >
                      Edit
                    </button>
                    <button className="flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition">
                      Delete
                    </button>
                  </div>
                </div>

                {/* Target / Used cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#eadfce]">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/img/wb_incandescent.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-[#7b6b53]">Target</span>
                    </div>
                    <p className="text-3xl font-semibold text-[#262626]">
                      {activeBudget.goalKwh}
                      <span className="ml-1 text-sm font-normal text-[#7b6b53]">
                        kWh
                      </span>
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm border border-[#eadfce]">
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/img/energy_savings_leaf.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                      <span className="text-xs text-[#7b6b53]">Used</span>
                    </div>
                    <p className="text-3xl font-semibold text-[#262626]">
                      {activeBudget.usedKwh}
                      <span className="ml-1 text-sm font-normal text-[#7b6b53]">
                        kWh
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-[#7b6b53]">
                      {activeBudget.usedPercent}%
                    </p>
                  </div>
                </div>

                {/* Energy trend graph placeholder */}
                <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eadfce]">
                  <h3 className="text-sm font-semibold text-[#262626] mb-4">
                    Energy trend
                  </h3>
                  <div className="h-72 rounded-lg bg-[#f5eee2] border border-[#eadfce] flex items-center justify-center">
                    <p className="text-sm text-[#8a7b65]">
                      Energy trend graph placeholder
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Edit budget drawer */}
      {showEditDrawer && (
        <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl border-l border-[#eadfce]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#eadfce]">
            <h2 className="text-lg font-semibold text-[#262626]">Edit budget</h2>
            <button
              onClick={() => setShowEditDrawer(false)}
              className="text-[#8a7b65] hover:text-[#262626] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Budget name
              </label>
              <input
                type="text"
                defaultValue={activeBudget?.name}
                className="w-full border-b border-[#eadfce] pb-2 focus:outline-none focus:border-[#f59d1a] text-[#262626]"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#262626] mb-2">
                Choose your preferred unit
              </p>
              <div className="flex gap-6 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="unit" defaultChecked />
                  <span>kWh</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="unit" />
                  <span>Naira</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Set your goal
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  defaultValue={activeBudget?.goalKwh}
                  className="w-full rounded-lg border border-[#eadfce] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f59d1a]"
                />
                <span className="text-sm text-[#7b6b53]">kWh</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Period
              </label>
              <select className="w-full rounded-lg border border-[#eadfce] px-4 py-2 text-sm bg-white text-[#262626] focus:outline-none focus:ring-2 focus:ring-[#f59d1a]">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Notify me when budget gets to?
              </label>
              <select className="w-full rounded-lg border border-[#eadfce] px-4 py-2 text-sm bg-white text-[#262626] focus:outline-none focus:ring-2 focus:ring-[#f59d1a]">
                <option>80%</option>
                <option>90%</option>
                <option>100%</option>
              </select>
            </div>
          </div>

          <div className="mt-auto px-6 py-4 border-t border-[#eadfce]">
            <button className="w-full rounded-lg bg-[#f59d1a] px-4 py-3 text-sm font-medium text-white hover:bg-[#e48805] transition">
              Update
            </button>
          </div>
        </div>
      )}

      {/* New budget drawer */}
      {showNewDrawer && (
        <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl border-l border-[#eadfce]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#eadfce]">
            <h2 className="text-lg font-semibold text-[#262626]">New budget</h2>
            <button
              onClick={() => setShowNewDrawer(false)}
              className="text-[#8a7b65] hover:text-[#262626] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Budget name
              </label>
              <input
                type="text"
                placeholder="My budget"
                className="w-full border-b border-[#eadfce] pb-2 focus:outline-none focus:border-[#f59d1a] text-[#262626]"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#262626] mb-2">
                Choose your preferred unit
              </p>
              <div className="flex gap-6 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="new-unit" defaultChecked />
                  <span>kWh</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="new-unit" />
                  <span>Naira</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Set your goal
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  defaultValue={0}
                  className="w-full rounded-lg border border-[#eadfce] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f59d1a]"
                />
                <span className="text-sm text-[#7b6b53]">kWh</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Period
              </label>
              <select className="w-full rounded-lg border border-[#eadfce] px-4 py-2 text-sm bg-white text-[#262626] focus:outline-none focus:ring-2 focus:ring-[#f59d1a]">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#262626] mb-2">
                Notify me when budget gets to?
              </label>
              <select className="w-full rounded-lg border border-[#eadfce] px-4 py-2 text-sm bg-white text-[#262626] focus:outline-none focus:ring-2 focus:ring-[#f59d1a]">
                <option>80%</option>
                <option>90%</option>
                <option>100%</option>
              </select>
            </div>
          </div>

          <div className="mt-auto px-6 py-4 border-t border-[#eadfce]">
            <button className="w-full rounded-lg bg-[#f59d1a] px-4 py-3 text-sm font-medium text-white hover:bg-[#e48805] transition">
              Save
            </button>
          </div>
        </div>
      )}
    </main>
  );
}


