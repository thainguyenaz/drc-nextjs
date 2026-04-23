export type GateDenial = {
  allowed: false;
  reason: "vercel_env_not_production" | "hash_salt_missing";
  env: string;
};

export type GateAllow = { allowed: true };

export type GateResult = GateAllow | GateDenial;

export function trackingGateCheck(): GateResult {
  const env = process.env.VERCEL_ENV ?? "unknown";
  if (env !== "production") {
    return { allowed: false, reason: "vercel_env_not_production", env };
  }
  if (!process.env.HASH_SALT) {
    return { allowed: false, reason: "hash_salt_missing", env };
  }
  return { allowed: true };
}

export function logTrackingSkip(
  lib: "google-ads" | "ga4-mp",
  denial: GateDenial,
  formType?: string,
): void {
  console.info(
    JSON.stringify({
      event: "tracking.skip",
      lib,
      reason: denial.reason,
      env: denial.env,
      formType,
    }),
  );
}
