import type { Metadata } from "next";
import Image from "next/image";
import InsuranceVerificationForm from "@/components/forms/InsuranceVerificationForm";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import GoogleReviews from "@/components/GoogleReviews";
import AnimatedCounter from "@/components/AnimatedCounter";
import LpFacilityGallery from "@/components/lp/LpFacilityGallery";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema } from "@/lib/schema";

const PHONE_DISPLAY = "(623) 305-0496";
const PHONE_HREF = "tel:+16233050496";
const PAGE_URL =
  "https://desertrecoverycenters.com/addiction-mental-health-treatment-facilities-lp";

export const metadata: Metadata = {
  title:
    "Luxury Addiction & Mental Health Treatment in Arizona | Desert Recovery Centers",
  description:
    "Luxury addiction and mental health treatment in Arizona. Same-day admissions available. Out-of-network commercial insurance and in-network TriCare/TriWest accepted. Joint Commission accredited. Call (623) 305-0496.",
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false },
};

const faqs = [
  {
    question: "How fast can I be admitted to Desert Recovery Centers?",
    answer:
      "Same-day admissions are typically available. Call our admissions team at (623) 305-0496 and in most cases we can verify your insurance, complete a clinical assessment, and coordinate transportation to one of our Arizona facilities within hours.",
  },
  {
    question: "What does the admissions process look like?",
    answer:
      "Admission is a three-step process: (1) a free, confidential phone call where our admissions specialist listens to your situation, (2) a complimentary insurance verification and clinical pre-screen, and (3) a warm hand-off to the treatment team at the level of care that fits: detox, residential, PHP, or IOP.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "For commercial insurance, Desert Recovery Centers works on an out-of-network basis with major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others. Many out-of-network plans provide significant coverage for our level of care. We are also in-network with TriCare and TriWest, and offer cash-pay options. We offer free insurance verification and will tell you your out-of-pocket cost before you commit to anything.",
  },
];

const heroBullets = [
  {
    title: "Doctoral-level clinical care",
    body:
      "Every client is overseen by a PhD or MD-credentialed clinician, not a case manager.",
  },
  {
    title: "10-bed intimate setting",
    body:
      "True small-group treatment at our flagship Arizona residences. No warehouse-style rehabs.",
  },
  {
    title: "Dual diagnosis specialists",
    body:
      "Integrated addiction and mental health treatment: trauma, anxiety, depression, bipolar, and co-occurring disorders.",
  },
];

const stats = [
  {
    value: 970,
    suffix: "M+",
    label: "People worldwide live with a mental health condition",
    source: "World Health Organization",
  },
  {
    value: 21.5,
    suffix: "M",
    label: "U.S. adults live with co-occurring substance use and mental illness",
    source: "SAMHSA, 2023 NSDUH",
  },
  {
    value: 10,
    suffix: "",
    label: "Beds maximum per residential facility, intentionally intimate care",
    source: "Desert Recovery Centers",
  },
];

const locations = [
  {
    name: "Glendale Recovery Center",
    image: "/images/glendale/Glendale-Front.jpg",
    alt: "Desert Recovery Centers Glendale residential treatment facility in Arizona",
    href: "/locations/glendale",
    amenities: [
      { icon: "/images/icons/icon-drc-location-sqft.svg", label: "7,500 sq ft" },
      { icon: "/images/icons/icon-drc-location-activities.svg", label: "Basketball and tennis" },
      { icon: "/images/icons/icon-drc-location-spa.svg", label: "Massage" },
      { icon: "/images/icons/icon-drc-location-gym.svg", label: "Gym" },
    ],
  },
  {
    name: "Scottsdale Recovery Center",
    image:
      "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
    alt: "Desert Recovery Centers Scottsdale luxury residential treatment facility in Arizona",
    href: "/locations/scottsdale",
    amenities: [
      { icon: "/images/icons/icon-drc-location-pool.svg", label: "Pool" },
      { icon: "/images/icons/icon-drc-location-activities.svg", label: "Basketball and tennis" },
      { icon: "/images/icons/icon-drc-location-spa.svg", label: "Massage" },
      { icon: "/images/icons/icon-drc-location-gym.svg", label: "Gym" },
    ],
  },
];

