import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import MedicalReview from "@/components/MedicalReview";
import Breadcrumb from "@/components/Breadcrumb";
import Citations from "@/components/Citations";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { defaultAuthor, defaultReviewer } from "@/data/blog-defaults";
import { buildMetadata } from "@/lib/seo";

const SITE_URL = "https://desertrecoverycenters.com";
const POST_TITLE = "10 Warning Signs of Addiction";
const DATE_PUBLISHED = "2026-03-01";
const DATE_MODIFIED = "2026-03-01";
const POST_DESCRIPTION =
  "Recognize the 10 most common warning signs of addiction. Learn when casual use becomes dependence and how to get help in Arizona.";

export const metadata: Metadata = buildMetadata({
  title: "10 Warning Signs of Addiction, DRC",
  description: POST_DESCRIPTION,
  path: "/blog/signs-of-addiction",
});

const signs = [
  {
    title: "1. Increasing Tolerance",
    content:
      "One of the earliest and most reliable indicators of developing addiction is the need for more of a substance to achieve the same effect. What once required one drink now requires three. A prescribed dose of pain medication no longer provides relief without doubling it. Tolerance is the body's adaptation to a substance, and it is almost always the first domino to fall. If you notice yourself or someone you love consistently increasing dosage, frequency, or quantity, this is not normal acclimation. It is the beginning of physical dependence.",
  },
  {
    title: "2. Withdrawal Symptoms",
    content:
      "When a substance becomes necessary just to feel normal, the body protests its absence. Withdrawal can manifest as anxiety, irritability, tremors, sweating, nausea, insomnia, or, in severe cases involving alcohol or benzodiazepines, seizures. The critical distinction is this: the person is no longer using the substance to feel good. They are using it to stop feeling bad. This shift from recreational use to self-medication is a defining feature of addiction.",
  },
  {
    title: "3. Loss of Control Over Use",
    content:
      "Addiction is fundamentally a disease of impaired control. The person may set rules for themselves, \"I'll only drink on weekends,\" \"I'll only use one pill\", and consistently break them. They intend to have one glass and finish the bottle. They plan to take a single dose and empty the prescription. This is not a failure of willpower. The neural pathways governing decision-making and impulse control have been structurally altered by repeated substance exposure. The brain's reward system has been hijacked.",
  },
  {
    title: "4. Neglecting Responsibilities",
    content:
      "As addiction progresses, the substance moves from the periphery of life to its center. Work performance declines. Bills go unpaid. Children are picked up late, or not at all. Deadlines are missed, meetings are forgotten, and the quality of everything the person once took pride in begins to erode. This is not laziness. It is a reallocation of the brain's limited resources toward obtaining and using the substance, leaving everything else starved for attention.",
  },
  {
    title: "5. Secrecy and Deception",
    content:
      "Hiding the extent of substance use is a near-universal feature of addiction. This includes lying about how much was consumed, hiding bottles or pills, using in private, making excuses for absences, and becoming defensive or hostile when questioned. The secrecy itself reveals an important truth: the person knows, on some level, that their use has crossed a line. The deception is not malicious, it is a defense mechanism driven by shame, fear, and the desperate need to protect access to the substance.",
  },
  {
    title: "6. Changes in Social Circles",
    content:
      "People in active addiction gradually replace relationships that challenge their use with relationships that enable it. Old friends are dropped, or drop them. New companions appear who share their substance use habits. Family gatherings are avoided. Activities that once brought joy are abandoned in favor of situations where using is the primary activity. This social restructuring serves a purpose: it eliminates mirrors that reflect the truth of what is happening.",
  },
  {
    title: "7. Physical and Appearance Changes",
    content:
      "Addiction leaves physical fingerprints. Rapid weight loss or gain, bloodshot eyes, dilated or constricted pupils, poor hygiene, skin problems, chronic fatigue, and a general decline in physical appearance are common. Someone who once took care of their appearance may stop grooming, wearing clean clothes, or maintaining basic health habits. These changes are often the first things noticed by people outside the person's immediate circle, coworkers, extended family, old friends who see them after a gap.",
  },
  {
    title: "8. Mood Swings and Personality Changes",
    content:
      "Substances alter brain chemistry, and those alterations produce observable personality shifts. A calm person becomes volatile. Someone who was once reliable becomes erratic. Euphoria gives way to depression. Generosity turns to manipulation. These changes are often the most painful for families to witness, because they feel like the person they love is disappearing, replaced by someone they barely recognize. The personality changes are not who the person is. They are what the substance is doing to them.",
  },
  {
    title: "9. Financial Problems",
    content:
      "Addiction is expensive. As tolerance increases, so does the financial cost of maintaining the habit. Signs include unexplained spending, drained savings accounts, borrowing money with vague explanations, selling possessions, missing bill payments, and in some cases, stealing. Financial deterioration often accelerates faster than other symptoms because the cost of addiction grows exponentially as the disease progresses.",
  },
  {
    title: "10. Continued Use Despite Consequences",
    content:
      "Perhaps the most defining characteristic of addiction is continued use in the face of clear, escalating consequences. A DUI does not stop the drinking. A lost job does not interrupt the opioid use. A hospitalization does not end the pattern. The relationship between cause and consequence, the feedback loop that governs most human behavior, is broken. The person can see the damage, may even acknowledge it, but cannot stop. This is not a choice. This is a medical condition that requires professional treatment.",
  },
];

