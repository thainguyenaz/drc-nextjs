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
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import Citations from "@/components/Citations";
import { getPageMeta } from "@/data/page-metadata";

const meta = getPageMeta("/addiction/meth-addiction-treatment/");

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
    question: "Can meth addiction be treated?",
    answer:
      "Yes. While methamphetamine addiction is one of the most challenging substance use disorders, it responds to evidence-based behavioral therapies. At Desert Recovery Centers, our doctoral-level clinicians use the Matrix Model, CBT, and contingency management in our Arizona facilities with just 10 beds per location for intensive, personalized care.",
  },
  {
    question: "How long does meth rehab take?",
    answer:
      "Meth recovery often benefits from extended treatment. Residential care typically lasts 60 to 90 days or longer, followed by PHP and IOP. The brain needs significant time to restore natural dopamine function after chronic meth use. Desert Recovery Centers tailors every treatment timeline to your needs.",
  },
  {
    question: "Does insurance cover meth addiction treatment?",
    answer:
      "Yes, most major insurance plans cover methamphetamine addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain any out-of-pocket costs before you begin treatment.",
  },
  {
    question: "What therapies are used for meth withdrawal?",
    answer:
      "While there are no FDA-approved medications specifically for meth withdrawal, our psychiatrists provide medication support for depression, anxiety, and psychotic symptoms that commonly occur. Behavioral therapies including the Matrix Model and CBT are the most effective treatments. Our dual diagnosis approach addresses co-occurring mental health conditions.",
  },
];

export default function MethAddictionPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["meth-addiction-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/addiction/meth"))]} />
      <InlineFAQSchema items={faqs} />
      <MedicalConditionSchema
        name="Methamphetamine Addiction"
        description="Methamphetamine addiction is a severe stimulant use disorder. Meth releases massive amounts of dopamine, damaging receptors over time and making it increasingly difficult to experience pleasure or basic functioning without the drug."
        url="/addiction/meth"
        possibleTreatments={["Matrix Model", "CBT", "Contingency Management", "Psychiatric Stabilization", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/addiction/meth")} />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Meth Addiction Treatment"
        description="Meth rewires your brain faster than almost any other substance. Recovery is possible, but it takes the right kind of help."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              The energy, the focus, the confidence, that&apos;s what hooked you. But now the other side has taken over. The paranoia. The skin picking. The days without sleep that blur into weeks. You don&apos;t recognize yourself in the mirror anymore. Your teeth are deteriorating, your weight has dropped, and the people who love you are terrified. You want to stop, but the crash is so devastating that using again feels like the only option. It&apos;s not, even if it feels that way right now.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we understand the devastating physical and neurological impact of methamphetamine addiction. Our clinical team uses evidence-based protocols specifically designed for stimulant use disorders, providing the intensive support your brain and body need to heal.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Meth Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Methamphetamine releases massive amounts of dopamine, up to 10 times what natural rewards produce. This flood damages dopamine receptors over time, making it increasingly difficult to experience pleasure, motivation, or even basic functioning without the drug. Chronic meth use causes measurable brain changes, including reduced gray matter, impaired memory and decision-making, and emotional dysregulation. The good news: research shows that with sustained abstinence and proper treatment, significant neurological recovery is possible.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Extended periods of wakefulness (days without sleep) followed by severe crashes
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Dramatic weight loss, dental deterioration, or skin problems
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Paranoia, hallucinations, or aggressive behavior
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Inability to feel pleasure or motivation without meth
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Job loss, relationship damage, or legal issues connected to use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using alone or in increasingly risky situations
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Meth Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Behavioral Therapies",
                  desc: "The Matrix Model, CBT, and contingency management are the most effective treatments for meth addiction. These therapies rebuild healthy thought patterns and reward systems.",
                },
                {
                  title: "Psychiatric Stabilization",
                  desc: "Meth withdrawal often includes severe depression, anxiety, and psychotic symptoms. Our psychiatrists provide medication support to stabilize your mental health safely.",
                },
                {
                  title: "Nutritional & Physical Recovery",
                  desc: "Meth ravages the body. Our wellness program includes nutritional rehabilitation, exercise, sleep hygiene, and medical care to restore physical health.",
                },
                {
                  title: "Long-Term Residential Care",
                  desc: "Meth recovery often benefits from extended treatment. Our residential program provides the structured, substance-free environment your brain needs to begin repairing itself.",
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
              Meth recovery is a marathon, not a sprint. The first weeks are often the hardest as your brain adjusts to functioning without massive dopamine surges. But with consistent clinical support, your cognition, emotional regulation, and physical health improve steadily. Our team walks with you through residential care, PHP, IOP, and aftercare, providing the stability and accountability that make sustained recovery achievable.
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
            question: "What is meth addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering evidence-based behavioral therapies, psychiatric stabilization, and long-term residential care for methamphetamine addiction. With just 10 beds per facility, every client receives intensive, personalized attention from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat meth addiction?",
            answer:
              "Treatment includes the Matrix Model, CBT, contingency management, psychiatric medication support for withdrawal symptoms, nutritional rehabilitation, physical health restoration, and dual diagnosis care for co-occurring mental health conditions.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for meth rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for methamphetamine addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/meth" />
      <FAQSection faqs={faqData["meth-addiction-treatment"]} />
      <CTASection />
      <Footer />
      <Citations />
    </>
  );
}
