"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { MedicalTherapySchema, InlineFAQSchema } from "@/lib/seo";

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
    body: "Over 300 million people have insurance plans that cover NeuroStar therapy including Medicare and Tricare",
  },
];

const faqs = [
  {
    q: "What is TMS therapy and how does it differ from other treatments?",
    a: "TMS stands for Transcranial Magnetic Stimulation. Unlike antidepressant medications which affect the entire body, TMS delivers focused magnetic pulses directly to the region of the brain involved in mood regulation. It produces no systemic side effects and requires no sedation or recovery time.",
  },
  {
    q: "Is TMS covered by insurance?",
    a: "Most major insurance plans now cover TMS therapy for Major Depressive Disorder, including Medicare and Tricare. Over 300 million Americans have coverage for NeuroStar TMS. Coverage varies by plan. Contact us to verify your benefits.",
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
    a: "NeuroStar TMS has been delivered in over 6.9 million treatments worldwide. The most common side effect is mild scalp discomfort or headache during treatment that typically resolves quickly. Serious side effects are rare. Our clinical team will evaluate your full medical history before recommending TMS.",
  },
  {
    q: "When will TMS be available at Desert Recovery Centers?",
    a: "We are finalizing our NeuroStar program now. Join the waitlist above and you will be personally contacted by our clinical team as soon as we have availability.",
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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroLeftX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const heroRightX = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission
    setTimeout(() => setFormStatus("sent"), 1200);
  };

  return (
    <>
      <MedicalTherapySchema
        name="NeuroStar TMS Therapy"
        description="FDA-cleared Transcranial Magnetic Stimulation therapy for depression, anxious depression, OCD, and adolescents — coming soon to Desert Recovery Centers in Arizona."
        url="/treatments/tms-therapy"
        conditions={["Major Depressive Disorder", "Anxious Depression", "OCD", "Adolescent Depression"]}
      />
      <InlineFAQSchema items={faqs} />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
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
        <div ref={heroRef} className="relative z-10 text-center max-w-container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold font-body text-xs tracking-[0.25em] uppercase font-semibold">
                Coming Soon
              </span>
            </motion.div>

            <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              NeuroStar TMS Therapy{" "}
              <span className="block text-gold/90 mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold">
                Coming Soon to Desert Recovery Centers
              </span>
            </h1>
            <p className="text-white/70 font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              A breakthrough in depression treatment is coming to Desert Recovery
              Centers. NeuroStar TMS therapy — FDA-cleared, drug-free, and backed
              by the largest clinical dataset of any TMS system in the world.
            </p>
          </motion.div>

          {/* Hero collision CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#waitlist"
              style={{ x: heroLeftX, opacity: heroOpacity }}
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
            >
              Join the Waitlist
            </motion.a>
            <motion.a
              href="tel:+14809313617"
              style={{ x: heroRightX, opacity: heroOpacity }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
            >
              Call (480) 931-3617
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
              title="NeuroStar TMS Therapy — How It Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-white/60 font-body text-sm tracking-wide text-center mt-6">
            See how NeuroStar TMS therapy works — FDA-cleared, non-invasive treatment for depression
          </p>
        </motion.div>
      </section>

      {/* ── What Is TMS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
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
              <p className="text-forest/70 font-body leading-relaxed mb-8">
                Transcranial Magnetic Stimulation uses focused magnetic pulses,
                similar to an MRI, to stimulate the specific area of the brain
                responsible for mood regulation. When depression takes hold, the
                connections in this region become underactive. NeuroStar TMS
                reawakens those connections, producing lasting changes in
                neurotransmitter levels without medication and without systemic
                side effects.
              </p>

              {/* Session Details Box */}
              <div className="bg-cream rounded-2xl p-6 border border-gold/10">
                <ul className="space-y-3">
                  {sessionDetails.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-forest font-body text-sm">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                value: 6.9,
                suffix: "M+",
                isDecimal: true,
                label:
                  "NeuroStar treatments delivered worldwide, backed by the largest clinical dataset of any TMS system",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-gold font-display text-5xl md:text-6xl font-bold mb-3">
                  {stat.isDecimal ? (
                    <span>6.9<span className="text-4xl">M+</span></span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-cream/40 text-xs text-center mt-12 font-body">
            Source: NeuroStar Outcomes Registry, NIMH-funded randomized controlled
            trial, real-world outcomes study
          </p>
        </div>
      </section>

      {/* ── Who Benefits ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
              Who Is a Candidate for TMS Therapy?
            </h2>
            <p className="text-forest/70 font-body leading-relaxed mb-8">
              If you have struggled with depression and have not found adequate
              relief from antidepressant medications, TMS therapy may be the
              breakthrough you have been waiting for. You may be a good candidate
              if:
            </p>

            <ul className="space-y-4 mb-12">
              {candidateReasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 text-forest font-body"
                >
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {reason}
                </motion.li>
              ))}
            </ul>

            {/* Not a candidate */}
            <div className="bg-cream rounded-2xl p-8 border border-gold/10">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why NeuroStar ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-transparent hover:border-gold/40 transition-colors duration-300 group"
              >
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
          </div>
        </div>
      </section>

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

      {/* ── Waitlist Form ────────────────────────────────────── */}
      <section id="waitlist" className="py-20 md:py-28 bg-forest relative overflow-hidden">
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
              Be Among the First to Access TMS at Desert Recovery Centers
            </h2>
            <p className="text-white/60 font-body leading-relaxed mb-10">
              We are finalizing our NeuroStar TMS program and will be accepting
              clients soon. Join our waitlist now and our clinical team will reach
              out personally when TMS becomes available. Current DRC clients will
              receive priority access.
            </p>

            {formStatus === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-gold/20"
              >
                <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-display text-2xl text-white font-semibold mb-2">
                  You&apos;re on the List
                </h3>
                <p className="text-white/60 font-body">
                  Our clinical team will reach out personally when TMS becomes
                  available. Thank you for your interest.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-left"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white/60 font-body text-sm mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white/60 font-body text-sm mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-white/60 font-body text-sm mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/60 font-body text-sm mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="situation" className="block text-white/60 font-body text-sm mb-1.5">
                    Tell us about your situation{" "}
                    <span className="text-white/30">(optional)</span>
                  </label>
                  <textarea
                    id="situation"
                    name="situation"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25"
                >
                  {formStatus === "sending" ? "Submitting..." : "Join the TMS Waitlist"}
                </button>
                <p className="text-white/30 font-body text-xs text-center mt-4">
                  Your information is completely confidential and protected by
                  HIPAA. Joining the waitlist does not obligate you in any way.
                </p>
              </form>
            )}
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

      <Footer />
    </>
  );
}
