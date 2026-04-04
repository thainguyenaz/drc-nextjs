import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import ConditionFAQ from "@/components/ConditionFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { LocalBusinessSchema, BreadcrumbSchema, InlineFAQSchema, VideoSchemas } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Phoenix PHP/IOP Center — Desert Recovery Centers",
  description:
    "PHP, IOP, OP, and TMS therapy at 4160 N. 108th Ave, Phoenix, AZ 85037. Outpatient addiction and mental health treatment. Call (623) 257-5384.",
  path: "/locations/phoenix-php-iop",
});

const services = [
  {
    name: "PHP — Partial Hospitalization",
    desc: "Structured daily treatment 5-6 hours per day, 5 days per week. Intensive clinical programming including group therapy, individual therapy, and psychiatric care.",
  },
  {
    name: "IOP — Intensive Outpatient",
    desc: "3 hours per day, 3-5 days per week. Flexible scheduling for clients transitioning from PHP or residential care.",
  },
  {
    name: "OP — Outpatient",
    desc: "1-2 sessions per week for ongoing support and relapse prevention.",
  },
  {
    name: "TMS — Transcranial Magnetic Stimulation",
    desc: "FDA-cleared non-invasive brain stimulation therapy for treatment-resistant depression and mental health conditions.",
  },
];

const faqs = [
  {
    q: "What is PHP treatment?",
    a: "Partial Hospitalization Program (PHP) provides structured daily clinical treatment 5-6 hours per day, 5 days per week, offering intensive care while clients live at home or in sober living.",
  },
  {
    q: "What is the address of the Phoenix PHP/IOP center?",
    a: "Our Phoenix PHP/IOP Center is located at 4160 N. 108th Ave, Phoenix, AZ 85037.",
  },
  {
    q: "What programs are available at the Phoenix location?",
    a: "The Phoenix location offers PHP, IOP, Outpatient programs, and TMS therapy for addiction and mental health.",
  },
  {
    q: "Do you accept insurance at the Phoenix location?",
    a: "Yes, we are in-network with most major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Coverage varies by plan. Contact us to verify your benefits.",
  },
  {
    q: "Is TMS therapy available at Phoenix?",
    a: "Yes, our Phoenix center offers NeuroStar TMS therapy — FDA-cleared for major depressive disorder, anxious depression, OCD, and adolescents ages 15 and older. TMS is a safe, non-invasive treatment that does not require medication or sedation.",
  },
];

export default function PhoenixPhpIopPage() {
  return (
    <>
      <InlineFAQSchema items={faqs} />
      <LocalBusinessSchema index={2} />
      <BreadcrumbSchema items={[{ name: "Facilities", path: "/locations" }, { name: "Phoenix PHP/IOP", path: "/locations/phoenix-php-iop" }]} />
      <VideoSchemas path="/locations/phoenix/" />
      <Navigation />
      <PageHero
        eyebrow="Phoenix, Arizona"
        title="Phoenix PHP / IOP Center"
        description="Partial Hospitalization, Intensive Outpatient, Outpatient, and TMS Therapy Programs"
        bgImage="/images/general/accom-group-room.jpg"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mb-6">
              Outpatient Treatment in Phoenix
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Our Phoenix center at 4160 N. 108th Ave provides structured outpatient programming for clients stepping down from residential treatment or entering care directly. PHP, IOP, and OP programs are designed to deliver clinical depth while allowing you to maintain daily responsibilities.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              This location also houses our NeuroStar TMS therapy suite — the only TMS system FDA-cleared for depression, anxious depression, OCD, and adolescents ages 15 and older.
            </p>
            <div className="bg-cream border border-gold/30 rounded-xl p-6">
              <p className="text-forest text-sm leading-relaxed">
                <strong>Looking for residential treatment?</strong> This location offers PHP, IOP, OP, and TMS therapy. For residential treatment, please see our{" "}
                <Link href="/locations/glendale" className="text-gold font-semibold hover:underline">Glendale</Link> or{" "}
                <Link href="/locations/scottsdale" className="text-gold font-semibold hover:underline">Scottsdale</Link> facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Services */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">
                Our Phoenix Center
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-forest font-semibold mt-4 mb-6">
                Contact & Location Details
              </h2>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-forest mb-3">Address</h3>
                <p className="text-gray-600 text-sm">4160 N. 108th Ave</p>
                <p className="text-gray-600 text-sm">Phoenix, AZ 85037</p>
                <a href="tel:+16232575384" className="text-gold font-semibold text-xl block mt-3">(623) 257-5384</a>
                <p className="text-gray-500 text-xs mt-2">Admissions available 24/7</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-forest font-semibold mb-4">Services</h3>
                <div className="flex flex-wrap gap-3">
                  {["PHP", "IOP", "OP", "TMS Therapy"].map((p) => (
                    <span key={p} className="text-sm bg-sage/10 text-sage font-medium px-4 py-2 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-forest font-semibold mb-6">Programs Available</h3>
              <div className="space-y-4">
                {services.map((svc) => (
                  <div key={svc.name} className="bg-white rounded-xl p-5 border border-gray-100">
                    <h4 className="font-display text-base text-forest font-semibold mb-2">{svc.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                ))}
              </div>
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
