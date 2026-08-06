// Build-time validation for blog post data. Invoked at module scope from
// blog.ts. During `next build` (NEXT_PHASE=phase-production-build) any
// violation throws and fails the build; at runtime the same message is
// logged via console.error so a bad entry can never 500 the live site.
// This validator only refuses bad data — it never corrects, fills, or
// invents a value.

import { DRC_REVIEWERS } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseIsoDate(value: string): number | null {
  if (!ISO_DATE.test(value)) return null;
  const ms = Date.parse(`${value}T00:00:00Z`);
  return Number.isNaN(ms) ? null : ms;
}

export function validateBlogPosts(posts: BlogPost[]): void {
  const errors: string[] = [];
  const warnings: string[] = [];
  const now = Date.now();
  const seenSlugs = new Set<string>();

  for (const post of posts) {
    const slug = post.slug || "(missing slug)";

    // Rule 4: slug unique across all entries
    if (seenSlugs.has(post.slug)) {
      errors.push(`[${slug}] slug: duplicate slug`);
    }
    seenSlugs.add(post.slug);

    // Rule 3: both dates must parse as valid ISO dates
    const published = parseIsoDate(post.datePublished);
    const modified = parseIsoDate(post.dateModified);
    if (published === null) {
      errors.push(`[${slug}] datePublished: not a valid ISO date: "${post.datePublished}"`);
    }
    if (modified === null) {
      errors.push(`[${slug}] dateModified: not a valid ISO date: "${post.dateModified}"`);
    }

    if (published !== null && modified !== null) {
      // Rule 1: dateModified must not be earlier than datePublished
      if (modified < published) {
        errors.push(
          `[${slug}] dateModified: ${post.dateModified} is earlier than datePublished ${post.datePublished}`
        );
      }
      // Rule 2 (hard): dateModified in the future is never legitimate
      if (modified > now) {
        errors.push(`[${slug}] dateModified: ${post.dateModified} is in the future`);
      }
      // Rule 2 (soft): future datePublished may be a scheduled post — warn only
      if (published > now) {
        warnings.push(`[${slug}] datePublished: ${post.datePublished} is in the future (scheduled post?)`);
      }
    }

    // Rule 5: if an entry sets a reviewer, the key must exist in DRC_REVIEWERS.
    // Kept as a runtime "in" check even though reviewer is now a typed field:
    // blog-runtime splices entries into blog.ts from outside this repo, so
    // TypeScript is not in that path.
    if ("reviewer" in post) {
      const reviewer = (post as unknown as Record<string, unknown>).reviewer;
      if (typeof reviewer !== "string" || !(reviewer in DRC_REVIEWERS)) {
        errors.push(`[${slug}] reviewer: "${String(reviewer)}" is not a key of DRC_REVIEWERS`);
      }
    }

    // Rule 6: every entry must have a non-empty author
    if (typeof post.author !== "string" || post.author.trim() === "") {
      errors.push(`[${slug}] author: missing or empty`);
    }

    // Rule 7: authorTitle was removed 2026-08-06 (dead field carrying an
    // individual credential on an organizational author). Reject any entry
    // that reintroduces it — e.g. from the Jarvis blog generator.
    if ("authorTitle" in post) {
      errors.push(`[${slug}] authorTitle: field is forbidden — remove it`);
    }

    // Rules 8–10: lastReviewed. Same runtime posture as Rule 5 — blog-runtime
    // writes entries from outside this repo, so validate the value, not the type.
    // Deliberately no lastReviewed <= datePublished rule: a later re-review
    // legitimately has lastReviewed after datePublished.
    if ("lastReviewed" in post) {
      const lastReviewed = (post as unknown as Record<string, unknown>).lastReviewed;

      // Rule 8: lastReviewed must parse as strict ISO YYYY-MM-DD
      const reviewed =
        typeof lastReviewed === "string" ? parseIsoDate(lastReviewed) : null;
      if (reviewed === null) {
        errors.push(
          `[${slug}] lastReviewed: not a valid ISO date: "${String(lastReviewed)}"`
        );
      } else if (reviewed > now) {
        // Rule 9: a review that has not happened yet is never legitimate
        errors.push(`[${slug}] lastReviewed: ${String(lastReviewed)} is in the future`);
      }

      // Rule 10: lastReviewed asserts a review occurred — it must name who
      if (!("reviewer" in post)) {
        errors.push(`[${slug}] lastReviewed: set without reviewer — a review must name its reviewer`);
      }
    }
  }

  for (const w of warnings) {
    console.warn(`blog-validate WARNING: ${w}`);
  }

  if (errors.length > 0) {
    const message = `blog-validate: ${errors.length} violation(s) in blog post data:\n${errors.join("\n")}`;
    if (process.env.NEXT_PHASE === "phase-production-build") {
      throw new Error(message);
    }
    console.error(message);
  }
}
