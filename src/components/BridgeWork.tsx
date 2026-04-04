"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const includes = [
  "Brief structured sessions between formal therapy",
  "Focused on accountability, psychoeducation, and real-life application of clinical skills",
  "Reinforcement of CBT, DBT, trauma, coping skills, and recovery strategies",
];

const isNot = [
  "Not case management",
  "Not a replacement for primary individual therapy sessions",
];

const idealFor = [
  "Trauma histories",
  "Emotional dysregulation",
  "ADHD",
  "Difficulty applying skills under stress",
  "Relapse vulnerability or poor executive functioning",
];

export default function BridgeWork() {
  return (
    <section className="bg-forest py-20 md:py-28 overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Left content, 60% */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-[60%]"
          >
            <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
              Proprietary Program
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />

            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-3 leading-tight">
              BridgeWork<span className="text-gold">™</span>
            </h2>
            <p className="text-white/80 font-display text-lg md:text-xl mb-6 leading-relaxed">
              Clinical Psychologist-Led Skill Integration.{" "}
              <span className="text-gold italic">Where Therapy Becomes Practice.</span>
            </p>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Developed in-house by our clinical team, BridgeWork™ fills one of the most
              overlooked gaps in residential care: the space between insight and action.
              This program offers 1–2 additional focused sessions per week with a therapist
              under the direction of our clinical psychologists, designed to help clients
              apply therapeutic tools in real time.
            </p>

            {/* What it includes */}
            <div className="mb-6">
              <h3 className="text-white font-body text-sm font-semibold uppercase tracking-wide mb-3">
                What It Includes
              </h3>
              <ul className="space-y-2.5">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What it is NOT */}
            <div className="mb-6">
              <h3 className="text-white font-body text-sm font-semibold uppercase tracking-wide mb-3">
                What It Is Not
              </h3>
              <ul className="space-y-2.5">
                {isNot.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal for */}
            <div className="mb-8">
              <h3 className="text-white font-body text-sm font-semibold uppercase tracking-wide mb-3">
                Ideal for Clients With
              </h3>
              <ul className="space-y-2.5">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer line */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-gold text-sm font-medium italic">
                BridgeWork™ is one of the only clinical psychologist-led skill integration
                programs in the region.
              </p>
            </div>
          </motion.div>

          {/* Right photo, 40%, slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="md:w-[40%] w-full"
          >
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg"
                alt="Desert Recovery Centers therapy room, BridgeWork program"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-gold/90 text-white text-xs font-semibold px-4 py-2 rounded-lg">
                  BridgeWork™ Program
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
