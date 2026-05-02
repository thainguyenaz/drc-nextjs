import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalConditionSchema, MedicalWebPageSchema } from "@/lib/seo";
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

const meta = getPageMeta("/addiction/prescription-drug-addiction-treatment/");

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
    question: "Can prescription drug addiction be treated?",
    answer:
      "Yes. Prescription drug addiction, whether involving opioid painkillers, benzodiazepines, or stimulants, is a treatable medical condition. At Desert Recovery Centers, our doctoral-level clinicians use medically supervised tapering, MAT, and behavioral therapy in our Arizona facilities with just 10 beds per location for safe, individualized care.",
  },
  {
    question: "How long does prescription drug rehab take?",
    answer:
      "Treatment length depends on the medication class involved. Benzodiazepine tapering can take weeks to months. Opioid detox typically lasts 7 to 14 days, followed by 30 days of residential care. Desert Recovery Centers creates a custom timeline based on your specific substance, dosage history, and recovery goals.",
  },
  {
    question: "Does insurance cover prescription drug addiction treatment?",
    answer:
      "Yes, most major insurance plans cover prescription drug addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain your out-of-pocket costs before you begin treatment.",
  },
  {
    question: "What medications are used for prescription drug withdrawal?",
    answer:
      "Withdrawal management depends on the medication class. Opioid painkiller withdrawal may use buprenorphine or naltrexone. Benzodiazepine withdrawal requires careful medical tapering. Our dual diagnosis approach addresses the underlying conditions, chronic pain, anxiety, or ADHD, that drove prescription use in the first place.",
  },
];

export default function PrescriptionDrugAddictionPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["prescription-drug-addiction-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/addiction/prescription-drug-addiction-treatment"))]} />
      <MedicalWebPageSchema url="/addiction/prescription-drug-addiction-treatment" name="Prescription Drug Addiction Treatment Arizona | Desert Recovery Centers" dateModified="2026-04-05" />
      <MedicalConditionSchema
        name="Prescription Drug Addiction"
        description="Prescription drug addiction involves dependence on opioid painkillers, benzodiazepines, or stimulant medications. Dependence often develops gradually from legitimate medical use, making it difficult to recognize until it has significantly impacted your life."
        url="/addiction/prescription-drug-addiction-treatment"
        possibleTreatments={["Medically Supervised Detox & Tapering", "Medication-Assisted Treatment", "CBT", "DBT", "Pain Management Alternatives"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/addiction/prescription-drug-addiction-treatment")} />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Prescription Drug Addiction Treatment"
        description="It started with a prescription. That doesn't make the addiction any less real, or any less treatable."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <p className="text-gray-600 leading-relaxed text-lg">
              A doctor prescribed it. You took it as directed, at first. But the pain didn&apos;t go away, or the anxiety kept creeping back, or the medication stopped working at the dose you were on. Now you&apos;re taking more than prescribed, refilling early, doctor shopping, or buying from someone else. You feel ashamed because this isn&apos;t who you thought you were. You never imagined yourself here. But prescription drug addiction doesn&apos;t discriminate, it happens to people from every background, every profession, every walk of life.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat prescription drug dependence with the same clinical rigor and compassion we bring to every substance. Our medical team specializes in safe, medically supervised tapering and detox protocols tailored to the specific class of medication involved.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Prescription Drug Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Prescription drug addiction most commonly involves three categories: opioid painkillers (oxycodone, hydrocodone, codeine), benzodiazepines (Xanax, Valium, Klonopin, Ativan), and stimulants (Adderall, Ritalin). Each class carries unique risks and requires different detox and treatment approaches. Opioid and benzodiazepine withdrawal can be medically dangerous without supervision. Dependence often develops gradually, making it difficult to recognize until it has significantly impacted your life.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Taking higher doses than prescribed or using medication more frequently
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Visiting multiple doctors or pharmacies to obtain prescriptions
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Anxiety or panic when your prescription runs out or you can&apos;t get a refill
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Withdrawal symptoms when you miss doses, shaking, sweating, nausea, rebound anxiety, or insomnia
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Hiding your use from family, friends, or your doctor
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Continuing to use despite negative effects on your health, work, or relationships
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Prescription Drug Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Medically Supervised Detox & Tapering",
                  desc: "Safe, gradual dose reduction under medical supervision. Benzodiazepine and opioid withdrawal require precise medical protocols, our team manages this process with expertise and care.",
                },
                {
                  title: "Medication-Assisted Treatment",
                  desc: "For opioid painkillers, MAT with buprenorphine or naltrexone reduces cravings and stabilizes brain chemistry. Alternative medications support benzodiazepine and stimulant recovery.",
                },
                {
                  title: "Pain Management Alternatives",
                  desc: "If chronic pain drove your prescription use, our team works with you to develop non-addictive pain management strategies including physical therapy referrals and holistic approaches.",
                },
                {
                  title: "Therapy & Relapse Prevention",
                  desc: "CBT, DBT, and individual therapy address the psychological patterns behind medication misuse. We build your toolkit for managing pain, anxiety, or attention issues without dependence.",
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
              Prescription drug recovery often involves unlearning the belief that you need a substance to function. Whether your dependence began with pain, anxiety, or attention issues, your treatment plan addresses the underlying condition alongside the addiction. Our step-down model, residential to PHP to IOP, gives you increasing autonomy as you build confidence in your ability to manage life without the medication that once controlled it.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              For commercial insurance, we work on an out-of-network basis with major plans. We are also in-network with TriCare and TriWest, and offer cash-pay options. Coverage varies by plan. Contact us to verify your benefits at no cost.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── Prescription Stimulant Video ──────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Expert Insight</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Prescription Stimulant Abuse vs. Street Meth</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/TE0bw1_Pwqo?rel=0"
              title="How Does Prescription Stimulant Abuse Differ From Street Meth in Treatment Needs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <AddictionPrograms />
      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question: "What is prescription drug addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering medically supervised detox, safe tapering protocols, and comprehensive therapy for prescription drug addiction. With just 10 beds per facility, every client receives individualized attention from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat prescription drug addiction?",
            answer:
              "Treatment includes medically supervised detox and tapering tailored to the specific drug class (opioids, benzodiazepines, or stimulants), medication-assisted treatment, CBT and DBT, non-addictive pain management alternatives, and dual diagnosis care for underlying conditions.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for prescription drug rehab?",
            answer:
              "Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans for prescription drug addiction treatment, is in-network with TriCare and TriWest, and offers cash-pay options. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/prescription-drug-addiction-treatment" />
      <FAQSection faqs={faqData["prescription-drug-addiction-treatment"]} />
      <CTASection />
      <Footer />
    </>
  );
}
