"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

/**
 * Landing-page facility gallery: responsive next/image grid with a lightweight,
 * self-contained lightbox (no carousel or modal library). Images are the
 * existing committed Scottsdale facility photos; each carries descriptive alt
 * text for accessibility and SEO. Entrance fade-ins use the shared
 * useScrollReveal hook (no new animation dependency).
 */

type GalleryPhoto = {
  src: string;
  label: string;
  alt: string;
};

const photos: GalleryPhoto[] = [
  {
    src: "/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-0068August-01-202400009-2.jpg",
    label: "Aerial View",
    alt: "Aerial drone view of the Desert Recovery Centers Scottsdale luxury treatment residence in Arizona",
  },
  {
    src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
    label: "Front Entrance",
    alt: "Front entrance of the Desert Recovery Centers Scottsdale residential rehab facility",
  },
  {
    src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg",
    label: "Living Room",
    alt: "Spacious living room at the Desert Recovery Centers Scottsdale luxury treatment center",
  },
  {
    src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-1317August-01-202400007-2.jpg",
    label: "Lounge",
    alt: "Comfortable lounge seating area at the Desert Recovery Centers Scottsdale residence",
  },
  {
    src: "/images/scottsdale/DRC-KITCHEN-NORTH-SCOTTSDALE-08-01-2024-1292August-01-202400001-2.jpg",
    label: "Gourmet Kitchen",
    alt: "Gourmet kitchen at the Desert Recovery Centers Scottsdale luxury rehab in Arizona",
  },
  {
    src: "/images/scottsdale/DRC-LDINNING-NORTH-SCOTTSDALE-08-01-2024-1185August-01-202400001-2.jpg",
    label: "Dining Room",
    alt: "Dining room where clients share meals at the Desert Recovery Centers Scottsdale facility",
  },
  {
    src: "/images/scottsdale/DRC-UPSTAIRS-MASTER-BEDROOM-NORTH-SCOTTSDALE-08-01-2024-0658August-01-202400014-2.jpg",
    label: "Private Bedroom",
    alt: "Private master bedroom at the Desert Recovery Centers Scottsdale residential treatment center",
  },
  {
    src: "/images/scottsdale/DRC-GAME-ROOM-NORTH-SCOTTSDALE-08-01-2024-1388August-01-202400004-2.jpg",
    label: "Game Room",
    alt: "Recreation and game room at the Desert Recovery Centers Scottsdale luxury rehab facility",
  },
  {
    src: "/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg",
    label: "Fitness Center",
    alt: "Fitness center and gym at the Desert Recovery Centers Scottsdale treatment center in Arizona",
  },
  {
    src: "/images/scottsdale/DRC-MASSAGE-ROOM-NORTH-SCOTTSDALE-08-01-2024-August-01-202400003-2.jpg",
    label: "Massage Room",
    alt: "Massage therapy room offering holistic care at the Desert Recovery Centers Scottsdale residence",
  },
  {
    src: "/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg",
    label: "Therapy Room",
    alt: "Quiet therapy and meditation room at the Desert Recovery Centers Scottsdale facility",
  },
  {
    src: "/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg",
    label: "Serenity Space",
    alt: "Serene relaxation space for reflection at the Desert Recovery Centers Scottsdale residence",
  },
  {
    src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg",
    label: "Outdoor Living",
    alt: "Outdoor patio and desert landscaping at the Desert Recovery Centers Scottsdale luxury rehab",
  },
  {
    src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-02-2024-0830August-02-202400010-2.jpg",
    label: "Courtyard",
    alt: "Private courtyard and seating at the Desert Recovery Centers Scottsdale treatment center",
  },
  {
    src: "/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
    label: "Grounds",
    alt: "Aerial view of the grounds and surroundings at the Desert Recovery Centers Scottsdale residence",
  },
];

export default function LpFacilityGallery() {
  const { ref: headRef, visible: headVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (next: number) => setOpenIndex((next + photos.length) % photos.length),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      else if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close]);

  const activePhoto = openIndex === null ? null : photos[openIndex];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div
          ref={headRef}
          className={`reveal-fade-up text-center max-w-2xl mx-auto mb-12${headVisible ? " reveal-in" : ""}`}
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Inside Our Facilities
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-4 leading-tight">
            A Calm, Private Place to Heal
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tour our Scottsdale residence: private bedrooms, resort-style amenities,
            and serene desert surroundings designed to feel like a home, not a hospital.
            Tap any photo to enlarge.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Enlarge photo: ${photo.label}`}
              className={`reveal-fade-up relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold${gridVisible ? " reveal-in" : ""}`}
              style={{
                "--reveal-shift": "20px",
                "--reveal-duration": "0.4s",
                "--reveal-delay": `${(i % 8) * 0.05}s`,
              } as React.CSSProperties}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[350ms] ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent pt-8 pb-2.5 px-3">
                <span className="text-white text-xs font-medium">{photo.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.label}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-white p-2"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show((openIndex ?? 0) - 1); }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <figure
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="text-center text-white/80 text-sm mt-3">
              {activePhoto.label}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show((openIndex ?? 0) + 1); }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
