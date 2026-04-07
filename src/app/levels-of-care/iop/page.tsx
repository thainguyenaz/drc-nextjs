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
    "Intensive Outpatient Program (IOP) in Arizona | Desert Recovery Centers",
  description:
    "Flexible intensive outpatient program (IOP) for addiction and mental health in Arizona. 3-4 hours of daily programming that fits around work, school, and family.",
  alternates: {
    canonical:
      "https://desertrecoverycenters.com/levels-of-care/iop/",
  },
  openGraph: {
    title:
      "Intensive Outpatient Program (IOP) in Arizona | Desert Recovery Centers",
    description:
      "Flexible intensive outpatient program (IOP) for addiction and mental health in Arizona. 3-4 hours of daily programming that fits around work, school, and family.",
    url: "https://desertrecoverycenters.com/levels-of-care/iop/",
    images: [
      {
        url: "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg",
        alt: "Intensive Outpatient Program (IOP) in Arizona | Desert Recovery Centers",
      },
    ],
  },
};

const faqs = [
  {
    q: "What is an intensive outpatient program?",
    a: "An intensive outpatient program (IOP) is a structured level of addiction and mental health treatment that provides clinical programming several hours per day, three to five days per week, while allowing you to live at home and maintain many of your daily responsibilities. At Desert Recovery Centers, our IOP includes individual therapy, group counseling, psychiatric services, and skill-building workshops — all designed to support sustained recovery while you navigate real-world demands like work, school, and family.",
  },
  {
    q: "How many hours per week is IOP?",
    a: "IOP at Desert Recovery Centers involves approximately 9 to 15 hours of clinical programming per week, typically structured as 3 to 4 hours per day, three to five days per week. The exact schedule is determined by your clinical team based on your treatment plan, your progress, and your external obligations. This time commitment is designed to provide meaningful therapeutic engagement without requiring you to step away from your daily life entirely.",
  },
  {
    q: "Is IOP effective for addiction?",
    a: "Research consistently supports the effectiveness of intensive outpatient programs for the treatment of substance use disorders. Studies published in the Journal of Substance Abuse Treatment and other peer-reviewed sources have found that well-structured IOPs produce outcomes comparable to residential treatment for many individuals — particularly when the program includes evidence-based therapies, psychiatric support, and a structured continuum of care. At DRC, our IOP is part of a coordinated care pathway that includes step-down from PHP, ongoing psychiatric care, and aftercare planning.",
  },
  {
    q: "Does insurance cover IOP in Arizona?",
    a: "Yes, most major insurance plans cover intensive outpatient treatment in Arizona. IOP is a recognized, medically necessary level of care under the Mental Health Parity and Addiction Equity Act. Plans from Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many other carriers typically provide benefits for IOP services. Our admissions team at Desert Recovery Centers verifies your insurance benefits and explains your coverage before treatment begins. Call (480) 931-3617 for a free, confidential insurance check.",
  },
  {
    q: "Can I work while in IOP?",
    a: "Yes, one of the primary advantages of IOP is that it is designed to fit around your existing responsibilities. Many of our IOP clients maintain employment, attend school, or fulfill family obligations while participating in the program. Our scheduling is flexible enough to accommodate morning, afternoon, or evening programming depending on availability. Your clinical team works with you to build a treatment schedule that supports both your recovery and your daily life.",
  },
];

const faqSchemaItems = faqs.map((f) => ({
  question: f.q,
  answer: f.a,
}));

