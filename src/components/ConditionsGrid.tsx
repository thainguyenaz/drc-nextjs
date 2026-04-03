"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export default function ConditionsGrid() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Conditions We Treat
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-4">
            Mental Health Treatment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive, evidence-based care for a wide range of mental health
            conditions — delivered with compassion in a luxury setting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.mentalHealth.map((condition, i) => (
            <motion.div
              key={condition.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={condition.href}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full cursor-pointer"
              >
                <h3 className="font-display text-lg text-forest font-semibold mb-2">
                  {condition.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {condition.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
