"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ─── Animation Variants ────────────────────────────────────────────

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

// ─── Programs Data ─────────────────────────────────────────────────

const programs = [
  {
    tag: "Individual Therapy",
    sublabel: "Multiple Sessions Weekly",
    title: "Individual Therapy With Doctoral Level Clinicians",
    badge: "2 to 3 sessions per week, minimum",
    body: "In most residential programs, individual therapy means one 50-minute session per week with a master\u2019s level counselor. At Desert Recovery Centers, individual therapy is conducted by licensed clinical psychologists who hold doctoral degrees. You receive multiple sessions per week. Your therapist knows your case inside and out, has reviewed your history before your first session, and is in daily communication with your psychiatrist and nursing team.",
    body2: "This is the heart of the program. The group work, the holistic therapies, the structure, all of it supports what happens in the room between you and your therapist. CBT, DBT, EMDR, trauma focused therapy, and motivational interviewing are available and matched to your specific diagnosis and presentation. Your therapist does not rotate. You build a real therapeutic relationship, and that relationship is part of what makes the work possible.",
    features: [
      "Licensed clinical psychologists with doctoral degrees",
      "CBT, DBT, EMDR, and trauma focused modalities available",
      "2 to 3 individual sessions per week minimum",
      "Consistent therapist throughout the program",
      "Coordination with psychiatry and nursing daily",
      "Treatment plan review and adjustment weekly",
    ],
  },
  {
    tag: "Group Therapy",
    sublabel: "Daily Clinical Groups",
    title: "Daily Group Therapy and Skills Programming",
    badge: "Multiple groups daily, clinician facilitated",
    body: "Group therapy is not a filler activity at Desert Recovery Centers. It is a core clinical intervention delivered daily by licensed clinicians. Groups are not generic. They are diagnosis informed and skill focused: cognitive behavioral skills training, dialectical behavior therapy skills, trauma processing groups, dual diagnosis education, relapse prevention, and interpersonal effectiveness.",
    body2: "The peer component of group therapy is itself therapeutic. Sitting in a room with other people who are fighting something similar, watching them make progress, being held accountable by people who understand what you are going through, that experience cannot be replicated in individual therapy. Our group sizes are deliberately small to protect the quality of the therapeutic work.",
    features: [
      "Multiple clinical groups daily, not recreational",
      "CBT skills, DBT skills, trauma processing, and relapse prevention groups",
      "Small group sizes for therapeutic depth",
      "Facilitated by licensed clinicians, not paraprofessionals",
      "Gender specific group options available at Scottsdale",
      "Evening peer support and community building activities",
    ],
  },
  {
    tag: "Psychiatric Care",
    sublabel: "Board Certified Psychiatrist",
    title: "Comprehensive Psychiatric Evaluation and Medication Management",
    badge: "On site board certified psychiatrist",
    body: "Psychiatric care at Desert Recovery Centers is delivered by a board certified psychiatrist who is embedded in the treatment team, not consulting remotely. Your initial psychiatric evaluation is comprehensive. Not a 15-minute intake. A thorough diagnostic assessment that considers your full history, your previous medication trials, your current presentation, and the clinical picture being built by your psychologist and nursing team.",
    body2: "Medication management in residential treatment means real time adjustments. If a medication is not working or is causing side effects, we do not wait until your next scheduled appointment. We respond. If you have never been properly evaluated for a mood disorder, a trauma related condition, or a co-occurring diagnosis that has been missed, we find it. Many clients leave our residential program with a clearer diagnostic picture than they have had in years of prior treatment.",
    features: [
      "Board certified psychiatrist on site, not consulting remotely",
      "Comprehensive diagnostic psychiatric evaluation on admission",
      "Real time medication adjustments throughout the program",
      "Dual diagnosis assessment for all clients",
      "Coordination with individual therapist and nursing daily",
      "Detailed medication plan and psychiatric summary at discharge",
    ],
  },
  {
    tag: "Medical Care",
    sublabel: "24/7 Nursing Staff",
    title: "Around the Clock Medical Monitoring",
    badge: "Registered nurses on site 24 hours a day",
    body: "Registered nurses are present at Desert Recovery Centers around the clock. This is not a staffing upgrade. It is a clinical necessity. Addiction and mental health conditions have medical dimensions that require trained clinical observation, particularly in the early weeks of treatment when the body and brain are recalibrating from substance use or psychiatric instability.",
    body2: "Nursing staff at DRC monitor vital signs, administer medications, assess for withdrawal symptoms, and provide the kind of continuous clinical observation that keeps residential treatment safe. They are also a consistent human presence, available in the middle of the night when the discomfort of early recovery is at its hardest. That combination of medical competence and human availability is what separates residential treatment from everything beneath it on the continuum of care.",
    features: [
      "Registered nurses on site 24 hours a day, 7 days a week",
      "Vital sign monitoring and medical assessment throughout",
      "Withdrawal symptom assessment and management",
      "Medication administration and adherence support",
      "Emergency medical response protocols in place",
      "Coordination with psychiatrist and clinical team daily",
    ],
  },
  {
    tag: "Family Program",
    sublabel: "Required Involvement",
    title: "Structured Family Therapy and Education",
    badge: "Weekly family sessions, required not optional",
    body: "Recovery does not happen in isolation from the people who love you. It happens in the context of those relationships, and those relationships are often part of what needs to heal. Desert Recovery Centers requires family involvement in residential treatment because the research is clear: treatment outcomes are significantly better when families are active participants, not waiting room visitors.",
    body2: "Family programming at DRC includes weekly family therapy sessions with your primary therapist, psychoeducation groups that explain the clinical dimensions of what your loved one is experiencing, communication skills training, and family support groups where family members can process their own experience. We treat the family system. We also recognize that family involvement requires education. Many families have been living with the effects of addiction or mental illness for years without ever having it explained to them clinically.",
    features: [
      "Weekly family therapy sessions with primary therapist",
      "Psychoeducation for family members on diagnosis and treatment",
      "Communication skills and family system repair",
      "Family support groups facilitated separately from client groups",
      "Regular clinical updates to designated family contact",
      "Family involvement in discharge planning and aftercare",
    ],
  },
  {
    tag: "Holistic Care",
    sublabel: "Whole Person Healing",
    title: "Holistic Therapies and Wellness Programming",
    badge: "Daily holistic programming alongside clinical treatment",
    body: "Evidence based clinical treatment is the foundation. Holistic therapies are what make that foundation sustainable. Yoga, mindfulness meditation, art therapy, nutritional counseling, fitness programming, massage therapy, and SoftWave therapy at our Scottsdale location. These are not amenities that justify the price of residential treatment. They are interventions with documented clinical benefit for stress regulation, trauma processing, sleep quality, and emotional resilience.",
    body2: "The body carries the experience of addiction and mental illness as surely as the mind does. Chronic stress, disrupted sleep, nutritional depletion, physical tension, these are not just symptoms. They are obstacles to the neurological recovery process. Holistic programming at DRC addresses them directly, creating the physical conditions in which the brain can begin to heal alongside the therapeutic work happening in sessions.",
    features: [
      "Yoga and mindfulness meditation daily",
      "Art therapy and expressive modalities",
      "Nutritional counseling and gourmet meal programming",
      "Fitness and physical wellness programming",
      "Massage therapy available at both locations",
      "SoftWave therapy available at Scottsdale location",
    ],
  },
];

