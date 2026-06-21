import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema, MedicalWebPageSchema, InlineFAQSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Taper Off Prozac (Fluoxetine): Schedule and Withdrawal",
  description:
    "How to safely taper off Prozac (fluoxetine): why its long half-life changes the taper, the withdrawal timeline, common symptoms, and how supervised discontinuation works. Your prescriber sets your schedule.",
  path: "/resources/addiction-detox-guide/antidepressants/prozac",
});

const faqs = [
  {
    q: "How do you taper off Prozac?",
    a: "You taper off Prozac (fluoxetine) with a gradual, supervised dose reduction rather than stopping all at once. Prozac is unusual among antidepressants because of its long half-life of about four to six days, so the body clears it slowly and withdrawal is often milder. Even so, a prescriber lowers the dose in steps and adjusts the pace to how you respond. Your specific schedule is set by your prescribing provider.",
  },
  {
    q: "Can I stop taking Prozac cold turkey?",
    a: "Stopping Prozac abruptly is not recommended, even though its long half-life makes withdrawal generally milder than with shorter-acting antidepressants. Sudden discontinuation can still cause symptoms such as anxiety, irritability, insomnia, dizziness, and a return of low mood. A slow taper under medical supervision lowers the risk and keeps the process manageable.",
  },
  {
    q: "How long does it take to taper off Prozac?",
    a: "It depends on your dose, how long you have taken fluoxetine, and how you respond at each step. Because Prozac clears the body slowly, the taper itself can sometimes move in fewer steps than shorter-acting drugs, but the timeline is still individual and commonly spans several weeks to a few months. A prescriber sets the pace and slows it if symptoms appear.",
  },
  {
    q: "What are the withdrawal symptoms of stopping Prozac?",
    a: "Prozac withdrawal is usually milder than with short-acting antidepressants because of its long half-life, but it can still include anxiety, irritability, insomnia, dizziness, and rebound depression. Symptoms may appear later than with other drugs, sometimes a week or more after a reduction, because fluoxetine leaves the body gradually. Supervised tapering helps keep symptoms manageable.",
  },
  {
    q: "Why is Prozac sometimes used to help stop other antidepressants?",
    a: "Because fluoxetine has the longest half-life of the common antidepressants, some prescribers use it to smooth the final steps of stopping a shorter-acting medication, a strategy a clinician may call bridging. Whether this is appropriate is a clinical decision made by your prescriber based on your situation. It is not something to attempt on your own.",
  },
  {
    q: "Does insurance cover supervised Prozac discontinuation?",
    a: "Most major insurance plans cover medically supervised antidepressant discontinuation when it is part of a broader mental health or dual diagnosis treatment program. Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, is in-network with TriCare and TriWest, and offers cash-pay options. Our admissions team verifies your benefits at no cost before you begin.",
  },
];

// CLINICAL-REVIEW SLOT: Dr. An Nguyen to review and, if approved, replace this
// gated default with reviewed fluoxetine-specific taper specifics. Until then NO
// specific dose-step schedule is published on this page; the page defers entirely
// to the patient's prescriber. Do not add dose numbers here without clinical sign-off.
const taperProtocol =
  "Your prescribing provider will determine your specific Prozac taper schedule based on your current dose, how long you have taken it, your medical history, and how you respond to each reduction. The general clinical approach is a gradual, supervised reduction; because fluoxetine clears the body slowly, withdrawal is often milder and may appear later than with other antidepressants, which a prescriber accounts for when setting the pace. There is no single correct schedule, and a pace that feels slow is almost always the right one.";

