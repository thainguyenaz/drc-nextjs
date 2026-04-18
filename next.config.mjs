/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "desertrecoverycenters.com", pathname: "/wp-content/**" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      // Deleted fake location pages → nearest real facility
      { source: "/locations/chandler", destination: "/locations/phoenix", permanent: true },
      { source: "/locations/gilbert", destination: "/locations/phoenix", permanent: true },
      { source: "/locations/mesa", destination: "/locations/phoenix", permanent: true },
      { source: "/locations/tempe", destination: "/locations/phoenix", permanent: true },
      { source: "/locations/surprise", destination: "/locations/glendale", permanent: true },
      { source: "/locations/peoria", destination: "/locations/glendale", permanent: true },
      { source: "/locations/north-scottsdale", destination: "/locations/scottsdale", permanent: true },
      { source: "/locations/paradise-valley", destination: "/locations/scottsdale", permanent: true },
      // Old broken paths fixed in href audit
      { source: "/about/luxury-vs-standard", destination: "/resources/luxury-vs-standard-rehab", permanent: true },
      { source: "/about/our-team", destination: "/our-team", permanent: true },
      // /facilities now has its own page.tsx — redirect removed
      // Phoenix TMS 404 fix
      { source: "/locations/phoenix-tms", destination: "/treatments/tms-therapy", permanent: true },
      { source: "/facilities/phoenix%20tms", destination: "/treatments/tms-therapy", permanent: true },
      { source: "/facilities/phoenix-tms", destination: "/treatments/tms-therapy", permanent: true },
      // SEO redirects — old program/treatment paths (updated destinations)
      { source: "/programs/residential", destination: "/levels-of-care/residential-treatment", permanent: true },
      { source: "/programs/residential/", destination: "/levels-of-care/residential-treatment", permanent: true },
      { source: "/programs/php", destination: "/treatments/php", permanent: true },
      { source: "/programs/php/", destination: "/treatments/php", permanent: true },
      { source: "/programs/iop", destination: "/treatments/iop", permanent: true },
      { source: "/programs/iop/", destination: "/treatments/iop", permanent: true },
      { source: "/treatment/iop", destination: "/treatments/iop", permanent: true },
      { source: "/treatment/iop/", destination: "/treatments/iop", permanent: true },
      { source: "/treatment/op", destination: "/treatments", permanent: true },
      { source: "/treatment/op/", destination: "/treatments", permanent: true },
      { source: "/treatment/family-program", destination: "/treatments", permanent: true },
      { source: "/treatment/family-program/", destination: "/treatments", permanent: true },
      // Resource page dead link redirects
      { source: "/resources/podcast", destination: "https://open.spotify.com/show/5thFT5DNC1exCkhmiug1Nb", permanent: false },
      { source: "/resources/what-to-pack", destination: "/resources/blog", permanent: false },
      { source: "/resources/family-guide", destination: "/resources/blog/how-drug-and-alcohol-addiction-impacts-families", permanent: true },
      { source: "/resources/signs-you-need-help", destination: "/resources/blog/gray-area-drinking-am-i-an-alcoholic", permanent: true },
      { source: "/resources/aftercare", destination: "/treatments/residential", permanent: true },
      // SEO redirects — renamed content pages
      { source: "/addiction/understanding-gambling-addiction/", destination: "/addiction/gambling-addiction-treatment/", permanent: true },
      { source: "/addiction/understanding-sex-addiction/", destination: "/addiction/sex-addiction-treatment/", permanent: true },
      { source: "/treatments/alternative-therapy/", destination: "/treatments/softwave-therapy/", permanent: true },
      { source: "/treatments/understanding-cbt-cognitive-behavioral-therapy/", destination: "/treatments/cognitive-behavioral-therapy-cbt/", permanent: true },
      { source: "/treatments/understanding-dbt-dialectic-behavior-therapy/", destination: "/treatments/dialectical-behavior-therapy-dbt/", permanent: true },
      { source: "/treatments/emdr-eye-movement-desensitization-and-reprocessing", destination: "/treatments/emdr-therapy", permanent: true },
      { source: "/treatments/emdr-eye-movement-desensitization-and-reprocessing/", destination: "/treatments/emdr-therapy", permanent: true },
      // Insurance-verification consolidation (/get-help kept as standalone admissions page)
      { source: "/insurance-verification", destination: "/insurance", permanent: true },
      { source: "/insurance-verification/", destination: "/insurance", permanent: true },
      // Resource sub-pages removed in WP → Next migration
      { source: "/resources/access-webinars", destination: "/resources", permanent: true },
      { source: "/resources/access-webinars/", destination: "/resources", permanent: true },
      { source: "/resources/our-podcast", destination: "/resources", permanent: true },
      { source: "/resources/our-podcast/", destination: "/resources", permanent: true },
      // Google Ads landing page redirects
      { source: "/drug-alcohol-detox-lp", destination: "/levels-of-care/detox", permanent: true },
      { source: "/drug-alcohol-detox-lp/", destination: "/levels-of-care/detox", permanent: true },
      // Duplicate page cleanup
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/addiction", destination: "/addiction-treatment", permanent: true },
      { source: "/addiction/", destination: "/addiction-treatment", permanent: true },
      { source: "/adolescent-program", destination: "/adolescent-treatment", permanent: true },
      { source: "/adolescent-program/", destination: "/adolescent-treatment", permanent: true },
      { source: "/facilities/glendale", destination: "/locations/glendale", permanent: true },
      { source: "/facilities/glendale/", destination: "/locations/glendale", permanent: true },
      { source: "/facilities/phoenix", destination: "/locations/phoenix", permanent: true },
      { source: "/facilities/phoenix/", destination: "/locations/phoenix", permanent: true },
      { source: "/facilities/scottsdale", destination: "/locations/scottsdale", permanent: true },
      { source: "/facilities/scottsdale/", destination: "/locations/scottsdale", permanent: true },
      { source: "/blog", destination: "/resources/blog", permanent: true },
      { source: "/blog/", destination: "/resources/blog", permanent: true },
    ];
  },
};

export default nextConfig;
