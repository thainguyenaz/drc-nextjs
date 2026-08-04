import { trackingGateCheck, logTrackingSkip } from "./env-gate";

// Upload deliberately disabled 2026-08-04: both target actions (Get Help
// 7585142764, Insurance Verification 7585191106) are WEBPAGE-type and have
// rejected 100% of click uploads since 2026-04-22 (zero landed conversions in
// account history). The validation pipeline below is retained so attribution
// coverage stays observable per submission via the conversion-fire log.
// The 30-day window matches the actions' click-through lookback; anything
// older would be rejected by Google as EXPIRED_EVENT.
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

  // Upload deliberately disabled 2026-08-04: both target actions
  // (7585142764, 7585191106) are WEBPAGE-type and have rejected 100% of
  // click uploads since Apr 22 (zero landed conversions in account
  // history). A gclid that passed every gate above WOULD have been
  // uploaded; report it distinctly so attribution coverage stays visible.
  return {
    attempted: false,
    uploaded: false,
    skippedReason: "upload_disabled_dead_action",
  };
}
