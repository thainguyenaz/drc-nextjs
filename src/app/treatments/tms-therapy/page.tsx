"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { InlineFAQSchema } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import TMSVideoSection from "./TMSVideoSection";

/* ─── Data ───────────────────────────────────────────────────────────── */

const sessionDetails = [
  "Sessions last as little as 19 minutes",
  "5 sessions per week for 4 to 6 weeks",
  "No sedation or anesthesia required",
  "No recovery time, return to normal activities immediately",
  "Performed in our comfortable outpatient setting",
];

const candidateReasons = [
  "You have been diagnosed with Major Depressive Disorder (MDD)",
  "Antidepressant medications have not provided adequate relief",
  "You have tried one or more antidepressant medications without success",
  "You experience significant side effects from antidepressant medications",
  "You prefer a drug-free treatment approach",
  "You have anxiety symptoms alongside depression (NeuroStar is FDA-cleared for anxious depression)",
  "You have OCD (NeuroStar is FDA-cleared as adjunct treatment for OCD)",
  "You are between ages 15 and 21 with MDD (NeuroStar is the only FDA-cleared TMS for adolescents)",
];

const notCandidate = [
  "You have metal implants in or near your head",
  "You have a history of seizures",
  "You have a cochlear implant or implanted brain stimulator",
];

const differentiators = [
  {
    title: "FDA-Cleared",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    body: "The only TMS system FDA-cleared for MDD, anxious depression, OCD, and adolescents ages 15 and older",
  },
  {
    title: "Largest Clinical Dataset",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    body: "Backed by over 65 peer-reviewed studies and the world's largest depression outcomes registry with data from over 17,700 patients",
  },
  {
    title: "Drug-Free",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    body: "No medication, no systemic side effects, no dependency risk. Focused treatment at the source of depression",
  },
  {
    title: "Proven Durability",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    body: "Benefits demonstrated to last over 12 months following acute treatment in naturalistic clinical studies",
  },
  {
    title: "No Downtime",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    body: "Sessions take as little as 19 minutes. Patients return to normal activities immediately after each session",
  },
  {
    title: "Insurance Coverage",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    body: "TMS therapy is typically covered by most commercial insurance plans on an out-of-network basis. Our admissions team will verify your specific TMS benefits at no cost.",
  },
];

const faqs = [
  {
    q: "What is TMS therapy and how does it differ from other treatments?",
    a: "TMS stands for Transcranial Magnetic Stimulation. Unlike antidepressant medications which affect the entire body, TMS delivers focused magnetic pulses directly to the region of the brain involved in mood regulation. It produces no systemic side effects and requires no sedation or recovery time.",
  },
  {
    q: "Is TMS covered by insurance?",
    a: "TMS therapy is typically covered by most commercial insurance plans on an out-of-network basis. Desert Recovery Centers is in-network with TriCare and TriWest, and offers cash-pay options. Note: we do not accept Medicare or Medicaid. Coverage varies by plan. Our admissions team will verify your specific TMS benefits at no cost.",
  },
  {
    q: "How long does a TMS treatment course take?",
    a: "A standard TMS treatment course consists of sessions 5 days per week over 4 to 6 weeks. Each session takes as little as 19 minutes, and you can return to your normal activities immediately afterward.",
  },
  {
    q: "Can TMS be combined with my current therapy or medication?",
    a: "Yes. TMS is designed to work alongside other treatments including psychotherapy, medication, and residential programs. At DRC, TMS will integrate directly with our clinical programs for a comprehensive treatment approach.",
  },
  {
    q: "Is TMS safe?",
    a: "NeuroStar TMS has been delivered in over 8.2 million treatments worldwide. The most common side effect is mild scalp discomfort or headache during treatment that typically resolves quickly. Serious side effects are rare. Our clinical team will evaluate your full medical history before recommending TMS.",
  },
  {
    q: "Is NeuroStar TMS therapy available now at Desert Recovery Centers?",
    a: "Yes. NeuroStar TMS therapy is now available at our Phoenix outpatient center at 4160 N. 108th Ave, Phoenix, AZ 85037. Call (602) 905-8070 to schedule your initial consultation. Most patients begin treatment within one to two weeks of their first call.",
  },
] as const;

