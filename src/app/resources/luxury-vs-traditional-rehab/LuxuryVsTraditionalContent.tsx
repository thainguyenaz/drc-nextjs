"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = { q: string; a: string };

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const COMPARISON_ROWS: { label: string; luxury: string; traditional: string }[] = [
  {
    label: "Client-to-staff ratio",
    luxury: "Low (boutique, 10 beds max)",
    traditional: "High (30 to 100+ clients)",
  },
  {
    label: "Clinical team",
    luxury: "Doctoral-level psychologists and MDs",
    traditional: "Variable credentials",
  },
  {
    label: "Treatment plan",
    luxury: "Fully individualized, updated weekly",
    traditional: "Standardized protocols",
  },
  {
    label: "Setting",
    luxury: "Private residences, resort-style grounds",
    traditional: "Institutional or clinical settings",
  },
  {
    label: "Privacy",
    luxury: "High, discreet admissions",
    traditional: "Shared wards or dorms",
  },
  {
    label: "Amenities",
    luxury: "Holistic therapies, gourmet nutrition, TMS",
    traditional: "Basic programming",
  },
  {
    label: "Insurance",
    luxury: "OON commercial + in-network TriCare/TriWest",
    traditional: "Varies widely",
  },
  {
    label: "Accreditation",
    luxury: "Joint Commission Gold Seal",
    traditional: "Varies",
  },
];

