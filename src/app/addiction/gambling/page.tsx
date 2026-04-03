import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gambling Addiction Treatment — Desert Recovery Centers",
  description:
    "Gambling addiction treatment in Arizona. Evidence-based therapy for compulsive gambling, financial recovery support, and dual diagnosis care.",
};

export default function GamblingAddictionPage() {
  return (
    <>
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
            <p className="text-gray-600 leading-relaxed text-lg">
              You keep telling yourself you&apos;ll stop after one more win — the one that will make everything even. But it never comes, or when it does, it&apos;s never enough. The debt is mounting. You&apos;re hiding bank statements, borrowing money with lies about what it&apos;s for, chasing losses that only create bigger ones. The shame keeps you silent, and the secrecy keeps you stuck. You&apos;re not chasing money anymore — you&apos;re chasing the feeling. And that feeling has taken everything from you.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we treat gambling addiction as the behavioral health condition it is — one that activates the same reward pathways in the brain as substance use disorders. Our clinical team provides structured, evidence-based treatment to help you break the cycle.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Gambling Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Gambling disorder is classified as a behavioral addiction in the DSM-5. Like substance addictions, compulsive gambling hijacks the brain&apos;s reward system — the anticipation of a win triggers dopamine surges that mirror the effects of drugs. Over time, you need higher stakes or more frequent gambling to achieve the same rush. The &ldquo;near miss&rdquo; effect keeps you playing long past the point of reason, and the cycle of winning, losing, and chasing losses becomes compulsive. Online gambling, sports betting apps, and 24/7 casino access have made this condition more widespread and harder to escape than ever.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Gambling with money you can&apos;t afford to lose — rent, savings, borrowed funds
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
                  desc: "CBT addresses the distorted thinking patterns — irrational beliefs about luck, control, and probability — that fuel compulsive gambling. You learn to recognize and interrupt the urge cycle.",
                },
                {
                  title: "Dual Diagnosis Treatment",
                  desc: "Gambling addiction frequently co-occurs with depression, anxiety, ADHD, or substance use disorders. Treating both conditions together produces stronger, more lasting outcomes.",
                },
                {
                  title: "Financial Recovery Support",
                  desc: "Practical guidance on managing debt, rebuilding financial stability, and establishing healthy money behaviors — an essential part of gambling recovery that many programs overlook.",
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
              Gambling recovery is about more than stopping the behavior — it&apos;s about understanding what drove it. Whether gambling was an escape from stress, a response to boredom, or a symptom of an underlying condition, your treatment plan addresses the root cause. Our residential and outpatient programs give you the time, structure, and clinical support to rebuild your life, your finances, and your relationships on a healthier foundation.
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
