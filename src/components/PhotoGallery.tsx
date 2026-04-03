"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Photo = { src: string; alt: string };

export default function PhotoGallery({
  photos,
  title,
  eyebrow = "Our Facility",
}: {
  photos: Photo[];
  title: string;
  eyebrow?: string;
}) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            {eyebrow}
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
        styles={{
          container: { backgroundColor: "rgba(15, 23, 20, 0.95)" },
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </section>
  );
}
