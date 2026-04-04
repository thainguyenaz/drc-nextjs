import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "What to Bring to Rehab: A Complete Packing Guide, Desert Recovery Centers",
  description:
    "Complete packing checklist for rehab, what to bring, what to leave at home, and practical tips for your first day at a treatment center in Arizona.",
  path: "/resources/what-to-bring",
});

const faqs = [
  {
    q: "Can I bring my phone to rehab?",
    a: "Phone policies vary by program and level of care. Some residential programs restrict phone use during the initial adjustment period to help clients focus fully on treatment, then gradually reintroduce access. Others allow limited phone use during designated times. Ask your admissions coordinator about the specific phone policy for your program at DRC before packing.",
  },
  {
    q: "What if I forget something important?",
    a: "Don&apos;t stress about packing perfectly. DRC provides essentials like linens, towels, and toiletries if needed. For personal items you may have forgotten, family members can typically drop off additional belongings during designated visiting times. Staff can also help you obtain necessities during your stay.",
  },
  {
    q: "Can I bring my own medications to rehab?",
    a: "Bring all current medications in their original, labeled prescription bottles. During intake, the medical team will review each medication and incorporate appropriate ones into your treatment plan. Some medications may be adjusted or changed as part of your clinical care. Never bring medications that are not prescribed to you.",
  },
  {
    q: "How much clothing should I pack for rehab?",
    a: "Plan for 7 to 10 days of comfortable, casual clothing. DRC facilities have laundry access, so you don&apos;t need to pack for your entire stay. Focus on comfort, you&apos;ll be spending your time in therapy, group sessions, and recreational activities, not formal events. Don&apos;t forget workout clothes and swimwear if your facility has a pool.",
  },
  {
    q: "Are there things that will be confiscated at intake?",
    a: "During the intake process, staff will review your belongings to ensure the safety of all clients. Items containing alcohol (certain mouthwashes, colognes), sharp objects, and any prohibited substances will be stored securely or returned to family members. Valuables like expensive jewelry or large amounts of cash are discouraged, staff can securely store essential valuables if needed. This process exists to keep everyone safe, not to be invasive.",
  },
];

