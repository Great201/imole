// Display formatting. All `Intl`, no dependencies.
//
// The rule this file exists to enforce: types carry raw values, the UI carries
// formatting. Today's mock data does the opposite — it stores "₦20,000",
// "0.9kw", "4" and "52 mins ago", which a real API can never supply. Money is
// integer kobo (never a float), power is a number, instants are ISO-8601.

const NUM = new Intl.NumberFormat("en-NG");
const NAIRA_WHOLE = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});
const NAIRA_EXACT = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const KWH = new Intl.NumberFormat("en-NG", { maximumFractionDigits: 1 });
const KW = new Intl.NumberFormat("en-NG", { maximumFractionDigits: 3 });
const DATE_SHORT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const TIME = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
const RELATIVE = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

/**
 * Money. Always takes integer **kobo** so arithmetic never touches a float:
 * `naira(2_000_000)` → "₦20,000". Pass `exact` for the sub-naira amounts the
 * designs show, e.g. `naira(1280, true)` → "₦12.80".
 */
export function naira(kobo: number, exact = false): string {
  const amount = kobo / 100;
  return exact ? NAIRA_EXACT.format(amount) : NAIRA_WHOLE.format(amount);
}

export const kwh = (n: number): string => `${KWH.format(n)} kWh`;
export const kw = (n: number): string => `${KW.format(n)} kW`;
export const count = (n: number): string => NUM.format(n);

/** "+18%" / "-4%" / "0%" — the sign is part of the output, not the input. */
export const delta = (pct: number): string => `${pct > 0 ? "+" : ""}${NUM.format(pct)}%`;

function parse(iso: string | null | undefined): Date | null {
  if (!iso) return null;
  const ms = Date.parse(iso);
  return Number.isNaN(ms) ? null : new Date(ms);
}

/** "12:00pm" — Intl gives "12:00 PM"; the designs show it tight and lowercase. */
function clockTime(d: Date): string {
  return TIME.format(d)
    .replace(/ /g, " ") // Intl uses a narrow no-break space before AM/PM
    .replace(/\s?([AP])M$/i, (_m, p: string) => `${p.toLowerCase()}m`);
}

/** "Aug 23, 2025" */
export function shortDate(iso: string | null | undefined): string {
  const d = parse(iso);
  return d ? DATE_SHORT.format(d) : "—";
}

/** "Aug 23, 2025 @ 9:23am" — the format the admin tables use. */
export function dateTime(iso: string | null | undefined): string {
  const d = parse(iso);
  return d ? `${DATE_SHORT.format(d)} @ ${clockTime(d)}` : "—";
}

const UNITS: ReadonlyArray<[Intl.RelativeTimeFormatUnit, number]> = [
  ["year", 31_536_000_000],
  ["month", 2_592_000_000],
  ["week", 604_800_000],
  ["day", 86_400_000],
  ["hour", 3_600_000],
  ["minute", 60_000],
  ["second", 1_000],
];

/**
 * "52 minutes ago" / "in 3 days" / "now". Replaces the pre-rendered
 * `lastSeen: "52 mins ago"` strings, which go stale the moment they are stored.
 */
export function relative(iso: string | null | undefined): string {
  const d = parse(iso);
  if (!d) return "never";
  const diff = d.getTime() - Date.now(); // negative in the past
  const abs = Math.abs(diff);
  for (const [unit, ms] of UNITS) {
    if (abs >= ms || unit === "second") return RELATIVE.format(Math.round(diff / ms), unit);
  }
  return "now";
}

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function describeDays(days: Set<number>): string {
  if (days.size >= 7) return "Daily";
  const has = (...d: number[]) => d.every((x) => days.has(x));
  if (days.size === 5 && has(1, 2, 3, 4, 5)) return "Weekdays";
  if (days.size === 2 && has(0, 6)) return "Weekends";
  if (days.size === 1) return `Every ${DAY_SHORT[[...days][0]]}`;
  return [...days]
    .sort((a, b) => a - b)
    .map((d) => DAY_SHORT[d])
    .join(", ");
}

/**
 * Derives a routine's display time and frequency from `timeAndDay`.
 *
 * The API stores an array of ISO instants, not a wall-clock time plus a rule,
 * so both halves of what the UI shows ("12:00pm", "Weekdays") have to be
 * reconstructed from the set of instants.
 *
 * ponytail: formats in the viewer's local timezone. A schedule is really a
 * wall-clock intent, so someone in a different zone than the one that created
 * the routine sees it shifted. A real fix needs the API to store a time plus a
 * day mask instead of instants — nothing on this side can recover the original
 * zone.
 */
export function formatSchedule(timeAndDay: string[] | null | undefined): {
  time: string;
  frequency: string;
} {
  const dates = (timeAndDay ?? []).map(parse).filter((d): d is Date => d !== null);
  if (!dates.length) return { time: "—", frequency: "Not scheduled" };

  const days = new Set(dates.map((d) => d.getDay()));

  // Nothing in the API constrains the instants to share a clock time, so there
  // may be no single time to show. Reporting one day's time beside a multi-day
  // frequency would silently misstate every other day — say "Varies" instead.
  //
  // ponytail: collapses to one label. If the designs need per-day times, this
  // has to return a day->time list and /routines has to render it.
  const times = new Set(dates.map(clockTime));
  return {
    time: times.size === 1 ? [...times][0] : "Varies",
    frequency: describeDays(days),
  };
}
