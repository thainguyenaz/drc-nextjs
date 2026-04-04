import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IntroSection from "@/components/IntroSection";
import HomepageVideo from "@/components/HomepageVideo";
import ConditionsGrid from "@/components/ConditionsGrid";
import AddictionPrograms from "@/components/AddictionPrograms";
import StatsSection from "@/components/StatsSection";
import LocationsSection from "@/components/LocationsSection";
import FacilityPhotoGrid from "@/components/FacilityPhotoGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import BridgeWork from "@/components/BridgeWork";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import ContinuumOfCare from "@/components/ContinuumOfCare";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { FAQPageSchema, SpeakableSchema, VideoSchemas } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";

export default function Home() {
  return (
    <>
      <FAQPageSchema />
      <SpeakableSchema url="/" cssSelectors={["[data-speakable]"]} />
      <VideoSchemas path="/" />
      <Navigation />
      <Hero />
      <TrustBar />

      {/* ── Entity Content Block ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">About Desert Recovery Centers</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-12">
            Desert Recovery Centers is a Joint Commission-accredited luxury behavioral health treatment organization with residential inpatient facilities in Glendale, Scottsdale, and Phoenix, Arizona. Founded by Jason Inserra, Thai Nguyen, and Dr. An Nguyen, Desert Recovery Centers specializes in dual-diagnosis addiction treatment and mental health programs serving clients throughout Arizona and the Southwest United States.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-forest mb-2">Does Desert Recovery Centers accept insurance?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. We accept most major private insurance plans. Call <a href="tel:+14809313617" className="text-sage font-medium hover:underline">(480) 931-3617</a> for a free insurance verification.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest mb-2">Where are Desert Recovery Centers locations?</h3>
              <p className="text-gray-700 leading-relaxed">Desert Recovery Centers has three Arizona locations: Glendale, Scottsdale, and Phoenix.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest mb-2">Is Desert Recovery Centers accredited?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. Desert Recovery Centers holds Joint Commission Gold Seal of Approval accreditation, the highest standard in behavioral health.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest mb-2">What is the admissions process at Desert Recovery Centers?</h3>
              <p className="text-gray-700 leading-relaxed">The admissions process begins with a free confidential assessment. Call <a href="tel:+14809313617" className="text-sage font-medium hover:underline">(480) 931-3617</a> or submit our online form and our admissions team will contact you within hours to verify insurance and answer questions.</p>
            </div>
          </div>
        </div>
      </section>

      <IntroSection />
      <HomepageVideo />
      <ConditionsGrid />
      <AddictionPrograms />
      <ContinuumOfCare />
      <StatsSection />
      <LocationsSection />
      <FacilityPhotoGrid />
      <WhyChooseUs />
      <BridgeWork />
      <TeamSection />
      <Testimonials />

      {/* ── Brand / Testimonial Video ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Real Stories</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Hear From Our Community</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/LjK58DeWTSY?rel=0"
              title="Desert Recovery Centers, Real Stories"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <GoogleReviews />
      <FAQ />
      <ContactForm />
      <AEOBlock
        entries={[
          { question: "What is Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) is a behavioral health organization specializing in dual diagnosis treatment for addiction and mental health conditions. With a maximum of 10 beds per facility and doctoral-level clinical psychologists on staff, DRC provides highly personalized, evidence-based care." },
          { question: "Where is Desert Recovery Centers located?", answer: "Desert Recovery Centers operates three residential treatment facilities in Arizona: Glendale (8105 W Frier Dr), Scottsdale (23222 N Church Rd), and Phoenix (1623 W Moody Trail). All three locations offer luxury amenities and are staffed by licensed clinical psychologists and board-certified psychiatrists." },
          { question: "Does Desert Recovery Centers accept insurance?", answer: "Yes, Desert Recovery Centers accepts most major private and commercial insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and Humana. DRC is also in-network with Tricare and TriWest. Coverage varies by plan, the admissions team verifies benefits at no cost." },
          { question: "What does Desert Recovery Centers treat?", answer: "Desert Recovery Centers treats substance use disorders (alcohol, opioids, cocaine, meth, fentanyl, prescription drugs) and mental health conditions (anxiety, depression, PTSD, bipolar disorder, OCD, personality disorders, ADHD, schizophrenia). All programs use a dual diagnosis approach that addresses co-occurring conditions simultaneously." },
          { question: "How many beds does Desert Recovery Centers have?", answer: "Each Desert Recovery Centers facility maintains a maximum of 10 residential beds. This intentionally small census ensures high staff-to-client ratios and deeply personalized treatment from doctoral-level clinicians across all three Arizona locations." },
          { question: "Is Desert Recovery Centers accredited?", answer: "Yes, Desert Recovery Centers is Joint Commission accredited, the highest national standard for healthcare quality and patient safety. DRC is also LegitScript certified, verifying compliance with all applicable laws and industry standards." },
          { question: "What makes Desert Recovery Centers different from other rehabs?", answer: "Desert Recovery Centers combines doctoral-level clinical leadership, a maximum of 10 beds per facility, Joint Commission accreditation, and luxury resort-level amenities. Unlike larger programs with 30 to 50 beds, DRC delivers intensive, personalized care with consistent treatment teams who know every client by name." },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
