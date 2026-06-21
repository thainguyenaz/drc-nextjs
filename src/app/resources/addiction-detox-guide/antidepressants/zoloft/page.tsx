import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema, MedicalWebPageSchema, InlineFAQSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Wean Off Zoloft (Sertraline): Taper Schedule and Withdrawal",
  description:
    "How to safely wean off Zoloft (sertraline): why tapering matters, the withdrawal timeline, common symptoms like brain zaps, and how supervised discontinuation works. Your prescriber sets your schedule.",
  path: "/resources/addiction-detox-guide/antidepressants/zoloft",
});

const faqs = [
  {
    q: "How do you wean off Zoloft?",
    a: "You wean off Zoloft (sertraline) with a gradual, supervised dose reduction, never by stopping suddenly. Because sertraline has a short half-life of around 24 hours, the body clears it quickly, so cutting the dose too fast tends to trigger withdrawal. A prescriber lowers the dose in steps over weeks to months and adjusts the pace based on how you respond. Your specific schedule is set by your prescribing provider, not by a fixed formula.",
  },
  {
    q: "Can I stop taking Zoloft cold turkey?",
    a: "Stopping Zoloft abruptly is not recommended. Sudden discontinuation can cause antidepressant discontinuation syndrome, including brain zaps, dizziness, nausea, irritability, insomnia, and rebound anxiety or depression. Sertraline's short half-life makes these symptoms more likely than with longer-acting antidepressants. A slow taper under medical supervision reduces the risk and makes the process more manageable.",
  },
  {
    q: "How long does it take to wean off Zoloft?",
    a: "The time needed depends on your dose, how long you have taken sertraline, and how you respond to each reduction. A taper commonly spans several weeks to a few months, and people on higher doses or with years of use may need longer. The goal is stability, not speed. A prescriber determines the timeline and slows it down if withdrawal symptoms appear.",
  },
  {
    q: "What are the withdrawal symptoms of stopping Zoloft?",
    a: "Common sertraline withdrawal symptoms include brain zaps (brief electric-shock sensations), dizziness, nausea, insomnia, irritability, and rebound anxiety or low mood. Because Zoloft is short-acting, symptoms can begin within a day or two of a missed or reduced dose. Slow, supervised tapering is the most effective way to minimize them.",
  },
  {
    q: "How do I handle brain zaps when coming off Zoloft?",
    a: "Brain zaps feel like brief electric shocks in the head and are common when coming off short-acting antidepressants like sertraline. Slowing the taper is the most reliable way to reduce them. A prescriber may also adjust the pace or consider adjunctive support. Adequate sleep, hydration, and not skipping doses during the taper all help. Talk to your prescriber if brain zaps become severe or persistent.",
  },
  {
    q: "Does insurance cover supervised Zoloft discontinuation?",
    a: "Most major insurance plans cover medically supervised antidepressant discontinuation when it is part of a broader mental health or dual diagnosis treatment program. Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, is in-network with TriCare and TriWest, and offers cash-pay options. Our admissions team verifies your benefits at no cost before you begin.",
  },
];

// CLINICAL-REVIEW SLOT: Dr. An Nguyen to review and, if approved, replace this
// gated default with reviewed sertraline-specific taper specifics. Until then NO
// specific dose-step schedule is published on this page; the page defers entirely
// to the patient's prescriber. Do not add dose numbers here without clinical sign-off.
const taperProtocol =
  "Your prescribing provider will determine your specific Zoloft taper schedule based on your current dose, how long you have taken it, your medical history, and how you respond to each reduction. The general clinical approach is a gradual, supervised reduction over weeks to months, with smaller steps near the lower doses where withdrawal tends to be most noticeable. There is no single correct schedule, and a pace that feels slow is almost always the right one.";

