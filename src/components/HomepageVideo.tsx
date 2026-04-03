"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VideoLightbox from "./VideoLightbox";

export default function HomepageVideo() {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Watch Our Story
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
            See What Makes Desert Recovery Centers Different
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look inside our luxury treatment facilities and hear from our
            clinical team about our approach to lasting recovery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <VideoLightbox videoId="6x9IQq6h9Rk">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
                alt="Desert Recovery Centers brand video — aerial view of Scottsdale facility"
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors duration-300" />
            </div>
          </VideoLightbox>
        </motion.div>
      </div>
    </section>
  );
}
