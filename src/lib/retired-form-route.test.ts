import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it, vi } from "vitest";
import { RETIRED_FORM_ROUTE_MESSAGE, retiredFormResponse } from "./retired-form-route";
import * as getHelp from "@/app/api/get-help/route";
import * as insurance from "@/app/api/insurance-verification/route";

const ROUTES = [
  ["/api/get-help", getHelp, "../app/api/get-help/route.ts"],
  ["/api/insurance-verification", insurance, "../app/api/insurance-verification/route.ts"],
] as const;

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("retiredFormResponse", () => {
  it("POST and GET: 410 with a JSON body that carries no submitted data", async () => {
    for (const m of ["POST", "GET"]) {
      const res = retiredFormResponse(m);
      expect(res.status).toBe(410);
      expect(res.headers.get("content-type")).toBe("application/json");
      expect(res.headers.get("cache-control")).toBe("no-store");
      expect(await res.json()).toEqual({ error: "gone", message: RETIRED_FORM_ROUTE_MESSAGE });
    }
  });

  it("HEAD: 410 with no body", async () => {
    const res = retiredFormResponse("HEAD");
    expect(res.status).toBe(410);
    expect(res.body).toBeNull();
    expect(res.headers.get("cache-control")).toBe("no-store");
  });
});

describe.each(ROUTES)("%s is retired", (_path, route, file) => {
  it("POST, GET and HEAD all answer 410", async () => {
    expect((await route.POST()).status).toBe(410);
    expect((await route.GET()).status).toBe(410);
    const head = await route.HEAD();
    expect(head.status).toBe(410);
    expect(head.body).toBeNull();
  });

  it("makes no outbound call (no HubSpot, jarvis-api, Dazos, CTM, drip, GA4 or Google Ads)", async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
    const log = vi.spyOn(console, "log");
    const warn = vi.spyOn(console, "warn");
    const error = vi.spyOn(console, "error");
    await route.POST();
    await route.GET();
    await route.HEAD();
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(log).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
    expect(error).not.toHaveBeenCalled();
  });

  it("handlers take no request, so the body is never read", () => {
    expect(route.POST.length).toBe(0);
    expect(route.GET.length).toBe(0);
    expect(route.HEAD.length).toBe(0);
  });

  it("imports only the retired-route helper", () => {
    const src = readFileSync(fileURLToPath(new URL(file, import.meta.url)), "utf8");
    const imports = [...src.matchAll(/^import .* from "([^"]+)";$/gm)].map((m) => m[1]);
    expect(imports).toEqual(["@/lib/retired-form-route"]);
    expect(src).not.toMatch(/fetch\(|hubspot|enrollInDrip|LEAD_NOTIFY|dazos|ctm/i);
  });
});
