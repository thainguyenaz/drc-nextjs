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
        {/* Top row: photo left + photo right, collision animation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* LEFT image, slides in from left */}
          <motion.div
            style={{ x: leftX, opacity: imgOpacity }}
            className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/images/glendale/Glendale-Pool.jpg"
              alt="Outdoor pool and recreation area at Desert Recovery Centers luxury residential rehab facility in Glendale Arizona"
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* RIGHT image, slides in from right */}
          <motion.div
            style={{ x: rightX, opacity: imgOpacity }}
            className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg"
              alt="Luxury living area at Desert Recovery Centers Scottsdale addiction treatment center in Arizona"
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Bottom row: text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            About Desert Recovery Centers
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
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
            modalities, including CBT, DBT, EMDR, and holistic practices , 
            with the warmth and attention of a boutique program. Every
            treatment plan is crafted around you, because your recovery story
            is uniquely yours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/about" className="bg-sage hover:bg-forest text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
              Learn Our Approach
            </a>
            <a href="#team" className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
              Meet Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
