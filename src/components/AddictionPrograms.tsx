"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

const iconMap: Record<string, string> = {
  "Alcohol": "/images/icons/DRC-Alcoholism-Green.svg",
  "Opioids": "/images/icons/DRC-Heroin_Addiction-Green.svg",
  "Cocaine": "/images/icons/DRC-Cocaine_Addiction-Green.svg",
  "Meth": "/images/icons/DRC-Meth_Addiction-Green.svg",
  "Fentanyl": "/images/icons/DRC-Fentanyl_Addiction-Green.svg",
  "Prescription Drugs": "/images/icons/DRC-Prescription_Addiction-Green.svg",
  "Marijuana": "/images/icons/DRC-Marijuana_Addiction-Green.svg",
  "Gambling": "/images/icons/DRC-Gambling_Addiction-Green.svg",
  "Sex Addiction": "/images/icons/DRC-Sex_Addiction-Green.svg",
  "Stimulants": "/images/icons/DRC-Meth_Addiction-Green.svg",
};

export default function AddictionPrograms() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Substance Use Treatment
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
            Addiction Treatment Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From medically supervised detox to long-term recovery support, our
            addiction programs are built on science, guided by compassion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {siteData.addictionPrograms.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={program.href}
                className="group block bg-cream rounded-xl p-5 border-t-2 border-t-transparent hover:border-t-gold hover:shadow-xl hover:scale-105 transition-all duration-[250ms] h-full cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-3 border-2 border-sage/30 group-hover:border-gold rounded-lg flex items-center justify-center transition-colors duration-[250ms]">
                  {iconMap[program.name] ? (
                    <Image
                      src={iconMap[program.name]}
                      alt={`${program.name} icon`}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  ) : (
                    <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
                {/* Name */}
                <h3 className="font-body text-forest font-bold text-sm mb-1.5">
                  {program.name}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {program.description}
                </p>
                {/* Learn More */}
                <span className="text-gold text-xs font-semibold group-hover:underline">
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
