import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const quickLinks = [
  { label: "Glendale (Residential)", href: "/locations/glendale" },
  { label: "Scottsdale (Residential)", href: "/locations/scottsdale" },
  { label: "Phoenix (PHP / IOP)", href: "/locations/phoenix-php-iop" },
  { label: "Addiction Treatment", href: "/addiction-treatment" },
  { label: "Mental Health Treatment", href: "/mental-health" },
  { label: "Adolescent Treatment", href: "/adolescent-treatment" },
  { label: "Verify Insurance", href: "/insurance" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[70vh] bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-forest font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has moved. We can still help. Call our admissions team 24/7 or pick a destination below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+14809313617"
              className="inline-flex items-center justify-center gap-2 bg-gold text-forest px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors"
            >
              Call (480) 931-3617
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-forest text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-forest/90 transition-colors"
            >
              Get Help Now
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-left">
            <h2 className="font-display text-xl text-forest font-semibold mb-4 text-center">
              Where would you like to go?
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent hover:border-gold/30 hover:bg-cream transition-colors"
                >
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-forest font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <Link href="/" className="text-sage font-medium hover:text-gold transition-colors">
                ← Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
