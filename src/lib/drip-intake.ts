import { createHmac } from "node:crypto";
import type { ConsentRecord } from "./consent";

type PayerCategory =
  | "commercial"
  | "tricare"
  | "medicaid"
  | "ahcccs"
  | "medicare"
  | "self_pay"
  | "unknown";

type InquirerRelationship =
  | "self"
  | "parent"
  | "spouse_partner"
  | "other_family"
  | "friend"
  | "professional"
  | "other";

const PAYER_PATTERNS: [RegExp, PayerCategory][] = [
  [/medicaid/i, "medicaid"],
  [/ahcccs/i, "ahcccs"],
  [/medicare/i, "medicare"],
  [/tricare/i, "tricare"],
  [/self[- ]?pay|cash|no insurance|^none$/i, "self_pay"],
  [/aetna|cigna|bcbs|blue\s*cross|blue\s*shield|united|uhc|humana|anthem|optum/i, "commercial"],
];

export function classifyPayer(text: string | null | undefined): PayerCategory {
  if (!text || text.trim() === "") return "unknown";
  for (const [re, cat] of PAYER_PATTERNS) {
    if (re.test(text)) return cat;
  }
  return "unknown";
}

export interface EnrollInDripInput {
  formId: string;
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  relationshipToPatient: InquirerRelationship;
  payerCategory: PayerCategory;
  message?: string;
  pageUrl?: string;
  referrer?: string;
  utm?: {
    source?: string | null;
    medium?: string | null;
    campaign?: string | null;
    term?: string | null;
    content?: string | null;
  };
  gclid?: string | null;
  consents: ConsentRecord[];
}

function toE164(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return undefined;
}

function stripNulls<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v != null && v !== "") out[k] = v;
  }
  return out as Partial<T>;
}

export async function enrollInDrip(
  input: EnrollInDripInput,
): Promise<{ ok: boolean; status?: number }> {
  const url = process.env.DRIP_INTAKE_URL;
  const secret = process.env.DRIP_INTAKE_HMAC_SECRET;
  if (!url || !secret) {
    return { ok: false };
  }

  const inquirer = stripNulls({
    first_name: input.firstName,
    last_name: input.lastName,
    email: input.email?.toLowerCase(),
    phone: toE164(input.phone),
    relationship_to_patient: input.relationshipToPatient,
  });

  const utm = input.utm
    ? stripNulls({
        source: input.utm.source,
        medium: input.utm.medium,
        campaign: input.utm.campaign,
        term: input.utm.term,
        content: input.utm.content,
      })
    : undefined;

  const payload: Record<string, unknown> = {
    idempotency_key: crypto.randomUUID(),
    submitted_at: new Date().toISOString(),
    form_id: input.formId,
    inquirer,
    payer_category: input.payerCategory,
    attribution: stripNulls({
      channel: "web_form",
      page_url: input.pageUrl,
      referrer: input.referrer,
      utm: utm && Object.keys(utm).length > 0 ? utm : undefined,
      gclid: input.gclid,
    }),
    consents: input.consents,
  };
  if (input.message) {
    payload.message = input.message;
  }

  const rawBody = JSON.stringify(payload);
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`)
    .digest("hex");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-drc-signature": signature,
      "x-drc-timestamp": timestamp,
    },
    body: rawBody,
  });

  return { ok: res.ok, status: res.status };
}
