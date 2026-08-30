import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/lib/site-data";
import RichText from "./RichText";
import type { MapCopy } from "./types";

/**
 * Keyless, lazy-loaded Google Maps embed — same approach already used on
 * the Phoenix PHP/IOP page.
 *
 * "location" embeds the area by place query (county and city pages);
 * "gbp" embeds a Desert Recovery Centers facility (leaf service pages).
 */
export default function MapSection({ map }: { map: MapCopy }) {
  const isGbp = map.variant === "gbp";
  const location = siteData.locations[map.gbpLocationIndex ?? 0];
  const query = isGbp
    ? `${siteData.name}, ${location.address}`
    : map.query ?? "Phoenix, AZ";
  const heading =
    map.heading ?? (isGbp ? "Our Google Business Profile" : "Our Service Area");

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              {map.eyebrow ?? "Find Us"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mt-4">
              {heading}
            </h2>
            {map.subtext && (
              <RichText className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                {map.subtext}
              </RichText>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title={
                isGbp
                  ? `${siteData.name} ${location.name} on Google Maps`
                  : `Map of ${query}`
              }
              src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
              className="w-full h-[320px] sm:h-[400px] md:h-[480px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