export default function ZoloftTaperPage() {
  return (
    <>
      <MedicalWebPageSchema
        url="/resources/addiction-detox-guide/antidepressants/zoloft"
        name="How to Wean Off Zoloft (Sertraline): Taper Schedule and Withdrawal"
        dateModified="2026-06-21"
        reviewer="none"
      />
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Medical Detox Guide", path: "/resources/detox-guide" },
          { name: "Antidepressant Taper", path: "/resources/addiction-detox-guide/antidepressants" },
          { name: "Weaning Off Zoloft", path: "/resources/addiction-detox-guide/antidepressants/zoloft" },
        ]}
      />
      <InlineFAQSchema items={faqs} />
      <Navigation />
      <PageHero
        eyebrow="Clinical Resource"
        title="How to Wean Off Zoloft (Sertraline)"
        description="A clinical guide to discontinuing sertraline under medical supervision: why tapering matters, the withdrawal timeline, and how to manage symptoms like brain zaps and rebound anxiety."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Coming Off Zoloft Is About How You Stop, Not Just When
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you are thinking about coming off Zoloft, whether the medication has done its job, the side effects have become hard to live with, or you are moving to a different treatment, the way you taper matters as much as the decision to stop.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Zoloft (sertraline) has a short half-life of about 24 hours, which means the body clears it quickly. That is why stopping suddenly, or cutting the dose too fast, often brings on withdrawal: brain zaps, dizziness, nausea, insomnia, and a return of anxiety. None of that means something is permanently wrong. It means the brain needs a slower, steadier reduction.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Under medical supervision, a gradual, individualized taper is highly successful. This guide explains what to expect from sertraline specifically and how a supervised taper works. Your actual schedule should always be set with your prescribing provider.
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
              How Long Does It Take to Wean Off Zoloft?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              There is no fixed timeline. How long it takes to wean off Zoloft depends on your dose, how long you have taken it, and how your body responds at each step. A taper commonly spans several weeks to a few months, and people on higher doses or with years of use often need longer.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Because sertraline is short-acting, withdrawal symptoms can appear quickly after a reduction, so steps are usually spaced to let the body settle before the next decrease. Many prescribers make smaller cuts near the lower doses, where discontinuation symptoms tend to be most noticeable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The goal is not speed, it is stability. A taper that feels slow is almost always the right pace.
            </p>
          </div>
        </div>
      </section>

      {/* Zoloft withdrawal symptoms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Discontinuation Syndrome
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Zoloft Withdrawal Symptoms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Because sertraline has a short half-life, withdrawal, clinically called antidepressant discontinuation syndrome, can be more noticeable than with longer-acting medications. Slow tapering is the most effective way to keep these symptoms mild.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Brain Zaps",
                  desc: "Brief electric-shock sensations in the head, often triggered by eye movement. One of the most distinctive symptoms of stopping short-acting SSRIs like sertraline. Slowing the taper reduces their intensity.",
                },
                {
                  title: "Dizziness and Nausea",
                  desc: "Lightheadedness, a vertigo-like feeling, and stomach upset are common in the first one to two weeks after a dose reduction. Staying hydrated and avoiding sudden movements helps; symptoms usually ease as the body adjusts.",
                },
                {
                  title: "Insomnia and Vivid Dreams",
                  desc: "Trouble falling or staying asleep and unusually vivid dreams can follow a reduction. Sleep routines and, when needed, short-term support from a prescriber help manage this.",
                },
                {
                  title: "Rebound Anxiety or Low Mood",
                  desc: "Anxiety or depression symptoms can return during a taper. This may be withdrawal, a sign the underlying condition has returned, or both. A clinician can tell the difference and adjust the plan, which is why supervision matters.",
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
              How a Zoloft Taper Works
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
              Supervised Zoloft Discontinuation at Desert Recovery Centers
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Physician-Led Taper Planning",
                  desc: "Our medical and psychiatric providers design each taper individually based on your dose, duration of use, and medical history. There is no one-size-fits-all sertraline protocol.",
                },
                {
                  title: "Integrated Mental Health Care",
                  desc: "Coming off an antidepressant is easier when the underlying condition is being treated. Our clinicians deliver CBT, DBT, EMDR, and other evidence-based therapies alongside the taper.",
                },
                {
                  title: "Dual Diagnosis Expertise",
                  desc: "Many people tapering antidepressants also have a co-occurring substance use disorder. Our integrated program treats both at once, avoiding the common trap of discontinuing one medication while relapsing on another substance.",
                },
                {
                  title: "24/7 Nursing and Medical Support",
                  desc: "Discontinuation symptoms can intensify unpredictably. Residential clients have around-the-clock access to nursing and medical providers who can adjust the taper or manage symptoms in real time.",
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
                  { label: "How to Taper Off Prozac", href: "/resources/addiction-detox-guide/antidepressants/prozac" },
                  { label: "Medical Detox Guide", href: "/resources/detox-guide" },
                  { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
                  { label: "TMS Therapy", href: "/treatments/tms-therapy" },
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
