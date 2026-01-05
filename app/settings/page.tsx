"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SettingsSection =
  | "profile"
  | "payments"
  | "notifications"
  | "security"
  | "privacy"
  | "terms"
  | "support"
  | "feedback";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("profile");
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Notification toggles
  const [highEnergyAlert, setHighEnergyAlert] = useState(true);
  const [lowUnitReminder, setLowUnitReminder] = useState(true);
  const [routineExecuted, setRoutineExecuted] = useState(true);
  const [aiRecommendations, setAiRecommendations] = useState(false);

  // Privacy toggles
  const [dataSharing, setDataSharing] = useState(true);
  const [smartInsights, setSmartInsights] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);
  const [connectedDevices, setConnectedDevices] = useState(false);

  // Social accounts
  const [googleConnected, setGoogleConnected] = useState(true);
  const [appleConnected, setAppleConnected] = useState(false);

  const settingsMenu = [
    { id: "profile" as SettingsSection, label: "Profile settings", icon: "👤" },
    { id: "payments" as SettingsSection, label: "Payments", icon: "💳" },
    { id: "notifications" as SettingsSection, label: "Notifications", icon: "🔔" },
    { id: "security" as SettingsSection, label: "Log in & Security", icon: "🛡️" },
    { id: "privacy" as SettingsSection, label: "Privacy", icon: "✋" },
    { id: "terms" as SettingsSection, label: "Terms of Service", icon: "📄" },
    { id: "support" as SettingsSection, label: "Support", icon: "❓" },
    { id: "feedback" as SettingsSection, label: "Feedback", icon: "💬" },
  ];

  return (
    <main className="min-h-screen bg-[#f5eee2] text-[#262626]">
      <div className="flex h-screen">
        {/* Left Sidebar */}
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
              { label: "Budget", icon: "budget", href: "/budget" },
              { label: "Rooms", icon: "rooms", href: "/rooms" },
              { label: "Members", icon: "members", href: "/members" },
              { label: "Settings", icon: "settings", href: "/settings", active: true },
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

        {/* Main Content */}
        <section className="flex-1 overflow-y-auto">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-end border-b border-[#eadfce] bg-[#fdf6eb] px-8">
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
          <div className="flex h-[calc(100vh-4rem)]">
            {/* Settings Menu */}
            <aside className="w-64 border-r border-[#eadfce] bg-white p-6">
              <h2 className="text-2xl font-bold text-[#262626] mb-6">Settings</h2>
              <nav className="space-y-1">
                {settingsMenu.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition ${
                      activeSection === item.id
                        ? "bg-[#f9e0b8] text-[#5b3b13] font-medium"
                        : "text-[#4b4b4b] hover:bg-[#f5eee2]"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-red-600 hover:bg-red-50 transition mt-4">
                  <span className="text-lg">🚪</span>
                  <span className="text-sm">Log out</span>
                </button>
              </nav>
            </aside>

            {/* Settings Content */}
            <div className="flex-1 overflow-y-auto p-8">
              {/* Profile Settings */}
              {activeSection === "profile" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#262626]">Profile settings</h2>
                    <button
                      onClick={() => setShowEditProfile(true)}
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
                      Edit
                    </button>
                  </div>

                  <div className="flex flex-col items-center mb-8">
                    <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <div className="h-20 w-20 rounded-full bg-[#f59d1a] flex items-center justify-center text-white text-2xl font-semibold">
                        TA
                      </div>
                    </div>
                    <button className="flex items-center gap-2 rounded-full border border-[#e0d4c2] bg-white px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] transition">
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
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                      Add
                    </button>
                  </div>

                  <div className="space-y-4 max-w-md">
                    <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#8a7b65]">Full name</span>
                      <span className="text-sm font-medium text-[#262626]">Tonia Adeleke</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#8a7b65]">Email</span>
                      <span className="text-sm font-medium text-[#262626]">toniade23@gmail.com</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#8a7b65]">Phone</span>
                      <span className="text-sm font-medium text-[#262626]">07076379760</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeSection === "notifications" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#262626] mb-6">Notifications</h2>
                  <div className="space-y-6 max-w-2xl">
                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          High energy usage alert
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Get notified when your energy consumption suddenly spikes or exceeds normal levels.
                        </p>
                      </div>
                      <button
                        onClick={() => setHighEnergyAlert(!highEnergyAlert)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          highEnergyAlert ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            highEnergyAlert ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          Low unit / budget reminder
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Receive an alert when your prepaid balance or monthly energy budget is running low.
                        </p>
                      </div>
                      <button
                        onClick={() => setLowUnitReminder(!lowUnitReminder)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          lowUnitReminder ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            lowUnitReminder ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          Routine executed or failed
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Be informed when a routine runs or fails.
                        </p>
                      </div>
                      <button
                        onClick={() => setRoutineExecuted(!routineExecuted)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          routineExecuted ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            routineExecuted ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          AI smart recommendation
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Get personalized tips from Imolè's AI to reduce usage or save costs.
                        </p>
                      </div>
                      <button
                        onClick={() => setAiRecommendations(!aiRecommendations)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          aiRecommendations ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            aiRecommendations ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Log in & Security */}
              {activeSection === "security" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#262626] mb-6">Log in & Security</h2>
                  <div className="space-y-6 max-w-2xl">
                    <div>
                      <h3 className="text-sm font-semibold text-[#262626] mb-4">Social accounts</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-lg font-bold text-blue-600">G</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#262626]">Google</p>
                              <p className="text-xs text-[#8a7b65]">
                                {googleConnected ? "Connected" : "Not connected"}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setGoogleConnected(!googleConnected)}
                            className="text-sm text-[#f59d1a] hover:text-[#e48805] transition"
                          >
                            {googleConnected ? "Disconnect" : "Connect"}
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="text-lg">🍎</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#262626]">Apple</p>
                              <p className="text-xs text-[#8a7b65]">
                                {appleConnected ? "Connected" : "Not connected"}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setAppleConnected(!appleConnected)}
                            className="text-sm text-[#f59d1a] hover:text-[#e48805] transition"
                          >
                            {appleConnected ? "Disconnect" : "Connect"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#eadfce] pt-6">
                      <h3 className="text-sm font-semibold text-[#262626] mb-4">Manage account</h3>
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
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
                          <path d="M3 6h18" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        <span className="text-sm font-medium">Delete account</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy */}
              {activeSection === "privacy" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#262626] mb-6">Privacy</h2>
                  <div className="space-y-6 max-w-2xl">
                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          Data Sharing Control
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Choose whether Imolè can use your anonymized energy data to improve app performance and features.
                        </p>
                      </div>
                      <button
                        onClick={() => setDataSharing(!dataSharing)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          dataSharing ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            dataSharing ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          Smart Insights Personalization
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Allow Imolè's AI to analyze your usage data to provide personalized energy-saving tips and forecasts.
                        </p>
                      </div>
                      <button
                        onClick={() => setSmartInsights(!smartInsights)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          smartInsights ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            smartInsights ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          Location Access
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          Manage whether the app can use your location to detect nearby devices and apply location-based tariffs or insights.
                        </p>
                      </div>
                      <button
                        onClick={() => setLocationAccess(!locationAccess)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          locationAccess ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            locationAccess ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start justify-between p-4 rounded-xl border border-[#eadfce] bg-white">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#262626] mb-1">
                          Connected Devices Access
                        </h3>
                        <p className="text-xs text-[#8a7b65]">
                          View and manage all devices linked to your account that send usage data to Imolè.
                        </p>
                      </div>
                      <button
                        onClick={() => setConnectedDevices(!connectedDevices)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${
                          connectedDevices ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                        }`}
                      >
                        <span
                          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                            connectedDevices ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Terms of Service */}
              {activeSection === "terms" && (
                <div className="max-w-3xl">
                  <h3 className="text-sm font-medium text-[#8a7b65] mb-2">Terms of Service</h3>
                  <h2 className="text-2xl font-bold text-[#262626] mb-4">Privacy Policy</h2>
                  <p className="text-xs text-[#8a7b65] mb-8">Last Updated: Aug 23, 3035</p>

                  <div className="space-y-6 text-sm text-[#262626]">
                    <p>
                      At Imolè, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data while helping you monitor and manage your energy efficiently.
                    </p>

                    <div>
                      <h3 className="text-base font-semibold mb-2">1. Information We Collect</h3>
                      <p className="mb-2">We collect only what's necessary to make Imolè work smoothly:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Account details:</strong> name, email, and contact information.</li>
                        <li><strong>Energy data:</strong> your electricity usage, cost, and device performance.</li>
                        <li><strong>Device information:</strong> smart meters or appliances connected to Imolè.</li>
                        <li><strong>Optional data:</strong> location (for tariff accuracy) and feedback you share.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2">2. How We Use Your Information</h3>
                      <p className="mb-2">Your data helps us:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Provide real-time monitoring and smart energy insights.</li>
                        <li>Send alerts about usage, low balance, or efficiency reports.</li>
                        <li>Improve app performance and develop new eco features.</li>
                        <li>Generate AI-based recommendations to reduce energy costs.</li>
                      </ul>
                      <p className="mt-2">We never sell or rent your personal data to third parties.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Support */}
              {activeSection === "support" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#262626] mb-6">Support</h2>
                  <div className="space-y-3 max-w-md">
                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-[#eadfce] bg-white hover:bg-[#f5eee2] transition">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🎧</span>
                        <span className="text-sm font-medium text-[#262626]">Contact support</span>
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
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>

                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-[#eadfce] bg-white hover:bg-[#f5eee2] transition">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">❓</span>
                        <span className="text-sm font-medium text-[#262626]">Visit the Help center</span>
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
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>

                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-[#eadfce] bg-white hover:bg-[#f5eee2] transition">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">👥</span>
                        <span className="text-sm font-medium text-[#262626]">Get help from community</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#f9e0b8] text-[#5b3b13]">
                          Coming soon
                        </span>
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
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Feedback */}
              {activeSection === "feedback" && (
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-[#262626] mb-2">Feedback</h2>
                  <h3 className="text-xl font-bold text-[#262626] mb-4">Help make Imole better</h3>
                  <p className="text-sm text-[#8a7b65] mb-8">
                    Imolè grows smarter with your input. Share your feedback and help shape the future of smart energy management.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#262626] mb-2">
                        Details
                      </label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="What is your feedback bout?"
                        className="w-full h-40 px-4 py-3 border border-[#eadfce] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f59d1a] text-[#262626] resize-none"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#262626] mb-2">
                        Need help instead?
                      </h4>
                      <p className="text-sm text-[#8a7b65]">
                        If you have a specific question or need help resolving a problem, you can{" "}
                        <Link href="#" className="text-[#f59d1a] hover:underline">
                          visit our help center
                        </Link>{" "}
                        or{" "}
                        <Link href="#" className="text-[#f59d1a] hover:underline">
                          contact us
                        </Link>{" "}
                        to connect with our support team.
                      </p>
                    </div>

                    <button className="w-full rounded-lg bg-[#f59d1a] px-4 py-3 text-sm font-medium text-white hover:bg-[#e48805] transition">
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {/* Payments placeholder */}
              {activeSection === "payments" && (
                <div>
                  <h2 className="text-2xl font-bold text-[#262626] mb-6">Payments</h2>
                  <p className="text-sm text-[#8a7b65]">Payment settings coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-[#262626] mb-4">Delete account?</h2>
              <p className="text-sm text-[#8a7b65] mb-4">
                Are you sure you want to permanently delete your Imolè account?
              </p>
              <ul className="text-sm text-[#8a7b65] space-y-2 mb-4 list-disc list-inside">
                <li>Remove all your data, including your campaigns, transactions, and payout history.</li>
                <li>Disconnect your connected social media accounts.</li>
                <li>Revoke your access to all creator tools and analytics.</li>
              </ul>
              <p className="text-sm text-[#8a7b65] mb-6">
                This action cannot be undone, and you'll lose access to any ongoing collaborations or pending payments.
              </p>
            </div>
            <div className="flex items-center gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 text-sm font-medium text-[#262626] bg-[#f9e0b8] hover:bg-[#f6d6a4] rounded-lg transition"
              >
                Keep my account
              </button>
              <button
                onClick={() => {
                  // Handle delete logic here
                  setShowDeleteModal(false);
                }}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
              >
                Delete permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

