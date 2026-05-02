import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import ConditionFAQ from "@/components/ConditionFAQ";
import AEOBlock from "@/components/AEOBlock";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, InlineFAQSchema, SpeakableSchema, AllLocalBusinessSchemas } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Rehab Centers Near Me in Arizona | DRC",
  description:
    "Find rehab near you in Arizona. 3 luxury facilities in Glendale, Scottsdale & Phoenix. Call (480) 931-3617 for same-day help.",
  path: "/rehab-near-me",
});

const locations = [
  {
    name: "DRC Glendale",
    tagline: "Flagship Facility, West Valley",
    address: "8105 W Frier Dr, Glendale, AZ 85303",
    phone: "(623) 323-1012",
    phoneTel: "+16233231012",
    sqft: "7,500",
    programs: ["Residential", "PHP", "IOP"],
    amenities: ["Basketball Court", "Tennis Court", "Pool", "Gym", "Billiards", "Massage Room"],
    driveTimesFrom: [
      { city: "Peoria", time: "15-25 min" },
      { city: "Surprise", time: "20-30 min" },
      { city: "Avondale", time: "20-30 min" },
      { city: "Goodyear", time: "25-35 min" },
    ],
    href: "/locations/glendale",
  },
  {
    name: "DRC Scottsdale",
    tagline: "Mountain Views, North Scottsdale",
    address: "23222 N Church Rd, Scottsdale, AZ 85255",
    phone: "(480) 931-3617",
    phoneTel: "+14809313617",
    programs: ["Residential", "PHP", "IOP"],
    amenities: ["Pool", "Tennis Court", "Basketball Court", "Gym", "Massage Room", "Mountain Views"],
    driveTimesFrom: [
      { city: "North Scottsdale", time: "5-15 min" },
      { city: "Paradise Valley", time: "20-30 min" },
      { city: "Fountain Hills", time: "20-30 min" },
      { city: "Cave Creek", time: "15-25 min" },
    ],
    href: "/locations/scottsdale",
  },
  {
    name: "DRC Phoenix",
    tagline: "Holistic Focus, Central Phoenix",
    address: "1623 W Moody Trail, Phoenix, AZ 85041",
    phone: "(602) 905-8070",
    phoneTel: "+16029058070",
    sqft: "5,500",
    programs: ["Residential", "Outpatient"],
    amenities: ["Movie Theater", "Pool with Waterfall", "Gym", "Massage Room"],
    driveTimesFrom: [
      { city: "Tempe", time: "15-25 min" },
      { city: "Mesa", time: "25-35 min" },
      { city: "Chandler", time: "25-35 min" },
      { city: "Gilbert", time: "30-40 min" },
    ],
    href: "/locations/phoenix",
  },
];

const faqs = [
  {
    q: "How many locations does Desert Recovery Centers have?",
    a: "DRC operates three luxury treatment facilities in Arizona: Glendale (our flagship, 7,500 sq ft), Scottsdale (mountain views in north Scottsdale), and Phoenix (expanded holistic programming). All three offer residential treatment with a maximum of 10 beds per facility.",
  },
  {
    q: "Which DRC location is closest to me?",
    a: "If you're in the West Valley (Peoria, Surprise, Avondale, Goodyear), Glendale is closest. If you're in North Scottsdale, Paradise Valley, Fountain Hills, or Cave Creek, Scottsdale is nearest. If you're in Tempe, Mesa, Chandler, or Gilbert, Phoenix is your closest facility. Call (480) 931-3617 and we'll help you determine the best option.",
  },
  {
    q: "Can I tour a facility before committing?",
    a: "Yes. We welcome facility tours for prospective clients and their families. Contact our admissions team to schedule a visit at any of our three locations. We want you to see the environment, meet the team, and feel confident before making your decision.",
  },
  {
    q: "How quickly can I start treatment?",
    a: "Most clients begin treatment within 48 hours of their first call. Our admissions team is available 24/7 and handles insurance verification, clinical pre-assessment, and intake coordination rapidly so there's no unnecessary delay when you're ready.",
  },
  {
    q: "Do all three locations accept the same insurance?",
    a: "All DRC locations accept out-of-network coverage from the same major commercial insurance plans (Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others), are in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team verifies your benefits at no cost.",
  },
];

export default function RehabNearMePage() {
  return (
    <>
      <AllLocalBusinessSchemas />
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/rehab-near-me" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <PageHero
        eyebrow="Find Treatment Near You"
        title="Rehab Centers Near Me in Arizona"
        description="Three luxury facilities across the Phoenix metro area. Doctoral-level care is closer than you think."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto" data-speakable="true">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Luxury Treatment Across the Valley
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Desert Recovery Centers operates three treatment facilities across the Phoenix metropolitan area, in Glendale, Scottsdale, and Phoenix. No matter where you are in Arizona, world-class addiction and mental health treatment is within driving distance.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Every location is staffed by the same caliber of doctoral-level clinicians, accredited by the Joint Commission, and limited to a maximum of 10 beds. The difference is in the surroundings and specific amenities. Below, find the facility closest to you.
            </p>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      {locations.map((loc, i) => (
        <section key={loc.name} className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}>
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">{loc.tagline}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-8">{loc.name}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
                    <h3 className="font-semibold text-forest mb-3">Contact & Address</h3>
                    <p className="text-gray-600 text-sm">{loc.address}</p>
                    <a href={`tel:${loc.phoneTel}`} className="text-gold font-semibold text-lg block mt-2">{loc.phone}</a>
                    <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-forest mb-3">Programs</h3>
                    <div className="flex flex-wrap gap-2">
                      {loc.programs.map((p) => (
                        <span key={p} className="text-xs bg-sage/10 text-sage font-medium px-3 py-1.5 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {loc.amenities.map((a) => (
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
                <div>
                  <div className="bg-forest rounded-xl p-6 text-white mb-6">
                    <h3 className="font-semibold mb-4">Drive Times From Nearby Cities</h3>
                    <div className="space-y-3">
                      {loc.driveTimesFrom.map((dt) => (
                        <div key={dt.city} className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-white/80 text-sm">{dt.city}</span>
                          <span className="text-gold font-semibold text-sm">{dt.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={loc.href} className="block bg-gold hover:bg-gold-dark text-white font-semibold text-center py-4 rounded-xl transition-colors">
                    View {loc.name} Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/glendale/Glendale-Pool.jpg",
              alt: "DRC Glendale pool area",
            }}
            rightImage={{
              src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg",
              alt: "DRC Scottsdale outdoor area",
            }}
          />
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What We Treat
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Conditions Treated at All Locations
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-cream rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs">Coverage varies by plan. Contact us to verify your benefits.</p>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          { question: "Where are Desert Recovery Centers locations in Arizona?", answer: "Desert Recovery Centers operates three luxury treatment facilities in Arizona: Glendale (8105 W Frier Dr, 85303), Scottsdale (23222 N Church Rd, 85255), and Phoenix (1623 W Moody Trail, 85041). All locations are Joint Commission accredited with a maximum of 10 beds and doctoral-level clinical leadership." },
          { question: "Which Desert Recovery Centers location is closest to me?", answer: "West Valley residents (Peoria, Surprise, Avondale) are closest to DRC Glendale at (623) 323-1012. North Scottsdale, Paradise Valley, and Cave Creek residents are closest to DRC Scottsdale at (480) 931-3617. Tempe, Mesa, Chandler, and Gilbert residents are closest to DRC Phoenix at (602) 905-8070." },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
