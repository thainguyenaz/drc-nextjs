import { defineConfig } from "vitest/config";

// Dev-only test runner. Not part of `next build`/`next start`; the site's
// runtime and bundle are unaffected. Scoped to unit tests under src/lib.
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/lib/**/*.test.ts"],
  },
});
