import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

const footerLinks = {
  "Mental Health": [
    { label: "Anxiety Disorders", href: "/mental-health/anxiety-treatment" },
    { label: "Depression", href: "/mental-health/depression-treatment" },
    { label: "PTSD & Trauma", href: "/mental-health/ptsd-treatment" },
    { label: "Bipolar Disorder", href: "/mental-health/bipolar-disorder-treatment" },
    { label: "OCD", href: "/mental-health/ocd-treatment" },
    { label: "Schizophrenia", href: "/mental-health/schizophrenia-treatment" },
  ],
  Addiction: [
    { label: "Alcohol", href: "/addiction/alcohol" },
    { label: "Opioids", href: "/addiction/heroin" },
    { label: "Fentanyl", href: "/addiction/fentanyl" },
    { label: "Cocaine", href: "/addiction/cocaine" },
    { label: "Meth", href: "/addiction/meth" },
    { label: "Prescription Drugs", href: "/addiction/prescription-drugs" },
  ],
  Treatment: [
    { label: "Residential", href: "/treatments" },
    { label: "PHP Program", href: "/treatments" },
    { label: "IOP Program", href: "/treatments" },
    { label: "PHP / IOP Phoenix", href: "/locations/phoenix-php-iop" },
    { label: "CBT Therapy", href: "/treatments/cbt" },
    { label: "DBT Therapy", href: "/treatments/dbt" },
    { label: "EMDR Therapy", href: "/treatments/emdr" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "Facilities", href: "/locations" },
    { label: "Resources", href: "/resources" },
    { label: "Insurance", href: "/insurance" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 min-w-0">
            <div className="mb-4">
              <Image
                src="/images/branding/drc-logo-white.png"
                alt="Desert Recovery Centers"
                width={320}
                height={96}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Luxury mental health and addiction treatment in the heart of the
              Arizona desert.
            </p>
            <a href="tel:+14809313617" className="text-gold font-semibold text-sm">
              (480) 931-3617
            </a>
            <div className="mt-3">
              <a
                href={`mailto:${siteData.email}`}
                className="text-white/60 text-sm hover:text-white transition-colors break-all"
              >
                {siteData.email}
              </a>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={siteData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 mt-12 pt-8 flex items-center justify-center gap-8 mb-8">
          <a href="https://www.jointcommission.org" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <Image src="/JointCommission_GoldSeal.png" alt="Joint Commission Gold Seal" width={64} height={64} className="h-16 w-auto" />
          </a>
          <a href="https://www.legitscript.com/websites/?checker_keywords=desertrecoverycenters.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://static.legitscript.com/seals/4374.png" alt="LegitScript Certified" width="120" height="100" style={{ height: "64px", width: "auto" }} />
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Desert Recovery Centers. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link href="/hipaa-notice" className="hover:text-white/60 transition-colors">HIPAA Notice</Link>
          </div>
        </div>
        <p className="text-white/30 text-xs mt-4 text-center">
          If you are experiencing a medical emergency, please call 911. Desert
          Recovery Centers does not provide emergency services.
        </p>
      </div>
    </footer>
  );
}
