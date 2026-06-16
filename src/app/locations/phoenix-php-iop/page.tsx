import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema, VideoSchemas } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import dynamic from "next/dynamic";
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false, loading: () => null });
import { getPageMeta } from "@/data/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { faqData } from "@/data/faq-data";
import { getFAQSchema } from "@/lib/schema";
import FAQSection from "@/components/FAQSection";
import PhoenixPHPContent from "./PhoenixPHPContent";

const SITE_URL = "https://desertrecoverycenters.com";

const meta = getPageMeta("/locations/phoenix-php-iop/");

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

const gallery = [
  { src: "/images/locations/php-iop/php-iop-game-room-hero.jpg", alt: "Recreation and game room with billiards table and lounge seating at Desert Recovery Centers Phoenix PHP and IOP outpatient center" },
  { src: "/images/locations/php-iop/php-iop-game-room-2.jpg", alt: "Game room with billiards and lounge seating at Desert Recovery Centers Phoenix outpatient program" },
  { src: "/images/locations/php-iop/php-iop-reception-1.jpg", alt: "Reception desk and lobby seating at Desert Recovery Centers Phoenix PHP and IOP treatment center" },
  { src: "/images/locations/php-iop/php-iop-waiting-1.jpg", alt: "Comfortable waiting lounge with seating at Desert Recovery Centers Phoenix outpatient center" },
  { src: "/images/locations/php-iop/php-iop-hallway-1.jpg", alt: "Main hallway leading to therapy offices at Desert Recovery Centers Phoenix PHP and IOP center" },
  { src: "/images/locations/php-iop/php-iop-group-room-1.jpg", alt: "Group therapy room with seating at Desert Recovery Centers Phoenix outpatient program" },
  { src: "/images/locations/php-iop/php-iop-classroom-1.jpg", alt: "Psychoeducation classroom with work tables at Desert Recovery Centers Phoenix PHP and IOP center" },
  { src: "/images/locations/php-iop/php-iop-classroom-2.jpg", alt: "Group education room with seating and presentation screen at Desert Recovery Centers Phoenix outpatient center" },
  { src: "/images/locations/php-iop/php-iop-therapy-office-1.jpg", alt: "Private individual therapy office at Desert Recovery Centers Phoenix PHP and IOP treatment center" },
  { src: "/images/locations/php-iop/php-iop-therapy-office-2.jpg", alt: "One on one counseling office at Desert Recovery Centers Phoenix outpatient program" },
  { src: "/images/locations/php-iop/php-iop-clinic-1.jpg", alt: "Medical exam room for psychiatric and medical evaluations at Desert Recovery Centers Phoenix PHP and IOP center" },
  { src: "/images/locations/php-iop/php-iop-kitchen-1.jpg", alt: "Client kitchen and break room at Desert Recovery Centers Phoenix outpatient treatment center" },
  { src: "/images/locations/php-iop/php-iop-game-room-1.jpg", alt: "Recreation game room with pool table and arcade games at Desert Recovery Centers Phoenix PHP and IOP center" },
  { src: "/images/locations/php-iop/php-iop-shuffleboard.jpg", alt: "Shuffleboard table in the recreation room at Desert Recovery Centers Phoenix PHP and IOP center" },
];

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalClinic"],
  "@id": `${SITE_URL}/locations/phoenix-php-iop`,
  name: "Desert Recovery Centers - Phoenix",
  description:
    "Joint Commission accredited behavioral health treatment center offering PHP, IOP, OP, and TMS therapy in Phoenix, AZ.",
  url: `${SITE_URL}/locations/phoenix-php-iop`,
  telephone: "+16029058070",
  email: "contact@desertrecoverycenters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4160 N 108th Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85037",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4743,
    longitude: -112.3012,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "$$$$",
  paymentAccepted: "Out-of-network commercial insurance, In-network TriCare/TriWest, Private Pay",
  medicalSpecialty: ["Psychiatric"],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Partial Hospitalization Program (PHP)",
      description: "5 to 6 hours per day, 5 days per week. Group therapy, individual therapy, psychiatric care, and medication management.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Intensive Outpatient Program (IOP)",
      description: "3 hours per day, 3 to 5 days per week. Flexible scheduling for clients transitioning from PHP or residential care.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Outpatient Program (OP)",
      description: "1 to 2 sessions per week for ongoing support and relapse prevention.",
    },
    {
      "@type": "MedicalTherapy",
      name: "TMS Therapy",
      description: "FDA cleared NeuroStar TMS for depression, anxious depression, and OCD.",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Joint Commission Accreditation",
  },
  areaServed: ["Phoenix", "Glendale", "Peoria", "Goodyear", "Avondale", "Tolleson", "Surprise"],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Phoenix PHP / IOP", item: `${SITE_URL}/locations/phoenix-php-iop` },
  ],
};

