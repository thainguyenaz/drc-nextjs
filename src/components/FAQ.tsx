"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/site-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {siteData.faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-forest text-sm pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-sage flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
