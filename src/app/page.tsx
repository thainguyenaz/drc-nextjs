import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IntroSection from "@/components/IntroSection";
import HomepageVideo from "@/components/HomepageVideo";
import ConditionsGrid from "@/components/ConditionsGrid";
import AddictionPrograms from "@/components/AddictionPrograms";
import StatsSection from "@/components/StatsSection";
import LocationsSection from "@/components/LocationsSection";
import FacilityPhotoGrid from "@/components/FacilityPhotoGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import BridgeWork from "@/components/BridgeWork";
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
      <HomepageVideo />
      <ConditionsGrid />
      <AddictionPrograms />
      <StatsSection />
      <LocationsSection />
      <FacilityPhotoGrid />
      <WhyChooseUs />
      <BridgeWork />
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
