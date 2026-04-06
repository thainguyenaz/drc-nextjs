"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const categories = [
  { id: "all", label: "All" },
  { id: "addiction", label: "Addiction" },
  { id: "mental-health", label: "Mental Health" },
  { id: "recovery-tips", label: "Recovery Tips" },
  { id: "family", label: "Family" },
  { id: "holistic", label: "Holistic" },
  { id: "clinical", label: "Clinical" },
  { id: "tms", label: "TMS Therapy" },
  { id: "adolescent", label: "Adolescent" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  addiction: "bg-red-500/10 text-red-700",
  "mental-health": "bg-blue-500/10 text-blue-700",
  "recovery-tips": "bg-emerald-500/10 text-emerald-700",
  family: "bg-purple-500/10 text-purple-700",
  holistic: "bg-amber-500/10 text-amber-700",
  clinical: "bg-sage/10 text-sage",
  tms: "bg-gold/10 text-gold-dark",
  adolescent: "bg-cyan-500/10 text-cyan-700",
};

export default function BlogCategoryFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("all");

  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const filtered = active === "all" ? sortedPosts : sortedPosts.filter((p) => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  active === cat.id
                    ? "bg-gold text-white border-gold shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gold/40 hover:text-forest"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post) => (
              <motion.div key={post.slug} variants={cardVariants}>
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          categoryColors[post.category] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {post.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base text-forest font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{formatDate(post.datePublished)}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-12">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
