"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Dual Diagnosis Specialization",
    desc: "Mental health and addiction rarely exist in isolation. Our clinical team treats both conditions simultaneously — because addressing only one leaves the other untreated and recovery incomplete.",
  },
  {
    title: "10-Bed Maximum Philosophy",
    desc: "We intentionally limit each facility to 10 beds. This ensures every client receives deeply personalized attention from licensed psychologists, psychiatrists, and therapists — not assembly-line care.",
  },
  {
    title: "Joint Commission Accredited",
    desc: "Desert Recovery Centers holds the Gold Seal of Approval from The Joint Commission, the nation's most rigorous standard for healthcare quality and patient safety. This accreditation reflects our commitment to clinical excellence at every level.",
  },
  {
    title: "Evidence-Based Clinical Care",
    desc: "Every treatment plan is rooted in peer-reviewed research. CBT, DBT, EMDR, trauma-focused therapies, and Medication-Assisted Treatment are delivered by doctoral-level clinicians with specialized training.",
  },
  {
    title: "Luxury Healing Environment",
    desc: "Recovery happens best when you feel safe. Our Arizona facilities feature private rooms, gourmet meals, pools, fitness centers, and mountain views — clinical treatment in a setting that supports whole-person healing.",
  },
  {
    title: "Comprehensive Aftercare",
    desc: "Treatment is the beginning, not the end. Our aftercare planning, alumni network, and ongoing support resources are designed to protect your progress and sustain recovery long after discharge.",
  },
];

const milestones = [
  {
    label: "Joint Commission Accredited",
    detail: "Gold Seal of Approval",
  },
  {
    label: "3 Facilities Across Arizona",
    detail: "Glendale, Scottsdale, Phoenix",
  },
  {
    label: "10-Bed Maximum",
    detail: "Per facility for personalized care",
  },
  {
    label: "Dual Diagnosis Focus",
    detail: "Mental health + addiction together",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Mission
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Built Around the People We Serve
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Desert Recovery Centers was founded on a simple conviction: people struggling with mental health conditions and addiction deserve more than a bed and a checklist. They deserve clinical excellence delivered with genuine compassion, in an environment that supports healing at every level.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Too many treatment centers prioritize volume over outcomes. We chose a different path. By limiting each facility to just 10 beds, we ensure that every person who walks through our doors receives the individualized attention that drives real, lasting change.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our founding team saw firsthand what works in behavioral health — and what doesn&apos;t. DRC was built to be the treatment center they wished existed: clinically rigorous, deeply personal, and relentlessly focused on outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/images/glendale/Glendale-Living-Room.jpg"
                alt="Desert Recovery Centers luxury living area"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heal. Restore. Thrive. Tagline Banner */}
      <section className="py-12 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white font-bold tracking-wide">
            Heal. <span className="text-gold">Restore.</span> Thrive.
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Three words that guide everything we do — from the clinical protocols we follow to the way we greet you at the door.
          </p>
        </motion.div>
      </section>

      {/* At a Glance */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              At a Glance
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Desert Recovery Centers
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border-t-[3px] border-t-transparent hover:border-t-gold hover:shadow-xl transition-all duration-[250ms]"
              >
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values / What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                What Sets Us Apart
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Clinical Excellence, Personal Attention
              </h2>
            </motion.div>
            <div className="space-y-4">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-cream rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 md:order-1"
            >
              <Image
                src="/images/glendale/Glendale-Pool.jpg"
                alt="Desert Recovery Centers pool and grounds"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Story
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Why We Built DRC
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Desert Recovery Centers grew from a recognition that the behavioral health industry needed a fundamentally different model. Our founders — clinicians and operators who spent years inside traditional treatment systems — saw patients cycling through programs that treated symptoms without addressing root causes, and discharged people before they were ready.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                DRC was designed from the ground up to correct those failures. Small facility sizes ensure no one gets lost. Doctoral-level clinical leadership means treatment plans are informed by the latest research. A dual diagnosis model ensures that mental health and addiction are treated together — because they almost always occur together.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, DRC operates three luxury residential facilities across Arizona. Our approach hasn&apos;t changed: treat fewer people, treat them better, and give them every possible advantage in building a life worth living. <strong className="text-forest">Heal. Restore. Thrive.</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditation & Trust */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Accreditation & Trust
              </span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Held to the Highest Standards
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Desert Recovery Centers is accredited by The Joint Commission — the gold standard in healthcare accreditation. This means our clinical protocols, safety procedures, patient rights protections, and treatment outcomes are regularly evaluated against the most rigorous benchmarks in the industry. We also maintain LegitScript certification, verifying that our advertising and business practices meet the highest ethical standards.
              </p>
              <div className="flex items-center justify-center gap-8">
                <Image
                  src="/JointCommission_GoldSeal.png"
                  alt="Joint Commission Gold Seal of Approval"
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                />
                <div className="flex items-center gap-2">
                  <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-forest text-sm font-semibold">
                    LegitScript<br />Certified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Note */}
      <section className="py-8 bg-cream">
        <div className="max-w-container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
          </p>
        </div>
      </section>
    </>
  );
}
