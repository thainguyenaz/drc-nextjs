import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import AddictionPrograms from "@/components/AddictionPrograms";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meth Addiction Treatment — Desert Recovery Centers",
  description:
    "Methamphetamine addiction treatment in Arizona. Evidence-based behavioral therapies, psychiatric care, and structured recovery programs for meth dependence.",
};

export default function MethAddictionPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Addiction Treatment"
        title="Meth Addiction Treatment"
        description="Meth rewires your brain faster than almost any other substance. Recovery is possible — but it takes the right kind of help."
        bgImage="/images/general/DRC-ADDICTION.jpg"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              The energy, the focus, the confidence — that&apos;s what hooked you. But now the other side has taken over. The paranoia. The skin picking. The days without sleep that blur into weeks. You don&apos;t recognize yourself in the mirror anymore. Your teeth are deteriorating, your weight has dropped, and the people who love you are terrified. You want to stop, but the crash is so devastating that using again feels like the only option. It&apos;s not — even if it feels that way right now.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              At Desert Recovery Centers, we understand the devastating physical and neurological impact of methamphetamine addiction. Our clinical team uses evidence-based protocols specifically designed for stimulant use disorders, providing the intensive support your brain and body need to heal.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Understanding Meth Addiction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Methamphetamine releases massive amounts of dopamine — up to 10 times what natural rewards produce. This flood damages dopamine receptors over time, making it increasingly difficult to experience pleasure, motivation, or even basic functioning without the drug. Chronic meth use causes measurable brain changes, including reduced gray matter, impaired memory and decision-making, and emotional dysregulation. The good news: research shows that with sustained abstinence and proper treatment, significant neurological recovery is possible.
            </p>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              Signs It May Be Time to Get Help
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Extended periods of wakefulness (days without sleep) followed by severe crashes
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Dramatic weight loss, dental deterioration, or skin problems
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Paranoia, hallucinations, or aggressive behavior
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Inability to feel pleasure or motivation without meth
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Job loss, relationship damage, or legal issues connected to use
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                Using alone or in increasingly risky situations
              </li>
            </ul>

            <h2 className="font-display text-2xl text-forest font-semibold mt-10 mb-4">
              How We Treat Meth Addiction
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Behavioral Therapies",
                  desc: "The Matrix Model, CBT, and contingency management are the most effective treatments for meth addiction. These therapies rebuild healthy thought patterns and reward systems.",
                },
                {
                  title: "Psychiatric Stabilization",
                  desc: "Meth withdrawal often includes severe depression, anxiety, and psychotic symptoms. Our psychiatrists provide medication support to stabilize your mental health safely.",
                },
                {
                  title: "Nutritional & Physical Recovery",
                  desc: "Meth ravages the body. Our wellness program includes nutritional rehabilitation, exercise, sleep hygiene, and medical care to restore physical health.",
                },
                {
                  title: "Long-Term Residential Care",
                  desc: "Meth recovery often benefits from extended treatment. Our residential program provides the structured, substance-free environment your brain needs to begin repairing itself.",
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
              Meth recovery is a marathon, not a sprint. The first weeks are often the hardest as your brain adjusts to functioning without massive dopamine surges. But with consistent clinical support, your cognition, emotional regulation, and physical health improve steadily. Our team walks with you through residential care, PHP, IOP, and aftercare — providing the stability and accountability that make sustained recovery achievable.
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
