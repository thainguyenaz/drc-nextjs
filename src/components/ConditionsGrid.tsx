"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

const iconMap: Record<string, string> = {
  "Anxiety Disorders": "/images/icons/DRC-Anxiety-Green.svg",
  "Depression": "/images/icons/DRC-Depression-Green.svg",
  "PTSD & Trauma": "/images/icons/DRC-PTSD-Green.svg",
  "Bipolar Disorder": "/images/icons/DRC-Bipolar-Green.svg",
  "OCD": "/images/icons/DRC-OCD-Green.svg",
  "Personality Disorders": "/images/icons/DRC-Personality_Disorder-Green.svg",
  "ADHD": "/images/icons/DRC-ADHD-Green.svg",
  "Schizophrenia": "/images/icons/DRC-Schizophrenia-Green.svg",
};

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
            conditions — delivered with compassion in a luxury setting.
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
                className="group block bg-white rounded-xl p-6 shadow-sm border-t-2 border-t-transparent hover:border-t-gold hover:shadow-xl hover:scale-105 transition-all duration-[250ms] h-full cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-4 border-2 border-sage/30 group-hover:border-gold rounded-xl flex items-center justify-center transition-colors duration-[250ms]">
                  {iconMap[condition.name] ? (
                    <Image
                      src={iconMap[condition.name]}
                      alt={`${condition.name} icon`}
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  ) : (
                    <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
                {/* Name */}
                <h3 className="font-body text-forest font-bold text-base mb-2">
                  {condition.name}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
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
