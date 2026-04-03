import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Phoenix Treatment Center — Desert Recovery Centers",
  description: "Residential and outpatient treatment at 1623 W Moody Trail, Phoenix, AZ. 5,500 sq ft with movie theater, pool with waterfall, and gym. Call (623) 257-5384.",
};

const amenities = ["Full Movie Theater", "Pool with Waterfall", "State-of-the-Art Gym", "Massage Room", "Gourmet Kitchen & Dining", "Private Rooms", "Outdoor Recreation Areas"];

export default function PhoenixPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Phoenix Treatment Center"
        description="Residential and outpatient services with expanded holistic programming in our 5,500 sq ft Phoenix facility."
        bgImage="/images/general/accom-backyard.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl text-forest font-semibold mb-6">About This Location</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Phoenix location provides residential and outpatient services with expanded holistic programming. The 5,500 sq ft facility features unique amenities including a full movie theater and a pool with waterfall, creating a truly resort-like recovery experience.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With gender-specific group therapy, evidence-based clinical programming, and a full range of holistic therapies, our Phoenix center offers everything needed for meaningful, lasting recovery.
              </p>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
                <p className="text-gray-600 text-sm">1623 W Moody Trail, Phoenix, AZ 85041</p>
                <a href="tel:+16232575384" className="text-gold font-semibold text-lg block mt-2">(623) 257-5384</a>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Residential Treatment", "Outpatient"].map((p) => (
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

      <CTASection />
      <Footer />
    </>
  );
}
