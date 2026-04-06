"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const phases = [
  {
    step: "01",
    title: "30-Day Residential Treatment (RTC)",
    desc: "24/7 immersive care in a luxury 10-bed facility with doctoral-level clinicians, medical detox, and Bridge Work individual therapy.",
    href: "/treatments/residential",
  },
  {
    step: "02",
    title: "Partial Hospitalization Program (PHP)",
    desc: "Up to 60 days of structured day programming, 5-6 hours daily, 5 days per week, while returning home each evening.",
    href: "/locations/phoenix-php-iop",
  },
  {
    step: "03",
    title: "Intensive Outpatient Program (IOP)",
    desc: "4 to 8 weeks stepping down from 5 to 3 days per week. Bridge Work continues with group therapy, relapse prevention, and peer support.",
    href: "/locations/phoenix-php-iop",
  },
  {
    step: "04",
    title: "Outpatient Program (OP)",
    desc: "Ongoing 1-3 day per week sessions for long-term stabilization, psychiatric care, and full community reintegration.",
    href: "/locations/phoenix-php-iop",
  },
  {
    step: "05",
    title: "Alumni Program",
    desc: "Lifetime access to our recovery community, peer events, check-ins, and ongoing support from the team that knows your journey.",
    href: "/about-us",
  },
  {
    step: "06",
    title: "Family Workshop",
    desc: "Education and healing for the whole family, communication skills, boundary setting, and understanding the recovery process.",
    href: "/contact",
  },
];

export default function ContinuumOfCare() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Levels of Care
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-4">
            Our Continuum of Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A structured path from acute care to long-term independence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={phase.href}
                className="block bg-cream rounded-2xl p-6 border border-transparent hover:border-gold/30 transition-all group h-full"
              >
                <span className="text-gold font-display text-2xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                  {phase.step}
                </span>
                <h3 className="font-display text-lg text-forest font-semibold mt-2 mb-3 group-hover:text-gold transition-colors">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
