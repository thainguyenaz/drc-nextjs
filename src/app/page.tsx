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
import ContinuumOfCare from "@/components/ContinuumOfCare";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { FAQPageSchema, SpeakableSchema } from "@/lib/seo";
import AEOBlock from "@/components/AEOBlock";

export default function Home() {
  return (
    <>
      <FAQPageSchema />
      <SpeakableSchema url="/" cssSelectors={["[data-speakable]"]} />
      <Navigation />
      <Hero />
      <TrustBar />
      <IntroSection />
      <HomepageVideo />
      <ConditionsGrid />
      <AddictionPrograms />
      <ContinuumOfCare />
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
      <AEOBlock
        entries={[
          { question: "What is Desert Recovery Centers?", answer: "Desert Recovery Centers (a Joint Commission accredited luxury treatment center in Arizona) is a behavioral health organization specializing in dual diagnosis treatment for addiction and mental health conditions. With a maximum of 10 beds per facility and doctoral-level clinical psychologists on staff, DRC provides highly personalized, evidence-based care." },
          { question: "Where is Desert Recovery Centers located?", answer: "Desert Recovery Centers operates three residential treatment facilities in Arizona: Glendale (8105 W Frier Dr), Scottsdale (23222 N Church Rd), and Phoenix (1623 W Moody Trail). All three locations offer luxury amenities and are staffed by licensed clinical psychologists and board-certified psychiatrists." },
          { question: "Does Desert Recovery Centers accept insurance?", answer: "Yes, Desert Recovery Centers accepts most major private and commercial insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and Humana. DRC is also in-network with Tricare and TriWest. Coverage varies by plan — the admissions team verifies benefits at no cost." },
          { question: "What does Desert Recovery Centers treat?", answer: "Desert Recovery Centers treats substance use disorders (alcohol, opioids, cocaine, meth, fentanyl, prescription drugs) and mental health conditions (anxiety, depression, PTSD, bipolar disorder, OCD, personality disorders, ADHD, schizophrenia). All programs use a dual diagnosis approach that addresses co-occurring conditions simultaneously." },
          { question: "How many beds does Desert Recovery Centers have?", answer: "Each Desert Recovery Centers facility maintains a maximum of 10 residential beds. This intentionally small census ensures high staff-to-client ratios and deeply personalized treatment from doctoral-level clinicians across all three Arizona locations." },
          { question: "Is Desert Recovery Centers accredited?", answer: "Yes, Desert Recovery Centers is Joint Commission accredited — the highest national standard for healthcare quality and patient safety. DRC is also LegitScript certified, verifying compliance with all applicable laws and industry standards." },
          { question: "What makes Desert Recovery Centers different from other rehabs?", answer: "Desert Recovery Centers combines doctoral-level clinical leadership, a maximum of 10 beds per facility, Joint Commission accreditation, and luxury resort-level amenities. Unlike larger programs with 30 to 50 beds, DRC delivers intensive, personalized care with consistent treatment teams who know every client by name." },
        ]}
      />
      <CTASection />
      <Footer />
    </>
  );
}
