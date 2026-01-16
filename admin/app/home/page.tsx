"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", icon: "home", href: "/home", active: true },
    { label: "Devices", icon: "devices", href: "/devices" },
    { label: "Customers", icon: "members", href: "/customers" },
    { label: "Transactions", icon: "assignment", href: "/transactions" },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins" },
    { label: "Settings", icon: "settings", href: "/settings" },
  ];

  const kpiCards = [
    {
      label: "Tot. Energy consumption",
      value: "15,000",
      unit: "kWh",
      change: "+18% vs last week",
      changePositive: true,
    },
    {
      label: "Tot. CO2 saved",
      value: "1,234",
      unit: "Kg/tones",
      change: "+1% vs last week",
      changePositive: true,
    },
    {
      label: "Tot. devices",
      value: "2,480",
      change: "+54 vs last week",
      changePositive: true,
    },
    {
      label: "Tot. Users",
      value: "480",
      change: "+54 vs last week",
      changePositive: true,
    },
    {
      label: "Tot. CO2 saved",
      value: "1,234",
      unit: "Kg/tones",
      change: "+1% vs last week",
      changePositive: true,
    },
    {
      label: "Tot. devices",
      value: "2,480",
      change: "+54 vs last week",
      changePositive: true,
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5eee2]">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1a1a1a] flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/logo.png"
              alt="Imólè"
              width={100}
              height={30}
              className="h-7 w-auto"
            />
          </div>
          <p className="text-white text-xs font-medium uppercase tracking-wider">
            ADMIN
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href || "#"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                item.active
                  ? "bg-[#f59d1a] text-white font-medium"
                  : "text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
              }`}
            >
              <Image
                src={`/img/${item.icon}.svg`}
                alt={item.label}
                width={20}
                height={20}
                className="w-5 h-5 brightness-0 invert"
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-[#eadfce] flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#f5eee2] transition"
              aria-label="Toggle menu"
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
                className="text-[#262626]"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-[#262626]">Overview</h1>
          </div>
          <div className="flex items-center gap-4">
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
            <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-purple-400 to-green-400"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[#262626] mb-4 lg:mb-6">Overview</h2>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kpiCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#eadfce] p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-6 h-6 text-[#f59d1a]">
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
                      className="w-6 h-6"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-[#8a7b65] mb-2">{card.label}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#262626]">
                    {card.value}
                  </span>
                  {card.unit && (
                    <span className="text-sm text-[#8a7b65]">{card.unit}</span>
                  )}
                </div>
                <p
                  className={`text-xs font-medium ${
                    card.changePositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {card.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