// ─── Differentiators Data ──────────────────────────────────────────

const differentiators = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Joint Commission Accredited",
    body: "The Joint Commission gold seal is the highest standard of accreditation in behavioral health. It means our clinical protocols, safety practices, and quality of care have been independently audited and verified. Not every treatment center in Arizona has earned it. We have maintained it.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Doctoral Level Clinical Direction",
    body: "Your treatment plan is built and directed by licensed clinical psychologists with doctoral degrees, not master\u2019s level counselors acting as primary clinicians. This distinction matters clinically. The depth of diagnostic sophistication and therapeutic precision at the doctoral level is meaningfully different.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Small Client to Staff Ratios",
    body: "We deliberately limit the number of clients at each facility. This is not a business constraint. It is a clinical choice. A treatment center with 10 clients and 8 staff delivers a fundamentally different clinical experience than one with 40 clients and 12 staff. You are not a bed number here.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Integrated Dual Diagnosis Treatment",
    body: "Up to 60% of people with addiction also have a co-occurring mental health disorder. Most treatment centers treat one or the other. We treat both simultaneously with a single integrated team. Treating addiction without addressing the underlying mental health condition is the leading cause of relapse. We do not make that mistake.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Discharge Planning From Day One",
    body: "The transition out of residential treatment is where most programs fail their clients. We begin discharge planning on day one. Before you leave, you have a specific aftercare plan, a step down level of care scheduled, medication continuity established, and outpatient connections confirmed. You do not walk out the door into uncertainty.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "A Setting That Supports Healing",
    body: "The research on therapeutic environment is not ambiguous. People heal faster in settings that feel safe, comfortable, and respectful. Our facilities were designed with that evidence in mind. Private rooms, quality meals, resort amenities, and a physical environment that tells you every day that your recovery is worth investing in.",
  },
];

