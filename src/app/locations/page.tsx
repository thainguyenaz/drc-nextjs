import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Locations — Desert Recovery Centers",
  description:
    "Desert Recovery Centers operates three locations across Arizona: Glendale residential, Scottsdale residential, and Phoenix PHP / IOP / TMS.",
  path: "/locations",
});

const locations = [
  {
    name: "Glendale",
    label: "GLENDALE, ARIZONA",
    address: "8105 W Frier Dr, Glendale, AZ 85303",
    phone: "(623) 323-1012",
    phoneTel: "+16233231012",
    sqft: "7,500 sq ft",
    description:
      "Our flagship residential treatment center — where evidence-based clinical care meets resort-level comfort.",
    services: ["Residential", "PHP", "IOP", "OP", "Detox"],
    amenities: ["Basketball Court", "Tennis Court", "Pool", "Gym", "Massage Room", "Gourmet Kitchen"],
    image: "/images/glendale/Glendale-Front.jpg",
    href: "/locations/glendale",
    videoId: "00ZDcQjXoE8",
  },
  {
    name: "Scottsdale",
    label: "NORTH SCOTTSDALE, ARIZONA",
    address: "23222 N Church Rd, Scottsdale, AZ 85255",
    phone: "(480) 931-3617",
    phoneTel: "+14809313617",
    description:
      "Residential treatment nestled in north Scottsdale with stunning mountain views and serene desert landscape.",
    services: ["Residential", "PHP", "IOP", "OP"],
    amenities: ["Pool", "Tennis Court", "Basketball Court", "Gym", "Massage Room", "Mountain Views"],
    image: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
    href: "/locations/scottsdale",
    videoId: "7qvyphmKNxg",
  },
  {
    name: "Phoenix PHP / IOP",
    label: "PHOENIX, ARIZONA",
    address: "4160 N. 108th Ave, Phoenix, AZ 85037",
    phone: "(623) 257-5384",
    phoneTel: "+16232575384",
    description:
      "Outpatient addiction and mental health treatment, PHP, IOP, OP, and NeuroStar TMS therapy. The only integrated TMS program in west Phoenix.",
    services: ["PHP", "IOP", "OP", "TMS Therapy"],
    amenities: ["Treatment Rooms", "Group Therapy Space", "TMS Suite", "Kitchen"],
    image: "/images/locations/phoenix/phoenix-lobby-2.jpg",
    href: "/locations/phoenix-php-iop",
    videoId: "rMkEYhoW-kE",
  },
];

const programMatrix = [
  { program: "Residential", glendale: true, scottsdale: true, phoenix: false },
  { program: "PHP", glendale: true, scottsdale: true, phoenix: true },
  { program: "IOP", glendale: true, scottsdale: true, phoenix: true },
  { program: "OP", glendale: true, scottsdale: true, phoenix: true },
  { program: "Detox", glendale: true, scottsdale: false, phoenix: false },
  { program: "TMS Therapy", glendale: false, scottsdale: false, phoenix: true },
];

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", path: "/locations" }]} />
      <Navigation />
      <PageHero
        eyebrow="Our Locations"
        title="Three Locations Across Arizona"
        description="From residential treatment to outpatient care and TMS therapy — find the DRC location that fits your recovery needs."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-0068August-01-202400009-2.jpg"
      />

      {/* ── Location Cards — alternating layout ────────────── */}
      {locations.map((loc, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section key={loc.name} className="relative min-h-[500px] flex flex-col lg:flex-row overflow-hidden">
            {/* Image side */}
            <div className={`relative w-full lg:w-3/5 min-h-[300px] lg:min-h-[500px] ${imageLeft ? "" : "lg:order-2"}`}>
              <Image
                src={loc.image}
                alt={`Desert Recovery Centers ${loc.name} facility`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className={`absolute inset-0 ${imageLeft ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-transparent via-transparent to-[#1a2e1a]/30 hidden lg:block`} />
            </div>

            {/* Details side */}
            <div className={`w-full lg:w-2/5 bg-[#1a2e1a] p-8 md:p-12 lg:p-16 flex flex-col justify-center ${imageLeft ? "" : "lg:order-1"}`}>
              <span className="text-gold font-body text-xs tracking-[0.3em] uppercase font-medium">
                {loc.label}
              </span>
              <div className="w-10 h-0.5 bg-gold mt-4 mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-3">
                {loc.name}
              </h2>
              <p className="text-white/50 text-sm mb-4">{loc.address}</p>
              <p className="text-white/70 leading-relaxed mb-4">{loc.description}</p>
              {loc.sqft && (
                <p className="text-gold font-semibold text-sm mb-4">{loc.sqft} facility</p>
              )}

              {/* Amenity chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {loc.amenities.map((a) => (
                  <span key={a} className="text-xs text-white/70 border border-white/20 rounded-full px-3 py-1.5">
                    {a}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={loc.href}
                  className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Explore Facility
                </Link>
                <a
                  href={`tel:${loc.phoneTel}`}
                  className="border border-white/30 hover:border-white/60 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  {loc.phone}
                </a>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Virtual Facility Tours ─────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Virtual Tours
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-3">
              Explore Our Recovery Centers
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Tour our luxury treatment facilities from anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <YouTubeEmbed youtubeId={loc.videoId} title={`${loc.name} Facility Tour`} />
                <div className="p-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-1">{loc.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{loc.address}</p>
                  <a
                    href={`tel:${loc.phoneTel}`}
                    className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Schedule a Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs Comparison Table ──────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Programs by Location
            </span>
            <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-3">
              Find the Right Level of Care
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Each location offers different programs. Find the one that matches your needs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1a2e1a]">
                  <th className="text-left text-white font-display font-semibold text-sm px-6 py-4 rounded-tl-xl">
                    Program
                  </th>
                  <th className="text-center text-white font-display font-semibold text-sm px-6 py-4">
                    Glendale
                  </th>
                  <th className="text-center text-white font-display font-semibold text-sm px-6 py-4">
                    Scottsdale
                  </th>
                  <th className="text-center text-white font-display font-semibold text-sm px-6 py-4 rounded-tr-xl">
                    Phoenix PHP / IOP
                  </th>
                </tr>
              </thead>
              <tbody>
                {programMatrix.map((row, i) => (
                  <tr key={row.program} className={i % 2 === 0 ? "bg-cream/50" : "bg-white"}>
                    <td className="text-forest font-medium text-sm px-6 py-4">{row.program}</td>
                    <td className="text-center px-6 py-4">
                      {row.glendale ? (
                        <span className="text-gold text-lg font-bold">&#10003;</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center px-6 py-4">
                      {row.scottsdale ? (
                        <span className="text-gold text-lg font-bold">&#10003;</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center px-6 py-4">
                      {row.phoenix ? (
                        <span className="text-gold text-lg font-bold">&#10003;</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
