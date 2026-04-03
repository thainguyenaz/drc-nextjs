"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              About Desert Recovery Centers
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-6 leading-tight">
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
              <a
                href="/about-us"
                className="bg-sage hover:bg-forest text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Learn Our Approach
              </a>
              <a
                href="#team"
                className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Meet Our Team
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src="/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg"
              alt="Desert Recovery Centers outdoor courtyard in Scottsdale, Arizona"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
