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
import { buildMetadata, LocalBusinessSchema, BreadcrumbSchema, InlineFAQSchema, SpeakableSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";

export const metadata: Metadata = buildMetadata({
  title: "Luxury Rehab in Glendale, AZ",
  description:
    "Luxury rehab & addiction treatment in Glendale, Arizona. Our flagship 7,500 sq ft facility. Call (623) 323-1012 today.",
  path: "/locations/glendale",
});

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
  { src: "/images/glendale/Gelndale-Front-1.jpg", alt: "Glendale facility front entrance" },
  { src: "/images/glendale/Glendale-Living-Room.jpg", alt: "Glendale luxury living room" },
  { src: "/images/glendale/Glendale-Pool.jpg", alt: "Glendale pool area" },
  { src: "/images/glendale/Glendale-Gym.jpg", alt: "Glendale state-of-the-art gym" },
  { src: "/images/glendale/Glendale-Kitchen.jpg", alt: "Glendale gourmet kitchen" },
  { src: "/images/glendale/Glendale-Room-1.jpg", alt: "Glendale private bedroom" },
  { src: "/images/glendale/Glendale-Massage.jpg", alt: "Glendale massage room" },
  { src: "/images/glendale/Glendale-Basketball.jpg", alt: "Glendale basketball court" },
  { src: "/images/glendale/Glendale-Dining-Room.jpg", alt: "Glendale dining room" },
  { src: "/images/glendale/Glendale-Tennis.jpg", alt: "Glendale tennis court" },
  { src: "/images/glendale/Glendale-Game-Room.jpg", alt: "Glendale game room" },
  { src: "/images/glendale/Glendale-Group-Room.jpg", alt: "Glendale group therapy room" },
];

const faqs = [
  {
    q: "Where is the Glendale facility located?",
    a: "Our flagship Glendale center is located at 8105 W Frier Dr, Glendale, AZ 85303. It's easily accessible from the I-17, Loop 101, and US-60, serving the entire West Valley including Peoria, Surprise, Avondale, Goodyear, and Buckeye.",
  },
  {
    q: "Why is Glendale considered your flagship facility?",
    a: "Our Glendale location was our first center and remains our largest at 7,500 square feet. It offers the widest range of amenities — basketball court, tennis court, pool, gym, billiards, and massage room — and the full continuum of care: residential treatment, PHP, and IOP.",
  },
  {
    q: "What programs are available at the Glendale location?",
    a: "We offer three levels of care: Residential Treatment (24/7 immersive program), Partial Hospitalization Program (PHP) with 5-6 hours of daily programming, and Intensive Outpatient Program (IOP) meeting 3-4 times per week. Your clinical team recommends the right level based on your comprehensive evaluation.",
  },
  {
    q: "What conditions do you treat at the Glendale center?",
    a: "We treat the full spectrum of substance use disorders — alcohol, opioids, fentanyl, cocaine, meth, prescription drugs — and mental health conditions including anxiety, depression, PTSD, bipolar disorder, OCD, personality disorders, ADHD, and schizophrenia. Our dual diagnosis approach treats co-occurring conditions simultaneously.",
  },
  {
    q: "Do you accept insurance at the Glendale location?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost before you begin treatment.",
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
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/glendale" cssSelectors={["[data-speakable]"]} />
      <LocalBusinessSchema index={0} />
      <BreadcrumbSchema items={[{ name: "Locations", path: "/locations/glendale" }, { name: "Glendale", path: "/locations/glendale" }]} />
      <Navigation />
      <PageHero
        eyebrow="Glendale, Arizona"
        title="Luxury Rehab and Addiction Treatment in Glendale, Arizona"
        description="Our flagship 7,500 sq ft residential treatment center — where evidence-based clinical care meets resort-level comfort."
        bgImage="/images/glendale/Gelndale-Front-1.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              The Flagship Center Where It All Started
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Glendale facility is where Desert Recovery Centers began — and it remains the heart of our mission. At 7,500 square feet, it&apos;s our largest and most comprehensive treatment center, offering the full continuum of care from intensive residential treatment through outpatient programming.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              What you&apos;ll find here is a program built on clinical depth, not marketing promises. Licensed psychologists, a board-certified psychiatrist, and registered nurses deliver evidence-based treatment around the clock — in a luxury home-like setting with amenities that rival a resort. Basketball court, tennis court, pool, massage room, gourmet meals — because we believe that healing the whole person requires treating the whole person.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our Glendale center serves the entire West Valley — Peoria, Surprise, Avondale, Goodyear, Buckeye, and beyond. If you or someone you love is ready for treatment that actually works, this is where it starts.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/glendale/Glendale-Pool.jpg",
              alt: "Desert Recovery Centers Glendale pool and outdoor area",
            }}
            rightImage={{
              src: "/images/glendale/Glendale-Room-1.jpg",
              alt: "Desert Recovery Centers Glendale private bedroom",
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
                  {["Residential Treatment", "Partial Hospitalization (PHP)", "Intensive Outpatient (IOP)"].map((p) => (
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
                    src="/images/glendale/Gelndale-Front-1.jpg"
                    alt="Desert Recovery Centers Glendale virtual tour"
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
              Our flagship Glendale team treats the full spectrum of addiction and mental health conditions with a dual diagnosis specialization — ensuring all co-occurring conditions are addressed simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Heroin Addiction", href: "/addiction/heroin" },
                { label: "Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine" },
                { label: "Meth Addiction", href: "/addiction/meth" },
                { label: "Prescription Drug Addiction", href: "/addiction/prescription-drugs" },
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
                  desc: "Your treatment is directed by licensed clinical psychologists with doctoral degrees — not counselors or paraprofessionals. Board-certified psychiatrists provide medication management, and registered nurses offer 24/7 medical monitoring.",
                },
                {
                  title: "Individualized Treatment Plans",
                  desc: "Every client receives a treatment plan designed specifically around their diagnosis, trauma history, personal goals, and strengths. Plans are reviewed and adjusted weekly based on measurable progress.",
                },
                {
                  title: "Evidence-Based Therapies",
                  desc: "CBT, DBT, EMDR, motivational interviewing, trauma-focused therapy, and behavioral activation — delivered by clinicians specifically trained in each modality.",
                },
                {
                  title: "Holistic Wellness",
                  desc: "Yoga, mindfulness meditation, art therapy, nutritional counseling, and fitness programming complement clinical therapies — because lasting recovery requires healing the whole person.",
                },
                {
                  title: "Family Therapy Program",
                  desc: "Our comprehensive family program includes psychoeducation, communication skills training, joint therapy sessions, and family support groups — rebuilding relationships damaged by addiction and mental health conditions.",
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

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Our Facility
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4">
              Glendale Facility Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        {
          question: "Is there a Desert Recovery Centers in Glendale?",
          answer: "Yes, Desert Recovery Centers' flagship facility is located at 8105 W Frier Dr, Glendale, AZ 85303. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona, and our Glendale location is a 7,500-square-foot residential center offering the full continuum of care including residential treatment, PHP, and IOP programs.",
        },
        {
          question: "What addiction treatment is available in Glendale, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment at our flagship Glendale facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and holistic therapies — delivered by licensed psychologists and board-certified psychiatrists with resort-level amenities including a basketball court, tennis court, and pool.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Glendale residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Glendale residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 323-1012 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
