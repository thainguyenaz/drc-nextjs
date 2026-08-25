#!/usr/bin/env node
// Regenerates src/data/route-lastmod.json from git history.
// Run before pushing content changes: node scripts/gen-route-lastmod.mjs
// Each static route's lastmod is the last commit that touched a file in its
// page directory (non-recursive, so child routes don't bump parents).
// Data-driven routes (team) use their data file's last commit. Blog posts
// carry their own dateModified in blog.ts and are not listed here.
import { execFileSync } from "child_process";
import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";

const APP = "src/app";
const map = {};

function gitDate(files) {
  if (files.length === 0) return "";
  return execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files])
    .toString()
    .trim();
}

function walk(dir) {
  const entries = readdirSync(dir);
  if (entries.includes("page.tsx") || entries.includes("page.ts")) {
    const rel = path.relative(APP, dir);
    if (!rel.includes("[")) {
      const route = rel === "" ? "/" : "/" + rel.split(path.sep).join("/");
      const files = entries
        .filter((e) => /\.(tsx|ts|css)$/.test(e))
        .map((e) => path.join(dir, e));
      const d = gitDate(files);
      if (d) map[route] = d;
    }
  }
  for (const e of entries) {
    const p = path.join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
  }
}

walk(APP);

// Shared data files feed many routes; a claim edit there changes those pages
// without touching their page dirs. Bump affected routes to whichever is newer.
const SHARED = {
  "src/data/faq-data.ts": ["/", "/resources/faq", "/locations/glendale", "/locations/scottsdale", "/locations/phoenix-php-iop"],
  "src/lib/site-data.ts": ["/"],
};
for (const [file, routes] of Object.entries(SHARED)) {
  const d = gitDate([file]);
  for (const r of routes) {
    if (d && (!map[r] || d > map[r])) map[r] = d;
  }
}

// Team bio pages render from team-data.ts through a dynamic segment.
map["__team__"] = gitDate(["src/data/team-data.ts"]);

writeFileSync(
  "src/data/route-lastmod.json",
  JSON.stringify(map, Object.keys(map).sort(), 1) + "\n"
);
console.log(`route-lastmod.json: ${Object.keys(map).length} entries`);
