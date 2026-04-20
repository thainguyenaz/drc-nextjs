"use client";

import { motion } from "framer-motion";

const manicSymptoms = [
  "Abnormally elevated or irritable mood lasting days or weeks",
  "Dramatically decreased need for sleep without feeling tired",
  "Racing thoughts, rapid speech, jumping between ideas",
  "Grandiosity, inflated self-esteem or unrealistic beliefs about abilities",
  "Impulsive, risky behavior: spending sprees, reckless driving, risky sex",
  "Inability to focus, starting many projects but finishing none",
];

const depressiveSymptoms = [
  "Deep sadness, emptiness, or hopelessness lasting weeks or more",
  "Loss of interest or pleasure in all activities",
  "Extreme fatigue and difficulty with basic daily tasks",
  "Difficulty concentrating, making decisions, or remembering",
  "Changes in sleep, insomnia or sleeping excessively",
  "Thoughts of death or suicide",
];

export default function BipolarSymptomsSection() {
  return (
    <section className="py-16 md:py-24 bg-forest">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
            Recognizing the Signs
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mt-4">
            Symptoms of Bipolar Disorder
          </h2>
        </motion.div>

        {/* Two panels */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* LEFT PANEL — Manic / Hypomanic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: "#2D1F00" }}
          >
            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-1 bg-amber-400 origin-left"
            />
            <div className="p-8 md:p-10">
              <h3 className="text-amber-300 font-body text-xs tracking-[0.2em] uppercase font-semibold mb-6">
                Manic / Hypomanic Episodes
              </h3>
              <div>
                {manicSymptoms.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.06 + 0.4,
                    }}
                    whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.04)" }}
                    className={`group flex items-start gap-3 py-3.5 px-2 -mx-2 rounded-lg transition-colors cursor-default ${
                      i < manicSymptoms.length - 1
                        ? "border-b border-amber-400/[0.12]"
                        : ""
                    }`}
                  >
                    <div className="w-[3px] h-5 rounded-full bg-amber-400 opacity-60 group-hover:opacity-100 group-hover:scale-y-125 transition-all duration-200 flex-shrink-0 mt-0.5" />
                    <p className="text-stone-100 text-sm leading-relaxed">
                      {s}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL — Depressive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: "#0F1A2E" }}
          >
            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-1 bg-blue-400 origin-left"
            />
            <div className="p-8 md:p-10">
              <h3 className="text-blue-300 font-body text-xs tracking-[0.2em] uppercase font-semibold mb-6">
                Depressive Episodes
              </h3>
              <div>
                {depressiveSymptoms.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.06 + 0.4,
                    }}
                    whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.04)" }}
                    className={`group flex items-start gap-3 py-3.5 px-2 -mx-2 rounded-lg transition-colors cursor-default ${
                      i < depressiveSymptoms.length - 1
                        ? "border-b border-blue-400/[0.10]"
                        : ""
                    }`}
                  >
                    <div className="w-[3px] h-5 rounded-full bg-blue-300 opacity-60 group-hover:opacity-100 group-hover:scale-y-125 transition-all duration-200 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-100 text-sm leading-relaxed">
                      {s}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
