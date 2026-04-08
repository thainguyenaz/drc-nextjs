import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import InsuranceVerificationForm from "@/components/forms/InsuranceVerificationForm";
import { getBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import Link from "next/link";
import AnimatedSection from "@/components/animated/AnimatedSection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What insurance does Desert Recovery Centers accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desert Recovery Centers accepts most major private and commercial insurance plans out-of-network, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, and many others. We do not accept Medicaid or state-funded insurance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does insurance verification take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our admissions team typically verifies your benefits within a few hours of receiving your information. Call (480) 931-3617 any time for a faster response.",
      },
    },
    {
      "@type": "Question",
      name: "Does Desert Recovery Centers accept Medicare or Medicaid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Desert Recovery Centers does not accept Medicare or Medicaid. We accept most private commercial insurance plans and offer self-pay options.",
      },
    },
    {
      "@type": "Question",
      name: "What information do I need to verify my insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will need your insurance card (front and back), member ID, date of birth, and the name of your insurance provider. You can upload your card directly on this page.",
      },
    },
    {
      "@type": "Question",
      name: "Does Desert Recovery Centers accept Tricare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Desert Recovery Centers is Tricare and TriWest in-network, making treatment accessible for active duty military, veterans, and their families.",
      },
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Insurance Verification for Addiction & Mental Health Treatment",
  description:
    "Verify your insurance coverage for addiction and mental health treatment at Desert Recovery Centers.",
  url: "https://desertrecoverycenters.com/insurance-verification/",
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "main",
  },
  specialty: {
    "@type": "MedicalSpecialty",
    name: "Psychiatric",
  },
};

export const metadata: Metadata = {
  title:
    "Verify Insurance for Addiction & Mental Health Treatment | Desert Recovery Centers",
  description:
    "Verify your insurance coverage for addiction and mental health treatment at Desert Recovery Centers. We accept most private insurance. Call (480) 931-3617.",
  alternates: {
    canonical: "https://desertrecoverycenters.com/insurance-verification/",
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

export default function InsuranceVerificationPage() {
  return (
    <>
      <SchemaScript
        schema={[
          faqSchema,
          medicalWebPageSchema,
          getBreadcrumbSchema(
            getBreadcrumbsFromPathname("/insurance-verification")
          ),
        ]}
      />
      <Navigation />
      <Breadcrumb
        items={getBreadcrumbsFromPathname("/insurance-verification")}
      />
      <PageHero
        eyebrow="Insurance"
        title="Insurance Verification"
        description="We accept most private and commercial insurance plans. Submit your information below and our admissions team will verify your benefits before you begin treatment."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="max-w-xl">
                <p className="text-gray-600 leading-relaxed text-lg">
                  We accept most private and commercial insurance plans. Submit
                  your information below and our admissions team will verify your
                  benefits and explain your coverage options before you begin
                  treatment. We do not accept Medicaid or state-funded insurance.
                </p>

                <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
                  Insurance Plans We Accept
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Aetna", href: "/insurance/aetna" },
                    {
                      name: "Blue Cross Blue Shield",
                      href: "/insurance/blue-cross",
                    },
                    { name: "Cigna", href: "/insurance/cigna" },
                    { name: "UnitedHealthcare", href: "/insurance/united" },
                    { name: "Humana", href: "/insurance/humana" },
                    { name: "Tricare / TriWest", href: "/insurance" },
                  ].map((plan) => (
                    <Link
                      key={plan.name}
                      href={plan.href}
                      className="flex items-center gap-2 text-forest hover:text-sage transition-colors"
                    >
                      <span className="text-gold font-bold">&#10003;</span>
                      <span className="text-sm font-medium">{plan.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 bg-cream rounded-xl p-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    Prefer to Call?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Our admissions team is available 24/7 and can verify your
                    insurance over the phone in minutes.
                  </p>
                  <a
                    href="tel:+14809313617"
                    className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                  >
                    (480) 931-3617
                  </a>
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
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Common Questions
              </span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
                Insurance FAQ
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map(
              (faq) => (
                <AnimatedSection key={faq.name}>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
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
