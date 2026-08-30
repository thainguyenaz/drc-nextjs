import ScrollReveal from "@/components/ScrollReveal";
import RichText from "./RichText";
import type { FaqCopy } from "./types";

/**
 * FAQ accordion for SEO pages. Visually identical to the sitewide
 * FAQSection, with two differences it needs:
 *   1. Answers render through RichText, so a link placed inside an answer
 *      stays clickable instead of being flattened or moved elsewhere.
 *   2. The heading and subtitle are per-page rather than fixed.
 *
 * The FAQPage JSON-LD is built in the page component from the same copy
 * with stripMarkdownLinks() applied — link on the page, plain text in schema.
 */
export default function SeoFaqSection({ faq }: { faq: FaqCopy }) {
  if (faq.items.length === 0) return null;

  return (
    <ScrollReveal delay={0.1}>
      <section aria-labelledby="faq-heading" className="py-20 md:py-28 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4"
            >
              {faq.title ?? "Frequently Asked Questions"}
            </h2>
            {faq.subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                {faq.subtitle}
              </p>
            )}
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faq.items.map((item, i) => (
              <details
                key={i}
                className="faq-item border border-gray-200 rounded-xl overflow-hidden group hover:border-gold/30 transition-colors duration-300"
              >
                <summary className="cursor-pointer px-6 py-5 list-none flex items-center justify-between">
                  <h3 className="font-body font-semibold text-forest text-sm pr-4 m-0">
                    {item.question}
                  </h3>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-sage flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <RichText className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </RichText>
              </details>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
