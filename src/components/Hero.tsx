"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const badges = [
  { label: "Joint Commission Accredited", icon: "shield-check" },
  { label: "LegitScript Certified", icon: "badge-check" },
  { label: "In-Network Insurance", icon: "shield" },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-forest">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="/images/general/desert-recovery-center-hero-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28,43,30,0.35) 0%, rgba(28,43,30,0.55) 35%, rgba(28,43,30,0.82) 75%, rgba(28,43,30,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-container mx-auto px-6">
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-px bg-gold"
          />
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">
            Heal &bull; Restore &bull; Thrive
          </span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-px bg-gold"
          />
        </motion.div>

        {/* Headline — matches live site */}
        <motion.h1
          {...fadeUp(0.4)}
          className="text-white font-display text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight"
        >
          Treatment Centers for Mental Health,
          <br className="hidden lg:inline" /> Drug, &amp; Alcohol Addiction in AZ
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Personalized addiction and mental health recovery with luxury
          amenities, expert care, and compassionate support.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5"
            >
              <svg
                className="w-5 h-5 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white text-sm font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs — primary matches live site */}
        <motion.div
          {...fadeUp(1.0)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/insurance-verification"
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
          >
            Verify Insurance Today
          </a>
          <a
            href="tel:+14809313617"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
          >
            Call (480) 931-3617
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(1.1)}
          className="text-cream/60 text-sm italic mt-4"
        >
          Confidential. No obligation. Available 24/7.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
