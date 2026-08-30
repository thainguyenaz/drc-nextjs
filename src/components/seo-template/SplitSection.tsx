import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import RichText from "./RichText";
import type { SplitItem } from "./types";

interface SplitSectionProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  items: SplitItem[];
  image?: string;
  imageAlt?: string;
  /** Flip the image to the right, content to the left. */
  reverse?: boolean;
  /** Cream background, for section-to-section alternation. */
  background?: boolean;
}

/**
 * Two-column image + content block shared by the Benefits and Why sections.
 * Content order: eyebrow → heading → subheading → checkmark bullets → CTAs.
 */
export default function SplitSection({
  eyebrow,
  heading,
  subheading,
  items,
  image,
  imageAlt,
  reverse,
  background,
}: SplitSectionProps) {
  return (
    <section className={`py-20 md:py-28 ${background ? "bg-cream" : "bg-white"}`}>
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {image && (
            <ScrollReveal
              direction={reverse ? "right" : "left"}
              className={reverse ? "lg:order-2" : ""}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
            <span className="inline-block bg-sage/10 text-sage font-body text-xs tracking-[0.2em] uppercase font-semibold px-4 py-2 rounded-full mb-6">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold leading-tight mb-5">
              {heading}
            </h2>
            {subheading && (
              <RichText className="text-gray-600 text-lg leading-relaxed mb-8">
                {subheading}
              </RichText>
            )}

            <ul className="space-y-5 mb-10">
              {items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="leading-relaxed text-gray-600">
                    <span className="font-semibold text-forest">{item.title}:</span>{" "}
                    <RichText inline>{item.text}</RichText>
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/insurance"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer"
              >
                Verify Insurance Today
              </a>
              <a
                href="tel:+16233050496"
                className="bg-white hover:bg-cream border border-sage/30 text-forest font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center cursor-pointer"
              >
                Call (623) 305-0496
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
