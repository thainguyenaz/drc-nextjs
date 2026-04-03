"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/general/accom-bedroom.jpg", label: "Private Bedroom" },
  { src: "/images/general/accom-massage.jpg", label: "Massage Room" },
  { src: "/images/general/accom-recreation.jpg", label: "Recreation Room" },
  { src: "/images/general/accom-backyard.jpg", label: "Outdoor Space" },
  { src: "/images/general/accom-group-room.jpg", label: "Group Room" },
  { src: "/images/general/accom-gym.jpg", label: "Fitness Center" },
];

export default function FacilityPhotoGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left — 40% text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-[40%]"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Facilities
            </span>
            <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Luxury Accommodations Designed for Healing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our facilities are designed to feel like high-end residences, not clinical environments. Every detail — from the gourmet kitchen to the private therapy rooms — is curated to support your comfort and recovery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Private rooms, resort-style amenities, and serene desert surroundings create the ideal environment for deep healing and personal transformation.
            </p>
            <a
              href="/facilities/glendale"
              className="bg-sage hover:bg-forest text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer inline-block"
            >
              Explore Our Facilities
            </a>
          </motion.div>

          {/* Right — 60% photo grid */}
          <div className="md:w-[60%]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((photo, i) => (
                <motion.div
                  key={photo.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent pt-8 pb-3 px-3">
                    <span className="text-white text-xs font-medium">{photo.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
