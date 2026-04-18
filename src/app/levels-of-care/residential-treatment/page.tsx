import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import { getBreadcrumbsFromPathname } from "@/lib/breadcrumbs";
import AnimatedSection from "@/components/animated/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Residential Addiction Treatment in Arizona | Desert Recovery Centers",
  description:
    "Luxury residential addiction and mental health treatment in Arizona. 10-bed max facilities, individualized care, evidence-based therapies at Desert Recovery Centers.",
  alternates: {
    canonical:
      "https://desertrecoverycenters.com/levels-of-care/residential-treatment/",
  },
  openGraph: {
    title:
      "Residential Addiction Treatment in Arizona | Desert Recovery Centers",
    description:
      "Luxury residential addiction and mental health treatment in Arizona. 10-bed max facilities, individualized care, evidence-based therapies at Desert Recovery Centers.",
    url: "https://desertrecoverycenters.com/levels-of-care/residential-treatment/",
    images: [
      {
        url: "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
        alt: "Residential Addiction Treatment in Arizona | Desert Recovery Centers",
      },
    ],
  },
};

const faqs = [
  {
    q: "What is residential addiction treatment?",
    a: "Residential addiction treatment, also called inpatient rehab, is a structured program where you live at the treatment facility full-time while receiving intensive therapeutic care. At Desert Recovery Centers, residential treatment includes individual therapy, group counseling, psychiatric services, medication management, experiential therapies, and holistic wellness programming. The 24-hour structure removes you from the triggers and stressors of daily life so you can focus entirely on recovery.",
  },
  {
    q: "How long is inpatient rehab?",
    a: "Residential treatment at Desert Recovery Centers typically ranges from 30 to 90 days depending on the severity of addiction, the presence of co-occurring mental health conditions, your response to treatment, and your clinical team's recommendations. Some clients benefit from extended stays when clinically appropriate. Your treatment length is not predetermined — it is continuously assessed and adjusted based on your individual progress and needs.",
  },
  {
    q: "What is included in residential treatment?",
    a: "Residential treatment at DRC includes a comprehensive set of services: individual therapy with licensed clinicians, process and psychoeducational group sessions, psychiatric evaluation and medication management, evidence-based modalities like CBT, DBT, EMDR, and motivational interviewing, experiential therapies such as art therapy and equine-assisted therapy, holistic programming including yoga, fitness, and mindfulness, chef-prepared meals, and aftercare planning. All of this takes place in our luxury Arizona facilities with a maximum of 10 clients per location.",
  },
  {
    q: "Does insurance cover residential rehab in Arizona?",
    a: "Most major insurance plans provide coverage for residential addiction treatment in Arizona, including Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, and many others. Coverage levels and out-of-pocket costs vary by plan. Our admissions team at Desert Recovery Centers will verify your specific benefits and explain your coverage before treatment begins. Call (480) 931-3617 for a free, confidential insurance verification.",
  },
  {
    q: "How is DRC different from other rehabs?",
    a: "Desert Recovery Centers distinguishes itself through a combination of clinical quality and intimate scale. With a maximum of 10 beds per facility, every client receives deeply individualized attention from doctoral-level clinicians. We hold Joint Commission Gold Seal accreditation, the highest standard in behavioral healthcare. Our luxury Arizona facilities offer resort-level amenities in a clinical setting. And our integrated dual diagnosis approach means that addiction and co-occurring mental health conditions are treated simultaneously by the same team, not siloed into separate programs.",
  },
];

const faqSchemaItems = faqs.map((f) => ({
  question: f.q,
  answer: f.a,
}));

