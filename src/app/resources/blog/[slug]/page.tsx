import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { getPostBySlug, getAllSlugs, getPostsByCategory } from "@/lib/blog";
import BlogPostBody from "./BlogPostBody";

const SITE_URL = "https://www.desertrecoverycenters.com";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/resources/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [{ url: post.featuredImage, width: 1200, height: 630, alt: post.featuredImageAlt }],
      siteName: "Desert Recovery Centers",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  addiction: "bg-red-500/10 text-red-700",
  "mental-health": "bg-blue-500/10 text-blue-700",
  "recovery-tips": "bg-emerald-500/10 text-emerald-700",
  family: "bg-purple-500/10 text-purple-700",
  holistic: "bg-amber-500/10 text-amber-700",
  clinical: "bg-sage/10 text-sage",
  tms: "bg-gold/10 text-gold-dark",
  adolescent: "bg-cyan-500/10 text-cyan-700",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/resources/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/resources/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/our-team#dr-an-nguyen`,
      name: post.author,
      jobTitle: post.authorTitle,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
    reviewedBy: {
      "@type": "Person",
      name: "Dr. An Nguyen",
      jobTitle: "Licensed Clinical Psychologist, Clinical Director",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
      { "@type": "ListItem", position: 3, name: "Blog", item: `${SITE_URL}/resources/blog` },
      { "@type": "ListItem", position: 4, name: post.title, item: `${SITE_URL}/resources/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <SchemaScript schema={[articleSchema, breadcrumbSchema]} />
      <Navigation />
      <Breadcrumb
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Resources", url: `${SITE_URL}/resources` },
          { name: "Blog", url: `${SITE_URL}/resources/blog` },
          { name: post.title, url: `${SITE_URL}/resources/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-forest pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${post.featuredImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 to-forest" />
        <div className="relative z-10 max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
              {post.category.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
            <h1 className="text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span>By {post.author}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{formatDate(post.datePublished)}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main content */}
            <BlogPostBody content={post.content} />

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* Author */}
                <div className="bg-cream rounded-xl p-6 border border-gold/10">
                  <p className="text-xs text-sage uppercase tracking-widest font-semibold mb-2">Written By</p>
                  <p className="font-display text-forest font-semibold">{post.author}</p>
                  <p className="text-gray-500 text-sm">{post.authorTitle}</p>
                </div>

                {/* CTA */}
                <div className="bg-forest rounded-xl p-6">
                  <p className="text-white font-display font-semibold mb-2">Ready to Start Treatment?</p>
                  <p className="text-white/60 text-sm mb-4">Our admissions team answers 24/7.</p>
                  <a href="tel:+16233231012" className="block bg-gold hover:bg-gold-dark text-white text-center font-semibold text-sm px-6 py-3 rounded-xl transition-colors">
                    Call (623) 323-1012
                  </a>
                </div>

                {/* Related */}
                {related.length > 0 && (
                  <div>
                    <p className="text-xs text-sage uppercase tracking-widest font-semibold mb-3">Related Articles</p>
                    <div className="space-y-3">
                      {related.map((r) => (
                        <Link key={r.slug} href={`/resources/blog/${r.slug}`} className="block group">
                          <p className="text-sm text-forest font-medium group-hover:text-gold transition-colors line-clamp-2">
                            {r.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">{r.readTime} min read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* Back to Blog */}
          <div className="max-w-3xl mt-12">
            <Link href="/resources/blog" className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Tags */}
          <div className="max-w-3xl mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-cream text-gray-500 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Related */}
          {related.length > 0 && (
            <div className="lg:hidden mt-12">
              <h3 className="font-display text-xl text-forest font-semibold mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/resources/blog/${r.slug}`} className="group block bg-cream rounded-xl p-4 hover:shadow-md transition-shadow">
                    <p className="text-sm text-forest font-semibold group-hover:text-gold transition-colors">{r.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{r.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
