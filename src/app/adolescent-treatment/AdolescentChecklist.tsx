"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const signs = [
  "Withdrawal from friends, family, and activities they used to enjoy",
  "Persistent sadness, hopelessness, or crying that lasts more than two weeks",
  "Dramatic changes in sleep, either sleeping too much or unable to sleep at all",
  "Significant changes in appetite or weight",
  "Declining grades or refusing to go to school",
  "Increased irritability, anger, or explosive outbursts",
  "Talking about death, hopelessness, or feeling like a burden to others",
  "Self harm behaviors including cutting, burning, or hitting themselves",
  "Using alcohol, marijuana, or other substances",
  "Paranoia, hearing or seeing things others cannot, or disorganized thinking",
  "Extreme anxiety, panic attacks, or refusal to leave the house",
  "Giving away prized possessions or saying goodbye to people",
];

export default function AdolescentChecklist() {
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (index: number) => {
    setChecked((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Know the Signs
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-3">
            Warning Signs Parents Often Miss
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Adolescent mental health conditions rarely announce themselves
            clearly. They hide behind behavior that looks like attitude,
            laziness, or defiance. These are the signs that something more
            serious may be happening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {signs.map((sign, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => toggle(i)}
              className={`flex items-start gap-3 text-left px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                checked.includes(i)
                  ? "border-gold/40 bg-gold/5"
                  : "border-gray-200 hover:border-gold/30"
              }`}
            >
              <div
                className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-colors duration-200 ${
                  checked.includes(i)
                    ? "bg-gold border-gold"
                    : "border-gray-300"
                }`}
              >
                {checked.includes(i) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                {sign}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {checked.length >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 80, damping: 16 }}
              className="max-w-3xl mx-auto mt-8 bg-cream border border-gold/30 rounded-xl p-6"
            >
              <p className="text-forest text-sm leading-relaxed mb-4">
                If you checked {checked.length} of these, your teenager may
                benefit from a clinical evaluation. This does not mean something
                is permanently wrong. It means your child needs more support than
                they are currently getting, and that support is available. Call us
                at (602) 905-8070. Our team can help you understand what you are
                seeing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+16029058070"
                  className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Call (602) 905-8070
                </a>
                <a
                  href="#programs"
                  className="border border-forest/20 hover:border-forest/40 text-forest font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Learn About Our Programs
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
