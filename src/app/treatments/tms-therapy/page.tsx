"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { InlineFAQSchema, MedicalWebPageSchema, VideoSchemas } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import TMSVideoSection from "./TMSVideoSection";
import YouTubeEmbed from "@/components/YouTubeEmbed";

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
  "You are the parent of a teenager ages 15 to 21 whose depression has not responded to standard care (NeuroStar is FDA-cleared for adolescents as an add-on treatment)",
];

const keyFacts = [
  {
    label: "What it is",
    value: "A non-drug, non-invasive, FDA-cleared treatment for depression",
    kind: "clinical",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  { label: "Where", value: "The Phoenix outpatient center, 4160 N. 108th Ave, Phoenix, AZ 85037", kind: "disclosure" },
  { label: "Provided by", value: "Desert TMS LLC, an affiliated licensed provider on-site at Desert Recovery Centers", kind: "disclosure" },
  {
    label: "Device",
    value: "NeuroStar Advanced Therapy system",
    kind: "clinical",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    label: "Treats",
    value: "Major depressive disorder, depression with anxious symptoms, OCD (add-on), and depression in adolescents ages 15 to 21 (add-on)",
    kind: "clinical",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    label: "Typical course",
    value: "5 sessions per week for 4 to 6 weeks, each session as little as 19 minutes, no downtime",
    kind: "clinical",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  { label: "Cost", value: "Currently private pay while Desert TMS LLC completes payer credentialing; Medicare and Medicaid not accepted; call for cost and options", kind: "disclosure" },
  { label: "Phone", value: "(623) 305-0496", kind: "disclosure" },
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
    body: "The only TMS system FDA-cleared for MDD, anxious depression, and OCD",
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
    title: "Straightforward Private Pay",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    body: "TMS at the Phoenix campus is currently offered on a private-pay basis while Desert TMS LLC completes payer credentialing. Call us and we will walk you through cost and options.",
  },
];

const faqs = [
  {
    q: "What is TMS therapy and how does it differ from other treatments?",
    a: "TMS stands for Transcranial Magnetic Stimulation. Unlike antidepressant medications which affect the entire body, TMS delivers focused magnetic pulses directly to the region of the brain involved in mood regulation. It produces no systemic side effects and requires no sedation or recovery time.",
  },
  {
    q: "Is TMS covered by insurance?",
    a: "TMS at the Phoenix campus is currently offered on a private-pay basis while Desert TMS LLC completes credentialing with insurance payers. We do not accept Medicare or Medicaid. Call (623) 305-0496 and we will walk you through cost and payment options.",
  },
  {
    q: "How long does a TMS treatment course take?",
    a: "A standard TMS treatment course consists of sessions 5 days per week over 4 to 6 weeks. Each session takes as little as 19 minutes, and you can return to your normal activities immediately afterward.",
  },
  {
    q: "Can TMS be combined with my current therapy or medication?",
    a: "Yes. TMS is designed to work alongside other treatments including psychotherapy, medication, and residential programs. TMS is provided by Desert TMS LLC, an affiliated licensed provider on-site at Desert Recovery Centers, and sessions are coordinated with your clinical treatment plan.",
  },
  {
    q: "Can teenagers get TMS therapy?",
    a: "Yes. NeuroStar TMS is FDA-cleared for adolescents ages 15 to 21 as an add-on treatment for depression, and adolescent TMS is provided by Desert TMS LLC, an affiliated licensed provider on-site at Desert Recovery Centers. Treatment requires parental consent, and the clinical team completes a full evaluation to confirm TMS is appropriate before sessions begin.",
  },
  {
    q: "Is TMS safe?",
    a: "NeuroStar TMS has been delivered in over 8 million treatments worldwide, according to NeuroStar. The most common side effect is mild scalp discomfort or headache during treatment that typically resolves quickly. Serious side effects are rare. Our clinical team will evaluate your full medical history before recommending TMS.",
  },
  {
    q: "Is NeuroStar TMS therapy available now at Desert Recovery Centers?",
    a: "Yes. NeuroStar TMS therapy is available now at 4160 N. 108th Ave, Phoenix, AZ 85037, provided by Desert TMS LLC, an affiliated licensed provider on-site at Desert Recovery Centers. Call (623) 305-0496 to schedule your initial consultation. Most patients begin treatment within one to two weeks of their first call.",
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
      <VideoSchemas path="/treatments/tms-therapy/" />
      <MedicalWebPageSchema url="/treatments/tms-therapy" name="NeuroStar TMS Therapy" dateModified="2026-07-14" />
      <SchemaScript schema={[
        {
          "@context": "https://schema.org",
          "@type": "MedicalTherapy",
          "@id": "https://desertrecoverycenters.com/treatments/tms-therapy#therapy",
          "name": "NeuroStar TMS Therapy",
          "alternateName": "Transcranial Magnetic Stimulation",
          "description": "FDA-cleared non-invasive brain stimulation therapy for major depressive disorder, anxious depression, and OCD in adults, and an add-on treatment for depression in adolescents ages 15 to 21. Transcranial Magnetic Stimulation (TMS) services are provided by Desert TMS LLC, a separately licensed Arizona Outpatient Treatment Center located within the Desert Recovery Centers campus.",
          "url": "https://desertrecoverycenters.com/treatments/tms-therapy",
          "howPerformed": "Focused magnetic pulses are delivered to a mapped area of the brain that regulates mood during short outpatient sessions while the patient sits awake, with no anesthesia and no recovery time.",
          "bodyLocation": "Brain (dorsolateral prefrontal cortex)",
          "followup": "A standard course is 5 sessions per week for 4 to 6 weeks, with each session taking as little as 19 minutes.",
          "recognizingAuthority": { "@type": "Organization", "name": "U.S. Food and Drug Administration", "url": "https://www.fda.gov" },
          "legalStatus": "FDA Cleared",
          "relevantSpecialty": "Psychiatric",
          "study": [
            { "@type": "MedicalStudy", "name": "NeuroStar Outcomes Registry", "description": "83% of patients experienced measurable improvement, 62% achieved full remission in real-world outcomes study of over 8 million treatments." },
            { "@type": "MedicalStudy", "name": "NIMH-Funded Randomized Controlled Trial", "description": "Patients treated with NeuroStar were 4 times more likely to achieve remission compared to sham treatment." },
          ],
          "availableAtOrFrom": {
            "@type": "MedicalClinic",
            "name": "Desert TMS LLC",
            "address": { "@type": "PostalAddress", "streetAddress": "4160 N 108th Ave", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85037" },
            "telephone": "+16233050496",
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
              FDA-cleared, drug free, non invasive treatment for depression, anxious depression, and OCD. Now available at our Phoenix outpatient center. Private pay available while payer credentialing is completed. Sessions as short as 19 minutes.
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
              <span className="text-white/90 text-sm font-medium">Desert TMS LLC, Certified NeuroStar Provider</span>
            </motion.div>
          </motion.div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+16233050496"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Call (623) 305-0496
            </motion.a>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── TMS at a Glance ──────────────────────────────────── */}
      <section className="py-14 md:py-18 bg-cream border-b border-gold/10">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6 text-center">
              TMS Therapy at a Glance
            </h2>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyFacts.filter((fact) => fact.kind === "clinical").map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gold/20 shadow-sm grid grid-cols-[auto_1fr] sm:grid-cols-1 gap-x-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest text-cream flex items-center justify-center row-span-2 sm:row-span-1 sm:mb-4">
                    {fact.icon}
                  </div>
                  <dt className="text-sage font-body text-xs tracking-[0.15em] uppercase font-semibold mb-2 self-end sm:self-auto">
                    {fact.label}
                  </dt>
                  <dd className="text-forest font-body text-sm leading-relaxed">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <dl className="mt-4 bg-forest rounded-2xl px-5 py-2 sm:px-8 divide-y divide-white/10">
              {keyFacts.filter((fact) => fact.kind === "disclosure").map((fact) => (
                <div key={fact.label} className="grid sm:grid-cols-[160px_1fr] gap-1 sm:gap-4 py-4">
                  <dt className="text-gold font-body text-xs tracking-[0.15em] uppercase font-semibold pt-1">
                    {fact.label}
                  </dt>
                  <dd className="text-cream font-body text-base leading-relaxed">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
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
          <YouTubeEmbed youtubeId="4yWqQ_VVzgE" title="NeuroStar TMS Therapy, How It Works" start={141} />
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
                  What Is TMS Therapy and How Does It Work?
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="text-forest/70 font-body leading-relaxed mb-8"
              >
                Transcranial magnetic stimulation (TMS) is a non-drug,
                non-invasive treatment for depression that uses focused magnetic
                pulses, similar to an MRI, to stimulate the specific area of the
                brain responsible for mood regulation. When depression takes hold, the
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
              How Well Does TMS Work?
            </h2>
            <p className="text-white/60 font-body leading-relaxed max-w-2xl mx-auto mt-4">
              Most people who complete a full NeuroStar treatment course
              experience measurable relief from depression, according to
              NeuroStar&apos;s published outcomes data.
            </p>
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
                value: 8,
                suffix: "M+",
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
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
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

      {/* ── Adolescent TMS ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold" />
                <span className="text-gold font-body text-xs tracking-[0.2em] uppercase font-medium">
                  Adolescent TMS
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
                Can Teenagers Get TMS?
              </h2>
              <p className="text-white/70 font-body leading-relaxed mb-6">
                Yes. NeuroStar TMS is FDA-cleared for adolescents ages 15 to 21 as
                an add-on treatment for depression, and adolescent TMS is provided
                by Desert TMS LLC, an affiliated licensed provider on-site at
                Desert Recovery Centers. According to NeuroStar, it is
                the first and only TMS system FDA-cleared for this age group, used
                alongside standard care such as therapy or medication rather than
                in place of it.
              </p>
              <p className="text-white/70 font-body leading-relaxed mb-6">
                For a teenager who has tried antidepressant medication without
                enough relief, TMS offers a non-drug option with a well-studied
                safety profile. Parents are involved at every step: treatment
                requires parental consent, and the clinical team completes a full
                evaluation to confirm TMS is appropriate before any sessions
                begin.
              </p>
              <p className="text-white/50 font-body text-sm leading-relaxed">
                An evening intensive outpatient program for adolescents ages 12 to
                17 is also available at the same Phoenix location. Learn more on
                the{" "}
                <a href="/adolescent-treatment" className="text-gold hover:underline">
                  adolescent treatment page
                </a>
                .
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tms/adolescent-tms-session.webp"
                  alt="A person receiving NeuroStar TMS therapy in a treatment chair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-white/70 font-body text-xs mt-3 text-center">Not an actual patient.</p>
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
              Why NeuroStar?
            </h2>
            <p className="text-forest/70 font-body max-w-2xl mx-auto leading-relaxed">
              Desert TMS LLC, the affiliated licensed provider that delivers TMS
              on-site at Desert Recovery Centers, chose NeuroStar because the
              evidence is unmatched.
            </p>
            <Image
              src="/images/tms/neurostar-provider-badge.png"
              alt="a NeuroStar provider"
              width={240}
              height={50}
              unoptimized
              className="mx-auto mt-8"
            />
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
                The Phoenix TMS Suite
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
                Where Is TMS Offered in Phoenix?
              </h2>
              <p className="text-forest/70 font-body leading-relaxed">
                Our Phoenix outpatient center at 4160 N. 108th Ave houses a dedicated NeuroStar treatment suite. Transcranial Magnetic Stimulation (TMS) services are provided by Desert TMS LLC, a separately licensed Arizona Outpatient Treatment Center located within the Desert Recovery Centers campus. You come in for your session, sit in the comfortable treatment chair, complete your 19 minutes, and go about your day. No waiting room full of strangers. No clinical sterility. Just a focused, quiet space designed for exactly this purpose, staffed by a team that knows your name and your treatment plan.
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

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/tms/neurostar-system.webp"
                alt="NeuroStar Advanced Therapy system in the Phoenix TMS suite"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/tms/neurostar-coil-pulses.webp"
                alt="NeuroStar TMS coil delivering magnetic pulses"
                fill
                className="object-contain"
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
              href="/documents/neurostar-brochure-adult.pdf"
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
              href="/documents/neurostar-brochure-adolescent.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-brochure="adolescent"
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
              <h3 className="font-display text-lg text-forest font-semibold mb-2">Adolescent TMS Brochure</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Guide to NeuroStar TMS therapy for adolescents ages 15 to 21 as an add-on treatment for depression.</p>
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
              recovery requires treating the whole person. TMS therapy, provided
              on-site by Desert TMS LLC, integrates with
              DRC&apos;s clinical programs, including
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
              The NeuroStar TMS suite at the Phoenix campus is open and accepting new patients. Call us today to schedule your initial consultation, talk through private-pay cost and options, and find out if TMS is right for you. Most patients begin treatment within one to two weeks of their first call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+16233050496"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
              >
                Call (623) 305-0496
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

      {/* ── PHQ-10 Assessment ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
              Take the Depression Assessment
            </h2>
            <p className="text-gray-500 font-body leading-relaxed mb-10">
              The NeuroStar PHQ-10 is a short questionnaire that helps our team understand your symptoms before your first visit. It takes about five minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
              <a
                href="/tms-assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
              >
                Start the Assessment
              </a>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/tms/phq10-qr.png"
                  alt="QR code to open the NeuroStar PHQ-10 depression assessment"
                  width={180}
                  height={180}
                  unoptimized
                  className="rounded-lg"
                />
                <p className="text-gray-500 text-sm mt-2">Or scan to complete on your phone</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-8">
              Hosted by Neuronetics. Your responses go to the Desert TMS care team.
            </p>
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
            anxious depression, and OCD in adults, and as an add-on treatment
            for depression in adolescents ages 15 to 21. Individual results vary.
            Transcranial Magnetic Stimulation (TMS) services are provided by
            Desert TMS LLC, a separately licensed Arizona Outpatient Treatment
            Center located within the Desert Recovery Centers campus. This page is for informational purposes only
            and does not constitute medical advice. Please consult with a qualified
            healthcare professional to determine if TMS is appropriate for your
            situation. Medically reviewed by Dr. An Nguyen, Licensed Clinical
            Psychologist, Clinical Director, Desert Recovery Centers.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
