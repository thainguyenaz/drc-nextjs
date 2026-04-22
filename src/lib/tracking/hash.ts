import { createHash } from "crypto";

export function sha256Hex(input: string): string {
  return createHash("sha256").update(input, "utf8").digest("hex");
}

export function normalizeEmail(email: string): string {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed.includes("@")) return trimmed;
  const [local, domain] = trimmed.split("@");
  if (domain === "gmail.com" || domain === "googlemail.com") {
    const dotless = local.split("+")[0].replace(/\./g, "");
    return `${dotless}@gmail.com`;
  }
  return trimmed;
}

export function normalizePhoneE164US(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export function hashedEmail(email: string): string | null {
  if (!email) return null;
  return sha256Hex(normalizeEmail(email));
}

export function hashedPhone(phone: string): string | null {
  const e164 = normalizePhoneE164US(phone);
  if (!e164) return null;
  return sha256Hex(e164);
}