/* ─── Brain Pulse SVG ────────────────────────────────────────────────── */

function BrainDiagram() {
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[400px] mx-auto" aria-label="Animated diagram showing TMS magnetic pulses targeting the prefrontal cortex">
      {/* Brain outline */}
      <g fill="none" stroke="#4A7C59" strokeWidth="2">
        {/* Left hemisphere */}
        <path d="M120 280 C80 260, 50 220, 50 180 C50 120, 80 80, 130 60 C160 48, 190 50, 200 55" opacity="0.6" />
        <path d="M120 280 C100 270, 85 250, 80 230" opacity="0.4" />
        {/* Right hemisphere */}
        <path d="M280 280 C320 260, 350 220, 350 180 C350 120, 320 80, 270 60 C240 48, 210 50, 200 55" opacity="0.6" />
        <path d="M280 280 C300 270, 315 250, 320 230" opacity="0.4" />
        {/* Brain folds */}
        <path d="M140 120 C160 100, 180 110, 200 100 C220 90, 240 100, 260 120" opacity="0.3" />
        <path d="M130 160 C150 140, 170 150, 200 140 C230 130, 250 140, 270 160" opacity="0.3" />
        <path d="M125 200 C145 180, 175 190, 200 185 C225 180, 255 190, 275 200" opacity="0.3" />
        <path d="M130 240 C150 225, 175 230, 200 225 C225 220, 255 230, 270 240" opacity="0.3" />
        {/* Cerebellum */}
        <path d="M160 290 C170 310, 200 320, 200 320 C200 320, 230 310, 240 290" opacity="0.4" />
        {/* Brain stem */}
        <path d="M190 310 C190 330, 195 350, 200 360 C205 350, 210 330, 210 310" opacity="0.4" />
      </g>

      {/* Prefrontal cortex highlight area */}
      <ellipse cx="160" cy="100" rx="45" ry="35" fill="#C4973A" opacity="0.15">
        <animate attributeName="opacity" values="0.08;0.2;0.08" dur="2.5s" repeatCount="indefinite" />
      </ellipse>

      {/* TMS coil */}
      <g transform="translate(100, 20)">
        <rect x="0" y="0" width="60" height="22" rx="6" fill="#1C2B1E" stroke="#C4973A" strokeWidth="1.5" />
        <text x="30" y="15" textAnchor="middle" fill="#C4973A" fontSize="8" fontFamily="sans-serif" fontWeight="600">TMS</text>
      </g>

      {/* Magnetic pulse lines */}
      <g stroke="#C4973A" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M130 42 L145 70" opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="1.8s" repeatCount="indefinite" begin="0s" />
        </path>
        <path d="M130 42 L155 75" opacity="0" strokeDasharray="4 3">
          <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
        </path>
        <path d="M130 42 L140 78" opacity="0" strokeDasharray="2 4">
          <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
        </path>
      </g>

      {/* Pulse rings at target */}
      <circle cx="155" cy="95" r="8" fill="none" stroke="#C4973A" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="8;25" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="95" r="8" fill="none" stroke="#C4973A" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="8;25" dur="2s" repeatCount="indefinite" begin="0.7s" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" begin="0.7s" />
      </circle>

      {/* Neuron activity dots */}
      {[
        { cx: 145, cy: 85, d: "0.2s" },
        { cx: 165, cy: 100, d: "0.8s" },
        { cx: 150, cy: 110, d: "1.4s" },
        { cx: 170, cy: 90, d: "0.5s" },
        { cx: 140, cy: 105, d: "1.1s" },
      ].map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="#C4973A" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" begin={dot.d} />
          <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin={dot.d} />
        </circle>
      ))}

      {/* Labels */}
      <text x="200" y="390" textAnchor="middle" fill="#4A7C59" fontSize="11" fontFamily="sans-serif" opacity="0.7">
        Prefrontal Cortex Stimulation
      </text>
    </svg>
  );
}

/* ─── Page Component ─────────────────────────────────────────────────── */

