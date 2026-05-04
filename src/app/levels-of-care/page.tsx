import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AEOBlock from "@/components/AEOBlock";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import AnimatedSection from "@/components/animated/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Levels of Care — Addiction & Mental Health Treatment in Arizona | DRC",
  description:
    "Explore every level of addiction and mental health treatment at Desert Recovery Centers: medical detox, residential, PHP, IOP, outpatient, and aftercare in Arizona.",
  alternates: {
    canonical:
      "https://desertrecoverycenters.com/levels-of-care/",
  },
  openGraph: {
    title:
      "Levels of Care — Addiction & Mental Health Treatment in Arizona | DRC",
    description:
      "Explore every level of addiction and mental health treatment at Desert Recovery Centers: medical detox, residential, PHP, IOP, outpatient, and aftercare in Arizona.",
    url: "https://desertrecoverycenters.com/levels-of-care/",
    images: [
      {
        url: "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
        alt: "Levels of Care at Desert Recovery Centers",
      },
    ],
  },
};

const faqs = [
  {
    q: "What are the different levels of addiction treatment?",
    a: "Addiction treatment is organized into a continuum of care with progressively less intensive levels. The primary levels, from most to least intensive, are: medical detoxification (medically supervised withdrawal management), residential treatment (24-hour inpatient care), partial hospitalization (PHP, full-day outpatient programming), intensive outpatient (IOP, several hours per day, several days per week), standard outpatient therapy (weekly sessions), and aftercare or alumni support. Desert Recovery Centers coordinates medical detox through trusted partner facilities, then provides residential, PHP, IOP, outpatient, and aftercare programming at our Arizona locations, guiding each client through the continuum based on their individual clinical needs.",
  },
  {
    q: "What is the difference between PHP and IOP?",
    a: "Partial hospitalization (PHP) and intensive outpatient (IOP) differ primarily in the amount of daily programming. PHP typically involves 5 to 6 hours per day, five to six days per week, providing near-residential intensity while you return home each evening. IOP involves 3 to 4 hours per day, three to five days per week, allowing more time for work, school, and family. Both include individual therapy, group counseling, and psychiatric care. Clients often step down from PHP to IOP as they demonstrate increased stability and independence.",
  },
  {
    q: "Do I need detox before residential treatment?",
    a: "Whether you need medical detox before residential treatment depends on the substance you have been using, the duration and severity of your use, and your overall physical health. Individuals with physical dependence on alcohol, opioids, or benzodiazepines typically require medically supervised detox before beginning residential treatment. Stimulant use may or may not require formal detox depending on the individual. Our admissions team conducts a preliminary clinical assessment over the phone to determine if detox is an appropriate starting point for you. Call (480) 931-3617 to discuss your situation confidentially.",
  },
  {
    q: "How do I know which level of care I need?",
    a: "The appropriate level of care is determined by a clinical assessment that considers the severity of your substance use, the presence of co-occurring mental health conditions, your physical health, your living environment, your support system, and any prior treatment history. At Desert Recovery Centers, our admissions team conducts an initial assessment over the phone and may recommend a formal clinical evaluation upon arrival. We use established clinical criteria to match you with the level of care that provides the right balance of structure, support, and independence for your situation.",
  },
  {
    q: "Does insurance cover all levels of care?",
    a: "Most major insurance plans in Arizona cover all medically necessary levels of addiction and mental health treatment, including detox, residential, PHP, IOP, and outpatient services. The Mental Health Parity and Addiction Equity Act requires insurers to provide equal coverage for behavioral health and medical conditions. Coverage specifics — including deductibles, copays, and length-of-stay authorizations — vary by plan. Note: Desert Recovery Centers works with commercial carriers on an out-of-network basis; we are in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team verifies your insurance benefits across all levels of care and explains your coverage before treatment begins. Call (480) 931-3617 for a free benefits check.",
  },
];

