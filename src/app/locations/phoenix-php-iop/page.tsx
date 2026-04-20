import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import dynamic from "next/dynamic";
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false, loading: () => null });
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import { faqData } from "@/data/faq-data";
import FAQSection from "@/components/FAQSection";
import PhoenixPHPContent from "./PhoenixPHPContent";

const SITE_URL = "https://desertrecoverycenters.com";

export const metadata: Metadata = {
  title: "PHP & IOP Mental Health and Addiction Treatment in Phoenix, AZ | DRC",
  description:
    "Partial hospitalization and intensive outpatient addiction and mental health treatment in Phoenix, AZ. Call (602) 905-8070 to verify insurance.",
  alternates: { canonical: `${SITE_URL}/locations/phoenix/` },
  openGraph: {
    title: "PHP & IOP Mental Health and Addiction Treatment in Phoenix, AZ | DRC",
    description:
      "Partial hospitalization and intensive outpatient addiction and mental health treatment in Phoenix, AZ. Call (602) 905-8070 to verify insurance.",
    url: `${SITE_URL}/locations/phoenix/`,
    images: [
      {
        url: `${SITE_URL}/images/locations/phoenix/phoenix-lobby-2.jpg`,
        alt: "Desert Recovery Centers Phoenix PHP and IOP treatment center lobby in Phoenix Arizona",
      },
    ],
    siteName: "Desert Recovery Centers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHP & IOP Mental Health and Addiction Treatment in Phoenix, AZ | DRC",
    description:
      "Partial hospitalization and intensive outpatient addiction and mental health treatment in Phoenix, AZ. Call (602) 905-8070 to verify insurance.",
    images: [`${SITE_URL}/images/locations/phoenix/phoenix-lobby-2.jpg`],
  },
  keywords: [
    "PHP Phoenix AZ",
    "IOP Phoenix AZ",
    "outpatient treatment Phoenix",
    "TMS therapy Phoenix",
    "mental health treatment Phoenix",
    "addiction treatment Phoenix",
    "Desert Recovery Centers Phoenix",
    "partial hospitalization Phoenix",
    "intensive outpatient Phoenix",
    "dual diagnosis Phoenix",
  ],
};


