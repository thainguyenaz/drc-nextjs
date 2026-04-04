import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { LocalBusinessSchema, BreadcrumbSchema, InlineFAQSchema, SpeakableSchema, VideoSchemas } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import PhotoGallery from "@/components/PhotoGallery";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { getPageMeta } from "@/data/page-metadata";
import FacilityVideoSection from "@/components/FacilityVideoSection";

const meta = getPageMeta("/locations/phoenix/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/wp-content/uploads/2024/10/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400020-2.jpg", alt: meta.title }],
  },
};

const services = [
  {
    name: "PHP, Partial Hospitalization",
    desc: "5-6 hours of daily clinical programming, 5 days per week. Structured therapy with the flexibility to return home each evening.",
  },
  {
    name: "IOP, Intensive Outpatient",
    desc: "3-4 sessions per week designed to work around your schedule. Step-down from PHP or standalone entry point.",
  },
  {
    name: "OP, Outpatient",
    desc: "1-3 sessions per week for ongoing maintenance, skill reinforcement, and long-term recovery support.",
  },
  {
    name: "TMS Therapy",
    desc: "NeuroStar Transcranial Magnetic Stimulation, FDA-cleared for depression, anxious depression, OCD, and adolescents ages 15+.",
  },
];

const faqs = [
  {
    q: "Where is the Phoenix PHP/IOP center located?",
    a: "Our Phoenix outpatient center is located at 4160 N. 108th Ave, Phoenix, AZ 85037. It is accessible from the I-10 and Loop 101, serving the West Valley and broader Phoenix metro area.",
  },
  {
    q: "What programs are available at the Phoenix location?",
    a: "We offer PHP (Partial Hospitalization), IOP (Intensive Outpatient), OP (Outpatient), and NeuroStar TMS therapy. This location does not offer residential treatment, for residential programs, please see our Glendale or Scottsdale facilities.",
  },
  {
    q: "What conditions do you treat at the Phoenix center?",
    a: "We treat substance use disorders, alcohol, opioids, fentanyl, cocaine, meth, prescription drugs, and mental health conditions including anxiety, depression, PTSD, bipolar disorder, OCD, ADHD, personality disorders, and schizophrenia. Our dual diagnosis approach treats co-occurring conditions simultaneously.",
  },
  {
    q: "Do you accept insurance at the Phoenix location?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost.",
  },
  {
    q: "Is TMS therapy available at Phoenix?",
    a: "Yes, our Phoenix center offers NeuroStar TMS therapy, FDA-cleared for major depressive disorder, anxious depression, OCD, and adolescents ages 15 and older. TMS is a safe, non-invasive treatment that does not require medication or sedation.",
  },
  {
    q: "How quickly can I start treatment at the Phoenix center?",
    a: "Most clients begin treatment within 48 hours of their first call. Our admissions team is available 24/7 at (623) 257-5384 and coordinates insurance verification, clinical pre-assessment, and intake rapidly so you can start healing as soon as you're ready.",
  },
];

const gallery = [
  { src: "/images/locations/phoenix/phoenix-lobby-2.jpg", alt: "Phoenix PHP/IOP lobby with modern art and green lounge chairs" },
  { src: "/images/locations/phoenix/phoenix-reception-2.jpg", alt: "Phoenix reception desk with geometric light fixture" },
  { src: "/images/locations/phoenix/phoenix-reception-1.jpg", alt: "Phoenix reception area from hallway entrance" },
  { src: "/images/locations/phoenix/phoenix-reception-3.jpg", alt: "Phoenix reception area side view with green accent chair" },
  { src: "/images/locations/phoenix/phoenix-lobby-1.jpg", alt: "Phoenix waiting area with green chairs and wall-mounted TV" },
  { src: "/images/locations/phoenix/phoenix-lobby-lounge.jpg", alt: "Phoenix lobby lounge with couch and flat-screen TV" },
  { src: "/images/locations/phoenix/phoenix-hallway.jpg", alt: "Phoenix hallway with framed artwork and modern lighting" },
  { src: "/images/locations/phoenix/phoenix-game-room-1.jpg", alt: "Phoenix game room with pool table, hexagon ceiling lights, and arcade machines" },
  { src: "/images/locations/phoenix/phoenix-game-room-2.jpg", alt: "Phoenix game room wide view with pool table, air hockey, and bar seating" },
  { src: "/images/locations/phoenix/phoenix-game-room-arcade.jpg", alt: "Phoenix game room arcade machines and pool table with motivational wall quote" },
  { src: "/images/locations/phoenix/phoenix-shuffleboard.jpg", alt: "Phoenix shuffleboard table in recreation area" },
  { src: "/images/locations/phoenix/phoenix-classroom-1.jpg", alt: "Phoenix classroom with desks and Mindset Is Everything wall text" },
  { src: "/images/locations/phoenix/phoenix-classroom-2.jpg", alt: "Phoenix classroom from rear showing TV and whiteboard" },
  { src: "/images/locations/phoenix/phoenix-group-room-2.jpg", alt: "Phoenix group room with desks in U-shape layout and inspirational wall quote" },
  { src: "/images/locations/phoenix/phoenix-group-room-3.jpg", alt: "Phoenix group room with individual desks and chairs" },
  { src: "/images/locations/phoenix/phoenix-therapy-office-2.jpg", alt: "Phoenix therapy office with beige couch and arched bookshelf" },
  { src: "/images/locations/phoenix/phoenix-therapy-office-3.jpg", alt: "Phoenix therapy office with blue LED-lit bookshelf" },
  { src: "/images/locations/phoenix/phoenix-medical-room.jpg", alt: "Phoenix medical exam room with examination table and hand-washing station" },
  { src: "/images/locations/phoenix/phoenix-kitchen-2.jpg", alt: "Phoenix kitchen wide view with island sink and appliances" },
  { src: "/images/locations/phoenix/phoenix-kitchen-3.jpg", alt: "Phoenix kitchen showing wall-mounted TV and coffee station" },
];

