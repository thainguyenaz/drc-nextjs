import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ResourcesContent from "./ResourcesContent";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Recovery Resources, Desert Recovery Centers",
  description:
    "Free resources for addiction and mental health recovery. Detox guides, mental health assessments, blog articles, podcast episodes, and treatment comparisons.",
  openGraph: {
    images: [{ url: "/images/glendale/Glendale-Front.jpg", width: 1200, height: 630, alt: "Desert Recovery Centers luxury treatment facility in Arizona" }],
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <PageHero
        eyebrow="Resources"
        title="Recovery Resources"
        description="Education is part of healing. Explore our library of guides, assessments, and insights designed to help you make informed decisions about treatment."
        bgImage="/images/general/DRC-TREATMENTS.jpg"
      />
      {/* ── Recovery Resources Videos ───────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sage font-body text-sm tracking-[0.2em] uppercase font-medium">Recovery Resources</span>
          <div className="w-[60px] h-0.5 bg-gold mx-auto mt-4 mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Warning Signs You&#39;re Headed Toward Relapse</h2>
          <YouTubeEmbed youtubeId="yHBds5yQGyM" title="What Are the Warning Signs You're Headed Toward Relapse" className="mb-16" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">Rebuilding Trust After Multiple Relapses</h2>
          <YouTubeEmbed youtubeId="9Py7xxFlGAs" title="What Are the Best Ways to Rebuild Trust with Family After Multiple Relapses" className="mb-16" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">What Is a Relapse Prevention Plan?</h2>
          <YouTubeEmbed youtubeId="Zjg8GPWrBvo" title="What Is a Relapse Prevention Plan, and What Should Be In It" className="mb-16" />
          <h2 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-10">What Is an Intervention?</h2>
          <YouTubeEmbed youtubeId="6rS_kzmLmvk" title="What Is an Intervention, and When Is It Actually Helpful vs. Harmful" />
        </div>
      </section>

      <ResourcesContent />
      <CTASection />
      <Footer />
    </>
  );
}
