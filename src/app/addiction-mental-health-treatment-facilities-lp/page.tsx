import type { Metadata } from "next";
import Image from "next/image";
import GetHelpForm from "@/components/forms/GetHelpForm";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema } from "@/lib/schema";

const PHONE_DISPLAY = "(480) 931-3617";
const PHONE_HREF = "tel:+14809313617";
const PAGE_URL =
  "https://desertrecoverycenters.com/addiction-mental-health-treatment-facilities-lp";

export const metadata: Metadata = {
  title:
    "Luxury Addiction & Mental Health Treatment in Arizona | Desert Recovery Centers",
  description:
    "Luxury addiction and mental health treatment in Arizona. Same-day admissions available. Insurance accepted. Joint Commission accredited. Call (480) 931-3617.",
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    question: "How fast can I be admitted to Desert Recovery Centers?",
    answer:
      "Same-day admissions are typically available. Call our admissions team at (480) 931-3617 and in most cases we can verify your insurance, complete a clinical assessment, and coordinate transportation to one of our Arizona facilities within hours.",
  },
  {
    question: "What does the admissions process look like?",
    answer:
      "Admission is a three-step process: (1) a free, confidential phone call where our admissions specialist listens to your situation, (2) a complimentary insurance verification and clinical pre-screen, and (3) a warm hand-off to the treatment team at the level of care that fits — detox, residential, PHP, or IOP.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "Desert Recovery Centers is in-network or works with most major commercial plans, including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, and TRICARE. We offer free insurance verification and will tell you your out-of-pocket cost before you commit to anything.",
  },
];

export default function AdsLandingPage() {
  return (
    <>
      <SchemaScript schema={getFAQSchema(faqs)} />

      <div className="min-h-screen bg-cream flex flex-col">
        {/* Minimal header — logo + phone only, no nav */}
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/branding/drc-logo-black.png"
                alt="Desert Recovery Centers"
                width={180}
                height={48}
                priority
                className="h-10 w-auto"
              />
            </div>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors"
              aria-label={`Call Desert Recovery Centers at ${PHONE_DISPLAY}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.27 1.06l-2.1 2.1a12 12 0 005.3 5.3l2.1-2.1a1 1 0 011.06-.27l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero + CTA */}
          <section className="relative">
            <div className="max-w-container mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-3">
                <p className="text-sage font-semibold uppercase tracking-wider text-sm mb-4">
                  Joint Commission Accredited · Arizona
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest font-semibold mb-5">
                  Luxury Addiction &amp; Mental Health Treatment in Arizona
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                  Same-day admissions available. Insurance accepted.{" "}
                  <a
                    href={PHONE_HREF}
                    className="text-sage font-semibold underline underline-offset-2"
                  >
                    Call now
                  </a>
                  .
                </p>

                <ul className="space-y-4 mb-10 max-w-xl">
                  {[
                    {
                      title: "Doctoral-level clinical care",
                      body:
                        "Every client is overseen by a PhD or MD-credentialed clinician — not a case manager.",
                    },
                    {
                      title: "10-bed intimate setting",
                      body:
                        "True small-group treatment at our flagship Arizona residences. No warehouse-style rehabs.",
                    },
                    {
                      title: "Dual diagnosis specialists",
                      body:
                        "Integrated addiction and mental health treatment — trauma, anxiety, depression, bipolar, and co-occurring disorders.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span
                        className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sage/15 text-sage flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-display text-lg text-forest font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest/90 text-white font-semibold text-base sm:text-lg px-7 py-4 rounded-xl transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.27 1.06l-2.1 2.1a12 12 0 005.3 5.3l2.1-2.1a1 1 0 011.06-.27l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                      />
                    </svg>
                    Call {PHONE_DISPLAY}
                  </a>
                  <p className="text-sm text-gray-500">
                    Confidential · HIPAA protected · 24/7 admissions
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 w-full">
                <div className="bg-forest/5 rounded-3xl p-2 shadow-lg">
                  <div className="text-center pt-6 px-6">
                    <h2 className="font-display text-2xl text-forest font-semibold mb-1">
                      Get Help Today
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      A specialist will reach out within the hour.
                    </p>
                  </div>
                  <GetHelpForm variant="lp" />
                </div>
              </div>
            </div>
          </section>

          {/* Trust seals */}
          <section className="bg-white border-y border-gray-100">
            <div className="max-w-container mx-auto px-6 py-10">
              <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
                Accredited &amp; Verified
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                <Image
                  src="/images/branding/joint-commission-seal.png"
                  alt="Joint Commission Gold Seal of Approval"
                  width={120}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
                <Image
                  src="/images/branding/legitscript-seal-25653576.png"
                  alt="LegitScript Certified"
                  width={120}
                  height={120}
                  className="h-24 w-auto object-contain"
                />
                <div
                  className="h-24 px-6 flex flex-col items-center justify-center border-2 border-forest rounded-lg bg-white"
                  role="img"
                  aria-label="TRICARE accepted"
                >
                  <span className="font-display text-2xl font-bold text-forest tracking-wide">
                    TRICARE
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">
                    Accepted
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-cream">
            <div className="max-w-3xl mx-auto px-6 py-14">
              <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold text-center mb-10">
                Admissions FAQ
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
                  >
                    <h3 className="font-display text-lg sm:text-xl text-forest font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Minimal footer — phone + legal only, no nav links */}
        <footer className="bg-forest text-white/80">
          <div className="max-w-container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Desert Recovery Centers. All
              rights reserved.
            </p>
            <a
              href={PHONE_HREF}
              className="font-semibold text-white hover:text-gold transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
