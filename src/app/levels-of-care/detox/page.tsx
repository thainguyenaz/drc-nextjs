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
    "Medically supervised drug and alcohol detox in Arizona. 24/7 nursing, physician-led protocols, and a seamless transition to residential treatment at Desert Recovery Centers.",
  alternates: {
    canonical: "https://desertrecoverycenters.com/levels-of-care/detox/",
  },
  openGraph: {
    title: "Drug & Alcohol Detox in Arizona | Desert Recovery Centers",
    description:
      "Medically supervised drug and alcohol detox in Arizona. 24/7 nursing, physician-led protocols, and a seamless transition to residential treatment at Desert Recovery Centers.",
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
    a: "Drug and alcohol detox, or detoxification, is the medically supervised process of safely clearing substances from the body while managing withdrawal symptoms. At Desert Recovery Centers, detox is overseen by physicians and round-the-clock nursing staff who use evidence-based protocols to keep you as safe and comfortable as possible. Detox is the essential first step in recovery, preparing your body and mind for the deeper therapeutic work that follows in residential treatment.",
  },
  {
    q: "How long does detox take?",
    a: "The duration of detox varies depending on the substance, the severity of dependence, your overall health, and your individual physiology. Alcohol detox typically takes 5 to 7 days, while opioid detox may range from 5 to 10 days. Benzodiazepine detox can take longer due to the need for a gradual taper. Stimulant withdrawal, while generally less medically dangerous, may involve an extended period of fatigue and mood instability. Your medical team at DRC continuously monitors your progress and adjusts your care plan accordingly.",
  },
  {
    q: "Is detox safe?",
    a: "When conducted under proper medical supervision, detox is safe. Attempting to detox on your own, particularly from alcohol or benzodiazepines, can be medically dangerous and in some cases life-threatening. At Desert Recovery Centers, our medical team uses established clinical protocols, continuous vital-sign monitoring, and FDA-approved medications to manage withdrawal symptoms and reduce medical risk. You are never alone during the process — our nursing staff is available 24 hours a day, 7 days a week.",
  },
  {
    q: "Does insurance cover detox in Arizona?",
    a: "Most major insurance plans cover medically necessary detoxification services in Arizona, including plans from Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many others. The Mental Health Parity and Addiction Equity Act requires insurers to cover substance use treatment at the same level as other medical conditions. Our admissions team at Desert Recovery Centers will verify your insurance benefits and explain your coverage before you begin treatment. Call (480) 931-3617 for a free, confidential insurance verification.",
  },
  {
    q: "What happens after detox?",
    a: "Detox alone is not treatment — it is the first step. After completing detox at Desert Recovery Centers, most clients transition directly into our residential treatment program, where they receive individual therapy, group counseling, psychiatric care, and holistic wellness programming. This seamless transition eliminates the gap between detox and treatment that often leads to relapse. Your clinical team develops a personalized treatment plan during detox so you can move into the next phase of care without delay.",
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
            about: {
              "@type": "MedicalTherapy",
              name: "Medical Detoxification",
              description:
                "Medically supervised withdrawal management for drugs and alcohol under physician oversight with 24/7 nursing care.",
            },
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
        description="The safest, most comfortable way to begin your recovery. Physician-led detox with 24/7 medical support in a luxury Arizona setting."
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
                When you have been using drugs or alcohol for an extended
                period, your body adapts to the presence of those substances.
                Stopping abruptly can trigger withdrawal symptoms that range
                from deeply uncomfortable to medically dangerous. That is why
                medical detox exists: to provide a safe, supervised
                environment where your body can clear substances while a
                clinical team manages the physical and psychological effects
                of withdrawal.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, detox is not a standalone
                service. It is the entry point into a comprehensive
                treatment experience. Our physicians design individualized
                detox protocols based on the substances involved, the
                severity of your dependence, your medical history, and any
                co-occurring mental health conditions. Every aspect of your
                detox is monitored and adjusted in real time to keep you as
                safe and comfortable as possible.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We understand that the decision to enter detox can feel
                overwhelming. Many of our clients describe it as the hardest
                step they have ever taken — and also the most important.
                Our team is here to make that step as smooth as it can be.
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
              What to Expect During Detox at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From the moment you arrive, our clinical team works to ensure
              you feel safe, informed, and supported. Here is what the detox
              process looks like at Desert Recovery Centers:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Comprehensive medical intake assessment including vital signs, lab work, and substance use history",
                "Individualized detox protocol designed by a physician based on your specific needs",
                "24/7 nursing observation with regular vital-sign monitoring and symptom scoring",
                "FDA-approved medications to manage withdrawal symptoms and reduce discomfort",
                "Comfortable, private rooms in a luxury residential setting — not a hospital ward",
                "Nutritional support and hydration management to help your body recover",
                "Psychiatric evaluation to identify co-occurring mental health conditions early",
                "Daily check-ins with your medical team to adjust your protocol as symptoms evolve",
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
              Our goal during detox is twofold: keep you medically safe and
              lay the groundwork for the therapeutic work ahead. By the time
              you complete detox, you will be physically stabilized and
              ready to engage fully in residential treatment.
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
                Every substance has a unique withdrawal profile. Our medical
                team tailors your detox protocol to the specific substance
                or combination of substances involved.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Alcohol Detox",
                    desc: "Alcohol withdrawal can produce symptoms ranging from tremors, anxiety, and insomnia to severe complications like seizures and delirium tremens. Our physicians use evidence-based protocols, including symptom-triggered benzodiazepine therapy when clinically indicated, to manage alcohol withdrawal safely. Typical alcohol detox at DRC lasts 5 to 7 days under continuous medical monitoring.",
                  },
                  {
                    title: "Opioid Detox",
                    desc: "Withdrawal from opioids — including prescription painkillers, heroin, and fentanyl — produces intense physical discomfort including muscle aches, nausea, sweating, and insomnia. Our medical team uses medication-assisted protocols to significantly reduce these symptoms and support a stable transition into ongoing treatment. Opioid detox typically lasts 5 to 10 days.",
                  },
                  {
                    title: "Benzodiazepine Detox",
                    desc: "Benzodiazepine withdrawal requires a careful, gradual taper supervised by a physician due to the risk of seizures with abrupt discontinuation. Our team develops individualized taper schedules that prioritize safety while managing anxiety, insomnia, and other withdrawal effects. Benzo detox timelines vary considerably based on the specific medication, dosage, and duration of use.",
                  },
                  {
                    title: "Stimulant Detox",
                    desc: "Withdrawal from stimulants such as cocaine and methamphetamine is characterized by fatigue, depression, increased appetite, and intense cravings rather than the acute medical risks seen with alcohol or benzodiazepines. Our team provides supportive care, psychiatric monitoring, and nutritional support to help you through this period and prepare for residential treatment.",
                  },
                  {
                    title: "Polysubstance Detox",
                    desc: "Many of our clients use more than one substance. Polysubstance detox requires heightened clinical oversight because withdrawal syndromes can interact and compound each other. Our physicians are experienced in managing complex detox cases and design protocols that address all substances involved simultaneously.",
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
              Medical Support Available During Detox
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers provides a level of medical oversight
              during detox that reflects our commitment to client safety and
              comfort.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Physician-Led Protocols",
                  desc: "Every detox protocol at DRC is designed and supervised by a licensed physician with experience in addiction medicine. Your physician evaluates you upon admission, oversees your medication regimen, and makes daily adjustments based on your symptom progression.",
                },
                {
                  title: "24/7 Nursing Care",
                  desc: "Our registered nurses are on-site around the clock during your detox. They monitor your vital signs, administer medications, assess your comfort level, and escalate any concerns to the supervising physician immediately.",
                },
                {
                  title: "Psychiatric Assessment",
                  desc: "Many people entering detox also experience depression, anxiety, trauma, or other mental health conditions. Our psychiatric team conducts evaluations during the detox phase so that these conditions can be addressed from the very beginning of your treatment.",
                },
                {
                  title: "Comfort-Focused Environment",
                  desc: "Detox at DRC takes place in a luxury residential setting, not a hospital. You have access to private or semi-private rooms, chef-prepared meals, and a calm environment designed to support the healing process from the first day.",
                },
                {
                  title: "Seamless Treatment Transition",
                  desc: "Because detox and residential treatment happen within the same program at DRC, there is no gap between completing detox and beginning therapy. Your clinical team begins developing your treatment plan during detox so you transition directly into the next phase of care.",
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
                to several months depending on the taper schedule your
                physician designs.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, your medical team assesses your
                progress daily and adjusts your protocol to match your
                body&apos;s response. We do not rush detox. The goal is
                a safe, thorough withdrawal process that positions you to
                engage meaningfully in the residential treatment that
                follows.
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
                . There is no waiting period, no transfer to a different
                facility, and no disruption in your care. Your clinical team
                begins planning your residential treatment during the detox
                phase, so you move from medical stabilization to active
                therapy without missing a day.
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
              Why Choose DRC for Detox
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Maximum 10 Beds Per Facility",
                  desc: "Our intentionally small program ensures that every client receives highly individualized medical attention during detox. You are never one of dozens — our staff knows your name, your history, and your needs.",
                },
                {
                  title: "Joint Commission Accreditation",
                  desc: "Desert Recovery Centers holds Joint Commission Gold Seal accreditation, the highest standard of quality and patient safety in behavioral healthcare. This accreditation reflects our commitment to clinical excellence at every level of care.",
                },
                {
                  title: "Luxury Comfort During a Difficult Process",
                  desc: "Detox is physically demanding. Our luxury residential environment — private rooms, chef-prepared nutrition, serene Arizona surroundings — is designed to make this challenging process as comfortable as possible.",
                },
                {
                  title: "Integrated Dual Diagnosis Care",
                  desc: "Many clients arrive with co-occurring mental health conditions that complicate withdrawal. Our psychiatric team evaluates every client during detox so that depression, anxiety, trauma, and other conditions are identified and addressed from day one.",
                },
                {
                  title: "No Gap Between Detox and Treatment",
                  desc: "At many facilities, clients complete detox and then wait — sometimes days or weeks — for a treatment bed. At DRC, detox and residential treatment are part of the same program. The transition is immediate and seamless.",
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
            question:
              "What is drug and alcohol detox at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides medically supervised drug and alcohol detoxification. With a maximum of 10 beds per facility, physician-designed protocols, and 24/7 nursing care, clients receive individualized medical oversight throughout the withdrawal process in a comfortable residential setting.",
          },
          {
            question:
              "How does Desert Recovery Centers manage withdrawal symptoms?",
            answer:
              "DRC uses evidence-based, physician-led detox protocols including FDA-approved medications to manage withdrawal symptoms for alcohol, opioids, benzodiazepines, and stimulants. Registered nurses monitor vital signs around the clock, and protocols are adjusted daily based on each client's symptom progression and medical needs.",
          },
          {
            question:
              "What happens after detox at Desert Recovery Centers?",
            answer:
              "After completing detox, clients transition directly into residential treatment at Desert Recovery Centers with no waiting period. The clinical team begins developing an individualized treatment plan during the detox phase, ensuring a seamless move into individual therapy, group counseling, psychiatric care, and holistic programming.",
          },
        ]}
      />
      <RelatedPages currentPath="/levels-of-care/detox" />
      <CTASection />
      <Footer />
    </>
  );
}
