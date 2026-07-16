import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AboutContent from "./AboutContent";
import { VideoSchemas, buildMetadata, BreadcrumbSchema, AboutPageSchema } from "@/lib/seo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import VideoTranscript from "@/components/VideoTranscript";

const GoogleReviews = dynamic(() => import("@/components/GoogleReviews"), { ssr: false });

export const metadata: Metadata = buildMetadata({
  title: "About Us, Desert Recovery Centers",
  description:
    "Learn about Desert Recovery Centers, Joint Commission-accredited luxury behavioral health treatment in Arizona. Dual diagnosis specialists with a 10-bed maximum for personalized care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutPageSchema
        url="/about"
        name="About Us, Desert Recovery Centers"
        description="Learn about Desert Recovery Centers, Joint Commission-accredited luxury behavioral health treatment in Arizona. Dual diagnosis specialists with a 10-bed maximum for personalized care."
        dateModified="2026-04-10"
      />
      <BreadcrumbSchema items={[{ name: "About", path: "/about" }]} />
      <VideoSchemas path="/about/" />
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
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">The Desert Recovery Centers Story</h2>
          <div className="mb-16 text-left">
            <YouTubeEmbed
              youtubeId="JUSM7ErxKq8"
              title="The Desert Recovery Centers Story | Luxury Dual Diagnosis Treatment in Arizona"
              caption="Two friends who found recovery together built the program they wished existed. This is the full DRC story."
            />
            <VideoTranscript youtubeId="JUSM7ErxKq8" title="The Desert Recovery Centers Story" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Born From an Act of Love</h2>
          <div className="mb-16 text-left">
            <YouTubeEmbed
              youtubeId="3B78Fzu6Y1M"
              title="Born From an Act of Love | The Desert Recovery Centers Story"
              caption="It started with a phone call and a promise to do treatment differently. This is our story."
            />
            <VideoTranscript youtubeId="3B78Fzu6Y1M" title="Born From an Act of Love" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Who We Are</h2>
          <YouTubeEmbed youtubeId="bqDzL4O3WDE" title="About Desert Recovery Centers" className="mb-16" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Why a Smaller, Boutique Program Leads to Better Outcomes</h2>
          <YouTubeEmbed youtubeId="ay9o6sxL4W8" title="Why Does a Smaller, Boutique Program Often Lead to Better Outcomes Than Large Corporate Rehabs" className="mb-16" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Why Professionals Need Specialized Treatment</h2>
          <YouTubeEmbed youtubeId="bhnDyJ6acqY" title="Why Do Professionals (Doctors, Lawyers, Pilots) Often Need Specialized Treatment Programs" />
        </div>
      </section>

      <AboutContent />
      <GoogleReviews />
      <CTASection />
      <Footer />
    </>
  );
}
