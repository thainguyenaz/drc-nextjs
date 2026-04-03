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
  title: "Luxury Rehab in Phoenix, AZ",
  description:
    "Luxury rehab & addiction treatment in Phoenix, Arizona. Movie theater, pool, holistic care. Call (623) 257-5384 today.",
  path: "/locations/phoenix",
});

const amenities = [
  "Movie Theater",
  "Pool with Waterfall",
  "State-of-the-Art Gym",
  "Massage Room",
  "Gourmet Kitchen",
  "Private Rooms",
  "Holistic Programming Studio",
  "Outdoor Lounge Areas",
  "Art Therapy Space",
  "Meditation Garden",
  "Recreation Room",
  "Dining Area",
];

const gallery = [
  { src: "/images/general/accom-backyard.jpg", alt: "Phoenix facility pool with waterfall" },
  { src: "/images/general/accom-bedroom.jpg", alt: "Phoenix private bedroom" },
  { src: "/images/general/accom-gym.jpg", alt: "Phoenix state-of-the-art gym" },
  { src: "/images/general/accom-massage.jpg", alt: "Phoenix massage room" },
  { src: "/images/general/accom-group-room.jpg", alt: "Phoenix group therapy room" },
  { src: "/images/general/accom-recreation.jpg", alt: "Phoenix recreation area" },
  { src: "/images/glendale/Glendale-Kitchen.jpg", alt: "Gourmet kitchen" },
  { src: "/images/glendale/Glendale-Dining-Room.jpg", alt: "Dining room" },
];

const faqs = [
  {
    q: "Where is the Phoenix facility located?",
    a: "Our Phoenix center is located at 1623 W Moody Trail, Phoenix, AZ 85041. It's accessible from the I-10, I-17, and Loop 202, serving the South Phoenix, East Valley, and broader metro area including Tempe, Mesa, Chandler, and Gilbert.",
  },
  {
    q: "What makes the Phoenix location unique?",
    a: "Our Phoenix facility features expanded holistic programming and distinctive amenities including a movie theater and pool with waterfall. The 5,500-square-foot center emphasizes whole-person healing — integrating art therapy, yoga, mindfulness, and nutritional counseling alongside evidence-based clinical therapies.",
  },
  {
    q: "What programs are available at the Phoenix location?",
    a: "We offer residential treatment (24/7 immersive program) and outpatient programs. Your clinical team recommends the appropriate level of care based on a comprehensive evaluation of your condition, history, and personal circumstances.",
  },
  {
    q: "What conditions do you treat at the Phoenix center?",
    a: "We treat substance use disorders — alcohol, opioids, fentanyl, cocaine, meth, prescription drugs — and mental health conditions including anxiety, depression, PTSD, bipolar disorder, OCD, ADHD, personality disorders, and schizophrenia. Our dual diagnosis approach treats co-occurring conditions simultaneously.",
  },
  {
    q: "Do you accept insurance at the Phoenix location?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits — our admissions team handles verification at no cost.",
  },
  {
    q: "Who is on the clinical team at the Phoenix facility?",
    a: "Your care is delivered by licensed clinical psychologists, a board-certified psychiatrist, registered nurses, and licensed therapists. Clinical Director Dr. An Nguyen, a Licensed Clinical Psychologist, oversees treatment quality. This is doctoral-level care — the highest standard available in residential treatment.",
  },
  {
    q: "Can my family visit the Phoenix facility?",
    a: "Yes, we encourage family involvement. Visiting hours are scheduled regularly, and our family therapy program includes education about addiction and mental health, communication skills, joint therapy sessions, and support groups. The Phoenix location is centrally located for families throughout the metro area.",
  },
  {
    q: "How quickly can I start treatment at the Phoenix center?",
    a: "Most clients begin treatment within 48 hours of their first call. Our admissions team is available 24/7 at (623) 257-5384 and coordinates insurance verification, clinical pre-assessment, and intake rapidly so you can start healing as soon as you're ready.",
  },
];

