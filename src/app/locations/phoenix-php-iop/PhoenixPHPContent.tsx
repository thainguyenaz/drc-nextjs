"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const diffContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const diffCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const timelineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const timelineStepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const programs = [
  {
    tag: "PHP",
    title: "Partial Hospitalization Program",
    schedule: "5 to 6 hours per day, 5 days per week",
    body: "PHP is the most intensive level of outpatient care we offer, and for good reason. When someone is in active crisis or has just completed a residential stay, they need more than a weekly check in. PHP gives you a full clinical day, group therapy, individual therapy, psychiatric care, and medication management, while letting you sleep in your own bed. It is the clinical intensity of inpatient care, without the inpatient price tag or the loss of your daily life.",
    features: [
      "Group therapy and individual therapy every week",
      "Board certified psychiatric care and medication management",
      "Evidence based modalities: CBT, DBT, and EMDR",
      "Dual diagnosis treatment for co-occurring mental health and addiction",
      "Case management and discharge planning from day one",
    ],
  },
  {
    tag: "IOP",
    title: "Intensive Outpatient Program",
    schedule: "3 hours per day, 3 to 5 days per week",
    body: "IOP is where real life and real treatment meet. You come in for focused clinical sessions, then go back to work, your family, your community. That is not a compromise. That is the point. Recovery built inside a vacuum does not transfer. IOP forces you to practice the skills you are learning in real time, and we are right there to support you through it. Whether you are stepping down from PHP or coming to us directly, IOP is a powerful place to build lasting change.",
    features: [
      "Flexible morning and evening schedule options available",
      "Group therapy led by licensed clinicians",
      "Individual therapy sessions included weekly",
      "Family therapy available as clinically appropriate",
      "Peer community and alumni connection built in",
    ],
  },
  {
    tag: "OP",
    title: "Outpatient Program",
    schedule: "1 to 2 sessions per week",
    body: "Outpatient is where you prove to yourself that it is sticking. The intensity is lower, but the stakes are just as real. OP keeps you connected to your clinical team and your recovery community during the most vulnerable transition in the process, when the structure drops and real life rushes back in. We do not let you walk out the door alone. OP is the bridge between treatment and independence, and we take it seriously.",
    features: [
      "Relapse prevention planning and ongoing skill building",
      "Continued psychiatric support and medication management",
      "Alumni integration and peer accountability",
      "Flexible scheduling for working professionals and parents",
      "Transition planning for long term independent living",
    ],
  },
  {
    tag: "TMS",
    title: "Transcranial Magnetic Stimulation",
    schedule: "FDA Cleared. Non-Invasive. No Medication Required.",
    body: "One in three people with depression do not get better with antidepressants. If that is you, you have not failed treatment. Treatment has failed you. NeuroStar TMS is different. It uses precise magnetic pulses to stimulate the specific regions of the brain that regulate mood, with no sedation, no systemic side effects, and no downtime. Sessions take about 19 minutes. Most clients start feeling a difference within two to four weeks. Our Phoenix TMS suite is one of the few in Arizona integrated directly into a full outpatient clinical program, so your TMS treatment works alongside your therapy, not in isolation.",
    features: [
      "FDA cleared for depression, anxious depression, and OCD",
      "Cleared for adolescents ages 15 and older",
      "Typically 36 sessions over 7 to 9 weeks",
      "Can be scheduled around PHP, IOP, or OP programming",
      "No medication, no sedation, no recovery time needed",
    ],
  },
];

const differentiators = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Joint Commission Accredited",
    body: "Joint Commission accreditation is the gold standard in behavioral health. It means our clinical protocols, safety standards, and quality of care have been independently verified against the highest benchmarks in the industry. Not every treatment center in Arizona has it. We do.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Doctoral Level Clinical Team",
    body: "Your care is directed by licensed clinical psychologists, not paraprofessionals or counselors working beyond their scope. Our psychiatrists are board certified. Our therapists are specifically trained in CBT, DBT, and EMDR. When you are here, you are working with the best.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Individualized From Day One",
    body: "You will never be handed a generic treatment plan and told to follow along. Before your first session, your clinical team reviews your history, your diagnosis, your goals, and your life circumstances. Your plan is built around you, and it is reviewed and updated every single week.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Real Flexibility, Real Accountability",
    body: "We offer morning and evening scheduling options because we know you have a life outside of treatment. But flexibility does not mean loose. Your attendance, your participation, and your progress are tracked, and your team holds you accountable. That combination is rare. It is also why our outcomes are strong.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "The Only Integrated TMS Program in West Phoenix",
    body: "Most outpatient centers refer you out for TMS and hope the coordination works. We have our own NeuroStar suite on site. Your TMS sessions are scheduled in sync with your therapy, your medication management, and your clinical team. Everything works together because it is all in one place.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "A Community, Not Just a Program",
    body: "Recovery does not end when you walk out the door. Our alumni network, peer community, and ongoing OP programming keep you connected long after your primary treatment is complete. The relationships you build here are part of your recovery. We invest in them.",
  },
];

