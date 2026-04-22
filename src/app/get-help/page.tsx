import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import InsuranceVerificationForm from "@/components/forms/InsuranceVerificationForm";
import { getBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import AnimatedSection from "@/components/animated/AnimatedSection";
import AnimatedGrid from "@/components/animated/AnimatedGrid";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I start treatment at Desert Recovery Centers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (480) 931-3617 any time, day or night. Our admissions team will conduct a brief clinical assessment, verify your insurance, and help coordinate your admission. Most clients begin treatment within 24 hours of their first call.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring comfortable clothing for 2 weeks, personal hygiene items, any prescribed medications in original bottles, and a valid photo ID. Our admissions team will provide a complete packing list when you call.",
      },
    },
    {
      "@type": "Question",
      name: "Is the admissions process confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every aspect of your treatment is completely confidential and protected by HIPAA and 42 CFR Part 2 federal regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I be admitted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients begin treatment within 24 hours of their first call to (480) 931-3617. Our admissions team is available 24 hours a day, 7 days a week.",
      },
    },
    {
      "@type": "Question",
      name: "What if I am not sure I need treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us anyway. Our admissions team will conduct a free, confidential clinical assessment to help determine the right level of care for your situation. There is no obligation.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Get Help for Addiction & Mental Health Today | Desert Recovery Centers",
  description:
    "Ready to start your recovery? Contact Desert Recovery Centers today. Luxury addiction and mental health treatment in Arizona. Call (480) 931-3617.",
  alternates: {
    canonical: "https://desertrecoverycenters.com/get-help/",
  },
  openGraph: {
    images: [
      {
        url: "/images/glendale/Glendale-Front.jpg",
        width: 1200,
        height: 630,
        alt: "Exterior of Desert Recovery Centers luxury residential rehab facility in Glendale Arizona",
      },
    ],
  },
};

export default function GetHelpPage() {
  return (
    <>
      <SchemaScript
        schema={[
          faqSchema,
          getBreadcrumbSchema(getBreadcrumbsFromPathname("/get-help")),
        ]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/get-help")} />
      <PageHero
        eyebrow="Start Your Recovery"
        title="Get Help Today"
        description="One conversation can change everything. Our admissions team is available 24/7. Call now or fill out the form below."
        bgImage="/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-02-2024-0830August-02-202400010-2.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="max-w-xl">
                <h2 className="font-display text-2xl text-forest font-semibold mb-4">
                  Ready to Take the First Step?
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Recovery starts with a single call. Our admissions team will
                  walk you through every step, from insurance verification to
                  your first day of treatment. Most clients are admitted within
                  24 hours.
                </p>

                <div className="bg-forest rounded-xl p-6 mb-6">
                  <h3 className="font-display text-lg text-white font-semibold mb-2">
                    Call Our Admissions Team
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Available 24 hours a day, 7 days a week. Completely
                    confidential.
                  </p>
                  <a
                    href="tel:+14809313617"
                    className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
                  >
                    (480) 931-3617
                  </a>
                </div>

                <h3 className="font-display text-lg text-forest font-semibold mt-8 mb-4">
                  What Happens When You Call
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Free Clinical Assessment",
                      desc: "A brief, confidential conversation to understand your situation and determine the right level of care.",
                    },
                    {
                      step: "2",
                      title: "Insurance Verification",
                      desc: "We verify your benefits and explain your coverage so there are no surprises.",
                    },
                    {
                      step: "3",
                      title: "Coordinated Admission",
                      desc: "We handle travel arrangements, intake scheduling, and everything you need to begin treatment.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gold font-bold text-sm">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-display text-forest font-semibold text-sm">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/insurance-verification"
                    className="text-sage hover:text-sage/80 font-medium text-sm transition-colors"
                  >
                    Verify your insurance online &rarr;
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.15}>
              <InsuranceVerificationForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Treatment Options
              </span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
                Find the Right Program
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "Residential Treatment",
                desc: "Immersive 24/7 care in our luxury facilities with structured daily programming.",
                href: "/levels-of-care/residential-treatment",
              },
              {
                name: "Outpatient Programs",
                desc: "PHP and IOP options for flexible, high-quality treatment while living at home.",
                href: "/levels-of-care/iop",
              },
              {
                name: "Adolescent Program",
                desc: "Specialized treatment for teens ages 13-17 with age-appropriate clinical care.",
                href: "/adolescent-treatment",
              },
            ].map((program) => (
              <Link
                key={program.name}
                href={program.href}
                className="bg-white rounded-xl p-6 shadow-sm border-2 border-transparent hover:border-gold/40 transition-all"
              >
                <h3 className="font-display text-lg text-forest font-semibold">
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {program.desc}
                </p>
                <span className="text-sage text-sm font-medium mt-4 inline-block">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Common Questions
              </span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
                Admissions FAQ
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map(
              (faq) => (
                <AnimatedSection key={faq.name}>
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="font-display text-lg text-forest font-semibold mb-2">
                      {faq.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </AnimatedSection>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
