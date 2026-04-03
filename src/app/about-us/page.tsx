import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Desert Recovery Centers",
  description: "Learn about Desert Recovery Centers, Arizona's trusted luxury behavioral health provider offering evidence-based mental health and addiction treatment.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="About Us"
        title="About Desert Recovery Centers"
        description="Arizona's trusted provider of luxury mental health and addiction treatment, dedicated to personalized, evidence-based recovery."
        bgImage="/images/general/DRC-OUR-TEAM.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl text-forest font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, we believe that healing is not one-size-fits-all. Our luxury facilities in Glendale, Scottsdale, and Phoenix provide personalized, evidence-based treatment for mental health conditions and substance use disorders in a setting designed for comfort and transformation.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our multidisciplinary clinical team combines proven therapeutic modalities — including CBT, DBT, EMDR, and holistic practices — with the warmth and attention of a boutique program. Every treatment plan is crafted around you, because your recovery story is uniquely yours.
            </p>

            <h2 className="font-display text-3xl text-forest font-semibold mt-12 mb-6">What Sets Us Apart</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              We are Joint Commission accredited and LegitScript certified, reflecting our commitment to the highest standards of care. Our small client-to-staff ratio ensures personalized attention, while our luxury amenities — from gourmet dining to resort-style recreation — create an environment where healing feels natural.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              We specialize in dual diagnosis treatment, recognizing that mental health conditions and substance use disorders often co-occur and must be treated simultaneously for the best outcomes. Our gender-specific programming provides safe, focused healing environments.
            </p>

            <h2 className="font-display text-3xl text-forest font-semibold mt-12 mb-6">Our Approach</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {[
                { title: "Evidence-Based", desc: "CBT, DBT, EMDR, MAT, and trauma-focused therapies grounded in peer-reviewed research." },
                { title: "Holistic Healing", desc: "Yoga, mindfulness, art therapy, nutrition counseling, and body-based interventions." },
                { title: "Individualized Plans", desc: "Every treatment plan is built around your unique needs, goals, and circumstances." },
                { title: "Continuum of Care", desc: "From detox through aftercare, we support every stage of your recovery journey." },
              ].map((item) => (
                <div key={item.title} className="bg-cream rounded-xl p-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
