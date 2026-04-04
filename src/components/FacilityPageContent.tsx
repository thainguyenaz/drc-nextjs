"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import VideoLightbox from "./VideoLightbox";

interface FacilityPhoto {
  src: string;
  label: string;
}

interface FacilityPageContentProps {
  name: string;
  address: string;
  phone: string;
  phoneTel: string;
  sqft?: string;
  description: string;
  programs: string[];
  amenities: string[];
  videoId: string;
  heroImage: string;
  collisionImages: [string, string];
  gallery: FacilityPhoto[];
  otherLocations: { name: string; href: string }[];
}

export default function FacilityPageContent({
  name,
  address,
  phone,
  phoneTel,
  sqft,
  description,
  programs,
  amenities,
  videoId,
  heroImage,
  collisionImages,
  gallery,
  otherLocations,
}: FacilityPageContentProps) {
  const collisionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: collisionRef,
    offset: ["start end", "end start"],
  });
  const leftX = useTransform(scrollYProgress, [0, 0.4], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], [120, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <>
      {/* Intro collision scroll */}
      <section ref={collisionRef} className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              style={{ x: leftX, opacity: imgOpacity }}
              className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src={collisionImages[0]}
                alt={`Desert Recovery Centers ${name} facility`}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              style={{ x: rightX, opacity: imgOpacity }}
              className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src={collisionImages[1]}
                alt={`Desert Recovery Centers ${name} interior`}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              About This Location
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              {sqft ? `${sqft} Sq Ft of Luxury Recovery` : `Luxury Recovery in ${name}`}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Gender-specific groups ensure a safe, focused healing environment. Our multidisciplinary clinical team, led by licensed clinical psychologists, delivers evidence-based treatment including CBT, DBT, EMDR, trauma therapy, and our proprietary BridgeWork™ program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact, amenities & video, collision */}
      <section className="bg-forest py-20 md:py-28 overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:w-[55%]"
            >
              <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">
                Contact & Programs
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4 leading-tight">
                Get in Touch
              </h2>
              <div className="mb-6">
                <p className="text-white/60 text-sm mb-1">Address</p>
                <p className="text-white text-lg font-medium">{address}</p>
              </div>
              <div className="mb-8">
                <p className="text-white/60 text-sm mb-1">Phone</p>
                <a href={`tel:${phoneTel}`} className="text-gold text-2xl font-display font-bold hover:text-gold-dark transition-colors">
                  {phone}
                </a>
              </div>
              <div className="mb-8">
                <p className="text-white/60 text-sm mb-3">Programs Available</p>
                <div className="flex flex-wrap gap-3">
                  {programs.map((p) => (
                    <span key={p} className="text-sm bg-white/10 text-white/80 px-4 py-2 rounded-full border border-white/10">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-3">Amenities</p>
                <div className="grid grid-cols-2 gap-2">
                  {amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-white/80">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Video with lightbox */}
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="md:w-[45%] w-full"
            >
              <VideoLightbox videoId={videoId}>
                <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={heroImage}
                    alt={`Watch ${name} facility tour video`}
                    fill
                    className="object-cover hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-gold/90 text-white text-xs font-semibold px-4 py-2 rounded-lg">
                      Watch Facility Tour
                    </span>
                  </div>
                </div>
              </VideoLightbox>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Facility Gallery
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Explore Our {name} Facility
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((photo, i) => (
              <motion.div
                key={photo.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent pt-8 pb-3 px-3">
                  <span className="text-white text-xs font-medium">{photo.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this location */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Start Your Recovery
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6 leading-tight">
              Begin Healing in {name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our admissions team is available 24/7 to answer your questions, verify your insurance, and help you take the first step toward recovery. Most clients begin treatment within 48 hours of their first call.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${phoneTel}`} className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Call {phone}
              </a>
              {otherLocations.map((loc) => (
                <a key={loc.name} href={loc.href} className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                  View {loc.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