export default function TMSTherapyPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SchemaScript schema={[
        {
          "@context": "https://schema.org",
          "@type": "MedicalTherapy",
          "@id": "https://desertrecoverycenters.com/treatments/tms-therapy#therapy",
          "name": "NeuroStar TMS Therapy",
          "alternateName": "Transcranial Magnetic Stimulation",
          "description": "FDA-cleared non-invasive brain stimulation therapy for major depressive disorder, anxious depression, OCD, and adolescents ages 15 and older. Available at Desert Recovery Centers Phoenix.",
          "url": "https://desertrecoverycenters.com/treatments/tms-therapy",
          "recognizingAuthority": { "@type": "Organization", "name": "U.S. Food and Drug Administration", "url": "https://www.fda.gov" },
          "legalStatus": "FDA Cleared",
          "relevantSpecialty": "Psychiatry",
          "study": [
            { "@type": "MedicalStudy", "name": "NeuroStar Outcomes Registry", "description": "83% of patients experienced measurable improvement, 62% achieved full remission in real-world outcomes study of over 8.2 million treatments." },
            { "@type": "MedicalStudy", "name": "NIMH-Funded Randomized Controlled Trial", "description": "Patients treated with NeuroStar were 4 times more likely to achieve remission compared to sham treatment." },
          ],
          "availableAtOrFrom": {
            "@type": "MedicalClinic",
            "name": "Desert Recovery Centers Phoenix PHP / IOP",
            "address": { "@type": "PostalAddress", "streetAddress": "4160 N. 108th Ave", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85037" },
            "telephone": "+16029058070",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://desertrecoverycenters.com" },
            { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://desertrecoverycenters.com/treatments" },
            { "@type": "ListItem", "position": 3, "name": "TMS Therapy", "item": "https://desertrecoverycenters.com/treatments/tms-therapy" },
          ],
        },
      ]} />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0 }}
          className="absolute inset-0 bg-forest"
          style={{
            backgroundImage: "url(/images/general/DRC-Treatment-Therapies-BG-Fade.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,43,30,0.93) 0%, rgba(28,43,30,0.8) 100%)",
          }}
        />
        <div className="relative z-10 text-center max-w-container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Now Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold font-body text-xs tracking-[0.25em] uppercase font-semibold">
                Now Available at Our Phoenix Center
              </span>
            </motion.div>

            <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center gap-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/branding/neurostar-logo.svg"
                  alt="NeuroStar Advanced TMS Therapy"
                  width={400}
                  height={104}
                  className="object-contain h-[84px] md:h-[104px] w-auto brightness-0 invert"
                />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                >
                  TMS Therapy
                </motion.span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.45 }}
                className="block text-gold/90 mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold"
              >
                at Desert Recovery Centers
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="text-white/70 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4"
            >
              FDA-cleared, drug free, non invasive treatment for depression, anxious depression, and OCD. Now available at our Phoenix outpatient center. Out-of-network commercial insurance and in-network TriCare/TriWest accepted. Sessions as short as 19 minutes.
            </motion.p>

            {/* Certified NeuroStar Provider Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5 mb-10"
            >
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Certified NeuroStar Provider</span>
            </motion.div>
          </motion.div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+16029058070"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Call (602) 905-8070
            </motion.a>
            <motion.a
              href="/insurance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Verify Insurance Free
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Treatment Room Video ──────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-forest">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 py-16 md:py-24"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/4yWqQ_VVzgE?start=141&rel=0&modestbranding=1"
              title="NeuroStar TMS Therapy, How It Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-white/60 font-body text-sm tracking-wide text-center mt-6">
            See how NeuroStar TMS therapy works, FDA-cleared, non-invasive treatment for depression
          </p>
        </motion.div>
      </section>

      {/* ── What Is TMS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <span className="text-sage font-body text-xs tracking-[0.2em] uppercase font-medium">
                    The Science
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
                  How NeuroStar TMS Works
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="text-forest/70 font-body leading-relaxed mb-8"
              >
                Transcranial Magnetic Stimulation uses focused magnetic pulses,
                similar to an MRI, to stimulate the specific area of the brain
                responsible for mood regulation. When depression takes hold, the
                connections in this region become underactive. NeuroStar TMS
                reawakens those connections, producing lasting changes in
                neurotransmitter levels without medication and without systemic
                side effects.
              </motion.p>

              {/* Session Details Box */}
              <div className="bg-cream rounded-2xl p-6 border border-gold/10">
                <ul className="space-y-3">
                  {sessionDetails.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-start gap-3 text-forest font-body text-sm"
                    >
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className="flex justify-center"
            >
              <BrainDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Clinical Results ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold font-body text-xs tracking-[0.2em] uppercase font-medium">
                Clinical Evidence
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
              Results That Speak for Themselves
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                value: 83,
                suffix: "%",
                label:
                  "of patients who completed a full NeuroStar treatment cycle experienced measurable improvement in depression symptoms",
              },
              {
                value: 62,
                suffix: "%",
                label:
                  "achieved full remission, meaning their depression effectively went away",
              },
              {
                value: 4,
                suffix: "x",
                label:
                  "more likely to achieve remission compared to sham treatment in NIMH-funded independent clinical trial",
              },
              {
                value: 8.2,
                suffix: "M+",
                isDecimal: true,
                label:
                  "NeuroStar treatments delivered worldwide, backed by the largest clinical dataset of any TMS system",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.92 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,0,0,0.15)" }}
                className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-gold font-display text-5xl md:text-6xl font-bold mb-3">
                  {stat.isDecimal ? (
                    <span>8.2<span className="text-4xl">M+</span></span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-cream/40 text-xs text-center mt-12 font-body">
            Source: NeuroStar Outcomes Registry, NIMH-funded randomized controlled
            trial, real-world outcomes study
          </p>
        </div>
      </section>

      {/* ── Who Benefits ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
                Who Is a Candidate for TMS Therapy?
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-forest/70 font-body leading-relaxed mb-8"
            >
              If you have struggled with depression and have not found adequate
              relief from antidepressant medications, TMS therapy may be the
              breakthrough you have been waiting for. You may be a good candidate
              if:
            </motion.p>

            <ul className="space-y-3 mb-12">
              {candidateReasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ x: 6, backgroundColor: "rgba(250,247,242,0.8)" }}
                  className="flex items-start gap-3 text-forest font-body group relative rounded-lg px-4 py-3 -mx-4 transition-colors cursor-default"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {reason}
                </motion.li>
              ))}
            </ul>

            {/* Not a candidate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="bg-cream rounded-2xl p-8 border border-gold/10"
            >
              <h3 className="font-display text-xl text-forest font-semibold mb-4">
                TMS May Not Be Right For You If:
              </h3>
              <ul className="space-y-3 mb-4">
                {notCandidate.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-forest/70 font-body text-sm">
                    <svg className="w-5 h-5 text-forest/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {reason}
                  </li>
                ))}
              </ul>
              <p className="text-forest/50 font-body text-sm italic">
                Our clinical team will conduct a thorough medical evaluation to
                determine if TMS is appropriate for your specific situation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why NeuroStar ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
              Why We Chose NeuroStar
            </h2>
            <p className="text-forest/70 font-body max-w-2xl mx-auto leading-relaxed">
              At Desert Recovery Centers, we do not add treatments to our program
              without rigorous clinical evaluation. We chose NeuroStar because the
              evidence is unmatched.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {differentiators.map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 border border-transparent hover:border-gold/40 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="w-12 h-12 rounded-xl bg-forest/5 flex items-center justify-center text-sage group-hover:text-gold transition-colors duration-300 mb-4">
                  {card.icon}
                </div>
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-forest/60 font-body text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our NeuroStar Suite ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Phoenix TMS Suite
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
                The Same Technology. A Familiar Setting.
              </h2>
              <p className="text-forest/70 font-body leading-relaxed">
                Our Phoenix outpatient center at 4160 N. 108th Ave houses a dedicated NeuroStar treatment suite. You come in for your session, sit in the comfortable treatment chair, complete your 19 minutes, and go about your day. No waiting room full of strangers. No clinical sterility. Just a focused, quiet space designed for exactly this purpose, staffed by a team that knows your name and your treatment plan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/tms/neurostar-treatment-chair.webp"
                alt="NeuroStar Advanced TMS therapy treatment chair at Desert Recovery Centers Phoenix outpatient center"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Download Brochures ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Patient Resources
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-3">
              Download Our TMS Brochures
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Learn everything you need to know about NeuroStar TMS therapy before your first appointment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.a
              href="https://www.dropbox.com/scl/fi/vtiyuqb7g3x5ol2ptbkxc/NeuroStar-Brochure-for-Adults.pdf?rlkey=t0hd593i95eq28lmnoe4r8ud5&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              data-brochure="adult"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-xl p-6 border border-gray-100 block transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-forest font-semibold mb-2">Adult TMS Brochure</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Complete guide to NeuroStar TMS therapy for adults with depression, anxious depression, and OCD.</p>
              <span className="text-gold font-semibold text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PDF
              </span>
            </motion.a>

            <motion.a
              href="https://www.dropbox.com/scl/fi/7mqo34090zve4u1zd582t/NeuroStar-Brochure-for-Adolescent.pdf?rlkey=sqbhteu9j3lx09b84y7ci2jak&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              data-brochure="adolescent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-xl p-6 border border-gray-100 block transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-forest font-semibold mb-2">Adolescent TMS Brochure</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Guide to NeuroStar TMS therapy for adolescents ages 15 and older with treatment resistant depression.</p>
              <span className="text-gold font-semibold text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PDF
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Patient Video Testimonials ────────────────────────── */}
      <TMSVideoSection />

      {/* ── How It Complements DRC Treatment ──────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-sage font-body text-xs tracking-[0.2em] uppercase font-medium">
                Integrated Care
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
              TMS as Part of Your Complete Recovery
            </h2>
            <p className="text-forest/70 font-body leading-relaxed mb-6">
              At Desert Recovery Centers, we have always believed that lasting
              recovery requires treating the whole person. TMS therapy will
              integrate seamlessly with our existing clinical programs, including
              CBT, DBT, EMDR, BridgeWork&trade;, and dual diagnosis treatment. For
              clients whose depression has not fully responded to therapy alone, TMS
              offers a powerful neurological complement to the clinical work already
              underway.
            </p>
            <p className="text-forest font-body font-medium italic">
              This is not a replacement for therapy. It is what makes therapy more
              accessible when the brain&apos;s circuitry has been holding you back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TMS Available Now CTA ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
              TMS Is Available Now at Our Phoenix Center
            </h2>
            <p className="text-white/60 font-body leading-relaxed mb-10">
              Our NeuroStar TMS suite is open and accepting new patients. Call us today to schedule your initial consultation, verify your insurance, and find out if TMS is right for you. Most patients begin treatment within one to two weeks of their first call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+16029058070"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
              >
                Call (602) 905-8070
              </a>
              <a
                href="/insurance"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                Verify Insurance Free
              </a>
              <a
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gold/10 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display text-forest font-medium pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-forest/60 font-body text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Medical Disclaimer ────────────────────────────────── */}
      <section className="py-10 bg-white border-t border-forest/5">
        <div className="max-w-container mx-auto px-6">
          <p className="text-forest/40 font-body text-xs leading-relaxed text-center max-w-4xl mx-auto">
            NeuroStar TMS therapy is FDA-cleared for Major Depressive Disorder,
            anxious depression, OCD, and adolescents ages 15 and older with MDD.
            Individual results vary. This page is for informational purposes only
            and does not constitute medical advice. Please consult with a qualified
            healthcare professional to determine if TMS is appropriate for your
            situation. Medically reviewed by Dr. An Nguyen, Licensed Clinical
            Psychologist, Clinical Director, Desert Recovery Centers.
          </p>
        </div>
      </section>

      {/* ── TMS for Adolescents ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Adolescent Treatment</span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
              TMS Therapy for Adolescents
            </h2>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-10">
              NeuroStar is the only TMS system FDA-cleared for adolescents ages 15 and older, offering a safe, drug-free treatment option for teens with treatment-resistant depression.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
              {[
                "FDA-cleared for patients 15 and older",
                "Clinically proven for treatment-resistant depression in teenagers",
                "Non-invasive, no medication required",
                "Sessions fit around school schedules",
                "No sedation or recovery time needed",
                "No impact on daily activities",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/adolescent-treatment"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25"
            >
              Learn About Adolescent Treatment
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
