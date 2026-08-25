// Test suite for the unscoped payer-network claim gate.
// Run: node scripts/check-confirm.test.mjs   (exit 0 = all pass)
// Every case earned its place: the adversarial (A) cases fooled the naive
// +/-120 co-occurrence window on 2026-08-25; the boundary (B) cases pin the
// window size; the commercial (C) cases pin Rule B against live compliant
// copy. If you change the gate, these must still pass.
import { unscopedNetworkClaims } from "./check-confirm.mjs";

const cases = [
  // Claim orderings and the lp:280 class
  ["ordering1 unscoped", "is in-network with TRICARE through TriWest, and offers cash-pay", 1],
  ["lp:280 class inline spans", "<span>TRICARE</span><span>In-Network Through TriWest</span>", 1],
  ["contrast label with in-network token in-sentence", "Out-of-Network + TRICARE, we are in-network", 1],
  // DOCUMENTED LIMITATION: no "in-network" token anywhere -> no anchor. The
  // implied-by-contrast class ("Out-of-Network + TRICARE" alone) needs a
  // human census, not this gate.
  ["limitation: token-free contrast label", "Out-of-Network + TRICARE", 0],
  ["ordering1 scoped", "is in-network with TRICARE for residential treatment through TriWest", 0],
  ["ordering2 scoped (prozac/zoloft)", "in-network with TRICARE through TriWest for residential treatment", 0],
  ["TrustBar label", "Out-of-Network + TRICARE In-Network for Residential Treatment (TriWest)", 0],
  ["scoped badge across inline spans", "<span>TRICARE</span><span>In-Network for Residential Treatment Through TriWest</span>", 0],
  ["no payer token", "we are in-network with several dental plans", 0],
  ["OON only", "out-of-network coverage from most plans; TRICARE options exist", 0],
  // Adversarial: unrelated "residential" near an unqualified claim
  ["A1 residential in PRIOR sentence", "Our residential program in Scottsdale offers luxury amenities. We are in-network with TRICARE through TriWest, and offer cash-pay options.", 1],
  ["A2 residential in NEXT sentence", "We are in-network with TRICARE through TriWest. Our residential program is Joint Commission accredited.", 1],
  ["A3 residential heading, block boundary", "Residential Treatment</h2><p>DRC is in-network with TRICARE through TriWest for all levels of care.</p>", 1],
  ["A6 residential in prior LIST ITEM", "<li>Residential care</li><li>We are in-network with TRICARE through TriWest</li>", 1],
  // Window boundary (200 chars, punctuation-free content)
  ["B1 scope 199 chars before, no punctuation", "residential " + "x".repeat(187) + " In-Network TRICARE TriWest", 0],
  ["B2 scope 201+ chars before, no punctuation", "residential " + "x".repeat(220) + " In-Network TRICARE TriWest", 1],
  ["B3 trimmed at sentence boundary", "residential care. " + "x".repeat(50) + " in-network with TRICARE through TriWest", 1],
  // Rule B: commercial/government payers are never in-network
  ["C1 in-network with Aetna", "DRC is in-network with Aetna and other plans.", 1],
  ["C2 in-network with Blue Cross", "we are in-network with Blue Cross Blue Shield", 1],
  ["C3 first-person in-network Medicare", "we are now in-network for Medicare members", 1],
  // DOCUMENTED LIMITATION: Rule B requires a first-person subject; a
  // subject-free false claim slips through. Tradeoff earned by the Cigna
  // explainer false positives (C6/C7) — a gate that fails on true
  // educational statements gets switched off.
  ["limitation: subject-free payer claim", "now in-network for Medicare members", 0],
  ["C6 educational third-person (live Cigna page)", "One of the biggest factors affecting your rehab coverage is whether the treatment facility is in-network or out-of-network with your Cigna plan.", 0],
  ["C7 educational mechanics (live Cigna page)", "When you visit an in-network facility, Cigna has pre-negotiated rates with the provider.", 0],
  ["C4 live compliant copy (payers listed before scoped TRICARE claim)", "accepts out-of-network coverage from most major commercial insurance plans (Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare) and offers cash-pay options; TRICARE is in-network for residential treatment, through TriWest.", 0],
  ["C5 scoped TRICARE then distant Aetna", "is in-network with TRICARE for residential treatment through TriWest, and works with Aetna on an out-of-network basis.", 0],
];

let failures = 0;
for (const [name, text, want] of cases) {
  const flagged = unscopedNetworkClaims(text).length > 0 ? 1 : 0;
  if (flagged !== want) {
    failures++;
    console.error(`FAIL ${name} (flagged=${flagged}, want=${want})`);
  } else {
    console.log(`PASS ${name}`);
  }
}
console.log(failures === 0 ? `ALL ${cases.length} PASS` : `${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
