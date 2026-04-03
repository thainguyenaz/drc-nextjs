"use client";

import { motion } from "framer-motion";

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.15 * i },
});

const badges = [
  { label: "Joint Commission Accredited" },
  { label: "LegitScript Certified" },
  { label: "In-Network Insurance" },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Video Background with subtle parallax */}
      <div className="absolute inset-0 bg-forest">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/images/general/desert-recovery-center-hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(28,43,30,0.25) 0%, rgba(28,43,30,0.50) 35%, rgba(28,43,30,0.85) 75%, rgba(28,43,30,0.95) 100%)",
        }}
      />

      {/* Content — left-aligned */}
      <div className="relative z-10 max-w-container mx-auto px-6 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div {...stagger(0)} className="flex items-center gap-3 mb-6">
            <span className="text-gold font-body uppercase font-semibold" style={{ fontSize: 13, letterSpacing: 6 }}>
              Heal. Restore. Thrive.
            </span>
            <span className="flex-1 h-px bg-gold/30 max-w-[80px]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...stagger(1)}
            className="text-white font-display font-bold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Treatment Centers for Mental Health,
            <br className="hidden md:inline" /> Drug, &amp; Alcohol Addiction in AZ
          </motion.h1>

          {/* Subhead — sales copy */}
          <motion.p
            {...stagger(2)}
            className="text-white/75 font-body text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            When you are ready to reclaim your life, we are ready to help. Arizona&apos;s most intimate luxury recovery program — 10 beds, doctoral-level care, and a team that understands recovery personally.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            {...stagger(3)}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5"
              >
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90 text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...stagger(4)}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="/insurance-verification"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 cursor-pointer"
            >
              Verify Insurance Today
            </a>
            <a
              href="tel:+14809313617"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              Call (480) 931-3617
            </a>
          </motion.div>

          <motion.p {...stagger(5)} className="text-cream/50 text-sm italic mt-5">
            Most clients begin treatment within 48 hours of their first call.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
