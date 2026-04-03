import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Stage an Intervention — DRC",
  description:
    "Step-by-step family guide to staging an intervention in Arizona. Learn ARISE, Johnson Model, and CRAFT approaches. Free consultation at Desert Recovery Centers.",
  path: "/resources/intervention-guide",
});

const faqs = [
  {
    q: "How long does it take to plan an intervention?",
    a: "Most families can plan a well-organized intervention in 1 to 2 weeks with professional guidance. This includes selecting participants, writing letters, coordinating logistics, and rehearsing. Rushing the process increases the risk of the intervention going poorly, while waiting too long may allow the situation to worsen. Our admissions team can help you determine the right timeline for your specific circumstances.",
  },
  {
    q: "What if my loved one refuses to go to treatment?",
    a: "Refusal is a possibility, and it does not mean the intervention failed. A professionally guided intervention plants a seed that often leads to acceptance days or weeks later. The key is that the family follows through on the boundaries they set during the intervention. Many clients at Desert Recovery Centers initially refused treatment before eventually accepting help. Our team can guide you through next steps even if the first conversation does not result in immediate agreement.",
  },
  {
    q: "Should children be included in an intervention?",
    a: "This depends on the child's age, emotional maturity, and the nature of the addiction. In some cases, hearing from their children can be a powerful motivator. However, children should never be placed in a situation where they witness hostility, blame, or emotional volatility. A professional interventionist can help you determine whether including children is appropriate and how to prepare them.",
  },
  {
    q: "Can we do an intervention without a professional?",
    a: "While family-led interventions can work, the success rate is significantly higher with professional guidance. An interventionist brings objectivity, de-escalation skills, and a structured framework that keeps the conversation productive. They also help manage the high emotions that can derail even the most well-intentioned efforts. DRC's admissions team can connect you with experienced interventionists in Arizona.",
  },
  {
    q: "How much does an intervention cost?",
    a: "Professional intervention services typically range from $1,500 to $10,000 depending on the interventionist, travel requirements, and complexity of the case. Some treatment centers, including Desert Recovery Centers, offer intervention support as part of the admissions process at no additional cost. Contact our admissions team to learn about the resources available to your family.",
  },
  {
    q: "What should I do if the person becomes angry during the intervention?",
    a: "Anger is a common and expected reaction. It is often a defense mechanism masking fear, shame, or vulnerability. The most important thing is to remain calm, avoid matching their emotional intensity, and stick to the prepared script. A professional interventionist is trained to de-escalate these moments. If the situation becomes physically threatening, the intervention should be paused immediately and safety should be prioritized above all else.",
  },
];

