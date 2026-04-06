"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SchemaScript from "@/components/SchemaScript";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedSection from "@/components/animated/AnimatedSection";

const SITE_URL = "https://www.desertrecoverycenters.com";
const PAGE_PATH = "/adolescent/anxiety";
const PAGE_TITLE = "Adolescent Anxiety Treatment Arizona | Teen Anxiety Disorders | Desert Recovery Centers";


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` },
    { "@type": "ListItem", position: 3, name: "Anxiety Disorders" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}/#webpage`,
  url: `${SITE_URL}${PAGE_PATH}`,
  name: PAGE_TITLE,
  specialty: "Adolescent Psychiatry",
  reviewedBy: {
    "@type": "Person",
    name: "Dr. An Nguyen",
    jobTitle: "Licensed Clinical Psychologist, Clinical Director",
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between normal teenage worry and an anxiety disorder?",
      acceptedAnswer: { "@type": "Answer", text: "Normal worry is proportionate to the situation and does not significantly interfere with daily functioning. An anxiety disorder is persistent, difficult to control, and causes meaningful impairment in school, relationships, or daily activities. If your teenager is avoiding normal situations, missing school, or unable to function in age-appropriate settings, a clinical evaluation is warranted." },
    },
    {
      "@type": "Question",
      name: "What is school refusal and is it treatable?",
      acceptedAnswer: { "@type": "Answer", text: "School refusal is a clinical pattern where anxiety about school becomes severe enough that the teenager cannot attend consistently. It is not a choice and it is not defiance. It is highly treatable with the right clinical approach, which typically includes a combination of CBT, family work, and coordination with the school system on reintegration." },
    },
    {
      "@type": "Question",
      name: "Can anxiety cause physical symptoms in teenagers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Anxiety is one of the most common causes of medically unexplained physical symptoms in adolescents including headaches, nausea, stomachaches, dizziness, and chest tightness. These symptoms are real, not fabricated, and they respond to anxiety treatment." },
    },
    {
      "@type": "Question",
      name: "Will my teenager be able to keep up with school during residential treatment?",
      acceptedAnswer: { "@type": "Answer", text: "We provide academic support during residential treatment to help teenagers maintain progress where clinically appropriate. Our team coordinates with families on educational planning as part of the discharge process." },
    },
  ],
};

const faqs = [
  { q: "What is the difference between normal teenage worry and an anxiety disorder?", a: "Normal worry is proportionate to the situation and does not significantly interfere with daily functioning. An anxiety disorder is persistent, difficult to control, and causes meaningful impairment in school, relationships, or daily activities. If your teenager is avoiding normal situations, missing school, or unable to function in age-appropriate settings, a clinical evaluation is warranted." },
  { q: "What is school refusal and is it treatable?", a: "School refusal is a clinical pattern where anxiety about school becomes severe enough that the teenager cannot attend consistently. It is not a choice and it is not defiance. It is highly treatable with the right clinical approach, which typically includes a combination of CBT, family work, and coordination with the school system on reintegration." },
  { q: "Can anxiety cause physical symptoms in teenagers?", a: "Yes. Anxiety is one of the most common causes of medically unexplained physical symptoms in adolescents including headaches, nausea, stomachaches, dizziness, and chest tightness. These symptoms are real, not fabricated, and they respond to anxiety treatment." },
  { q: "Will my teenager be able to keep up with school during residential treatment?", a: "We provide academic support during residential treatment to help teenagers maintain progress where clinically appropriate. Our team coordinates with families on educational planning as part of the discharge process." },
];

export default function AdolescentAnxietyPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema]} />
      <Navigation />
      <Breadcrumb
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` },
          { name: "Anxiety Disorders", url: `${SITE_URL}${PAGE_PATH}` },
        ]}
      />
      <PageHero
        eyebrow="Adolescent Treatment"
        title="Adolescent Anxiety Disorder Treatment in Arizona"
        description="Anxiety is the most common mental health condition among adolescents and one of the most underdiagnosed. Desert Recovery Centers treats the full spectrum of adolescent anxiety disorders in a residential setting in Arizona."
        bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg"
      />

      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
                When Anxiety Controls Everything
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Anxiety is the most common mental health condition among adolescents and one of the most underdiagnosed. Parents often interpret it as shyness, perfectionism, or sensitivity. Schools label it as avoidance or defiance. By the time a teenager reaches residential care, they have usually been managing debilitating anxiety for years while the adults around them searched for behavioral explanations.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Desert Recovery Centers treats the full spectrum of adolescent anxiety disorders in a residential setting in Arizona, including generalized anxiety disorder, panic disorder, social anxiety disorder, and school refusal.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How Anxiety Presents */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Recognizing the Signs
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                How Anxiety Presents in Adolescents
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Adolescent anxiety does not always look like worry. It can present as physical symptoms including chronic headaches, nausea, and stomachaches with no medical cause. It presents as avoidance, as rigid routines, as the teenager who will not sleep away from home, who refuses to speak in class, who cannot sit in a cafeteria. It presents as explosive anger when something unexpected disrupts a carefully controlled environment. It presents as the straight-A student whose perfectionism is not ambition but terror.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                School refusal is one of the most acute presentations we see. What begins as Monday morning stomachaches becomes months of missed school, failed grades, and a teenager who cannot leave the house. School refusal is not laziness. It is anxiety that has escalated beyond what the adolescent can manage.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Co-occurring */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                The Full Picture
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                Co-occurring Conditions
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Anxiety disorders in adolescents frequently co-occur with depression, ADHD, OCD, and trauma. The relationship between anxiety and these conditions is bidirectional. Untreated anxiety fuels depression. Undiagnosed ADHD drives anxiety. Trauma creates a nervous system that cannot distinguish between real and perceived threat. Treating anxiety without addressing what sits underneath it produces incomplete results.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Approach
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                How We Treat Adolescent Anxiety
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our clinical approach to adolescent anxiety is built on evidence-based treatment. We do not rush exposure work and we do not use aversive approaches. Progress is built incrementally with clinical support at every step.
              </p>
            </AnimatedSection>
            <div className="space-y-6">
              {[
                { title: "Cognitive Behavioral Therapy", desc: "With structured exposure work to help teenagers gradually face what they have been avoiding, rebuilding confidence through repeated experience of tolerating discomfort." },
                { title: "Acceptance and Commitment Therapy", desc: "To build psychological flexibility and help adolescents engage with life rather than organizing it around avoidance of anxiety triggers." },
                { title: "Individual and Group Therapy", desc: "Providing both private clinical work and peer connection with other teenagers navigating similar challenges." },
                { title: "Family Therapy", desc: "To help parents understand how their responses may inadvertently reinforce avoidance and to build a home environment that supports recovery." },
                { title: "Medication Management", desc: "When clinically indicated, under psychiatric supervision, always as part of a comprehensive treatment plan." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-l-2 border-gold/40 pl-6"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Common Questions</span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Frequently Asked Questions</h2>
            </AnimatedSection>
            <div className="space-y-6">
              {faqs.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">Anxiety Is Treatable. Your Teenager Can Get Better.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">Our admissions team is available 24 hours a day, 7 days a week.</p>
          <p className="text-gold text-sm font-medium mb-10">Most adolescents begin treatment within 48 hours of the first call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+16233231012" className="bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/25 w-full sm:w-auto text-center cursor-pointer">Call (623) 323-1012</a>
            <Link href="/adolescent-treatment" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center">Back to Adolescent Program</Link>
          </div>
        </motion.div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
