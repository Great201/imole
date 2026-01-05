"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RoutinesPage() {
  const [showNewRoutine, setShowNewRoutine] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [showDevicesModal, setShowDevicesModal] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState("07:00am");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [repeats, setRepeats] = useState(true);
  const [notify, setNotify] = useState(true);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [routineName, setRoutineName] = useState("");

  const routines = [
    {
      id: "1",
      name: "Lunch break",
      devices: 1,
      time: "12:00pm",
      frequency: "Weekdays",
    },
    {
      id: "2",
      name: "Wake up",
      devices: 2,
      time: "6:30am",
      frequency: "Daily",
    },
    {
      id: "3",
      name: "Exercise",
      devices: 1,
      time: "7:00pm",
      frequency: "3 times a week",
    },
    {
      id: "4",
      name: "Bed time",
      devices: 3,
      time: "10:00pm",
      frequency: "Repeats",
    },
  ];

  const devices = [
    {
      room: "Living room",
      items: [
        { name: "Fridge", status: "On", id: "fridge-lr" },
        { name: "Room AC", status: "On", id: "room-ac" },
        { name: "Speaker", status: "offline", id: "speaker-lr" },
        { name: "living room light", status: "off", id: "light-lr" },
      ],
    },
    {
      room: "Kitchen",
      items: [
        { name: "Fridge", status: "On", id: "fridge-kitchen" },
        { name: "Standing fan", status: "off", id: "standing-fan" },
      ],
    },
  ];

  const getDeviceIcon = (deviceName: string) => {
    if (deviceName === "Fridge") return "/img/kitchen.svg";
    if (deviceName === "Room AC") return "/img/climate_mini_split.svg";
    if (deviceName === "Speaker") return "/img/nest_multi_room.svg";
    if (deviceName === "Standing fan") return "/img/mode_fan.svg";
    if (deviceName.includes("light")) return "/img/wb_incandescent.svg";
    return "/img/devices.svg";
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleDevice = (deviceId: string) => {
    setSelectedDevices((prev) =>
      prev.includes(deviceId)
        ? prev.filter((d) => d !== deviceId)
        : [...prev, deviceId]
    );
  };

  const days = [
    { label: "S", value: "sun" },
    { label: "M", value: "mon" },
    { label: "T", value: "tue" },
    { label: "W", value: "wed" },
    { label: "Th", value: "thu" },
    { label: "F", value: "fri" },
    { label: "S", value: "sat" },
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
              { label: "Routine", icon: "routine", href: "/routines", active: true },
              { label: "Budget", icon: "budget", href: "/home/budget" },
              { label: "Rooms", icon: "rooms", href: "/home/rooms" },
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
        <section className="flex-1 overflow-y-auto">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-[#eadfce] bg-[#fdf6eb] px-8">
            <h1 className="text-3xl font-bold text-[#262626]">Routines</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowNewRoutine(true)}
                className="rounded-full bg-[#f59d1a] px-4 py-2 text-sm font-medium text-white hover:bg-[#e48805] transition"
              >
                + Add
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Routines List */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {routines.map((routine) => (
                    <div
                      key={routine.id}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-[#eadfce] hover:shadow-md transition cursor-pointer"
                      onClick={() => setSelectedRoutine(routine.id)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5eee2]">
                        <Image
                          src="/img/routine.svg"
                          alt="Routine"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-[#262626]">{routine.name}</p>
                        <p className="text-xs text-[#8a7b65]">
                          {routine.devices} device{routine.devices !== 1 ? "s" : ""} • {routine.time} • {routine.frequency}
                        </p>
                      </div>
                      <button className="text-[#f59d1a] hover:text-[#e48805] transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* New Routine Sidebar */}
              {showNewRoutine && (
                <div className="lg:col-span-1 rounded-xl bg-white p-6 shadow-sm border border-[#eadfce] h-fit">
                  <div className="flex items-center gap-4 mb-6">
                    <button
                      onClick={() => setShowNewRoutine(false)}
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
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h2 className="text-lg font-semibold text-[#262626]">New routine</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Routine name */}
                    <div>
                      <label className="block text-sm font-medium text-[#262626] mb-2">
                        Routine name
                      </label>
                      <input
                        type="text"
                        value={routineName}
                        onChange={(e) => setRoutineName(e.target.value)}
                        placeholder="e.g Out of Home"
                        className="w-full border-b border-[#eadfce] pb-2 focus:outline-none focus:border-[#f59d1a] text-[#262626]"
                      />
                    </div>

                    {/* Time and day */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/img/alarm_smart_wake.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <label className="text-sm font-medium text-[#262626]">Time and day</label>
                      </div>
                      <button
                        onClick={() => setShowTimeModal(true)}
                        className="text-sm text-[#f59d1a] hover:text-[#e48805] transition"
                      >
                        + Set time
                      </button>
                      {selectedTime && (
                        <p className="text-sm text-[#8a7b65] mt-1">{selectedTime}</p>
                      )}
                    </div>

                    {/* Action to be taken */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/img/routine.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <label className="text-sm font-medium text-[#262626]">Action to be taken</label>
                      </div>
                      <button
                        onClick={() => setShowActionModal(true)}
                        className="text-sm text-[#f59d1a] hover:text-[#e48805] transition"
                      >
                        + Add action
                      </button>
                      {selectedAction && (
                        <p className="text-sm text-[#8a7b65] mt-1">{selectedAction}</p>
                      )}
                    </div>

                    {/* Devices */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/img/devices.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <label className="text-sm font-medium text-[#262626]">Devices</label>
                      </div>
                      <button
                        onClick={() => setShowDevicesModal(true)}
                        className="text-sm text-[#f59d1a] hover:text-[#e48805] transition"
                      >
                        + Choose devices
                      </button>
                      {selectedDevices.length > 0 && (
                        <p className="text-sm text-[#8a7b65] mt-1">
                          {selectedDevices.length} device{selectedDevices.length !== 1 ? "s" : ""} selected
                        </p>
                      )}
                    </div>

                    {/* Save button */}
                    <button className="w-full rounded-lg bg-[#f59d1a] px-4 py-3 text-sm font-medium text-white hover:bg-[#e48805] transition">
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Select Time Modal */}
      {showTimeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h2 className="text-lg font-semibold text-[#262626]">Select time</h2>
              <button
                onClick={() => setShowTimeModal(false)}
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
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-[#f5eee2] rounded-lg px-4 py-2 text-2xl font-semibold text-[#262626]">
                  07
                </div>
                <span className="text-2xl font-semibold text-[#262626]">:</span>
                <div className="bg-[#f5eee2] rounded-lg px-4 py-2 text-2xl font-semibold text-[#262626]">
                  00
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedTime.includes("am")
                      ? "bg-[#f9e0b8] text-[#5b3b13]"
                      : "bg-[#f5eee2] text-[#8a7b65]"
                  }`}
                  onClick={() => setSelectedTime("07:00am")}
                >
                  AM
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedTime.includes("pm")
                      ? "bg-[#f9e0b8] text-[#5b3b13]"
                      : "bg-[#f5eee2] text-[#8a7b65]"
                  }`}
                  onClick={() => setSelectedTime("07:00pm")}
                >
                  PM
                </button>
              </div>
              <div className="h-64 bg-[#f5eee2] rounded-lg flex items-center justify-center border border-[#eadfce] mb-4">
                <p className="text-sm text-[#8a7b65]">Analog clock placeholder</p>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowTimeModal(false)}
                  className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowTimeModal(false);
                    setShowNewRoutine(true);
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#f59d1a] hover:bg-[#e48805] rounded-lg transition"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Set Time and Day Sidebar */}
      {showTimeModal && (
        <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setShowTimeModal(false)}
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
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-lg font-semibold text-[#262626]">Set time and day</h2>
            </div>

            <div className="space-y-6">
              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">Time</label>
                <input
                  type="text"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2 border border-[#eadfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f59d1a] bg-white text-[#262626]"
                />
              </div>

              {/* Days */}
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">Days</label>
                <div className="flex gap-2">
                  {days.map((day) => (
                    <button
                      key={day.value}
                      onClick={() => toggleDay(day.value)}
                      className={`flex-1 h-10 rounded-full text-sm font-medium transition ${
                        selectedDays.includes(day.value)
                          ? "bg-[#f59d1a] text-white"
                          : "bg-[#f5eee2] text-[#8a7b65] hover:bg-[#f9e0b8]"
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Repeats */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={repeats}
                  onChange={(e) => setRepeats(e.target.checked)}
                  className="h-5 w-5 rounded border-[#eadfce] text-[#f59d1a] focus:ring-[#f59d1a]"
                />
                <label className="text-sm text-[#262626]">Repeats</label>
              </div>

              {/* Notify */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-[#262626]">Notify me when the routine starts</label>
                <button
                  onClick={() => setNotify(!notify)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    notify ? "bg-[#f59d1a]" : "bg-[#e0d4c2]"
                  }`}
                >
                  <span
                    className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                      notify ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Save button */}
              <button className="w-full rounded-lg bg-[#f59d1a] px-4 py-3 text-sm font-medium text-white hover:bg-[#e48805] transition">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Select Action Modal */}
      {showActionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h2 className="text-lg font-semibold text-[#262626]">Select action</h2>
              <button
                onClick={() => setShowActionModal(false)}
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
            <div className="p-6 space-y-3">
              <button
                onClick={() => {
                  setSelectedAction("Turn on all devices");
                  setShowActionModal(false);
                }}
                className={`w-full p-4 rounded-lg border-2 text-left transition ${
                  selectedAction === "Turn on all devices"
                    ? "border-[#f59d1a] bg-[#f9e0b8]"
                    : "border-[#eadfce] hover:bg-[#f5eee2]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#262626]">Turn on all devices</span>
                  {selectedAction === "Turn on all devices" && (
                    <div className="h-5 w-5 rounded-full bg-[#f59d1a] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
              <button
                onClick={() => {
                  setSelectedAction("Turn off all devices");
                  setShowActionModal(false);
                }}
                className={`w-full p-4 rounded-lg border-2 text-left transition ${
                  selectedAction === "Turn off all devices"
                    ? "border-[#f59d1a] bg-[#f9e0b8]"
                    : "border-[#eadfce] hover:bg-[#f5eee2]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#262626]">Turn off all devices</span>
                  {selectedAction === "Turn off all devices" && (
                    <div className="h-5 w-5 rounded-full bg-[#f59d1a] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => setShowActionModal(false)}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowActionModal(false);
                  setShowNewRoutine(true);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-[#f59d1a] hover:bg-[#e48805] rounded-lg transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Devices Modal */}
      {showDevicesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce] sticky top-0 bg-white">
              <h2 className="text-lg font-semibold text-[#262626]">Add devices</h2>
              <button
                onClick={() => setShowDevicesModal(false)}
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
            <div className="p-6 space-y-6">
              {devices.map((room) => (
                <div key={room.room}>
                  <h3 className="text-sm font-semibold text-[#262626] mb-3">{room.room}</h3>
                  <div className="space-y-2">
                    {room.items.map((device) => (
                      <div
                        key={device.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-[#eadfce] hover:bg-[#f5eee2] transition cursor-pointer"
                        onClick={() => toggleDevice(device.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                            <Image
                              src={getDeviceIcon(device.name)}
                              alt={device.name}
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#262626]">{device.name}</p>
                            <p
                              className={`text-xs ${
                                device.status === "On"
                                  ? "text-green-600"
                                  : device.status === "offline"
                                  ? "text-gray-500"
                                  : "text-[#8a7b65]"
                              }`}
                            >
                              {device.status}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition ${
                            selectedDevices.includes(device.id)
                              ? "bg-[#f59d1a] border-[#f59d1a]"
                              : "border-[#eadfce]"
                          }`}
                        >
                          {selectedDevices.includes(device.id) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce] sticky bottom-0 bg-white">
              <button
                onClick={() => setShowDevicesModal(false)}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDevicesModal(false);
                  setShowNewRoutine(true);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-[#f59d1a] hover:bg-[#e48805] rounded-lg transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