export default function PhoenixLocationPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["locations/phoenix"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/locations/phoenix"))]} />
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/phoenix" cssSelectors={["[data-speakable]"]} />
      <LocalBusinessSchema index={2} />
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/locations" }, { name: "Phoenix", path: "/locations/phoenix" }]} />
      <VideoSchemas path="/locations/phoenix/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/phoenix")} />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Phoenix PHP / IOP Center"
        description="Outpatient addiction and mental health treatment, PHP, IOP, OP, and TMS therapy in the West Valley."
        bgImage="/images/general/accom-group-room.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Outpatient Treatment in Phoenix
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix center at 4160 N. 108th Ave provides structured outpatient programming for clients stepping down from residential treatment or entering care directly. PHP, IOP, and OP programs are designed to deliver clinical depth while allowing you to maintain daily responsibilities.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              This location also houses our NeuroStar TMS therapy suite, the only TMS system FDA-cleared for depression, anxious depression, OCD, and adolescents ages 15 and older.
            </p>

            {/* Residential callout */}
            <div className="bg-cream border border-gold/30 rounded-xl p-6">
              <p className="text-forest text-sm leading-relaxed">
                <strong>Looking for residential treatment?</strong> This location offers PHP, IOP, OP, and TMS therapy. For residential treatment, please see our{" "}
                <Link href="/locations/glendale" className="text-gold font-semibold hover:underline">Glendale</Link> or{" "}
                <Link href="/locations/scottsdale" className="text-gold font-semibold hover:underline">Scottsdale</Link> facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FacilityVideoSection
        youtubeId="rMkEYhoW-kE"
        title="Desert Recovery Centers Phoenix Facility Tour"
        videoTitle="Phoenix Recovery Center Tour"
        location="Phoenix, Arizona"
        address="1623 W Moody Trail, Phoenix, AZ 85041"
        phone="(623) 257-5384"
        amenities={["Private Bedrooms", "Group Therapy Rooms", "Dining Room", "Living Areas", "Kitchen", "Outdoor Space"]}
        ctaPhone="6232575384"
      />

      {/* Contact & Services */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Phoenix Center
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                Contact & Location Details
              </h2>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Address</h3>
                <p className="text-gray-600 text-sm">4160 N. 108th Ave</p>
                <p className="text-gray-600 text-sm">Phoenix, AZ 85037</p>
                <a href="tel:+16232575384" className="text-gold font-semibold text-xl block mt-3">(623) 257-5384</a>
                <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-forest font-semibold mb-4">Services</h3>
                <div className="flex flex-wrap gap-3">
                  {["PHP", "IOP", "OP", "TMS Therapy"].map((p) => (
                    <span key={p} className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest font-semibold mb-6">Programs Available</h3>
              <div className="space-y-4">
                {services.map((svc) => (
                  <div key={svc.name} className="bg-white rounded-xl p-5 border border-gray-100">
                    <h4 className="font-display text-base text-forest font-semibold mb-2">{svc.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              Comprehensive Outpatient Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our Phoenix clinical team treats the full spectrum of addiction and mental health conditions. Our dual diagnosis specialization means co-occurring conditions are always addressed simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine" },
                { label: "Meth Addiction", href: "/addiction/meth" },
                { label: "Prescription Drug Addiction", href: "/addiction/prescription-drugs" },
                { label: "Marijuana Addiction", href: "/addiction/marijuana" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-cream rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors"
                >
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery photos={gallery} title="Phoenix Facility Gallery" />

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        {
          question: "Is there a Desert Recovery Centers in Phoenix?",
          answer: "Yes, Desert Recovery Centers has an outpatient center at 4160 N. 108th Ave, Phoenix, AZ 85037, offering PHP, IOP, OP, and NeuroStar TMS therapy. For residential treatment, DRC operates facilities in Glendale and Scottsdale.",
        },
        {
          question: "What outpatient treatment is available in Phoenix, Arizona?",
          answer: "Desert Recovery Centers Phoenix offers PHP (Partial Hospitalization), IOP (Intensive Outpatient), OP (Outpatient), and NeuroStar TMS therapy for depression, anxious depression, OCD, and adolescents ages 15+. Evidence-based dual diagnosis treatment delivered by licensed psychologists and board-certified psychiatrists.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Phoenix residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Phoenix residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 257-5384 for a free insurance check.",
        },
      ]} />
      <FAQSection faqs={faqData["locations/phoenix"]} />
      <CTASection />
      <Footer />
    </>
  );
}
