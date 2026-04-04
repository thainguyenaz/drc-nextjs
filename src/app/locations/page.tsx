import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Locations, Desert Recovery Centers",
  description:
    "Desert Recovery Centers operates five locations across Arizona: Glendale, Scottsdale, Phoenix PHP/IOP, Phoenix TMS, and Phoenix PHP Living.",
  path: "/locations",
});

const locations = [
  {
    name: "Glendale",
    address: "8105 W Frier Dr, Glendale, AZ 85303",
    phone: "(623) 323-1012",
    phoneTel: "+16233231012",
    services: "Residential, PHP, IOP, OP, Detox",
    href: "/locations/glendale",
  },
  {
    name: "Scottsdale",
    address: "23222 N Church Rd, Scottsdale, AZ 85255",
    phone: "(480) 931-3617",
    phoneTel: "+14809313617",
    services: "Residential, PHP, IOP, OP",
    href: "/locations/scottsdale",
  },
  {
    name: "Phoenix PHP/IOP",
    address: "4160 N. 108th Ave, Phoenix, AZ 85037",
    phone: "(623) 257-5384",
    phoneTel: "+16232575384",
    services: "PHP, IOP, OP, TMS",
    href: "/locations/phoenix",
  },
  {
    name: "Phoenix TMS",
    address: "4160 N. 108th Ave, Phoenix, AZ 85037",
    phone: "(623) 257-5384",
    phoneTel: "+16232575384",
    services: "TMS Therapy",
    href: "/treatments/tms-therapy",
  },
  {
    name: "Phoenix PHP Living",
    address: "1623 W Moody Trail, Phoenix, AZ 85085",
    phone: "(623) 257-5384",
    phoneTel: "+16232575384",
    services: "PHP Living, Sober Living",
    href: "/locations/phoenix-living",
  },
];

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", path: "/locations" }]} />
      <Navigation />
      <PageHero
        eyebrow="Our Locations"
        title="Five Locations Across Arizona"
        description="From residential treatment to outpatient care and TMS therapy, find the DRC location that fits your recovery needs."
        bgImage="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {locations.map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                className="block bg-cream rounded-2xl p-8 border-2 border-transparent hover:border-gold/40 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl text-forest font-semibold mb-2">{loc.name}</h2>
                    <p className="text-gray-600 text-sm mb-1">{loc.address}</p>
                    <p className="text-sage text-sm font-medium">{loc.phone}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {loc.services.split(", ").map((s) => (
                      <span key={s} className="text-xs font-medium text-forest bg-white px-3 py-1.5 rounded-lg border border-gray-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
