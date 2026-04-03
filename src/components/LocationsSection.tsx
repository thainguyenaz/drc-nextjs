"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

export default function LocationsSection() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Our Locations
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4 mb-4">
            Treatment Centers in Arizona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three locations designed for comfort, privacy, and healing — nestled
            in the beauty of the Arizona desert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.locations.map((location, i) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={location.image}
                  alt={`Desert Recovery Centers ${location.name} facility`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-forest font-semibold mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{location.address}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {location.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {location.programs.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-sage/10 text-sage font-medium px-3 py-1 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={`/locations/${location.name.toLowerCase()}`}
                    className="flex-1 text-center bg-sage hover:bg-forest text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Learn More
                  </a>
                  <a
                    href={`tel:${location.phoneTel}`}
                    className="flex-1 text-center border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