export default function InterventionGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Intervention Guide", path: "/resources/intervention-guide" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Family Resource Guide"
        title="How to Stage an Intervention"
        description="A complete family guide to planning and conducting an intervention that actually works — with compassion, preparation, and professional support."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      {/* Medical Review / Author */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Written by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              You Are Not Powerless
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Watching someone you love destroy their life with addiction is one of the most painful experiences a family can face. You are not powerless. An intervention, done correctly, can be the turning point.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              An intervention is a carefully planned conversation in which family members and close friends come together to express their concern, share the impact of their loved one&apos;s addiction, and present a clear path to treatment. It is not an ambush. It is not an ultimatum. When done well, it is an act of love that breaks through the denial and isolation that addiction creates.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This guide will walk you through every step of the process — from understanding what an intervention is, to planning it, to knowing exactly what to say and what to avoid. If your family is facing this situation right now, you are not alone. The admissions team at Desert Recovery Centers helps families navigate this process every day, and we are here for you.
            </p>
          </div>
        </div>
      </section>

      {/* What Is an Intervention */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Understanding the Process
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Is an Intervention?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              An intervention is a structured, guided conversation between a person struggling with addiction and the people who care about them most. The goal is not to force someone into treatment — it is to help them see the reality of their situation through the eyes of the people they love, and to offer a clear, immediate pathway to help.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most people struggling with addiction are in some degree of denial about how severe their situation has become. They may minimize the consequences, rationalize their behavior, or genuinely not see the damage being done to themselves and others. An intervention compassionately disrupts that denial by presenting a unified message from the people closest to them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Research published in the <em>Journal of Consulting and Clinical Psychology</em> shows that professionally guided interventions result in the person entering treatment approximately 90% of the time. When families try to address addiction without structure or guidance, the success rate drops dramatically.
            </p>
          </div>
        </div>
      </section>

      {/* When to Consider */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Recognizing the Moment
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              When to Consider an Intervention
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              There is no perfect time — but there are clear signs that the moment has come:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Your loved one has tried to quit on their own and failed repeatedly",
                "Their substance use has led to legal problems, job loss, or financial ruin",
                "Relationships with family and friends are deteriorating or severed",
                "They are engaging in dangerous behavior — driving under the influence, mixing substances, or overdosing",
                "Their physical health is visibly declining",
                "They refuse to discuss their substance use or become hostile when confronted",
                "Children or dependents are being neglected or exposed to harmful environments",
                "You have noticed personality changes, secrecy, or isolation that worsen over time",
              ].map((sign, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-cream rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{sign}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              If you are seeing several of these signs, waiting is unlikely to make things better. Addiction is a progressive disease — it does not resolve on its own.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Interventions */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Models & Approaches
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Types of Interventions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Not all interventions look the same. The right approach depends on your loved one&apos;s personality, the severity of their addiction, family dynamics, and whether they have any co-occurring mental health conditions.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "The Johnson Model",
                  desc: "The most widely recognized intervention format. The family plans the intervention in secret and confronts the individual as a group, each member reading a prepared letter that expresses love, describes the impact of the addiction, and sets clear boundaries. A treatment placement is arranged in advance so the person can leave for treatment immediately if they agree. The Johnson Model is direct, highly structured, and best suited for situations where the individual is deeply in denial.",
                },
                {
                  title: "ARISE (A Relational Intervention Sequence for Engagement)",
                  desc: "ARISE takes a more gradual, less confrontational approach. Rather than planning in secret, the family openly invites the individual to a series of conversations about their substance use and its impact. This model operates in phases, beginning with an initial invitation and escalating only if needed. ARISE is often effective for individuals who are not yet in severe denial and may be open to dialogue. It preserves trust and reduces the risk of the person feeling ambushed.",
                },
                {
                  title: "CRAFT (Community Reinforcement and Family Training)",
                  desc: "CRAFT is not a single-event intervention — it is a skill-based program that teaches family members how to change their own behavior in ways that encourage their loved one to seek treatment. CRAFT helps families stop enabling, improve communication, take care of themselves, and strategically reinforce sober behavior while allowing natural consequences for substance use. Research shows CRAFT increases the likelihood of treatment entry to approximately 64-74%, significantly higher than traditional Al-Anon approaches.",
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

      {/* How to Prepare */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Planning & Preparation
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How to Prepare for an Intervention
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "1. Consult a Professional",
                  desc: "Before doing anything else, speak with a professional interventionist or a treatment center admissions team. They can assess your situation, recommend the right intervention model, and guide you through every step. Desert Recovery Centers offers free, confidential pre-intervention consultations.",
                },
                {
                  title: "2. Assemble the Right Team",
                  desc: "Choose 4-8 people who are emotionally significant to the individual — parents, siblings, a close friend, a spouse, a mentor, or a respected colleague. Avoid including anyone who is actively using substances, has unresolved conflicts with the person, or is likely to become aggressive or overly emotional.",
                },
                {
                  title: "3. Research Treatment Options",
                  desc: "Before the intervention, identify a treatment program, verify insurance coverage, and arrange a bed so your loved one can enter treatment immediately. Removing logistical barriers dramatically increases acceptance. DRC's admissions team can complete insurance verification and hold a placement in advance.",
                },
                {
                  title: "4. Write Impact Letters",
                  desc: "Each participant writes a letter expressing their love for the person, describing specific ways the addiction has affected them, and stating the boundaries they will enforce if the person refuses treatment. These letters keep the conversation focused and prevent emotional escalation.",
                },
                {
                  title: "5. Rehearse",
                  desc: "Hold at least one practice session without the individual present. Read the letters aloud, discuss how to handle potential reactions (anger, tears, denial, deflection), and agree on the order of speakers. Rehearsal prevents the intervention from going off-script in the moment.",
                },
                {
                  title: "6. Set Boundaries in Advance",
                  desc: "Every participant must be prepared to follow through on their stated boundaries. If you say you will not provide financial support unless they enter treatment, you must mean it. Empty threats undermine the intervention and teach the individual that there are no real consequences.",
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

      {/* What to Say / What Not to Say */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Communication
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What to Say — and What to Avoid
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What to Say
                </h3>
                <div className="space-y-3">
                  {[
                    "\"I love you, and that's why I'm here.\"",
                    "\"I've seen how this has changed you, and it scares me.\"",
                    "\"I want to support you, and I've found a place that can help.\"",
                    "\"This isn't about blame — it's about getting you the help you deserve.\"",
                    "\"We've already taken care of the details. A bed is ready for you today.\"",
                    "Share specific, factual examples of how the addiction has affected you personally.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <span className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  What Not to Say
                </h3>
                <div className="space-y-3">
                  {[
                    "\"You're ruining everyone's life.\" — Focus on impact, not blame.",
                    "\"If you loved us, you'd stop.\" — Addiction is not a choice or a reflection of love.",
                    "\"You're a terrible parent/spouse/friend.\" — Attack the disease, not the person.",
                    "\"This is your last chance.\" — Avoid ultimatums you cannot enforce.",
                    "\"Why can't you just stop?\" — Minimizes the medical reality of addiction.",
                    "Never threaten, scream, or use profanity — even if the person becomes hostile.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                      <span className="w-2 h-2 bg-red-300 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              After the Intervention
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Happens Next
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If your loved one agrees to treatment, the transition should happen as quickly as possible — ideally the same day. This is why having a treatment center ready in advance is so critical. At Desert Recovery Centers, our admissions team can complete the intake process within hours, and most clients begin treatment within 48 hours of their first call.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              If your loved one refuses, it is essential that the family follows through on the boundaries set during the intervention. This is not punishment — it is the removal of enabling behaviors that allow the addiction to continue. Many individuals who initially refuse ultimately enter treatment within days or weeks, once they experience the consequences of their family&apos;s new boundaries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Regardless of the outcome, every family member should seek their own support — whether through Al-Anon, family therapy, or individual counseling. Living with a loved one&apos;s addiction takes a profound toll, and you deserve help too.
            </p>
          </div>
        </div>
      </section>

      {/* How DRC Supports Families */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              How We Help
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How Desert Recovery Centers Supports Families
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Free Pre-Intervention Consultation",
                  desc: "Our admissions team provides confidential guidance on whether an intervention is appropriate, which model may work best, and how to get started. There is no cost and no obligation.",
                },
                {
                  title: "Insurance Verification in Advance",
                  desc: "We verify insurance benefits before the intervention so that financial concerns don't become a barrier in the critical moment when your loved one agrees to treatment.",
                },
                {
                  title: "Immediate Placement Availability",
                  desc: "When your loved one says yes, we move quickly. Our admissions team can arrange intake and transport so the transition to treatment happens without delay.",
                },
                {
                  title: "Family Therapy Program",
                  desc: "Once your loved one is in treatment, our family therapy program helps repair relationships, establish healthy communication patterns, and build the family support system that is critical for long-term recovery.",
                },
                {
                  title: "Ongoing Family Support",
                  desc: "Our alumni program includes family resources, support groups, and check-ins to ensure that the entire family continues to heal alongside their loved one.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
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
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis" },
                  { label: "Medical Detox Guide", href: "/resources/detox-guide" },
                  { label: "Rehab FAQ", href: "/resources/faq" },
                  { label: "Our Facilities", href: "/facilities/glendale" },
                  { label: "Addiction Treatment Programs", href: "/addiction-treatment" },
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
