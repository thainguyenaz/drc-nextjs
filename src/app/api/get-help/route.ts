// Retired: answers 410 Gone with no side effects (see src/lib/retired-form-route.ts).
// The previous handler is kept, not routed, in ./legacy-route.ts.
import { retiredFormResponse } from "@/lib/retired-form-route";

export const dynamic = "force-dynamic";

export function POST(): Response {
  return retiredFormResponse("POST");
}

export function GET(): Response {
  return retiredFormResponse("GET");
}

export function HEAD(): Response {
  return retiredFormResponse("HEAD");
}
