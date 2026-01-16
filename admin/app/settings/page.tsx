"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState<"roles" | "notification" | "audit">("roles");
  const [isCreateRoleModalOpen, setIsCreateRoleModalOpen] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [permissions, setPermissions] = useState({
    userManagement: {
      manageTeamMembers: false,
      assignRoles: false,
      viewUsers: false,
    },
    creatorManagement: {
      manageCreators: false,
      creatorCampaigns: false,
      creatorSupport: false,
      creatorPayments: false,
    },
    brandManagement: {
      manageBrands: false,
      brandPartnerships: false,
      brandReports: false,
    },
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    globalEmail: false,
    globalPush: false,
    userSignup: {
      newInstitutionSignup: { email: false, push: false },
      institutionFlagged: { email: false, push: false },
    },
    userAlerts: {
      newUserSignups: { email: false, push: false },
      accountFlagged: { email: false, push: false },
      failedLoginAttempts: { email: false, push: false },
    },
    bookingAlerts: {
      largeEventBooking: { email: false, push: false },
      bookingOverride: { email: false, push: false },
      doubleBooking: { email: false, push: false },
    },
  });

  const auditLogData = [
    {
      user: "Jane Smith",
      activity: "Updated lab equipment",
      time: "Wall socket",
    },
    {
      user: "John Doe",
      activity: "Changed user permissions",
      time: "2 hours ago",
    },
    {
      user: "Admin User",
      activity: "Created new role",
      time: "1 day ago",
    },
    {
      user: "System",
      activity: "Automatic backup completed",
      time: "3 days ago",
    },
  ];

  const navItems = [
    { label: "Home", icon: "home", href: "/home" },
    { label: "Devices", icon: "devices", href: "/devices" },
    { label: "Customers", icon: "members", href: "/customers" },
    { label: "Transactions", icon: "assignment", href: "/transactions" },
    { label: "Analytics", icon: "insights", href: "/analytics" },
    { label: "Admins", icon: "members", href: "/admins" },
    { label: "Settings", icon: "settings", href: "/settings", active: true },
  ];

  const rolesData = [
    {
      id: 1,
      initials: "AD",
      title: "Admin",
      description: "Admins has full access with permissions to the p platform",
      peopleCount: 1,
      avatarColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 2,
      initials: "MN",
      title: "Manager",
      description: "Manages team members and creator relationships",
      peopleCount: 1,
      avatarColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      initials: "CC",
      title: "Creator coordinator",
      description: "Handles creator onboarding and support",
      peopleCount: 1,
      avatarColor: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 4,
      initials: "BM",
      title: "Brand manager",
      description: "Manages brand partnerships and campaigns.",
      peopleCount: 1,
      avatarColor: "bg-pink-100 text-pink-700",
    },
    {
      id: 5,
      initials: "BM",
      title: "Brand manager",
      description: "Manages brand partnerships and campaigns.",
      peopleCount: 1,
      avatarColor: "bg-pink-100 text-pink-700",
    },
  ];

  const handlePermissionChange = (
    category: "userManagement" | "creatorManagement" | "brandManagement",
    permission: string
  ) => {
    setPermissions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [permission]: !prev[category][permission as keyof typeof prev[typeof category]],
      },
    }));
  };

  const handleSaveRole = () => {
    // Handle save logic here
    console.log("Saving role:", { roleName, roleDescription, permissions });
    setIsCreateRoleModalOpen(false);
    setRoleName("");
    setRoleDescription("");
    setPermissions({
      userManagement: {
        manageTeamMembers: false,
        assignRoles: false,
        viewUsers: false,
      },
      creatorManagement: {
        manageCreators: false,
        creatorCampaigns: false,
        creatorSupport: false,
        creatorPayments: false,
      },
      brandManagement: {
        manageBrands: false,
        brandPartnerships: false,
        brandReports: false,
      },
    });
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
          <h1 className="text-lg font-semibold text-[#262626]">Settings</h1>
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
          <h2 className="text-2xl font-bold text-[#262626] mb-6">Settings</h2>

          {/* Tabs */}
          <div className="flex items-center gap-6 mb-6 border-b border-[#eadfce]">
            <button
              onClick={() => setActiveTab("roles")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "roles"
                  ? "text-[#f59d1a] border-b-2 border-[#f59d1a]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Manage roles
            </button>
            <button
              onClick={() => setActiveTab("notification")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "notification"
                  ? "text-[#f59d1a] border-b-2 border-[#f59d1a]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Notification
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`pb-3 px-1 text-sm font-medium transition ${
                activeTab === "audit"
                  ? "text-[#f59d1a] border-b-2 border-[#f59d1a]"
                  : "text-[#8a7b65] hover:text-[#262626]"
              }`}
            >
              Audit Log
            </button>
          </div>

          {/* Manage Roles Tab Content */}
          {activeTab === "roles" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#262626]">Manage roles</h3>
                <button
                  onClick={() => setIsCreateRoleModalOpen(true)}
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
                  Add new
                </button>
              </div>

              {/* Role Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rolesData.map((role) => (
                  <div
                    key={role.id}
                    className="bg-white rounded-lg border border-[#eadfce] p-6 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`h-12 w-12 rounded-full ${role.avatarColor} flex items-center justify-center font-semibold text-lg`}
                      >
                        {role.initials}
                      </div>
                      <button
                        type="button"
                        aria-label="Role options"
                        className="text-[#8a7b65] hover:text-[#262626] transition"
                      >
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
                    </div>
                    <h4 className="text-lg font-bold text-[#262626] mb-2">
                      {role.title}
                    </h4>
                    <p className="text-sm text-[#8a7b65] mb-4">
                      {role.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#262626]">
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{role.peopleCount} person</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notification Tab Content */}
          {activeTab === "notification" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#262626]">Notifications</h3>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notificationSettings.globalEmail}
                      onChange={(e) =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          globalEmail: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                    />
                    <span className="text-sm font-medium text-[#262626]">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notificationSettings.globalPush}
                      onChange={(e) =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          globalPush: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                    />
                    <span className="text-sm font-medium text-[#262626]">Push</span>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#eadfce] p-6">
                {/* User signup */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#262626] mb-4">User signup</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        New institution signup request pending approval
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.userSignup.newInstitutionSignup.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userSignup: {
                                ...prev.userSignup,
                                newInstitutionSignup: {
                                  ...prev.userSignup.newInstitutionSignup,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.userSignup.newInstitutionSignup.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userSignup: {
                                ...prev.userSignup,
                                newInstitutionSignup: {
                                  ...prev.userSignup.newInstitutionSignup,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        Institution account flagged or suspended (auto/manual)
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.userSignup.institutionFlagged.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userSignup: {
                                ...prev.userSignup,
                                institutionFlagged: {
                                  ...prev.userSignup.institutionFlagged,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.userSignup.institutionFlagged.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userSignup: {
                                ...prev.userSignup,
                                institutionFlagged: {
                                  ...prev.userSignup.institutionFlagged,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* User alerts */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[#262626] mb-4">User alerts</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        New user signups (daily summary by role)
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.userAlerts.newUserSignups.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userAlerts: {
                                ...prev.userAlerts,
                                newUserSignups: {
                                  ...prev.userAlerts.newUserSignups,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.userAlerts.newUserSignups.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userAlerts: {
                                ...prev.userAlerts,
                                newUserSignups: {
                                  ...prev.userAlerts.newUserSignups,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        User account flagged for suspicious activity or abuse reports
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.userAlerts.accountFlagged.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userAlerts: {
                                ...prev.userAlerts,
                                accountFlagged: {
                                  ...prev.userAlerts.accountFlagged,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.userAlerts.accountFlagged.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userAlerts: {
                                ...prev.userAlerts,
                                accountFlagged: {
                                  ...prev.userAlerts.accountFlagged,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        Multiple failed login attempts from same IP (security alert)
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.userAlerts.failedLoginAttempts.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userAlerts: {
                                ...prev.userAlerts,
                                failedLoginAttempts: {
                                  ...prev.userAlerts.failedLoginAttempts,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.userAlerts.failedLoginAttempts.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              userAlerts: {
                                ...prev.userAlerts,
                                failedLoginAttempts: {
                                  ...prev.userAlerts.failedLoginAttempts,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking alerts */}
                <div>
                  <h4 className="text-sm font-semibold text-[#262626] mb-4">Booking alerts</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        Large event booking request pending manual approval
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.bookingAlerts.largeEventBooking.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              bookingAlerts: {
                                ...prev.bookingAlerts,
                                largeEventBooking: {
                                  ...prev.bookingAlerts.largeEventBooking,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.bookingAlerts.largeEventBooking.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              bookingAlerts: {
                                ...prev.bookingAlerts,
                                largeEventBooking: {
                                  ...prev.bookingAlerts.largeEventBooking,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-[#eadfce]">
                      <span className="text-sm text-[#262626]">
                        Booking override executed by a Hall Manager
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.bookingAlerts.bookingOverride.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              bookingAlerts: {
                                ...prev.bookingAlerts,
                                bookingOverride: {
                                  ...prev.bookingAlerts.bookingOverride,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.bookingAlerts.bookingOverride.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              bookingAlerts: {
                                ...prev.bookingAlerts,
                                bookingOverride: {
                                  ...prev.bookingAlerts.bookingOverride,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-[#262626]">
                        Double-booking conflict detected in same hall & timeslot
                      </span>
                      <div className="flex items-center gap-6">
                        <input
                          type="checkbox"
                          checked={notificationSettings.bookingAlerts.doubleBooking.email}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              bookingAlerts: {
                                ...prev.bookingAlerts,
                                doubleBooking: {
                                  ...prev.bookingAlerts.doubleBooking,
                                  email: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <input
                          type="checkbox"
                          checked={notificationSettings.bookingAlerts.doubleBooking.push}
                          onChange={(e) =>
                            setNotificationSettings((prev) => ({
                              ...prev,
                              bookingAlerts: {
                                ...prev.bookingAlerts,
                                doubleBooking: {
                                  ...prev.bookingAlerts.doubleBooking,
                                  push: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Audit Log Tab Content */}
          {activeTab === "audit" && (
            <div>
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
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eadfce]">
                      {auditLogData.map((log, index) => (
                        <tr key={index} className="hover:bg-[#fafafa] transition">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                            {log.user}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#262626]">
                            {log.activity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#262626]">
                            {log.time}
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
      </main>

      {/* Create New Role Modal */}
      {isCreateRoleModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce] sticky top-0 bg-white">
              <h3 className="text-xl font-semibold text-[#262626]">Create new role</h3>
              <button
                onClick={() => {
                  setIsCreateRoleModalOpen(false);
                  setRoleName("");
                  setRoleDescription("");
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
            <div className="p-6 space-y-6">
              {/* Role Name */}
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Role name
                </label>
                <input
                  type="text"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="Enter role name"
                  className="w-full px-4 py-2.5 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a] focus:border-transparent text-[#262626]"
                />
              </div>

              {/* Role Description */}
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Role description
                </label>
                <textarea
                  value={roleDescription}
                  onChange={(e) => setRoleDescription(e.target.value)}
                  placeholder="Describe this role's responsibilities"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a] focus:border-transparent text-[#262626] resize-none"
                />
              </div>

              {/* Set Permissions */}
              <div>
                <h4 className="text-lg font-semibold text-[#262626] mb-4">
                  Set Permissions
                </h4>

                {/* User Management */}
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-[#262626] mb-3">
                    User management
                  </h5>
                  <div className="space-y-2">
                    {[
                      { key: "manageTeamMembers", label: "Manage team members" },
                      { key: "assignRoles", label: "Assign roles" },
                      { key: "viewUsers", label: "View users" },
                    ].map((permission) => (
                      <label
                        key={permission.key}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={
                            permissions.userManagement[
                              permission.key as keyof typeof permissions.userManagement
                            ]
                          }
                          onChange={() =>
                            handlePermissionChange("userManagement", permission.key)
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <span className="text-sm text-[#262626]">
                          {permission.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Creator Management */}
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-[#262626] mb-3">
                    Creator management
                  </h5>
                  <div className="space-y-2">
                    {[
                      { key: "manageCreators", label: "Manage creators" },
                      { key: "creatorCampaigns", label: "Creator campaigns" },
                      { key: "creatorSupport", label: "Creator support" },
                      { key: "creatorPayments", label: "Creator payments" },
                    ].map((permission) => (
                      <label
                        key={permission.key}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={
                            permissions.creatorManagement[
                              permission.key as keyof typeof permissions.creatorManagement
                            ]
                          }
                          onChange={() =>
                            handlePermissionChange("creatorManagement", permission.key)
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <span className="text-sm text-[#262626]">
                          {permission.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Management */}
                <div>
                  <h5 className="text-sm font-medium text-[#262626] mb-3">
                    Brand management
                  </h5>
                  <div className="space-y-2">
                    {[
                      { key: "manageBrands", label: "Manage brands" },
                      { key: "brandPartnerships", label: "Brand partnerships" },
                      { key: "brandReports", label: "Brand reports" },
                    ].map((permission) => (
                      <label
                        key={permission.key}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={
                            permissions.brandManagement[
                              permission.key as keyof typeof permissions.brandManagement
                            ]
                          }
                          onChange={() =>
                            handlePermissionChange("brandManagement", permission.key)
                          }
                          className="w-5 h-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-2 focus:ring-[#f59d1a] focus:ring-offset-0"
                        />
                        <span className="text-sm text-[#262626]">
                          {permission.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce] sticky bottom-0 bg-white">
              <button
                onClick={() => {
                  setIsCreateRoleModalOpen(false);
                  setRoleName("");
                  setRoleDescription("");
                }}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:text-[#8a7b65] transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRole}
                disabled={!roleName.trim()}
                className="px-4 py-2 bg-[#f59d1a] text-white rounded-lg hover:bg-[#e08d15] transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
