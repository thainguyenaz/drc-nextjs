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
      // SEO redirects — old program/treatment paths to canonical locations
      { source: "/programs/residential", destination: "/treatments/residential", permanent: true },
      { source: "/programs/php", destination: "/locations/phoenix-php-iop", permanent: true },
      { source: "/programs/iop", destination: "/locations/phoenix-php-iop", permanent: true },
      { source: "/treatment/iop", destination: "/locations/phoenix-php-iop", permanent: true },
      { source: "/treatment/op", destination: "/locations/phoenix-php-iop", permanent: true },
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
    ];
  },
};

export default nextConfig;
