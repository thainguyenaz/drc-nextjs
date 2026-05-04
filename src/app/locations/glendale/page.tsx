import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import LocationCollision from "@/components/LocationCollision";
import VideoLightbox from "@/components/VideoLightbox";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { LocalBusinessSchema, SpeakableSchema, VideoSchemas } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import dynamic from "next/dynamic";
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false, loading: () => null });
import { getPageMeta } from "@/data/page-metadata";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import { faqData } from "@/data/faq-data";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import FacilityVideoSection from "@/components/FacilityVideoSection";

const meta = getPageMeta("/locations/glendale/");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage ?? "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: meta.title }],
  },
};

const amenities = [
  "Basketball Court",
  "Tennis Court",
  "Large Pool",
  "State-of-the-Art Gym",
  "Billiards Room",
  "Massage Room",
  "Gourmet Kitchen",
  "Private Rooms",
  "Group Therapy Room",
  "Recreation Room",
  "Therapy Offices",
  "Outdoor Dining Area",
];

const gallery = [
  { src: "/images/glendale/Glendale-Front.jpg", alt: "Exterior of Desert Recovery Centers luxury residential rehab facility in Glendale Arizona" },
  { src: "/images/glendale/Glendale-Living-Room.jpg", alt: "Luxury living room at Desert Recovery Centers Glendale residential treatment center" },
  { src: "/images/glendale/Glendale-Pool.jpg", alt: "Outdoor pool at Desert Recovery Centers Glendale luxury addiction treatment center" },
  { src: "/images/glendale/Glendale-Gym.jpg", alt: "State-of-the-art fitness gym at Desert Recovery Centers Glendale rehab facility" },
  { src: "/images/glendale/Glendale-Kitchen.jpg", alt: "Gourmet kitchen at Desert Recovery Centers Glendale luxury treatment center" },
  { src: "/images/glendale/Glendale-Room-1.jpg", alt: "Private bedroom at Desert Recovery Centers Glendale residential rehab in Arizona" },
  { src: "/images/glendale/Glendale-Massage.jpg", alt: "Massage therapy room at Desert Recovery Centers Glendale treatment facility" },
  { src: "/images/glendale/Glendale-Basketball.jpg", alt: "Basketball court at Desert Recovery Centers Glendale luxury rehab in Arizona" },
  { src: "/images/glendale/Glendale-Dining-Room.jpg", alt: "Dining room at Desert Recovery Centers Glendale residential treatment center" },
  { src: "/images/glendale/Glendale-Tennis.jpg", alt: "Tennis court at Desert Recovery Centers Glendale luxury rehab facility" },
  { src: "/images/glendale/Glendale-Game-Room.jpg", alt: "Game and recreation room at Desert Recovery Centers Glendale treatment center" },
  { src: "/images/glendale/Glendale-Group-Room.jpg", alt: "Group therapy room at Desert Recovery Centers Glendale rehab in Arizona" },
];

