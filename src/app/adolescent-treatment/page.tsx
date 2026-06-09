import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SpeakableSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import { getPageMeta } from "@/data/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import FAQSection from "@/components/FAQSection";
import dynamic from "next/dynamic";

const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false, loading: () => null });

const SITE_URL = "https://desertrecoverycenters.com";

const meta = getPageMeta("/adolescent-treatment/");

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

const adolescentSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}/adolescent-treatment`,
  url: `${SITE_URL}/adolescent-treatment`,
  name: "Adolescent Intensive Outpatient Program (IOP) in Phoenix, AZ",
  description:
    "Evening intensive outpatient program for adolescents ages 12 to 17 at the Desert Recovery Centers Phoenix outpatient location.",
  mainEntity: {
    "@type": "MedicalTherapy",
    name: "Adolescent Intensive Outpatient Program (IOP)",
    description:
      "Structured evening intensive outpatient treatment for adolescents ages 12 to 17, Monday through Friday from 4 to 9 pm.",
  },
  provider: { "@id": `${SITE_URL}/#organization` },
  telephone: "+16029050057",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4160 N 108th Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85037",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "16:00",
    closes: "21:00",
  },
  audience: {
    "@type": "PeoplePatientGroup",
    suggestedMinAge: 12,
    suggestedMaxAge: 17,
  },
  paymentAccepted: "Out-of-network commercial insurance, In-network TriCare/TriWest, Private Pay",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Arizona Department of Health Services license",
    value: "OTC20452",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Joint Commission Accreditation",
  },
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Adolescent Intensive Outpatient Program (IOP)",
      description:
        "Group therapy, individual therapy, and family work for adolescents ages 12 to 17. Monday through Friday, 4 to 9 pm.",
    },
  ],
};

const gallery = [
  { src: "/images/locations/phoenix/phoenix-group-room-2.jpg",   alt: "Group therapy room at the Desert Recovery Centers Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-group-room-3.jpg",   alt: "Group room used for adolescent IOP sessions at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-classroom-1.jpg",    alt: "Classroom space at the Desert Recovery Centers Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-classroom-2.jpg",    alt: "Skills-based learning space at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-therapy-office-2.jpg", alt: "Individual therapy office at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-therapy-office-3.jpg", alt: "Therapy office at the Desert Recovery Centers Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-lobby-2.jpg",        alt: "Lobby at the Desert Recovery Centers Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-reception-1.jpg",    alt: "Reception area at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-game-room-1.jpg",    alt: "Recreation room at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-theater-1.jpg",      alt: "Theater room at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-gym.jpg",            alt: "Fitness space at the Phoenix outpatient location" },
  { src: "/images/locations/phoenix/phoenix-hallway.jpg",        alt: "Interior hallway at the Desert Recovery Centers Phoenix outpatient location" },
];

function BodySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12">
      <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-4">{title}</h2>
      <div className="w-[60px] h-0.5 bg-gold mb-6" />
      {children}
    </div>
  );
}