// ─── Daily Schedule Data ───────────────────────────────────────────

const dailySchedule = [
  {
    step: "1",
    title: "Morning",
    body: "The day begins with a structured morning routine, breakfast prepared by our kitchen staff, and a daily community meeting where clients and staff connect as a group. The morning group meeting sets the clinical intention for the day and gives the team an early read on how each client is doing.",
  },
  {
    step: "2",
    title: "Clinical Programming",
    body: "Morning and early afternoon are dedicated to primary clinical work: individual therapy sessions, group therapy, and specialized skills groups. CBT skills training, DBT modules, trauma processing groups, and dual diagnosis education sessions are woven through the week according to each client\u2019s individualized schedule.",
  },
  {
    step: "3",
    title: "Holistic Programming",
    body: "Mid-afternoon shifts to holistic and wellness programming. Yoga, art therapy, mindfulness, fitness, nutritional counseling, and therapeutic recreation. These are not optional add ons. They are scheduled clinical interventions that address the physical and emotional dimensions of recovery alongside the cognitive and psychological work done in morning sessions.",
  },
  {
    step: "4",
    title: "Evening",
    body: "Evenings include peer support activities, 12-step or alternative recovery meetings, journaling, and time to decompress and process the day. The nursing team is present throughout. The structure continues, but the pace is gentler, allowing the work of the day to settle.",
  },
  {
    step: "5",
    title: "Nightly Check-In",
    body: "Before bed, clients complete a brief check in with a staff member. Sleep quality is monitored because sleep disruption is both a symptom and a driver of mental health instability. Medications are administered if needed. The clinical team reviews the day\u2019s observations and prepares for the next. The work never fully stops. Neither does the care.",
  },
];

// ─── Admissions Steps Data ─────────────────────────────────────────

const admissionSteps = [
  {
    step: "1",
    title: "Call Any Time. Someone Answers.",
    body: "Our admissions line is staffed 24 hours a day, every day of the year. No voicemail, no callback queue. A trained admissions coordinator answers, listens to what you are going through, and begins the process immediately. If you are in crisis, tell us. We prioritize emergency admissions and have accommodated same day intake when the clinical situation warranted it.",
  },
  {
    step: "2",
    title: "Clinical Assessment by Phone",
    body: "A clinical assessment takes approximately 15 to 20 minutes. We ask about your history, your current situation, what you have tried before, and what is happening right now. This is not a sales call. It is the beginning of your clinical record, and it determines which of our programs and which campus is the right fit for your specific needs.",
  },
  {
    step: "3",
    title: "Insurance Verified Before You Commit",
    body: "We contact your insurance provider directly and determine exactly what your residential treatment benefits cover, what the authorization process requires, and what your out of pocket responsibility will be if any. You know the full financial picture before you make any decision. No ambiguity, no surprises at checkout.",
  },
  {
    step: "4",
    title: "Admitted, Usually Within 24 to 48 Hours",
    body: "Once your assessment is complete and insurance is verified, we schedule your admission. Most clients are admitted within 24 to 48 hours of their first call. Your room is ready. Your clinical team has reviewed your intake information. Your first therapy appointment is already on the schedule. Day one, you are already in treatment.",
  },
];

