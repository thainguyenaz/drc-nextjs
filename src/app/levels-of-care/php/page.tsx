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
  title:
    "Partial Hospitalization Program (PHP) in Arizona | Desert Recovery Centers",
  description:
    "Structured partial hospitalization program (PHP) for addiction and mental health in Arizona. Full-day clinical programming with the flexibility to return home each evening.",
  alternates: {
    canonical:
      "https://desertrecoverycenters.com/levels-of-care/php/",
  },
  openGraph: {
    title:
      "Partial Hospitalization Program (PHP) in Arizona | Desert Recovery Centers",
    description:
      "Structured partial hospitalization program (PHP) for addiction and mental health in Arizona. Full-day clinical programming with the flexibility to return home each evening.",
    url: "https://desertrecoverycenters.com/levels-of-care/php/",
    images: [
      {
        url: "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
        alt: "Partial Hospitalization Program (PHP) in Arizona | Desert Recovery Centers",
      },
    ],
  },
};

const faqs = [
  {
    q: "What is a partial hospitalization program?",
    a: "A partial hospitalization program (PHP) is a structured, intensive outpatient level of care that provides full-day clinical programming five to six days per week while allowing you to return home or to supportive housing each evening. At Desert Recovery Centers, our PHP includes individual therapy, group counseling, psychiatric services, medication management, and experiential therapies — delivered at a clinical intensity comparable to residential treatment but with greater daily independence.",
  },
  {
    q: "How is PHP different from inpatient treatment?",
    a: "The primary difference is where you sleep. In residential (inpatient) treatment, you live at the facility 24 hours a day. In PHP, you attend programming during the day — typically 5 to 6 hours — and return to your home, sober living, or supportive housing in the evening. The clinical content and intensity of PHP are very similar to residential treatment. PHP is appropriate for individuals who have completed residential treatment and are stepping down, or for those whose clinical needs require intensive programming but not 24-hour supervision.",
  },
  {
    q: "How long is PHP?",
    a: "PHP at Desert Recovery Centers typically lasts 2 to 4 weeks, though the duration is adjusted based on your individual clinical progress and needs. Some clients complete PHP in as little as two weeks if they are stepping down from residential and demonstrating strong clinical gains. Others benefit from a longer PHP engagement, particularly if they are managing complex co-occurring conditions. Your treatment team reviews your progress regularly and makes step-down recommendations based on clinical criteria, not arbitrary timelines.",
  },
  {
    q: "Does insurance cover PHP in Arizona?",
    a: "Yes, most major insurance plans cover partial hospitalization programs in Arizona. PHP is a recognized, medically necessary level of care under the Mental Health Parity and Addiction Equity Act. Plans from Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many other carriers typically provide coverage for PHP when clinically indicated. Note: Desert Recovery Centers works with these commercial carriers on an out-of-network basis; we are in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team will verify your specific insurance benefits before you begin the program. Call (480) 931-3617 for a free, confidential benefits check.",
  },
  {
    q: "Who is PHP right for?",
    a: "PHP is appropriate for individuals who need intensive, structured clinical care but do not require 24-hour residential supervision. Common candidates include clients stepping down from residential treatment who are not yet ready for the reduced structure of IOP, individuals with moderate substance use disorders or mental health conditions who have a stable living environment, people who have relapsed after prior outpatient treatment and need a higher level of support, and those whose work or family obligations make residential treatment impractical but who need more than weekly therapy.",
  },
];

const faqSchemaItems = faqs.map((f) => ({
  question: f.q,
  answer: f.a,
}));