export default function AdolescentTreatmentPage() {
  return (
    <>
      <SchemaScript schema={[adolescentSchema]} />
      <SpeakableSchema url="/adolescent-treatment" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <Breadcrumb items={getBreadcrumbsFromPathname("/adolescent-treatment")} />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Adolescent Intensive Outpatient (IOP)"
        description="Structured evening treatment for adolescents ages 12 to 17 at our Phoenix outpatient location, so teens stay in school and at home while getting consistent therapeutic support."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      <section className="py-16 md:py-24 bg-white" data-speakable="true">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              Desert Recovery Centers provides intensive outpatient (IOP) treatment for adolescents ages 12 to 17 at our Phoenix location on N. 108th Avenue. Our adolescent IOP is a dedicated program track, scheduled separately from our adult sessions, led by Clinical Director Dr. An Nguyen, PsyD. Sessions run Monday through Friday from 4 to 9 pm, in the evening after adult programming concludes for the day. To ask about the adolescent program, call{" "}
              <a href="tel:+16029050057" className="text-gold font-semibold">(602) 905-0057</a>.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-6">
              The program provides structured, evidence-based treatment for adolescents facing emotional, behavioral, substance use, and family-related challenges, while they remain engaged in their home, school, and community. It is built to support stabilization, skill development, and improved functioning without 24-hour residential care. Sessions are scheduled in the evening so adolescents can stay in school during the day. Treatment is delivered primarily in person to support peer interaction and skills-based group learning. Telehealth may be used on a limited, case-by-case basis when clinically appropriate, such as transportation barriers, illness, or temporary access limitations.
            </p>

            <BodySection title="What we treat">
              <p className="text-gray-600 leading-relaxed">
                The adolescent IOP supports adolescents experiencing a range of mild to moderate mental health and behavioral health concerns, including anxiety disorders; depressive and mood disorders; trauma-related symptoms and stress reactions; adjustment disorders and life-transition difficulties; emotional and behavioral dysregulation; family conflict and communication difficulties; peer relationship and social functioning challenges; low self-esteem and identity-development concerns; school-related stress, attendance issues, and academic challenges; mild to moderate behavioral concerns; substance use concerns appropriate for outpatient-level care; and co-occurring mental health and substance use concerns that do not require a higher level of care. The program is appropriate for adolescents who are safe to remain in the community and able to participate in structured outpatient treatment.
              </p>
            </BodySection>

            <BodySection title="Our approach">
              <p className="text-gray-600 leading-relaxed">
                Treatment is individualized and developmentally appropriate, using evidence-based and trauma-informed methods, including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT) skills training, Motivational Interviewing (MI), trauma-informed care, psychoeducation, mindfulness and emotional-regulation skill building, relapse prevention and coping-skills development, strengths-based and solution-focused interventions, group therapy with process-oriented and skills-based components, and family systems interventions.
              </p>
            </BodySection>

            <BodySection title="Family involvement">
              <p className="text-gray-600 leading-relaxed">
                Family engagement is a central part of adolescent treatment. Caregivers are actively involved through family therapy sessions, participation in treatment planning and progress updates, ongoing communication and care coordination, building communication skills and healthy boundaries, and support in reinforcing coping skills at home. Parents and caregivers also attend weekly psychoeducation and support groups built to deepen understanding of adolescent mental health and strengthen the family system. Topics may include understanding adolescent mental and behavioral health concerns, communication strategies and de-escalation techniques, healthy boundaries and limit setting, emotional regulation and coping skills for families, family-systems dynamics, supporting treatment goals at home, relapse-prevention awareness and early warning signs, and building consistency and healthy routines.
              </p>
            </BodySection>

            <BodySection title="School and academic coordination">
              <p className="text-gray-600 leading-relaxed">
                The program supports academic functioning and, when appropriate and authorized, coordinates with schools and educational staff to help with school attendance and engagement, academic stress management, behavioral support planning in the school setting, reintegration or transition planning, and coordination with school counselors or support staff. The goal is to support continued education while addressing emotional and behavioral needs.
              </p>
            </BodySection>

            <BodySection title="Bridgework services">
              <p className="text-gray-600 leading-relaxed">
                Bridgework services may be included as part of adolescent care when clinically appropriate. These services help adolescents apply treatment gains in real-world settings and strengthen functioning outside of structured programming. Bridgework may include practicing coping skills in home and community environments, supporting healthy peer and family interactions, strengthening daily routines and responsibility, academic and extracurricular engagement support, improving communication and problem-solving in real-life situations, and transition support and continuity-of-care planning. These services bridge the gap between structured treatment and everyday life.
              </p>
            </BodySection>

            <BodySection title="Clinical scope and safety">
              <p className="text-gray-600 leading-relaxed">
                The adolescent IOP is intended for adolescents who can safely participate in outpatient treatment. Adolescents who need a higher level of care due to acute psychiatric instability, significant safety concerns, or a need for intensive monitoring may be referred to a more appropriate level of care. The program is not designed for crisis stabilization or intensive safety monitoring. It focuses on structured outpatient support, skill development, and family-centered treatment.
              </p>
            </BodySection>
          </div>
        </div>
      </section>

      <PhotoGallery photos={gallery} title="See the Space" eyebrow="Our Facility" />

      {/* AEO Blocks */}
      <AEOBlock
        entries={[
          {
            question: "Is there an adolescent IOP at Desert Recovery Centers in Phoenix?",
            answer:
              "Yes. Desert Recovery Centers offers an intensive outpatient program for adolescents ages 12 to 17 at 4160 N. 108th Ave, Phoenix, AZ 85037. Sessions run in the evening, Monday through Friday from 4 to 9 pm, after adult programming concludes for the day. The program is Joint Commission accredited. Call (602) 905-0057 to ask about admissions.",
          },
          {
            question: "Who is the adolescent IOP for?",
            answer:
              "The program serves adolescents ages 12 to 17 with mild to moderate clinical needs who are safe to remain in the community and able to participate in structured outpatient treatment. It is not a crisis stabilization service. When a teen needs a higher level of care, the clinical team refers the family to a more appropriate level of care.",
          },
          {
            question: "Does the adolescent program accept insurance?",
            answer:
              "Desert Recovery Centers accepts out-of-network coverage from most major commercial insurance plans (Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and others), is in-network with TriCare and TriWest, and offers cash-pay options. Benefits are verified before treatment begins. Call (602) 905-0057.",
          },
        ]}
      />

      <FAQSection faqs={[]} />
      <CTASection />
      <Footer />
    </>
  );
}