export default function WhatToBringPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Resources", path: "/resources/what-to-bring" },
          { name: "What to Bring", path: "/resources/what-to-bring" },
        ]}
      />
      <Navigation />
      <PageHero
        eyebrow="Resources"
        title="What to Bring to Rehab: A Complete Packing Guide"
        description="Packing for rehab can feel overwhelming. Here&apos;s everything you need, and don&apos;t need, for your stay."
        bgImage="/images/general/DRC-OUR-TEAM.jpg"
      />

      {/* Opening */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Preparing for Your Stay
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Making the decision to enter treatment is the hard part. Packing for it shouldn&apos;t be. Whether you&apos;re preparing for yourself or helping a loved one get ready, knowing what to bring, and what to leave behind, makes the transition smoother and less stressful.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              This guide covers everything you need for a residential rehab stay, with specific tips for Desert Recovery Centers facilities in Arizona. When in doubt, pack light, DRC provides most of what you&apos;ll need, and you can always have items brought to you later.
            </p>
          </div>
        </div>
      </section>

      {/* Essential Documents */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Don&apos;t Forget These
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Essential Documents
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These are the most important items to have ready on your first day. Without them, the intake process can be delayed:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Valid photo ID (driver&apos;s license, state ID, or passport)",
                "Insurance cards, both medical and behavioral health if separate",
                "A complete list of current medications with dosages and prescribing doctors",
                "All current medications in their original, labeled prescription bottles",
                "Emergency contact information, names, phone numbers, and relationships",
                "Any court or legal documents related to your admission (if applicable)",
                "A list of your current healthcare providers (primary care, psychiatrist, therapist)",
                "Advance directive or power of attorney documents, if you have them",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clothing & Personal Items */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Pack Comfortably
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Clothing and Personal Items
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Think comfort over style. You&apos;ll spend most of your time in therapy sessions, group activities, and recreation, not formal events. Pack for about 7 to 10 days, as laundry facilities are available.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Everyday Clothing",
                  desc: "Comfortable, casual clothing for daily wear, think t-shirts, shorts, sweatpants, and jeans. Bring enough for 7 to 10 days. Layering is smart, as indoor temperatures and outdoor Arizona heat can vary.",
                },
                {
                  title: "Workout and Active Wear",
                  desc: "Athletic clothing for exercise, yoga, and outdoor activities. DRC facilities have fitness centers and outdoor recreational spaces, so you&apos;ll want comfortable clothes you can move in.",
                },
                {
                  title: "Swimwear",
                  desc: "DRC facilities feature pools that clients use regularly for recreation and exercise. Pack at least one swimsuit.",
                },
                {
                  title: "Footwear",
                  desc: "Closed-toe shoes are required for most activities. Pack comfortable walking or athletic shoes, plus sandals or flip-flops for the pool area and casual wear. A pair of slippers for indoor comfort is a nice-to-have.",
                },
                {
                  title: "Outerwear",
                  desc: "Arizona days are warm, but mornings and evenings can be cool, especially in fall and winter months. A light jacket or hoodie is recommended.",
                },
                {
                  title: "Toiletries",
                  desc: "Shampoo, conditioner, body wash, deodorant, toothbrush, toothpaste, and any personal hygiene items. Important: all toiletries must be alcohol-free. This includes mouthwash, hand sanitizer, and any other products. Sunscreen is essential in Arizona, SPF 30 or higher is recommended.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Items */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Make It Feel Like Home
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              Comfort Items
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              A few personal touches can make your room feel more like your own space. These items aren&apos;t required, but many clients find them helpful:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "A journal or notebook, writing is a powerful therapeutic tool, and many programs incorporate journaling into the recovery process",
                "Books or a reading device (check your facility&apos;s electronics policy first), downtime is part of the schedule, and reading is a healthy way to spend it",
                "Photos of loved ones, a visual reminder of the people you&apos;re getting better for can be a powerful motivator during difficult days",
                "A personal pillow or small blanket, familiar items from home can ease the transition into a new environment",
                "A small spiritual or inspirational text, whatever gives you strength, whether religious or secular",
                "Stamps, envelopes, and a pen, letter writing is encouraged in many programs and can be a meaningful way to reconnect with family",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What NOT to Bring */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Leave These at Home
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What NOT to Bring
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              The following items are not permitted in most residential treatment facilities. Bringing them can delay your intake process or require them to be stored or returned to family members:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Drugs, Alcohol, or Paraphernalia",
                  desc: "This should go without saying, but all substances and related items are strictly prohibited. Facilities will conduct a thorough belongings check during intake.",
                },
                {
                  title: "Weapons of Any Kind",
                  desc: "No knives, firearms, or any items that could be used as weapons. This includes pocket knives and multi-tools.",
                },
                {
                  title: "Alcohol-Containing Products",
                  desc: "Many common products contain alcohol, mouthwash, cologne, perfume, aftershave, some hair products, and hand sanitizer. Bring alcohol-free versions of these items.",
                },
                {
                  title: "Valuables and Expensive Jewelry",
                  desc: "Leave expensive watches, jewelry, and other valuables at home. Treatment centers are communal environments, and valuable items can create unnecessary stress or risk.",
                },
                {
                  title: "Large Amounts of Cash",
                  desc: "Bring only a small amount of cash for vending machines or other minor needs. Most facilities can securely store small amounts if needed.",
                },
                {
                  title: "Laptops and Work Equipment",
                  desc: "Most residential programs discourage or prohibit laptops to help clients disengage from work and focus on recovery. Phone policies vary by program, check with your admissions coordinator.",
                },
                {
                  title: "Revealing or Inappropriate Clothing",
                  desc: "Treatment is a shared environment. Pack modest, comfortable clothing that you&apos;d be comfortable wearing in group therapy and around other clients.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRC-Specific Tips */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              DRC-Specific Information
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What DRC Provides
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Desert Recovery Centers provides a wide range of essentials and amenities, so you can pack lighter than you might expect:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "All bed linens, pillows, and bedding, your room is fully set up before you arrive",
                "Fresh towels and washcloths, laundered and replaced regularly",
                "Gourmet meals prepared daily, nutritionally balanced and designed to support recovery. Special dietary needs are accommodated",
                "Fully equipped fitness center and gym equipment, no need to bring your own workout gear beyond clothing",
                "Pool and recreational equipment, available for use during designated recreation times",
                "Laundry facilities, available for client use, so packing for 7 to 10 days is more than enough",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-sage/10 rounded-xl p-6 border border-sage/20">
              <h3 className="font-display text-lg text-forest font-semibold mb-2">
                Arizona Weather Note
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Arizona is sunny and warm for most of the year, with summer temperatures regularly exceeding 100&deg;F. Even in winter, daytime temperatures are typically mild (60&ndash;70&deg;F). Pack sunscreen (SPF 30+), sunglasses, a hat, and lightweight, breathable clothing. If arriving in winter, bring a light jacket for cool mornings and evenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens When You Arrive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
              Your First Day
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-8">
              What Happens When You Arrive
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Knowing what to expect on your first day can ease a lot of anxiety. Here&apos;s a brief overview of the intake process at DRC:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Welcome and Check-In",
                  desc: "You&apos;ll be greeted by staff and guided through the arrival process. The atmosphere is warm and supportive, the team understands that this is a significant and often nerve-wracking moment.",
                },
                {
                  title: "Belongings Review",
                  desc: "Staff will review your belongings with you to ensure all items meet facility guidelines. Prohibited items will be securely stored or returned to family. This is done respectfully and privately.",
                },
                {
                  title: "Medical and Clinical Assessment",
                  desc: "You&apos;ll meet with medical and clinical staff for an initial assessment. This includes a health screening, medication review, and preliminary clinical evaluation that will inform your individualized treatment plan.",
                },
                {
                  title: "Room Assignment and Orientation",
                  desc: "You&apos;ll be shown to your room, given a tour of the facility, and introduced to the daily schedule, house guidelines, and available amenities. Staff will answer any questions you have about what to expect.",
                },
                {
                  title: "Settling In",
                  desc: "The first day is about getting comfortable. There&apos;s no pressure to dive into intensive therapy immediately. Your clinical team will ease you into the program at a pace that feels manageable.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-gold/40 pl-6">
                  <h3 className="font-display text-lg text-forest font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConditionFAQ items={faqs} />
      <CTASection />
      <Footer />
    </>
  );
}
