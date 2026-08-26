import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaScript from "@/components/SchemaScript";
import { getMedicalOrganizationSchema } from "@/lib/schema";
import LiveChatLoader from "@/components/LiveChatLoader";
import TrackingScripts from "@/components/TrackingScripts";
import WebVitals from "@/components/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://desertrecoverycenters.com"),
  title: "Luxury Addiction & Mental Health Treatment in Arizona | DRC",
  description:
    "Luxury addiction and mental health treatment in Arizona. Joint Commission accredited, dual diagnosis care. Verify insurance today. Call (623) 305-0496.",
  alternates: {
    canonical: "https://desertrecoverycenters.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Desert Recovery Centers",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Desert Recovery Centers" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  // CUTOVER TODO: After DNS flip to desertrecoverycenters.com, enable
  // Vercel Standard Deployment Protection on drc-nextjs.vercel.app to prevent
  // duplicate-content indexing. Settings: Project Settings → Deployment
  // Protection → Standard Protection. Production custom domain stays public;
  // auto-generated vercel.app URL becomes auth-only.
  // See audit doc P0 #4. Do not remove this comment until cutover is complete.
  robots: {
    index: process.env.VERCEL_ENV === "production",
    follow: process.env.VERCEL_ENV === "production",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* JS-disabled safety net for useScrollReveal: reveal-* elements
            start at opacity:0 in CSS and depend on the hook (JS) to
            become visible. With JS disabled this would leave entire
            sections blank, so force them to their final state. */}
        <noscript>
          <style>{`.reveal-fade-up,.reveal-fade-left,.reveal-fade-right,.reveal-fade{opacity:1!important;transform:none!important;animation:none!important;}`}</style>
        </noscript>
        <SchemaScript schema={[getMedicalOrganizationSchema()]} />
        {/* GA4/Ads/CTM/HubSpot moved to TrackingScripts (client component in
            <body>), which skips them entirely on untracked paths — see the
            load-order constraints documented there before touching. */}
      </head>
      <body className="font-body antialiased bg-white">
        <TrackingScripts />
        <main>{children}</main>
        <LiveChatLoader />
        <WebVitals />
      </body>
    </html>
  );
}