export default function LuxuryVsTraditionalContent({ faqs }: { faqs: readonly FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-forest">
          <Image
            src="/images/general/DRC-TREATMENTS.jpg"
            alt="Luxury vs traditional rehab comparison — Desert Recovery Centers"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,43,30,0.92) 0%, rgba(28,43,30,0.78) 100%)",
          }}
        />
        <motion.div
          {...fadeUp}
          className="relative z-10 text-center max-w-container mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-medium">
              Resources
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Luxury Rehab vs Traditional Rehab: What&apos;s the Real Difference?
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Not all treatment is created equal. Here is what separates a luxury behavioral
            health program from a standard facility, and why it matters for your recovery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/insurance"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Verify Insurance
            </a>
            <a
              href="tel:+16233050496"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Call (623) 305-0496
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section 1 — What Makes Truly Luxury */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Real Difference
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Makes a Rehab Center Truly Luxury?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The term luxury rehab is often misunderstood. True luxury behavioral health
              treatment is not simply about high-end amenities or beautiful facilities. It is
              about the clinical depth behind the experience. At a genuine luxury rehab center,
              you will find doctoral-level clinical teams, low client-to-staff ratios, and
              individualized treatment plans that evolve with each client throughout their stay.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, our Arizona luxury rehab facilities maintain a maximum
              of 10 beds per location. This intentional intimacy means every client receives
              personalized attention, daily clinical contact, and a recovery environment free
              from the overcrowding that often defines standard treatment settings.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              When you choose a luxury rehab in Arizona, you are choosing a program where your
              comfort, privacy, and clinical progress are the priority, from the moment you
              arrive through every stage of your recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Comparison Table */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Side by Side
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Luxury Rehab vs Traditional Rehab: Side by Side
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-gold/20 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest text-white">
                    <th className="px-5 py-4 font-display text-sm font-semibold w-1/4">
                      Category
                    </th>
                    <th className="px-5 py-4 font-display text-sm font-semibold">
                      Luxury Rehab
                    </th>
                    <th className="px-5 py-4 font-display text-sm font-semibold">
                      Traditional Rehab
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-cream/60"}
                    >
                      <td className="px-5 py-4 text-forest font-semibold text-sm border-t border-gold/10 align-top">
                        {row.label}
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-sm border-t border-gold/10 align-top">
                        {row.luxury}
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-sm border-t border-gold/10 align-top">
                        {row.traditional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Depth */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Core Difference
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Clinical Depth: The Most Important Difference
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              The single biggest difference between luxury and standard rehab is the intensity
              and personalization of clinical care. This shows up in several concrete ways:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Staff-to-Client Ratios",
                  desc: "Standard facilities often operate with 30 or more beds, meaning therapists and psychiatrists divide their attention across large groups. Luxury programs like Desert Recovery Centers maintain intentionally small program sizes, which allows clinicians to know each client deeply, not just their diagnosis, but their story, their triggers, and what motivates their recovery.",
                },
                {
                  title: "Frequency of Individual Therapy",
                  desc: "In many standard programs, clients may receive one individual therapy session per week, with the bulk of treatment delivered through group sessions. Luxury programs typically offer multiple individual sessions per week with doctoral-level clinicians, providing space for the deeper therapeutic work that group settings cannot always accommodate.",
                },
                {
                  title: "Psychiatrist Access",
                  desc: "Medication management is critical for many people in early recovery, especially those with co-occurring mental health conditions. Standard programs may have a psychiatrist available one or two days per week. Luxury programs generally provide more frequent psychiatric oversight, allowing for faster medication adjustments and more responsive care.",
                },
                {
                  title: "Dual Diagnosis Capability",
                  desc: "Addiction rarely exists in isolation. Depression, anxiety, PTSD, bipolar disorder, and other conditions frequently co-occur with substance use disorders. While some standard programs offer basic dual diagnosis services, luxury programs are more likely to have the specialized clinical staff needed to treat complex co-occurring conditions simultaneously and comprehensively.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Clinical Tools, Not Just Perks
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Amenities: More Than a Sales Pitch
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Pools, fitness centers, gourmet meals, and outdoor recreation might seem like
              marketing fluff. But when you understand the science of addiction recovery, these
              amenities serve real clinical purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Exercise has been shown to reduce cravings, improve mood, and support neurological repair during early recovery",
                "Proper nutrition helps restore neurochemistry disrupted by substance use, gourmet meals built around recovery nutrition are not indulgence, they are medicine",
                "Recreational activities like swimming, hiking, and sports help clients build sober social skills and rediscover enjoyment without substances",
                "Yoga, meditation, and mindfulness spaces support nervous system regulation and emotional processing",
                "Comfortable outdoor spaces encourage clients to spend time in nature, which research links to reduced anxiety and improved mental clarity",
                "Art and music therapy rooms provide creative expression outlets for processing emotions that are difficult to verbalize",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              The best luxury programs integrate these elements into the treatment plan itself,
              not as optional extras, but as components of a holistic recovery experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Environment Matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Environment and Outcomes
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Why Environment Matters in Recovery
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Recovery research consistently shows that treatment setting plays a significant
              role in outcomes. Clients in lower-stress, more private environments demonstrate
              higher treatment completion rates and better long-term sobriety outcomes. The
              environment itself becomes part of the therapeutic process.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Arizona&apos;s luxury rehab centers like Desert Recovery Centers are designed
              around this principle. Our Glendale and Scottsdale residential facilities offer
              private accommodations, serene desert surroundings, and a calm atmosphere that
              supports the deep clinical work of recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy and Discretion */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Confidentiality Matters
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Privacy and Discretion
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              For many people considering rehab, privacy is a significant concern. Executives
              worried about professional reputation, healthcare workers navigating licensing
              implications, public figures concerned about media exposure, and parents who
              don&apos;t want to alarm their children, all of them need discretion.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Standard facilities, with their larger census sizes, inherently offer less privacy.
              More clients means more people aware of your presence, more shared spaces, and more
              opportunities for confidentiality to be compromised, not through malice, but simply
              through volume.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Luxury programs with small census sizes naturally provide greater privacy. Fewer
              clients means fewer people know you&apos;re there. Private rooms mean your space is
              your own. And smaller group therapy sessions create a more intimate, controlled
              environment where vulnerability feels safer. For professionals whose careers depend
              on discretion, this is not a luxury, it is a necessity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outcomes and Aftercare */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Long-Term Recovery
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Outcomes and Aftercare
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Research in addiction treatment consistently suggests that longer stays in treatment
              are associated with improved long-term outcomes. While a 28-day standard program can
              begin the recovery process, many clinical experts recommend 60 to 90 days for more
              durable results, particularly for individuals with co-occurring mental health
              conditions or long histories of substance use.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Luxury programs are more likely to support extended stays, both because their
              environments make longer treatment more sustainable and because their clinical
              models are designed for deeper, more gradual therapeutic work.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Equally important is what happens after discharge. The best luxury programs invest
              heavily in aftercare planning, step-down recommendations, outpatient referrals,
              therapist matching, alumni support networks, and ongoing check-ins. Recovery
              doesn&apos;t end when treatment does, and comprehensive aftercare can make the
              difference between sustained sobriety and relapse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Desert Recovery Centers Compares */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Arizona&apos;s Choice
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              How Desert Recovery Centers Compares
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              National luxury rehab brands like All Points North (APN) offer quality care, and we
              respect the work they do. But for Arizona residents and families, Desert Recovery
              Centers offers distinct advantages that national chains often cannot match.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Smaller Program Sizes",
                  desc: "DRC maintains intentionally small client cohorts across our Arizona facilities. This means your clinical team does not just know your chart, they know you. Treatment plans are genuinely individualized, not templated.",
                },
                {
                  title: "Local Clinical Leadership",
                  desc: "Our Clinical Director, Dr. An Nguyen, is on-site and actively involved in treatment planning. You are not being treated by rotating staff or remote oversight, you are receiving care from a consistent, invested clinical team.",
                },
                {
                  title: "Arizona-Rooted Aftercare",
                  desc: "Because DRC is based in Arizona, our aftercare network, therapists, psychiatrists, support groups, sober living, is local. When you transition out of residential care, you are stepping into a recovery community we have helped build, not being handed a generic referral list for a state you do not live in.",
                },
                {
                  title: "Multiple Facility Options",
                  desc: "With locations across the Phoenix metropolitan area, DRC offers flexibility in setting and environment while maintaining consistent clinical standards across every facility.",
                },
                {
                  title: "Comparable Clinical Depth",
                  desc: "DRC provides the same evidence-based therapies, psychiatric oversight, and dual diagnosis treatment that national luxury programs offer, with the added benefit of a smaller, more personal environment where you will not get lost in the system.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gold/30 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-forest text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-sage flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div {...fadeUp} className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
            Ready to Experience Luxury Addiction Treatment in Arizona?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Speak with our admissions team today. Most clients begin treatment within 48
            hours of their first call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/insurance"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Verify Insurance
            </a>
            <a
              href="tel:+16233050496"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Call (623) 305-0496
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