const insurers = [
  { name: "Aetna", src: "/images/insurance-logos/aetna.png" },
  { name: "Cigna", src: "/images/insurance-logos/cigna.png" },
  { name: "Blue Cross Blue Shield", src: "/images/insurance-logos/bcbs.png" },
  { name: "UnitedHealthcare", src: "/images/insurance-logos/raw/uhc.svg" },
  { name: "Humana", src: "/images/insurance-logos/raw/humana.svg" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

export default function AdsLandingPage() {
  return (
    <>
      <SchemaScript schema={getFAQSchema(faqs)} />

      <div className="min-h-screen bg-cream flex flex-col">
        {/* Minimal header: logo + Call button, no nav */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
            <Image
              src="/images/branding/drc-logo-black.png"
              alt="Desert Recovery Centers"
              width={180}
              height={48}
              priority
              className="h-10 w-auto"
            />
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors"
              aria-label={`Call Desert Recovery Centers at ${PHONE_DISPLAY}`}
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </header>

        <div className="flex-1">
          {/* Hero + inline form: the conversion zone, above the fold */}
          <section className="relative">
            <div className="max-w-container mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-3">
                <p className="text-sage font-semibold uppercase tracking-wider text-sm mb-4">
                  Joint Commission Accredited &middot; Arizona
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-forest font-semibold mb-5">
                  Luxury Addiction and Mental Health Treatment in Arizona
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                  A holistic approach to healing the mind, body, and spirit. Same-day
                  admissions available, with out-of-network commercial insurance and
                  in-network TriCare and TriWest accepted.{" "}
                  <span className="text-gold font-semibold">Call now.</span>
                </p>

                <ul className="space-y-4 mb-10 max-w-xl">
                  {heroBullets.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span
                        className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sage/15 text-sage flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-display text-lg text-forest font-semibold">
                          {item.title}
                        </p>
                        <p className="text-gray-600 leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest/90 text-white font-semibold text-base sm:text-lg px-7 py-4 rounded-xl transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call {PHONE_DISPLAY}
                  </a>
                  <p className="text-sm text-gray-500">
                    Confidential &middot; HIPAA protected &middot; 24/7 admissions
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

          {/* Trust seals strip */}
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
                  aria-label="TRICARE and TriWest accepted"
                >
                  <span className="font-display text-2xl font-bold text-forest tracking-wide">
                    TRICARE
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">
                    &amp; TriWest Accepted
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Clinical video: facade embed, no autoplay */}
          <section className="bg-cream">
            <div className="max-w-container mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                  Meet Our Clinical Team
                </span>
                <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-5 leading-tight">
                  Care Led by Doctoral Clinicians
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our clinical psychologists, Dr. An Nguyen and Dr. Jonathan Shelton,
                  lead our addiction recovery and mental health team. Most of our staff
                  have walked the path of recovery themselves, and that perspective is
                  invaluable for connecting with and helping our clients.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Watch a short message about how we approach treatment, then call to
                  speak with an admissions specialist directly.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-white font-semibold text-base px-6 py-3.5 rounded-xl transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <YouTubeEmbed
                youtubeId="bqDzL4O3WDE"
                title="Desert Recovery Centers, a message from Dr. An Nguyen"
              />
            </div>
          </section>

          {/* Facility gallery with lightbox */}
          <LpFacilityGallery />

          {/* Google Reviews: Glendale and Scottsdale only */}
          <GoogleReviews include={["Glendale", "Scottsdale"]} />

          {/* Location cards: Glendale and Scottsdale */}
          <section className="bg-cream">
            <div className="max-w-container mx-auto px-6 py-20 md:py-24">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                  Our Locations
                </span>
                <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold leading-tight">
                  Arizona Residences in Glendale and Scottsdale
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={loc.image}
                        alt={loc.alt}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <h3 className="font-display text-2xl text-forest font-semibold mb-5">
                        {loc.name}
                      </h3>
                      <ul className="grid grid-cols-2 gap-4 mb-7">
                        {loc.amenities.map((a) => (
                          <li key={a.label} className="flex items-center gap-3">
                            <Image
                              src={a.icon}
                              alt=""
                              width={28}
                              height={28}
                              className="w-7 h-7 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-gray-700 text-sm font-medium">
                              {a.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={loc.href}
                        className="mt-auto inline-flex items-center justify-center gap-2 bg-sage hover:bg-forest text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                      >
                        View {loc.name.split(" ")[0]}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats: You Are Not Alone, sourced figures */}
          <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="max-w-container mx-auto px-6">
              <div className="text-center mb-14 max-w-2xl mx-auto">
                <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
                  Hope and Help
                </span>
                <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
                  You Are Not Alone
                </h2>
                <p className="text-white/60">
                  Behavioral health needs are common, and recovery is possible. Here is
                  the scale of the need, and how Desert Recovery Centers structures care
                  to meet it.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-gold font-display text-5xl md:text-6xl font-bold mb-3">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                      {stat.label}
                    </p>
                    <p className="text-white/40 text-xs mt-2">{stat.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Insurance logos row */}
          <section className="bg-white">
            <div className="max-w-container mx-auto px-6 py-16 md:py-20">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4 leading-tight">
                  We Accept Most Private Insurance Policies
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our priority is getting you the help you need. We accept most private
                  insurance policies on an out-of-network basis, and we offer cash-pay
                  and special financing options. We do not accept AHCCCS or Medicare.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
                {insurers.map((insurer) => (
                  <Image
                    key={insurer.name}
                    src={insurer.src}
                    alt={insurer.name}
                    width={150}
                    height={56}
                    className="h-10 sm:h-12 w-auto max-w-[88px] sm:max-w-[104px] object-contain"
                  />
                ))}
              </div>
              <p className="text-center text-gray-400 text-xs mt-10 max-w-3xl mx-auto leading-relaxed">
                Logos shown are trademarks of their respective owners and do not imply
                endorsement, partnership, or in-network status. Desert Recovery Centers
                is in-network with TriCare and TriWest only; commercial insurance is
                processed on an out-of-network basis. Our admissions team will verify
                your specific benefits at no cost.
              </p>
              <div className="text-center mt-8">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Verify My Insurance: {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </section>

          {/* Admissions FAQ */}
          <section className="bg-cream">
            <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
              <h2 className="font-display text-3xl sm:text-4xl text-forest font-semibold text-center mb-10">
                Admissions FAQ
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                    <h3 className="font-display text-lg sm:text-xl text-forest font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Minimal footer: logo + phone */}
        <footer className="bg-forest text-white/80">
          <div className="max-w-container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm">
            <Image
              src="/images/branding/drc-logo-white.png"
              alt="Desert Recovery Centers"
              width={160}
              height={42}
              className="h-9 w-auto"
            />
            <p className="order-last sm:order-none text-white/50 text-center">
              &copy; {new Date().getFullYear()} Desert Recovery Centers. All rights reserved.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-gold transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
