import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Interstitial target for the /tms-assessment redirect (counsel directive
// 2026-08-26, option A). The QR code on printed collateral encodes the DRC
// domain, so this page must keep resolving for as long as that collateral
// circulates. Not in sitemap.ts; noindex below.
export const metadata: Metadata = {
  title: "Assessment Temporarily Unavailable | DRC",
  description:
    "The depression assessment is temporarily unavailable. Call Desert Recovery Centers admissions at (623) 305-0496 for help.",
  robots: { index: false, follow: false },
};

export default function AssessmentUnavailablePage() {
  return (
    <>
      <Navigation />
      <main className="bg-cream min-h-[70vh] flex items-center">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl text-forest font-semibold mb-6">
              The Assessment Is Temporarily Unavailable
            </h1>
            <p className="text-gray-500 font-body leading-relaxed mb-10">
              We&apos;re sorry — the depression assessment is temporarily
              unavailable. Our admissions team is available 24/7 and can talk
              with you about your symptoms, answer questions, and help you take
              the next step.
            </p>
            <a
              href="tel:+16233050496"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold/25"
            >
              Call Admissions: (623) 305-0496
            </a>
            <p className="text-gray-500 text-sm font-body leading-relaxed mt-10">
              If you are in immediate danger or experiencing a mental health
              crisis, call or text 988 (Suicide &amp; Crisis Lifeline) or go to
              your nearest emergency room.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
