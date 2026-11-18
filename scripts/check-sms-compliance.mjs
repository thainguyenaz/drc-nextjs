// Ship gate for the SMS / A2P 10DLC disclosures (2026-11-18).
//
// Why: the 2026-11-09 SMS compliance changes (commit 40d9f78) were deployed
// by CLI from a branch that was never merged, and the next main deploy
// silently removed them. Carriers had rejected the CTM A2P campaign for
// missing disclosures. This gate fails the build if any required disclosure
// is missing from the rendered pages, so a deploy cannot drop them again.
//
// Checks rendered HTML in .next/server/app (after `next build`):
//   - privacy policy: third-party sharing clause for mobile numbers
//   - terms of service: Text Messaging Program section
//   - home + contact: "Text us" disclosure (footer is sitewide; contact page
//     also carries it in the body)
//   - get-help + insurance: two separate consent checkboxes (smsConsent,
//     emailConsent), neither `required`, each showing its exact text
//
// Always strict: a missing disclosure fails every build, local or Vercel.
// Pure functions are exported for scripts/check-sms-compliance.test.mjs.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const SMS_TEXT =
  "By checking this box, you consent to receive text messages from Desert Recovery Centers " +
  "about your inquiry, including replies about treatment, insurance, and scheduling. " +
  "Message frequency varies. Message and data rates may apply. Reply HELP for help or " +
  "STOP to opt out. Consent is not a condition of purchase.";
const EMAIL_TEXT =
  "I'd like to receive emails from Desert Recovery Centers about programs and resources. " +
  "You can unsubscribe at any time.";

const TEXT_US = [
  "Text us at",
  "Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.",
];

const CONSENT_BOXES = { checkboxes: ["smsConsent", "emailConsent"], phrases: [SMS_TEXT, EMAIL_TEXT] };

export const RULES = [
  {
    page: "privacy-policy.html",
    phrases: [
      "Third-Party Sharing",
      "We do not sell or share mobile numbers or text messaging opt-in data or consent with third parties or affiliates for marketing or promotional purposes.",
    ],
  },
  {
    page: "terms-of-service.html",
    phrases: [
      "Text Messaging Program",
      "Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. Carriers are not liable for delayed or undelivered messages.",
    ],
  },
  { page: "index.html", phrases: TEXT_US },
  // Explicit merge: spreading CONSENT_BOXES after `phrases` would overwrite
  // the Text-us phrases (caught by the negative test on 2026-11-18).
  { page: "contact.html", checkboxes: CONSENT_BOXES.checkboxes, phrases: [...TEXT_US, ...CONSENT_BOXES.phrases] },
  { page: "get-help.html", ...CONSENT_BOXES },
  { page: "insurance.html", ...CONSENT_BOXES },
];

/** Rendered HTML to plain text: drop comments/tags, decode common entities, collapse whitespace. */
export function toText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .replace(/ ([.,])/g, "$1")
    .trim();
}

/** Find the <input> tag for a named checkbox. */
export function checkboxTag(html, name) {
  const re = new RegExp(`<input\\b[^>]*\\bname="${name}"[^>]*>`, "i");
  const m = html.match(re);
  return m ? m[0] : null;
}

/** Return a list of problems for one page's HTML against one rule. */
export function checkPage(html, rule) {
  const problems = [];
  const text = toText(html);
  for (const phrase of rule.phrases ?? []) {
    if (!text.includes(phrase)) problems.push(`missing text: "${phrase.slice(0, 70)}..."`);
  }
  for (const name of rule.checkboxes ?? []) {
    const tag = checkboxTag(html, name);
    if (!tag) problems.push(`missing checkbox: ${name}`);
    else {
      if (!/type="checkbox"/i.test(tag)) problems.push(`${name} is not a checkbox`);
      if (/\srequired(=|\s|\/|>)/i.test(tag)) problems.push(`${name} checkbox is required (must be optional)`);
      if (/\schecked(=|\s|\/|>)/i.test(tag)) problems.push(`${name} checkbox is pre-checked (must start unchecked)`);
    }
  }
  return problems;
}

const isMain =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const root = ".next/server/app";
  let failed = 0;
  for (const rule of RULES) {
    const file = join(root, rule.page);
    if (!existsSync(file)) {
      console.error(`check-sms-compliance: ${file} not found in build output`);
      failed++;
      continue;
    }
    const problems = checkPage(readFileSync(file, "utf8"), rule);
    for (const p of problems) console.error(`check-sms-compliance: ${rule.page}: ${p}`);
    failed += problems.length;
  }
  if (failed) {
    console.error(
      `\ncheck-sms-compliance: FAILING build, ${failed} SMS/A2P disclosure problem(s). ` +
        "These disclosures are required for the CTM A2P 10DLC campaign; restore them before deploying."
    );
    process.exit(1);
  }
  console.log(`check-sms-compliance: all SMS/A2P disclosures present on ${RULES.length} pages.`);
}
