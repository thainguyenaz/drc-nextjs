import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Dev-only test runner. Not part of `next build`/`next start`; the site's
// runtime and bundle are unaffected. Scoped to unit tests under src/lib.
// The "@" alias mirrors tsconfig paths so tests can import route modules.
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "node",
    include: ["src/lib/**/*.test.ts"],
  },
});
