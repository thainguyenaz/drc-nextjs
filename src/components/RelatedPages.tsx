import Link from "next/link";
import { getRelatedLinks } from "@/lib/internal-links";

export default function RelatedPages({ currentPath }: { currentPath: string }) {
  const links = getRelatedLinks(currentPath);
  if (links.length === 0) return null;

  return (
    <section className="py-12 bg-cream border-t border-gray-100">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-forest font-display text-lg font-semibold mb-4">
            Related Treatment Programs
          </h3>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm bg-white text-sage font-medium px-4 py-2 rounded-full border border-sage/20 hover:border-gold hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
