"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type RoomId = "living-room" | "kitchen" | "main-bedroom" | "gym" | "guest-room";

type Room = {
  id: RoomId;
  name: string;
  deviceCount: number;
  devices: { id: string; name: string; status: "On" | "off" | "offline" }[];
};

const ROOMS: Room[] = [
  {
    id: "living-room",
    name: "Living room",
    deviceCount: 3,
    devices: [
      { id: "room-ac", name: "Room AC", status: "On" },
      { id: "speaker-lr", name: "Speaker", status: "offline" },
      { id: "light-lr", name: "living room light", status: "off" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    deviceCount: 3,
    devices: [
      { id: "fridge-kitchen", name: "Fridge", status: "On" },
      { id: "standing-fan", name: "Standing fan", status: "off" },
      { id: "speaker-kitchen", name: "Speaker", status: "offline" },
    ],
  },
  {
    id: "main-bedroom",
    name: "Main bedroom",
    deviceCount: 3,
    devices: [
      { id: "ac-main", name: "Room AC", status: "On" },
      { id: "light-main", name: "Bedroom light", status: "off" },
      { id: "fan-main", name: "Standing fan", status: "off" },
    ],
  },
  {
    id: "gym",
    name: "Gym",
    deviceCount: 3,
    devices: [
      { id: "speaker-gym", name: "Speaker", status: "offline" },
      { id: "light-gym", name: "Gym light", status: "off" },
      { id: "fan-gym", name: "Standing fan", status: "off" },
    ],
  },
  {
    id: "guest-room",
    name: "Guest room",
    deviceCount: 3,
    devices: [
      { id: "ac-guest", name: "Room AC", status: "On" },
      { id: "light-guest", name: "Guest room light", status: "off" },
      { id: "speaker-guest", name: "Speaker", status: "offline" },
    ],
  },
];

function getDeviceIcon(name: string) {
  if (name.includes("Fridge")) return "/img/kitchen.svg";
  if (name.includes("Room AC") || name === "AC") return "/img/climate_mini_split.svg";
  if (name.includes("Speaker")) return "/img/nest_multi_room.svg";
  if (name.toLowerCase().includes("fan")) return "/img/mode_fan.svg";
  if (name.toLowerCase().includes("light")) return "/img/wb_incandescent.svg";
  return "/img/devices.svg";
}

export default function RoomsPage() {
  const [selectedRoomId, setSelectedRoomId] = useState<RoomId | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const selectedRoom = selectedRoomId
    ? ROOMS.find((room) => room.id === selectedRoomId)
    : null;

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
              { label: "Rooms", icon: "rooms", href: "/rooms", active: true },
              { label: "Members", icon: "members", href: "/members" },
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
            <h1 className="text-3xl font-bold text-[#262626]">Rooms</h1>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#f59d1a] px-4 py-2 text-sm font-medium text-white hover:bg-[#e48805] transition">
                <span className="text-lg leading-none">+</span>
                <span>New Room</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
              {ROOMS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-left shadow-sm border border-[#eadfce] hover:shadow-md transition"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#262626]">
                      {room.name}
                    </p>
                    <p className="text-xs text-[#8a7b65]">
                      {room.deviceCount} devices
                    </p>
                  </div>
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
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Room drawer */}
      {selectedRoomId && selectedRoom && (
        <div className="fixed right-0 top-0 z-40 h-full w-full max-w-md bg-white shadow-2xl border-l border-[#eadfce]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#eadfce]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedRoomId(null)}
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
              <h2 className="text-lg font-semibold text-[#262626]">
                {selectedRoom.name}
              </h2>
            </div>
            <div className="relative">
              {/* Static kebab; no dropdown content required for now */}
              <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#f5eee2] text-[#8a7b65]">
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
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="px-6 py-6 space-y-4">
            <h3 className="text-sm font-semibold text-[#262626] mb-2">
              Devices
            </h3>
            <div className="space-y-3">
              {selectedRoom.devices.map((device) => (
                <div
                  key={device.id}
                  className="flex items-center justify-between rounded-xl bg-[#f5eee2] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                      <Image
                        src={getDeviceIcon(device.name)}
                        alt={device.name}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#262626]">
                        {device.name}
                      </p>
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
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f59d1a] text-white text-[10px]">
                      ✓
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowEditModal(true)}
                className="inline-flex items-center gap-2 rounded-full border border-[#e0d4c2] bg-white px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] transition"
              >
                Edit room
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit room modal */}
      {showEditModal && selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b border-[#eadfce]">
              <h2 className="text-lg font-semibold text-[#262626]">Edit room</h2>
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

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-[#262626] mb-2">
                  Room name
                </label>
                <input
                  type="text"
                  defaultValue={selectedRoom.name}
                  className="w-full border-b border-[#eadfce] pb-2 focus:outline-none focus:border-[#f59d1a] text-[#262626]"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#262626] mb-3">
                  Add devices
                </h3>
                <div className="space-y-2">
                  {selectedRoom.devices.map((device) => (
                    <div
                      key={device.id}
                      className="flex items-center justify-between rounded-xl border border-[#eadfce] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5eee2]">
                          <Image
                            src={getDeviceIcon(device.name)}
                            alt={device.name}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#262626]">
                            {device.name}
                          </p>
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
                      <div className="h-5 w-5 rounded-full border-2 border-[#f59d1a] flex items-center justify-center text-[#f59d1a] text-[10px]">
                        ✓
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#eadfce]">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-sm font-medium text-[#262626] hover:bg-[#f5eee2] rounded-lg transition"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#f59d1a] hover:bg-[#e48805] rounded-lg transition">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