const gallery = [
  { src: "/images/locations/phoenix/phoenix-lobby-2.jpg", alt: "Modern lobby at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-reception-2.jpg", alt: "Reception desk at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-reception-1.jpg", alt: "Reception area entrance at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-lobby-1.jpg", alt: "Waiting area at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-lobby-lounge.jpg", alt: "Lobby lounge at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-hallway.jpg", alt: "Hallway with artwork at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-game-room-1.jpg", alt: "Game room with pool table at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-game-room-2.jpg", alt: "Recreation room at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-classroom-1.jpg", alt: "Classroom at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-group-room-2.jpg", alt: "Group therapy room at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-therapy-office-3.jpg", alt: "Private therapy office at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-medical-room.jpg", alt: "Medical room at Desert Recovery Centers Phoenix PHP IOP treatment center" },
  { src: "/images/locations/phoenix/phoenix-kitchen-2.jpg", alt: "Kitchen at Desert Recovery Centers Phoenix PHP IOP treatment center" },
];

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${SITE_URL}/locations/phoenix-php-iop#clinic`,
  name: "Desert Recovery Centers Phoenix PHP / IOP",
  alternateName: "Desert Recovery Centers Phoenix",
  description:
    "Joint Commission accredited behavioral health treatment center offering PHP, IOP, OP, and TMS therapy in Phoenix, AZ.",
  url: `${SITE_URL}/locations/phoenix-php-iop`,
  telephone: "+16029058070",
  email: "contact@desertrecoverycenters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4160 N. 108th Ave",
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$$$",
  paymentAccepted: "Insurance, Private Pay",
  medicalSpecialty: ["Psychiatry", "Addiction Medicine"],
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
      description: "FDA cleared NeuroStar TMS for depression, anxious depression, OCD, and adolescents ages 15 and older.",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Joint Commission Accreditation",
  },
  areaServed: ["Phoenix", "Glendale", "Peoria", "Goodyear", "Avondale", "Tolleson", "Surprise"],
  parentOrganization: {
    "@type": "Organization",
    name: "Desert Recovery Centers",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Partial Hospitalization Program (PHP) in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Partial Hospitalization Program (PHP) is a structured outpatient level of care where clients attend treatment 5 to 6 hours per day, 5 days per week. At Desert Recovery Centers Phoenix, PHP includes group therapy, individual therapy, psychiatric care, and medication management. It is designed for individuals who need intensive clinical support but do not require overnight residential care. PHP is often used as a step down from inpatient treatment or as a direct entry point for those with moderate to severe mental health or substance use disorders.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Intensive Outpatient Program (IOP) in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Intensive Outpatient Program (IOP) at Desert Recovery Centers Phoenix meets 3 hours per day, 3 to 5 days per week. IOP provides meaningful clinical programming, including group and individual therapy, while allowing clients to maintain daily responsibilities like work, school, or family. It is commonly used as a step down from PHP or residential treatment, or as a primary level of care for clients with a supportive home environment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the address of the Desert Recovery Centers Phoenix PHP / IOP location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Desert Recovery Centers Phoenix PHP / IOP center is located at 4160 N. 108th Ave, Phoenix, AZ 85037. You can reach the facility at (602) 905-8070. Admissions support is available 24 hours a day, 7 days a week.",
      },
    },
    {
      "@type": "Question",
      name: "Does Desert Recovery Centers Phoenix accept insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Desert Recovery Centers accepts most major commercial insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and others. Our admissions team verifies your benefits at no cost before treatment begins. Call (602) 905-8070 or visit our website to start a free insurance verification.",
      },
    },
    {
      "@type": "Question",
      name: "Is TMS therapy available at the Phoenix location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Phoenix center houses a dedicated NeuroStar TMS therapy suite. NeuroStar is the only TMS system FDA cleared for depression, anxious depression, OCD, and adolescents ages 15 and older. TMS is non-invasive, requires no sedation, and sessions take approximately 19 minutes. It can be combined with PHP, IOP, or outpatient programming.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between PHP and IOP treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PHP meets 5 to 6 hours per day, 5 days per week and is the more intensive option, appropriate for individuals who need significant daily clinical support. IOP meets 3 hours per day, 3 to 5 days per week, offering more schedule flexibility while still delivering meaningful therapy. Both include group therapy, individual therapy, and psychiatric support at Desert Recovery Centers Phoenix.",
      },
    },
    {
      "@type": "Question",
      name: "What mental health conditions are treated at the Phoenix PHP / IOP center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desert Recovery Centers Phoenix treats depression, anxiety disorders, PTSD and trauma, bipolar disorder, OCD, and co-occurring substance use disorders. All programming is individualized, evidence based, and clinically supervised. The facility is Joint Commission accredited.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get admitted to the Phoenix PHP or IOP program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (602) 905-8070 any time, day or night. Our admissions team conducts a brief clinical assessment by phone, verifies your insurance, and answers all your questions. Most clients are able to begin treatment within 48 hours of their first call.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Phoenix location offer residential treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Phoenix center specializes in outpatient services: PHP, IOP, OP, and TMS therapy. For residential (inpatient) treatment, Desert Recovery Centers operates separate facilities in Glendale and Scottsdale, Arizona. Clients often complete residential care and then step down to the Phoenix outpatient programs.",
      },
    },
  ],
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
      <SchemaScript schema={[clinicSchema, faqSchema, breadcrumbSchema, {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MedicalClinic"],
        "name": "Desert Recovery Centers — Phoenix PHP/IOP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4160 N. 108th Ave",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85037",
        },
        "telephone": "+14809313617",
        "url": "https://desertrecoverycenters.com/locations/phoenix-php-iop",
        "licenseNumber": "TC20452",
        "priceRange": "$$$",
      }, {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Get Admitted to Desert Recovery Centers Phoenix",
        "description": "The admissions process at Desert Recovery Centers Phoenix PHP and IOP program.",
        "totalTime": "PT48H",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Call Admissions", "text": "Call (602) 905-8070 any time, day or night. A real person answers 24 hours a day." },
          { "@type": "HowToStep", "position": 2, "name": "Clinical Assessment", "text": "Complete a brief 15 to 20 minute clinical assessment by phone to determine the right level of care." },
          { "@type": "HowToStep", "position": 3, "name": "Insurance Verification", "text": "The admissions team contacts your insurance provider directly and explains your coverage and costs before you commit." },
          { "@type": "HowToStep", "position": 4, "name": "Begin Treatment", "text": "Most clients begin treatment within 48 hours of their first call." },
        ],
      }]} />
      <SpeakableSchema url="/locations/phoenix-php-iop" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/locations/phoenix-php-iop")} />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Real Treatment. Real Life. All at Once."
        description="Most people cannot put their life on hold. You still have a job, a family, responsibilities that do not stop because you are struggling. Our Phoenix center was built for exactly that, delivering the same clinical depth as residential treatment, structured around the life you still have to live."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      {/* All animated content sections */}
      <PhoenixPHPContent />

      {/* Photo Gallery (uses yet-another-react-lightbox) */}
      <PhotoGallery photos={gallery} title="See the Space" eyebrow="Our Facility" />

      {/* FAQ Accordion */}
      {/* AEO Blocks */}
      <AEOBlock
        entries={[
          {
            question: "Is there a Desert Recovery Centers PHP / IOP center in Phoenix?",
            answer:
              "Yes. Desert Recovery Centers operates a dedicated outpatient treatment center at 4160 N. 108th Ave, Phoenix, AZ 85037. This location offers Partial Hospitalization (PHP), Intensive Outpatient (IOP), Outpatient (OP), and NeuroStar TMS therapy. It is Joint Commission accredited and accepts most major insurance plans. Call (602) 905-8070 for admissions.",
          },
          {
            question: "What outpatient mental health treatment is available in Phoenix, Arizona?",
            answer:
              "Desert Recovery Centers Phoenix offers PHP (5 to 6 hours per day, 5 days per week), IOP (3 hours per day, 3 to 5 days per week), and OP (1 to 2 sessions per week). Treatment covers depression, anxiety, PTSD, bipolar disorder, OCD, and co-occurring substance use disorders. NeuroStar TMS therapy is also available on site for treatment resistant depression, anxious depression, and OCD.",
          },
          {
            question: "Does Desert Recovery Centers Phoenix accept insurance?",
            answer:
              "Yes. Desert Recovery Centers accepts most major commercial insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and others. Benefits are verified at no cost before treatment begins. Call (602) 905-8070 for a free insurance check.",
          },
        ]}
      />

      <FAQSection faqs={faqData["locations/phoenix"]} />
      <CTASection />
      <Footer />
    </>
  );
}
