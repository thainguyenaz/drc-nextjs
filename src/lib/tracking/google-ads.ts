import { GoogleAdsApi } from "google-ads-api";
import { hashedEmail, hashedPhone } from "./hash";

export type FormType = "get_help" | "insurance_verification";

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
  return formType === "get_help"
    ? process.env.GOOGLE_ADS_CONVERSION_ACTION_GET_HELP
    : process.env.GOOGLE_ADS_CONVERSION_ACTION_INSURANCE;
}

export async function uploadFormConversion(
  input: UploadInput
): Promise<UploadResult> {
  if (!input.gclid) {
    return { attempted: false, uploaded: false, skippedReason: "no_gclid" };
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
      gclid: input.gclid,
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