export default function SignsOfAddictionPage() {
  const articleSchema = getArticleSchema({
    headline: POST_TITLE,
    author: defaultAuthor.name,
    authorUrl: `${SITE_URL}${defaultAuthor.url}`,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    image:
      "https://desertrecoverycenters.com/images/scottsdale/DRC-DRONE-SCOTTSDALE-08-01-2024-August-01-202400006-2.jpg",
    description: POST_DESCRIPTION,
  });

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: POST_TITLE, url: `${SITE_URL}/blog/signs-of-addiction` },
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <SchemaScript schema={[articleSchema, breadcrumbSchema]} />
      <Navigation />

      <div className="bg-white">
        <div className="max-w-container mx-auto px-6 pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <PageHero
        eyebrow="Educational Resource"
        title={POST_TITLE}
        description="Addiction rarely announces itself. These are the patterns that families, friends, and individuals should never ignore."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      <div className="bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 mt-4">
              Last Updated:{" "}
              {new Date(DATE_MODIFIED).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <MedicalReview
              reviewer={defaultReviewer.name}
              credentials={defaultReviewer.credentials}
              reviewerUrl={defaultReviewer.url}
            />
          </div>
        </div>
      </div>

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Addiction rarely announces itself. It builds quietly, through subtle shifts in behavior, mood, and priorities that are easy to dismiss as stress, a rough patch, or &quot;just a phase.&quot; By the time the signs become undeniable, the disease has often progressed significantly.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Understanding the warning signs of addiction is one of the most important things you can do, whether you are concerned about yourself, a family member, a friend, or a colleague. Early recognition saves lives, because addiction is a progressive disease: it does not get better on its own, but it responds powerfully to treatment when caught and addressed.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Below are the ten most common warning signs that substance use has crossed the line from casual or even problematic use into addiction, a chronic, medical condition that requires professional help.
            </p>
          </div>
        </div>
      </section>

      {/* The 10 Signs */}
      {signs.map((sign, i) => (
        <section
          key={i}
          className={`py-12 md:py-16 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-xl md:text-2xl text-forest font-semibold mb-4">
                {sign.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{sign.content}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              What to Do If You Recognize These Signs
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              If you recognized these signs in yourself or someone you love, help is available right now. Addiction is not a moral failing, and reaching out for help is not weakness, it is the single most courageous and consequential decision a person can make.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Desert Recovery Centers, we provide confidential, compassionate, evidence-based treatment for substance use disorders and co-occurring mental health conditions. Our admissions team is available 24 hours a day, 7 days a week, and most clients begin treatment within 48 hours of their first call.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              You do not have to figure this out alone.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+14809313617" className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Call (480) 931-3617
              </a>
              <a href="/resources/mental-health-assessment" className="border border-sage text-sage hover:bg-sage hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer">
                Take a Free Assessment
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-display text-lg text-forest font-semibold mb-4">Related Resources</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Intervention Guide", href: "/resources/intervention-guide" },
                  { label: "Dual Diagnosis Explained", href: "/blog/dual-diagnosis-explained" },
                  { label: "Alcohol Addiction", href: "/addiction/alcoholism-treatment" },
                  { label: "Opioid Addiction", href: "/addiction/heroin-addiction-treatment" },
                  { label: "Medical Detox Guide", href: "/resources/detox-guide" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Citations />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
