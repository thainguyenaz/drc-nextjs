import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import { getBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import AnimatedSection from "@/components/animated/AnimatedSection";
import AnimatedGrid from "@/components/animated/AnimatedGrid";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where are Desert Recovery Centers facilities located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desert Recovery Centers has three locations in Arizona \u2014 a male residential facility in Glendale at 8105 W Frier Dr, a female residential facility in Scottsdale at 23222 N Church Rd, and an outpatient PHP, IOP, and TMS center in Phoenix at 4160 N 108th Ave.",
      },
    },
    {
      "@type": "Question",
      name: "How many beds does Desert Recovery Centers have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each residential facility maintains a strict 10-bed maximum to ensure individualized care and a high staff-to-client ratio. Total residential capacity is 20 beds across Glendale and Scottsdale.",
      },
    },
    {
      "@type": "Question",
      name: "Are the facilities gender-specific?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Glendale facility is a male-only residential program. The Scottsdale facility is a female-only residential program. The Phoenix outpatient center serves all genders.",
      },
    },
    {
      "@type": "Question",
      name: "Are the facilities Joint Commission accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Desert Recovery Centers holds Joint Commission accreditation, the gold standard in behavioral health treatment quality and patient safety.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tour the facilities before starting treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Contact our admissions team at (480) 931-3617 to schedule a tour of our Phoenix outpatient center. For privacy reasons, tours of residential facilities are arranged on a case-by-case basis.",
      },
    },
  ],
};

const facilities = [
  {
    name: "Glendale Residential",
    label: "MALE RESIDENTIAL",
    address: "8105 W Frier Dr, Glendale, AZ 85303",
    description:
      "Our flagship male-only residential treatment center. 10-bed luxury facility with basketball court, tennis court, pool, gym, and gourmet kitchen.",
    services: ["Residential", "PHP", "IOP", "OP", "Detox"],
    image: "/images/glendale/Glendale-Front.jpg",
    href: "/locations/glendale",
  },
  {
    name: "Scottsdale Residential",
    label: "FEMALE RESIDENTIAL",
    address: "23222 N Church Rd, Scottsdale, AZ 85255",
    description:
      "Female-only residential treatment nestled in north Scottsdale with stunning mountain views. 10-bed luxury facility with pool, tennis court, and serene desert landscape.",
    services: ["Residential", "PHP", "IOP", "OP"],
    image:
      "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg",
    href: "/locations/scottsdale",
  },
  {
    name: "Phoenix Outpatient & TMS",
    label: "PHP / IOP / TMS",
    address: "4160 N. 108th Ave, Phoenix, AZ 85037",
    description:
      "Outpatient addiction and mental health treatment center offering PHP, IOP, and NeuroStar TMS therapy. The only integrated TMS program in west Phoenix.",
    services: ["PHP", "IOP", "OP", "TMS Therapy"],
    image: "/images/locations/phoenix/phoenix-lobby-2.jpg",
    href: "/locations/phoenix-php-iop",
  },
];

export const metadata: Metadata = {
  title:
    "Our Luxury Addiction & Mental Health Treatment Facilities | DRC",
  description:
    "Desert Recovery Centers operates luxury residential treatment facilities in Glendale and Scottsdale, Arizona, and outpatient services in Phoenix. Tour our facilities today.",
  alternates: {
    canonical: "https://desertrecoverycenters.com/facilities/",
  },
  openGraph: {
    images: [
      {
        url: "/images/glendale/Glendale-Front.jpg",
        width: 1200,
        height: 630,
        alt: "Exterior of Desert Recovery Centers luxury residential rehab facility in Glendale Arizona",
      },
    ],
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <SchemaScript
        schema={[
          faqSchema,
          getBreadcrumbSchema(getBreadcrumbsFromPathname("/facilities")),
        ]}
      />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/facilities")} />
      <PageHero
        eyebrow="Our Facilities"
        title="Our Treatment Facilities"
        description="Three locations across Arizona offering residential treatment, outpatient programs, and TMS therapy in luxury, clinically rigorous settings."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-0068August-01-202400009-2.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <p className="text-gray-600 leading-relaxed text-lg">
                Desert Recovery Centers operates three treatment facilities in
                the Phoenix metropolitan area. Our gender-specific residential
                programs in Glendale and Scottsdale each maintain a strict
                10-bed maximum, and our Phoenix outpatient center provides PHP,
                IOP, and the only integrated NeuroStar TMS program in west
                Phoenix.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGrid className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <Link
                key={facility.name}
                href={facility.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-gold/40 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={`Desert Recovery Centers ${facility.name} facility`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest/90 text-white text-xs font-body tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                      {facility.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl text-forest font-semibold mb-1">
                    {facility.name}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3">
                    {facility.address}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {facility.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs text-sage border border-sage/30 rounded-full px-3 py-1"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <span className="text-gold font-semibold text-sm group-hover:text-gold-dark transition-colors">
                    Explore Facility &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                At a Glance
              </span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
                Why Desert Recovery Centers
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { stat: "20", label: "Total Residential Beds" },
              { stat: "3", label: "Arizona Locations" },
              { stat: "24/7", label: "Clinical Staffing" },
              { stat: "JC", label: "Joint Commission Accredited" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <p className="font-display text-3xl text-gold font-bold">
                  {item.stat}
                </p>
                <p className="text-gray-600 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Common Questions
              </span>
              <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold">
                Facilities FAQ
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map(
              (faq) => (
                <AnimatedSection key={faq.name}>
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="font-display text-lg text-forest font-semibold mb-2">
                      {faq.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </AnimatedSection>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
