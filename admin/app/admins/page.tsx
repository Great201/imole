"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminAdmins() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: "home", href: "/home" },
    { label: "Devices", icon: "devices", href: "/devices" },
    { label: "Customers", icon: "members", href: "/customers" },
    { label: "Transactions", icon: "assignment", href: "/transactions" },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins", active: true },
    { label: "Settings", icon: "settings", href: "/settings" },
  ];

  const adminsData = [
    {
      name: "Tonia Adeleke",
      isYou: true,
      email: "lionelmessi23@gmail.com",
      role: "Owner",
      lastSeen: "52 mins ago",
    },
    {
      name: "Tonia Adeleke",
      isYou: false,
      email: "lionelmessi23@gmail.com",
      role: "Device manager",
      lastSeen: "52 mins ago",
    },
    {
      name: "Tonia Adeleke",
      isYou: false,
      email: "lionelmessi23@gmail.com",
      role: "Device manager",
      lastSeen: "52 mins ago",
    },
    {
      name: "Tonia Adeleke",
      isYou: false,
      email: "lionelmessi23@gmail.com",
      role: "Device manager",
      lastSeen: "52 mins ago",
    },
  ];

  const handleSendInvite = () => {
    // Handle invite logic here
    console.log("Sending invite to:", inviteEmail, "with role:", inviteRole);
    setIsInviteModalOpen(false);
    setInviteEmail("");
    setInviteRole("");
  };

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
            <h1 className="text-lg font-semibold text-[#262626]">Admins</h1>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#262626]">Admins</h2>
            <button
              onClick={() => setIsInviteModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#f59d1a] text-white rounded-lg hover:bg-[#e08d15] transition font-medium"
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Invite new
            </button>
          </div>

          {/* Admins Table */}
          <div className="bg-white rounded-lg border border-[#eadfce] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#eadfce]">
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Name
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Email
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Role
                    </th>
                      <th className="px-3 lg:px-6 py-4 text-left text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Last seen
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-[#262626] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eadfce]">
                  {adminsData.map((admin, index) => (
                    <tr key={index} className="hover:bg-[#fafafa] transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-green-400 flex items-center justify-center overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-br from-purple-400 to-green-400"></div>
                          </div>
                          <span className="text-sm font-medium text-[#262626]">
                            {admin.name} {admin.isYou && "(You)"}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                        {admin.email}
                      </td>
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                        {admin.role}
                      </td>
                      <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                        {admin.lastSeen}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        {!admin.isYou && (
                          <div className="flex items-center justify-end gap-3">
                            <button
                              type="button"
                              aria-label="Edit admin"
                              className="text-[#8a7b65] hover:text-[#262626] transition"
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
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              aria-label="Delete admin"
                              className="text-[#8a7b65] hover:text-red-600 transition"
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
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Invite Member Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h3 className="text-xl font-semibold text-[#262626]">Invite member</h3>
              <button
                onClick={() => {
                  setIsInviteModalOpen(false);
                  setInviteEmail("");
                  setInviteRole("");
                }}
                className="text-[#8a7b65] hover:text-[#262626] transition"
                aria-label="Close modal"
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

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Email Input */}
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
                    className="w-full px-4 py-2.5 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a] focus:border-transparent text-[#262626]"
                  />
                  {inviteEmail && (
                    <button
                      onClick={() => setInviteEmail("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#eadfce] flex items-center justify-center text-[#8a7b65] hover:bg-[#d4c4b0] transition"
                      aria-label="Clear email"
                    >
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
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Role Dropdown */}
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Role
                </label>
                <div className="relative">
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="w-full px-4 py-2.5 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a] focus:border-transparent text-[#262626] appearance-none bg-white"
                  >
                    <option value="">Select role</option>
                    <option value="owner">Owner</option>
                    <option value="device-manager">Device manager</option>
                    <option value="admin">Admin</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
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
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => {
                  setIsInviteModalOpen(false);
                  setInviteEmail("");
                  setInviteRole("");
                }}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:text-[#8a7b65] transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSendInvite}
                disabled={!inviteEmail || !inviteRole}
                className="px-4 py-2 bg-[#f59d1a] text-white rounded-lg hover:bg-[#e08d15] transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
