import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Safely Taper Off Antidepressants | Antidepressant Detox",
  description:
    "Learn how to taper off SSRIs and SNRIs like Prozac, Zoloft, and Effexor safely. Expert guidance on withdrawal symptoms, taper schedules, and supervised discontinuation at Desert Recovery Centers.",
  path: "/resources/addiction-detox-guide/antidepressants",
});

const faqs = [
  {
    q: "How long does it take to wean off antidepressants?",
    a: "The time needed to taper off antidepressants depends on the drug, dosage, and how long someone has been taking it. A taper plan typically spans 6 to 12 weeks, but those on higher doses or long-term users may need 6 months or more. Medical professionals reduce the dose by 10–25% every 2–4 weeks to minimize withdrawal symptoms. Research from the American Psychiatric Association shows slow tapering increases success rates, with supervised tapers achieving up to 60% discontinuation success.",
  },
  {
    q: "Can I stop antidepressants cold turkey?",
    a: "Abrupt discontinuation of antidepressants is not recommended. Stopping suddenly can cause withdrawal symptoms including brain zaps, dizziness, nausea, and in severe cases, suicidal thoughts that can be life-threatening. About 20% of people who stop SSRIs abruptly experience significant symptoms, per studies in the Journal of Clinical Psychiatry. Slow tapering under a doctor's care reduces these risks and makes the process more manageable.",
  },
  {
    q: "What are the most common antidepressant withdrawal symptoms?",
    a: "The most common withdrawal symptoms include dizziness, brain zaps (electric-shock sensations), nausea, irritability, insomnia, and rebound depression or anxiety. Short-acting drugs like Effexor (venlafaxine) or Zoloft (sertraline) often cause stronger symptoms due to their 5–24 hour half-lives. Medical professionals monitor these symptoms and adjust the taper plan to reduce discomfort and ensure safety.",
  },
  {
    q: "What is a typical taper schedule for Prozac?",
    a: "A taper plan for fluoxetine (Prozac) is often simpler due to its 4–6 day half-life. Medical professionals typically start with a 10–20% dose reduction every 4–6 weeks. For example, a 20 mg dose might drop to 16 mg, then 12 mg, with smaller cuts using compounded products at the end. The longer half-life means Prozac naturally tapers itself in the body, minimizing withdrawal symptoms.",
  },
  {
    q: "How do I deal with brain zaps during withdrawal?",
    a: "Brain zaps feel like brief electric shocks in the head during antidepressant withdrawal. Slow tapering helps minimize them, especially with short-acting drugs like Zoloft or Effexor. Medical professionals may prescribe adjunctive medications like gabapentin or further slow the taper schedule. Relaxation techniques, adequate sleep, and support groups also help ease the experience.",
  },
  {
    q: "What if my depression returns during the taper?",
    a: "If rebound depression or anxiety returns during tapering, medical professionals may pause or slow the reduction. Cognitive Behavioral Therapy (CBT) and mindfulness can help manage flare-ups, and adjusting the taper plan to smaller cuts or adding adjunctive medications supports stability. Never ignore returning symptoms, talk to your doctor immediately so the plan can be adjusted.",
  },
  {
    q: "When should I call a doctor during antidepressant withdrawal?",
    a: "Talk to your doctor before starting the tapering process, and call immediately if you experience severe symptoms like intense rebound depression, suicidal thoughts, or unmanageable brain zaps. Keep your doctor's phone number handy throughout the taper. Severe withdrawal is a medical situation that can be stabilized quickly with the right adjustments to your plan.",
  },
  {
    q: "Does insurance cover supervised antidepressant discontinuation?",
    a: "Most major insurance plans cover medically supervised antidepressant discontinuation when it is part of a broader mental health or dual diagnosis treatment program. Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, is in-network with TriCare and TriWest, and offers cash-pay options. Our admissions team verifies your benefits and explains your coverage at no cost before you begin.",
  },
];

