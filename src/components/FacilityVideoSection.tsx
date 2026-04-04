import YouTubeEmbed from "./YouTubeEmbed";
import ScrollReveal from "./ScrollReveal";

export default function FacilityVideoSection({
  youtubeId,
  title,
  videoTitle,
  location,
  address,
  phone,
  sqft,
  amenities,
  ctaText = "Schedule a Tour",
  ctaPhone,
}: {
  youtubeId: string;
  title: string;
  videoTitle: string;
  location: string;
  address: string;
  phone: string;
  sqft?: string;
  amenities: string[];
  ctaText?: string;
  ctaPhone?: string;
}) {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Video (60%) */}
          <ScrollReveal direction="left" className="w-full lg:w-3/5">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              {videoTitle}
            </h2>
            <YouTubeEmbed youtubeId={youtubeId} title={title} />
          </ScrollReveal>

          {/* Right Column - Details (40%) */}
          <ScrollReveal direction="right" delay={0.2} className="w-full lg:w-2/5">
            <h3 className="font-display text-xl text-forest font-semibold mb-4">
              Facility Details
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <svg
                className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-gray-700 text-sm font-medium">{address}</p>
                <p className="text-gray-500 text-xs mt-1">{location}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-5 h-5 text-gold flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a
                href={`tel:${phone}`}
                className="text-gold font-semibold hover:underline"
              >
                {phone}
              </a>
            </div>

            {/* Sq Ft */}
            {sqft && (
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-medium">Size:</span> {sqft}
              </p>
            )}

            {/* Amenities */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-forest mb-3">Amenities</h4>
              <div className="space-y-2">
                {amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={ctaPhone ? `tel:+1${ctaPhone}` : `tel:${phone}`}
              className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              {ctaText}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
