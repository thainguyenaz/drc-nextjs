"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import VideoLightbox from "./VideoLightbox";

const locationVideos: Record<string, string> = {
  Glendale: "00ZDcQjXoE8",
  Scottsdale: "7qvyphmKNxg",
  Phoenix: "rMkEYhoW-kE",
};

export default function LocationsSection() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6 text-center mb-14">
        <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
          Our Locations
        </span>
        <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
        <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
          Treatment Centers in Arizona
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Three locations designed for comfort, privacy, and healing — nestled
          in the beauty of the Arizona desert.
        </p>
      </div>

      <div className="space-y-0">
        {siteData.locations.map((location, i) => {
          const reversed = i % 2 === 1;
          const videoId = locationVideos[location.name];
          return (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : ""} min-h-[500px]`}
            >
              {/* Image — 60% with video lightbox */}
              <div className="relative w-full md:w-[60%] min-h-[300px] md:min-h-0">
                {videoId ? (
                  <VideoLightbox videoId={videoId}>
                    <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
                      <Image
                        src={location.image}
                        alt={`Desert Recovery Centers ${location.name} facility`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </VideoLightbox>
                ) : (
                  <Image
                    src={location.image}
                    alt={`Desert Recovery Centers ${location.name} facility`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent md:hidden pointer-events-none" />
              </div>

              {/* Content — 40% */}
              <div className="w-full md:w-[40%] bg-forest flex items-center">
                <div className="p-10 md:p-14 lg:p-16">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-gold" />
                    <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                      {location.name}, Arizona
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-semibold mb-3">
                    {location.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{location.address}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {location.description}
                  </p>
                  {"sqft" in location && (
                    <p className="text-gold text-sm font-medium mb-4">
                      {location.sqft} sq ft
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {location.amenities.map((a) => (
                      <span
                        key={a}
                        className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full border border-white/10"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`/facilities/${location.name.toLowerCase()}`}
                      className="text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      Explore Facility
                    </a>
                    <a
                      href={`tel:${location.phoneTel}`}
                      className="text-center border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
