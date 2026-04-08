"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  bgImage?: string;
}

export default function PageHero({ eyebrow, title, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-forest">
        {bgImage && (
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(28,43,30,0.92) 0%, rgba(28,43,30,0.75) 100%)",
        }}
      />
      <div className="relative z-10 text-center max-w-container mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-medium">
              {eyebrow}
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
