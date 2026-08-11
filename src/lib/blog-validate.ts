// Build-time validation for blog post data. Invoked at module scope from
// blog.ts. During `next build` (NEXT_PHASE=phase-production-build) any
// violation throws and fails the build; at runtime the same message is
// logged via console.error so a bad entry can never 500 the live site.
// This validator only refuses bad data — it never corrects, fills, or
// invents a value.

import { DRC_REVIEWERS } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// ── Rule 11 (topical): payer/network content gate ──────────────────────────
// ANY payer name OR network-status/acceptance phrasing in a post's content
// fails validation, unless the post's slug is allowlisted below. Rationale:
// generated posts must not make payer claims at all; posts that legitimately
// discuss payers require a human review before they ship. To pass this gate,
// fix the content or (after manual review) add the slug — never widen the
// regexes to admit a phrasing. Mirrored pre-splice in blog-runtime's
// publisher.js (validateEntry); this file is the source of truth.
const PAYER_NAMES =
  /\b(?:AHCCCS|Medicaid|Medicare|TRICARE|TriWest|Humana|Magellan|Beacon|Cigna|Aetna|UnitedHealthcare|United\s*Health|UHC|BCBS|Blue\s*Cross|Blue\s*Shield|Health\s*Net|Optum|Anthem|Carelon)\b/i;
const NETWORK_CLAIMS =
  /\b(?:in-?\s?network|out-?\s?of-?\s?network|we\s+(?:accept|take|welcome)|accepts?\s+(?:insurance|coverage|most|all)|works?\s+(?:directly\s+)?with\s+(?:most|all|major)|partner(?:s|ed)?\s+with|contracted\s+with|credentialed\s+with|covered\s+by\s+(?:most|all|your)|insurance\s+(?:is|are)\s+(?:accepted|welcome))\b/i;

// Slugs exempt from Rule 11 ONLY (all other rules still apply). Each entry
// was manually reviewed for payer-claim compliance on the date noted.
// Do NOT add generated posts here as a shortcut — fix the content instead.
const PAYER_REVIEWED_SLUGS = new Set([
  "how-insurance-covers-addiction-mental-health-treatment", // reviewed 2026-07-16 (3ace90c, 825f6eb corrections applied)
  "what-is-partial-hospitalization-php-program", // reviewed 2026-07-15 (3ace90c correction applied)
  "neurostar-tms-vs-antidepressants", // reviewed 2026-07-15 (032e64f; Medicare/Medicaid not-accepted disclosure)
  "how-insurance-covers-residential-treatment-in-arizona", // reviewed 2026-08-11 (in-network implication removed, 6923224)
  "tricare-coverage-for-rehab-in-arizona", // reviewed 2026-08-11 (contractor claim neutralized, eadd2d3)
]);

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

    // Rule 11: payer/network topical gate (see data block above).
    if (!PAYER_REVIEWED_SLUGS.has(post.slug)) {
      const haystack = `${post.content}\n${post.excerpt}\n${post.metaDescription}`;
      const payerHit = haystack.match(PAYER_NAMES);
      const claimHit = haystack.match(NETWORK_CLAIMS);
      if (payerHit) {
        errors.push(
          `[${slug}] payer name "${payerHit[0]}" in unreviewed post — payer content requires manual review (Rule 11)`
        );
      }
      if (claimHit) {
        errors.push(
          `[${slug}] network/acceptance phrasing "${claimHit[0]}" in unreviewed post — payer content requires manual review (Rule 11)`
        );
      }
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
