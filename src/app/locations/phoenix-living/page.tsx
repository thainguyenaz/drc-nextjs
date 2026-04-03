import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Phoenix PHP Living — Desert Recovery Centers",
  description:
    "Supportive PHP living and sober living housing in Phoenix, AZ for clients enrolled in DRC outpatient programs. Structured environment for recovery.",
  path: "/locations/phoenix-living",
});

export default function PhoenixLivingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", path: "/locations" }, { name: "Phoenix PHP Living", path: "/locations/phoenix-living" }]} />
      <Navigation />
      <PageHero
        eyebrow="Our Locations"
        title="Phoenix PHP Living"
        description="Structured, supportive housing for clients enrolled in DRC outpatient programs — a stable foundation while you build your recovery."
        bgImage="/images/general/accom-backyard.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              A Home Base for Your Recovery
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix PHP Living property at 1623 W Moody Trail provides supportive housing for clients actively enrolled in DRC&apos;s PHP or IOP programs. This is not a standalone treatment facility — it is a structured living environment designed to complement your outpatient care with stability, accountability, and community.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Living here means you have a safe, substance-free home to return to each evening after your daily programming. House managers provide structure and support, while the amenities create a comfortable environment for rest and recovery.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Location Details
            </h2>
            <div className="space-y-3 text-gray-600 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <strong>Address:</strong>&nbsp;1623 W Moody Trail, Phoenix, AZ 85085
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <strong>Phone:</strong>&nbsp;<a href="tel:+16232575384" className="text-sage font-medium">(623) 257-5384</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <strong>Services:</strong>&nbsp;PHP Living, Sober Living Support
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <strong>Note:</strong>&nbsp;Housing property only — not a treatment facility. Treatment is provided at our Phoenix PHP/IOP location.
              </div>
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Amenities
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {["Pool with Waterfall", "Gym", "Massage Room", "Comfortable Living Spaces", "Substance-Free Environment", "House Manager On-Site"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-cream rounded-lg p-4 border border-gray-100">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:+16232575384"
                className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center"
              >
                Call (623) 257-5384
              </a>
              <Link
                href="/locations"
                className="bg-white hover:bg-cream border border-sage/30 text-forest font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
