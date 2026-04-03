"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Mental Health",
    href: "/mental-health",
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
    children: [
      { label: "Alcohol", href: "/addiction/alcoholism-treatment" },
      { label: "Opioids & Heroin", href: "/addiction/heroin-addiction-treatment" },
      { label: "Fentanyl", href: "/addiction/fentanyl-addiction-treatment" },
      { label: "Cocaine", href: "/addiction/cocaine-addiction-treatment" },
      { label: "Meth", href: "/addiction/meth-addiction-treatment" },
      { label: "Prescription Drugs", href: "/addiction/prescription-drug-addiction-treatment" },
      { label: "Marijuana", href: "/addiction/marijuana-addiction-treatment" },
      { label: "Gambling", href: "/addiction/understanding-gambling-addiction" },
    ],
  },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "CBT", href: "/treatments/understanding-cbt-cognitive-behavioral-therapy" },
      { label: "DBT", href: "/treatments/understanding-dbt-dialectic-behavior-therapy" },
      { label: "EMDR", href: "/treatments/emdr-eye-movement-desensitization-and-reprocessing" },
      { label: "Trauma Therapy", href: "/treatments/trauma-therapy" },
      { label: "Dual Diagnosis", href: "/treatments/dual-diagnosis-treatment" },
      { label: "12-Step Program", href: "/treatments/12-step-program" },
      { label: "Holistic Therapies", href: "/treatments/holistic-therapies" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  { label: "About", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
            <span className="text-white font-display text-lg font-bold">D</span>
          </div>
          <span className="text-white font-display text-lg font-semibold hidden sm:inline">
            Desert Recovery Centers
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className="text-white/90 hover:text-gold text-sm font-medium transition-colors py-2"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white rounded-xl shadow-lg p-2 min-w-[240px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cream hover:text-forest rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+14809313617"
            className="text-gold font-semibold text-sm"
          >
            (480) 931-3617
          </a>
          <Link
            href="/insurance-verification"
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
          >
            Verify Insurance
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest border-t border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white/90 hover:text-white text-base py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:+14809313617"
              className="block text-gold font-semibold text-lg"
            >
              (480) 931-3617
            </a>
            <Link
              href="/insurance-verification"
              className="block bg-gold text-white text-center font-semibold px-6 py-3 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Verify Insurance
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