export default function IOPPage() {
  return (
    <>
      <SchemaScript
        schema={[
          getFAQSchema(faqSchemaItems),
          getBreadcrumbSchema(
            getBreadcrumbsFromPathname("/levels-of-care/iop")
          ),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id":
              "https://desertrecoverycenters.com/levels-of-care/iop/#webpage",
            url: "https://desertrecoverycenters.com/levels-of-care/iop/",
            name: "Intensive Outpatient Program (IOP) in Arizona | Desert Recovery Centers",
            specialty: "Addiction Medicine",
            about: {
              "@type": "MedicalTherapy",
              name: "Intensive Outpatient Program",
              description:
                "Flexible outpatient addiction and mental health treatment providing 9-15 hours of weekly clinical programming while clients maintain daily responsibilities.",
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
        items={getBreadcrumbsFromPathname("/levels-of-care/iop")}
      />
      <PageHero
        eyebrow="Levels of Care"
        title="Intensive Outpatient Program (IOP) in Arizona"
        description="Evidence-based outpatient treatment that fits around your life. Maintain work, school, and family while getting the clinical support you need."
        bgImage="/images/general/DRC-MENTAL-HEALTH.jpg"
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
                What Is an Intensive Outpatient Program?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                An intensive outpatient program (IOP) provides structured
                clinical treatment for addiction and mental health conditions
                without requiring you to live at a facility or attend
                full-day programming. IOP occupies a key position in the
                continuum of care: it offers substantially more support than
                weekly outpatient therapy while preserving the flexibility to
                maintain your daily responsibilities.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, our IOP operates from our{" "}
                <Link
                  href="/locations/phoenix/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  Phoenix location
                </Link>{" "}
                and provides 3 to 4 hours of programming per day, three to
                five days per week. During these sessions, you engage in
                individual therapy with a licensed clinician, process and
                psychoeducational groups, psychiatric care and medication
                management, and practical skill-building workshops focused
                on relapse prevention and life skills.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                IOP is not a watered-down version of treatment. It is a
                clinically robust program designed for individuals who have
                the stability to manage their daily lives but who still need
                regular, intensive therapeutic engagement to sustain their
                recovery.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* IOP vs PHP vs Outpatient */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Comparing Levels of Care
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              IOP vs. PHP vs. Standard Outpatient
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding how IOP fits within the broader treatment
              landscape helps you and your clinical team select the level
              of care that matches your current needs.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "IOP vs. Partial Hospitalization (PHP)",
                  desc: "PHP provides 5 to 6 hours of daily programming, five to six days per week — nearly a full-day commitment. IOP reduces that to 3 to 4 hours per day, three to five days per week. Both offer individual therapy, groups, and psychiatric care, but IOP assumes a higher level of independent functioning and external stability. Clients typically step down from PHP to IOP when they demonstrate the ability to manage their evenings and weekends with less clinical scaffolding.",
                },
                {
                  title: "IOP vs. Standard Outpatient Therapy",
                  desc: "Standard outpatient therapy typically involves one to two sessions per week, each lasting 50 to 60 minutes. IOP provides 9 to 15 hours per week of structured programming. The difference in clinical intensity is substantial. IOP is appropriate when weekly therapy alone is insufficient to address the complexity of your condition, particularly during the early months of recovery or when navigating major transitions.",
                },
                {
                  title: "Where IOP Fits in the Care Continuum",
                  desc: "IOP serves as both a step-down from more intensive levels of care and an entry point for individuals who need more than weekly therapy. At DRC, many clients follow the pathway of residential to PHP to IOP, each step reducing structure while increasing independence. Others enter IOP directly when their clinical presentation warrants intensive outpatient support from the start.",
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

      {/* What DRC IOP Includes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Program Components
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                What Our IOP Includes
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                IOP at Desert Recovery Centers delivers a comprehensive set
                of clinical services within a flexible, outpatient framework.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Individual Therapy",
                    desc: "Weekly one-on-one sessions with a licensed therapist address your specific treatment goals, process challenges from your daily life, and adjust your recovery strategies as your needs evolve. Individual therapy in IOP is focused on applying the insights and skills developed in earlier levels of care to real-world situations.",
                  },
                  {
                    title: "Group Counseling",
                    desc: "Process groups and psychoeducational sessions provide peer support, shared accountability, and continued skill development. Group topics include relapse prevention, emotional regulation, communication skills, stress management, and navigating relationships in recovery.",
                  },
                  {
                    title: "Psychiatric Care",
                    desc: "Our psychiatric team continues to monitor and manage your medications during IOP. Regular psychiatric sessions ensure that your medication regimen is optimized as your condition stabilizes and your needs change over time.",
                  },
                  {
                    title: "Relapse Prevention Planning",
                    desc: "IOP places a strong emphasis on practical relapse prevention. You develop detailed plans for identifying and managing triggers, build your support network, and practice the coping strategies you will rely on as you transition to less intensive levels of care.",
                  },
                  {
                    title: "Life Skills and Reintegration Support",
                    desc: "As you prepare to resume full independence, IOP sessions address practical life skills including time management, financial planning, healthy routine building, and managing work or school alongside your recovery. These sessions bridge the gap between clinical treatment and daily life.",
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

      {/* Schedule and Commitment */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Schedule and Flexibility
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              IOP Schedule and Commitment Level
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our IOP is designed to integrate with your life, not replace
              it. The schedule and time commitment are structured to provide
              consistent clinical engagement while respecting your
              obligations outside of treatment.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "3 to 4 hours of programming per session, with sessions held 3 to 5 days per week",
                "Flexible scheduling options including morning, afternoon, and evening sessions based on availability",
                "Total weekly commitment of approximately 9 to 15 hours of clinical programming",
                "IOP duration typically ranges from 6 to 12 weeks, adjusted based on clinical progress",
                "Compatible with part-time or full-time employment, school enrollment, and family caregiving",
                "Clients can attend from home, sober living, or any stable residential situation in the Phoenix metro area",
                "Step-down frequency is available: sessions may be reduced from 5 days to 3 days per week as you progress",
                "Telehealth options may be available for certain sessions — ask our admissions team for details",
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
          </div>
        </div>
      </section>

      {/* Who Benefits from IOP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Who Benefits from IOP?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                IOP is appropriate for a range of clinical situations. You
                may be a good candidate for IOP if you are stepping down
                from{" "}
                <Link
                  href="/levels-of-care/php/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  PHP
                </Link>{" "}
                or residential treatment and need continued structured
                support, if you have a mild to moderate substance use
                disorder and a stable home environment, if you need more
                support than weekly therapy provides but cannot commit to
                full-day programming, or if your work, school, or family
                obligations require flexibility in your treatment schedule.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                IOP is also an appropriate entry point for individuals who
                recognize they need help but whose clinical presentation
                does not require residential or PHP-level care. Our
                admissions team conducts a clinical assessment to determine
                which level of care is right for you.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                The key consideration is stability. IOP works best when you
                have a safe, supportive living environment and the
                self-management skills to function between sessions. If you
                are unsure whether IOP is the right fit, call{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>{" "}
                and our team will help you determine the most appropriate
                level of care.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How IOP Fits the Continuum */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                The Recovery Pathway
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                How IOP Fits Into the Care Continuum
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, IOP is not an isolated program.
                It is one step in a coordinated continuum of care that
                supports you from the most intensive levels of treatment
                through to independent recovery. The typical pathway follows
                this progression: medical detox, residential treatment, PHP,
                IOP, and then outpatient aftercare.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Each transition is guided by your clinical team based on
                objective progress criteria. You are never pushed to the next
                level before you are ready, and you are never held at a
                level of care that is more restrictive than your condition
                requires. The goal is to provide the right amount of support
                at every stage.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                After completing IOP, many clients continue with weekly
                outpatient therapy, alumni programming, and community-based
                recovery support. Your aftercare plan is developed during IOP
                to ensure continuity when you complete the program. To learn
                about{" "}
                <Link
                  href="/insurance-verification/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  verifying your insurance
                </Link>{" "}
                or starting the admissions process, contact our team today.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why DRC for IOP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Choose DRC for IOP
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Clinical Continuity Across Levels of Care",
                  desc: "If you began your recovery at DRC in residential or PHP, your IOP continues with the same clinical team. There is no disruption in your therapeutic relationship, no need to start over, and no loss of context about your history and progress.",
                },
                {
                  title: "Evidence-Based Programming",
                  desc: "Our IOP uses the same research-supported modalities as our residential and PHP programs — CBT, DBT, motivational interviewing, psychiatric care — adapted for the outpatient setting. You receive clinical quality, not a generic support group.",
                },
                {
                  title: "Flexible Scheduling",
                  desc: "We understand that IOP needs to fit your life. Our scheduling options allow you to attend programming while maintaining employment, educational pursuits, and family responsibilities.",
                },
                {
                  title: "Small Group Sizes",
                  desc: "Our commitment to individualized care extends to IOP. Group sizes are kept small to ensure meaningful participation, personal attention, and therapeutic depth in every session.",
                },
                {
                  title: "Integrated Aftercare Planning",
                  desc: "IOP at DRC includes dedicated aftercare planning so that your transition out of formal treatment is supported. Your clinical team helps you build a recovery support network, identify ongoing therapy resources, and develop a long-term relapse prevention strategy.",
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
              "What is the intensive outpatient program at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides an Intensive Outpatient Program (IOP) offering 3 to 4 hours of daily clinical programming, three to five days per week. IOP includes individual therapy, group counseling, psychiatric care, and relapse prevention planning, designed for clients who need structured support while maintaining daily responsibilities.",
          },
          {
            question:
              "Can I work while attending IOP at Desert Recovery Centers?",
            answer:
              "Yes, IOP at DRC is specifically designed to fit around work, school, and family commitments. Flexible scheduling options including morning, afternoon, and evening sessions are available. The program provides 9 to 15 hours per week of clinical programming, leaving substantial time for employment and other responsibilities.",
          },
          {
            question:
              "How effective is IOP for addiction treatment?",
            answer:
              "Research published in peer-reviewed journals supports the effectiveness of well-structured intensive outpatient programs for substance use disorders. DRC's IOP uses evidence-based modalities including CBT, DBT, and psychiatric care within a coordinated continuum of care, providing outcomes comparable to higher levels of care for clinically appropriate candidates.",
          },
        ]}
      />
      <RelatedPages currentPath="/levels-of-care/iop" />
      <CTASection />
      <Footer />
    </>
  );
}
