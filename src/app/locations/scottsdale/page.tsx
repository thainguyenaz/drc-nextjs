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

const meta = getPageMeta("/locations/scottsdale/");

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

const amenities = [
  "Large Pool",
  "Tennis Court",
  "Basketball Court",
  "State-of-the-Art Gym",
  "Massage Room",
  "Scenic Mountain Views",
  "Gourmet Kitchen",
  "Private Rooms",
  "Game Room",
  "Serenity Room",
  "Dining Room",
  "Outdoor Lounge Areas",
];

const gallery = [
  { src: "/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg", alt: "Scottsdale facility front entrance" },
  { src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-1317August-01-202400007-2.jpg", alt: "Scottsdale luxury living room" },
  { src: "/images/scottsdale/DRC-GYM-SCOTTSDALE-08-01-2024-August-07-202400003-2.jpg", alt: "Scottsdale state-of-the-art gym" },
  { src: "/images/scottsdale/DRC-KITCHEN-NORTH-SCOTTSDALE-08-01-2024-1292August-01-202400001-2.jpg", alt: "Scottsdale gourmet kitchen" },
  { src: "/images/scottsdale/DRC-UPSTAIRS-MASTER-BEDROOM-NORTH-SCOTTSDALE-08-01-2024-0658August-01-202400014-2.jpg", alt: "Scottsdale master bedroom" },
  { src: "/images/scottsdale/DRC-MASSAGE-ROOM-NORTH-SCOTTSDALE-08-01-2024-August-01-202400003-2.jpg", alt: "Scottsdale massage room" },
  { src: "/images/scottsdale/DRC-GAME-ROOM-NORTH-SCOTTSDALE-08-01-2024-1388August-01-202400004-2.jpg", alt: "Scottsdale game room" },
  { src: "/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg", alt: "Scottsdale aerial view" },
  { src: "/images/scottsdale/DRC-LDINNING-NORTH-SCOTTSDALE-08-01-2024-1185August-01-202400001-2.jpg", alt: "Scottsdale dining room" },
  { src: "/images/scottsdale/DRC-SERANITY-NORTH-SCOTTSDALE-08-01-2024-August-01-202400001-2.jpg", alt: "Scottsdale serenity room" },
  { src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-01-2024-1553August-01-202400004-2.jpg", alt: "Scottsdale outdoor area" },
  { src: "/images/scottsdale/DRC-VHARMONY-ROOM-NORTH-SCOTTSDALE-08-01-2024-0631August-01-202400010-2.jpg", alt: "Scottsdale harmony room" },
];

const faqs = [
  {
    q: "Where exactly is the Scottsdale facility?",
    a: "Our Scottsdale center is located at 23222 N Church Rd, Scottsdale, AZ 85255, in the north Scottsdale area surrounded by stunning mountain views and serene desert landscape. It's easily accessible from the Loop 101, Scottsdale Road, and the Pima Freeway.",
  },
  {
    q: "What programs are available at the Scottsdale location?",
    a: "Our Scottsdale facility offers three levels of care: Residential Treatment (24/7 live-in program), Partial Hospitalization Program (PHP) with 5-6 hours of daily programming, and Intensive Outpatient Program (IOP) meeting 3-4 times per week. Your clinical team recommends the right level based on your evaluation.",
  },
  {
    q: "What conditions do you treat at the Scottsdale center?",
    a: "We treat the full spectrum of mental health conditions and substance use disorders, including anxiety, depression, PTSD, bipolar disorder, OCD, alcohol addiction, opioid dependence, stimulant addiction, and more. Our dual diagnosis approach treats co-occurring conditions simultaneously for stronger outcomes.",
  },
  {
    q: "Do you accept insurance at the Scottsdale location?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits, our admissions team handles verification at no cost before you begin treatment.",
  },
  {
    q: "What is the clinical team like at Scottsdale?",
    a: "Your care team includes licensed clinical psychologists, a board-certified psychiatrist, registered nurses, and licensed therapists. Our clinical director, Dr. An Nguyen, is a Licensed Clinical Psychologist who oversees treatment quality across all locations. This is doctoral-level care, not a counselor-driven program.",
  },
  {
    q: "How long does residential treatment typically last?",
    a: "Residential stays typically range from 30 days, depending on the severity and complexity of your condition. Your clinical team continuously evaluates your progress and adjusts the timeline to ensure you have the strongest possible foundation before stepping down to a lower level of care.",
  },
  {
    q: "Can family members visit the Scottsdale facility?",
    a: "Absolutely. We encourage family involvement as a core part of recovery. Family members can visit during designated hours and participate in our family therapy program, including education sessions, joint therapy, and family support groups. The north Scottsdale location is convenient for families throughout the metro area.",
  },
  {
    q: "What makes the Scottsdale location different from other DRC facilities?",
    a: "Our Scottsdale center is nestled in north Scottsdale with panoramic mountain views and a serene desert setting. It features gender-specific group therapy, a pool, tennis and basketball courts, a state-of-the-art gym, massage room, and a peaceful outdoor environment that supports contemplative healing. It's our most scenically stunning location.",
  },
];

export default function ScottsdaleLocationPage() {
  return (
    <>
      <SchemaScript schema={[getFAQSchema(faqData["locations/scottsdale"]), getBreadcrumbSchema(getBreadcrumbsFromPathname("/locations/scottsdale"))]} />
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/scottsdale" cssSelectors={["[data-speakable]"]} />
      <LocalBusinessSchema index={1} />
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/locations" }, { name: "Scottsdale", path: "/locations/scottsdale" }]} />
      <VideoSchemas path="/locations/scottsdale/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/scottsdale")} />
      <PageHero
        eyebrow="Scottsdale, Arizona"
        title="Luxury Rehab and Addiction Treatment in Scottsdale, Arizona"
        description="Residential mental health and addiction treatment nestled in north Scottsdale, where mountain views meet doctoral-level care."
        bgImage="/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-0068August-01-202400009-2.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              A Recovery Oasis in North Scottsdale
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Scottsdale center sits between stunning mountain ranges in one of Arizona&apos;s most beautiful neighborhoods. But what happens inside these walls matters far more than the views outside them. This is where people come to face the hardest challenges of their lives, and where our doctoral-level clinical team helps them do exactly that.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Licensed psychologists, a board-certified psychiatrist, and a dedicated nursing staff deliver evidence-based treatment for addiction and mental health conditions in a residential setting designed for comfort, privacy, and deep personal transformation. Every treatment plan is individualized. Every client receives the attention they deserve.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              If you or someone you love is ready for help, our Scottsdale facility offers the clinical excellence of a top-tier treatment program in a luxury environment you have to see to believe.
            </p>
          </div>
        </div>
      </section>

      <FacilityVideoSection
        youtubeId="7qvyphmKNxg"
        title="Desert Recovery Centers Scottsdale Facility Tour"
        videoTitle="Scottsdale Recovery Center Tour"
        location="North Scottsdale, Arizona"
        address="23222 N Church Rd, Scottsdale, AZ 85255"
        phone="(480) 931-3617"
        amenities={["Pool", "Private Suites", "Gym", "Game Room", "Massage Therapy", "Yoga", "SoftWave Therapy", "Outdoor Recreation", "Chiropractic Care"]}
        ctaPhone="4809313617"
      />

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/scottsdale/DRC-LIVING-ROOMS-NORTH-SCOTTSDALE-08-01-2024-0553August-01-202400015-2.jpg",
              alt: "Desert Recovery Centers Scottsdale luxury living area",
            }}
            rightImage={{
              src: "/images/scottsdale/DRC-OUTSIDE-NORTH-SCOTTSDALE-08-02-2024-0830August-02-202400010-2.jpg",
              alt: "Desert Recovery Centers Scottsdale mountain views",
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
                Our Scottsdale Center
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                Contact & Location Details
              </h2>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Address</h3>
                <p className="text-gray-600 text-sm">23222 N Church Rd</p>
                <p className="text-gray-600 text-sm">Scottsdale, AZ 85255</p>
                <a href="tel:+14809313617" className="text-gold font-semibold text-xl block mt-3">(480) 931-3617</a>
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
              <VideoLightbox videoId="7qvyphmKNxg">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
                    alt="Desert Recovery Centers Scottsdale virtual tour"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </VideoLightbox>
              <p className="text-gray-500 text-xs mt-3 text-center">
                Click to watch a video tour of our Scottsdale facility
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
              Comprehensive Treatment at DRC Scottsdale
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our Scottsdale clinical team treats the full spectrum of addiction and mental health conditions, with a specialization in dual diagnosis, treating co-occurring conditions simultaneously for lasting recovery.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
                { label: "Depression", href: "/mental-health/depression-treatment" },
                { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
                { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
                { label: "OCD", href: "/mental-health/ocd-treatment" },
                { label: "Personality Disorders", href: "/mental-health/personality-disorder-treatment" },
                { label: "Alcohol Addiction", href: "/addiction/alcohol" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine" },
                { label: "Meth Addiction", href: "/addiction/meth" },
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
              Evidence-Based Care in a Luxury Setting
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Doctoral-Level Clinical Team",
                  desc: "Your treatment is led by licensed clinical psychologists and overseen by a board-certified psychiatrist. This isn't a counselor-driven program, it's the highest standard of clinical care available in residential treatment.",
                },
                {
                  title: "Individualized Treatment Plans",
                  desc: "No two clients are alike. Your treatment plan is designed specifically around your diagnosis, history, goals, and strengths, and adjusted continuously as you progress.",
                },
                {
                  title: "Evidence-Based Therapies",
                  desc: "CBT, DBT, EMDR, trauma-focused therapy, motivational interviewing, and medication management, delivered by specialists trained in each modality.",
                },
                {
                  title: "Holistic Wellness Programming",
                  desc: "Yoga, mindfulness meditation, art therapy, nutritional counseling, fitness programming, and nature-based activities that heal the whole person, not just the diagnosis.",
                },
                {
                  title: "Gender-Specific Group Therapy",
                  desc: "Our Scottsdale location offers gender-specific group therapy, creating a safe space for clients to explore sensitive topics with peers who share similar experiences.",
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

      <PhotoGallery photos={gallery} title="Scottsdale Facility Gallery" />

      <ConditionFAQ items={faqs} />
      <AEOBlock entries={[
        {
          question: "Is there a Desert Recovery Centers in Scottsdale?",
          answer: "Yes, Desert Recovery Centers has a facility located at 23222 N Church Rd in north Scottsdale, AZ 85255. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) programs surrounded by stunning mountain views.",
        },
        {
          question: "What addiction treatment is available in Scottsdale, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment in Scottsdale. As a Joint Commission accredited luxury treatment center in Arizona, we provide evidence-based dual diagnosis treatment using CBT, DBT, EMDR, gender-specific group therapy, and holistic therapies, delivered by licensed psychologists and board-certified psychiatrists.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Scottsdale residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Scottsdale residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (480) 931-3617 for a free insurance check.",
        },
      ]} />
      <FAQSection faqs={faqData["locations/scottsdale"]} />
      <CTASection />
      <Footer />
    </>
  );
}
