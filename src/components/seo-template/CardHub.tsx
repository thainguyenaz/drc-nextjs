import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { HubCopy } from "./types";

/**
 * Card grid linking one level down the page hierarchy:
 * county → cities (variant "location") or city → services (variant "service").
 * Renders directly below the hero, and only when the page has real children
 * of its own type.
 */
export default function CardHub({ hub }: { hub: HubCopy }) {
  const isLocation = hub.variant === "location";
  const ctaLabel = isLocation ? "Explore Service Area" : "Explore Service";
  const defaultEyebrow = isLocation ? "Service Areas" : "Our Services";

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              {hub.eyebrow ?? defaultEyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4">
              {hub.heading}
            </h2>
            {hub.subtext && (
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                {hub.subtext}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hub.items.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group block h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-lg transition-all duration-300"
              >
                {item.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-lg text-forest font-semibold group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-sage group-hover:text-gold group-hover:gap-3 transition-all">
                    {ctaLabel}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
