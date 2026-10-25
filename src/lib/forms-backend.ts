// Website forms backend switch.
//
// DRC has no BAA with Vercel, so the forms are moving to the AWS forms API in
// the drip prod account: the browser posts the form straight to that API and
// the insurance card images straight to S3 with a presigned POST. Nothing
// with form data goes through a Vercel route in that mode.
//
//   NEXT_PUBLIC_FORMS_BACKEND   "aws" switches the forms; anything else
//                               (default, unset) keeps today's Vercel routes.
//   NEXT_PUBLIC_FORMS_API_BASE  https origin of the AWS forms API.
//
// Both are read at build time. With the flag unset, nothing here runs and the
// forms behave exactly as before (Vercel routes, HubSpot, relay).
//
// Framework-free and unit-tested (fetch is injected).

export type FormsBackend = "vercel" | "aws";

export function resolveFormsBackend(
  flag: string | undefined,
  apiBase: string | undefined
): FormsBackend {
  // Fail safe: "aws" without a valid https base stays on Vercel.
  return flag === "aws" && isHttpsOrigin(apiBase) ? "aws" : "vercel";
}

export function isHttpsOrigin(v: string | undefined): v is string {
  if (!v) return false;
  try {
    const u = new URL(v);
    return u.protocol === "https:" && (u.pathname === "/" || u.pathname === "") && !u.search;
  } catch {
    return false;
  }
}

export const FORMS_BACKEND: FormsBackend = resolveFormsBackend(
  process.env.NEXT_PUBLIC_FORMS_BACKEND,
  process.env.NEXT_PUBLIC_FORMS_API_BASE
);

export const FORMS_API_BASE = (process.env.NEXT_PUBLIC_FORMS_API_BASE ?? "").replace(/\/+$/, "");

export function formsApiUrl(base: string, path: string): string {
  return `${base.replace(/\/+$/, "")}${path}`;
}

// --- Insurance cards --------------------------------------------------------

export const CARD_MAX_BYTES = 5 * 1024 * 1024;
export const AWS_CARD_ACCEPT = ".jpg,.jpeg,.png,.heic,.heif";
export type CardSide = "front" | "back";

const EXT_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  heic: "image/heic",
  heif: "image/heif",
};

// Browsers report HEIC as "" on some platforms; fall back to the extension.
// Returns null for anything the AWS API will not accept.
export function cardContentType(type: string, name: string): string | null {
  const t = (type || "").toLowerCase();
  if (Object.values(EXT_TYPES).includes(t)) return t;
  if (t && t !== "application/octet-stream") return null;
  const ext = (name.split(".").pop() ?? "").toLowerCase();
  return EXT_TYPES[ext] ?? null;
}

export interface CardDeclaration {
  side: CardSide;
  contentType: string;
  size: number;
}

export interface PreparedCard {
  side: CardSide;
  blob: Blob;
  contentType: string;
}

export function declareCards(cards: PreparedCard[]): CardDeclaration[] {
  return cards.map((c) => ({ side: c.side, contentType: c.contentType, size: c.blob.size }));
}

export interface PresignedPost {
  url: string;
  fields: Record<string, string>;
}

type FetchLike = (url: string, init: { method: string; body?: BodyInit; headers?: Record<string, string> }) => Promise<{ ok: boolean; status: number; json(): Promise<unknown> }>;

// POST one file to S3 with its presigned fields (file last, per S3).
export async function uploadCard(fetchFn: FetchLike, post: PresignedPost, card: PreparedCard): Promise<boolean> {
  if (!post?.url || !post.url.startsWith("https://") || !post.fields) return false;
  const body = new FormData();
  for (const [k, v] of Object.entries(post.fields)) body.append(k, v);
  body.append("file", card.blob);
  try {
    const res = await fetchFn(post.url, { method: "POST", body });
    return res.status === 201 || res.status === 204 || res.ok;
  } catch {
    return false;
  }
}

// --- Attribution and cookies --------------------------------------------------

export interface FormAttribution {
  gclid?: string | null;
  gbraid?: string | null;
  wbraid?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
}

export const ATTRIBUTION_KEYS: readonly (keyof FormAttribution)[] = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

