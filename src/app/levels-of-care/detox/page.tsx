import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import AnimatedSection from "@/components/animated/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drug & Alcohol Detox in Arizona | Desert Recovery Centers",
  description:
    "Drug and alcohol detox in Arizona, coordinated through Desert Recovery Centers. We partner with trusted medical detox providers for safe withdrawal management before transition to our residential treatment program.",
  alternates: {
    canonical: "https://desertrecoverycenters.com/levels-of-care/detox/",
  },
  openGraph: {
    title: "Drug & Alcohol Detox in Arizona | Desert Recovery Centers",
    description:
      "Drug and alcohol detox in Arizona, coordinated through Desert Recovery Centers. We partner with trusted medical detox providers for safe withdrawal management before transition to our residential treatment program.",
    url: "https://desertrecoverycenters.com/levels-of-care/detox/",
    images: [
      {
        url: "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
        alt: "Drug & Alcohol Detox in Arizona | Desert Recovery Centers",
      },
    ],
  },
};

const faqs = [
  {
    q: "What is drug and alcohol detox?",
    a: "Drug and alcohol detox is the medically supervised process of safely clearing substances from the body while managing withdrawal symptoms. Desert Recovery Centers coordinates detox through trusted medical detox partners — facilities staffed with physicians, nurses, and evidence-based withdrawal protocols. Once detox is complete, you transition into residential treatment with our clinical team, where the deeper therapeutic work begins.",
  },
  {
    q: "How long does detox take?",
    a: "The duration of detox varies depending on the substance, the severity of dependence, your overall health, and your individual physiology. Alcohol detox typically takes 5 to 7 days, while opioid detox may range from 5 to 10 days. Benzodiazepine detox can take longer due to the need for a gradual taper. Stimulant withdrawal, while generally less medically dangerous, may involve an extended period of fatigue and mood instability. Your detox partner facility's clinical team continuously monitors your progress and adjusts the protocol accordingly. Once you are medically stable, you transition to Desert Recovery Centers to begin residential treatment.",
  },
  {
    q: "Is detox safe?",
    a: "When conducted under proper medical supervision, detox is safe. Attempting to detox on your own, particularly from alcohol or benzodiazepines, can be medically dangerous and in some cases life-threatening. Our medical detox partners use established clinical protocols, continuous vital-sign monitoring, and FDA-approved medications to manage withdrawal symptoms and reduce medical risk. After detox, our clinical team at Desert Recovery Centers continues care through medication management and ongoing psychiatric support.",
  },
  {
    q: "Does insurance cover detox in Arizona?",
    a: "Most major insurance plans cover medically necessary detoxification services in Arizona, including plans from Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many others. The Mental Health Parity and Addiction Equity Act requires insurers to cover substance use treatment at the same level as other medical conditions. Our admissions team at Desert Recovery Centers will verify your insurance benefits and explain your coverage before you begin treatment. Call (480) 931-3617 for a free, confidential insurance verification.",
  },
  {
    q: "What happens after detox?",
    a: "Detox alone is not treatment — it is the first step. After completing detox at a partner facility, most clients transition directly into Desert Recovery Centers for residential treatment, where they receive individual therapy, group counseling, psychiatric care, and holistic wellness programming. This seamless transition eliminates the gap between detox and treatment that often leads to relapse. Our DRC clinical team coordinates with your detox partner's care team during the detox phase so you can move into the next phase of care without delay.",
  },
];

const faqSchemaItems = faqs.map((f) => ({
  question: f.q,
  answer: f.a,
}));