export default function ProzacTaperPage() {
  return (
    <>
      <MedicalWebPageSchema
        url="/resources/addiction-detox-guide/antidepressants/prozac"
        name="How to Taper Off Prozac (Fluoxetine): Schedule and Withdrawal"
        dateModified="2026-06-21"
        reviewer="none"
      />
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Medical Detox Guide", path: "/resources/detox-guide" },
          { name: "Antidepressant Taper", path: "/resources/addiction-detox-guide/antidepressants" },
          { name: "Tapering Off Prozac", path: "/resources/addiction-detox-guide/antidepressants/prozac" },
        ]}
      />
      <InlineFAQSchema items={faqs} />
      <Navigation />
      <PageHero
        eyebrow="Clinical Resource"
        title="How to Taper Off Prozac (Fluoxetine)"
        description="A clinical guide to discontinuing fluoxetine under medical supervision: how its long half-life shapes the taper, the withdrawal timeline, and how to manage symptoms safely."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Prozac Comes Off Differently Than Other Antidepressants
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you are planning to come off Prozac, whether the medication has done its job, the side effects have become hard to live with, or you are moving to a different treatment, how you taper still matters, even though Prozac is one of the easier antidepressants to stop.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Prozac (fluoxetine) has the longest half-life of the common antidepressants, about four to six days. The body clears it slowly, which softens withdrawal and is why fluoxetine is sometimes the gentlest to discontinue. It does not eliminate withdrawal, though, and symptoms can show up later than people expect, sometimes a week or more after a dose change.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Under medical supervision, a gradual, individualized taper is highly successful. This guide explains what makes fluoxetine different and how a supervised taper works. Your actual schedule should always be set with your prescribing provider.
            </p>
          </div>
        </div>
      </section>

      {/* How long */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Timeline
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How Long Does It Take to Taper Off Prozac?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              There is no fixed timeline. How long it takes depends on your dose, how long you have taken fluoxetine, and how you respond at each step. Because Prozac leaves the body slowly, the medication keeps working for days after a reduction, which can make the taper smoother but also delays when withdrawal symptoms appear.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A taper commonly spans several weeks to a few months. Many prescribers make smaller cuts near the lower doses, where discontinuation symptoms are most likely to surface, and wait longer between steps to account for how slowly fluoxetine clears.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The goal is not speed, it is stability. A taper that feels slow is almost always the right pace.
            </p>
          </div>
        </div>
      </section>

      {/* Prozac withdrawal symptoms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Discontinuation Syndrome
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Prozac Withdrawal Symptoms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Because fluoxetine has a long half-life, withdrawal, clinically called antidepressant discontinuation syndrome, is usually milder than with short-acting drugs. When symptoms do appear, they often show up later and fade more gradually.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Anxiety and Irritability",
                  desc: "A return of anxiety, restlessness, or a short temper is among the more common effects of reducing fluoxetine. These usually ease as the body adjusts, but they deserve clinical attention if they intensify.",
                },
                {
                  title: "Insomnia and Sleep Changes",
                  desc: "Difficulty sleeping and vivid dreams can follow a reduction. Sleep routines and, when needed, short-term support from a prescriber help manage this.",
                },
                {
                  title: "Dizziness",
                  desc: "Lightheadedness or an unsteady feeling can occur, though it tends to be less intense with fluoxetine than with short-acting antidepressants because the drug clears so gradually.",
                },
                {
                  title: "Rebound Depression",
                  desc: "Low mood returning during a taper may be withdrawal, a sign the underlying condition has returned, or both. A clinician can distinguish the two and adjust the plan, which is why supervision matters.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How tapering works (GATED) */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              How It Works
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How a Prozac Taper Works
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              These are general principles, not a personal prescription. Your actual taper schedule must be determined by a prescriber based on your dose, duration of use, medical history, and how you respond to each reduction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              {taperProtocol}
            </p>
          </div>
        </div>
      </section>

      {/* DRC approach + related links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Supervised Prozac Discontinuation at Desert Recovery Centers
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Physician-Led Taper Planning",
                  desc: "Our medical and psychiatric providers design each taper individually based on your dose, duration of use, and medical history. There is no one-size-fits-all fluoxetine protocol.",
                },
                {
                  title: "Integrated Mental Health Care",
                  desc: "Coming off an antidepressant is easier when the underlying condition is being treated. Our clinicians deliver CBT, DBT, EMDR, and other evidence-based therapies alongside the taper.",
                },
                {
                  title: "TMS as an Alternative",
                  desc: "For clients tapering off antidepressants because they did not work, Transcranial Magnetic Stimulation (TMS) offers a non-medication path for treatment-resistant depression worth discussing with a clinician.",
                },
                {
                  title: "Dual Diagnosis Expertise",
                  desc: "Many people tapering antidepressants also have a co-occurring substance use disorder. Our integrated program treats both at once, avoiding the common trap of discontinuing one medication while relapsing on another substance.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-xl p-6 border border-gray-100">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-display text-lg text-forest font-semibold mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Antidepressant Taper Guide", href: "/resources/addiction-detox-guide/antidepressants" },
                  { label: "How to Wean Off Zoloft", href: "/resources/addiction-detox-guide/antidepressants/zoloft" },
                  { label: "Medical Detox Guide", href: "/resources/detox-guide" },
                  { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                  { label: "TMS Therapy", href: "/treatments/tms-therapy" },
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <CTASection />
      <Footer />
    </>
  );
}
