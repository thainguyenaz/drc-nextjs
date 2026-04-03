"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-container mx-auto px-6 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">
          Your Recovery Starts With One Call
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          Our admissions team is available 24 hours a day, 7 days a week.
          Whether you&apos;re ready to start treatment or just have questions,
          we&apos;re here for you.
        </p>
        <p className="text-gold text-sm font-medium mb-10">
          Most clients begin treatment within 48 hours of their first call.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+16233231012"
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
          >
            Call (623) 323-1012
          </a>
          <a
            href="mailto:contact@desertrecoverycenters.com"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
