"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminCustomers() {
  const [activeTab, setActiveTab] = useState<"individuals" | "organizations">("individuals");
  const navItems = [
    { label: "Home", icon: "home", href: "/home" },
    { label: "Devices", icon: "devices", href: "/devices" },
    { label: "Customers", icon: "members", href: "/customers", active: true },
    { label: "Transactions", icon: "assignment", href: "/transactions" },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins" },
    { label: "Settings", icon: "settings", href: "/settings" },
  ];

  const individualsData = [
    {
      name: "Chijioke Nwosu",
      avatar: "👤",
      phone: "+234 801 234 5678",
      email: "chijioke@example.com",
      devices: "4",
      subscription: "Free",
      subscriptionColor: "bg-gray-100 text-gray-700",
      joined: "Aug 23, 2025",
      status: "Active",
    },
    {
      name: "Adaobi Okafor",
      avatar: "👩",
      phone: "+234 802 345 6789",
      email: "adaobi@example.com",
      devices: "4",
      subscription: "Premium",
      subscriptionColor: "bg-purple-100 text-purple-700",
      joined: "Aug 23, 2025",
      status: "Active",
    },
    {
      name: "Emeka Ibe",
      avatar: "👤",
      phone: "+234 803 456 7890",
      email: "emeka@example.com",
      devices: "4",
      subscription: "Premium",
      subscriptionColor: "bg-purple-100 text-purple-700",
      joined: "Aug 23, 2025",
      status: "Active",
    },
  ];

  const organizationsData = [
    {
      orgName: "Vesti Inc",
      logo: "Vesti",
      logoColor: "bg-green-600",
      phone: "+234 804 567 8901",
      email: "contact@vesti.com",
      branch: "2",
      device: "4",
      subscription: "Premium",
      subscriptionColor: "bg-purple-100 text-purple-700",
      joined: "Aug 23, 2025",
      status: "Active",
    },
    {
      orgName: "Vesti Inc",
      logo: "Vesti",
      logoColor: "bg-green-600",
      phone: "+234 804 567 8901",
      email: "contact@vesti.com",
      branch: "2",
      device: "4",
      subscription: "Premium",
      subscriptionColor: "bg-purple-100 text-purple-700",
      joined: "Aug 23, 2025",
      status: "Active",
    },
    {
      orgName: "Vesti Inc",
      logo: "Vesti",
      logoColor: "bg-green-600",
      phone: "+234 804 567 8901",
      email: "contact@vesti.com",
      branch: "2",
      device: "4",
      subscription: "Premium",
      subscriptionColor: "bg-purple-100 text-purple-700",
      joined: "Aug 23, 2025",
      status: "Active",
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5eee2]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] flex flex-col">
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
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-[#eadfce] flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-[#262626]">Customers</h1>
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
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#262626]">Customers</h2>
            <button className="flex items-center gap-2 bg-[#f59d1a] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e48805] transition">
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
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add customer
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-[#eadfce]">
            <button
              onClick={() => setActiveTab("individuals")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "individuals"
                  ? "text-[#f59d1a] border-b-2 border-[#f59d1a]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Individuals
            </button>
            <button
              onClick={() => setActiveTab("organizations")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "organizations"
                  ? "text-[#f59d1a] border-b-2 border-[#f59d1a]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Organizations
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
              Status
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
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
              Subscription
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
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
              Tot. Spent
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
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Individuals Table */}
          {activeTab === "individuals" && (
            <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#eadfce]">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Devices
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Subscription
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Joined
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eadfce]">
                    {individualsData.map((customer, index) => (
                      <tr
                        key={index}
                        className="hover:bg-[#fafafa] transition cursor-pointer"
                        onClick={() => (window.location.href = `/customers/${customer.name.toLowerCase().replace(/\s+/g, "-")}`)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
                              {customer.avatar}
                            </div>
                            <span className="text-sm font-medium text-[#262626]">
                              {customer.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <button className="text-[#8a7b65] hover:text-[#262626] transition">
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
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </button>
                            <button className="text-[#8a7b65] hover:text-[#262626] transition">
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
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {customer.devices}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${customer.subscriptionColor}`}
                          >
                            {customer.subscription}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {customer.joined}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-sm text-[#262626]">{customer.status}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Organizations Table */}
          {activeTab === "organizations" && (
            <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#eadfce]">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        org. Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Branch
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Device
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Subscription
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Joined
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eadfce]">
                    {organizationsData.map((org, index) => (
                      <tr
                        key={index}
                        className="hover:bg-[#fafafa] transition cursor-pointer"
                        onClick={() => (window.location.href = `/customers/${org.orgName.toLowerCase().replace(/\s+/g, "-")}`)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className={`h-8 w-8 rounded-full ${org.logoColor} flex items-center justify-center text-sm font-medium text-white`}>
                              {org.logo}
                            </div>
                            <span className="text-sm font-medium text-[#262626]">
                              {org.orgName}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <button className="text-[#8a7b65] hover:text-[#262626] transition">
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
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </button>
                            <button className="text-[#8a7b65] hover:text-[#262626] transition">
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
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {org.branch}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {org.device}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${org.subscriptionColor}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            {org.subscription}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {org.joined}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-sm text-[#262626]">{org.status}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
