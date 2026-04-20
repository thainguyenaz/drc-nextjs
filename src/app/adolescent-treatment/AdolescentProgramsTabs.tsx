"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const programs = [
  {
    id: "php",
    label: "PHP",
    sublabel: "Partial Hospitalization",
    title: "Adolescent Partial Hospitalization Program",
    badge: "5 to 6 hours per day, 5 days per week",
    body: [
      "PHP is the most intensive level of outpatient care we offer for adolescents, and it exists because some teenagers cannot wait for a once a week appointment to start getting better. When a teen is in active crisis, when the depression is severe, when the anxiety has stopped them from leaving the house, when substance use has escalated to the point of danger, PHP provides the daily clinical structure that interruption requires.",
      "Your teenager attends programming five days per week for five to six hours each day. That time includes age appropriate group therapy with peers facing similar challenges, individual therapy with a licensed clinician, psychiatric evaluation and medication management if needed, and family therapy sessions with you. At the end of each day, they come home. You remain part of their life. And the clinical team is monitoring their progress every single day.",
    ],
    features: [
      "Age appropriate peer group therapy, no adult mixing",
      "Individual therapy with a licensed adolescent clinician",
      "Board certified psychiatric evaluation and medication management",
      "Family therapy sessions required, not optional",
      "Daily clinical monitoring and weekly treatment plan review",
      "School coordination and academic accommodation support",
    ],
  },
  {
    id: "iop",
    label: "IOP",
    sublabel: "Intensive Outpatient",
    title: "Adolescent Intensive Outpatient Program",
    badge: "3 hours per day, 3 to 5 days per week",
    body: [
      "IOP is where treatment and real life learn to coexist. Your teenager comes in for three hours of focused clinical programming, then returns to school, homework, dinner at the table with your family. That balance is not a compromise, it is clinically intentional. Recovery that only works inside a treatment setting does not transfer. IOP teaches your teenager to apply coping skills in the actual environment where they need them.",
      "Scheduling is designed around school. Morning or after-school options are available so your teen does not have to choose between treatment and their education. We work with schools directly when academic accommodations are needed. You are updated regularly. Family sessions are built in. Nothing about this process happens without your involvement.",
    ],
    features: [
      "School compatible morning and after-school scheduling",
      "Age specific peer group therapy sessions",
      "Individual therapy sessions weekly",
      "Family therapy built into the program structure",
      "Direct school communication and accommodation coordination",
      "Smooth step-down path from PHP when clinically appropriate",
    ],
  },
  {
    id: "op",
    label: "OP",
    sublabel: "Outpatient",
    title: "Adolescent Outpatient Program",
    badge: "1 to 2 sessions per week",
    body: [
      "Outpatient care is where your teenager proves to themselves, and to you, that the work is holding. The clinical intensity is lower, but the importance of this phase is not. This is the transition from structured treatment back into ordinary life, and it is the phase where relapse, regression, and old patterns most often return if there is no support structure in place.",
      "Our outpatient program keeps your teenager connected to their therapist and their peer community during this vulnerable period. Sessions focus on relapse prevention, coping skill reinforcement, and the real life challenges of being a teenager in recovery. For parents, outpatient is also an opportunity to continue family work and ensure the changes made during more intensive treatment are being reinforced at home.",
    ],
    features: [
      "Weekly individual therapy with a consistent clinician",
      "Peer support group connection maintained",
      "Continued family therapy as clinically appropriate",
      "Relapse prevention and real world skill application",
      "Flexible scheduling for working teens and busy families",
      "Clear graduation criteria and alumni connection",
    ],
  },
  {
    id: "tms",
    label: "TMS",
    sublabel: "For Ages 15 and Up",
    title: "TMS Therapy for Adolescents",
    badge: "FDA Cleared for Ages 15 and Older",
    body: [
      "When your teenager has tried antidepressant after antidepressant and nothing has worked, it is not because they are beyond help. It is because their brain has not responded to that particular approach. NeuroStar TMS offers a fundamentally different path. It is the only TMS system FDA cleared specifically for adolescents ages 15 and older, and it works by delivering precise magnetic pulses to the areas of the brain responsible for mood regulation.",
      "There is no medication involved. No sedation. No anesthesia. Your teenager sits in a chair, completes a 19 minute session, and goes about their day. Most adolescents begin noticing a difference within two to four weeks. Because our TMS suite is integrated directly into our Phoenix outpatient program, your teenager\u2019s TMS sessions are coordinated with their therapy and their psychiatrist. Everything is in one building, on one treatment plan, managed by one team.",
    ],
    features: [
      "FDA cleared for adolescents ages 15 and older",
      "No medication, no sedation, no recovery period",
      "Sessions approximately 19 minutes, typically 36 over 7 to 9 weeks",
      "Integrated with PHP, IOP, or outpatient programming",
      "Clinically proven for treatment resistant depression in teens",
      "Coordinated directly with your teenager\u2019s clinical team",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProgramContent({ program }: { program: (typeof programs)[number] }) {
  return (
    <>
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
        {program.badge}
      </span>
      <h3 className="font-display text-lg text-forest font-semibold mb-4">
        {program.title}
      </h3>
      {program.body.map((p, i) => (
        <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3">
          {p}
        </p>
      ))}
      <ul className="space-y-2 mt-4">
        {program.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function AdolescentProgramsTabs() {
  const [activeId, setActiveId] = useState("php");
  const [openAccordion, setOpenAccordion] = useState("php");
  const active = programs.find((p) => p.id === activeId)!;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop: vertical tabs left, content right */}
      <div className="hidden md:grid md:grid-cols-[240px_1fr] gap-8">
        <div className="space-y-2">
          {programs.map((program, i) => (
            <motion.button
              key={program.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActiveId(program.id)}
              className={`w-full text-left px-4 py-4 rounded-lg border-l-[3px] transition-all duration-200 cursor-pointer ${
                activeId === program.id
                  ? "border-l-gold bg-white shadow-sm"
                  : "border-l-transparent hover:border-l-gold/40 hover:bg-white/50"
              }`}
            >
              <span
                className={`text-xs font-bold tracking-widest uppercase block mb-0.5 ${
                  activeId === program.id ? "text-gold" : "text-gray-400"
                }`}
              >
                {program.label}
              </span>
              <span
                className={`text-sm font-medium block ${
                  activeId === program.id ? "text-forest" : "text-gray-500"
                }`}
              >
                {program.sublabel}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProgramContent program={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="flex flex-col md:hidden space-y-3">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenAccordion(
                  openAccordion === program.id ? "" : program.id
                )
              }
              className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-gold mr-2">
                  {program.label}
                </span>
                <span className="text-sm font-medium text-forest">
                  {program.sublabel}
                </span>
              </div>
              <svg
                className={`w-5 h-5 text-sage flex-shrink-0 transition-transform duration-300 ${
                  openAccordion === program.id ? "rotate-180" : ""
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
            <AnimatePresence>
              {openAccordion === program.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <ProgramContent program={program} />
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
