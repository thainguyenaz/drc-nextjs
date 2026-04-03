/** @type {import('next').NextConfig} */
const nextConfig = {
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
      { source: "/facilities", destination: "/locations", permanent: false },
    ];
  },
};

export default nextConfig;
