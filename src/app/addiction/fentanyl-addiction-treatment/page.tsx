import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import Citations from "@/components/Citations";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";

const meta = getPageMeta("/addiction/fentanyl-addiction-treatment/");

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


export default function FentanylAddictionPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["fentanyl-addiction-treatment"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/addiction/fentanyl-addiction-treatment")), {"@context":"https://schema.org","@type":"MedicalWebPage","@id":"https://www.desertrecoverycenters.com/addiction/fentanyl-addiction-treatment/#webpage","url":"https://www.desertrecoverycenters.com/addiction/fentanyl-addiction-treatment/","name":"Fentanyl Addiction Treatment Arizona | Desert Recovery Centers","specialty":"Psychiatry","reviewedBy":{"@type":"Person","@id":"https://www.desertrecoverycenters.com/our-team#dr-an-nguyen","name":"Dr. An Nguyen","jobTitle":"Licensed Clinical Psychologist, Clinical Director","worksFor":{"@id":"https://www.desertrecoverycenters.com/#organization"}},"dateModified":"2026-04-05","publisher":{"@id":"https://www.desertrecoverycenters.com/#organization"}}]} />
      <MedicalConditionSchema
        name="Fentanyl Addiction"
        description="Fentanyl addiction is a severe opioid use disorder involving one of the most potent synthetic opioids in existence. Fentanyl is 50 to 100 times more potent than morphine and creates rapid, severe physical dependence."
        url="/addiction/fentanyl-addiction-treatment"
        possibleTreatments={["Medically Supervised Detox", "MAT (Suboxone, Vivitrol)", "Trauma-Informed Therapy (EMDR)", "Dual Diagnosis Treatment"]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/addiction/fentanyl-addiction-treatment")} />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Fentanyl Addiction Treatment"
        description="Fentanyl is unforgiving. Getting off it safely requires medical expertise, not just determination. We provide both."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <p className="text-gray-600 leading-relaxed text-lg">
              You know how dangerous this is. Every time you use, you&apos;re gambling with your life, and you know it. Maybe you started with prescription painkillers, or maybe fentanyl found its way into something else you were using. Either way, your body now depends on one of the most potent opioids in existence, and the withdrawal is so brutal that stopping feels impossible. The fear of getting sick keeps you trapped. You&apos;re not choosing this anymore. Your brain chemistry is.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we specialize in fentanyl addiction treatment with medically supervised detox protocols designed specifically for synthetic opioid dependence. Our medical team understands the intensity of fentanyl withdrawal and uses evidence-based interventions to keep you safe and as comfortable as possible through the process.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Fentanyl Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fentanyl is 50 to 100 times more potent than morphine. It binds aggressively to opioid receptors, creating rapid and severe physical dependence, often within days or weeks of regular use. Because of its extreme potency, fentanyl tolerance escalates quickly, and withdrawal symptoms are among the most intense of any opioid. The margin between a dose that gets you high and a dose that stops your breathing is dangerously thin, which is why fentanyl is now the leading cause of overdose deaths in the United States.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using fentanyl daily or multiple times a day to avoid withdrawal
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Experiencing severe withdrawal symptoms, muscle pain, vomiting, cold sweats, insomnia, within hours of your last dose
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Needing larger doses to feel the same effect
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Surviving an overdose or knowing someone who has
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Isolation from family, job loss, or legal trouble related to use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Feeling unable to function or face the day without fentanyl
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Fentanyl Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Medically Supervised Detox",
                  desc: "Round-the-clock medical monitoring with comfort medications to manage fentanyl withdrawal safely. Our protocols are specifically designed for synthetic opioid detoxification.",
                },
                {
                  title: "Medication-Assisted Treatment (MAT)",
                  desc: "Buprenorphine (Suboxone), naltrexone (Vivitrol), and other FDA-approved medications stabilize brain chemistry, reduce cravings, and help prevent relapse.",
                },
                {
                  title: "Trauma-Informed Therapy",
                  desc: "Many fentanyl users have underlying trauma. EMDR, somatic experiencing, and trauma-focused CBT address root causes, not just symptoms.",
                },
                {
                  title: "Long-Term Recovery Support",
                  desc: "Step-down from residential to PHP and IOP ensures a smooth transition. Aftercare planning, alumni networks, and community resources sustain your recovery.",
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
              Fentanyl recovery requires patience, medical precision, and unwavering clinical support. The first days are the hardest, and our medical team is with you every step. Once stabilized, your treatment shifts to rebuilding, repairing relationships, processing trauma, developing the coping skills and emotional awareness that keep you grounded. Recovery from fentanyl is possible, and it begins with the decision to reach out.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── Fentanyl Withdrawal Video ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Expert Insight</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">What Makes Fentanyl Withdrawal Uniquely Dangerous?</h2>
          <YouTubeEmbed youtubeId="TlAJvaoXrlw" title="What Makes Fentanyl Withdrawal Uniquely Dangerous Compared to Other Opioids" />
        </div>
      </section>

      <AddictionPrograms />
      <AEOBlock
        entries={[
          {
            question: "What is fentanyl addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona specializing in fentanyl and synthetic opioid addiction treatment. With just 10 beds per facility, clients receive medically supervised detox with protocols designed specifically for synthetic opioid dependence, alongside personalized care from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat fentanyl addiction?",
            answer:
              "Treatment includes medically supervised detox with 24/7 monitoring, medication-assisted treatment with Suboxone and Vivitrol, trauma-informed therapy including EMDR and somatic experiencing, and dual diagnosis care for co-occurring mental health conditions.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for fentanyl rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for fentanyl addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/fentanyl-addiction-treatment" />
      <FAQSection faqs={faqData["fentanyl-addiction-treatment"]} />
      <CTASection />
      <Footer />
      <Citations />
    </>
  );
}
