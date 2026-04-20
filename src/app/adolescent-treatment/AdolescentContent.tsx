"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AdolescentProgramsTabs from "./AdolescentProgramsTabs";
import AdolescentImage1 from "./AdolescentImage1";
import AdolescentImage3 from "./AdolescentImage3";

/* ── Animation variants ──────────────────────────────────── */

const timelineContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
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

/* ── Data ─────────────────────────────────────────────────── */

const conditions = [
  {
    title: "Depression",
    body: "More than sadness. Adolescent depression often presents as irritability, withdrawal, and loss of motivation. It is the leading cause of disability in teenagers worldwide and it is highly treatable.",
    href: "/adolescent/depression",
  },
  {
    title: "Anxiety Disorders",
    body: "Generalized anxiety, panic disorder, social anxiety, and school refusal. Anxiety is the most common mental health condition in adolescents and one of the most underdiagnosed.",
    href: "/adolescent/anxiety",
  },
  {
    title: "PTSD and Trauma",
    body: "Childhood trauma, bullying, abuse, accidents, and adverse childhood experiences. Unprocessed trauma rewires the adolescent brain in ways that show up as behavior, not memory.",
    href: "/adolescent/ptsd-trauma",
  },
  {
    title: "OCD",
    body: "Obsessive compulsive disorder in teenagers is rarely what it looks like on television. It is intrusive thoughts, rituals, and the exhausting effort of managing a brain that will not quiet down.",
    href: "/adolescent/ocd",
  },
  {
    title: "ADHD",
    body: "Attention deficit disorder that has not been properly treated or has co-occurring anxiety and depression layered on top. ADHD rarely travels alone in adolescence.",
    href: "/adolescent/adhd",
  },
  {
    title: "Bipolar Disorder",
    body: "Mood episodes in adolescents are often misdiagnosed as behavioral problems or normal teenage moodiness for years before a correct diagnosis is made.",
    href: "/adolescent/bipolar",
  },
  {
    title: "Self Harm",
    body: "Cutting, burning, and other self harm behaviors are not manipulation. They are a dysregulated coping mechanism. With the right clinical support, adolescents learn healthier ways to manage the pain.",
    href: "/adolescent/self-harm",
  },
  {
    title: "Substance Use",
    body: "Alcohol, marijuana, prescription drugs, and increasingly, fentanyl. Adolescent substance use almost always has a mental health condition underneath it. We treat both simultaneously.",
    href: "/adolescent/substance-use",
  },
  {
    title: "Suicidal Ideation",
    body: "Passive thoughts about death and active suicidal ideation both require clinical attention. Our team is trained in adolescent suicide risk assessment and safety planning.",
    href: "/adolescent/suicidal-ideation",
  },
];

const admissionSteps = [
  {
    step: "1",
    title: "You Call. A Real Person Answers.",
    body: "Any time of day or night, a member of our admissions team picks up the phone. You will never get a voicemail, a chatbot, or a callback form when you are in crisis. You will get a person whose only job in that moment is to listen to what you are going through and help you figure out the right next step.",
  },
  {
    step: "2",
    title: "Clinical Assessment for Your Teenager",
    body: "Our admissions clinician conducts a brief assessment by phone. They will ask about your teenager's symptoms, history, what has been tried before, and what is happening right now. This takes 15 to 20 minutes and it determines which level of care, PHP, IOP, or outpatient, is most appropriate for your child's specific situation.",
  },
  {
    step: "3",
    title: "We Verify Your Insurance",
    body: "We contact your insurance provider directly and verify your teenager's benefits. We tell you exactly what is covered, what the out of pocket costs will be if any, and whether prior authorization is needed. You will have complete financial clarity before you commit to a single session. No surprises.",
  },
  {
    step: "4",
    title: "Your Teenager Starts Treatment, Usually Within 48 Hours",
    body: "Once benefits are confirmed and you are ready, we schedule your teenager's intake. Most adolescents begin within 48 hours of the first call. Their clinical team will be prepared. The treatment plan will be in progress. And you will know exactly what to expect on day one.",
  },
];