export default function PHPPage() {
  return (
    <>
      <SchemaScript
        schema={[
          getFAQSchema(faqSchemaItems),
          getBreadcrumbSchema(
            getBreadcrumbsFromPathname("/levels-of-care/php")
          ),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id":
              "https://desertrecoverycenters.com/levels-of-care/php/#webpage",
            url: "https://desertrecoverycenters.com/levels-of-care/php/",
            name: "Partial Hospitalization Program (PHP) in Arizona | Desert Recovery Centers",
            specialty: "Addiction Medicine",
            about: {
              "@type": "MedicalTherapy",
              name: "Partial Hospitalization Program",
              description:
                "Intensive day treatment program for addiction and mental health providing 5-6 hours of daily clinical programming while clients return home each evening.",
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
        items={getBreadcrumbsFromPathname("/levels-of-care/php")}
      />
      <PageHero
        eyebrow="Levels of Care"
        title="Partial Hospitalization Program (PHP) in Arizona"
        description="Intensive day treatment with the clinical depth of residential programming and the flexibility to return home each evening."
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
                What Is a Partial Hospitalization Program?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                A partial hospitalization program, commonly called PHP, is
                an intensive level of outpatient care that provides
                structured clinical programming during the day while
                allowing you to return home or to supportive housing each
                evening. PHP occupies a critical space in the continuum of
                care — more intensive than a standard outpatient program,
                but with greater independence than residential treatment.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, our PHP operates out of our{" "}
                <Link
                  href="/locations/phoenix-php-iop/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  Phoenix location
                </Link>{" "}
                and typically runs five to six days per week, with
                approximately five to six hours of programming each day.
                During that time, you participate in individual therapy,
                group counseling, psychiatric sessions, experiential
                therapies, and skill-building workshops — the same
                evidence-based modalities used in our residential program,
                delivered at a comparable clinical intensity.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                PHP is designed for individuals who need more than weekly
                therapy sessions but who do not require 24-hour residential
                supervision. It serves as both a step-down from residential
                treatment and a step-up for individuals who need more
                intensive care than traditional outpatient therapy provides.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PHP vs Residential vs IOP */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Understanding the Differences
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How PHP Differs from Residential and IOP
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choosing the right level of care depends on your clinical needs,
              living situation, and where you are in your recovery journey.
              Here is how PHP compares to the levels immediately above and
              below it:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Residential Treatment vs. PHP",
                  desc: "In residential treatment, you live at the facility full-time with 24-hour clinical support. PHP provides the same caliber of therapeutic programming — individual therapy, group work, psychiatric care — but you return to your home or supportive housing each evening. Residential is appropriate when you need around-the-clock supervision, a complete break from your environment, or medical monitoring. PHP is appropriate when you are clinically stable enough to manage evenings independently but still need full-day clinical intensity.",
                },
                {
                  title: "PHP vs. Intensive Outpatient (IOP)",
                  desc: "PHP typically involves 5 to 6 hours of programming per day, five to six days per week. IOP provides 3 to 4 hours of programming per day, three to five days per week. The clinical content overlaps significantly, but PHP offers more hours, more sessions, and tighter clinical oversight. Many clients step down from PHP to IOP as they demonstrate increased stability and the ability to manage more of their daily life independently.",
                },
                {
                  title: "The Step-Down Pathway",
                  desc: "The most effective treatment journeys follow a graduated pathway: residential to PHP to IOP to outpatient aftercare. Each step reduces the intensity of clinical programming while increasing your independence, ensuring that you are never left without adequate support at any stage of your recovery.",
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

      {/* What a PHP Day Looks Like */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Daily Structure
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What a PHP Day Looks Like at DRC
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Each day in our PHP is structured to maximize clinical benefit
              while building the real-world skills you need for sustained
              recovery. A typical PHP day includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Morning check-in: review your current mental and emotional state with your clinical team",
                "Individual therapy: weekly one-on-one sessions with a licensed therapist focused on your specific treatment goals",
                "Process group: facilitated peer discussion addressing shared challenges, triggers, and recovery milestones",
                "Psychoeducational group: structured learning on topics like relapse prevention, emotional regulation, and coping skills",
                "Psychiatric session: regular medication management and psychiatric monitoring as part of your treatment plan",
                "Experiential therapy: art therapy, mindfulness exercises, or other experiential modalities integrated into the weekly schedule",
                "Skill-building workshop: practical sessions on communication, stress management, and life skills for post-treatment success",
                "End-of-day reflection: guided journaling or mindfulness to integrate the day's clinical work before returning home",
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
              The exact schedule is tailored to your treatment plan and may
              vary from week to week as your clinical team adjusts the focus
              based on your progress.
            </p>
          </div>
        </div>
      </section>

      {/* Therapies in PHP */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Clinical Modalities
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Therapies in Our PHP
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                PHP at Desert Recovery Centers uses the same evidence-based
                modalities as our residential program, ensuring clinical
                continuity as you step down through levels of care.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Cognitive Behavioral Therapy (CBT)",
                    desc: "CBT remains a core component of PHP, helping you continue to identify and restructure unhelpful thought patterns. In PHP, the focus shifts toward applying CBT skills in real-world situations you encounter during evenings and weekends outside the program.",
                  },
                  {
                    title: "Dialectical Behavior Therapy (DBT)",
                    desc: "DBT skills training in mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness are reinforced through PHP groups. The semi-independent structure of PHP creates natural opportunities to practice these skills in daily life.",
                  },
                  {
                    title: "Group Process Therapy",
                    desc: "Peer-facilitated groups provide a space to share experiences, process challenges, and build the interpersonal connections that support long-term recovery. Group dynamics in PHP often reflect the real-world social situations you are learning to navigate.",
                  },
                  {
                    title: "Psychiatric Care and Medication Management",
                    desc: "Our psychiatrists continue to monitor and adjust your medications during PHP, ensuring that your psychiatric treatment plan evolves alongside your clinical progress. Regular psychiatric sessions are built into the PHP schedule.",
                  },
                  {
                    title: "Relapse Prevention and Life Skills",
                    desc: "PHP places increasing emphasis on practical relapse prevention strategies and life skills as you prepare for greater independence. Sessions cover trigger identification, coping strategies, healthy routines, communication skills, and planning for the transition to IOP or outpatient care.",
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

      {/* How Long PHP Lasts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                How Long Does PHP Last?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                PHP at Desert Recovery Centers typically lasts two to four
                weeks. Clients stepping down from residential treatment who
                are progressing well may move through PHP in as little as
                two weeks. Clients entering PHP directly, or those managing
                complex co-occurring conditions, may benefit from three to
                four weeks of programming.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                The timeline is never arbitrary. Your clinical team reviews
                your progress using objective clinical criteria and
                collaborates with you on step-down decisions. The goal is to
                provide enough structure to solidify the gains you have made
                while building confidence in your ability to function
                independently.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                When you are ready, the typical next step is our{" "}
                <Link
                  href="/levels-of-care/iop/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  Intensive Outpatient Program (IOP)
                </Link>
                , which provides continued therapeutic support at a reduced
                intensity — allowing you to resume more of your daily
                responsibilities while maintaining clinical engagement.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Insurance and Getting Started */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Insurance Coverage and Getting Started
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Partial hospitalization is a recognized, medically necessary
                level of care, and most major insurance plans in Arizona
                provide coverage for PHP services. Our admissions team
                handles the insurance verification process, communicates
                directly with your insurance carrier, and provides a clear
                picture of your benefits before you begin programming.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                If you are currently in{" "}
                <Link
                  href="/levels-of-care/residential-treatment/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  residential treatment
                </Link>{" "}
                at DRC, the transition to PHP is coordinated by your existing
                clinical team. If you are entering PHP directly, our
                admissions team will guide you through the intake process,
                verify your insurance, and schedule your start date.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                To learn more about our PHP or to begin the admissions
                process, call{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>
                . Our team is available 24 hours a day, 7 days a week.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why DRC for PHP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Choose DRC for PHP
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Clinical Continuity",
                  desc: "If you complete residential treatment at DRC and step down to PHP, you continue working with the same clinical team. There is no need to retell your story, rebuild therapeutic rapport, or adjust to a new treatment philosophy.",
                },
                {
                  title: "Small Group Sizes",
                  desc: "Our PHP maintains the same commitment to small-group programming that defines our residential facilities. You receive individualized attention, not assembly-line treatment.",
                },
                {
                  title: "Dual Diagnosis Expertise",
                  desc: "PHP at DRC addresses addiction and co-occurring mental health conditions simultaneously. Our psychiatric and therapeutic teams work together to ensure that all aspects of your clinical picture are treated at every level of care.",
                },
                {
                  title: "Real-World Skill Application",
                  desc: "The semi-independent structure of PHP creates a natural testing ground for the coping strategies and life skills you are building. You practice applying what you learn in therapy to your actual daily environment, with clinical support available the next morning.",
                },
                {
                  title: "Seamless Step-Down to IOP",
                  desc: "When your clinical team determines you are ready for less intensive programming, the transition to our IOP is smooth and coordinated. Your treatment plan evolves with you — there are no gaps in care.",
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
              "What is the partial hospitalization program at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) offers a structured Partial Hospitalization Program (PHP) that provides 5 to 6 hours of daily clinical programming, five to six days per week. PHP includes individual therapy, group counseling, psychiatric care, and experiential therapies while clients return home or to supportive housing each evening.",
          },
          {
            question:
              "How does PHP at DRC differ from residential treatment?",
            answer:
              "PHP at DRC provides the same evidence-based clinical modalities as residential treatment — CBT, DBT, psychiatric care, experiential therapy — but clients attend during the day and return home each evening. PHP is appropriate for clients stepping down from residential treatment or those who need intensive clinical support without 24-hour supervision.",
          },
          {
            question: "How long does PHP last at Desert Recovery Centers?",
            answer:
              "PHP at Desert Recovery Centers typically lasts 2 to 4 weeks. Duration is based on individual clinical progress, co-occurring conditions, and readiness to step down to the Intensive Outpatient Program (IOP). The clinical team reviews progress regularly using objective criteria to guide step-down recommendations.",
          },
        ]}
      />
      <RelatedPages currentPath="/levels-of-care/php" />
      <CTASection />
      <Footer />
    </>
  );
}
