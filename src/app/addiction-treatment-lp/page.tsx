import type { Metadata } from "next";
import Image from "next/image";
import InsuranceVerificationForm from "@/components/forms/InsuranceVerificationForm";
import StickyCallBar from "@/components/StickyCallBar";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema } from "@/lib/schema";

const PHONE_DISPLAY = "(623) 305-0496";
const PHONE_HREF = "tel:+16233050496";
const PAGE_URL =
  "https://desertrecoverycenters.com/addiction-treatment-lp";

export const metadata: Metadata = {
  title: "Addiction Treatment in Arizona | Desert Recovery Centers",
  description:
    "Residential drug and alcohol treatment in Glendale and Scottsdale, Arizona. Doctoral-level clinical team, 24/7 admissions, detox coordinated through trusted partners, most commercial PPO insurance accepted. Joint Commission accredited. Call (623) 305-0496.",
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false },
};

const addictions = [
  "Alcohol addiction",
  "Cocaine addiction",
  "Heroin and opioid addiction",
  "Fentanyl addiction",
  "Methamphetamine addiction",
  "Prescription drug addiction",
  "Marijuana addiction",
  "Gambling addiction",
  "Sex addiction",
];

const trustPoints = [
  "Joint Commission Accredited",
  "Doctoral-Level Clinical Team",
  "Evidence-Based Therapies (CBT, DBT, EMDR)",
  "Dual Diagnosis Specialists",
  "Private, Upscale Facilities",
];

const steps = [
  {
    title: "Call or verify insurance",
    body: "Tell us what is going on. We listen and check your coverage.",
  },
  {
    title: "We build your plan",
    body: "Our clinical team designs care around your needs, including arranging detox if you need it first.",
  },
  {
    title: "You begin care",
    body: "We coordinate your admission to our Glendale or Scottsdale facility and guide you through every step.",
  },
];

const faqs = [
  {
    question: "Do you accept my insurance?",
    answer:
      "We work with most major commercial PPO plans, including Blue Cross Blue Shield, UnitedHealthcare, Aetna, and Cigna. Call us or verify your benefits online and we will tell you what your plan covers, often within the same conversation, at no cost.",
  },
  {
    question: "Do you provide detox?",
    answer:
      "Detox is not provided at our facilities. Our team coordinates medical detox through trusted partner providers, then welcomes you into our residential program once you are medically stable. We manage the hand-off so you are supported through every step.",
  },
  {
    question: "What happens when I call?",
    answer:
      "Our admissions team listens, answers your questions, and checks your insurance while you are on the phone, without pressure or judgment. If we miss your call, we call back within the hour, and if you reach us overnight, we call you first thing the next morning.",
  },
  {
    question: "Where are your facilities?",
    answer:
      "We have residential treatment facilities in Glendale and Scottsdale, Arizona, each intentionally small at 10 beds for individualized care.",
  },
];

