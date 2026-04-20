import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IntroSection from "@/components/IntroSection";
import { SpeakableSchema, VideoSchemas } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { getFAQSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";

export const metadata: Metadata = {
  title: "Luxury Addiction & Mental Health Treatment in Arizona | Desert Recovery Centers",
  description:
    "Luxury addiction and mental health treatment in Arizona. Joint Commission accredited, dual diagnosis care. Verify insurance today. Call (480) 931-3617.",
  alternates: { canonical: "https://desertrecoverycenters.com/" },
};

const HomepageVideo = dynamic(() => import("@/components/HomepageVideo"));
const ConditionsGrid = dynamic(() => import("@/components/ConditionsGrid"));
const AddictionPrograms = dynamic(() => import("@/components/AddictionPrograms"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const LocationsSection = dynamic(() => import("@/components/LocationsSection"));
const FacilityPhotoGrid = dynamic(() => import("@/components/FacilityPhotoGrid"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const BridgeWork = dynamic(() => import("@/components/BridgeWork"));
const TeamSection = dynamic(() => import("@/components/TeamSection"));
const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const ContinuumOfCare = dynamic(() => import("@/components/ContinuumOfCare"));
const GetHelpForm = dynamic(() => import("@/components/forms/GetHelpForm"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));
const AEOBlock = dynamic(() => import("@/components/AEOBlock"));
const ConditionFAQ = dynamic(() => import("@/components/ConditionFAQ"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));

const homepageOrgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalOrganization"],
  "@id": "https://www.desertrecoverycenters.com/#organization",
  "name": "Desert Recovery Centers",
  "url": "https://www.desertrecoverycenters.com",
  "logo": "https://www.desertrecoverycenters.com/images/branding/drc-logo-black.png",
  "description": "Joint Commission accredited luxury behavioral health treatment organization in Arizona specializing in residential treatment, PHP, IOP, and outpatient programs for addiction and mental health.",
  "telephone": "+14809313617",
  "email": "contact@desertrecoverycenters.com",
  "address": [
    { "@type": "PostalAddress", "streetAddress": "8105 W Frier Dr", "addressLocality": "Glendale", "addressRegion": "AZ", "postalCode": "85303" },
    { "@type": "PostalAddress", "streetAddress": "23222 N Church Rd", "addressLocality": "Scottsdale", "addressRegion": "AZ", "postalCode": "85255" },
    { "@type": "PostalAddress", "streetAddress": "4160 N. 108th Ave", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85037" },
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "Joint Commission Accreditation" },
    { "@type": "EducationalOccupationalCredential", "name": "LegitScript Certification" },
  ],
  "sameAs": [
    "https://www.facebook.com/desertrecoverycenters",
    "https://www.instagram.com/desertrecoverycenters",
    "https://www.youtube.com/@desertrecoverycenters",
  ],
  "foundingDate": "2020",
  "areaServed": { "@type": "State", "name": "Arizona" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1",
  },
};

const homepageWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.desertrecoverycenters.com/#website",
  "url": "https://www.desertrecoverycenters.com",
  "name": "Desert Recovery Centers",
  "description": "Luxury addiction and mental health treatment in Arizona",
  "publisher": { "@id": "https://www.desertrecoverycenters.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.desertrecoverycenters.com/search?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get Admitted to Desert Recovery Centers",
  "description": "The admissions process at Desert Recovery Centers from first call to starting treatment.",
  "totalTime": "PT48H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Call Admissions", "text": "Call (480) 931-3617 any time, day or night. A real person answers 24 hours a day." },
    { "@type": "HowToStep", "position": 2, "name": "Clinical Assessment", "text": "Complete a brief 15 to 20 minute clinical assessment by phone to determine the right level of care." },
    { "@type": "HowToStep", "position": 3, "name": "Insurance Verification", "text": "The admissions team contacts your insurance provider directly and explains your coverage and costs before you commit." },
    { "@type": "HowToStep", "position": 4, "name": "Begin Treatment", "text": "Most clients begin treatment within 48 hours of their first call." },
  ],
};

export default function Home() {
  return (
    <>
      <SpeakableSchema url="/" cssSelectors={["[data-speakable]"]} />
      <VideoSchemas path="/" />
      <SchemaScript schema={[homepageOrgSchema, homepageWebSiteSchema, howToSchema, getFAQSchema(faqData["homepage"])]} />
      <Navigation />
      <Hero />
      <TrustBar />

      {/* ── Entity Content Block ─────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">About Desert Recovery Centers</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Desert Recovery Centers is a Joint Commission-accredited luxury behavioral health treatment organization with residential inpatient facilities in Glendale, Scottsdale, and Phoenix, Arizona. Founded by Jason Inserra, Thai Nguyen, and Dr. An Nguyen, Desert Recovery Centers specializes in dual-diagnosis addiction treatment and mental health programs serving clients throughout Arizona and the Southwest United States.
          </p>
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
      <GoogleReviews />
      <BridgeWork />
      <TeamSection />

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
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <FAQ />
      {/* ── Get Help Form ─────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Get Started
              </span>
              <div className="w-[60px] h-0.5 bg-gold mt-4 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
                Ready to Start Your Recovery?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our admissions team is available 24/7 to answer your questions.
              </p>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Glendale: <a href="tel:+16233231012" className="text-sage font-medium">(623) 323-1012</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Scottsdale: <a href="tel:+14809313617" className="text-sage font-medium">(480) 931-3617</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phoenix: <a href="tel:+16029058070" className="text-sage font-medium">(602) 905-8070</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:admissions@desertrecoverycenters.com" className="text-sage font-medium">
                    admissions@desertrecoverycenters.com
                  </a>
                </div>
              </div>
            </div>
            <GetHelpForm />
          </div>
        </div>
      </section>
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
      {/* ── Common Questions (moved to bottom) ─────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
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

      <ConditionFAQ items={faqData["homepage"]} />
      <FAQSection faqs={faqData["homepage"]} />
      <CTASection />
      <Footer />
    </>
  );
}
