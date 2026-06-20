"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const VideoModal = dynamic(() => import("./VideoModal"), { ssr: false });

interface VideoLightboxProps {
  videoId: string;
  children: React.ReactNode;
}

export default function VideoLightbox({ videoId, children }: VideoLightboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="relative cursor-pointer group w-full">
        {children}
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gold/80 transition-colors duration-300 border border-white/30">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>

      {open && <VideoModal videoId={videoId} onClose={() => setOpen(false)} />}
    </>
  );
}