const faqs = [
  {
    q: "Where is the Glendale facility located?",
    a: "Our flagship Glendale center is located at 8105 W Frier Dr, Glendale, AZ 85303. It's easily accessible from the I-17, Loop 101, and US-60, serving the entire West Valley including Peoria, Surprise, Avondale, Goodyear, and Buckeye.",
  },
  {
    q: "Why is Glendale considered your flagship facility?",
    a: "Our Glendale location was our first center and remains our largest at 7,500 square feet. It offers the widest range of amenities, basketball court, tennis court, pool, gym, billiards, and massage room. Glendale is a male-only residential treatment center; clients who step down to PHP or IOP transition to our outpatient center in Phoenix.",
  },
  {
    q: "What programs are available at the Glendale location?",
    a: "The Glendale location offers Residential Treatment (24/7 live-in care for adult men). Clients ready for a step-down to PHP or IOP transition to our outpatient center in Phoenix at 4160 N. 108th Ave. Your clinical team recommends the right level of care based on your evaluation.",
  },
  {
    q: "What conditions do you treat at the Glendale center?",
    a: "We treat the full spectrum of substance use disorders, alcohol, opioids, fentanyl, cocaine, meth, prescription drugs, and mental health conditions including anxiety, depression, PTSD, bipolar disorder, OCD, personality disorders, ADHD, and schizophrenia. Our dual diagnosis approach treats co-occurring conditions simultaneously.",
  },
  {
    q: "Do you accept insurance at the Glendale location?",
    a: "Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans (Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others), is in-network with TriCare and TriWest, and offers cash-pay options. Our admissions team verifies your benefits at no cost.",
  },
  {
    q: "What is the clinical team like at Glendale?",
    a: "Your care is led by licensed clinical psychologists and overseen by our board-certified psychiatrist, Dr. Reyes Topete, MD. Registered nurses provide 24/7 medical monitoring, and licensed therapists deliver individual and group sessions daily. Our clinical director, Dr. An Nguyen, oversees treatment quality across all locations.",
  },
  {
    q: "Can my family visit the Glendale facility?",
    a: "Yes, family involvement is encouraged. We offer designated visiting hours and a comprehensive family therapy program including education sessions, joint therapy, and family support groups. The Glendale location is centrally located in the West Valley, making visits convenient for families throughout the area.",
  },
  {
    q: "How quickly can I start treatment at Glendale?",
    a: "Most clients begin treatment within 48 hours of their first call. Our admissions team is available 24/7 at (623) 323-1012 and handles insurance verification, clinical assessment, and intake coordination rapidly so there's no unnecessary delay when you're ready.",
  },
];

