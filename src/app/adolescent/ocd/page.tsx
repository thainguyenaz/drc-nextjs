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
const PAGE_PATH = "/adolescent/ocd";
const PAGE_TITLE = "Adolescent OCD Treatment Arizona | Teen Obsessive Compulsive Disorder | Desert Recovery Centers";

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Adolescent Treatment", item: `${SITE_URL}/adolescent-treatment` },
    { "@type": "ListItem", position: 3, name: "OCD" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org", "@type": "MedicalWebPage",
  "@id": `${SITE_URL}${PAGE_PATH}/#webpage`, url: `${SITE_URL}${PAGE_PATH}`, name: PAGE_TITLE, specialty: "Adolescent Psychiatry",
  reviewedBy: { "@type": "Person", name: "Dr. An Nguyen", jobTitle: "Licensed Clinical Psychologist, Clinical Director", worksFor: { "@id": `${SITE_URL}/#organization` } },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "My teenager has intrusive thoughts that horrify them. Does that mean they are dangerous?", acceptedAnswer: { "@type": "Answer", text: "No. Intrusive thoughts in OCD are ego-dystonic, meaning they conflict with the person's values and are deeply unwanted. A teenager tormented by thoughts of harming someone is not a person who wants to cause harm. The distress is precisely what makes it OCD. These thoughts require clinical treatment, not punishment or moral judgment." } },
    { "@type": "Question", name: "How do I know if my teenager has OCD or just anxiety?", acceptedAnswer: { "@type": "Answer", text: "OCD has a specific structure: obsessions that produce anxiety and compulsions performed to relieve that anxiety, creating a cycle. A qualified clinician can assess for OCD specifically. The distinction matters because OCD requires ERP, which is different from standard anxiety treatment protocols." } },
    { "@type": "Question", name: "Is OCD curable?", acceptedAnswer: { "@type": "Answer", text: "OCD is a chronic condition for many people, but it is highly manageable with the right treatment. Most adolescents who receive evidence-based treatment experience significant reduction in symptoms and improvement in quality of life. The goal of treatment is not the elimination of all intrusive thoughts but the ability to respond to them without being controlled by them." } },
  ],
};

const faqs = [
  { q: "My teenager has intrusive thoughts that horrify them. Does that mean they are dangerous?", a: "No. Intrusive thoughts in OCD are ego-dystonic, meaning they conflict with the person's values and are deeply unwanted. A teenager tormented by thoughts of harming someone is not a person who wants to cause harm. The distress is precisely what makes it OCD. These thoughts require clinical treatment, not punishment or moral judgment." },
  { q: "How do I know if my teenager has OCD or just anxiety?", a: "OCD has a specific structure: obsessions that produce anxiety and compulsions performed to relieve that anxiety, creating a cycle. A qualified clinician can assess for OCD specifically. The distinction matters because OCD requires ERP, which is different from standard anxiety treatment protocols." },
  { q: "Is OCD curable?", a: "OCD is a chronic condition for many people, but it is highly manageable with the right treatment. Most adolescents who receive evidence-based treatment experience significant reduction in symptoms and improvement in quality of life. The goal of treatment is not the elimination of all intrusive thoughts but the ability to respond to them without being controlled by them." },
];

export default function AdolescentOcdPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, medicalWebPageSchema, faqSchema]} />
      <Navigation />
      <Breadcrumb items={[{ name: "Home", url: SITE_URL }, { name: "Adolescent Treatment", url: `${SITE_URL}/adolescent-treatment` }, { name: "OCD", url: `${SITE_URL}${PAGE_PATH}` }]} />
      <PageHero eyebrow="Adolescent Treatment" title="Adolescent OCD Treatment in Arizona" description="OCD in teenagers is rarely what it looks like on television. It is intrusive thoughts, rituals, and the exhausting effort of managing a brain that will not quiet down." bgImage="/images/locations/phoenix/phoenix-lobby-2.jpg" />

      <div className="bg-cream border-b border-gold/20"><div className="max-w-container mx-auto px-6 py-3 text-center"><p className="text-xs text-sage font-body tracking-wide">Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers</p></div></div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">The Disorder They Hide</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">OCD in teenagers is rarely what it looks like on television. There is no Hollywood version of the adolescent who spends three hours a night doing homework that should take forty-five minutes because every sentence has to be reread until it feels right. There is no dramatic portrayal of the teenager who cannot eat food that has touched another food, who cannot leave the house without checking the locks seventeen times, who lies awake tormented by thoughts they are too ashamed to say out loud.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Obsessive compulsive disorder is intrusive, unwanted thoughts, images, or urges that produce intense anxiety, and compulsive behaviors or mental rituals performed to relieve that anxiety temporarily. The relief is always temporary. The cycle always returns. And for most adolescents, nobody around them knows the extent of what they are managing because OCD is a disorder they hide.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Recognizing the Signs</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How OCD Presents in Adolescents</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Adolescent OCD is highly variable. Common presentations include:</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {["Contamination fears and washing or cleaning rituals", "Harm obsessions including intrusive thoughts about hurting oneself or others that the teenager does not want and finds deeply distressing", "Symmetry and ordering compulsions", "Religious or moral scrupulosity", "Sexual orientation or identity obsessions", "Purely mental rituals that are invisible to everyone except the teenager performing them"].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" /><p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 leading-relaxed mt-6 text-sm">Pure-O OCD, where the compulsions are primarily mental rather than behavioral, is frequently missed because there is nothing observable. The teenager appears fine. Inside, they are exhausted. Adolescents with OCD often have significant insight into how irrational their obsessions are, which adds shame to an already exhausting condition. Many go years without disclosing because they fear what their thoughts mean about them. Intrusive thoughts in OCD are not desires or intentions. They are symptoms.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">The Full Picture</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Co-occurring Conditions</h2>
            <p className="text-gray-600 leading-relaxed text-lg">OCD commonly co-occurs with depression, anxiety disorders, ADHD, and tic disorders including Tourette syndrome. The severity of OCD tends to worsen when depression or anxiety is untreated. Accurate differential diagnosis matters because OCD requires specialized treatment approaches that differ from standard anxiety treatment.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Approach</span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">How We Treat Adolescent OCD</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">The gold standard treatment for OCD is Exposure and Response Prevention therapy, known as ERP. ERP involves gradually and systematically exposing the adolescent to situations that trigger obsessions while supporting them in resisting the compulsive response. Over time, the brain learns that the feared outcome does not occur and that anxiety can be tolerated without performing the ritual.</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">ERP is not intuitive. It is not comfortable. It is also the most effective treatment available for OCD, with strong evidence supporting its use in adolescents. Our clinical team is trained in ERP delivery and understands how to pace exposure work appropriately for teenage patients.</p>
            <p className="text-gray-600 leading-relaxed text-lg">When clinically indicated, medication management with SRIs is provided under the supervision of Dr. Topete. Medication and ERP together produce better outcomes than either alone for moderate to severe OCD.</p>
          </AnimatedSection>
        </div></div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6"><div className="max-w-3xl mx-auto">
          <AnimatedSection><span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Common Questions</span><h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">Frequently Asked Questions</h2></AnimatedSection>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="border-l-2 border-gold/40 pl-6">
                <h3 className="font-display text-lg text-forest font-semibold mb-2">{item.q}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">OCD Does Not Have to Run Your Teenager&apos;s Life</h2>
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