export default function AddictionLandingPage() {
  return (
    <>
      <SchemaScript schema={getFAQSchema(faqs)} />
      <div className="min-h-screen bg-cream flex flex-col">
      {/* Minimal header - logo + phone only, no nav */}
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

      <div className="flex-1">
        {/* Hero + CTA */}
        <section className="relative">
          <div className="max-w-container mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-3">
              <p className="text-sage font-semibold uppercase tracking-wider text-sm mb-4">
                Accredited Residential Addiction Treatment
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest font-semibold mb-5">
                Addiction Treatment in Arizona
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                Residential drug and alcohol treatment in Glendale and
                Scottsdale, with a doctoral-level clinical team and 24/7
                admissions. We accept most commercial PPO insurance. Reach our
                admissions team any time, day or night.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
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
                <a
                  href="#verify-insurance"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-forest border-2 border-forest font-semibold text-base sm:text-lg px-7 py-4 rounded-xl transition-colors"
                >
                  Verify Your Insurance
                </a>
              </div>

              {/* Trust strip */}
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-forest">
                {[
                  "Joint Commission Accredited",
                  "LegitScript Certified",
                  "24/7 Admissions",
                  "Out-of-Network PPO",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-sage/15 text-sage flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3 h-3"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 w-full" id="verify-insurance">
              <div className="bg-forest/5 rounded-3xl p-2 shadow-lg scroll-mt-24">
                <div className="text-center pt-6 px-6">
                  <h2 className="font-display text-2xl text-forest font-semibold mb-1">
                    Verify Your Insurance
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    A specialist will reach out within the hour.
                  </p>
                </div>
                <InsuranceVerificationForm />
                <div className="flex items-center justify-center gap-6 px-6 pt-4 pb-6">
                  <Image
                    src="/images/branding/joint-commission-seal.png"
                    alt="Joint Commission Gold Seal of Approval"
                    width={72}
                    height={72}
                    className="h-16 w-auto object-contain"
                  />
                  <Image
                    src="/images/branding/legitscript-seal-25653576.png"
                    alt="LegitScript Certified"
                    width={72}
                    height={72}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - You Do Not Have to Do This Alone */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold mb-6">
              You Do Not Have to Do This Alone
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are reaching out for yourself or for someone you love,
              picking up the phone is the hardest step. Our admissions team is
              available day and night to listen, answer your questions, and walk
              you through your options without pressure or judgment. If we ever
              miss your call, we call back within the hour, and if you reach us
              overnight, we will call you first thing the next morning. We can
              check your insurance while you are on the phone, so you know what
              is covered before you decide anything.
            </p>
          </div>
        </section>

        {/* Section 3 - Addictions We Treat */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold mb-4">
              Addictions We Treat
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our doctoral-level clinical team provides residential treatment
              for adults facing:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {addictions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage/15 text-sage flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3"
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
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Many of the people we treat are facing addiction alongside a
              mental health condition. Our team treats both together, with one
              plan built around the whole person.
            </p>
          </div>
        </section>

        {/* Section 4 - Need Detox First? We Help Arrange It.
            DETOX RULE: detox is NOT provided on-site; it is coordinated
            through trusted partner providers only. Do not claim on-site detox. */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold mb-6">
              Need Detox First? We Help Arrange It
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Many people need to safely detox before residential treatment
              begins. While detox is not provided at our facilities, our team
              coordinates medical detox through trusted partner providers, then
              welcomes you into our residential program once you are medically
              stable. We manage the hand-off so you are supported through every
              step, from your first call to the day you arrive with us.
            </p>
          </div>
        </section>

        {/* Section 5 - A Smaller, More Personal Kind of Care */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold mb-6">
              A Smaller, More Personal Kind of Care
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our residential facilities in Glendale and Scottsdale are
              intentionally small, 10 beds each, so our clinical team knows
              every person by name and adjusts care as you progress. You get the
              attention of a private program with the accountability of a Joint
              Commission accredited organization. Co-founded by Dr. An Nguyen,
              DRC was built around one idea: treatment should feel personal,
              dignified, and grounded in evidence.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage/15 text-sage flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3"
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
                  <span className="text-forest font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6 - Find Out What Your Insurance Covers */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold mb-6">
              Find Out What Your Insurance Covers
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              We work with most major commercial PPO plans, including Blue Cross
              Blue Shield, UnitedHealthcare, Aetna, and Cigna. Call us or verify
              your benefits online, and we will tell you what your plan covers,
              often within the same conversation. There is no cost and no
              obligation to find out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#verify-insurance"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                Verify Your Insurance
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-forest font-semibold text-lg hover:text-gold transition-colors"
              >
                or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Section 7 - Getting Started Is Simple */}
        <section className="bg-cream">
          <div className="max-w-4xl mx-auto px-6 py-14">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold text-center mb-10">
              Getting Started Is Simple
            </h2>
            <ol className="grid sm:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <li key={step.title} className="text-center">
                  <span
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white font-display text-xl font-semibold"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="font-display text-lg text-forest font-semibold mb-2">
                    {step.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ - Common Questions */}
        <section className="bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-14">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold text-center mb-10">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="font-display text-lg sm:text-xl text-forest font-semibold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 - Help Is Available Right Now */}
        <section className="bg-cream">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold mb-5">
              Help Is Available Right Now
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Our admissions team is reachable 24 hours a day. One call is all
              it takes to understand your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest/90 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
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
              <a
                href="#verify-insurance"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-forest border-2 border-forest font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                Verify Your Insurance
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Minimal footer - phone + legal only, no nav links. Extra bottom padding
          on mobile so the sticky call bar never overlaps the copyright line. */}
      <footer className="bg-forest text-white/80">
        <div className="max-w-container mx-auto px-6 py-8 pb-24 md:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
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

      {/* Reusable mobile-only sticky tap-to-call. Same number/href as the page's
          main call buttons so CTM swaps every instance identically. */}
      <StickyCallBar phoneDisplay={PHONE_DISPLAY} phoneHref={PHONE_HREF} />
      </div>
    </>
  );
}