export default function GlendaleLocationPage() {
  return (
    <>
      <SchemaScript schema={[
        getFAQSchema(faqData["locations/glendale"]),
        getBreadcrumbSchema(getBreadcrumbsFromPathname("/locations/glendale")),
      ]} />
      <SpeakableSchema url="/locations/glendale" cssSelectors={["[data-speakable]"]} />
      <LocalBusinessSchema index={0} />
      <VideoSchemas path="/locations/glendale/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/glendale")} />
      <PageHero
        eyebrow="Glendale, Arizona"
        title="Luxury Rehab and Addiction Treatment in Glendale, Arizona"
        description="Our flagship 7,500 sq ft residential treatment center, where evidence-based clinical care meets resort-level comfort."
        bgImage="/images/glendale/Glendale-Front.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              The Flagship Center Where It All Started
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Glendale facility is where Desert Recovery Centers began, and it remains the heart of our mission. At 7,500 square feet, it&apos;s our largest residential center, providing 24/7 immersive care for adult men. Clients who step down to outpatient programming transition to our Phoenix center.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              What you&apos;ll find here is a program built on clinical depth, not marketing promises. Licensed psychologists, a board-certified psychiatrist, and registered nurses deliver evidence-based treatment around the clock, in a luxury home-like setting with amenities that rival a resort. Basketball court, tennis court, pool, massage room, gourmet meals, because we believe that healing the whole person requires treating the whole person.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our Glendale center serves the entire West Valley, Peoria, Surprise, Avondale, Goodyear, Buckeye, and beyond. If you or someone you love is ready for treatment that actually works, this is where it starts.
            </p>
          </div>
        </div>
      </section>

      <FacilityVideoSection
        youtubeId="00ZDcQjXoE8"
        title="Desert Recovery Centers Glendale Facility Tour"
        videoTitle="Glendale Recovery Center Tour"
        location="Glendale, Arizona"
        address="8105 W Frier Dr, Glendale, AZ 85303"
        phone="(623) 323-1012"
        sqft="7,500 sq ft"
        amenities={["Pool", "Tennis Court", "Basketball Court", "Massage Therapy", "Gym", "Group Therapy Rooms", "Private Bedrooms", "Outdoor Recreation"]}
        ctaPhone="6233231012"
      />

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/glendale/Glendale-Pool.jpg",
              alt: "Outdoor pool and recreation area at Desert Recovery Centers Glendale luxury rehab facility",
            }}
            rightImage={{
              src: "/images/glendale/Glendale-Room-1.jpg",
              alt: "Private bedroom at Desert Recovery Centers Glendale residential treatment center",
            }}
          />
        </div>
      </section>

      {/* Facility Info + Video */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Glendale Center
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                Contact & Location Details
              </h2>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Address</h3>
                <p className="text-gray-600 text-sm">8105 W Frier Dr</p>
                <p className="text-gray-600 text-sm">Glendale, AZ 85303</p>
                <a href="tel:+16233231012" className="text-gold font-semibold text-xl block mt-3">(623) 323-1012</a>
                <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-xl text-forest font-semibold mb-4">Programs</h3>
                <div className="flex flex-wrap gap-3">
                  {["Residential Treatment"].map((p) => (
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
            <div>
              <h3 className="font-display text-xl text-forest font-semibold mb-4">Take a Virtual Tour</h3>
              <VideoLightbox videoId="00ZDcQjXoE8">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/glendale/Glendale-Front.jpg"
                    alt="Virtual tour preview of Desert Recovery Centers luxury rehab facility in Glendale Arizona"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </VideoLightbox>
              <p className="text-gray-500 text-xs mt-3 text-center">
                Click to watch a video tour of our Glendale facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              What We Treat
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Comprehensive Treatment at DRC Glendale
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our flagship Glendale team treats the full spectrum of addiction and mental health conditions with a dual diagnosis specialization, ensuring all co-occurring conditions are addressed simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Heroin Addiction", href: "/addiction/heroin-addiction-treatment" },
                { label: "Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine-addiction-treatment" },
                { label: "Meth Addiction", href: "/addiction/meth-addiction-treatment" },
                { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 hover:border-gold/30 border border-transparent transition-colors"
                >
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Approach
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Clinical Excellence in Every Detail
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Doctoral-Level Clinical Team",
                  desc: "Your treatment is directed by licensed clinical psychologists with doctoral degrees, not counselors or paraprofessionals. Board-certified psychiatrists provide medication management, and registered nurses offer 24/7 medical monitoring.",
                },
                {
                  title: "Individualized Treatment Plans",
                  desc: "Every client receives a treatment plan designed specifically around their diagnosis, trauma history, personal goals, and strengths. Plans are reviewed and adjusted weekly based on measurable progress.",
                },
                {
                  title: "Evidence-Based Therapies",
                  desc: "CBT, DBT, EMDR, motivational interviewing, trauma-focused therapy, and behavioral activation, delivered by clinicians specifically trained in each modality.",
                },
                {
                  title: "Holistic Wellness",
                  desc: "Yoga, mindfulness meditation, art therapy, nutritional counseling, and fitness programming complement clinical therapies, because lasting recovery requires healing the whole person.",
                },
                {
                  title: "Family Therapy Program",
                  desc: "Our comprehensive family program includes psychoeducation, communication skills training, joint therapy sessions, and family support groups, rebuilding relationships damaged by addiction and mental health conditions.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery photos={gallery} title="Glendale Facility Gallery" />

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        {
          question: "Is there a Desert Recovery Centers in Glendale?",
          answer: "Yes, Desert Recovery Centers' flagship facility is located at 8105 W Frier Dr, Glendale, AZ 85303. Desert Recovery Centers is a Joint Commission accredited luxury treatment provider in Arizona. The Glendale location is a 7,500-square-foot male-only residential treatment center. PHP and IOP programs are offered at our outpatient center in Phoenix at 4160 N. 108th Ave.",
        },
        {
          question: "What addiction treatment is available in Glendale, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment at our flagship Glendale facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and holistic therapies, delivered by licensed psychologists and board-certified psychiatrists with resort-level amenities including a basketball court, tennis court, and pool.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Glendale residents?",
          answer: "For commercial insurance, Desert Recovery Centers works on an out-of-network basis with major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others. Many out-of-network plans provide significant coverage for our level of care. We are also in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team verifies your benefits at no cost. Call (623) 323-1012 for a free insurance check.",
        },
      ]} />
      <FAQSection faqs={faqData["locations/glendale"]} />
      <CTASection />
      <Footer />
    </>
  );
}
