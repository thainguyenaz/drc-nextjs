import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IntroSection from "@/components/IntroSection";
import ConditionsGrid from "@/components/ConditionsGrid";
import AddictionPrograms from "@/components/AddictionPrograms";
import LocationsSection from "@/components/LocationsSection";
import FacilityPhotoGrid from "@/components/FacilityPhotoGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrustBar />
      <IntroSection />
      <ConditionsGrid />
      <AddictionPrograms />
      <LocationsSection />
      <FacilityPhotoGrid />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <GoogleReviews />
      <FAQ />
      <ContactForm />
      <CTASection />
      <Footer />
    </>
  );
}