// The attribution cookies are httpOnly, so the page asks its own origin for
// them (GET /api/form-attribution: cookie values only, no form data).
export async function fetchAttribution(fetchFn: FetchLike): Promise<FormAttribution> {
  try {
    const res = await fetchFn("/api/form-attribution", { method: "GET" });
    if (!res.ok) return {};
    const data = (await res.json()) as Record<string, unknown>;
    const out: FormAttribution = {};
    for (const k of ATTRIBUTION_KEYS) {
      const v = data[k];
      if (typeof v === "string" && v.length <= 300) out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

// JS-readable cookies the old same-origin routes read server-side: the
// HubSpot hutk and the GA cookie. Sent explicitly because the AWS API is
// cross-origin and receives no site cookies.
export function readCookie(cookieHeader: string, name: string): string | null {
  for (const part of cookieHeader.split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    if (part.slice(0, i).trim() === name) {
      const v = part.slice(i + 1).trim();
      try {
        return decodeURIComponent(v);
      } catch {
        return v;
      }
    }
  }
  return null;
}

// --- Insurance verification submit (AWS mode) --------------------------------

export const INSURANCE_SUBMIT_PATH = "/v1/forms/insurance-verification";

export type SubmitOutcome =
  | { status: "success" }
  | { status: "partial"; warning: string }
  | { status: "error" };

export interface InsuranceSubmitInput {
  fetchFn: FetchLike;
  apiBase: string;
  // Text fields, honeypot, Turnstile token/telemetry, attribution, hutk etc.
  // Posted as JSON to the AWS API only.
  fields: Record<string, unknown>;
  cards: PreparedCard[];
}

function warningOf(data: unknown): string | null {
  const w = (data as { warning?: unknown } | null)?.warning;
  return typeof w === "string" && w.length > 0 ? w : null;
}

// 1) POST the form to the AWS API (it returns a presigned POST per declared
// card side), 2) upload each card straight to S3, 3) POST .../complete so
// the admissions email goes out with the cards. A failed card upload still
// counts as a captured lead ("partial"); a failed form POST is an error.
export async function submitInsuranceToAws(input: InsuranceSubmitInput): Promise<SubmitOutcome> {
  const { fetchFn, apiBase, cards } = input;
  const headers = { "Content-Type": "application/json" };
  let data: Record<string, unknown>;
  try {
    const res = await fetchFn(formsApiUrl(apiBase, INSURANCE_SUBMIT_PATH), {
      method: "POST",
      headers,
      body: JSON.stringify({ ...input.fields, cards: declareCards(cards) }),
    });
    if (!res.ok) return { status: "error" };
    data = ((await res.json().catch(() => ({}))) ?? {}) as Record<string, unknown>;
  } catch {
    return { status: "error" };
  }

  const uploads = (data.uploads ?? {}) as Partial<Record<CardSide, PresignedPost>>;
  const id = typeof data.submission_id === "string" ? data.submission_id : null;
  if (cards.length === 0 || !id) {
    const w = warningOf(data);
    return w ? { status: "partial", warning: w } : { status: "success" };
  }

  let uploadFailed = false;
  for (const card of cards) {
    const post = uploads[card.side];
    if (!post || !(await uploadCard(fetchFn, post, card))) uploadFailed = true;
  }

  let completeWarning: string | null = null;
  try {
    const res = await fetchFn(
      formsApiUrl(apiBase, `${INSURANCE_SUBMIT_PATH}/${encodeURIComponent(id)}/complete`),
      { method: "POST", headers, body: "{}" }
    );
    const body = await res.json().catch(() => ({}));
    if (!res.ok) completeWarning = PARTIAL_DEFAULT_WARNING;
    else completeWarning = warningOf(body);
  } catch {
    completeWarning = PARTIAL_DEFAULT_WARNING;
  }
  if (completeWarning) return { status: "partial", warning: completeWarning };
  if (uploadFailed) return { status: "partial", warning: CARD_UPLOAD_FAILED_WARNING };
  return { status: "success" };
}

export const PARTIAL_DEFAULT_WARNING =
  "We got your information but had trouble notifying our team. Please call (623) 305-0496 so we can help right away.";

export const CARD_UPLOAD_FAILED_WARNING =
  "We got your details, but your insurance card image did not upload. Please email or text your card to admissions, or call (623) 305-0496.";
