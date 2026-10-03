// Domain types for the Imole API.
//
// REQUEST shapes below are exact — taken from the OpenAPI spec at
// https://staging.api.imole.com.ng/v2/api-json and verified against live 400s.
//
// RESPONSE shapes are NOT verified. Every `*ResponseDto` in that spec declares
// `properties: {}` (zero fields), and the API 401s on all 13 resources, so no
// response body has ever been observed. Therefore: `id` is assumed present and
// everything else is optional. Over-claiming unseen fields under `strict: true`
// produces confident wrong code; under-claiming forces the UI to handle absence.
//
// To replace these guesses with observed shapes, run the capture script from
// Phase 0 of the plan (signin + GET every list, print keys) and tighten this file.

/** The 13 resources that share the identical GET/POST/GET{id}/PATCH{id} quartet. */
export type Resource =
  | "device"
  | "devicetype"
  | "devicecategory"
  | "room"
  | "unit"
  | "period"
  | "budget"
  | "routine"
  | "actiontobetaken"
  | "feedback"
  | "privacysettings"
  | "notificationsettings"
  | "termsofservice";

// ---------------------------------------------------------------------------
// Responses (UNVERIFIED — see header)
// ---------------------------------------------------------------------------

/** Fields we assume every record carries. */
type Entity = {
  id: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

/** `{name}`-only resources: devicetype, devicecategory, room, unit, period. */
export type Named = Entity & { name?: string | null };

export type DeviceType = Named;
export type DeviceCategory = Named;
export type Unit = Named;
export type Period = Named;
export type Room = Named;

export type Device = Entity & {
  name?: string | null;
  roomId?: string | null;
  deviceTypeId?: string | null;
  deviceCategoryId?: string | null;
};

export type Budget = Entity & {
  name?: string | null;
  unitId?: string | null;
  periodId?: string | null;
  goal?: number | null;
  limit?: number | null;
};

export type Routine = Entity & {
  name?: string | null;
  /** ISO-8601 instants, e.g. "2026-05-04T17:12:53.819+00:00". */
  timeAndDay?: string[] | null;
  /** ActionToBeTaken ids. */
  actionToBeTaken?: string[] | null;
  /** Device ids. */
  devices?: string[] | null;
};

export type ActionToBeTaken = Entity & { title?: string | null };

export type Feedback = Entity & {
  title?: string | null;
  body?: string | null;
};

/** privacysettings and notificationsettings share this shape. */
export type Setting = Entity & {
  node?: string | null;
  title?: string | null;
  description?: string | null;
  value?: boolean | null;
};

export type PrivacySetting = Setting;
export type NotificationSetting = Setting;

export type TermsOfService = Entity & {
  key?: string | null;
  title?: string | null;
  description?: string | null;
  terms?: unknown[] | null;
};

/**
 * The signed-in user, normalized out of the signin response.
 *
 * There is no `/me` endpoint and no `GET /userprofiles/{id}` (PATCH only), so
 * this is captured once at signin and cannot be re-fetched. Every field except
 * `email` may be absent, depending on what signin actually returns.
 */
export type AuthUser = {
  id: string | null;
  email: string;
  firstName: string | null;
  lastName: string | null;
};

// ---------------------------------------------------------------------------
// Requests (EXACT — from the spec)
// ---------------------------------------------------------------------------

export type SignInDto = { email: string; password: string };
export type VerifyEmailDto = { email: string; otp: string };
/** Body is undocumented in the spec; `{email}` verified live (`{}` returns 404). */
export type ResendOtpDto = { email: string };
export type ResetPasswordRequestDto = { email: string };
export type ResetPasswordDto = {
  otp: string;
  userId: string;
  oldPassword: string;
  newPassword: string;
};

export type CreateUserProfileDto = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export type UpdateUserProfileDto = Partial<{
  email: string;
  firstName: string;
  lastName: string;
  /** Capitalized in the spec — not a typo here. */
  IsVerified: boolean;
}>;

export type NamedDto = { name: string };

export type DeviceDto = {
  deviceTypeId: string;
  deviceCategoryId: string;
  roomId: string;
  name: string;
};

export type BudgetDto = {
  name: string;
  unitId: string;
  goal: number;
  periodId: string;
  limit: number;
};

export type RoutineDto = {
  name: string;
  timeAndDay: string[];
  actionToBeTaken: string[];
  devices: string[];
};

export type ActionToBeTakenDto = { title: string };
export type FeedbackDto = { title: string; body: string };
export type SettingDto = {
  node: string;
  title: string;
  description: string;
  value: boolean;
};
export type TermsOfServiceDto = {
  key: string;
  title: string;
  description: string;
  terms: unknown[];
};
