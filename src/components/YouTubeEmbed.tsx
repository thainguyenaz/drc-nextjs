"use client";

import { useState } from "react";
import Image from "next/image";

export default function YouTubeEmbed({
  youtubeId,
  title,
  className,
}: {
  youtubeId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`w-full aspect-video rounded-lg overflow-hidden shadow-lg relative ${className ?? ""}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="w-full h-full relative group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={title}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform"
              viewBox="0 0 68 48"
              fill="none"
            >
              <path
                d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                fill="red"
              />
              <path d="M45 24L27 14v20" fill="white" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
