import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { InlineFAQSchema, MedicalConditionSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";
import RelatedPages from "@/components/RelatedPages";
import ConditionFAQ from "@/components/ConditionFAQ";
import { getPageMeta } from "@/data/page-metadata";
import AnimatedSection from "@/components/animated/AnimatedSection";

const meta = getPageMeta("/addiction/gambling-addiction-treatment/");

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

const faqs = [
  {
    question: "Can gambling addiction be treated?",
    answer:
      "Yes. Gambling disorder is a DSM-5 recognized behavioral addiction that responds well to evidence-based treatment. At Desert Recovery Centers, our doctoral-level clinicians use CBT, dual diagnosis care, and financial recovery support in our Arizona facilities with just 10 beds per location for individualized attention.",
  },
  {
    question: "How long does gambling addiction rehab take?",
    answer:
      "Gambling addiction treatment typically involves 30 days of residential or outpatient care, depending on severity. Many clients benefit from ongoing therapy and support groups after primary treatment. Desert Recovery Centers tailors every plan to your unique situation and recovery goals.",
  },
  {
    question: "Does insurance cover gambling addiction treatment?",
    answer:
      "Yes, most major insurance plans cover gambling addiction treatment at Desert Recovery Centers. Coverage varies by plan and provider. Our admissions team will verify your benefits and explain your out-of-pocket costs before treatment begins.",
  },
  {
    question: "What therapies are used for gambling addiction?",
    answer:
      "CBT is the gold standard for gambling addiction, addressing distorted beliefs about luck and probability. Our dual diagnosis approach also treats co-occurring depression, anxiety, or substance use disorders. Financial recovery support and group therapy help rebuild stability and break isolation.",
  },
];

export default function GamblingAddictionPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <MedicalConditionSchema
        name="Gambling Addiction"
        description="Gambling disorder is a behavioral addiction classified in the DSM-5. Like substance addictions, compulsive gambling hijacks the brain's reward system, with the anticipation of winning triggering dopamine surges that mirror the effects of drugs."
        url="/addiction/gambling"
        possibleTreatments={["CBT", "Dual Diagnosis Treatment", "Financial Recovery Support", "Group Therapy & 12-Step Facilitation"]}
      />
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Gambling Addiction Treatment"
        description="The next bet won't fix what gambling has broken. But the right treatment can help you rebuild what matters most."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
            <p className="text-gray-600 leading-relaxed text-lg">
              You keep telling yourself you&apos;ll stop after one more win, the one that will make everything even. But it never comes, or when it does, it&apos;s never enough. The debt is mounting. You&apos;re hiding bank statements, borrowing money with lies about what it&apos;s for, chasing losses that only create bigger ones. The shame keeps you silent, and the secrecy keeps you stuck. You&apos;re not chasing money anymore, you&apos;re chasing the feeling. And that feeling has taken everything from you.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat gambling addiction as the behavioral health condition it is, one that activates the same reward pathways in the brain as substance use disorders. Our clinical team provides structured, evidence-based treatment to help you break the cycle.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Gambling Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Gambling disorder is classified as a behavioral addiction in the DSM-5. Like substance addictions, compulsive gambling hijacks the brain&apos;s reward system, the anticipation of a win triggers dopamine surges that mirror the effects of drugs. Over time, you need higher stakes or more frequent gambling to achieve the same rush. The &ldquo;near miss&rdquo; effect keeps you playing long past the point of reason, and the cycle of winning, losing, and chasing losses becomes compulsive. Online gambling, sports betting apps, and 24/7 casino access have made this condition more widespread and harder to escape than ever.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Gambling with money you can&apos;t afford to lose, rent, savings, borrowed funds
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Chasing losses by gambling more to try to win back what you&apos;ve lost
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Lying to family, friends, or employers about your gambling
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Restlessness or irritability when trying to cut back or stop
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Jeopardizing relationships, jobs, or educational opportunities because of gambling
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Relying on others to bail you out financially
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Gambling Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Cognitive Behavioral Therapy (CBT)",
                  desc: "CBT addresses the distorted thinking patterns, irrational beliefs about luck, control, and probability, that fuel compulsive gambling. You learn to recognize and interrupt the urge cycle.",
                },
                {
                  title: "Dual Diagnosis Treatment",
                  desc: "Gambling addiction frequently co-occurs with depression, anxiety, ADHD, or substance use disorders. Treating both conditions together produces stronger, more lasting outcomes.",
                },
                {
                  title: "Financial Recovery Support",
                  desc: "Practical guidance on managing debt, rebuilding financial stability, and establishing healthy money behaviors, an essential part of gambling recovery that many programs overlook.",
                },
                {
                  title: "Group Therapy & Peer Support",
                  desc: "Process groups and 12-step facilitation connect you with others who understand the shame and secrecy of gambling addiction. Breaking isolation is critical to recovery.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-cream rounded-xl p-6 border-2 border-transparent hover:border-gold/40 transition-all"
                >
                  <h3 className="font-display text-lg text-forest font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              What Recovery Looks Like Here
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Gambling recovery is about more than stopping the behavior, it&apos;s about understanding what drove it. Whether gambling was an escape from stress, a response to boredom, or a symptom of an underlying condition, your treatment plan addresses the root cause. Our residential and outpatient programs give you the time, structure, and clinical support to rebuild your life, your finances, and your relationships on a healthier foundation.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── Gambling Warning Signs Video ──────────────────────── */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase font-medium">Expert Insight</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-10">When Gambling Crosses From Recreation to Addiction</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/Vgb-tnoS8R0?rel=0"
              title="What Are the Warning Signs That Gambling Has Crossed From Recreation to Addiction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <AddictionPrograms />
      <ConditionFAQ items={faqs} />
      <AEOBlock
        entries={[
          {
            question: "What is gambling addiction treatment at Desert Recovery Centers?",
            answer:
              "Desert Recovery Centers is a Joint Commission accredited luxury treatment center in Arizona offering evidence-based therapy, dual diagnosis care, and financial recovery support for gambling addiction. With just 10 beds per facility, every client receives individualized attention from doctoral-level clinicians.",
          },
          {
            question: "How does Desert Recovery Centers treat gambling addiction?",
            answer:
              "Treatment includes CBT to address distorted thinking about luck and probability, dual diagnosis care for co-occurring depression or anxiety, financial recovery guidance, group therapy, and 12-step facilitation to break isolation and build accountability.",
          },
          {
            question: "Does Desert Recovery Centers accept insurance for gambling rehab?",
            answer:
              "Yes, Desert Recovery Centers accepts most major insurance plans for gambling addiction treatment. Coverage varies by plan and provider, so our admissions team verifies your benefits and explains costs before treatment begins.",
          },
        ]}
      />
      <RelatedPages currentPath="/addiction/gambling" />
      <CTASection />
      <Footer />
    </>
  );
}
