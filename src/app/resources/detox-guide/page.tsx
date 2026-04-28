import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Medical Detox in Arizona, DRC",
  description:
    "Learn what medical detox involves, why it matters, and what to expect. Medically supervised detox at Desert Recovery Centers in Arizona.",
  path: "/resources/detox-guide",
});

const faqs = [
  {
    q: "Is detox painful?",
    a: "Medical detox is designed to manage withdrawal symptoms as safely and comfortably as possible. While withdrawal can be uncomfortable, our medical team uses evidence-based medications and 24/7 monitoring to significantly reduce discomfort. The experience varies by substance and individual, but our goal is always to minimize suffering while ensuring safety. We never use the term 'painless detox' because honesty about the process is important, but medically supervised detox is vastly more comfortable and safer than attempting withdrawal alone.",
  },
  {
    q: "How long does detox take?",
    a: "Detox timelines vary significantly by substance. Alcohol detox typically takes 5-7 days, opioid detox 5-10 days, benzodiazepine detox can take 2-4 weeks due to the tapering process, and stimulant withdrawal may last 1-2 weeks. These are general ranges, your actual timeline depends on the substance, duration of use, dosage, overall health, and whether you're withdrawing from multiple substances simultaneously.",
  },
  {
    q: "Can I detox at home?",
    a: "We strongly advise against unsupervised detox, particularly for alcohol, benzodiazepines, and opioids. Alcohol and benzodiazepine withdrawal can produce life-threatening seizures, and opioid withdrawal, while rarely fatal, involves severe symptoms that frequently lead to relapse and overdose. Medical detox provides the medication management, monitoring, and clinical support needed to get through this phase safely.",
  },
  {
    q: "What happens after detox is complete?",
    a: "At Desert Recovery Centers, clients transition directly from detox stabilization into our residential treatment program. This is critical because detox only addresses physical dependence, it does not treat the psychological, behavioral, and emotional dimensions of addiction. Clients who complete detox without entering treatment have extremely high relapse rates. Our integrated approach ensures a seamless transition from medical stabilization to comprehensive treatment.",
  },
  {
    q: "Does insurance cover medical detox?",
    a: "Yes, most major insurance plans cover medically necessary detoxification services. Desert Recovery Centers is in-network with many major insurance providers, and our admissions team will verify your benefits and explain your coverage at no cost before you begin treatment. We work to minimize out-of-pocket costs and eliminate financial barriers to care.",
  },
  {
    q: "What medications are used during detox?",
    a: "The medications used depend on the substance being withdrawn. For opioid detox, we may use buprenorphine (Suboxone), clonidine, or other FDA-approved medications. For alcohol detox, benzodiazepines are typically used to prevent seizures, along with vitamins and supportive medications. Benzodiazepine detox involves a carefully managed tapering schedule. All medications are prescribed and monitored by our medical director and nursing staff, with the goal of ensuring safety and reducing withdrawal severity.",
  },
];

