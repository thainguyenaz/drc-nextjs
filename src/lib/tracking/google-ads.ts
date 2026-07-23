import { GoogleAdsApi } from "google-ads-api";
import { trackingGateCheck, logTrackingSkip } from "./env-gate";
import { hashedEmail, hashedPhone } from "./hash";

// Both web conversion actions (Get Help 7585142764, Insurance Verification
// 7585191106) have a 30-day click-through lookback window; anything older is
// rejected by Google as EXPIRED_EVENT, so gate it here instead of uploading.
export const GCLID_UPLOAD_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

// Google click IDs are URL-safe base64-ish tokens. Reject anything outside
// that alphabet or implausibly short/long before spending an API call on it.
const GCLID_FORMAT = /^[A-Za-z0-9_-]{10,200}$/;

export type FormType = "get_help" | "insurance_verification" | "partner_referral";

interface UploadInput {
  formType: FormType;
  email: string;
  phone: string;
  gclid: string | null;
  conversionValueUsd?: number;
}

interface UploadResult {
  attempted: boolean;
  uploaded: boolean;
  skippedReason?: string;
  errorMessage?: string;
}

function formatAdsDateTime(date: Date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  const y = date.getUTCFullYear();
  const m = pad(date.getUTCMonth() + 1);
  const d = pad(date.getUTCDate());
  const h = pad(date.getUTCHours());
  const mi = pad(date.getUTCMinutes());
  const s = pad(date.getUTCSeconds());
  return `${y}-${m}-${d} ${h}:${mi}:${s}+00:00`;
}

function conversionActionIdFor(formType: FormType): string | undefined {
  switch (formType) {
    case "get_help":
      return process.env.GOOGLE_ADS_CONVERSION_ACTION_GET_HELP;
    case "insurance_verification":
      return process.env.GOOGLE_ADS_CONVERSION_ACTION_INSURANCE;
    case "partner_referral":
      return process.env.GOOGLE_ADS_CONVERSION_ACTION_PARTNER_REFERRAL;
    default: {
      const _exhaustive: never = formType;
      return _exhaustive;
    }
  }
}

export async function uploadFormConversion(
  input: UploadInput
): Promise<UploadResult> {
  const gate = trackingGateCheck();
  if (!gate.allowed) {
    logTrackingSkip("google-ads", gate, input.formType);
    return { attempted: false, uploaded: false, skippedReason: gate.reason };
  }
  if (!input.gclid) {
    return { attempted: false, uploaded: false, skippedReason: "no_gclid" };
  }

  // Cookie format is "<gclid>|<epochMillis>" (see middleware TIMESTAMPED_COOKIES).
  // The gclid alphabet never contains "|", so lastIndexOf splits unambiguously.
  const sep = input.gclid.lastIndexOf("|");
  const gclid = sep === -1 ? input.gclid : input.gclid.slice(0, sep);
  const tsRaw = sep === -1 ? null : input.gclid.slice(sep + 1);

  if (!GCLID_FORMAT.test(gclid)) {
    return { attempted: false, uploaded: false, skippedReason: "gclid_malformed" };
  }

  // Cookies written before the timestamp suffix shipped have no "|<ts>" part;
  // report those separately from genuine expiry so the backlog drain is visible.
  const capturedAtMs = tsRaw ? Number(tsRaw) : NaN;
  if (!Number.isFinite(capturedAtMs)) {
    return {
      attempted: false,
      uploaded: false,
      skippedReason: "gclid_stale_no_timestamp",
    };
  }
  if (Date.now() - capturedAtMs > GCLID_UPLOAD_MAX_AGE_MS) {
    return { attempted: false, uploaded: false, skippedReason: "gclid_stale" };
  }

  const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID;
  const managerId = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID;
  const actionId = conversionActionIdFor(input.formType);
  const devToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN;

  if (
    !customerId ||
    !managerId ||
    !actionId ||
    !devToken ||
    !clientId ||
    !clientSecret ||
    !refreshToken
  ) {
    return {
      attempted: false,
      uploaded: false,
      skippedReason: "missing_env",
    };
  }

  try {
    const api = new GoogleAdsApi({
      client_id: clientId,
      client_secret: clientSecret,
      developer_token: devToken,
    });
    const customer = api.Customer({
      customer_id: customerId,
      login_customer_id: managerId,
      refresh_token: refreshToken,
    });

    const eh = hashedEmail(input.email);
    const ph = hashedPhone(input.phone);
    const userIdentifiers: Array<
      { hashed_email: string } | { hashed_phone_number: string }
    > = [];
    if (eh) userIdentifiers.push({ hashed_email: eh });
    if (ph) userIdentifiers.push({ hashed_phone_number: ph });

    const conversion = {
      conversion_action: `customers/${customerId}/conversionActions/${actionId}`,
      gclid,
      conversion_date_time: formatAdsDateTime(),
      conversion_value: input.conversionValueUsd ?? 100.0,
      currency_code: "USD",
      user_identifiers: userIdentifiers,
    };

    // SDK types require proto.Message with toJSON; plain object is accepted at
    // runtime and serialized by the client.
    const uploadPromise = customer.conversionUploads.uploadClickConversions({
      customer_id: customerId,
      conversions: [conversion],
      partial_failure: true,
      validate_only: false,
    } as unknown as Parameters<
      typeof customer.conversionUploads.uploadClickConversions
    >[0]);

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("google_ads_timeout_5s")), 5000);
    });

    const response = (await Promise.race([uploadPromise, timeoutPromise])) as {
      results?: unknown[];
      partial_failure_error?: unknown;
    };

    const results = response.results ?? [];
    const partial = response.partial_failure_error;

    if (partial && results.length === 0) {
      return {
        attempted: true,
        uploaded: false,
        errorMessage: "partial_failure_all_operations",
      };
    }
    return { attempted: true, uploaded: true };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return { attempted: true, uploaded: false, errorMessage: msg.slice(0, 200) };
  }
}
