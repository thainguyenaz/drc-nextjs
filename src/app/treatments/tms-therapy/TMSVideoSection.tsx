"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const videos = [
  {
    videoId: "CrJz9g0ssZQ",
    title: "Patient TMS Therapy Experience, Desert Recovery Centers",
    label: "Patient Story",
    description: "A patient shares their experience with NeuroStar TMS therapy and how it changed their life.",
  },
  {
    videoId: "rcj4Tzbc34g",
    title: "TMS Therapy Results, Patient Testimonial",
    label: "Patient Story",
    description: "Hear how NeuroStar TMS therapy helped when medication alone was not enough.",
  },
  {
    videoId: "1Bed8b5DQBQ",
    title: "Life After TMS Therapy, Patient Experience",
    label: "Patient Story",
    description: "A patient describes their journey through TMS treatment and the impact on their daily life.",
  },
];

function VideoCard({ video, index }: { video: (typeof videos)[number]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow"
    >
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
            aria-label={`Play ${video.title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-gold/90 group-hover:bg-gold group-hover:scale-110 rounded-full flex items-center justify-center transition-all shadow-lg">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-bold tracking-widest uppercase text-gold">{video.label}</span>
        <p className="text-gray-600 text-sm leading-relaxed mt-1">{video.description}</p>
      </div>
    </motion.div>
  );
}

export default function TMSVideoSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
            Patient Stories
          </span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-3">
            Hear From People Who Have Been Through It
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These are real patients sharing their NeuroStar TMS experiences. Results vary from person to person. These stories are shared with permission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <VideoCard key={video.videoId} video={video} index={i} />
          ))}
        </div>

        <p className="text-gray-400 text-xs text-center mt-8 max-w-2xl mx-auto">
          Individual results may vary. Patient testimonials reflect personal experiences with NeuroStar TMS therapy and are not a guarantee of outcome.
        </p>
      </div>
    </section>
  );
}
