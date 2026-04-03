import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] flex items-center justify-center bg-cream">
        <div className="text-center px-6 py-24">
          <h1 className="font-display text-5xl md:text-6xl text-forest font-bold mb-4">
            404
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-forest text-white px-8 py-3 rounded-lg font-medium hover:bg-forest/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
