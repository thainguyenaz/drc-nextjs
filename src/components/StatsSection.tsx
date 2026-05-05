"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 970,
    suffix: "M+",
    label: "People worldwide live with a mental health condition",
    source: "WHO",
  },
  {
    value: 21.5,
    suffix: "M",
    label: "U.S. adults live with co-occurring substance use disorder and mental illness",
    source: "SAMHSA, 2023 NSDUH",
  },
  {
    value: 10,
    suffix: "",
    label: "Beds maximum per residential facility, intentionally intimate care",
    source: "Desert Recovery Centers",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
            The Numbers
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
            The Numbers That Define Our Approach
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            National data on the scale of behavioral health needs, and how Desert Recovery Centers structures care to meet them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-gold font-display text-5xl md:text-6xl font-bold mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                {stat.label}
              </p>
              {stat.source && (
                <span className="text-white/30 text-xs mt-2 block">({stat.source})</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
