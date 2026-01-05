"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DeviceDetailPage({ params }: { params: { id: string } }) {
  const [isOn, setIsOn] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "insights">("overview");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deviceName, setDeviceName] = useState("Kitchen Fridge");
  const [deviceCategory, setDeviceCategory] = useState("Fridge");
  const [deviceRoom, setDeviceRoom] = useState("Kitchen");

  const routines = [
    { name: "Out of Home", devices: 3, time: "10:00pm", repeats: true, checked: false },
    { name: "Back Home", devices: 3, time: "10:00pm", repeats: true, checked: true },
    { name: "Sleep time", devices: 3, time: "10:00pm", repeats: true, checked: false },
    { name: "Bed time", devices: 3, time: "10:00pm", repeats: true, checked: false },
  ];

  return (
    <main className="min-h-screen bg-white text-[#262626]">
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
              { label: "Devices", icon: "devices", href: "/devices", active: true },
              { label: "Insights", icon: "insights", href: "/insights" },
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
        <section className="flex-1 overflow-y-auto bg-white">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-[#eadfce] bg-[#fdf6eb] px-8">
            <div></div>
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
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-[#262626]">{deviceName}</h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowEditModal(true)}
                  className="flex items-center gap-2 rounded-full border border-[#e0d4c2] bg-white px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] transition"
                >
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
                  Edit device
                </button>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition"
                >
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
                  Delete
                </button>
              </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex flex-col items-center mb-8">
              <span className="text-lg font-semibold text-[#262626] mb-2">
                {isOn ? "On" : "Off"}
              </span>
              <button
                onClick={() => setIsOn(!isOn)}
                className={`relative h-24 w-14 rounded-full transition-colors ${
                  isOn ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                }`}
                aria-label={`Turn device ${isOn ? "off" : "on"}`}
              >
                <span
                  className={`absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white transition-transform ${
                    isOn ? "top-2" : "bottom-2"
                  }`}
                />
              </button>
              <span className="text-lg font-semibold text-[#8a7b65] mt-2">
                {isOn ? "Off" : "On"}
              </span>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-xl border border-[#eadfce] shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-[#eadfce]">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition ${
                    activeTab === "overview"
                      ? "bg-[#f9e0b8] text-[#5b3b13] border-b-2 border-[#f59d1a]"
                      : "text-[#8a7b65] hover:bg-[#f5eee2]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("insights")}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition ${
                    activeTab === "insights"
                      ? "bg-[#f9e0b8] text-[#5b3b13] border-b-2 border-[#f59d1a]"
                      : "text-[#8a7b65] hover:bg-[#f5eee2]"
                  }`}
                >
                  Insights
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" ? (
                  <div className="space-y-6">
                    {/* Device Info */}
                    <div>
                      <h3 className="text-sm font-semibold text-[#262626] mb-4">
                        Device info
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#8a7b65]">Device name:</span>
                          <span className="text-sm font-medium text-[#262626]">
                            {deviceName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#8a7b65]">Device ID:</span>
                          <span className="text-sm font-medium text-[#262626]">
                            0012340043434
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#8a7b65]">Status:</span>
                          <span className="text-sm font-medium text-green-600">Online</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#8a7b65]">Room:</span>
                          <span className="text-sm font-medium text-[#262626]">
                            {deviceRoom}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Routines */}
                    <div>
                      <h3 className="text-sm font-semibold text-[#262626] mb-4">
                        Routines
                      </h3>
                      <div className="space-y-3">
                        {routines.map((routine) => (
                          <div
                            key={routine.name}
                            className="flex items-center justify-between p-3 rounded-lg border border-[#eadfce] hover:bg-[#f5eee2] transition"
                          >
                            <div className="flex items-center gap-3">
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
                                className="text-[#8a7b65]"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                              <div>
                                <p className="text-sm font-medium text-[#262626]">
                                  {routine.name}
                                </p>
                                <p className="text-xs text-[#8a7b65]">
                                  {routine.devices} devices • {routine.time} •{" "}
                                  {routine.repeats ? "Repeats" : "Once"}
                                </p>
                              </div>
                            </div>
                            <input
                              type="checkbox"
                              checked={routine.checked}
                              onChange={() => {}}
                              className="h-5 w-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-[#f59d1a]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Consumption Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#f5eee2] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-red-500">⚡</span>
                          <span className="text-xs text-[#8a7b65]">Avg. Consumption</span>
                        </div>
                        <p className="text-2xl font-bold text-[#262626]">1.2 kWh</p>
                      </div>
                      <div className="bg-[#f5eee2] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-orange-500">🔋</span>
                          <span className="text-xs text-[#8a7b65]">Total consumed</span>
                        </div>
                        <p className="text-2xl font-bold text-[#262626]">9.6 kWh</p>
                      </div>
                      <div className="bg-[#f5eee2] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-red-500">⚡</span>
                          <span className="text-xs text-[#8a7b65]">Total saved</span>
                        </div>
                        <p className="text-2xl font-bold text-[#262626]">₦12,500</p>
                      </div>
                    </div>

                    {/* Consumption Graph */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-[#262626]">
                          Consumption
                        </h3>
                        <select className="text-sm border border-[#eadfce] rounded-lg px-3 py-1.5 bg-white text-[#262626]">
                          <option>Month</option>
                          <option>Week</option>
                          <option>Day</option>
                        </select>
                      </div>
                      <div className="h-64 bg-[#f5eee2] rounded-lg flex items-center justify-center border border-[#eadfce]">
                        <p className="text-sm text-[#8a7b65]">
                          Consumption graph placeholder
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-purple-500" />
                          <span className="text-[#8a7b65]">Avg consumption</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-orange-500" />
                          <span className="text-[#8a7b65]">Total consumption</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-green-500" />
                          <span className="text-[#8a7b65]">Cost (Naira)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Edit Device Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h2 className="text-lg font-semibold text-[#262626]">Edit device</h2>
              <button
                onClick={() => setShowEditModal(false)}
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
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Device name
                </label>
                <input
                  type="text"
                  value={deviceName}
                  onChange={(e) => setDeviceName(e.target.value)}
                  className="w-full px-4 py-2 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Device category
                </label>
                <select
                  value={deviceCategory}
                  onChange={(e) => setDeviceCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a]"
                >
                  <option>Fridge</option>
                  <option>AC</option>
                  <option>Fan</option>
                  <option>Light</option>
                  <option>Speaker</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Assign device to a room
                </label>
                <select
                  value={deviceRoom}
                  onChange={(e) => setDeviceRoom(e.target.value)}
                  className="w-full px-4 py-2 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a]"
                >
                  <option>Kitchen</option>
                  <option>Living room</option>
                  <option>Bedroom</option>
                  <option>Bathroom</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-[#f59d1a] hover:bg-[#e48805] rounded-lg transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Device Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h2 className="text-lg font-semibold text-[#262626]">Delete device?</h2>
              <button
                onClick={() => setShowDeleteModal(false)}
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
            <div className="p-6">
              <p className="text-sm text-[#8a7b65]">
                Are you sure you want to delete this device. You will loose all access to
                the device once removed.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  // Handle delete logic here
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

