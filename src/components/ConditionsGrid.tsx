"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

function ConditionIcon({ name }: { name: string }) {
  const cls = "w-9 h-9 text-sage";
  switch (name) {
    case "Anxiety Disorders":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 017 7c0 3-2 5-3.5 7S13 20 12 22c-1-2-2.5-4-3.5-6S5 12 5 9a7 7 0 017-7z" />
          <path d="M12 2v4M8.5 5.5l2 2M15.5 5.5l-2 2" />
          <circle cx="12" cy="10" r="1.5" fill="currentColor" />
        </svg>
      );
    case "Depression":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21l-1.45-1.32C5.4 14.36 2 11.28 2 7.5A5.5 5.5 0 017.5 2c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0116.5 2 5.5 5.5 0 0122 7.5c0 3.78-3.4 6.86-8.55 12.18L12 21z" />
          <path d="M12 13v4M12 17l-2-2M12 17l2-2" />
        </svg>
      );
    case "PTSD & Trauma":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M13 7l-2 5h4l-2 5" />
        </svg>
      );
    case "Bipolar Disorder":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M8 7l4-4 4 4" />
          <path d="M8 17l4 4 4-4" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      );
    case "OCD":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" />
          <path d="M2.5 22v-6h6" />
          <path d="M21.5 8A10 10 0 003.7 5.3" />
          <path d="M2.5 16a10 10 0 0017.8 2.7" />
        </svg>
      );
    case "Personality Disorders":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 16c0 2.21 2.69 4 6 4s6-1.79 6-4" />
          <path d="M2 16V8c0-2.21 2.69-4 6-4 1.74 0 3.31.5 4.47 1.3" />
          <ellipse cx="8" cy="8" rx="6" ry="4" />
          <path d="M10 16c0 2.21 2.69 4 6 4s6-1.79 6-4V8c0-2.21-2.69-4-6-4-1.74 0-3.31.5-4.47 1.3" />
          <path d="M22 12c0 2.21-2.69 4-6 4s-6-1.79-6-4" />
        </svg>
      );
    case "ADHD":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "Schizophrenia":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 00-7.07 2.93" />
          <path d="M12 2a10 10 0 017.07 2.93" />
          <path d="M2 12a10 10 0 002.93 7.07" />
          <path d="M22 12a10 10 0 01-2.93 7.07" />
          <path d="M4.93 19.07A10 10 0 0012 22" />
          <path d="M19.07 19.07A10 10 0 0112 22" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V2M12 22v-7M9 12H2M22 12h-7" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
  }
}

export default function ConditionsGrid() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Conditions We Treat
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
            Mental Health Treatment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive, evidence-based care for a wide range of mental health
            conditions, delivered with compassion in a luxury setting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.mentalHealth.map((condition, i) => (
            <motion.div
              key={condition.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={condition.href}
                className="group block bg-white rounded-xl p-6 shadow-sm border-t-[3px] border-t-transparent hover:border-t-gold hover:shadow-xl transition-all duration-[250ms] ease-out h-full cursor-pointer overflow-hidden"
              >
                {/* Icon square */}
                <div className="w-[80px] h-[80px] mb-5 border border-sage/40 group-hover:border-gold rounded-xl flex items-center justify-center transition-colors duration-[250ms] bg-sage/5">
                  <ConditionIcon name={condition.name} />
                </div>
                {/* Name */}
                <h3 className="font-body text-forest font-bold text-base mb-2">
                  {condition.name}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-1">
                  {condition.description}
                </p>
                {/* Learn More */}
                <span className="text-gold text-sm font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