const admissionSteps = [
  {
    step: "1",
    title: "You Call. We Answer.",
    body: "Any time, day or night, a real person answers. Not a voicemail. Not a callback form. A member of our admissions team picks up and gives you their full attention. No pressure, no script, no sales pitch. Just a conversation about where you are and what you need.",
  },
  {
    step: "2",
    title: "Clinical Assessment by Phone",
    body: "Our admissions team conducts a brief clinical assessment to understand your history, your symptoms, and your goals. This helps us recommend the right level of care, PHP, IOP, or OP, and make sure you are coming to the right place. It usually takes 15 to 20 minutes and it changes everything.",
  },
  {
    step: "3",
    title: "We Handle Your Insurance",
    body: "We contact your insurance provider directly, verify your benefits, and tell you exactly what is covered and what, if anything, is not. You will know your out of pocket costs before you commit to a single session. No surprises. No financial ambushes. Just clarity.",
  },
  {
    step: "4",
    title: "Treatment Begins, Usually Within 48 Hours",
    body: "Once your benefits are verified and you are ready, we get you scheduled. Most clients start within 48 hours of their first call. Your care team will be ready for you. Your treatment plan will already be in progress. Day one, you hit the ground running.",
  },
];

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Magellan",
  "Beacon Health",
];

function ProgramTabContent({ prog }: { prog: typeof programs[number] }) {
  return (
    <>
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
        {prog.tag}
      </span>
      <h3 className="font-display text-lg text-forest font-semibold mb-1">
        {prog.title}
      </h3>
      <p className="text-sage text-sm font-medium mb-3">{prog.schedule}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.body}</p>
      <ul className="space-y-2">
        {prog.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </>
  );
}

