"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export default function AddictionPrograms() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {siteData.addictionPrograms.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={program.href}
                className="block bg-cream rounded-xl p-5 hover:bg-sage/10 transition-colors h-full cursor-pointer"
              >
                <h3 className="font-display text-base text-forest font-semibold mb-1.5">
                  {program.name}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {program.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
