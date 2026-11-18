// Tests for the SMS/A2P disclosure gate.
// Run: node scripts/check-sms-compliance.test.mjs   (exit 0 = all pass)
import { checkPage, checkboxTag, toText, RULES } from "./check-sms-compliance.mjs";

let fails = 0;
const eq = (name, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) fails++;
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${ok ? "" : ` got=${JSON.stringify(got)} want=${JSON.stringify(want)}`}`);
};

const rule = { phrases: ["Text us at", "I'd like to receive emails"], checkboxes: ["smsConsent", "emailConsent"] };
const good =
  '<p>Text us at <a href="tel:+16233050496">(623) 305-0496</a></p>' +
  '<input type="checkbox" name="smsConsent" class="x"/>' +
  '<input type="checkbox" name="emailConsent" class="x"/><span>I&#x27;d like to receive emails</span>';

eq("compliant page has no problems", checkPage(good, rule), []);
eq("entity and comment decoding", toText("I&#x27;d <!-- -->like &amp; <b>more</b> ."), "I'd like & more.");
eq("missing phrase is reported", checkPage(good.replace("Text us at", "Call us at"), rule).length, 1);
eq("missing checkbox is reported", checkPage(good.replace('name="emailConsent"', 'name="other"'), rule), ["missing checkbox: emailConsent"]);
eq(
  "required checkbox is reported",
  checkPage(good.replace('name="smsConsent" class="x"', 'name="smsConsent" required="" class="x"'), rule),
  ["smsConsent checkbox is required (must be optional)"]
);
eq(
  "bare required attribute is reported",
  checkPage(good.replace('name="smsConsent" class="x"/>', 'name="smsConsent" required/>'), rule).length,
  1
);
eq(
  "pre-checked checkbox is reported",
  checkPage(good.replace('name="emailConsent" class="x"', 'name="emailConsent" checked="" class="x"'), rule),
  ["emailConsent checkbox is pre-checked (must start unchecked)"]
);
eq("data-required-ish class names do not trip the check", checkPage(good.replace('class="x"', 'class="is-required-later"'), rule), []);
eq("checkboxTag finds the input", checkboxTag(good, "smsConsent"), '<input type="checkbox" name="smsConsent" class="x"/>');

const contact = RULES.find((r) => r.page === "contact.html");
eq("contact rule keeps Text-us AND both consent texts", contact.phrases.length, 4);
eq("contact rule keeps both checkboxes", contact.checkboxes, ["smsConsent", "emailConsent"]);
for (const r of RULES) eq(`${r.page} rule checks at least one phrase`, (r.phrases ?? []).length > 0, true);

if (fails) {
  console.error(`${fails} failing`);
  process.exit(1);
}
console.log("all pass");