export default function PhoenixPhpIopPage() {
  return (
    <>
      <SchemaScript schema={[clinicSchema, getFAQSchema(faqData["locations/phoenix"]), breadcrumbSchema, {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Admitted to Desert Recovery Centers Phoenix",
        "description": "The admissions process at Desert Recovery Centers Phoenix PHP and IOP program.",
        "totalTime": "PT48H",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Call Admissions", "text": "Call (602) 905-8070 any time, day or night. A live admissions specialist answers from 6 AM to 10 PM, and our line is always open after hours." },
          { "@type": "HowToStep", "position": 2, "name": "Clinical Assessment", "text": "Complete a brief 15 to 20 minute clinical assessment by phone to determine the right level of care." },
          { "@type": "HowToStep", "position": 3, "name": "Insurance Verification", "text": "The admissions team contacts your insurance provider directly and explains your coverage and costs before you commit." },
          { "@type": "HowToStep", "position": 4, "name": "Begin Treatment", "text": "Most clients begin treatment within 48 hours of their first call." },
        ],
      }]} />
      <SpeakableSchema url="/locations/phoenix-php-iop" cssSelectors={["[data-speakable]"]} />
      <VideoSchemas path="/locations/phoenix-php-iop/" />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/phoenix-php-iop")} />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Real Treatment. Real Life. All at Once."
        description="Most people cannot put their life on hold. You still have a job, a family, responsibilities that do not stop because you are struggling. Our Phoenix center was built for exactly that, delivering the same clinical depth as residential treatment, structured around the life you still have to live."
        bgImage="/images/locations/php-iop/php-iop-reception-1.jpg"
      />

      {/* All animated content sections */}
      <PhoenixPHPContent />

      {/* Photo Gallery (uses yet-another-react-lightbox) */}
      <PhotoGallery photos={gallery} title="See the Space" eyebrow="Our Facility" />

      {/* AEO Blocks */}
      <AEOBlock
        entries={[
          {
            question: "Is there a Desert Recovery Centers PHP / IOP center in Phoenix?",
            answer:
              "Yes. Desert Recovery Centers operates a dedicated outpatient treatment center at 4160 N. 108th Ave, Phoenix, AZ 85037. This location offers Partial Hospitalization (PHP), Intensive Outpatient (IOP), Outpatient (OP), and NeuroStar TMS therapy. It is Joint Commission accredited. Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans, is in-network with TriCare and TriWest, and offers cash-pay options. Call (602) 905-8070 for admissions.",
          },
          {
            question: "What outpatient mental health treatment is available in Phoenix, Arizona?",
            answer:
              "Desert Recovery Centers Phoenix offers PHP (5 to 6 hours per day, 5 days per week), IOP (3 hours per day, 3 to 5 days per week), and OP (1 to 2 sessions per week). Treatment covers depression, anxiety, PTSD, bipolar disorder, OCD, and co-occurring substance use disorders. NeuroStar TMS therapy is also available on site for treatment resistant depression, anxious depression, and OCD.",
          },
          {
            question: "Does Desert Recovery Centers Phoenix accept insurance?",
            answer:
              "Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans (Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others), is in-network with TriCare and TriWest, and offers cash-pay options. Benefits are verified at no cost before treatment begins. Call (602) 905-8070 for a free insurance check.",
          },
        ]}
      />

      <FAQSection faqs={faqData["locations/phoenix"]} />
      <CTASection />
      <Footer />
    </>
  );
}
