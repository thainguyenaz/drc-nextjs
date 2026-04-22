// In-memory per-IP rate limiter. Best-effort on serverless: state is
// per-instance and evaporates on cold starts, so a burst across N warm
// instances can hit N× the limit. Acceptable as a defense-in-depth layer
// behind Turnstile + honeypot; real durable limiting would need Redis/KV.

type Entry = { count: number; resetAt: number };

const store: Map<string, Entry> = new Map();
const CLEANUP_INTERVAL_MS = 60_000;
let lastCleanup = 0;

function cleanup(now: number): void {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  store.forEach((entry, key) => {
    if (entry.resetAt <= now) store.delete(key);
  });
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  cleanup(now);

  const existing = store.get(key);
  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSec: 0 };
  }

  existing.count += 1;
  if (existing.count > limit) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }
  return { allowed: true, retryAfterSec: 0 };
}

export function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0];
    if (first) return first.trim();
  }
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}
