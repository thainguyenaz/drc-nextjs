"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.15 * i },
});

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

          {/* Trust Badges with real images */}
          <motion.div
            {...stagger(3)}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a href="https://www.jointcommission.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5 hover:bg-white/15 transition-colors">
              <Image src="/JointCommission_GoldSeal.png" alt="Joint Commission Gold Seal" width={28} height={28} className="flex-shrink-0" />
              <span className="text-white/90 text-sm font-medium">Joint Commission Accredited</span>
            </a>
            <a href="https://www.legitscript.com/websites/?checker_keywords=desertrecoverycenters.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5 hover:bg-white/15 transition-colors">
              <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span className="text-white/90 text-sm font-medium">LegitScript Certified</span>
            </a>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span className="text-white/90 text-sm font-medium">In-Network Insurance</span>
            </div>
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
