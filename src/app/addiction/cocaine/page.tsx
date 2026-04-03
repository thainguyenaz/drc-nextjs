import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { InlineFAQSchema, MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import ConditionFAQ from "@/components/ConditionFAQ";

export const metadata: Metadata = {
  title: "Cocaine Addiction Treatment — Desert Recovery Centers",
  description:
    "Cocaine and crack cocaine addiction treatment in Arizona. Behavioral therapies, dual diagnosis care, and structured recovery programs.",
};

const faqs = [
  {
    question: "Can cocaine addiction be treated?",
    answer:
      "Yes. Cocaine addiction responds well to evidence-based behavioral therapies. At Desert Recovery Centers, our doctoral-level clinicians use CBT, contingency management, and dual diagnosis treatment in our Arizona facilities with just 10 beds per location for highly personalized care.",
  },
  {
    question: "How long does cocaine rehab take?",
    answer:
      "Cocaine rehab typically involves 30 days of residential treatment, followed by PHP and IOP for continued support. Because cocaine addiction is primarily psychological, treatment focuses on rebuilding your brain's natural reward system over time. Desert Recovery Centers customizes every treatment plan.",
  },
  {
    question: "Does insurance cover cocaine addiction treatment?",
    answer:
      "Yes, most major insurance plans cover cocaine addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain your out-of-pocket costs before treatment begins.",
  },
  {
    question: "What therapies are used for cocaine addiction?",
    answer:
      "Because there are no FDA-approved medications specifically for cocaine addiction, behavioral therapies are the cornerstone of treatment. CBT and contingency management are the gold standard. Our dual diagnosis approach also addresses co-occurring depression, anxiety, or bipolar disorder.",
  },
];

export default function CocaineAddictionPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <MedicalConditionSchema
        name="Cocaine Addiction"
        description="Cocaine addiction is a stimulant use disorder characterized by compulsive cocaine use despite negative consequences. Cocaine floods the brain with dopamine, hijacking the natural reward system and creating intense psychological dependence."
        url="/addiction/cocaine"
        possibleTreatments={["CBT", "Contingency Management", "Dual Diagnosis Treatment", "Residential Care"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Cocaine Addiction Treatment"
        description="Breaking free from cocaine means rebuilding the reward system your brain has learned to depend on. We can help."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              The highs don&apos;t last. But the consequences do — the financial damage, the relationships you&apos;ve strained, the paranoia that creeps in after a binge, the crash that leaves you unable to function. You tell yourself you can stop whenever you want, but every time you try, the pull drags you back. Cocaine doesn&apos;t let go easily, and it doesn&apos;t care what it costs you.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we understand the unique grip cocaine has on the brain&apos;s dopamine system. Our treatment programs are designed specifically to address stimulant addiction through evidence-based behavioral therapies and structured recovery support.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Cocaine Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cocaine floods the brain with dopamine, creating an intense but short-lived euphoria. Over time, the brain&apos;s natural reward system is hijacked — you need more cocaine just to feel baseline levels of pleasure, and nothing else produces the same rush. This neurological rewiring makes cocaine one of the most psychologically addictive substances. Both powder cocaine and crack cocaine carry severe risks including cardiac events, stroke, and cognitive impairment.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using larger amounts or more frequently than intended
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Spending significant money on cocaine or going into debt to fund use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Experiencing intense cravings, restlessness, or irritability when not using
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Withdrawing from people, activities, or responsibilities you once valued
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Paranoia, anxiety, or mood swings connected to cocaine use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Failed attempts to stop on your own
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Cocaine Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Behavioral Therapies",
                  desc: "CBT and contingency management are the gold standard for cocaine addiction. These therapies help you identify triggers, build coping strategies, and rewire thought patterns that drive use.",
                },
                {
                  title: "Dual Diagnosis Treatment",
                  desc: "Cocaine use often co-occurs with depression, anxiety, or bipolar disorder. We treat both conditions together to address the full picture of your mental health.",
                },
                {
                  title: "Structured Residential Care",
                  desc: "A safe, substance-free environment removes you from triggers and gives your brain time to begin healing. Daily programming includes therapy, wellness activities, and peer support.",
                },
                {
                  title: "Relapse Prevention Planning",
                  desc: "We equip you with practical strategies for managing cravings, navigating high-risk situations, and building a support network that sustains long-term recovery.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-cream rounded-xl p-6 border-2 border-transparent hover:border-gold/40 transition-all"
                >
                  <h3 className="font-display text-lg text-forest font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              What Recovery Looks Like Here
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cocaine recovery requires rebuilding your brain&apos;s ability to experience pleasure naturally. That takes time, clinical support, and a treatment environment that understands stimulant addiction specifically. At Desert Recovery Centers, your program moves at your pace — from intensive residential care to PHP and IOP as you regain stability. We help you develop the emotional resilience, healthy habits, and community connections that make sustained recovery possible.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question: "What is cocaine addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering evidence-based behavioral therapies, dual diagnosis care, and structured residential programs for cocaine addiction. With just 10 beds per facility, every client receives individualized attention from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat cocaine addiction?",
            answer:
              "Treatment includes CBT, contingency management, dual diagnosis care for co-occurring mental health conditions, structured residential care in a substance-free environment, and comprehensive relapse prevention planning.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for cocaine rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for cocaine addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/cocaine" />
      <CTASection />
      <Footer />
    </>
  );
}