// ─── Insurance Providers ───────────────────────────────────────────

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Magellan",
  "Beacon Health",
];

// ─── Videos Data ───────────────────────────────────────────────────

const videos = [
  {
    videoId: "00ZDcQjXoE8",
    title: "Desert Recovery Centers Glendale Facility Tour",
    label: "Glendale Campus",
    description: "Tour our flagship 7,500 sq ft residential facility in Glendale, Arizona.",
  },
  {
    videoId: "7qvyphmKNxg",
    title: "Desert Recovery Centers Scottsdale Facility Tour",
    label: "Scottsdale Campus",
    description: "Explore our luxury residential program nestled in the mountains of north Scottsdale.",
  },
  {
    videoId: "rMkEYhoW-kE",
    title: "Desert Recovery Centers Phoenix Treatment Overview",
    label: "Treatment Overview",
    description: "An inside look at the programs and clinical approach at Desert Recovery Centers.",
  },
];

// ─── Related Links ─────────────────────────────────────────────────

const relatedLinks = [
  { label: "PHP Program", href: "/locations/phoenix-php-iop" },
  { label: "IOP Program", href: "/locations/phoenix-php-iop" },
  { label: "CBT Therapy", href: "/treatments/cbt" },
  { label: "DBT Therapy", href: "/treatments/dbt" },
  { label: "EMDR Therapy", href: "/treatments/emdr" },
  { label: "Dual Diagnosis", href: "/treatments/dual-diagnosis" },
  { label: "Glendale Campus", href: "/locations/glendale" },
  { label: "Scottsdale Campus", href: "/locations/scottsdale" },
];

// ─── Sub-components ────────────────────────────────────────────────

function ProgramTabContent({ prog }: { prog: (typeof programs)[number] }) {
  return (
    <>
      <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
        {prog.badge}
      </span>
      <h3 className="font-display text-lg text-forest font-semibold mb-1">
        {prog.title}
      </h3>
      <p className="text-sage text-sm font-medium mb-3">{prog.sublabel}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.body}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.body2}</p>
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
  const [activeTab, setActiveTab] = useState("Individual Therapy");
  const [openAccordion, setOpenAccordion] = useState("Individual Therapy");
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
                {prog.sublabel}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProg.tag}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, x: 20, transition: { duration: 0.25 } }}
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
                <span className="text-sm font-medium text-forest">{prog.sublabel}</span>
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
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
                      {prog.badge}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.body}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.body2}</p>
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
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setEntered(true)}
      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
    >
      <motion.div
        animate={entered ? { scale: [1, 1.012, 1] } : {}}
        transition={entered ? { duration: 9, repeat: Infinity, ease: "easeInOut", repeatType: "loop" as const } : {}}
        whileHover={{ scale: 1.04, transition: { duration: 0.7 } }}
        className="relative w-full h-full overflow-hidden rounded-[inherit]"
      >
        <Image
          src="/images/glendale/Glendale-Living-Room.jpg"
          alt="Luxury living room at Desert Recovery Centers Glendale residential treatment center in Arizona"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </motion.div>
  );
}