export default function ResidentialTreatmentPage() {
  return (
    <>
      <SchemaScript
        schema={[
          getFAQSchema(faqSchemaItems),
          getBreadcrumbSchema(
            getBreadcrumbsFromPathname(
              "/levels-of-care/residential-treatment"
            )
          ),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id":
              "https://desertrecoverycenters.com/levels-of-care/residential-treatment/#webpage",
            url: "https://desertrecoverycenters.com/levels-of-care/residential-treatment/",
            name: "Residential Addiction Treatment in Arizona | Desert Recovery Centers",
            specialty: "Addiction Medicine",
            about: {
              "@type": "MedicalTherapy",
              name: "Residential Addiction Treatment",
              description:
                "Full-time inpatient addiction and mental health treatment with 24/7 clinical support in a luxury residential setting.",
            },
            reviewedBy: {
              "@type": "Person",
              "@id":
                "https://desertrecoverycenters.com/our-team#dr-an-nguyen",
              name: "Dr. An Nguyen",
              jobTitle:
                "Licensed Clinical Psychologist, Clinical Director",
              worksFor: {
                "@id":
                  "https://desertrecoverycenters.com/#organization",
              },
            },
            dateModified: "2026-04-07",
            publisher: {
              "@id":
                "https://desertrecoverycenters.com/#organization",
            },
          },
        ]}
      />
      <Navigation />
      <Breadcrumb
        items={getBreadcrumbsFromPathname(
          "/levels-of-care/residential-treatment"
        )}
      />
      <PageHero
        eyebrow="Levels of Care"
        title="Residential Addiction and Mental Health Treatment in Arizona"
        description="Immersive, individualized treatment in luxury Arizona facilities. Maximum 10 clients per location for truly personalized care."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />

      {/* Medical Review */}
      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical
            Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                What Is Residential Treatment?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Residential treatment is the most immersive level of
                addiction and mental health care available outside of a
                hospital setting. You live at the facility full-time,
                participating in a structured daily schedule of therapy,
                groups, wellness activities, and clinical programming. The
                24-hour environment removes you from the people, places, and
                patterns that fuel substance use, giving you the space and
                support to focus entirely on your recovery.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                At Desert Recovery Centers, residential treatment is not
                a one-size-fits-all program. We limit each of our Arizona
                facilities to a maximum of 10 clients at any given time.
                This intentionally small census means your clinical team
                knows you — your history, your triggers, your goals, and
                the specific conditions that brought you into treatment.
                Every therapy session, group, and wellness activity is
                designed to meet you where you are.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you are stepping down from{" "}
                <Link
                  href="/levels-of-care/detox/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  medical detox
                </Link>{" "}
                or entering treatment for the first time, our residential
                program provides the structure, clinical depth, and personal
                attention that early recovery demands.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 10-Bed Model */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Model
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                The 10-Bed Maximum Advantage
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Most residential treatment centers house 30, 50, or even 100
                clients at a time. At that scale, individualized care
                becomes a marketing claim rather than a clinical reality.
                Desert Recovery Centers operates differently. By capping
                each facility at 10 beds, we create an environment where
                personalized attention is not just possible — it is
                unavoidable.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                The practical impact of our small-group model is significant.
                Your therapist carries a smaller caseload, which means more
                time in session and more thoughtful treatment planning. Your
                psychiatrist sees you regularly, not just once at intake.
                Group sessions are intimate enough for real vulnerability and
                connection. And our clinical team can identify changes in
                your mood, behavior, or engagement quickly — adjusting your
                treatment in real time rather than waiting for a scheduled
                review.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We operate luxury facilities in both{" "}
                <Link
                  href="/locations/glendale/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  Glendale
                </Link>{" "}
                and{" "}
                <Link
                  href="/locations/scottsdale/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  Scottsdale
                </Link>
                , each maintaining this 10-bed standard. The location that
                is right for you depends on your clinical needs and the
                availability at the time of your admission.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Typical Day */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Daily Life
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What a Typical Day Looks Like
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Structure is a cornerstone of residential treatment. At DRC,
              each day is intentionally designed to balance clinical work,
              wellness, rest, and community. While your specific schedule
              is tailored to your treatment plan, a typical day includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Morning wellness activity: yoga, meditation, breathwork, or fitness",
                "Chef-prepared breakfast with nutritional guidance from our culinary team",
                "Individual therapy session with your primary therapist (multiple times per week)",
                "Process group or psychoeducational group led by a licensed clinician",
                "Psychiatric session or medication management check-in as scheduled",
                "Lunch followed by a mindful break or outdoor time in the Arizona landscape",
                "Experiential therapy: art therapy, music therapy, or equine-assisted sessions",
                "Afternoon group: CBT skills, relapse prevention, or life skills building",
                "Free time for reflection, journaling, exercise, or peer connection",
                "Evening programming: 12-step meeting, mindfulness practice, or family session",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">
              This balance of structure and flexibility is designed to help
              you develop healthy routines while giving you space to process
              what you are learning in therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Evidence-Based Modalities
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Therapies Offered in Residential Treatment
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our clinical team draws from a broad range of evidence-based
                and experiential modalities, selecting the therapies that
                match your specific diagnosis, history, and treatment goals.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Cognitive Behavioral Therapy (CBT)",
                    desc: "CBT helps you identify and change the thought patterns and beliefs that drive addictive behavior. You learn to recognize triggers, challenge distorted thinking, and develop healthier responses to stress, cravings, and difficult emotions.",
                  },
                  {
                    title: "Dialectical Behavior Therapy (DBT)",
                    desc: "DBT teaches skills in four key areas: mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness. It is particularly effective for clients who struggle with intense emotions, self-destructive behavior, or co-occurring personality disorders.",
                  },
                  {
                    title:
                      "Eye Movement Desensitization and Reprocessing (EMDR)",
                    desc: "EMDR is a trauma-focused therapy that helps the brain reprocess traumatic memories, reducing their emotional charge and the hold they have on present behavior. Many of our clients have experienced trauma that is intertwined with their substance use.",
                  },
                  {
                    title: "Motivational Interviewing",
                    desc: "This collaborative therapeutic approach strengthens your own motivation and commitment to change. Rather than telling you what to do, your therapist helps you articulate your reasons for recovery and resolve any ambivalence you feel.",
                  },
                  {
                    title: "Experiential and Holistic Therapies",
                    desc: "Art therapy, equine-assisted therapy, yoga, fitness programming, mindfulness meditation, and nature-based activities complement clinical work by engaging the body, reducing stress, and building coping skills that extend beyond the therapy room.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-gold/40 pl-6">
                    <h3 className="font-display text-lg text-forest font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who Is a Good Candidate */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                Who Is a Good Candidate for Residential Treatment?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Residential treatment is appropriate for individuals who need
                a higher level of structure and clinical support than
                outpatient programs can provide. You may be a good candidate
                for residential treatment if you have a moderate to severe
                substance use disorder, have attempted outpatient treatment
                without lasting success, are dealing with co-occurring mental
                health conditions, have an unstable or unsupportive home
                environment, or are stepping down from medical detox and need
                continued intensive care.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Residential treatment is also valuable for individuals who
                simply need time away from their daily environment to break
                deeply entrenched patterns. The immersive nature of the
                program creates space for the kind of deep self-examination
                and skill-building that is difficult to achieve while
                managing work, family, and social obligations
                simultaneously.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                If you are not sure whether residential is the right level of
                care, our admissions team can help. An initial clinical
                assessment over the phone can clarify which level of care
                matches your situation. Call{" "}
                <a
                  href="tel:+14809313617"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  (480) 931-3617
                </a>{" "}
                to speak with someone today.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Bring / Insurance */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Preparing for Treatment
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What to Bring and What to Know
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              We want you to feel prepared and comfortable when you arrive.
              Our admissions team will provide a detailed packing list, but
              in general you should bring comfortable clothing for 7 to 10
              days (laundry service is available), personal hygiene items,
              any prescription medications in their original bottles, a
              journal or reading material, and comfortable shoes for fitness
              and outdoor activities.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Electronics policies vary by facility, and your admissions
              coordinator will explain the specific guidelines for your
              location. We encourage limiting screen time during treatment
              to maximize the benefits of the immersive experience.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Regarding insurance coverage, most major health insurance
              plans cover residential addiction treatment in Arizona. Our
              admissions team handles the insurance verification process and
              will explain your benefits, estimated costs, and any
              out-of-pocket expenses before you commit to treatment. We work
              with a wide range of insurers including Aetna, Cigna, Blue
              Cross Blue Shield, UnitedHealthcare, and many others.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              To begin the admissions process or verify your insurance, call{" "}
              <a
                href="tel:+14809313617"
                className="text-gold hover:text-gold-dark font-semibold"
              >
                (480) 931-3617
              </a>{" "}
              or complete our online{" "}
              <Link
                href="/insurance-verification/"
                className="text-gold hover:text-gold-dark font-semibold"
              >
                insurance verification form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why DRC */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Why Desert Recovery Centers
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Sets DRC Apart
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "10-Bed Maximum Per Facility",
                  desc: "Our small census ensures that your treatment is not generic. Every session, group, and wellness activity is shaped by who you are, not by the needs of a large group.",
                },
                {
                  title: "Doctoral-Level Clinical Team",
                  desc: "Your care is led by licensed clinical psychologists, board-certified psychiatrists, and experienced therapists — not technicians or entry-level counselors.",
                },
                {
                  title: "Integrated Dual Diagnosis Treatment",
                  desc: "Addiction and mental health conditions are treated together by the same clinical team. We do not refer you out for psychiatric care or treat your conditions in separate tracks.",
                },
                {
                  title: "Luxury Residential Setting",
                  desc: "Our Arizona facilities provide resort-quality accommodations — private rooms, pools, fitness centers, gourmet meals — in a clinical environment. You are here to heal, and your surroundings should support that.",
                },
                {
                  title: "Continuum of Care",
                  desc: "Residential treatment at DRC connects to every other level of care we offer, from detox through PHP, IOP, and aftercare. Your recovery pathway is continuous, not fragmented.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                What Comes After Residential Treatment?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Residential treatment builds a strong foundation for
                recovery, but that foundation needs continued support. When
                you complete residential at DRC, your clinical team will
                recommend the next appropriate level of care based on your
                progress. For many clients, this means stepping down to our{" "}
                <Link
                  href="/levels-of-care/php/"
                  className="text-gold hover:text-gold-dark font-semibold"
                >
                  Partial Hospitalization Program (PHP)
                </Link>
                , which provides intensive daily programming while
                reintroducing greater independence.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                This graduated approach — moving through levels of care at a
                pace that matches your readiness — is one of the most
                effective ways to protect the progress you make in
                residential treatment and build the skills you need for
                long-term recovery.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question:
              "What is residential addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) provides residential addiction and mental health treatment in facilities capped at 10 beds. Clients receive individualized care from doctoral-level clinicians including individual therapy, group counseling, psychiatric services, and holistic programming in a luxury setting.",
          },
          {
            question:
              "How long is residential treatment at Desert Recovery Centers?",
            answer:
              "Residential treatment at DRC typically lasts 30 to 90 days. Treatment length is based on the severity of addiction, co-occurring mental health conditions, and individual clinical progress. The treatment team continuously reassesses and adjusts the timeline to support the best possible outcome for each client.",
          },
          {
            question:
              "What therapies are used in residential treatment at DRC?",
            answer:
              "DRC uses evidence-based modalities including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), EMDR, motivational interviewing, and experiential therapies like art therapy and equine-assisted therapy. Each client's treatment plan is individualized based on their diagnosis, history, and clinical needs.",
          },
        ]}
      />
      <RelatedPages currentPath="/levels-of-care/residential-treatment" />
      <CTASection />
      <Footer />
    </>
  );
}
