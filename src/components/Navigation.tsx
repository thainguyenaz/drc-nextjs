"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "Mental Health",
    href: "/mental-health",
    image: "/images/general/DRC-MENTAL-HEALTH.jpg",
    children: [
      { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
      { label: "Depression", href: "/mental-health/depression-treatment" },
      { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
      { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
      { label: "OCD", href: "/mental-health/ocd-treatment" },
      { label: "Personality Disorders", href: "/mental-health/personality-disorder-treatment" },
      { label: "ADHD/ADD", href: "/mental-health/adhd-add" },
      { label: "Schizophrenia", href: "/mental-health/schizophrenia-treatment" },
    ],
  },
  {
    label: "Addiction",
    href: "/addiction-treatment",
    image: "/images/general/DRC-ADDICTION.jpg",
    children: [
      { label: "Alcohol", href: "/addiction/alcoholism-treatment" },
      { label: "Opioids & Heroin", href: "/addiction/heroin-addiction-treatment" },
      { label: "Fentanyl", href: "/addiction/fentanyl-addiction-treatment" },
      { label: "Cocaine", href: "/addiction/cocaine-addiction-treatment" },
      { label: "Meth", href: "/addiction/meth-addiction-treatment" },
      { label: "Prescription Drugs", href: "/addiction/prescription-drug-addiction-treatment" },
      { label: "Marijuana", href: "/addiction/marijuana-addiction-treatment" },
      { label: "Gambling", href: "/addiction/gambling-addiction-treatment" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatments",
    image: "/images/general/DRC-TREATMENTS.jpg",
    children: [
      { label: "Residential Treatment", href: "/levels-of-care/residential-treatment" },
      { label: "TMS Therapy", href: "/treatments/tms-therapy" },
      { label: "PHP / IOP", href: "/locations/phoenix-php-iop" },
      { label: "CBT", href: "/treatments/cbt-cognitive-behavioral-therapy" },
      { label: "DBT", href: "/treatments/dbt-dialectical-behavior-therapy" },
      { label: "EMDR", href: "/treatments/emdr-therapy" },
      { label: "12-Step Program", href: "/treatments/12-step-program" },
      { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
      { label: "Dual Diagnosis", href: "/treatments/dual-diagnosis-treatment" },
      { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
      { label: "BridgeWork™", href: "/treatments/bridgework" },
      { label: "Family Program", href: "/treatment/family-program" },
    ],
  },
  {
    label: "Facilities",
    href: "/locations",
    image: "/images/glendale/Glendale-Front.jpg",
    children: [
      { label: "Glendale", href: "/locations/glendale" },
      { label: "Scottsdale", href: "/locations/scottsdale" },
      { label: "Phoenix PHP/IOP", href: "/locations/phoenix-php-iop" },
      { label: "Phoenix Sober Living", href: "/locations/phoenix-living" },
    ],
  },
  {
    label: "Adolescent",
    href: "/adolescent-treatment",
    children: [
      { label: "Depression", href: "/adolescent/depression" },
      { label: "Anxiety Disorders", href: "/adolescent/anxiety" },
      { label: "PTSD and Trauma", href: "/adolescent/ptsd-trauma" },
      { label: "OCD", href: "/adolescent/ocd" },
      { label: "ADHD", href: "/adolescent/adhd" },
      { label: "Bipolar Disorder", href: "/adolescent/bipolar" },
      { label: "Self Harm", href: "/adolescent/self-harm" },
      { label: "Substance Use", href: "/adolescent/substance-use" },
      { label: "Suicidal Ideation", href: "/adolescent/suicidal-ideation" },
    ],
  },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Our Team", href: "/our-team" },
  {
    label: "Resources",
    href: "/resources",
    image: "/images/general/DRC-TREATMENTS.jpg",
    children: [
      { label: "Recovery Blog", href: "/resources/blog" },
      { label: "Luxury vs Traditional Rehab", href: "/resources/luxury-vs-traditional-rehab" },
      { label: "Detox Guide", href: "/resources/blog/risks-of-drug-or-alcohol-detox-why-you-need-professional-help" },
      { label: "Family Guide", href: "/resources/blog/how-drug-and-alcohol-addiction-impacts-families" },
      { label: "Insurance Guide", href: "/resources/blog/how-insurance-covers-addiction-mental-health-treatment" },
      { label: "Mental Health Assessment", href: "/resources/mental-health-assessment" },
      { label: "Verify Insurance", href: "/insurance" },
    ],
  },
];

/** Measures scrollHeight then animates via CSS max-height */
function useCollapse(open: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (open && ref.current) {
      setMaxHeight(`${ref.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return { ref, style: { maxHeight, overflow: "hidden" as const } };
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const mobileMenu = useCollapse(mobileOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll(); // set correct initial state on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 mr-8">
          <Image
            src="/images/branding/drc-logo-black.png"
            alt="Desert Recovery Centers logo — luxury addiction and mental health treatment in Arizona"
            width={320}
            height={96}
            className="h-12 w-auto"
            style={{
              filter: scrolled ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.3s ease",
            }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors py-6 block ${
                  scrolled ? "text-gray-900 hover:text-gold" : "text-white hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50 transition-all duration-200 ease-out ${
                    activeDropdown === link.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-forest border border-white/10 rounded-xl shadow-2xl p-1.5 max-w-[600px] flex">
                    <div className="flex-1 py-1 min-w-[260px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm text-white/80 hover:text-gold rounded-lg transition-all duration-200 group"
                        >
                          <span className="w-0 group-hover:w-3 h-px bg-gold mr-0 group-hover:mr-3 transition-all duration-200" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                    {"image" in link && link.image && (
                      <div className="flex-shrink-0 w-[160px] h-[120px] rounded-lg overflow-hidden m-1.5 self-center">
                        <Image
                          src={link.image}
                          alt={link.label}
                          width={160}
                          height={120}
                          className="w-[160px] h-[120px] object-cover object-center"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-8">
          <a
            href="tel:+14809313617"
            className={`font-semibold text-sm transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
          >
            (480) 931-3617
          </a>
          <Link
            href="/insurance"
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
          >
            Verify Insurance
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-gray-900" : "text-white"}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenu.ref}
        style={mobileMenu.style}
        className="lg:hidden bg-forest border-t border-white/10 transition-all duration-300 ease-out"
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <MobileNavItem
              key={link.label}
              link={link}
              expanded={mobileExpanded === link.label}
              onToggle={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
              onClose={() => setMobileOpen(false)}
            />
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a href="tel:+14809313617" className="block text-gold font-semibold text-lg">(480) 931-3617</a>
            <Link
              href="/insurance"
              className="block bg-gold text-white text-center font-semibold px-6 py-3 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Verify Insurance
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileNavItem({
  link,
  expanded,
  onToggle,
  onClose,
}: {
  link: (typeof navLinks)[number];
  expanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const submenu = useCollapse(expanded);

  if (!link.children) {
    return (
      <div>
        <Link
          href={link.href}
          className="block text-white/90 hover:text-white text-base py-2"
          onClick={onClose}
        >
          {link.label}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-white/90 hover:text-white text-base py-2"
      >
        {link.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={submenu.ref}
        style={submenu.style}
        className="transition-all duration-200 ease-out"
      >
        <div className="pl-4 pb-2 space-y-1">
          {link.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block text-white/60 hover:text-white text-sm py-1.5"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
