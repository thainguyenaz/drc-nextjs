"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

function AddictionIcon({ name }: { name: string }) {
  const cls = "w-9 h-9 text-sage";
  switch (name) {
    case "Alcohol":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2h8l-1.5 9H9.5L8 2z" />
          <path d="M9.5 11h5v2a4.5 4.5 0 01-5 0v-2z" />
          <path d="M12 15v5" />
          <path d="M9 22h6" />
          <path d="M10 2v4M14 2v4" />
        </svg>
      );
    case "Opioids":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v13" />
          <path d="M9 3h6" />
          <path d="M5 16l14-2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="16" r="2" />
          <path d="M10 8h4" />
        </svg>
      );
    case "Cocaine":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 17h16" />
          <path d="M6 13h12" />
          <path d="M8 9h8" />
          <path d="M20 17l1 4H3l1-4" />
        </svg>
      );
    case "Meth":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c-4.97 0-9-2.69-9-6v-1c0-3 3-6 6-8 1.5-1 2.5-2.5 3-4 .5 1.5 1.5 3 3 4 3 2 6 5 6 8v1c0 3.31-4.03 6-9 6z" />
          <path d="M12 22c-2 0-4-1.34-4-3v-.5c0-1.5 1.5-3 3-4 .75-.5 1.25-1.25 1.5-2 .25.75.75 1.5 1.5 2 1.5 1 3 2.5 3 4v.5c0 1.66-2 3-5 3z" />
        </svg>
      );
    case "Fentanyl":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="12" rx="3" />
          <path d="M4 12h16" />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="12" cy="9" r="1" fill="currentColor" />
          <circle cx="16" cy="9" r="1" fill="currentColor" />
          <circle cx="8" cy="15" r="1" fill="currentColor" />
          <circle cx="12" cy="15" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
        </svg>
      );
    case "Prescription Drugs":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M5 8h14" />
          <path d="M9 12h6" />
          <path d="M12 12v4" />
          <path d="M9 5h6" />
        </svg>
      );
    case "Marijuana":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M12 12c-4 0-7-3-7-7 3 0 5.5 1.5 7 4" />
          <path d="M12 12c4 0 7-3 7-7-3 0-5.5 1.5-7 4" />
          <path d="M12 12c-3-2-3-6-1-9" />
          <path d="M12 12c3-2 3-6 1-9" />
          <path d="M8 20c2-1 4-4 4-8" />
          <path d="M16 20c-2-1-4-4-4-8" />
        </svg>
      );
    case "Gambling":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="8" height="8" rx="1.5" transform="rotate(0 3 3)" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
          <circle cx="5.5" cy="5.5" r="0.75" fill="currentColor" />
          <circle cx="8.5" cy="8.5" r="0.75" fill="currentColor" />
          <circle cx="7" cy="7" r="0.75" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r="0.75" fill="currentColor" />
          <circle cx="18.5" cy="18.5" r="0.75" fill="currentColor" />
          <circle cx="17" cy="17" r="0.75" fill="currentColor" />
          <circle cx="15.5" cy="18.5" r="0.75" fill="currentColor" />
          <circle cx="18.5" cy="15.5" r="0.75" fill="currentColor" />
        </svg>
      );
    case "Sex Addiction":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      );
    case "Stimulants":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
                className="group block bg-cream rounded-xl p-5 border-t-[3px] border-t-transparent hover:border-t-gold hover:shadow-xl transition-all duration-[250ms] ease-out h-full cursor-pointer overflow-hidden"
              >
                {/* Icon square */}
                <div className="w-[80px] h-[80px] mb-4 border border-sage/40 group-hover:border-gold rounded-xl flex items-center justify-center transition-colors duration-[250ms] bg-sage/5">
                  <AddictionIcon name={program.name} />
                </div>
                {/* Name */}
                <h3 className="font-body text-forest font-bold text-sm mb-1.5">
                  {program.name}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-1">
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
