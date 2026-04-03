import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scottsdale Treatment Center — Desert Recovery Centers",
  description: "Luxury residential treatment at 23222 N Church Rd, Scottsdale, AZ. Mountain views, pool, gym, and comprehensive programs. Call (480) 931-3617.",
};

const amenities = ["Large Pool", "Tennis Court", "Basketball Court", "State-of-the-Art Gym", "Massage Room", "Scenic Mountain Views", "Gourmet Kitchen", "Private Rooms"];

const gallery = [
  { src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg", alt: "Scottsdale facility entrance" },
  { src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-1317August-01-202400007-2.jpg", alt: "Living room" },
  { src: "/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg", alt: "Gym" },
  { src: "/images/scottsdale/DRC-KITCHEN-NORTH-SCOTTSDALE-08-01-2024-1292August-01-202400001-2.jpg", alt: "Kitchen" },
  { src: "/images/scottsdale/DRC-UPSTAIRS-MASTER-BEDROOM-NORTH-SCOTTSDALE-08-01-2024-0658August-01-202400014-2.jpg", alt: "Master bedroom" },
  { src: "/images/scottsdale/DRC-MASSAGE-ROOM-NORTH-SCOTTSDALE-08-01-2024-August-01-202400003-2.jpg", alt: "Massage room" },
  { src: "/images/scottsdale/DRC-GAME-ROOM-NORTH-SCOTTSDALE-08-01-2024-1388August-01-202400004-2.jpg", alt: "Game room" },
  { src: "/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: "Aerial view" },
];

export default function ScottsdalePage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Scottsdale, Arizona"
        title="Scottsdale Treatment Center"
        description="Residential mental health and addiction treatment nestled in north Scottsdale with stunning mountain views and serene desert surroundings."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl text-forest font-semibold mb-6">About This Location</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Scottsdale location is a recovery oasis nestled between the stunning mountains of north Scottsdale. This residential facility offers comprehensive mental health and addiction treatment programs in a serene desert setting.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With stunning views, resort-style amenities, and a dedicated clinical team, our Scottsdale center provides the ideal environment for deep healing and personal transformation. Gender-specific group therapy ensures a safe, focused treatment experience.
              </p>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
                <p className="text-gray-600 text-sm">23222 N Church Rd, Scottsdale, AZ 85255</p>
                <a href="tel:+14809313617" className="text-gold font-semibold text-lg block mt-2">(480) 931-3617</a>
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
