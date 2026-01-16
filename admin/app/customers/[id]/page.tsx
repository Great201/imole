"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function CustomerDetail() {
  const params = useParams();
  const customerId = params.id as string;
  const [activeTab, setActiveTab] = useState<
    "basic" | "devices" | "branch" | "subscription" | "transactions" | "usage" | "activity"
  >("basic");

  const navItems = [
    { label: "Home", icon: "home", href: "/home" },
    { label: "Devices", icon: "devices", href: "/devices" },
    { label: "Customers", icon: "members", href: "/customers", active: true },
    { label: "Transactions", icon: "assignment", href: "/transactions" },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins" },
    { label: "Settings", icon: "settings", href: "/settings" },
  ];

  const tabs = [
    { id: "basic" as const, label: "Basic info" },
    { id: "devices" as const, label: "Devices" },
    { id: "branch" as const, label: "Branch" },
    { id: "subscription" as const, label: "Subscription" },
    { id: "transactions" as const, label: "Transactions" },
    { id: "usage" as const, label: "Usage summary" },
    { id: "activity" as const, label: "Activity log" },
  ];

  const branchesData = [
    {
      name: "Wuse",
      location: "Wuse",
      meter: "001234343334032",
      device: "3",
      added: "Aug 23, 2025",
    },
    {
      name: "Wuse",
      location: "Wuse",
      meter: "001234343334032",
      device: "3",
      added: "Aug 23, 2025",
    },
    {
      name: "Wuse",
      location: "Wuse",
      meter: "001234343334032",
      device: "3",
      added: "Aug 23, 2025",
    },
  ];

  const transactionsData = [
    {
      description: "Electricity unit",
      amount: "- ₦20,000",
      method: "Bank",
      reference: "TRX-987654321",
      date: "Aug 23, 2025 @ 09:23am",
      status: "Successful",
    },
    {
      description: "Deposite",
      amount: "+ ₦250,000",
      method: "Card",
      reference: "TRX-123456789",
      date: "Sep 15, 2025 @ 10:45am",
      status: "Successful",
    },
    {
      description: "Electricity unit",
      amount: "- ₦20,000",
      method: "Bank",
      reference: "TRX-987654322",
      date: "Sep 1, 2025 @ 01:21pm",
      status: "Successful",
    },
  ];

  const billingHistoryData = [
    {
      transactionId: "TRX-4883",
      description: "Subscription to premium",
      amount: "19,500",
      date: "Aug 23, 2025",
      status: "Successful",
    },
    {
      transactionId: "TRX-5421",
      description: "Subscription to premium",
      amount: "19,500",
      date: "Aug 23, 2025",
      status: "Successful",
    },
    {
      transactionId: "TRX-5428",
      description: "Subscription to premium",
      amount: "19,500",
      date: "Aug 23, 2025",
      status: "Successful",
    },
  ];

  const activityLogData = [
    {
      user: "Jane Smith (You)",
      activity: "Turned on parlor fridge",
      date: "Aug 23, 2025 @ 09:23am",
    },
    {
      user: "System",
      activity: "Automatically turned on parlor fridge (due to Schedule)",
      date: "Aug 23, 2025 @ 09:23am",
    },
    {
      user: "Automation",
      activity: "Changed thermostat setting to 72°F",
      date: "Aug 23, 2025 @ 09:23am",
    },
    {
      user: "Jane Smith (You)",
      activity: "Turned on parlor fridge",
      date: "Aug 23, 2025 @ 09:23am",
    },
    {
      user: "Jane Smith (You)",
      activity: "Turned on parlor fridge",
      date: "Aug 23, 2025 @ 09:23am",
    },
  ];

  const devicesByRoom = {
    "Living room": [
      { name: "Fridge", status: "On", power: "0.9kw", icon: "kitchen" },
      { name: "Room AC", status: "On", power: "0.9kw", icon: "climate_mini_split" },
      { name: "Speaker", status: "offline", power: "0kw", icon: "nest_multi_room" },
      { name: "living room light", status: "off", power: "0kw", icon: "wb_incandescent" },
    ],
    Kitchen: [
      { name: "Fridge", status: "On", power: "0.9kw", icon: "kitchen" },
      { name: "Standing fan", status: "off", power: "0kw", icon: "mode_fan" },
      { name: "Speaker", status: "offline", power: "0kw", icon: "nest_multi_room" },
      { name: "living room light", status: "off", power: "0kw", icon: "wb_incandescent" },
    ],
  };

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
                className="w-5 h-5"
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
          <div className="flex items-center gap-2 text-sm text-[#8a7b65]">
            <Link href="/customers" className="hover:text-[#262626] transition">
              Customers
            </Link>
            <span>/</span>
            <span className="text-[#262626]">Emeka Ibe</span>
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
        <div className="flex-1 overflow-y-auto p-6">
          {/* Customer Profile Header */}
          <div className="bg-white rounded-lg border border-[#eadfce] p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center text-white text-lg font-semibold">
                  Vesti
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#262626] mb-2">Vesti Inc</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-sm text-[#262626]">Active</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-purple-600"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <span className="text-sm text-purple-600 font-medium">Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm font-medium text-[#262626] hover:bg-[#f5eee2] transition">
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
                  Edit profile
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-red-600 rounded-lg bg-white text-sm font-medium text-red-600 hover:bg-red-50 transition">
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
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  Delete user
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-[#eadfce]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-1 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "text-[#f59d1a] border-b-2 border-[#f59d1a]"
                    : "text-[#8a7b65] hover:text-[#262626]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {/* Basic Info Tab */}
            {activeTab === "basic" && (
              <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                <h3 className="text-lg font-semibold text-[#262626] mb-6">Basic Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Full name</span>
                    <span className="text-sm font-medium text-[#262626]">Emeka Ibe</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Email</span>
                    <span className="text-sm font-medium text-[#262626]">emeka.ibe@email.co</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Phone</span>
                    <span className="text-sm font-medium text-[#262626]">+234 808 123 4567</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Connected devices</span>
                    <Link href="#" className="text-sm font-medium text-[#f59d1a] hover:underline">
                      24 ↗
                    </Link>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Rooms</span>
                    <span className="text-sm font-medium text-[#262626]">5</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Meter number</span>
                    <span className="text-sm font-medium text-[#262626]">001234343334032</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                    <span className="text-sm text-[#8a7b65]">Subscription</span>
                    <span className="text-sm font-medium text-[#262626]">Free account</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm text-[#8a7b65]">Joined</span>
                    <span className="text-sm font-medium text-[#262626]">July 20, 2025</span>
                  </div>
                </div>
              </div>
            )}

            {/* Devices Tab */}
            {activeTab === "devices" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#262626]">connected devices</h3>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
                    Branch
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
                {Object.entries(devicesByRoom).map(([room, devices]) => (
                  <div key={room} className="mb-6">
                    <h4 className="text-sm font-semibold text-[#262626] mb-3">{room}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {devices.map((device, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${
                            device.status === "On"
                              ? "bg-[#f5eee2] border-[#eadfce]"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Image
                              src={`/img/${device.icon}.svg`}
                              alt={device.name}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                            <span
                              className={`text-xs font-medium ${
                                device.status === "On"
                                  ? "text-green-600"
                                  : device.status === "offline"
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }`}
                            >
                              {device.status}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-[#262626] mb-1">{device.name}</p>
                          <p className="text-xs text-[#8a7b65]">{device.power}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Branch Tab */}
            {activeTab === "branch" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#262626]">Branch</h3>
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
                    Add branch
                  </button>
                </div>
                <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#eadfce]">
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Location
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Meter
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Device
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Added
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            {/* Actions */}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eadfce]">
                        {branchesData.map((branch, index) => (
                          <tr key={index} className="hover:bg-[#fafafa] transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#262626]">
                              {branch.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {branch.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {branch.meter}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {branch.device}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {branch.added}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
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
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                  </svg>
                                </button>
                                <button className="text-red-600 hover:text-red-700 transition">
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
                                    <path d="M3 6h18" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Subscription Tab */}
            {activeTab === "subscription" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                  <h3 className="text-lg font-semibold text-[#262626] mb-4">Subscription</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[#262626] mb-2">Premium</h4>
                      <p className="text-2xl font-bold text-[#262626]">₦19,500/month</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#8a7b65]">Next subscription</p>
                      <p className="text-sm font-medium text-[#262626]">Jan 23, 2025. (12 days)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#f59d1a] text-white rounded-lg text-sm font-medium hover:bg-[#e48805] transition">
                      Upgrade
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                  <h3 className="text-lg font-semibold text-[#262626] mb-4">Billing history</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#eadfce]">
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Transaction ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            {/* Actions */}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eadfce]">
                        {billingHistoryData.map((item, index) => (
                          <tr key={index} className="hover:bg-[#fafafa] transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#262626]">
                              {item.transactionId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              ₦{item.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {item.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                <span className="text-sm text-[#262626]">{item.status}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
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
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                  <polyline points="7 10 12 15 17 10" />
                                  <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Transactions Tab */}
            {activeTab === "transactions" && (
              <div>
                <h3 className="text-lg font-semibold text-[#262626] mb-4">Transactions</h3>
                <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#eadfce]">
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Method
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Reference
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eadfce]">
                        {transactionsData.map((transaction, index) => (
                          <tr key={index} className="hover:bg-[#fafafa] transition">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
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
                                  className="text-green-500"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-sm font-medium text-[#262626]">
                                  {transaction.description}
                                </span>
                              </div>
                            </td>
                            <td
                              className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                                transaction.amount.startsWith("+")
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {transaction.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {transaction.method}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {transaction.reference}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
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
            )}

            {/* Usage Summary Tab */}
            {activeTab === "usage" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#262626]">Usage report</h3>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
                      Branch
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
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/img/wb_incandescent.svg"
                        alt="Consumption"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-xs text-[#8a7b65] mb-1">Total consumption</p>
                    <p className="text-2xl font-bold text-[#262626]">32.4 kWh</p>
                  </div>
                  <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/img/electric_bolt.svg"
                        alt="Unit"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-xs text-[#8a7b65] mb-1">Total unit used</p>
                    <p className="text-2xl font-bold text-[#262626]">42.6</p>
                  </div>
                  <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/img/electric_bolt.svg"
                        alt="Cost"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-xs text-[#8a7b65] mb-1">Total cost</p>
                    <p className="text-2xl font-bold text-[#262626]">₦3,540</p>
                  </div>
                  <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/img/energy_savings_leaf.svg"
                        alt="CO2"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-xs text-[#8a7b65] mb-1">CO2 Saved</p>
                    <p className="text-2xl font-bold text-[#262626]">12.5 kg</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-[#262626]">Energy trend</h4>
                    <button className="flex items-center gap-2 px-3 py-1 border border-[#eadfce] rounded-lg bg-white text-xs text-[#262626] hover:bg-[#f5eee2] transition">
                      Weekly
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
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-sm text-[#8a7b65]">Energy trend chart placeholder</p>
                  </div>
                </div>
              </div>
            )}

            {/* Activity Log Tab */}
            {activeTab === "activity" && (
              <div>
                <h3 className="text-lg font-semibold text-[#262626] mb-4">Activity log</h3>
                <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#eadfce]">
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            User
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Activity
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eadfce]">
                        {activityLogData.map((activity, index) => (
                          <tr key={index} className="hover:bg-[#fafafa] transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {activity.user}
                            </td>
                            <td className="px-6 py-4 text-sm text-[#262626]">
                              {activity.activity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                              {activity.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
