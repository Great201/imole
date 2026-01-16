"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminDevices() {
  const [activeTab, setActiveTab] = useState<"list" | "type">("list");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: "home", href: "/home" },
    { label: "Devices", icon: "devices", href: "/devices", active: true },
    { label: "Customers", icon: "members", href: "/customers" },
    { label: "Transactions", icon: "assignment", href: "/transactions" },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins" },
    { label: "Settings", icon: "settings", href: "/settings" },
  ];

  const deviceListData = [
    {
      name: "Sub Woofer",
      location: "Nigeria",
      type: "Socket",
      owner: { name: "Chijioke N.", avatar: "👤" },
      macNo: "0e12300SE",
      added: "Aug 23, 2025",
      status: "On",
    },
    {
      name: "Sub Woofer",
      location: "Nigeria",
      type: "Socket",
      owner: { name: "Chijioke N.", avatar: "👤" },
      macNo: "0e12300SE",
      added: "Aug 23, 2025",
      status: "On",
    },
    {
      name: "Sub Woofer",
      location: "Nigeria",
      type: "Socket",
      owner: { name: "Chijioke N.", avatar: "👤" },
      macNo: "0e12300SE",
      added: "Aug 23, 2025",
      status: "On",
    },
    {
      name: "Sub Woofer",
      location: "Nigeria",
      type: "Socket",
      owner: { name: "Chijioke N.", avatar: "👤" },
      macNo: "0e12300SE",
      added: "Aug 23, 2025",
      status: "On",
    },
    {
      name: "Sub Woofer",
      location: "Nigeria",
      type: "Socket",
      owner: { name: "Chijioke N.", avatar: "👤" },
      macNo: "0e12300SE",
      added: "Aug 23, 2025",
      status: "On",
    },
    {
      name: "Sub Woofer",
      location: "Nigeria",
      type: "Socket",
      owner: { name: "Chijioke N.", avatar: "👤" },
      macNo: "0e12300SE",
      added: "Aug 23, 2025",
      status: "On",
    },
  ];

  const deviceTypeData = [
    {
      name: "IML Smart Wall socket",
      monitorable: "Yes",
      moveable: "Enabled",
      added: "Aug 23, 2025",
      status: "Enabled",
    },
    {
      name: "IML Smart Wall socket",
      monitorable: "Yes",
      moveable: "Enabled",
      added: "Aug 23, 2025",
      status: "Enabled",
    },
    {
      name: "IML Smart Wall socket",
      monitorable: "Yes",
      moveable: "Enabled",
      added: "Aug 23, 2025",
      status: "Enabled",
    },
    {
      name: "IML Smart Wall socket",
      monitorable: "Yes",
      moveable: "Enabled",
      added: "Aug 23, 2025",
      status: "Enabled",
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
            <h1 className="text-lg font-semibold text-[#262626]">Devices</h1>
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 lg:mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-[#262626]">Devices</h2>
            <button className="flex items-center gap-2 bg-[#f59d1a] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e48805] transition text-sm">
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
              Add device
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-[#eadfce]">
            <button
              onClick={() => setActiveTab("list")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "list"
                  ? "text-[#262626] border-b-2 border-[#262626]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Device list
            </button>
            <button
              onClick={() => setActiveTab("type")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "type"
                  ? "text-[#262626] border-b-2 border-[#262626]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Device type
            </button>
          </div>

          {/* Filters and Export */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
                Device type
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
              {activeTab === "list" && (
                <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
                  User type
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
              )}
              <span className="text-sm text-[#8a7b65]">
                {activeTab === "list" ? "2,480" : "4"} devices
              </span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#eadfce] rounded-lg bg-white text-sm text-[#262626] hover:bg-[#f5eee2] transition">
              Export
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

          {/* Device List Table */}
          {activeTab === "list" && (
            <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#eadfce]">
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Device name
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Owner
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Mac No.
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Added
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        {/* Actions column */}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eadfce]">
                    {deviceListData.map((device, index) => (
                      <tr key={index} className="hover:bg-[#fafafa] transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#262626]">
                          {device.name}
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.location}
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                              {device.owner.avatar}
                            </div>
                            <span className="text-sm text-[#262626]">
                              {device.owner.name}
                            </span>
                          </div>
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.macNo}
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.added}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-sm text-[#262626]">{device.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-[#8a7b65] hover:text-[#262626] transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Device Type Table */}
          {activeTab === "type" && (
            <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#eadfce]">
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Monitorable
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Moveable
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Added
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        {/* Actions column */}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eadfce]">
                    {deviceTypeData.map((device, index) => (
                      <tr key={index} className="hover:bg-[#fafafa] transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#262626]">
                          {device.name}
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.monitorable}
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.moveable}
                        </td>
                            <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                          {device.added}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-sm text-[#262626]">{device.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-[#8a7b65] hover:text-[#262626] transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                            </svg>
                          </button>
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
