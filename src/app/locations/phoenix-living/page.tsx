import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Phoenix PHP Sober Living — Desert Recovery Centers",
  description:
    "Structured sober living housing for clients enrolled in DRC PHP programs. 1623 W Moody Trail, Phoenix, AZ 85085. Call (623) 257-5384.",
  path: "/locations/phoenix-living",
});

export default function PhoenixLivingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", path: "/locations" }, { name: "Phoenix PHP Sober Living", path: "/locations/phoenix-living" }]} />
      <Navigation />
      <PageHero
        eyebrow="Our Locations"
        title="Phoenix PHP Sober Living"
        description="Structured sober living housing for clients enrolled in DRC's PHP program — a stable foundation while you build your recovery."
        bgImage="/images/general/accom-backyard.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Supportive Housing for PHP Clients
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix PHP Sober Living property at 1623 W Moody Trail provides structured housing for clients actively enrolled in DRC&apos;s Partial Hospitalization Program. This is not a treatment facility — it is supportive sober living housing designed to complement your outpatient care with stability, accountability, and community.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Living here means you have a safe, substance-free home to return to each evening after your daily programming. An on-site house manager provides structure and support, while the property is located in close proximity to our PHP programming at the Phoenix PHP/IOP center.
            </p>

            {/* Not a treatment facility callout */}
            <div className="bg-cream border border-gold/30 rounded-xl p-6 mb-8">
              <p className="text-forest text-sm leading-relaxed">
                <strong>This is a housing property, not a treatment facility.</strong> All clinical treatment is provided at our{" "}
                <Link href="/locations/phoenix" className="text-gold font-semibold hover:underline">Phoenix PHP/IOP Center</Link> at 4160 N. 108th Ave. This sober living property provides the supportive environment between sessions.
              </p>
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Location Details
            </h2>
            <div className="space-y-3 text-gray-600 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Address:</strong>&nbsp;1623 W Moody Trail, Phoenix, AZ 85085</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Phone:</strong>&nbsp;<a href="tel:+16232575384" className="text-sage font-medium">(623) 257-5384</a></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Type:</strong>&nbsp;Sober Living / PHP Housing</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>House Manager:</strong>&nbsp;On-site house manager for daily support and structure</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong>Proximity:</strong>&nbsp;Close to DRC Phoenix PHP/IOP programming</span>
              </div>
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              What&apos;s Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                "Structured, substance-free living environment",
                "On-site house manager",
                "Pool with Waterfall",
                "Gym",
                "Massage Room",
                "Comfortable private and shared rooms",
                "Close proximity to PHP programming",
                "Community accountability and peer support",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-cream rounded-lg p-4 border border-gray-100">
                  <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
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
                href="/locations/phoenix"
                className="bg-white hover:bg-cream border border-sage/30 text-forest font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                View Phoenix PHP/IOP Center
              </Link>
              <Link
                href="/locations"
                className="bg-white hover:bg-cream border border-sage/30 text-forest font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                All Locations
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