const familyTimeline = [
  "Week 1: Intake meeting with the full clinical team, review of treatment plan and goals",
  "Ongoing: Weekly family therapy sessions with your teenager and their primary therapist",
  "Ongoing: Weekly clinical update call or written summary from the treatment team",
  "As needed: School coordination calls and accommodation letter support",
  "Discharge: Full transition planning meeting with aftercare recommendations",
];

const trustItems = [
  "Joint Commission Accredited",
  "LegitScript Certified",
  "TMS FDA Cleared for Ages 15 and Up",
  "Insurance Accepted",
  "Admissions 24 / 7",
  "Licensed Adolescent Clinicians",
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

/* ── Conditions Accordion ─────────────────────────────────── */

function ConditionsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Conditions We Treat
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
            Your Teenager Does Not Have to Be in Crisis to Need Help
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These are the conditions our adolescent clinical team treats every day. Many of them look like behavioral problems on the outside. They are not.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {conditions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold/30 transition-colors duration-300 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-forest text-sm pr-4">
                  {item.title}
                </span>
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
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.body}
                      </p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                      >
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main Content ─────────────────────────────────────────── */

export default function AdolescentContent({ checklistSlot }: { checklistSlot?: React.ReactNode }) {
  return (
    <>
      {/* ── SECTION 3: Parent Empathy Opener ──────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium block mb-4"
              >
                For Parents
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8"
              >
                You Already Know Something Is Wrong
              </motion.h2>
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  You have watched the grades slip. The friends disappear. The bedroom door stay closed for hours. Maybe you have found something you wish you had not, or maybe you just feel it, that quiet panic that something is happening to your child and you cannot reach them. You are not imagining it. And you are not alone.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  One in five adolescents in the United States has a diagnosable mental health condition. Most of them never get treatment. Not because their parents did not care, but because parents did not know where to turn, or waited hoping it would pass, or were told it was just a phase. The adolescent mental health crisis in this country is real, and it is devastating families in every zip code.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                  className="text-gray-600 leading-relaxed text-lg font-medium"
                >
                  If you are reading this, you are already doing the right thing. You are looking for real help for your child. That is what we are here for.
                </motion.p>
              </div>
            </div>
            <AdolescentImage1 />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Warning Signs Checklist ─────────────── */}
      {checklistSlot}

      {/* ── SECTION 5: Programs (Tabbed Panel) ────────────── */}
      <motion.div
        id="programs"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <section className="py-16 md:py-24 bg-cream scroll-mt-20">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Treatment Programs
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
                Programs Built for Adolescent Brains, Not Adult Templates
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Adolescent treatment is not the same as adult treatment with a younger age range. The clinical approach, the group dynamics, the family involvement, and the therapeutic methods are fundamentally different. Here is what each program looks like for a teenager.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.6 } }}
              className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-12 max-w-4xl mx-auto"
            >
              <Image
                src="/images/adolescent/adolescent-group-therapy-program-desert-recovery-centers.jpg"
                alt="Adolescent group therapy session at Desert Recovery Centers Phoenix, teenagers in a circle with a licensed facilitator in a modern treatment room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </motion.div>
            <AdolescentProgramsTabs />
          </div>
        </section>
      </motion.div>

      {/* ── SECTION 6: Family Involvement ─────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium block"
              >
                Family Is Part of Treatment
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6"
              >
                We Do Not Treat Your Teenager in Isolation. We Treat Your Family.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-gray-600 leading-relaxed text-lg mb-4"
              >
                The research on adolescent mental health is unambiguous: treatment outcomes for teenagers are dramatically better when parents are actively involved. Not as observers. Not as people who drop off and pick up. As participants in the clinical process. At Desert Recovery Centers, family involvement is not a feature of our adolescent program. It is a requirement.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-lg mb-4"
              >
                Every week, you participate in family therapy sessions with your teenager and their primary therapist. You learn what your teenager is experiencing from a clinical perspective, not just the version they share at home. You learn how the family system, communication patterns, stress responses, and home dynamics, may be contributing to or complicating your teenager&apos;s recovery. And you learn what to do differently.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-gray-600 leading-relaxed text-lg mb-6"
              >
                You also receive regular direct communication from your teenager&apos;s clinical team. Not vague updates. Specific clinical information about your teenager&apos;s progress, their treatment plan, and what you can do at home to reinforce the work being done in sessions. You are never left wondering what is happening. You are a member of the team.
              </motion.p>

              {/* Family timeline callout */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.3 }}
                className="bg-cream border border-gold/30 rounded-xl p-6"
              >
                <h3 className="font-display text-base text-forest font-semibold mb-3">
                  What Parent Involvement Looks Like Week by Week
                </h3>
                <ul className="space-y-2">
                  {familyTimeline.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
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
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right side: image + stat cards */}
            <div className="space-y-4">
              <AdolescentImage3 />
              {[
                {
                  stat: "Required",
                  label:
                    "Family therapy is not optional, it is built into every adolescent program",
                },
                {
                  stat: "Weekly",
                  label:
                    "Direct clinical updates to parents throughout treatment",
                },
                {
                  stat: "Same Team",
                  label:
                    "Your teenager's therapist, psychiatrist, and case manager communicate daily",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.12,
                  }}
                  className="bg-cream rounded-xl p-6 border border-gold/20"
                >
                  <p className="font-display text-2xl text-gold font-bold mb-1">
                    {item.stat}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: What We Treat (Accordion) ─────────── */}
      <ConditionsAccordion />

      {/* ── SECTION 7.5: Banner Image Before Timeline ────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.0 }}
        className="relative w-full h-[280px] md:h-[360px] overflow-hidden"
      >
        <Image
          src="/images/adolescent/adolescent-outpatient-treatment-center-phoenix-arizona.jpg"
          alt="Modern outpatient treatment center common area at Desert Recovery Centers Phoenix adolescent mental health program"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.55))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/90 font-body text-sm tracking-[0.2em] uppercase font-medium">
            The Process
          </span>
        </div>
      </motion.div>

      {/* ── SECTION 8: Admissions Timeline ────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              The Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              What Happens After You Call
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We know calling a treatment center for your child is one of the hardest things a parent can do. Here is exactly what the process looks like so there are no surprises.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={timelineContainerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="hidden lg:block absolute top-[32px] left-[12.5%] right-[12.5%] h-[2px] bg-gold/30 origin-left z-0"
            />

            {admissionSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={timelineStepVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative bg-cream rounded-xl p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-display font-bold text-sm mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="font-display text-base text-forest font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 10: Trust & Credentials ───────────────── */}
      <section className="py-10 md:py-14 bg-cream border-t border-b border-gray-100">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-sm text-forest/70 font-medium whitespace-nowrap"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: CTA Banner ────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
            Your Child Deserves More Than Waiting to See
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Every week a teenager does not get the help they need is a week of school missed, relationships damaged, and pain accumulated. Our admissions team is available right now, any hour of any day. One call is all it takes to find out if we are the right fit for your family.
          </p>
          <p className="text-gold text-sm font-medium mb-10">
            Most adolescents begin treatment within 48 hours of the first call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+16232575384"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Call (623) 257-5384
            </a>
            <Link
              href="/insurance"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Verify Insurance Free
            </Link>
            <a
              href="mailto:contact@desertrecoverycenters.com"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
            >
              Email Us
            </a>
          </div>
          <p className="text-white/40 text-xs mt-8 max-w-xl mx-auto">
            If your teenager is in immediate danger, please call 911 or go to your nearest emergency room. Desert Recovery Centers does not provide emergency or crisis stabilization services.
          </p>
        </motion.div>
      </section>

      {/* ── SECTION 12: Insurance Strip ───────────────────── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm mb-6 max-w-2xl mx-auto">
            Most major insurance plans cover adolescent PHP and IOP. Under federal law, mental health coverage must be equal to medical coverage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-4">
            {insuranceProviders.map((name) => (
              <span
                key={name}
                className="text-sm text-forest/60 font-medium"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-xs">
            Coverage varies by plan. Call (623) 257-5384 for a free benefits verification specific to your teenager&apos;s insurance.
          </p>
        </div>
      </section>
    </>
  );
}