export default function AntidepressantTaperPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Medical Detox Guide", path: "/resources/detox-guide" },
          { name: "Antidepressant Taper", path: "/resources/addiction-detox-guide/antidepressants" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Clinical Resource"
        title="How to Safely Taper Off Antidepressants"
        description="A clinical guide to discontinuing SSRIs and SNRIs under medical supervision, including withdrawal timelines, taper schedules, and how to manage symptoms like brain zaps and rebound depression."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Stopping Antidepressants Is a Clinical Process, Not a Personal Decision Made Alone
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Deciding to stop taking an antidepressant is a significant step. Whether you no longer need the medication, you are switching to a different treatment like TMS, or the side effects have become intolerable, how you come off the drug matters as much as the decision to stop.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Abrupt discontinuation can produce discontinuation syndrome, a constellation of physical and psychological symptoms that can be genuinely debilitating. Brain zaps, dizziness, nausea, insomnia, and rebound depression are common, and in severe cases, people experience suicidal thoughts that were not present before stopping.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The good news: under medical supervision, a slow, individualized taper is highly successful. Studies show supervised tapers achieve up to 60% discontinuation success, compared to high relapse and reinstatement rates for people who stop on their own. This guide explains what to expect and how the process works.
            </p>
          </div>
        </div>
      </section>

      {/* How long / withdrawal basics */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Basics
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How Long Does It Take to Wean Off Antidepressants?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The time needed to taper off antidepressants depends on the drug, dosage, and how long someone has been taking it. A typical taper plan spans 6 to 12 weeks, but those on higher doses or with years of use may need 6 months or more.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Medical professionals reduce the dose by 10–25% every 2–4 weeks to minimize withdrawal symptoms, with smaller reductions (5–10%) at lower doses. Research from the American Psychiatric Association shows slow tapering increases success rates significantly, with supervised tapers achieving up to 60% discontinuation success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The goal is not speed, it is stability. A taper that feels slow is almost always the right pace.
            </p>
          </div>
        </div>
      </section>

      {/* Withdrawal symptoms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Discontinuation Syndrome
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Are Antidepressant Withdrawal Symptoms?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Withdrawal, clinically called antidepressant discontinuation syndrome, produces a mix of physical and psychological effects. Short-acting drugs like Effexor (venlafaxine) or Zoloft (sertraline) often cause stronger symptoms due to their 5–24 hour half-lives, while long-acting drugs like Prozac (fluoxetine) with a 4–6 day half-life are usually milder.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Brain Zaps",
                  desc: "Brief electric-shock sensations in the head, often triggered by eye movement. One of the most distinctive and unsettling symptoms, especially common with short-acting SSRIs and SNRIs. Slow tapering significantly reduces their intensity.",
                },
                {
                  title: "Dizziness and Balance Issues",
                  desc: "Vertigo-like sensations, lightheadedness, and feeling unsteady on your feet. Staying hydrated, avoiding sudden movements, and adjusting the taper pace all help. In some cases, antihistamines or other adjunctive medications are prescribed.",
                },
                {
                  title: "Nausea and GI Distress",
                  desc: "Nausea, appetite changes, and digestive issues are common in the first one to two weeks after a dose reduction. Usually transient, and they resolve as the body adjusts to the lower dose.",
                },
                {
                  title: "Insomnia and Sleep Disturbance",
                  desc: "Difficulty falling or staying asleep, vivid dreams, and early-morning waking are common, especially with SNRIs like Effexor. Sleep hygiene, melatonin, and occasionally short-term adjunctive medications help.",
                },
                {
                  title: "Rebound Depression or Anxiety",
                  desc: "The return of depression or anxiety symptoms during a taper can be withdrawal, a sign the underlying condition has returned, or both. This is why medical supervision matters, a clinician can distinguish discontinuation effects from relapse and adjust the plan.",
                },
                {
                  title: "Irritability and Mood Swings",
                  desc: "Emotional reactivity, short temper, and tearfulness are common during a taper. These usually improve as the taper progresses and the brain adjusts, but they deserve clinical attention if severe.",
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

      {/* Drug-specific taper protocols */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              By Medication
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Taper Protocols by Medication
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              These are general clinical ranges. Your actual taper schedule must be determined by a prescriber based on your dose, duration of use, medical history, and how you respond to each reduction.
            </p>
            <div className="space-y-4">
              {[
                {
                  drug: "Fluoxetine (Prozac)",
                  halfLife: "4–6 days",
                  pace: "10–20% reduction every 4–6 weeks",
                  note: "The long half-life makes Prozac the most forgiving SSRI to discontinue. Example: 20 mg → 16 mg → 12 mg → compounded fractional doses.",
                },
                {
                  drug: "Sertraline (Zoloft)",
                  halfLife: "~24 hours",
                  pace: "12.5–25 mg reduction every 2–4 weeks",
                  note: "Short half-life requires careful, slower steps. Compounded products help at lower doses. Some clinicians bridge to fluoxetine to smooth the final reductions.",
                },
                {
                  drug: "Venlafaxine (Effexor)",
                  halfLife: "5–10 hours",
                  pace: "10–25% reduction every 2–4 weeks",
                  note: "The shortest half-life of common antidepressants. Known for intense brain zaps if tapered too fast. Extended-release formulations and compounded fractional doses are typically needed.",
                },
                {
                  drug: "Escitalopram / Citalopram (Lexapro, Celexa)",
                  halfLife: "~27–36 hours",
                  pace: "10–25% reduction every 2–4 weeks",
                  note: "Moderate half-life. Generally tolerable tapers, but final steps often need compounded low doses to prevent discontinuation symptoms.",
                },
                {
                  drug: "Duloxetine (Cymbalta)",
                  halfLife: "~12 hours",
                  pace: "10–25% reduction every 2–4 weeks; bead-counting method often used",
                  note: "SNRI with a short half-life. Cymbalta capsules contain beads, and some clinicians supervise bead-counting tapers to achieve fractional dose reductions.",
                },
                {
                  drug: "Paroxetine (Paxil)",
                  halfLife: "~21 hours",
                  pace: "10–25% reduction every 2–4 weeks",
                  note: "Among the hardest antidepressants to discontinue. Often requires a slower-than-average taper and compounded doses. Some clinicians bridge to fluoxetine.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-display text-base text-forest font-semibold mb-3">{item.drug}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-1">Half-life</p>
                      <p className="text-gray-600">{item.halfLife}</p>
                    </div>
                    <div>
                      <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-1">Typical taper pace</p>
                      <p className="text-gray-600">{item.pace}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing specific symptoms */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Symptom Management
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Managing Taper Symptoms
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Managing Brain Zaps",
                  desc: "Slow tapering is the most effective prevention. If brain zaps occur anyway, your clinician may prescribe gabapentin, further slow the taper schedule, or hold at the current dose until symptoms subside. Relaxation techniques and adequate sleep also help.",
                },
                {
                  title: "Managing Dizziness",
                  desc: "Stay hydrated, avoid sudden position changes, and practice deep breathing. Clinicians may slow the taper or prescribe adjunctive medications like antihistamines. If dizziness is severe or includes fainting, pause the taper and call your doctor.",
                },
                {
                  title: "Managing Insomnia",
                  desc: "Sleep hygiene is critical: consistent bedtime, avoiding caffeine after noon, and dim lighting in the evening. Melatonin is often prescribed short-term. If sleep disruption becomes severe, the taper can be slowed to give the nervous system more time to adapt.",
                },
                {
                  title: "Managing Rebound Depression or Anxiety",
                  desc: "If symptoms of your original condition return during a taper, pause or slow the reduction. CBT, mindfulness, and peer support all help manage flare-ups. Sometimes the answer is that the medication was still needed, that is a clinical decision, not a failure.",
                },
                {
                  title: "Supplements",
                  desc: "Omega-3 fatty acids, magnesium, and B vitamins may support brain health during a taper, but evidence of their effectiveness for discontinuation symptoms is limited. Always tell your prescriber before adding supplements, some interact with antidepressants.",
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
          </div>
        </div>
      </section>

      {/* When to call a doctor */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Safety
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              When to Call a Doctor
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4">
                  Before You Start
                </h3>
                <div className="space-y-3">
                  {[
                    "Before making any change to your antidepressant dose, including stopping",
                    "Before switching between antidepressants",
                    "If you are pregnant, nursing, or planning to become pregnant",
                    "If you take other psychiatric medications or have a complex medical history",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <span className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4">
                  Call Immediately If
                </h3>
                <div className="space-y-3">
                  {[
                    "You experience suicidal thoughts or self-harm urges",
                    "Depression or anxiety returns severely",
                    "Withdrawal symptoms become unmanageable or include fainting",
                    "You have thoughts of harming yourself or others",
                    "Any symptom feels like a medical emergency",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-red-100">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 italic">
                  If you are in crisis, call or text 988, the Suicide &amp; Crisis Lifeline, or go to your nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRC approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Antidepressant Discontinuation at Desert Recovery Centers
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Physician-Led Taper Planning",
                  desc: "Our medical director and psychiatric providers design each taper individually based on your specific medication, dose, duration of use, and medical history. There is no one-size-fits-all protocol.",
                },
                {
                  title: "Integrated Mental Health Care",
                  desc: "Discontinuing an antidepressant is easier when the underlying condition is being actively treated. Our clinicians deliver CBT, DBT, EMDR, and other evidence-based therapies in parallel with the taper, addressing the reasons the medication was prescribed.",
                },
                {
                  title: "TMS as an Alternative",
                  desc: "For many clients, Transcranial Magnetic Stimulation (TMS) provides a non-medication path for treatment-resistant depression. If you are tapering off antidepressants because they did not work, TMS may be a direct alternative worth discussing with your clinician.",
                },
                {
                  title: "24/7 Nursing and Medical Support",
                  desc: "Discontinuation symptoms can intensify unpredictably. Residential clients at DRC have 24/7 access to nursing staff and medical providers who can adjust the taper or manage symptoms in real time.",
                },
                {
                  title: "Dual Diagnosis Expertise",
                  desc: "Many clients tapering antidepressants also have co-occurring substance use disorders. Our integrated dual diagnosis program treats both simultaneously, preventing the common pitfall of successfully discontinuing one medication while relapsing on another substance.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-cream rounded-xl p-6 border border-gray-100"
                >
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
                  { label: "Medical Detox Guide", href: "/resources/detox-guide" },
                  { label: "Depression Treatment", href: "/mental-health/depression-treatment" },
                  { label: "TMS Therapy", href: "/treatments/tms-therapy" },
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
                  { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
                  { label: "Mental Health Assessment", href: "/resources/mental-health-assessment" },
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
