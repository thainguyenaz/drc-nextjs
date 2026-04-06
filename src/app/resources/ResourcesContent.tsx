"use client";

import { motion } from "framer-motion";

const featuredResources = [
  {
    category: "Guide",
    title: "The Complete Detox Guide",
    desc: "What to expect during medically supervised detox, timelines, symptoms, medications, and how to prepare. A straightforward guide for anyone considering detoxification as the first step in recovery.",
    href: "/resources/detox-guide",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    category: "Assessment",
    title: "Mental Health Self-Assessment",
    desc: "A confidential screening tool to help you understand your symptoms and determine whether professional evaluation may be beneficial. Not a diagnosis, a starting point.",
    href: "/resources/mental-health-assessment",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    category: "Comparison",
    title: "Luxury vs. Standard Rehab",
    desc: "What does luxury treatment actually offer beyond the amenities? A honest comparison of clinical differences, outcomes, and whether premium treatment is worth it for your situation.",
    href: "/resources/luxury-vs-standard-rehab",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    category: "Blog",
    title: "DRC Blog",
    desc: "Articles from our clinical team on addiction, mental health, recovery strategies, and the latest evidence-based treatment approaches. Written for real people, not medical journals.",
    href: "/resources/blog",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    category: "Podcast",
    title: "Recovery Conversations Podcast",
    desc: "Candid conversations with clinicians, people in recovery, and thought leaders about what actually works in treatment, and what doesn't. New episodes weekly.",
    href: "https://open.spotify.com/show/5thFT5DNC1exCkhmiug1Nb",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

const quickLinks = [
  {
    title: "Understanding Dual Diagnosis",
    desc: "Why mental health and addiction must be treated together.",
    href: "/treatments/dual-diagnosis",
  },
  {
    title: "What to Pack for Rehab",
    desc: "A practical checklist for residential treatment.",
    href: "/resources/what-to-pack",
  },
  {
    title: "Family Guide to Supporting Recovery",
    desc: "How loved ones can help without enabling.",
    href: "/resources/family-guide",
  },
  {
    title: "Signs You Need Professional Help",
    desc: "When self-help isn't enough, and what to do next.",
    href: "/resources/signs-you-need-help",
  },
  {
    title: "Aftercare & Alumni Resources",
    desc: "What happens after treatment ends.",
    href: "/resources/aftercare",
  },
  {
    title: "Insurance Coverage Explained",
    desc: "Understanding your behavioral health benefits.",
    href: "/insurance",
  },
];

export default function ResourcesContent() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Knowledge Is Part of Recovery
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Making the decision to seek treatment is hard enough without having to navigate confusing information. Our resource library is designed to give you clear, honest answers, written by clinicians, not marketers. Whether you&apos;re researching for yourself or a loved one, start here.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              <strong className="text-forest">Heal. Restore. Thrive.</strong>, it starts with understanding what you&apos;re facing and knowing what help looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Featured Resources
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
              Explore Our Library
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, i) => (
              <motion.a
                key={resource.title}
                href={resource.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group block bg-white rounded-xl p-6 shadow-sm border-t-[3px] border-t-transparent hover:border-t-gold hover:shadow-xl transition-all duration-[250ms] ease-out h-full"
              >
                <div className="w-[56px] h-[56px] mb-5 border border-sage/40 group-hover:border-gold rounded-xl flex items-center justify-center transition-colors duration-[250ms] bg-sage/5 text-sage group-hover:text-gold">
                  {resource.icon}
                </div>
                <span className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                  {resource.category}
                </span>
                <h3 className="font-display text-lg text-forest font-semibold mt-2 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {resource.desc}
                </p>
                <span className="text-gold text-sm font-semibold group-hover:underline">
                  Read More &rarr;
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Quick Links
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                More Resources
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-start gap-3 bg-cream rounded-lg p-4 border border-gray-100 hover:border-gold/30 transition-colors"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-body text-forest font-semibold text-sm group-hover:text-gold transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{link.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Note */}
      <section className="py-8 bg-cream">
        <div className="max-w-container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
          </p>
        </div>
      </section>
    </>
  );
}
