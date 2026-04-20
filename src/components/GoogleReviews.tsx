"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhoto: string | null;
}

interface LocationData {
  name: string;
  placeId: string;
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

const GOOGLE_MAPS_REVIEW_URLS: Record<string, string> = {
  ChIJIY0JCJR3K4cR2AsN2S1SMsw:
    "https://search.google.com/local/writereview?placeid=ChIJIY0JCJR3K4cR2AsN2S1SMsw",
  ChIJhwUwqWFrK4cRcJizcuP0hCI:
    "https://search.google.com/local/writereview?placeid=ChIJhwUwqWFrK4cRcJizcuP0hCI",
  ChIJP_eZSIRAK4cRrE5xwNZoYdA:
    "https://search.google.com/local/writereview?placeid=ChIJP-eZSIRAK4cRrE5xwNZoYdA",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const truncated =
    review.text.length > 150
      ? review.text.slice(0, 150).trimEnd() + "..."
      : review.text;
  const needsReadMore = review.text.length > 150;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 min-w-[300px] max-w-[340px] flex-shrink-0 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {review.profilePhoto ? (
          <img
            src={review.profilePhoto}
            alt={review.author}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <InitialsAvatar name={review.author} />
        )}
        <div className="min-w-0">
          <p className="font-semibold text-forest text-sm truncate">
            {review.author}
          </p>
          <p className="text-gray-400 text-xs">{review.time}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {truncated}
        {needsReadMore && (
          <a
            href="https://www.google.com/search?q=Desert+Recovery+Centers+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-dark font-medium ml-1"
          >
            Read more
          </a>
        )}
      </p>
    </div>
  );
}

export default function GoogleReviews() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldFetch(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldFetch(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldFetch) return;
    fetch("/api/google-reviews")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setLocations(data.locations);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [shouldFetch]);

  if (error || (shouldFetch && !loading && locations.length === 0)) return null;

  const active = locations[activeTab];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-forest relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-container mx-auto px-6"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            <h2 className="font-display text-2xl md:text-3xl text-white font-semibold">
              Reviews from Google
            </h2>
          </div>
          {active && (
            <a
              href={GOOGLE_MAPS_REVIEW_URLS[active.placeId]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-gold/25 cursor-pointer whitespace-nowrap"
            >
              Write a Review
            </a>
          )}
        </div>

        {/* Location tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {(loading ? ["Scottsdale", "Glendale", "Phoenix"] : locations).map(
            (loc, i) => {
              const name = typeof loc === "string" ? loc : loc.name;
              return (
                <button
                  key={name}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === i
                      ? "bg-gold text-white shadow-md"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {name}
                </button>
              );
            }
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Active location content */}
        {!loading && active && (
          <>
            {/* Rating summary */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-white">
                {active.rating.toFixed(1)}
              </span>
              <div>
                <StarRating rating={Math.round(active.rating)} />
                <p className="text-white/60 text-sm mt-1">
                  {active.totalReviews.toLocaleString()} reviews &middot;{" "}
                  {active.name}
                </p>
              </div>
            </div>

            {/* Scrolling review cards */}
            {active.reviews.length > 0 ? (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
                {active.reviews.map((review, i) => (
                  <ReviewCard key={`${review.author}-${i}`} review={review} />
                ))}
              </div>
            ) : (
              <p className="text-white/50 text-center py-8">
                No reviews available for this location yet.
              </p>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
}
