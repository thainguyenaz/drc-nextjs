"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import VideoLightbox from "./VideoLightbox";

const locationVideos: Record<string, string> = {
  Glendale: "00ZDcQjXoE8",
  Scottsdale: "7qvyphmKNxg",
  Phoenix: "rMkEYhoW-kE",
};

function LocationRow({ location, i }: { location: typeof siteData.locations[number]; i: number }) {
  const reversed = i % 2 === 1;
  const videoId = locationVideos[location.name];
  const { ref: photoRef, visible: photoVisible } = useScrollReveal<HTMLDivElement>({ rootMargin: "-60px" });
  const { ref: contentRef, visible: contentVisible } = useScrollReveal<HTMLDivElement>({ rootMargin: "-60px" });
  return (
    <div
      className={`flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : ""} min-h-[500px] overflow-hidden`}
    >
      {/* Photo/video, slides in from LEFT (or right when reversed) */}
      <div
        ref={photoRef}
        className={`${reversed ? "reveal-fade-right" : "reveal-fade-left"} relative w-full md:w-[60%] min-h-[300px] md:min-h-0 overflow-hidden${photoVisible ? " reveal-in" : ""}`}
        style={{
          "--reveal-shift": "120px",
          "--reveal-duration": "0.7s",
        } as React.CSSProperties}
      >
        {videoId ? (
          <VideoLightbox videoId={videoId}>
            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px] overflow-hidden">
              <Image
                src={location.image}
                alt={`Desert Recovery Centers ${location.name} facility`}
                fill
                className="object-cover hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </VideoLightbox>
        ) : (
          <Image
            src={location.image}
            alt={`Desert Recovery Centers ${location.name} facility`}
            fill
            className="object-cover hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Content, slides in from RIGHT (or left when reversed) */}
      <div
        ref={contentRef}
        className={`${reversed ? "reveal-fade-left" : "reveal-fade-right"} w-full md:w-[40%] bg-forest flex items-center${contentVisible ? " reveal-in" : ""}`}
        style={{
          "--reveal-shift": "120px",
          "--reveal-duration": "0.7s",
          "--reveal-delay": "0.1s",
        } as React.CSSProperties}
      >
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
              {(location as { sqft: string }).sqft} sq ft
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
              href={location.href}
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
    </div>
  );
}

export default function LocationsSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal<HTMLDivElement>({ rootMargin: "-80px" });
  return (
    <section id="locations" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-container mx-auto px-6 text-center mb-14">
        <div
          ref={headerRef}
          className={`reveal-fade-up${headerVisible ? " reveal-in" : ""}`}
          style={{ "--reveal-shift": "40px" } as React.CSSProperties}
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Our Locations
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
            Treatment Centers in Arizona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three locations designed for comfort, privacy, and healing, nestled
            in the beauty of the Arizona desert.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {siteData.locations.map((location, i) => (
          <LocationRow key={location.name} location={location} i={i} />
        ))}
      </div>
    </section>
  );
}
