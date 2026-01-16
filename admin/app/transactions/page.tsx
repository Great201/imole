"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminTransactions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", icon: "home", href: "/home" },
    { label: "Devices", icon: "devices", href: "/devices" },
    { label: "Customers", icon: "members", href: "/customers" },
    { label: "Transactions", icon: "assignment", href: "/transactions", active: true },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins" },
    { label: "Settings", icon: "settings", href: "/settings" },
  ];

  const transactionsData = [
    {
      description: "Electricity unit",
      amount: "₦20,000",
      customer: "Jon doe",
      date: "Aug 23, 2025 @ 09:23am",
      status: "Successful",
    },
    {
      description: "Pro subscription",
      amount: "₦20,000",
      customer: "Jon doe",
      date: "Aug 23, 2025 @ 09:23am",
      status: "Successful",
    },
    {
      description: "Electricity unit",
      amount: "₦20,000",
      customer: "Jon doe",
      date: "Aug 23, 2025 @ 09:23am",
      status: "Successful",
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
            <h1 className="text-lg font-semibold text-[#262626]">Transactions</h1>
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
          <h2 className="text-2xl font-bold text-[#262626] mb-6">Transactions</h2>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-full bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
              Type
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
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-full bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
              Date
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
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#eadfce]">
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Description
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Amount
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Customer
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Date
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eadfce]">
                  {transactionsData.map((transaction, index) => (
                    <tr key={index} className="hover:bg-[#fafafa] transition">
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-[#262626]">
                        {transaction.description}
                      </td>
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-[#262626]">
                        {transaction.amount}
                      </td>
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                        {transaction.customer}
                      </td>
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-sm text-[#262626]">{transaction.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