export default function DetoxGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Medical Detox Guide", path: "/resources/detox-guide" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Clinical Resource"
        title="Medical Detox in Arizona"
        description="What to expect from medically supervised detoxification, and why it is the critical first step that makes treatment possible."
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
              Detox Is the First Step, Not the Last
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Detox is not treatment. It is the necessary first step that makes treatment possible. Done without medical supervision, withdrawal from alcohol, benzodiazepines, or opioids can be dangerous, even fatal.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Medically supervised detoxification provides the clinical oversight, medication management, and 24/7 monitoring needed to safely navigate the withdrawal process. It clears the body of substances so that the real work of recovery, therapy, skill-building, and behavioral change, can begin.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Desert Recovery Centers, detox stabilization is integrated into our treatment continuum. Clients are never discharged after detox alone, they transition directly into our residential program where the underlying causes of addiction are addressed through evidence-based clinical care.
            </p>
          </div>
        </div>
      </section>

      {/* What Detox Is / Is Not */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Setting Expectations
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Detox Is, and What It Is Not
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What Detox Is
                </h3>
                <div className="space-y-3">
                  {[
                    "Medical stabilization, safely managing the physical symptoms of withdrawal",
                    "24/7 monitoring by nurses and physicians who can respond to complications immediately",
                    "Medication management to reduce withdrawal severity and prevent dangerous outcomes like seizures",
                    "The bridge between active substance use and the beginning of therapeutic treatment",
                    "An essential first step for anyone physically dependent on alcohol, opioids, or benzodiazepines",
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
                  What Detox Is Not
                </h3>
                <div className="space-y-3">
                  {[
                    "Not treatment for addiction, it addresses physical dependence only, not the psychological or behavioral components",
                    "Not sufficient on its own, clients who leave after detox without entering treatment have extremely high relapse rates",
                    "Not a shortcut, there is no safe way to accelerate withdrawal beyond what the body can handle",
                    "Not a substitute for therapy, skill-building, or the clinical work that creates lasting recovery",
                    "Not a one-time event for everyone, some individuals require medical support through multiple phases of stabilization",
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

      {/* Substances Requiring Medical Detox */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Critical Information
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Substances That Require Medical Detox
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Not all substances carry the same withdrawal risks. The following substances produce withdrawal syndromes that can be medically dangerous and should never be discontinued without professional supervision:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Alcohol",
                  desc: "Alcohol withdrawal can produce tremors, hallucinations, seizures, and delirium tremens (DTs), a potentially fatal condition. The risk is highest for heavy, long-term drinkers and those with a history of withdrawal seizures. Medically supervised detox uses benzodiazepines and other medications to prevent these complications.",
                },
                {
                  title: "Benzodiazepines (Xanax, Valium, Klonopin, Ativan)",
                  desc: "Benzodiazepine withdrawal is similar to alcohol withdrawal in its severity and can produce seizures, psychosis, and life-threatening complications. Benzodiazepines must be tapered gradually under medical supervision, abrupt discontinuation is dangerous regardless of dosage. The tapering process can take weeks to months depending on the duration and dosage of use.",
                },
                {
                  title: "Opioids (Heroin, Fentanyl, Oxycodone, Hydrocodone)",
                  desc: "While opioid withdrawal is rarely life-threatening, it produces extremely uncomfortable symptoms, severe muscle aches, nausea, vomiting, diarrhea, insomnia, and intense cravings, that drive the majority of relapses. Medical detox uses FDA-approved medications like buprenorphine (Suboxone) and clonidine to manage symptoms and reduce the risk of relapse during this vulnerable period.",
                },
                {
                  title: "Stimulants (Methamphetamine, Cocaine)",
                  desc: "Stimulant withdrawal is primarily psychological rather than physically dangerous, producing fatigue, depression, increased appetite, and intense cravings. While medical detox is not always required for stimulants, clinical monitoring is recommended because the severe depression that often accompanies stimulant withdrawal can create safety risks.",
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

      {/* What Medically Supervised Detox Looks Like */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Experience
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Medically Supervised Detox Looks Like
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding what to expect reduces anxiety and helps clients and families prepare mentally for the process:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Intake Assessment",
                  desc: "Upon arrival, our medical team conducts a comprehensive evaluation, substance use history, medical history, mental health screening, vital signs, and laboratory work. This assessment determines the appropriate detox protocol and identifies any co-occurring conditions that require attention.",
                },
                {
                  title: "Medical Stabilization",
                  desc: "Our medical director prescribes an individualized medication protocol based on the substances involved and the severity of dependence. Vital signs are monitored regularly, every 2-4 hours in the acute phase. Nursing staff are available 24/7 to respond to any changes in condition.",
                },
                {
                  title: "Comfort and Support",
                  desc: "Clients rest in private rooms in a comfortable, quiet environment. Nutritional support, hydration, and gentle activity are encouraged as tolerated. Our staff provides emotional support and reassurance throughout the process, recognizing that this is often the most vulnerable time in a person's recovery journey.",
                },
                {
                  title: "Transition to Treatment",
                  desc: "As withdrawal symptoms stabilize, the clinical team begins introducing therapeutic elements, light psychoeducation, motivational interviewing, and treatment planning. This creates a seamless transition from medical detox into the full residential treatment program, where the deeper work of recovery begins.",
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

      {/* Timeline by Substance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Withdrawal Timelines
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              General Detox Timelines by Substance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              These are general ranges. Individual timelines vary based on duration of use, dosage, overall health, and whether multiple substances are involved.
            </p>
            <div className="space-y-4">
              {[
                { substance: "Alcohol", onset: "6-24 hours after last drink", peak: "24-72 hours", duration: "5-7 days", note: "Risk of seizures highest in first 48 hours" },
                { substance: "Opioids (Short-acting: heroin, fentanyl)", onset: "8-24 hours", peak: "36-72 hours", duration: "5-10 days", note: "Acute symptoms resolve within a week; psychological cravings may persist longer" },
                { substance: "Opioids (Long-acting: methadone)", onset: "24-48 hours", peak: "3-8 days", duration: "14-21 days", note: "Longer timeline due to extended half-life" },
                { substance: "Benzodiazepines", onset: "1-4 days", peak: "7-14 days", duration: "2-8 weeks (with taper)", note: "Must be tapered, never discontinued abruptly" },
                { substance: "Stimulants (meth, cocaine)", onset: "Hours to 1 day", peak: "3-5 days", duration: "1-2 weeks", note: "Primarily psychological; monitor for severe depression" },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-xl p-5 border border-gray-100">
                  <h3 className="font-display text-base text-forest font-semibold mb-3">{item.substance}</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-1">Onset</p>
                      <p className="text-gray-600">{item.onset}</p>
                    </div>
                    <div>
                      <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-1">Peak</p>
                      <p className="text-gray-600">{item.peak}</p>
                    </div>
                    <div>
                      <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-1">Duration</p>
                      <p className="text-gray-600">{item.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How DRC Approaches Detox */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How Desert Recovery Centers Approaches Detox
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Physician-Led Medical Oversight",
                  desc: "Our medical director oversees all detox protocols, with registered nurses providing 24/7 bedside monitoring. Every medication decision is made by a physician, never delegated to unlicensed staff.",
                },
                {
                  title: "Individualized Medication Protocols",
                  desc: "There is no one-size-fits-all detox. Our medical team tailors medication protocols to each client's substance use history, medical conditions, and symptom presentation, adjusting in real time as withdrawal progresses.",
                },
                {
                  title: "Seamless Transition to Residential Treatment",
                  desc: "Detox clients at DRC transition directly into our residential program without discharge or transfer. The same clinical team that supports you through detox continues to guide your care throughout treatment.",
                },
                {
                  title: "Comfort in a Luxury Environment",
                  desc: "Detox at DRC takes place in private rooms within our luxury residential facilities, not a sterile hospital unit. Comfortable surroundings, nutritious meals, and compassionate staff make a difficult process significantly more bearable.",
                },
                {
                  title: "Dual Diagnosis Awareness",
                  desc: "Many individuals entering detox have co-occurring mental health conditions that withdrawal can exacerbate. Our team screens for psychiatric conditions from day one and integrates mental health support into the detox process.",
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
                  { label: "Intervention Guide", href: "/resources/intervention-guide" },
                  { label: "Dual Diagnosis Treatment", href: "/treatments/dual-diagnosis-treatment" },
                  { label: "Opioid Addiction Treatment", href: "/addiction/heroin-addiction-treatment" },
                  { label: "Alcohol Treatment", href: "/addiction/alcoholism-treatment" },
                  { label: "Our Facilities", href: "/locations/scottsdale" },
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
