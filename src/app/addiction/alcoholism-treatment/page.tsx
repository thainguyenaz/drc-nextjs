import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import ConditionFAQ from "@/components/ConditionFAQ";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import Citations from "@/components/Citations";
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";

const meta = getPageMeta("/addiction/alcoholism-treatment/");

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
    question: "Can alcohol addiction be treated?",
    answer:
      "Yes. Alcohol use disorder is a medical condition that responds well to evidence-based treatment. At Desert Recovery Centers, our doctoral-level clinicians combine medically supervised detox, medication-assisted treatment, and behavioral therapy in our Arizona facilities with just 10 beds per location for highly personalized care.",
  },
  {
    question: "How long does alcohol rehab take?",
    answer:
      "The length of alcohol rehab varies by individual need. Detox typically lasts 5 to 10 days, followed by 30 days of residential treatment. Many clients continue with PHP or IOP for additional weeks. Desert Recovery Centers builds a custom treatment timeline based on your history, severity of dependence, and recovery goals.",
  },
  {
    question: "Does insurance cover alcohol addiction treatment?",
    answer:
      "Yes, most major insurance plans cover alcohol addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain your out-of-pocket costs before you begin treatment.",
  },
  {
    question: "What medications are used for alcohol withdrawal?",
    answer:
      "Medically supervised alcohol detox may include benzodiazepines to prevent seizures, anti-nausea medications, and comfort medications for anxiety and insomnia. After detox, FDA-approved medications like naltrexone and acamprosate can help reduce cravings. Our dual diagnosis approach also addresses co-occurring mental health conditions.",
  },
];

export default function AlcoholAddictionPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["alcoholism-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/addiction/alcoholism-treatment")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/addiction/alcoholism-treatment/#webpage","url":"https://www.desertrecoverycenters.com/addiction/alcoholism-treatment/","name":"Alcohol Addiction Treatment Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <MedicalConditionSchema
        name="Alcohol Use Disorder"
        description="Alcohol use disorder (AUD) is a chronic condition characterized by an inability to control drinking despite negative consequences. Prolonged alcohol use changes brain chemistry, creating physical dependence that makes quitting dangerous without medical supervision."
        url="/addiction/alcoholism-treatment"
        possibleTreatments={["Medically Supervised Detox", "Medication-Assisted Treatment", "CBT", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/addiction/alcoholism-treatment")} />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Alcohol Addiction Treatment"
        description="Medically supervised detox and comprehensive care for alcohol use disorder, because you deserve more than white-knuckling your way through another day."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <p className="text-gray-600 leading-relaxed text-lg">
              Maybe it started as a way to unwind. A glass of wine after work, a few beers on the weekend. But somewhere along the way, the line moved. Now you&apos;re drinking to feel normal. You&apos;re hiding bottles, making excuses, waking up with dread instead of rest. The people closest to you are pulling away, or they&apos;ve already gone. You&apos;re not weak. You&apos;re caught in a cycle that rewires your brain chemistry, and breaking free takes more than willpower alone.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat alcohol use disorder as the medical condition it is. Our clinical team has helped hundreds of individuals move from dependence to recovery through structured, evidence-based care.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Alcohol Use Disorder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Alcohol use disorder (AUD) is a chronic condition characterized by an inability to control drinking despite negative consequences. Prolonged alcohol use changes brain chemistry, particularly the GABA and glutamate systems, creating physical dependence that makes quitting dangerous without medical supervision. Withdrawal symptoms can range from anxiety and tremors to life-threatening seizures, which is why medically managed detox is a critical first step.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Drinking more than you intend to, or for longer than planned
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Failed attempts to cut back or stop on your own
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Experiencing withdrawal symptoms, shaking, sweating, nausea, or anxiety, when you don&apos;t drink
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Neglecting responsibilities, relationships, or health because of alcohol
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Needing to drink more to get the same effect (tolerance)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Continuing to drink despite knowing it&apos;s causing harm
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Alcohol Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Medically Supervised Detox",
                  desc: "24/7 medical monitoring with medications to manage withdrawal safely. Our nursing staff and psychiatrists ensure your comfort and safety throughout the detox process.",
                },
                {
                  title: "Medication-Assisted Treatment",
                  desc: "FDA-approved medications such as naltrexone and acamprosate can help reduce cravings and support long-term sobriety when combined with therapy.",
                },
                {
                  title: "Individual & Group Therapy",
                  desc: "CBT, DBT, motivational interviewing, and process groups address the psychological patterns and emotional triggers behind drinking.",
                },
                {
                  title: "Co-Occurring Disorder Treatment",
                  desc: "Many people with AUD also experience depression, anxiety, or trauma. Our dual diagnosis approach treats both conditions simultaneously for stronger outcomes.",
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
              Recovery from alcohol addiction is not a straight line, and we don&apos;t treat it like one. Your treatment plan is built around your history, your triggers, and your goals. From residential care with 24/7 support to step-down programs that help you practice sobriety in the real world, we walk beside you through every stage. Our aftercare planning connects you with ongoing support, alumni networks, and community resources to sustain your progress long after treatment ends.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── Alcohol & Mental Health Video ──────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Understanding the Connection</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">How Does Alcohol Affect Mental Health?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/-IAFRFF8DCQ?rel=0"
              title="How Does Alcohol Affect Mental Health?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Is There a Link Between Alcohol Use and Suicide Risk?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/025O4_-fugI?rel=0"
              title="Is There a Link Between Alcohol Use and Suicide Risk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">Long-Term Mental Health Effects of Chronic Alcohol Use</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 mb-16">
            <iframe
              src="https://www.youtube.com/embed/MpZDZkqSJWQ?rel=0"
              title="What Are the Long-Term Mental Health Effects of Chronic Alcohol Use"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Is &ldquo;Gray-Area Drinking&rdquo;?</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/itGlGak_JOk?rel=0"
              title="What Is Gray-Area Drinking, and Why Is It Dangerous"
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
            question: "What is alcohol addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering medically supervised detox, residential care, and outpatient programs for alcohol use disorder. With just 10 beds per facility, every client receives individualized attention from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat alcohol addiction?",
            answer:
              "Treatment includes medically supervised detox with 24/7 monitoring, medication-assisted treatment using naltrexone and acamprosate, individual and group therapy (CBT, DBT, motivational interviewing), and dual diagnosis care for co-occurring mental health conditions.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for alcohol rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for alcohol addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/alcoholism-treatment" />
      <FAQSection faqs={faqData["alcoholism-treatment"]} />
      <CTASection />
      <Footer />
      <Citations />
    </>
  );
}
