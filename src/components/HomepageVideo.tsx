"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import YouTubeEmbed from "./YouTubeEmbed";

export default function HomepageVideo() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal<HTMLDivElement>({ rootMargin: "-80px" });
  const { ref: videoRef, visible: videoVisible } = useScrollReveal<HTMLDivElement>({ rootMargin: "-60px" });
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-12 reveal-fade-up${headerVisible ? " reveal-in" : ""}`}
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Watch Our Story
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4">
            See What Makes Desert Recovery Centers Different
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Where Desert Recovery Centers came from, and why we treat people the
            way we do.
          </p>
        </div>

        <div
          ref={videoRef}
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          className={`max-w-4xl mx-auto reveal-fade-up${videoVisible ? " reveal-in" : ""}`}
        >
          <YouTubeEmbed
            youtubeId="JUSM7ErxKq8"
            title="The Desert Recovery Centers Story | Luxury Dual Diagnosis Treatment in Arizona"
            caption="Two friends who found recovery together built the program they wished existed. This is the full DRC story."
          />
        </div>
      </div>
    </section>
  );
}
