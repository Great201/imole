// Run: node web/lib/format.check.ts
//
// Node 24 strips TS types natively, so this needs no tsx, no jest, no config.
// It covers only the three places where being silently wrong actually costs
// something: money (kobo arithmetic), relative dates (a plausible-but-wrong
// "2 hours ago" is indistinguishable from a right one), and formatSchedule
// (derived from instants, so the day-set logic has real branches).
//
// Everything else in format.ts is a one-line Intl pass-through — YAGNI applies
// to tests too.

import assert from "node:assert/strict";
import { count, delta, formatSchedule, naira, relative, shortDate } from "./format.ts";

// Intl may use a non-breaking space or a different currency glyph depending on
// the ICU build, so compare on digits: these assert arithmetic, not glyphs.
const digits = (s: string) => s.replace(/[^\d.]/g, "");

// --- money: the round-trip that matters ------------------------------------
assert.equal(digits(naira(2_000_000)), "20000", "₦20,000 from kobo");
assert.equal(digits(naira(0)), "0", "zero");
assert.equal(digits(naira(1280, true)), "12.80", "sub-naira needs exact mode");
assert.equal(digits(naira(1_250_000)), "12500", "₦12,500 cost-saved tile");
// Rounding, not truncation: 1299 kobo is ₦12.99 → ₦13 whole.
assert.equal(digits(naira(1299)), "13", "whole mode rounds");
// Negative amounts (transactions carry a separate `sign`, but the formatter
// must not swallow one if handed it directly). `digits()` strips the minus, so
// asserting on it alone cannot catch a swallowed sign — check the raw output
// separately, and that it differs from the positive at all.
const negative = naira(-2_000_000);
const positive = naira(2_000_000);
assert.equal(digits(negative), "20000", "negative keeps its magnitude");
assert.notEqual(negative, positive, "negative must not format identically to positive");
assert.match(negative, /^-/, "negative keeps its leading minus sign");

// --- relative: past/future/now and unit selection --------------------------
const ago = (ms: number) => new Date(Date.now() - ms).toISOString();
assert.equal(relative(null), "never", "null is never, not an epoch date");
assert.equal(relative(undefined), "never");
assert.equal(relative("not-a-date"), "never", "unparseable must not throw");
assert.equal(relative(ago(52 * 60_000)), "52 minutes ago", "the 52-mins-ago case from the mocks");
assert.equal(relative(ago(2 * 3_600_000)), "2 hours ago");
assert.equal(relative(ago(3 * 86_400_000)), "3 days ago");
assert.ok(relative(ago(500)).includes("now"), "sub-second is now");
assert.ok(
  relative(new Date(Date.now() + 3 * 86_400_000).toISOString()).startsWith("in "),
  "future reads forwards",
);

// --- formatSchedule: day-set branches --------------------------------------
// Build instants at a fixed *local* clock time so `time` is timezone-stable.
const at = (y: number, m: number, d: number, h = 12) => new Date(y, m, d, h, 0, 0).toISOString();
// 2 Mar 2026 is a Monday, so 2..6 are Mon–Fri and 7..8 are Sat–Sun.
const mon = at(2026, 2, 2);
const weekdays = [2, 3, 4, 5, 6].map((d) => at(2026, 2, d));
const weekend = [7, 8].map((d) => at(2026, 2, d));
const everyDay = [2, 3, 4, 5, 6, 7, 8].map((d) => at(2026, 2, d));

assert.deepEqual(formatSchedule([]), { time: "—", frequency: "Not scheduled" }, "empty");
assert.deepEqual(formatSchedule(null), { time: "—", frequency: "Not scheduled" }, "null");
assert.equal(formatSchedule(weekdays).frequency, "Weekdays");
assert.equal(formatSchedule(weekend).frequency, "Weekends");
assert.equal(formatSchedule(everyDay).frequency, "Daily");
assert.equal(formatSchedule([mon]).frequency, "Every Mon", "single day names the day");
assert.equal(
  formatSchedule([at(2026, 2, 2), at(2026, 2, 4), at(2026, 2, 6)]).frequency,
  "Mon, Wed, Fri",
  "arbitrary sets list days in week order",
);
// Differing clock times have no single answer, so the label must say so rather
// than pick one day's time and imply it applies to all of them.
assert.equal(
  formatSchedule([at(2026, 2, 4, 18), at(2026, 2, 2, 9)]).time,
  "Varies",
  "mixed times must not be reported as a single time",
);
// A shared clock time across several days still reports that time, and input
// order must not change it.
assert.equal(
  formatSchedule([at(2026, 2, 4, 9), at(2026, 2, 2, 9)]).time,
  "9:00am",
  "one time across many days is reported, order-independently",
);
assert.equal(
  formatSchedule(weekdays).time,
  formatSchedule([at(2026, 2, 2)]).time,
  "uniform weekday schedule keeps its single time",
);
assert.equal(formatSchedule([at(2026, 2, 2, 12)]).time, "12:00pm", "noon, tight and lowercase");
assert.equal(formatSchedule([at(2026, 2, 2, 0)]).time, "12:00am", "midnight is 12am, not 0am");
// A bad entry mixed with a good one must not poison the result.
assert.equal(formatSchedule(["nope", mon]).frequency, "Every Mon", "bad entries are dropped");

// --- small ones worth one line each ----------------------------------------
assert.equal(count(15000), "15,000", "counts are grouped, not raw");
assert.equal(delta(18), "+18%", "positive delta gets an explicit +");
assert.equal(delta(-4), "-4%");
assert.equal(delta(0), "0%", "zero gets no sign");
assert.equal(shortDate(null), "—");
assert.equal(shortDate(at(2026, 7, 23)), "Aug 23, 2026");

console.log("format.check.ts: all checks passed");