export default function PhoenixLocationPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <SpeakableSchema url="/locations/phoenix" cssSelectors={["[data-speakable]"]} />
      <LocalBusinessSchema index={2} />
      <BreadcrumbSchema items={[{ name: "Locations", path: "/locations/phoenix" }, { name: "Phoenix", path: "/locations/phoenix" }]} />
      <Navigation />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Luxury Rehab and Addiction Treatment in Phoenix, Arizona"
        description="Residential treatment with expanded holistic programming — where a movie theater meets doctoral-level clinical care."
        bgImage="/images/general/accom-backyard.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Holistic Healing in the Heart of Phoenix
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix facility was built with a specific vision: create a treatment environment where clinical rigor and holistic wellness exist in perfect balance. The result is a 5,500-square-foot residential center that offers the clinical depth of a top-tier program with expanded holistic programming you won&apos;t find at most facilities.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              A movie theater for therapeutic recreation. A pool with waterfall for decompression. Art therapy, yoga, mindfulness meditation, and nutritional counseling woven into a daily rhythm of evidence-based individual and group therapy. Licensed psychologists, a board-certified psychiatrist, and round-the-clock nursing staff ensuring you&apos;re supported at every moment.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our Phoenix center serves the broader metro area — Tempe, Mesa, Chandler, Gilbert, and beyond. If you&apos;re searching for treatment that addresses the whole person in a setting that inspires healing, this is it.
            </p>
          </div>
        </div>
      </section>

      {/* Collision Animation */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <LocationCollision
            leftImage={{
              src: "/images/general/accom-backyard.jpg",
              alt: "Desert Recovery Centers Phoenix pool with waterfall",
            }}
            rightImage={{
              src: "/images/general/accom-group-room.jpg",
              alt: "Desert Recovery Centers Phoenix group therapy space",
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
                Our Phoenix Center
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                Contact & Location Details
              </h2>
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Address</h3>
                <p className="text-gray-600 text-sm">1623 W Moody Trail</p>
                <p className="text-gray-600 text-sm">Phoenix, AZ 85041</p>
                <a href="tel:+16232575384" className="text-gold font-semibold text-xl block mt-3">(623) 257-5384</a>
                <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-xl text-forest font-semibold mb-4">Programs</h3>
                <div className="flex flex-wrap gap-3">
                  {["Residential Treatment", "Outpatient Programs"].map((p) => (
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
              <VideoLightbox videoId="rMkEYhoW-kE">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/general/accom-backyard.jpg"
                    alt="Desert Recovery Centers Phoenix virtual tour"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </VideoLightbox>
              <p className="text-gray-500 text-xs mt-3 text-center">
                Click to watch a video tour of our Phoenix facility
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
              Comprehensive Treatment at DRC Phoenix
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our Phoenix clinical team treats the full spectrum of addiction and mental health conditions. Our dual diagnosis specialization means co-occurring conditions are always addressed simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                { label: "Opioid & Fentanyl Addiction", href: "/addiction/fentanyl-addiction-treatment" },
                { label: "Cocaine Addiction", href: "/addiction/cocaine-addiction-treatment" },
                { label: "Meth Addiction", href: "/addiction/meth-addiction-treatment" },
                { label: "Prescription Drug Addiction", href: "/addiction/prescription-drug-addiction-treatment" },
                { label: "Marijuana Addiction", href: "/addiction/marijuana-addiction-treatment" },
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
              Where Clinical Depth Meets Holistic Healing
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Doctoral-Level Clinical Team",
                  desc: "Licensed clinical psychologists lead your treatment, supported by a board-certified psychiatrist and 24/7 nursing staff. The clinical depth at our Phoenix facility matches the best programs in the country.",
                },
                {
                  title: "Expanded Holistic Programming",
                  desc: "Our Phoenix location features the most extensive holistic offerings of any DRC facility — art therapy, yoga, guided mindfulness, nutritional counseling, and therapeutic recreation including our on-site movie theater.",
                },
                {
                  title: "Evidence-Based Therapies",
                  desc: "CBT, DBT, EMDR, trauma-focused therapy, motivational interviewing, and medication management — each delivered by clinicians with specialized training in the modality.",
                },
                {
                  title: "Individualized Treatment Plans",
                  desc: "Your treatment plan is crafted around your specific diagnosis, history, and goals — then reviewed and adjusted weekly based on measurable clinical progress.",
                },
                {
                  title: "Dual Diagnosis Specialization",
                  desc: "Addiction and mental health conditions fuel each other. Our integrated dual diagnosis approach treats everything simultaneously — which is the only way to build a foundation for lasting recovery.",
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
              Phoenix Facility Gallery
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
          question: "Is there a Desert Recovery Centers in Phoenix?",
          answer: "Yes, Desert Recovery Centers has a facility located at 1623 W Moody Trail, Phoenix, AZ 85041. Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona, and our Phoenix location is a 5,500-square-foot residential center with expanded holistic programming, a movie theater, and pool with waterfall.",
        },
        {
          question: "What addiction treatment is available in Phoenix, Arizona?",
          answer: "Desert Recovery Centers offers comprehensive addiction and mental health treatment at our Phoenix facility. As a Joint Commission accredited luxury treatment center in Arizona, we provide residential and outpatient programs with evidence-based dual diagnosis treatment using CBT, DBT, EMDR, and expanded holistic therapies — delivered by licensed psychologists and board-certified psychiatrists.",
        },
        {
          question: "Does Desert Recovery Centers accept insurance for Phoenix residents?",
          answer: "Yes, Desert Recovery Centers accepts most major insurance plans for Phoenix residents, including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Our admissions team verifies benefits at no cost before treatment begins. Call (623) 257-5384 for a free insurance check.",
        },
      ]} />
      <CTASection />
      <Footer />
    </>
  );
}
