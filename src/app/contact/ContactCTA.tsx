"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <>
      {/* Heal. Restore. Thrive. */}
      <section className="py-12 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-container mx-auto px-6 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white font-bold tracking-wide">
            Heal. <span className="text-gold">Restore.</span> Thrive.
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Your recovery begins with a single conversation. We&apos;re here 24/7.
          </p>
        </motion.div>
      </section>

      {/* Insurance Note */}
      <section className="py-8 bg-cream">
        <div className="max-w-container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            For commercial insurance, we work on an out-of-network basis with major plans. We are also in-network with TriCare and TriWest, and offer cash-pay options. Coverage varies by plan. Contact us to verify your benefits at no cost.
          </p>
        </div>
      </section>
    </>
  );
}
