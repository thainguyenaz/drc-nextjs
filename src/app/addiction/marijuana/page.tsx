import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marijuana Addiction Treatment — Desert Recovery Centers",
  description:
    "Cannabis use disorder treatment in Arizona. Evidence-based therapy for marijuana dependence addressing psychological and behavioral patterns.",
};

export default function MarijuanaAddictionPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Marijuana Addiction Treatment"
        description="When cannabis stops being a choice and starts being a need, it's time to look at what's underneath. We can help you get there."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              People around you probably say it&apos;s not a big deal. &ldquo;It&apos;s just weed.&rdquo; But you know something they don&apos;t — you can&apos;t stop. You&apos;ve tried cutting back, tried taking breaks, but you keep coming back to it. You smoke before work, before social events, before bed — before everything. Without it, you&apos;re anxious, irritable, unable to sleep. Your motivation has flatlined. You know you&apos;re not living up to your potential, and the gap between where you are and where you want to be gets wider every month.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we take cannabis use disorder seriously. While marijuana may carry less physical risk than other substances, the psychological dependence it creates can be deeply disruptive to your life, your relationships, and your mental health.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Cannabis Use Disorder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Today&apos;s marijuana is significantly more potent than previous decades, with THC concentrations often exceeding 20&ndash;30% in flower and 80&ndash;90% in concentrates. This increased potency accelerates the development of tolerance and psychological dependence. Cannabis use disorder is recognized by the DSM-5 and affects roughly 10% of regular users. Withdrawal symptoms — insomnia, irritability, decreased appetite, anxiety, and cravings — are real, and they keep many people stuck in a cycle of use.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using marijuana daily or throughout the day
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Inability to reduce use despite wanting to
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using cannabis to manage anxiety, depression, or boredom
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Declining performance at work or school
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Loss of interest in hobbies, relationships, or goals
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Irritability, sleep problems, or anxiety when you stop using
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Marijuana Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Cognitive Behavioral Therapy (CBT)",
                  desc: "CBT helps you identify the triggers and thought patterns that drive cannabis use, then develop healthier coping strategies to replace it.",
                },
                {
                  title: "Motivational Enhancement",
                  desc: "Motivational interviewing strengthens your internal motivation for change, helping you move from ambivalence to committed action on your own terms.",
                },
                {
                  title: "Co-Occurring Disorder Treatment",
                  desc: "Cannabis use frequently masks underlying anxiety, depression, ADHD, or trauma. Our dual diagnosis approach treats the root issue, not just the symptom.",
                },
                {
                  title: "Life Skills & Wellness",
                  desc: "Rebuilding healthy sleep patterns, stress management, physical fitness, and social engagement — the skills that replace what cannabis was doing for you.",
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
              Recovery from marijuana addiction is about rediscovering clarity, motivation, and emotional regulation without relying on a substance. Your treatment plan may include residential care for a full reset, or PHP and IOP if you need flexibility while making changes. Our therapists help you uncover what was driving the use — and give you real tools to handle life without reaching for cannabis.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We accept most major insurance plans. Coverage varies by plan. Contact us to verify your benefits.
            </p>
          </div>
        </div>
      </section>
      <AddictionPrograms />
      <CTASection />
      <Footer />
    </>
  );
}
