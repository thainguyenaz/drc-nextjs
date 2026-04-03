import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Glendale Treatment Center — Desert Recovery Centers",
  description: "Luxury residential treatment at 8105 W Frier Dr, Glendale, AZ. 7,500 sq ft facility with pool, gym, tennis court, and basketball court. Call (623) 323-1012.",
  path: "/facilities/glendale",
});

const amenities = ["Full-Size Basketball Court", "Tennis Court", "Swimming Pool", "State-of-the-Art Gym", "Billiards Room", "Massage Room", "Gourmet Kitchen", "Private Rooms"];

const gallery = [
  { src: "/images/glendale/Gelndale-Front-1.jpg", alt: "Glendale facility front entrance" },
  { src: "/images/glendale/Glendale-Pool.jpg", alt: "Swimming pool" },
  { src: "/images/glendale/Glendale-Gym.jpg", alt: "Fitness gym" },
  { src: "/images/glendale/Glendale-Living-Room.jpg", alt: "Living room" },
  { src: "/images/glendale/Glendale-Room-1.jpg", alt: "Private bedroom" },
  { src: "/images/glendale/Glendale-Dining-Room.jpg", alt: "Dining room" },
  { src: "/images/glendale/Glendale-Therapy-Room.jpg", alt: "Therapy room" },
  { src: "/images/glendale/Glendale-Tennis.jpg", alt: "Tennis court" },
];

export default function GlendalePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/facilities/glendale" }, { name: "Glendale", path: "/facilities/glendale" }]} />
      <Navigation />
      <PageHero
        eyebrow="Glendale, Arizona"
        title="Glendale Treatment Center"
        description="Our flagship residential treatment center offering comprehensive mental health and addiction programs in a luxury home-like setting."
        bgImage="/images/glendale/Gelndale-Front-1.jpg"
      />

      {/* Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl text-forest font-semibold mb-6">About This Location</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Located in the heart of Glendale, our flagship 7,500 sq ft facility provides a serene, home-like environment for residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) programs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From personalized therapeutic experiences to dining, every detail is meticulously curated to support your recovery journey. Gender-specific groups ensure a safe, focused healing environment.
              </p>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
                <p className="text-gray-600 text-sm">8105 W Frier Dr, Glendale, AZ 85303</p>
                <a href="tel:+16233231012" className="text-gold font-semibold text-lg block mt-2">(623) 323-1012</a>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Residential Treatment", "PHP", "IOP"].map((p) => (
                  <span key={p} className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full">{p}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display text-3xl text-forest font-semibold mb-10 text-center">Facility Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
