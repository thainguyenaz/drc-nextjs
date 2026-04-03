"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Luxury, Home-Like Setting",
    description: "Our facilities feel like high-end residences, not hospitals. Private rooms, gourmet meals, and resort-style amenities support your healing journey.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Evidence-Based Treatment",
    description: "Every protocol is grounded in peer-reviewed clinical research. CBT, DBT, EMDR, and MAT form the backbone of our programs.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Individualized Care Plans",
    description: "No two clients are the same. Your treatment plan is built around your unique needs, goals, and circumstances from day one.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Dual Diagnosis Expertise",
    description: "Our team specializes in treating co-occurring mental health and addiction disorders simultaneously for better outcomes.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Small Client-to-Staff Ratio",
    description: "With a boutique-sized program, you get more one-on-one time with your therapist, psychiatrist, and support team.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Aftercare & Alumni Support",
    description: "Recovery doesn't end at discharge. Our alumni program, relapse prevention planning, and ongoing support keep you connected.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-4">
            Six Reasons to Choose Desert Recovery Centers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
