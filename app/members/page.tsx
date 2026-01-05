"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MembersPage() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

  const members = [
    {
      id: "1",
      name: "Tonia Adeleke",
      email: "lionelmessi23@gmail.com",
      role: "Owner",
      lastSeen: "52 mins ago",
      isYou: true,
    },
    {
      id: "2",
      name: "Tonia Adeleke",
      email: "lionelmessi23@gmail.com",
      role: "Owner",
      lastSeen: "52 mins ago",
      isYou: false,
    },
  ];

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
              { label: "Budget", icon: "budget", href: "/budget" },
              { label: "Rooms", icon: "rooms", href: "/rooms" },
              { label: "Members", icon: "members", href: "/members", active: true },
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
            <h1 className="text-3xl font-bold text-[#262626]">Members</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowInviteModal(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#f59d1a] px-4 py-2 text-sm font-medium text-white hover:bg-[#e48805] transition"
              >
                <span className="text-lg leading-none">+</span>
                <span>Invite new</span>
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
            {/* Members Table */}
            <div className="rounded-xl bg-white shadow-sm border border-[#eadfce] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f5eee2] border-b border-[#eadfce]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Last seen
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-[#262626] uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eadfce]">
                    {members.map((member) => (
                      <tr key={member.id} className="hover:bg-[#f5eee2]/50 transition">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-[#f59d1a] flex items-center justify-center text-white text-sm font-semibold">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#262626]">
                                {member.name}
                                {member.isYou && (
                                  <span className="text-xs text-[#8a7b65] ml-1">
                                    (You)
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-[#8a7b65]">{member.email}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-[#262626]">{member.role}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-[#8a7b65]">{member.lastSeen}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          {!member.isYou && (
                            <button
                              className="text-red-500 hover:text-red-700 transition"
                              aria-label="Delete member"
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
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Invite Member Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h2 className="text-lg font-semibold text-[#262626]">Invite member</h2>
              <button
                onClick={() => {
                  setShowInviteModal(false);
                  setInviteEmail("");
                }}
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
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="tonia23@gmail.com"
                    className="w-full px-4 py-2 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a] text-[#262626] pr-10"
                  />
                  {inviteEmail && (
                    <button
                      onClick={() => setInviteEmail("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a7b65] hover:text-[#262626] transition"
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
                        <circle cx="12" cy="12" r="10" />
                        <path d="M15 9l-6 6" />
                        <path d="M9 9l6 6" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => {
                  setShowInviteModal(false);
                  setInviteEmail("");
                }}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle invite logic here
                  setShowInviteModal(false);
                  setInviteEmail("");
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-[#f59d1a] hover:bg-[#e48805] rounded-lg transition"
              >
                Send invite
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

