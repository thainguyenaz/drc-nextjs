import { randomUUID } from "crypto";
import type { FormType } from "./google-ads";

interface MpInput {
  formType: FormType;
  gaCookie: string | null;
  valueUsd?: number;
  landingPage?: string;
}

interface MpResult {
  attempted: boolean;
  delivered: boolean;
  errorMessage?: string;
}

function extractClientId(gaCookie: string | null): string {
  if (!gaCookie) return `${Date.now()}.${randomUUID().slice(0, 8)}`;
  const parts = gaCookie.split(".");
  if (parts.length < 4) return `${Date.now()}.${randomUUID().slice(0, 8)}`;
  return `${parts[2]}.${parts[3]}`;
}

export async function fireGa4Lead(input: MpInput): Promise<MpResult> {
  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) {
    return { attempted: false, delivered: false, errorMessage: "missing_env" };
  }

  const url =
    `https://www.google-analytics.com/mp/collect` +
    `?measurement_id=${encodeURIComponent(measurementId)}` +
    `&api_secret=${encodeURIComponent(apiSecret)}`;

  const body = {
    client_id: extractClientId(input.gaCookie),
    non_personalized_ads: false,
    events: [
      {
        name: "generate_lead",
        params: {
          currency: "USD",
          value: input.valueUsd ?? 100,
          form_type: input.formType,
          page_location: input.landingPage,
        },
      },
    ],
  };

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timer);
    return { attempted: true, delivered: res.ok || res.status === 204 };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return { attempted: true, delivered: false, errorMessage: msg.slice(0, 200) };
  }
}