function ProgramsTabs() {
  const [activeTab, setActiveTab] = useState("PHP");
  const [openAccordion, setOpenAccordion] = useState("PHP");
  const activeProg = programs.find((p) => p.tag === activeTab) ?? programs[0];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop: vertical tabs left, content right */}
      <div className="hidden md:grid md:grid-cols-[240px_1fr] gap-8">
        <div className="space-y-2">
          {programs.map((prog, i) => (
            <motion.button
              key={prog.tag}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActiveTab(prog.tag)}
              className={`w-full text-left px-4 py-4 rounded-lg border-l-[3px] transition-all duration-200 cursor-pointer ${
                activeTab === prog.tag
                  ? "border-l-gold bg-white shadow-sm"
                  : "border-l-transparent hover:border-l-gold/40 hover:bg-white/50"
              }`}
            >
              <span
                className={`text-xs font-bold tracking-widest uppercase block mb-0.5 ${
                  activeTab === prog.tag ? "text-gold" : "text-gray-400"
                }`}
              >
                {prog.tag}
              </span>
              <span
                className={`text-sm font-medium block ${
                  activeTab === prog.tag ? "text-forest" : "text-gray-500"
                }`}
              >
                {prog.title}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProg.tag}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ProgramTabContent prog={activeProg} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden space-y-3">
        {programs.map((prog) => (
          <div key={prog.tag} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => setOpenAccordion(openAccordion === prog.tag ? "" : prog.tag)}
              className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-gold mr-2">
                  {prog.tag}
                </span>
                <span className="text-sm font-medium text-forest">{prog.title}</span>
              </div>
              <svg
                className={`w-5 h-5 text-sage flex-shrink-0 transition-transform duration-300 ${
                  openAccordion === prog.tag ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {openAccordion === prog.tag && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="text-sage text-sm font-medium mb-3">{prog.schedule}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.body}</p>
                    <ul className="space-y-2">
                      {prog.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewImage() {
  const [entered, setEntered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setEntered(true)}
      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
    >
      <motion.div
        animate={entered ? { scale: [1, 1.012, 1] } : {}}
        transition={entered ? { duration: 9, repeat: Infinity, ease: "easeInOut", repeatType: "loop" as const } : {}}
        whileHover={{ scale: 1.04 }}
        className="relative w-full h-full overflow-hidden rounded-[inherit]"
        style={{ transition: "scale 0.7s" }}
      >
        <Image
          src="/images/locations/phoenix/phoenix-lobby-2.jpg"
          alt="Lobby at Desert Recovery Centers Phoenix PHP IOP treatment center"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default function PhoenixPHPContent() {
  return (
    <>
      {/* ── SECTION 3: Overview ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0 }}
                className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium block"
              >
                Our Phoenix Center
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6"
              >
                Outpatient Treatment That Does Not Ask You to Choose
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-gray-600 leading-relaxed text-lg mb-4"
              >
                Most treatment centers ask you to disappear from your life to get better. We do not believe that is the only way. Our Phoenix center at 4160 N. 108th Ave was designed for people who need real clinical care and real accountability, without leaving their job, their family, or their responsibilities behind. PHP, IOP, and OP programs give you the structure that makes recovery stick, on a schedule that fits the life you are trying to protect.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-lg mb-4"
              >
                Every client at our Phoenix location works with a licensed clinical team that includes therapists, psychiatrists, and case managers. Treatment is individualized from day one. You are not placed into a generic group and forgotten. You get a plan built around your specific diagnosis, your history, and your goals, reviewed and adjusted as you progress.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-gray-600 leading-relaxed text-lg mb-6"
              >
                This location also houses our NeuroStar TMS therapy suite, the only TMS system FDA cleared for depression, anxious depression, OCD, and adolescents ages 15 and older. If you have tried medications and they have not worked, TMS may be the answer you have been looking for.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.3 }}
                className="bg-cream border border-gold/30 rounded-xl p-6"
              >
                <p className="text-forest text-sm leading-relaxed">
                  <strong>Looking for residential treatment?</strong> Our Phoenix location specializes in PHP, IOP, OP, and TMS therapy. For full residential care, see our{" "}
                  <Link href="/locations/glendale" className="text-gold font-semibold hover:underline">Glendale</Link> and{" "}
                  <Link href="/locations/scottsdale" className="text-gold font-semibold hover:underline">Scottsdale</Link> campuses.
                </p>
              </motion.div>
            </div>
            <OverviewImage />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Programs — Tabbed Panel ────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Treatment Programs
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
                Every Level of Care, One Location
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We meet you where you are. Whether you are stepping down from residential or starting outpatient care for the first time, there is a program here built for exactly your situation.
              </p>
            </div>

            <ProgramsTabs />
          </div>
        </section>
      </motion.div>

      {/* ── SECTION 6: Why DRC Phoenix ──────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              What Makes This Place Different
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              There are a lot of outpatient programs in Phoenix. Here is what separates us.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={diffContainerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={diffCardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-cream rounded-xl p-6 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="text-gold mb-4">{item.icon}</div>
                <h3 className="font-display text-base text-forest font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: Admissions Timeline ──────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              From Your First Call to Your First Day
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We know that calling a treatment center for the first time is not easy. We have made the process as clear and fast as possible. Here is exactly what happens.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={timelineContainerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative"
          >
            {/* Connecting line — draws in left to right (desktop only) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="hidden lg:block absolute top-[32px] left-[12.5%] right-[12.5%] h-[2px] bg-gold/30 origin-left z-0"
            />

            {admissionSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={timelineStepVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-xl p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-display font-bold text-sm mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="font-display text-base text-forest font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 8: TMS Spotlight ────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/locations/phoenix/phoenix-medical-room.jpg"
                  alt="TMS therapy suite at Desert Recovery Centers Phoenix PHP IOP treatment center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                TMS Therapy
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                When Medication Has Not Been Enough
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have tried antidepressant after antidepressant and still do not feel like yourself, you are not alone. Approximately one in three people with major depression do not respond adequately to medication. That does not mean recovery is out of reach. It means the treatment needs to change.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                NeuroStar TMS uses targeted magnetic pulses to stimulate the areas of the brain responsible for mood regulation. It is the same technology used in MRI machines, applied with precision to specific neural pathways. There is no sedation. No anesthesia. No recovery period. You sit in a chair, complete your session in about 19 minutes, and go about your day.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Phoenix TMS suite is integrated directly into our outpatient clinical program. Your TMS schedule is coordinated with your therapy sessions and your psychiatric appointments. Your entire team is in one building, looking at one treatment plan. That level of coordination is not something you will find at most standalone TMS clinics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Depression", "Anxious Depression", "OCD", "Ages 15 and Up", "No Medication Required", "No Sedation", "No Downtime"].map((badge) => (
                  <span key={badge} className="text-xs bg-sage/10 text-sage font-medium px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href="/treatments/tms-therapy"
                className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                Learn More About TMS
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Contact & Location Details ───────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <ScrollReveal>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Contact
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                Contact &amp; Location Details
              </h2>

              <div className="bg-white rounded-xl p-6 mb-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-forest text-sm mb-1">Address</h3>
                  <p className="text-gray-600 text-sm">4160 N. 108th Ave</p>
                  <p className="text-gray-600 text-sm">Phoenix, AZ 85037</p>
                </div>
                <div>
                  <h3 className="font-semibold text-forest text-sm mb-1">Phone</h3>
                  <a href="tel:+16232575384" className="text-gold font-semibold text-xl block">
                    (623) 257-5384
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-forest text-sm mb-1">Email</h3>
                  <a href="mailto:contact@desertrecoverycenters.com" className="text-gold text-sm font-medium hover:underline">
                    contact@desertrecoverycenters.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-forest text-sm mb-1">Admissions Hours</h3>
                  <p className="text-gray-600 text-sm">24 hours a day, 7 days a week</p>
                </div>
                <div>
                  <h3 className="font-semibold text-forest text-sm mb-1">Services at This Location</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["PHP", "IOP", "OP", "TMS Therapy"].map((s) => (
                      <span key={s} className="text-xs bg-sage/10 text-sage font-medium px-3 py-1.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+16232575384"
                  className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Call Now
                </a>
                <Link
                  href="/insurance"
                  className="border border-forest/20 hover:border-forest/40 text-forest font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Verify Insurance
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0!2d-112.3012!3d33.4743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4160+N+108th+Ave+Phoenix+AZ+85037!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Desert Recovery Centers Phoenix PHP IOP location map"
                  className="w-full"
                />
              </div>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                Located in west Phoenix with easy access from Glendale, Peoria, Goodyear, Avondale, and Tolleson via the I-10 and Loop 101 corridors. Free parking on site.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link
                  href="/locations/glendale"
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gold/30 transition-colors"
                >
                  <p className="font-display text-sm text-forest font-semibold">DRC Glendale</p>
                  <p className="text-gray-500 text-xs">Residential</p>
                </Link>
                <Link
                  href="/locations/scottsdale"
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gold/30 transition-colors"
                >
                  <p className="font-display text-sm text-forest font-semibold">DRC Scottsdale</p>
                  <p className="text-gray-500 text-xs">Residential</p>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CTA Banner ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="max-w-container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
            You Have Already Done the Hard Part
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Deciding you want things to be different is the hardest step. Everything after this is something we help you with. Our admissions team is available right now, 24 hours a day, and most clients start treatment within 48 hours of this call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+16232575384"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
            >
              Call (623) 257-5384
            </a>
            <a
              href="mailto:contact@desertrecoverycenters.com"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
            >
              Email Us
            </a>
            <Link
              href="/insurance"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
            >
              Verify Insurance Free
            </Link>
          </div>
          <p className="text-white/40 text-xs">
            If you are experiencing a medical emergency, please call 911. Desert Recovery Centers does not provide emergency services.
          </p>
        </motion.div>
      </section>

      {/* ── SECTION 12: Insurance Strip ─────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-sm mb-6">
              We accept most major insurance plans. Your benefits are verified before you start, at no cost to you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              {insuranceProviders.map((provider) => (
                <span
                  key={provider}
                  className="text-sm text-forest font-medium bg-cream px-4 py-2 rounded-full"
                >
                  {provider}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-xs">
              Coverage varies by plan. Call{" "}
              <a href="tel:+16232575384" className="text-gold hover:underline">
                (623) 257-5384
              </a>{" "}
              for a free benefits check.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
