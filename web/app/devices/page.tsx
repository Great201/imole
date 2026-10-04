import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/lib/shell";

export default function DevicesPage() {
  const getDeviceIcon = (deviceName: string) => {
    if (deviceName === "Fridge") return "/img/kitchen.svg";
    if (deviceName === "Room AC") return "/img/climate_mini_split.svg";
    if (deviceName === "Speaker") return "/img/nest_multi_room.svg";
    if (deviceName === "Standing fan") return "/img/mode_fan.svg";
    if (deviceName.includes("light")) return "/img/wb_incandescent.svg";
    return "/img/devices.svg"; // fallback
  };

  const devices = [
    {
      room: "Living room",
      items: [
        { name: "Fridge", status: "On", power: "0.9kw", active: true },
        { name: "Room AC", status: "On", power: "0.9kw", active: true },
        { name: "Speaker", status: "offline", power: "0kw", active: false },
        { name: "living room light", status: "off", power: "0kw", active: false },
      ],
    },
    {
      room: "Kitchen",
      items: [
        { name: "Fridge", status: "On", power: "0.9kw", active: true },
        { name: "Standing fan", status: "off", power: "0kw", active: false },
        { name: "Speaker", status: "offline", power: "0kw", active: false },
        { name: "living room light", status: "off", power: "0kw", active: false },
      ],
    },
  ];

  return (
    <Shell className="bg-white text-[#262626]">

        {/* Main content */}
        <section className="flex-1 overflow-y-auto bg-white">
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
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#262626] mb-8">Devices</h1>

            <div className="space-y-8">
              {devices.map((room) => (
                <div key={room.room}>
                  <h2 className="text-lg font-semibold text-[#262626] mb-4">
                    {room.room}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {room.items.map((device) => (
                      <Link
                        key={device.name}
                        href={`/devices/${encodeURIComponent(device.name.toLowerCase().replace(/\s+/g, "-"))}`}
                        className={`flex items-center gap-4 rounded-xl px-4 py-3 transition cursor-pointer hover:shadow-md ${
                          device.active
                            ? "bg-[#f9e0b8]"
                            : "bg-[#f5f5f5]"
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                          <Image
                            src={getDeviceIcon(device.name)}
                            alt={device.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#262626]">{device.name}</p>
                          <p
                            className={`text-sm ${
                              device.active
                                ? "text-[#5b3b13]"
                                : "text-[#8a7b65]"
                            }`}
                          >
                            {device.status}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#262626]">{device.power}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </Shell>
  );
}