const faqSchemaItems = faqs.map((f) => ({
  question: f.q,
  answer: f.a,
}));

const levels = [
  {
    title: "Medical Detox",
    href: "/levels-of-care/detox/",
    description:
      "The first step for individuals with physical dependence on drugs or alcohol. Medical detox provides 24/7 physician oversight and nursing care to manage withdrawal symptoms safely and comfortably. At DRC, detox is not a standalone service — it is the entry point into a seamless continuum of care. Our medical team designs individualized protocols for alcohol, opioid, benzodiazepine, stimulant, and polysubstance withdrawal, using FDA-approved medications and continuous monitoring to keep you safe throughout the process.",
    who: "Individuals with physical dependence on alcohol, opioids, benzodiazepines, or other substances who need medically supervised withdrawal management before beginning therapeutic treatment.",
    duration: "3 to 14 days depending on substance and severity",
  },
  {
    title: "Residential Treatment",
    href: "/levels-of-care/residential-treatment/",
    description:
      "The most immersive level of therapeutic care. You live at the facility full-time, participating in a structured daily schedule of individual therapy, group counseling, psychiatric care, experiential therapies, and holistic wellness. DRC's residential facilities are each limited to 10 beds, ensuring deeply individualized attention from doctoral-level clinicians. Residential treatment removes you from the triggers of daily life and provides the focused, intensive environment that early recovery demands.",
    who: "Individuals with moderate to severe substance use disorders, those with co-occurring mental health conditions, people who have not responded to outpatient treatment, or anyone who needs a complete break from their environment to begin recovery.",
    duration: "30 to 90 days based on clinical assessment",
  },
  {
    title: "Partial Hospitalization Program (PHP)",
    href: "/levels-of-care/php/",
    description:
      "PHP provides intensive, full-day clinical programming — typically 5 to 6 hours per day, five to six days per week — while allowing you to return home or to supportive housing each evening. The therapeutic content mirrors residential treatment: individual therapy, group work, psychiatric care, and experiential modalities. PHP bridges the gap between the total immersion of residential treatment and the greater independence of outpatient care.",
    who: "Clients stepping down from residential treatment who are not yet ready for the reduced structure of IOP, or individuals who need intensive daily programming but have a stable living environment and do not require 24-hour supervision.",
    duration: "2 to 4 weeks, adjusted based on clinical progress",
  },
  {
    title: "Intensive Outpatient Program (IOP)",
    href: "/levels-of-care/iop/",
    description:
      "IOP provides structured clinical treatment — 3 to 4 hours per day, three to five days per week — designed to fit around your work, school, and family responsibilities. Programming includes individual therapy, group counseling, psychiatric care, relapse prevention, and life skills development. IOP at DRC uses the same evidence-based modalities as our residential and PHP programs, adapted for the outpatient setting.",
    who: "Individuals stepping down from PHP, those with mild to moderate substance use disorders and a stable home environment, or people who need more support than weekly therapy but cannot commit to full-day programming.",
    duration: "6 to 12 weeks, with step-down frequency as clinically appropriate",
  },
  {
    title: "Outpatient Therapy",
    href: "/addiction-treatment/",
    description:
      "Standard outpatient therapy provides ongoing clinical support through weekly individual sessions and, where appropriate, group therapy. At this level, you are managing your daily life independently while maintaining a therapeutic relationship that supports long-term recovery. Outpatient sessions focus on relapse prevention, continued skill development, processing life challenges, and monitoring mental health and medication needs.",
    who: "Individuals who have completed higher levels of care and are transitioning to independent recovery, or those whose clinical needs are appropriately addressed by weekly therapeutic engagement.",
    duration: "Ongoing, with frequency adjusted based on individual needs",
  },
  {
    title: "Aftercare and Alumni Support",
    href: "/addiction-treatment/",
    description:
      "Recovery does not end when formal treatment concludes. DRC provides aftercare planning, alumni programming, and ongoing connections to community recovery resources. Your aftercare plan is developed during treatment and includes therapy referrals, recovery community connections, relapse prevention strategies, and access to DRC alumni events and support networks. Aftercare is the long-term safety net that protects the progress you make in treatment.",
    who: "All DRC alumni who have completed formal treatment and are transitioning to independent recovery. Aftercare support is available to every client who completes our program.",
    duration: "Ongoing — recovery is a lifelong journey and support is always available",
  },
];