export default function DetoxPage() {
  return (
    <>
      <SchemaScript
        schema={[
          getFAQSchema(faqSchemaItems),
          getBreadcrumbSchema(
            getBreadcrumbsFromPathname("/levels-of-care/detox")
          ),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id":
              "https://desertrecoverycenters.com/levels-of-care/detox/#webpage",
            url: "https://desertrecoverycenters.com/levels-of-care/detox/",
            name: "Drug & Alcohol Detox in Arizona | Desert Recovery Centers",
            specialty: "Addiction Medicine",
            reviewedBy: {
              "@type": "Person",
              "@id":
                "https://desertrecoverycenters.com/our-team#dr-an-nguyen",
              name: "Dr. An Nguyen",
              jobTitle:
                "Licensed Clinical Psychologist, Clinical Director",
              worksFor: {
                "@id":
                  "https://desertrecoverycenters.com/#organization",
              },
            },
            dateModified: "2026-04-07",
            publisher: {
              "@id":
                "https://desertrecoverycenters.com/#organization",
            },
          },
        ]}
      />
      <Navigation />
      <Breadcrumb
        items={getBreadcrumbsFromPathname("/levels-of-care/detox")}
      />
      <PageHero
        eyebrow="Levels of Care"
        title="Drug and Alcohol Detox in Arizona"
        description="Drug and alcohol detox in Arizona, coordinated through Desert Recovery Centers. We partner with trusted medical detox providers to ensure your withdrawal is safely managed before you transition into residential treatment with our clinical team."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical
            Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Why Medical Detox Matters
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Medical detox is the safest path to begin recovery from alcohol, opioid, or benzodiazepine dependence. Withdrawal from these substances can produce seizures, dangerous blood-pressure changes, and life-threatening complications when attempted without supervision.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                That&apos;s why Desert Recovery Centers coordinates every client&apos;s detox through trusted medical detox partners — facilities equipped with 24/7 nursing, physician oversight, and FDA-approved medications to manage withdrawal safely.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Once detox is complete, you transition into residential treatment with our clinical team, where the deeper therapeutic work begins.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Your Detox Experience
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What to Expect During Medical Detox
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From the moment you arrive at the partner detox facility, the medical team works to ensure you feel safe, informed, and supported. Here is what the detox process typically looks like at our medical detox partners:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Comprehensive medical intake assessment including vital signs, lab work, and substance use history",
                "Individualized detox protocol designed by a physician based on your specific needs",
                "24/7 nursing observation with regular vital-sign monitoring and symptom scoring",
                "FDA-approved medications to manage withdrawal symptoms and reduce discomfort",
                "Comfortable, private rooms in a residential or sub-acute medical setting",
                "Nutritional support and hydration management to help your body recover",
                "Psychiatric evaluation to identify co-occurring mental health conditions early",
                "Daily check-ins with the medical team to adjust the protocol as symptoms evolve",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              The goal during medical detox is twofold: keep you medically safe and lay the groundwork for the therapeutic work ahead. By the time detox is complete, you will be physically stabilized and ready to transition into residential treatment with our DRC clinical team.
            </p>
          </div>
        </div>
      </section>

      {/* Substances We Treat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Substance-Specific Detox
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Substances We Help With During Detox
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Every substance has a unique withdrawal profile. The medical
                team at your detox partner facility tailors your detox
                protocol to the specific substance or combination of
                substances involved.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Alcohol Detox",
                    desc: "Alcohol withdrawal can produce symptoms ranging from tremors, anxiety, and insomnia to severe complications like seizures and delirium tremens. At your medical detox partner facility, the clinical team uses evidence-based protocols — including symptom-triggered benzodiazepine therapy when clinically indicated — to manage alcohol withdrawal safely. Typical alcohol detox lasts 5 to 7 days under continuous medical monitoring at the partner facility, with vital signs assessed regularly to keep you stable and comfortable.",
                  },
                  {
                    title: "Opioid Detox",
                    desc: "Withdrawal from opioids — including prescription painkillers, heroin, and fentanyl — produces intense physical discomfort including muscle aches, nausea, sweating, and insomnia. The medical team at your detox partner facility uses medication-assisted protocols, including buprenorphine or methadone where clinically indicated, to manage withdrawal symptoms and support transition into long-term treatment. Opioid detox typically lasts 5 to 10 days.",
                  },
                  {
                    title: "Benzodiazepine Detox",
                    desc: "Benzodiazepine withdrawal requires a careful, gradual taper supervised by a physician due to the risk of seizures with abrupt discontinuation. Our partner detox facilities specialize in managing these complex cases — their clinical team develops individualized taper schedules, monitors vital signs, and adjusts medication dosages over the appropriate timeframe.",
                  },
                  {
                    title: "Stimulant Detox",
                    desc: "Withdrawal from stimulants such as cocaine and methamphetamine is characterized by fatigue, depression, increased appetite, and intense cravings rather than the acute medical risks seen with alcohol or benzodiazepines. Your detox partner facility's clinical team provides supportive care, psychiatric monitoring, and nutritional support to help you through this period. Once stabilized, you transition to Desert Recovery Centers for residential treatment, where the deeper therapeutic work for stimulant addiction begins.",
                  },
                  {
                    title: "Polysubstance Detox",
                    desc: "Polysubstance dependence requires careful coordination of withdrawal management for each substance involved. Our partner detox facilities have physicians experienced in managing complex polysubstance detox cases, with the clinical expertise to safely sequence and monitor multi-substance withdrawal.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-gold/40 pl-6">
                    <h3 className="font-display text-lg text-forest font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Medical Support */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Clinical Excellence
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Medical Support During Medical Detox
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              The medical detox partners we work with provide a level of medical oversight that reflects a shared commitment to client safety and comfort.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Physician-Led Protocols",
                  desc: "Every detox protocol at the partner detox facility is designed and supervised by a licensed physician with experience in addiction medicine. The physician evaluates you upon admission, oversees your medication regimen, and makes daily adjustments based on your symptom progression.",
                },
                {
                  title: "24/7 Nursing Care",
                  desc: "Registered nurses at the partner detox facility are on-site around the clock during your detox. They monitor your vital signs, administer medications, assess your comfort level, and escalate any concerns to the supervising physician immediately.",
                },
                {
                  title: "Psychiatric Assessment",
                  desc: "Many people entering detox also experience depression, anxiety, trauma, or other mental health conditions. The partner detox facility&apos;s psychiatric team conducts evaluations during the detox phase so that these conditions can be flagged for the DRC clinical team to address from the very beginning of residential treatment.",
                },
                {
                  title: "Comfort-Focused Environment",
                  desc: "Our medical detox partners offer comfortable residential or sub-acute medical settings, not chaotic hospital wards. You have access to private or semi-private rooms and a calm environment designed to support the healing process from the first day.",
                },
                {
                  title: "Seamless Treatment Transition",
                  desc: "Because DRC coordinates the entire detox-to-residential handoff, there is no gap between completing detox at the partner facility and beginning therapy at Desert Recovery Centers. Our DRC clinical team begins developing your treatment plan during the detox phase so you transition directly into the next phase of care.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Long Does Detox Take */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                How Long Does Detox Take?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                There is no single answer to how long detox will last. The
                timeline depends on several factors: which substance or
                substances are involved, how long you have been using, the
                amount you typically consume, your overall physical health,
                and whether you have attempted detox before.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                As a general guide, alcohol detox most commonly takes 5 to 7
                days. Opioid detox generally lasts 5 to 10 days. Stimulant
                withdrawal symptoms may persist for one to two weeks, though
                the acute phase is typically shorter. Benzodiazepine detox
                timelines are the most variable and can range from two weeks
                to several months depending on the taper schedule designed
                by the supervising physician at the detox facility.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At your medical detox partner facility, the clinical team
                assesses your progress daily and adjusts your protocol to
                match your body&apos;s response. Detox is not rushed — the
                goal is a safe, thorough withdrawal process that positions
                you to engage meaningfully in residential treatment. Once
                your medical team determines you are stable, you transition
                into Desert Recovery Centers for the next phase of care.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                If you are unsure how long detox might take in your
                situation, our admissions team can provide a preliminary
                assessment over the phone. Call{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>{" "}
                to speak with someone who can help you understand what to
                expect.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detox to Residential */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Continuing Your Recovery
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                From Detox to Residential Treatment
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Detox addresses the physical dimension of addiction, but
                lasting recovery requires addressing the psychological,
                emotional, and behavioral patterns that drive substance use.
                That is why detox at Desert Recovery Centers is designed as
                the first step in a continuum of care, not a standalone
                service.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                One of the most significant advantages of choosing DRC for
                detox is the seamless transition into{" "}
                <Link
                  href="/levels-of-care/residential-treatment/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  residential treatment
                </Link>
                . Our DRC clinical team coordinates with your detox partner&apos;s care team to plan your residential treatment so the transition into DRC is seamless. You move from medical stabilization to active therapy without missing a day.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                In residential treatment, you will engage in individual
                therapy, group counseling, psychiatric care, experiential
                therapies, and holistic wellness programming — all within
                the same luxury environment where you completed detox. This
                continuity of care and environment supports the trust and
                momentum you build during those critical first days.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                To learn more about the full scope of treatment options at
                DRC, visit our{" "}
                <Link
                  href="/addiction-treatment/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  addiction treatment
                </Link>{" "}
                page or call{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>{" "}
                to speak with our admissions team. You can also begin by{" "}
                <Link
                  href="/insurance-verification/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  verifying your insurance
                </Link>{" "}
                online.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose DRC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Choose DRC for Treatment Following Detox
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Maximum 10 Beds Per Facility",
                  desc: "Our intentionally small residential program ensures every client receives highly individualized clinical attention. You are never one of dozens — our staff knows your name, your history, and your treatment goals.",
                },
                {
                  title: "Doctoral-Level Clinical Leadership",
                  desc: "Desert Recovery Centers is led by licensed clinical psychologists with doctoral-level training in evidence-based interventions. The depth of clinical expertise in residential treatment is one of the strongest predictors of long-term recovery outcomes.",
                },
                {
                  title: "Joint Commission Accreditation",
                  desc: "Desert Recovery Centers holds Joint Commission Gold Seal accreditation, the highest standard of quality and patient safety in behavioral healthcare. This accreditation reflects our commitment to clinical excellence at every level of care.",
                },
                {
                  title: "Integrated Dual Diagnosis Expertise",
                  desc: "Many clients arrive with co-occurring mental health conditions that complicate recovery. Our psychiatric team and licensed clinical psychologists treat depression, anxiety, trauma, and other conditions alongside substance use disorders from the first day of residential treatment.",
                },
                {
                  title: "BridgeWork™ Skill Integration Program",
                  desc: "BridgeWork is a proprietary clinician-led program developed in-house at Desert Recovery Centers. It provides 1 to 2 additional focused sessions per week to help clients practice and internalize CBT, DBT, trauma processing, and coping skills under real-world pressure.",
                },
                {
                  title: "Coordinated Detox-to-Residential Handoff",
                  desc: "Our admissions team coordinates the entire process — from intake at a trusted detox partner through transition into DRC residential treatment. There is no waiting period or gap; the transition is planned during detox so you move directly into the next phase of care.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question: "Does DRC offer medical detox?",
            answer:
              "Desert Recovery Centers coordinates medical detox through trusted medical detox partner facilities. Detox itself is performed at a partner facility staffed with physicians and 24/7 nursing. Once detox is complete, clients transition directly into DRC's residential treatment program for the next phase of care.",
          },
          {
            question:
              "What detox services are provided at Desert Recovery Centers?",
            answer:
              "DRC does not perform medical detox on-site. Instead, we coordinate detox through partnered medical detox facilities equipped to safely manage withdrawal, then receive clients into our residential treatment program for therapy, medication management, and long-term recovery work.",
          },
          {
            question:
              "Will I detox at the same place I do residential treatment?",
            answer:
              "No — detox is performed at one of our partner medical detox facilities, then you transition to a Desert Recovery Centers residential location (Glendale or Scottsdale) for residential treatment. Our admissions team coordinates the entire process so the handoff is seamless.",
          },
        ]}
      />
      <RelatedPages currentPath="/levels-of-care/detox" />
      <CTASection />
      <Footer />
    </>
  );
}
