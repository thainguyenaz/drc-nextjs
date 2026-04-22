import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import Footer from "@/components/Footer";
import { MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import ConditionFAQ from "@/components/ConditionFAQ";
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import InsuranceVerificationForm from "@/components/forms/InsuranceVerificationForm";

const meta = getPageMeta("/addiction/stimulant-addiction-treatment/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: meta.title }],
  },
};

const faqs = [
  {
    question: "What is stimulant addiction?",
    answer:
      "Stimulant addiction is a substance use disorder involving compulsive use of cocaine, methamphetamine, prescription amphetamines such as Adderall and Ritalin, or MDMA. These substances flood the brain with dopamine and norepinephrine, and over time the natural reward system downregulates so you need stimulants just to feel normal, making it very difficult to stop without clinical support.",
  },
  {
    question: "How long does stimulant addiction treatment take?",
    answer:
      "Most clients begin with 30 days of residential treatment, followed by partial hospitalization (PHP) for 4 to 6 weeks and intensive outpatient (IOP) for 8 to 12 weeks. Because stimulants cause significant neurological changes, longer treatment produces better outcomes. Desert Recovery Centers customizes every timeline to individual clinical needs and progress.",
  },
  {
    question: "Does insurance cover stimulant addiction treatment?",
    answer:
      "Yes. Most major private insurance plans cover stimulant addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team verifies benefits for free and explains out-of-pocket costs before treatment begins. Call (480) 931-3617 for a confidential verification.",
  },
  {
    question: "What makes Desert Recovery Centers' stimulant treatment different?",
    answer:
      "Desert Recovery Centers is a Joint Commission accredited luxury treatment program with just 10 beds per residential facility, ensuring individualized attention from doctoral-level clinicians. We specialize in dual diagnosis care for co-occurring depression, anxiety, and ADHD, and use evidence-based therapies including CBT, the Matrix Model, and contingency management that are specifically effective for stimulant addiction.",
  },
];

export default function StimulantAddictionPage() {
  return (
    <>
      <SchemaScript schema={[{"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/addiction/stimulant-addiction-treatment/#webpage","url":"https://www.desertrecoverycenters.com/addiction/stimulant-addiction-treatment/","name":"Stimulant Addiction Treatment in Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-18","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}, getFAQSchema(faqData["stimulant-addiction-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/addiction/stimulant-addiction-treatment"))]} />
      <MedicalConditionSchema
        name="Stimulant Addiction"
        description="Stimulant addiction is a substance use disorder involving cocaine, methamphetamine, prescription amphetamines, or other stimulants. These substances flood the brain with dopamine and norepinephrine, creating intense dependence and making natural reward processing increasingly difficult."
        url="/addiction/stimulant-addiction-treatment"
        possibleTreatments={["CBT", "Matrix Model", "Contingency Management", "Psychiatric Support", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/addiction/stimulant-addiction-treatment")} />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Stimulant Addiction Treatment"
        description="Stimulants promise energy, focus, and control. The addiction delivers the opposite. We help you find your way back."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="bg-forest py-8">
        <div className="max-w-container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-white/80 font-body text-sm sm:text-base">
            Confidential admissions, 24/7. Most major insurance accepted.
          </p>
          <a
            href="tel:+14809313617"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-base px-6 py-3 rounded-xl transition-colors"
            aria-label="Call Desert Recovery Centers at (480) 931-3617"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.27 1.06l-2.1 2.1a12 12 0 005.3 5.3l2.1-2.1a1 1 0 011.06-.27l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            Call (480) 931-3617
          </a>
        </div>
      </section>
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
              Stimulants, including cocaine, methamphetamine, prescription amphetamines (Adderall, Ritalin, Vyvanse), and MDMA, work by flooding the brain with dopamine and norepinephrine. This creates intense feelings of euphoria, energy, and focus. Over time, the brain&apos;s natural reward system downregulates, meaning you need stimulants just to feel normal. The crash following stimulant use brings severe depression, fatigue, and cravings that make stopping incredibly difficult. Unlike opioids, there are currently no FDA-approved medications for stimulant addiction, making behavioral therapies the cornerstone of treatment.
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
      <RelatedPages currentPath="/addiction/stimulant-addiction-treatment" />
      <FAQSection faqs={faqData["stimulant-addiction-treatment"]} />
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Get Help Today
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-5">
                Start Recovery Today
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our admissions team is available 24/7 for a confidential conversation. We&apos;ll verify your insurance, conduct a brief clinical assessment, and help you begin treatment, often within 24 hours.
              </p>
              <a
                href="tel:+14809313617"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-white font-semibold text-base px-7 py-4 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.27 1.06l-2.1 2.1a12 12 0 005.3 5.3l2.1-2.1a1 1 0 011.06-.27l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                </svg>
                Call (480) 931-3617
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Confidential · HIPAA protected · 24/7 admissions
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn" delay={0.15}>
              <InsuranceVerificationForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