export default function LevelsOfCarePage() {
  return (
    <>
      <SchemaScript
        schema={[
          getFAQSchema(faqSchemaItems),
          getBreadcrumbSchema(
            getBreadcrumbsFromPathname("/levels-of-care")
          ),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id":
              "https://desertrecoverycenters.com/levels-of-care/#webpage",
            url: "https://desertrecoverycenters.com/levels-of-care/",
            name: "Levels of Care — Addiction & Mental Health Treatment in Arizona | DRC",
            specialty: "Addiction Medicine",
            about: {
              "@type": "MedicalTherapy",
              name: "Addiction Treatment Continuum of Care",
              description:
                "A full range of addiction and mental health treatment levels including coordinated medical detox at partner facilities, residential treatment, partial hospitalization, intensive outpatient, outpatient therapy, and aftercare.",
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
        items={getBreadcrumbsFromPathname("/levels-of-care")}
      />
      <PageHero
        eyebrow="Treatment Continuum"
        title="Levels of Care at Desert Recovery Centers"
        description="A complete continuum of addiction and mental health treatment, from detox coordination through aftercare, guided by your individual clinical needs."
        bgImage="/images/general/DRC-ADDICTION.jpg"
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
                Understanding the Continuum of Care
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Addiction and mental health treatment is not a single event.
                It is a process that unfolds over time, and the level of
                clinical support you need changes as you progress through
                recovery. That is why treatment is organized into a
                continuum of care: a graduated series of levels, each
                providing a different balance of structure, intensity, and
                independence.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Desert Recovery Centers coordinates the full continuum of
                care. We coordinate medically supervised detox through
                trusted partner facilities, then provide residential
                treatment, PHP, IOP, outpatient therapy, and aftercare at
                our Arizona locations. After detox, you move through your
                residential and outpatient stages within a single treatment
                system, with the same DRC clinical team guiding your care
                across every level beyond detox.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                The right level of care for you depends on your specific
                clinical needs, and those needs are assessed both at the
                time of admission and continuously throughout your
                treatment. Our clinical team uses established criteria to
                determine when you are ready to step down to a less
                intensive level, ensuring that every transition is guided
                by your progress, not by arbitrary timelines.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How DRC Guides Through Continuum */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Approach
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                How DRC Guides You Through the Continuum
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Every client at Desert Recovery Centers enters at the level
                of care that matches their clinical presentation, and every
                transition between levels is based on documented progress
                and clinical readiness. This is not a one-size-fits-all
                pathway — it is a personalized journey guided by your
                treatment team.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                When you call our admissions team at{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>
                , the process begins with an initial clinical assessment.
                Based on the severity of your substance use, any
                co-occurring mental health conditions, your medical history,
                your living situation, and your support system, our team
                recommends a starting level of care. From there, your
                treatment plan is continuously reassessed and adjusted.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                The typical progression moves from more intensive to less
                intensive levels of care: detox to residential treatment to
                PHP to IOP to outpatient therapy and aftercare. However,
                not every client starts at detox, and not every client moves
                through every level. Some may enter directly into residential
                or IOP based on their assessment. Others may need to step
                back up to a more intensive level temporarily if their
                condition changes.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                The defining principle is flexibility grounded in clinical
                rigor. Your recovery is unique, and your treatment pathway
                should be too.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Each Level of Care */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Full Continuum
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Every Level of Care at DRC
            </h2>
            <div className="space-y-8">
              {levels.map((level, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="border-l-2 border-gold/40 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-xl text-forest font-semibold">
                        <Link
                          href={level.href}
                          className="hover:text-gold transition-colors"
                        >
                          {level.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {level.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-xs text-sage">
                      <p>
                        <span className="font-semibold">Who it&apos;s for:</span>{" "}
                        {level.who}
                      </p>
                    </div>
                    <p className="text-xs text-sage mt-1">
                      <span className="font-semibold">Typical duration:</span>{" "}
                      {level.duration}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The DRC Difference */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why DRC for Your Recovery Journey
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Seamless Detox-to-Residential Coordination",
                  desc: "We coordinate your medically supervised detox at a trusted partner facility, then manage the warm handoff into our residential program. You arrive at Desert Recovery Centers with your detox already complete and your treatment plan already in motion, ready to start residential care without delays or duplicate intakes.",
                },
                {
                  title: "Clinical Continuity",
                  desc: "Your clinical team follows you across levels of care. The therapist who works with you in residential continues to guide your PHP and IOP programming. This continuity means your treatment builds cumulatively rather than restarting at each transition.",
                },
                {
                  title: "10-Bed Maximum Residential Facilities",
                  desc: "Our residential locations in Glendale and Scottsdale are capped at 10 beds. This ensures deeply personalized attention from doctoral-level clinicians at the most critical stages of your recovery.",
                },
                {
                  title: "Joint Commission Gold Seal Accreditation",
                  desc: "DRC meets the highest national standard for quality and safety in behavioral healthcare. This accreditation reflects rigorous clinical protocols, continuous quality improvement, and a commitment to client safety at every level of care.",
                },
                {
                  title: "Integrated Dual Diagnosis Treatment",
                  desc: "Addiction and mental health conditions are treated together by the same team at every level. We do not separate addiction treatment from psychiatric care — they are interwoven throughout your recovery journey.",
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

      {/* Getting Started */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                How to Get Started
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                If you or a loved one is struggling with addiction or a
                mental health condition, the most important step is reaching
                out. Our admissions team is available 24 hours a day, 7 days
                a week, to answer your questions, conduct an initial
                assessment, verify your insurance, and help you determine the
                most appropriate level of care.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                You do not need to have all the answers before you call. You
                do not need to know which level of care is right. That is
                what our clinical team is here to help you figure out. All
                you need to do is make the call.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Call{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>{" "}
                to speak with our admissions team today. You can also begin
                the process by completing our online{" "}
                <Link
                  href="/insurance-verification/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  insurance verification form
                </Link>
                . Every conversation is confidential.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question:
              "What levels of care does Desert Recovery Centers offer?",
            answer:
              "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) coordinates medically supervised detox through trusted partner facilities, then provides residential treatment (10-bed max per facility), partial hospitalization (PHP), intensive outpatient (IOP), outpatient therapy, and aftercare/alumni support at our Arizona locations. Clients are guided through each level based on individual clinical progress.",
          },
          {
            question:
              "How does Desert Recovery Centers determine the right level of care?",
            answer:
              "DRC uses a clinical assessment process that evaluates the severity of substance use, co-occurring mental health conditions, medical history, living environment, and support system. The admissions team conducts an initial phone assessment and may recommend a formal evaluation upon arrival. Level-of-care decisions are based on established clinical criteria and continuously reassessed throughout treatment.",
          },
          {
            question:
              "Does insurance cover all levels of addiction treatment at DRC?",
            answer:
              "Most major insurance plans in Arizona cover medically necessary addiction treatment at all levels of care, including detox, residential, PHP, IOP, and outpatient services. The Mental Health Parity and Addiction Equity Act requires equal coverage for behavioral health and medical conditions. Note: DRC works with commercial carriers on an out-of-network basis; we are in-network with TriCare and TriWest, and offer cash-pay options. DRC's admissions team verifies benefits across all levels before treatment begins. Call (480) 931-3617 for a free insurance check.",
          },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
