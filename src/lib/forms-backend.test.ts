import { describe, expect, it } from "vitest";
import {
  CARD_UPLOAD_FAILED_WARNING,
  cardContentType,
  fetchAttribution,
  readCookie,
  resolveFormsBackend,
  submitInsuranceToAws,
  uploadCard,
  type PreparedCard,
} from "./forms-backend";

const BASE = "https://forms.example.test";

type Call = { url: string; method: string; body?: unknown };

function fakeFetch(routes: Array<[RegExp, (c: Call) => { status: number; json?: unknown }]>) {
  const calls: Call[] = [];
  const fn = async (url: string, init: { method: string; body?: unknown }) => {
    const call = { url, method: init.method, body: init.body };
    calls.push(call);
    for (const [re, respond] of routes) {
      if (re.test(url)) {
        const r = respond(call);
        return { ok: r.status >= 200 && r.status < 300, status: r.status, json: async () => r.json ?? {} };
      }
    }
    throw new Error("network");
  };
  return { fn, calls };
}

const card = (side: "front" | "back"): PreparedCard => ({
  side,
  blob: new Blob([new Uint8Array([0xff, 0xd8, 0xff, 0x00])], { type: "image/jpeg" }),
  contentType: "image/jpeg",
});

const fields = { firstName: "Testfirst", email: "lead.one@example.test", memberId: "TEST-MEMBER-12345" };

describe("forms backend flag", () => {
  it("defaults to vercel (today's behaviour) unless aws AND a valid https base are set", () => {
    expect(resolveFormsBackend(undefined, undefined)).toBe("vercel");
    expect(resolveFormsBackend("aws", undefined)).toBe("vercel");
    expect(resolveFormsBackend("aws", "http://forms.example.test")).toBe("vercel");
    expect(resolveFormsBackend("aws", "https://forms.example.test/path")).toBe("vercel");
    expect(resolveFormsBackend("vercel", BASE)).toBe("vercel");
    expect(resolveFormsBackend("aws", BASE)).toBe("aws");
  });
});

describe("card types", () => {
  it("accepts JPEG/PNG/HEIC/HEIF, falls back to the extension when the type is empty, refuses the rest", () => {
    expect(cardContentType("image/jpeg", "a.jpg")).toBe("image/jpeg");
    expect(cardContentType("", "card.HEIC")).toBe("image/heic");
    expect(cardContentType("application/octet-stream", "card.heif")).toBe("image/heif");
    expect(cardContentType("image/gif", "a.gif")).toBeNull();
    expect(cardContentType("application/pdf", "a.pdf")).toBeNull();
    expect(cardContentType("", "a.exe")).toBeNull();
  });
});

describe("AWS insurance submit", () => {
  it("posts JSON to the AWS API only (never a same-origin /api route), uploads cards to S3, then completes", async () => {
    const { fn, calls } = fakeFetch([
      [/\/v1\/forms\/insurance-verification$/, () => ({
        status: 200,
        json: {
          submission_id: "sid-1",
          uploads: {
            front: { url: "https://bucket-fake.s3.us-west-2.amazonaws.com/", fields: { key: "cards/v1/sid-1/front", Policy: "p" } },
            back: { url: "https://bucket-fake.s3.us-west-2.amazonaws.com/", fields: { key: "cards/v1/sid-1/back", Policy: "p" } },
          },
        },
      })],
      [/s3\.us-west-2\.amazonaws\.com/, () => ({ status: 201 })],
      [/\/complete$/, () => ({ status: 200, json: { success: true, emailSent: true } })],
    ]);
    const out = await submitInsuranceToAws({ fetchFn: fn, apiBase: BASE, fields, cards: [card("front"), card("back")] });
    expect(out).toEqual({ status: "success" });
    expect(calls.map((c) => c.url)).toEqual([
      `${BASE}/v1/forms/insurance-verification`,
      "https://bucket-fake.s3.us-west-2.amazonaws.com/",
      "https://bucket-fake.s3.us-west-2.amazonaws.com/",
      `${BASE}/v1/forms/insurance-verification/sid-1/complete`,
    ]);
    for (const c of calls) expect(c.url.startsWith("/")).toBe(false);
    const sent = JSON.parse(String(calls[0]!.body));
    expect(sent.cards).toEqual([
      { side: "front", contentType: "image/jpeg", size: 4 },
      { side: "back", contentType: "image/jpeg", size: 4 },
    ]);
    // S3 form: presigned fields first, file last.
    const form = calls[1]!.body as FormData;
    expect([...form.keys()]).toEqual(["key", "Policy", "file"]);
  });

  it("a failed card upload is still a captured lead: partial with the email-your-card message", async () => {
    const { fn } = fakeFetch([
      [/insurance-verification$/, () => ({ status: 200, json: { submission_id: "sid-2", uploads: { front: { url: "https://b.s3.us-west-2.amazonaws.com/", fields: {} } } } })],
      [/s3\.us-west-2/, () => ({ status: 403 })],
      [/\/complete$/, () => ({ status: 200, json: { emailSent: true } })],
    ]);
    expect(await submitInsuranceToAws({ fetchFn: fn, apiBase: BASE, fields, cards: [card("front")] })).toEqual({
      status: "partial",
      warning: CARD_UPLOAD_FAILED_WARNING,
    });
  });

  it("surfaces the API's 207 warning, and a failed form POST is an error", async () => {
    const partial = fakeFetch([[/insurance-verification$/, () => ({ status: 207, json: { submission_id: "s", uploads: {}, warning: "Please call" } })]]);
    expect(await submitInsuranceToAws({ fetchFn: partial.fn, apiBase: BASE, fields, cards: [] })).toEqual({ status: "partial", warning: "Please call" });
    const down = fakeFetch([[/insurance-verification$/, () => ({ status: 503 })]]);
    expect(await submitInsuranceToAws({ fetchFn: down.fn, apiBase: BASE, fields, cards: [] })).toEqual({ status: "error" });
    const net = fakeFetch([]);
    expect(await submitInsuranceToAws({ fetchFn: net.fn, apiBase: BASE, fields, cards: [] })).toEqual({ status: "error" });
  });

  it("refuses to upload to a non-https presigned URL", async () => {
    const { fn, calls } = fakeFetch([]);
    expect(await uploadCard(fn, { url: "http://evil.example.test/", fields: {} }, card("front"))).toBe(false);
    expect(calls).toHaveLength(0);
  });
});

describe("attribution and cookies", () => {
  it("keeps only the known attribution keys", async () => {
    const { fn } = fakeFetch([[/form-attribution/, () => ({ status: 200, json: { gclid: "g|1", utm_source: "google", email: "x@example.test" } })]]);
    expect(await fetchAttribution(fn)).toEqual({ gclid: "g|1", utm_source: "google" });
  });

  it("reads JS cookies", () => {
    expect(readCookie("a=1; hubspotutk=abc123; _ga=GA1.1.2.3", "hubspotutk")).toBe("abc123");
    expect(readCookie("a=1", "_ga")).toBeNull();
  });
});
