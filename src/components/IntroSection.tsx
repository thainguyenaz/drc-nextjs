"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.4], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], [120, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — collision text */}
          <motion.div style={{ x: leftX, opacity: imgOpacity }}>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              About Desert Recovery Centers
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              A Different Kind of Treatment. A Better Path to Recovery.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Desert Recovery Centers, we believe that healing is not
              one-size-fits-all. Our luxury facilities in Glendale, Scottsdale,
              and Phoenix provide personalized, evidence-based treatment for
              mental health conditions and substance use disorders in a setting
              designed for comfort and transformation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our multidisciplinary clinical team combines proven therapeutic
              modalities — including CBT, DBT, EMDR, and holistic practices —
              with the warmth and attention of a boutique program. Every
              treatment plan is crafted around you, because your recovery story
              is uniquely yours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about-us" className="bg-sage hover:bg-forest text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Learn Our Approach
              </a>
              <a href="#team" className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Meet Our Team
              </a>
            </div>
          </motion.div>

          {/* Right — parallax collision photos, BOTH visible */}
          <motion.div style={{ x: rightX, opacity: imgOpacity }} className="relative h-[420px] md:h-[520px]">
            {/* LEFT/TOP photo — facility interior */}
            <div className="absolute top-0 left-0 w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-xl z-10 group">
              <Image
                src="/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg"
                alt="Desert Recovery Centers Scottsdale luxury living room"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </div>
            {/* RIGHT/BOTTOM photo — second facility */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[65%] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/scottsdale/DRC-UPSTAIRS-MASTER-BEDROOM-NORTH-SCOTTSDALE-08-01-2024-0658August-01-202400014-2.jpg"
                alt="Desert Recovery Centers Scottsdale master bedroom suite"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 55vw, 28vw"
              />
            </div>
            {/* Gold accent */}
            <div className="absolute top-[35%] left-[28%] w-16 h-16 border-2 border-gold/30 rounded-xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
