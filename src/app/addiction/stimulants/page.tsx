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
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import FAQSection from "@/components/FAQSection";

const meta = getPageMeta("/addiction/stimulant-addiction-treatment/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg", alt: meta.title }],
  },
};

const faqs = [
  {
    question: "Can stimulant addiction be treated?",
    answer:
      "Yes. While there are currently no FDA-approved medications specifically for stimulant addiction, evidence-based behavioral therapies are highly effective. At Desert Recovery Centers, our doctoral-level clinicians use CBT, the Matrix Model, and contingency management in our Arizona facilities with just 10 beds per location for intensive, personalized care.",
  },
  {
    question: "How long does stimulant rehab take?",
    answer:
      "Stimulant recovery requires time for neurological healing. Residential treatment typically lasts 30 days, with natural dopamine function improving steadily over weeks to months. Step-down care through PHP and IOP continues the recovery process. Desert Recovery Centers customizes every timeline to your needs.",
  },
  {
    question: "Does insurance cover stimulant addiction treatment?",
    answer:
      "Yes, most major insurance plans cover stimulant addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain your out-of-pocket costs before treatment begins.",
  },
  {
    question: "What therapies are used for stimulant withdrawal?",
    answer:
      "Behavioral therapies are the cornerstone of stimulant addiction treatment. CBT, the Matrix Model, and contingency management address cognitive patterns and triggers. Our psychiatrists provide medication support for co-occurring depression, anxiety, and cognitive impairment that commonly follow stimulant withdrawal. Dual diagnosis care treats the full picture.",
  },
];

export default function StimulantAddictionPage() {
  return (
    <>
      <SchemaScript schema={getFAQSchema(faqData["stimulant-addiction-treatment"])} />
      <InlineFAQSchema items={faqs} />
      <MedicalConditionSchema
        name="Stimulant Addiction"
        description="Stimulant addiction is a substance use disorder involving cocaine, methamphetamine, prescription amphetamines, or other stimulants. These substances flood the brain with dopamine and norepinephrine, creating intense dependence and making natural reward processing increasingly difficult."
        url="/addiction/stimulants"
        possibleTreatments={["CBT", "Matrix Model", "Contingency Management", "Psychiatric Support", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Stimulant Addiction Treatment"
        description="Stimulants promise energy, focus, and control. The addiction delivers the opposite. We help you find your way back."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <p className="text-gray-600 leading-relaxed text-lg">
              At first, stimulants made you sharper, more productive, more social, more alive. But now you can&apos;t function without them. The crashes are brutal. The anxiety between doses is unbearable. You&apos;re irritable, paranoid, and running on empty. Your sleep is destroyed, your appetite is gone, and the version of yourself that stimulants promised to create has been replaced by someone you barely recognize. Whether it&apos;s cocaine, meth, Adderall, or another stimulant, the pattern is the same, and it&apos;s not sustainable.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat all forms of stimulant addiction with evidence-based behavioral therapies and comprehensive clinical support. Our team understands the unique neurological impact of stimulant use disorders and designs treatment plans that give your brain and body the time and structure they need to recover.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Stimulant Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Stimulants, including cocaine, methamphetamine, prescription amphetamines (Adderall, Vyvanse), and MDMA, work by flooding the brain with dopamine and norepinephrine. This creates intense feelings of euphoria, energy, and focus. Over time, the brain&apos;s natural reward system downregulates, meaning you need stimulants just to feel normal. The crash following stimulant use brings severe depression, fatigue, and cravings that make stopping incredibly difficult. Unlike opioids, there are currently no FDA-approved medications for stimulant addiction, making behavioral therapies the cornerstone of treatment.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using stimulants more frequently, at higher doses, or in ways not prescribed
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Inability to perform at work, school, or socially without stimulants
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Severe crashes, extended sleep, depression, agitation, after use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Weight loss, cardiovascular issues, or dental problems
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Paranoia, anxiety, or mood instability connected to stimulant use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Repeated failed attempts to reduce or stop use
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Stimulant Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Behavioral Therapies",
                  desc: "CBT, contingency management, and the Matrix Model are proven approaches for stimulant addiction. These therapies address the cognitive patterns and environmental triggers that sustain use.",
                },
                {
                  title: "Psychiatric Support",
                  desc: "Stimulant withdrawal frequently involves depression, anxiety, and cognitive impairment. Our psychiatrists provide medication support for co-occurring mental health symptoms.",
                },
                {
                  title: "Physical Health Restoration",
                  desc: "Nutrition rehabilitation, sleep hygiene, exercise programming, and medical monitoring address the physical toll stimulants take on your body and brain.",
                },
                {
                  title: "Structured Recovery Environment",
                  desc: "Residential treatment removes you from triggers and provides the daily structure, therapy, wellness, peer support, that supports neurological healing and behavioral change.",
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
              Stimulant recovery is a process of neurological healing. Your brain needs time, often weeks to months, to restore natural dopamine function. During that period, the right clinical environment makes the difference between sustained recovery and relapse. At Desert Recovery Centers, we provide the structured, supportive setting that allows healing to happen, with step-down care from residential through IOP to ensure a smooth transition back to daily life.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question: "What is stimulant addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering evidence-based behavioral therapies, psychiatric support, and structured residential care for stimulant addiction. With just 10 beds per facility, every client receives intensive, personalized attention from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat stimulant addiction?",
            answer:
              "Treatment includes CBT, the Matrix Model, contingency management, psychiatric medication support for co-occurring depression and anxiety, nutrition rehabilitation, sleep hygiene programming, and a structured residential environment that supports neurological healing.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for stimulant rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for stimulant addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/stimulants" />
      <FAQSection faqs={faqData["stimulant-addiction-treatment"]} />
      <CTASection />
      <Footer />
    </>
  );
}
