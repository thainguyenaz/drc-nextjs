import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { buildMetadata, BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog, Desert Recovery Centers",
  description:
    "Mental health and addiction recovery resources, expert insights, and educational articles from Desert Recovery Centers in Arizona.",
  path: "/blog",
});

const articles = [
  {
    title: "10 Warning Signs of Addiction You Should Not Ignore",
    excerpt: "Addiction rarely announces itself. It builds quietly, through subtle shifts in behavior, mood, and priorities that are easy to dismiss until they are impossible to ignore.",
    href: "/blog/signs-of-addiction",
    category: "Addiction",
    date: "March 2026",
  },
  {
    title: "What Is Dual Diagnosis? Understanding Co-Occurring Disorders",
    excerpt: "Nearly half of all people with a substance use disorder also have a co-occurring mental health condition. Learn why integrated treatment matters.",
    href: "/blog/dual-diagnosis-explained",
    category: "Mental Health",
    date: "March 2026",
  },
  {
    title: "Is Luxury Rehab Worth the Cost? An Honest Answer",
    excerpt: "Luxury rehab conjures images of spa treatments and ocean views. But does the investment actually translate to better clinical outcomes?",
    href: "/blog/luxury-rehab-worth-it",
    category: "Treatment",
    date: "February 2026",
  },
  {
    title: "How to Stage an Intervention: A Complete Family Guide",
    excerpt: "An intervention, done correctly, can be the turning point. This step-by-step guide covers the ARISE, Johnson Model, and CRAFT approaches.",
    href: "/resources/intervention-guide",
    category: "Family",
    date: "February 2026",
  },
  {
    title: "Medical Detox in Arizona: What to Expect",
    excerpt: "Detox is not treatment, it is the necessary first step that makes treatment possible. Learn what medically supervised detox involves.",
    href: "/resources/detox-guide",
    category: "Clinical",
    date: "January 2026",
  },
  {
    title: "Free Mental Health Assessment",
    excerpt: "A brief, confidential self-assessment to help you understand your symptoms and whether professional support could help.",
    href: "/resources/mental-health-assessment",
    category: "Tools",
    date: "January 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", path: "/blog" }]} />
      <Navigation />
      <PageHero
        eyebrow="Resources & Insights"
        title="Mental Health & Recovery Resources"
        description="Expert insights, educational guides, and evidence-based information to support you and your family on the path to recovery."
        bgImage="/images/general/DRC-Treatment-Therapies-BG-Fade.jpg"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-gold/40 hover:shadow-lg transition-all group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-gold/10 text-gold font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-forest font-semibold mb-3 group-hover:text-gold transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sage text-sm font-medium group-hover:text-gold transition-colors">
                    Read More &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