function VideoCard({ video, index }: { video: (typeof videos)[number]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow"
    >
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
            aria-label={`Play ${video.title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-gold/90 group-hover:bg-gold rounded-full flex items-center justify-center transition-colors shadow-lg">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-bold tracking-widest uppercase text-gold">{video.label}</span>
        <p className="text-gray-600 text-sm leading-relaxed mt-1">{video.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────

export default function RTCContent() {
  return (
    <>
      {/* ── SECTION 3: Opening Statement ────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What Residential Treatment Is
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-8 leading-tight">
              When Outpatient Is Not Enough
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0 }}
              className="text-gray-600 leading-relaxed text-lg mb-4"
            >
              There is a threshold, and most people who have been struggling for a while know when they have crossed it. When the therapy appointments are not cutting through. When the medication is not holding. When the depression or the addiction or the anxiety has taken over to the point that daily life is no longer functional. When the people who love you are scared. That threshold is where residential treatment begins.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-gray-600 leading-relaxed text-lg mb-4"
            >
              Residential treatment, also called inpatient treatment or RTC, means you live at the facility for the duration of your program. You are not driving yourself to appointments and trying to hold it together in between. You are fully immersed in treatment, surrounded by a clinical team that is monitoring your progress around the clock and adjusting your care in real time. The distance from your triggers, your environment, and your daily stressors is not an inconvenience. It is part of the treatment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              At Desert Recovery Centers, residential treatment is delivered in a setting that feels nothing like an institution. It feels like a home. A well staffed, clinically rigorous, beautifully appointed home where the entire structure of your day is designed to move you toward recovery.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Split Section — Our Approach ─────────── */}
      <section className="py-16 md:py-24 bg-cream">
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
                Our Approach
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6"
              >
                Clinical Depth Without Clinical Distance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-gray-600 leading-relaxed text-lg mb-4"
              >
                The problem with most residential treatment centers is that they choose between clinical rigor and human comfort. They are either institutions that prioritize structure above everything else, or they are wellness retreats that mistake comfort for treatment. Desert Recovery Centers is neither.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-lg mb-4"
              >
                Our residential programs are directed by licensed clinical psychologists with doctoral degrees, the same credential required to direct the most rigorous clinical research programs in the country. Your treatment plan is built by someone who spent years studying exactly the condition you are dealing with. It is reviewed weekly. It is adjusted based on data, not intuition.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                At the same time, you are in a space that was designed to feel like a home. Private bedrooms. Gourmet meals. Resort amenities. Not because luxury is the point, but because people heal faster when they feel safe, comfortable, and respected. The research on this is clear. Environment is a variable in recovery outcomes, and we have optimized ours.
              </motion.p>
            </div>
            <OverviewImage />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Programs — Tabbed Panel ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                What Is Included
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
                A Full Continuum of Care, Under One Roof
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Residential treatment at DRC is not a single service. It is a coordinated clinical system where every component works together, directed by one team, looking at one treatment plan.
              </p>
            </div>

            <ProgramsTabs />
          </div>
        </section>
      </motion.div>

      {/* ── SECTION 6: Location Cards ──────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Locations
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              Two Luxury Campuses. One Standard of Care.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Both facilities deliver the same clinical depth with the same doctoral level team. The setting is different. The commitment is identical.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Glendale Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="relative rounded-xl overflow-hidden min-h-[500px] group"
            >
              <Image
                src="/images/glendale/Glendale-Front.jpg"
                alt="Front entrance of Desert Recovery Centers Glendale residential treatment facility"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/20 px-3 py-1 rounded-full mb-3 w-fit">
                  Glendale, Arizona
                </span>
                <h3 className="font-display text-2xl text-white font-semibold mb-1">DRC Glendale</h3>
                <p className="text-white/80 text-sm font-medium mb-2">Our Flagship Campus</p>
                <p className="text-white/60 text-sm mb-1">8105 W Frier Dr, Glendale, AZ 85303</p>
                <p className="text-white/60 text-sm mb-3">7,500 sq ft</p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Our original and largest facility, serving the West Valley and greater Phoenix area. Full residential programming with the complete continuum of care from detox coordination through PHP and IOP.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Pool", "Tennis Court", "Basketball Court", "Gym", "Massage Room", "Billiards Room", "Gourmet Kitchen", "Private Rooms"].map((a) => (
                    <span key={a} className="text-xs bg-white/15 text-white/90 px-2.5 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/locations/glendale"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Explore Glendale
                  </Link>
                  <a href="tel:+16233231012" className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (623) 323-1012
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Scottsdale Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="relative rounded-xl overflow-hidden min-h-[500px] group"
            >
              <Image
                src="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
                alt="Front entrance of Desert Recovery Centers Scottsdale luxury residential treatment center"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/20 px-3 py-1 rounded-full mb-3 w-fit">
                  North Scottsdale, Arizona
                </span>
                <h3 className="font-display text-2xl text-white font-semibold mb-1">DRC Scottsdale</h3>
                <p className="text-white/80 text-sm font-medium mb-2">Mountain Views, Clinical Excellence</p>
                <p className="text-white/60 text-sm mb-3">23222 N Church Rd, Scottsdale, AZ 85255</p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Nestled in the mountains of north Scottsdale, our women focused residential program offers an intimate, serene setting with stunning views and the full depth of DRC&apos;s clinical programming.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Pool", "Private Suites", "Gym", "Game Room", "Massage Therapy", "Yoga", "SoftWave Therapy", "Mountain Views"].map((a) => (
                    <span key={a} className="text-xs bg-white/15 text-white/90 px-2.5 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/locations/scottsdale"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Explore Scottsdale
                  </Link>
                  <a href="tel:+14809313617" className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (480) 931-3617
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Video Section ───────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              See Our Centers
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              Take a Virtual Tour
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              See exactly where you or your loved one would be. These are real walkthroughs of our residential facilities, not produced marketing videos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videos.map((video, i) => (
              <VideoCard key={video.videoId} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: What Makes DRC Different ────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              What Earns the Word Luxury
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Luxury in behavioral health means one thing: more of what matters. More clinical attention, more individualized care, more accountability in who delivers treatment, and yes, a more comfortable environment while you do the hardest work of your life.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
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

      {/* ── SECTION 10: Daily Schedule Timeline ────────────── */}
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
              What to Expect
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              A Day in Residential Treatment at DRC
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Routine is not a restriction in residential treatment. It is a clinical tool. Consistent structure regulates the nervous system, rebuilds circadian rhythm, and creates the conditions in which therapeutic work becomes possible.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={timelineContainerVariants}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative"
          >
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[2px] bg-gold/30 origin-left z-0"
            />

            {dailySchedule.map((step) => (
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

      {/* ── SECTION 11: Admissions Timeline ────────────────── */}
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
              Getting Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
              From Your First Call to Your First Day
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The decision to call is the hardest part. After that, we take care of everything.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={timelineContainerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto relative"
          >
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
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
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Related Programs ───────────────────────────────── */}
      <section className="py-12 bg-cream border-t border-gray-100">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-forest font-display text-lg font-semibold mb-4">Related Programs</h3>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: CTA Banner ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
            The Right Time Is Right Now
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Every day in active addiction or untreated mental illness is a day of damage accumulating. Not just to you, but to the people who love you and the life you are supposed to be living. Our admissions team is available this minute, and most clients are in treatment within 48 hours of this call.
          </p>
          <p className="text-gold text-sm font-medium mb-10">
            If you are experiencing a medical emergency, please call 911. Desert Recovery Centers does not provide emergency services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14809313617"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
            >
              Call (480) 931-3617
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
        </motion.div>
      </section>

      {/* ── SECTION 14: Insurance Strip ────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            We accept most major insurance plans. Under federal law, residential mental health and addiction treatment must be covered at the same level as medical care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {insuranceProviders.map((provider) => (
              <span
                key={provider}
                className="text-xs bg-sage/10 text-sage font-medium px-4 py-2 rounded-full"
              >
                {provider}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-xs">
            Coverage varies by plan. Call{" "}
            <a href="tel:+14809313617" className="text-gold font-medium hover:underline">
              (480) 931-3617
            </a>{" "}
            for a free benefits check before you commit to anything.
          </p>
        </div>
      </section>
    </>
  );
}
