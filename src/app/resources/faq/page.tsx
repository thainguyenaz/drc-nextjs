import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Rehab FAQ, Desert Recovery Centers",
  description:
    "Answers to 30+ questions about rehab in Arizona, admissions, insurance, treatment, facilities, family involvement, and aftercare.",
  path: "/resources/faq",
});

const categories = [
  {
    name: "Admissions",
    items: [
      {
        q: "What types of insurance do you accept?",
        a: "For commercial insurance, we work on an out-of-network basis with major plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Magellan, and others. Many out-of-network plans provide significant coverage for our level of care. We are also in-network with TriCare and TriWest, and offer cash-pay options. Our admissions team will verify your specific benefits at no cost and walk you through what your coverage looks like.",
      },
      {
        q: "How do I know if I need residential vs. outpatient treatment?",
        a: "The right level of care depends on the severity of your condition, your home environment, previous treatment history, and daily responsibilities. During your free clinical assessment, our admissions team will recommend the best level of care, no pressure, no obligation.",
      },
      {
        q: "What should I expect on my first day?",
        a: "On your first day, you will complete a medical intake assessment that includes vital signs, lab work, a psychiatric evaluation, and a thorough review of your substance use and mental health history. You will be assigned a private room, meet your primary therapist and nursing staff, receive an orientation to the facility, and begin settling in. Most clients describe the first day as nerve-wracking but surprisingly welcoming, our staff understands what you are going through and is trained to make the transition as smooth as possible.",
      },
      {
        q: "Is the admissions process confidential?",
        a: "Absolutely. Every aspect of your treatment is completely confidential and protected by HIPAA and 42 CFR Part 2 federal regulations. We maintain strict confidentiality protocols, especially for professionals and public figures.",
      },
      {
        q: "Can I tour the facility before committing to treatment?",
        a: "Yes. We welcome pre-admission facility tours at all three of our Arizona locations, Glendale, Scottsdale, and Phoenix. Seeing the facility firsthand helps many clients and families feel more comfortable about the treatment decision. Contact our admissions team to schedule a private tour.",
      },
      {
        q: "How quickly can I start treatment?",
        a: "Most clients begin treatment within 24 to 48 hours of their first call. Our admissions team handles insurance verification, clinical pre-assessment, and intake logistics quickly to minimize the time between the decision to seek help and the start of care.",
      },
    ],
  },
  {
    name: "Insurance & Cost",
    items: [
      {
        q: "How much does treatment cost without insurance?",
        a: "The cost of treatment varies depending on the level of care (residential, PHP, or IOP), the duration of treatment, and individual clinical needs. For clients without insurance or with out-of-network coverage, our admissions team works with you to explore payment options, including payment plans and financing. We believe that cost should not be a barrier to getting help, and we will work with you to find a path forward.",
      },
      {
        q: "Will my insurance cover the full cost of treatment?",
        a: "Coverage depends on your specific insurance plan, benefits, and medical necessity criteria. Many plans cover a significant portion of residential and outpatient treatment. Our admissions team conducts a free, no-obligation insurance verification to give you a clear picture of what your plan will cover before you make any commitment.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes. For clients with co-pays, deductibles, or out-of-network costs, we offer flexible payment arrangements to make treatment accessible. Our admissions team will discuss all available financial options during your initial consultation.",
      },
    ],
  },
  {
    name: "Treatment",
    items: [
      {
        q: "How long does treatment typically last?",
        a: "Treatment duration varies by individual need. Residential is 30 days, and can extend to 60-90+ days if clinically justified and approved. PHP runs 4-6 weeks with 5-6 hours of daily programming, and IOP is usually 8-12 weeks meeting 3-4 times per week. Your clinical team will adjust the timeline as needed.",
      },
      {
        q: "Do you treat both mental health and addiction?",
        a: "Yes. Desert Recovery Centers specializes in dual diagnosis treatment, addressing mental health conditions and substance use disorders simultaneously. Research shows that treating both conditions together leads to significantly better long-term outcomes.",
      },
      {
        q: "What does a typical day look like in residential treatment?",
        a: "A typical day includes morning mindfulness or yoga, individual therapy, group therapy sessions, psychoeducation, recreational activities, and evening reflection. Clients enjoy gourmet meals, exercise, and personal downtime. Weekends include family visiting hours and experiential activities.",
      },
      {
        q: "What therapeutic modalities do you use?",
        a: "Our evidence-based treatment modalities include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Eye Movement Desensitization and Reprocessing (EMDR), trauma-focused therapies, somatic experiencing, mindfulness-based interventions, and our proprietary BridgeWork™ skill integration program. All therapies are delivered by or under the supervision of licensed clinical psychologists.",
      },
      {
        q: "What credentials do your therapists have?",
        a: "Our clinical team is led by licensed clinical psychologists (doctoral-level clinicians), supported by a board-certified psychiatrist serving as medical director, licensed professional counselors, registered nurses, and behavioral health professionals. Every primary therapist holds at minimum a master's degree in a clinical discipline, and all clinical work is supervised by doctoral-level psychologists, a level of oversight that is rare in residential treatment.",
      },
      {
        q: "Do you offer gender-specific groups?",
        a: "Yes. We provide gender-specific group therapy sessions across all of our programs. Research supports that gender-specific groups create a safer environment for clients to discuss sensitive topics like trauma, relationships, and body image, leading to deeper therapeutic engagement and better outcomes.",
      },
      {
        q: "Do you use medication-assisted treatment (MAT)?",
        a: "Yes. When clinically appropriate, our medical director prescribes FDA-approved medications such as buprenorphine (Suboxone), naltrexone (Vivitrol), and other medications to support recovery from opioid and alcohol use disorders. MAT is always used in conjunction with therapy, never as a standalone treatment.",
      },
      {
        q: "What if I relapse during or after treatment?",
        a: "Relapse is not failure, it is a common part of the recovery process for many people, and it does not erase the progress you have made. If a client relapses during treatment, our clinical team adjusts the treatment plan to address the underlying triggers. If relapse occurs after discharge, our alumni program provides immediate re-engagement support, and in many cases, clients can return for additional treatment. The most important thing is to seek help immediately rather than letting shame or discouragement prevent you from getting back on track.",
      },
    ],
  },
  {
    name: "Facilities & Daily Life",
    items: [
      {
        q: "Can I have my phone during treatment?",
        a: "Phone policies vary by program level and phase of treatment. During the initial stabilization period of residential treatment, phone access is typically limited to encourage full engagement with the therapeutic process and separation from outside stressors. As clients progress, phone privileges increase. Laptops and tablets follow similar guidelines. Our admissions team will explain the specific policy during intake so there are no surprises.",
      },
      {
        q: "What should I bring to treatment?",
        a: "We recommend bringing comfortable clothing for 7-10 days, workout attire, toiletries, a journal, any approved medications in original containers, and your insurance card and ID. We provide bedding, towels, and all meals. A complete packing list is provided before admission. We ask that clients not bring valuables, weapons, or any substances.",
      },
      {
        q: "How do you handle medical needs during treatment?",
        a: "Our medical team includes a medical director (MD), registered nurses, and 24/7 nursing coverage. We conduct a full medical assessment upon intake and manage all medications, chronic conditions, and emergent medical needs on-site. For specialized medical needs beyond our scope, we coordinate with local hospitals and specialists. Clients continue any non-addictive medications prescribed by their outside physicians, with our medical team overseeing all medication management.",
      },
      {
        q: "What are the facilities like?",
        a: "Our two Arizona residential locations (Glendale and Scottsdale) are luxury homes, not clinical institutions, with outpatient services available at our Phoenix center. Amenities vary by location but include swimming pools, basketball and tennis courts, gyms, massage rooms, gourmet kitchens, private bedrooms, game rooms, and outdoor recreation areas. Our Scottsdale facility features mountain views, and our Phoenix location includes a movie theater and pool with waterfall.",
      },
      {
        q: "Can I work during IOP?",
        a: "Yes. Our Intensive Outpatient Program (IOP) is designed specifically for clients who need ongoing clinical support while maintaining work, school, or family responsibilities. IOP sessions typically meet 3-4 times per week for 3-4 hours per session, with scheduling options that accommodate most work schedules.",
      },
    ],
  },
  {
    name: "Family Involvement",
    items: [
      {
        q: "Can family members visit during treatment?",
        a: "Yes. We encourage family involvement as part of the healing process. Family members can visit during designated hours and are invited to participate in our family therapy program, including education sessions, joint therapy, and support groups.",
      },
      {
        q: "What is your visitation policy?",
        a: "Visitation is available during designated weekend hours at each facility. Specific days and times are communicated during intake. We also accommodate special circumstances on a case-by-case basis. Video calls with approved family members are available throughout the week as clients progress in their program.",
      },
      {
        q: "Do you offer family therapy?",
        a: "Yes. Our family therapy program is a core component of treatment. It includes family education sessions about addiction and mental health, joint therapy sessions facilitated by licensed clinicians, communication skills training, boundary setting, and family support groups. Family participation significantly improves treatment outcomes and helps repair relationships damaged by addiction.",
      },
      {
        q: "How can I support my loved one during treatment?",
        a: "The most important things you can do are: attend family therapy sessions, educate yourself about addiction as a medical condition, set and maintain healthy boundaries, take care of your own mental health, and trust the clinical team. Our family program provides specific guidance on how to be supportive without enabling. We also recommend Al-Anon or similar family support groups.",
      },
    ],
  },
  {
    name: "Aftercare & Alumni",
    items: [
      {
        q: "What happens after I complete treatment?",
        a: "Your clinical team develops a thorough aftercare plan before discharge, including referrals for ongoing therapy, support group recommendations, and connection to our alumni network with monthly events, check-in calls, and a private community.",
      },
      {
        q: "Do you provide aftercare support?",
        a: "Yes. Our aftercare program includes ongoing alumni events, peer support groups, quarterly check-in calls from your former clinical team, a private alumni community, and facilitated re-engagement if additional support is needed. We view recovery as a long-term journey and remain available to our alumni indefinitely.",
      },
      {
        q: "Do you help with sober living placement?",
        a: "Yes. For clients who need structured living after residential treatment, our clinical team assists with placement in vetted sober living homes in the Phoenix metro area. We coordinate the transition to ensure continuity of care as clients step down from residential to a lower level of support.",
      },
      {
        q: "What is your approach to relapse prevention?",
        a: "Relapse prevention is integrated throughout the treatment experience, not added at the end. Clients develop individualized relapse prevention plans that identify triggers, warning signs, coping strategies, and emergency contacts. Our BridgeWork™ program specifically focuses on the practical application of these skills under real-world conditions, and aftercare planning ensures ongoing support structures are in place.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources" },
          { name: "FAQ", path: "/resources/faq" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Rehab FAQ"
        description="Honest answers to the questions families and individuals ask most about treatment at Desert Recovery Centers."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      <div className="bg-cream border-b border-gold/20">
        <div className="max-w-container mx-auto px-6 py-3 text-center">
          <p className="text-xs text-sage font-body tracking-wide">
            Medically reviewed by Dr. An Nguyen, Licensed Clinical Psychologist, Clinical Director, Desert Recovery Centers
          </p>
        </div>
      </div>

      {/* FAQ Categories */}
      {categories.map((category, ci) => (
        <section
          key={category.name}
          className={`py-16 md:py-20 ${ci % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                {category.name}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
                {category.name} Questions
              </h2>
              <FAQAccordion items={category.items} sectionKey={category.name} />
            </div>
          </div>
        </section>
      ))}

      {/* Internal links */}
      <section className="py-12 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-lg text-forest font-semibold mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Intervention Guide", href: "/resources/intervention-guide" },
                { label: "Medical Detox Guide", href: "/resources/detox-guide" },
                { label: "Mental Health Assessment", href: "/resources/mental-health-assessment" },
                { label: "Our Facilities", href: "/locations/glendale" },
                { label: "Treatment Therapies", href: "/treatments" },
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
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
