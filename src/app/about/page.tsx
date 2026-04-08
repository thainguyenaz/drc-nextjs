import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us, Desert Recovery Centers",
  description:
    "Learn about Desert Recovery Centers, Joint Commission-accredited luxury behavioral health treatment in Arizona. Dual diagnosis specialists with a 10-bed maximum for personalized care.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="About Us"
        title="Heal. Restore. Thrive."
        description="Desert Recovery Centers provides luxury mental health and addiction treatment across Arizona, built on clinical excellence, guided by compassion, and designed around you."
        bgImage="/images/scottsdale/DRC-FRONT-ENTRANCE-NORTH-SCOTTSDALE-08-01-2024-1210August-01-202400002-2.jpg"
      />
      {/* ── About DRC Video ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Our Story</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Who We Are</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-16">
            <iframe
              src="https://www.youtube.com/embed/bqDzL4O3WDE?rel=0"
              title="About Desert Recovery Centers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Why a Smaller, Boutique Program Leads to Better Outcomes</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-16">
            <iframe
              src="https://www.youtube.com/embed/ay9o6sxL4W8?rel=0"
              title="Why Does a Smaller, Boutique Program Often Lead to Better Outcomes Than Large Corporate Rehabs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Why Professionals Need Specialized Treatment</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/bhnDyJ6acqY?rel=0"
              title="Why Do Professionals (Doctors, Lawyers, Pilots) Often Need Specialized Treatment Programs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      <AboutContent />
      <CTASection />
      <Footer />
    </>
  );
}
