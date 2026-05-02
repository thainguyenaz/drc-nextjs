import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaScript from "@/components/SchemaScript";
import { getMedicalOrganizationSchema } from "@/lib/schema";
import LiveChatLoader from "@/components/LiveChatLoader";

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
  title: "Luxury Addiction & Mental Health Treatment in Arizona | Desert Recovery Centers",
  description:
    "Luxury addiction and mental health treatment in Arizona. Joint Commission accredited, dual diagnosis care. Verify insurance today. Call (480) 931-3617.",
  alternates: {
    canonical: "https://desertrecoverycenters.com",
    languages: { "en-US": "https://desertrecoverycenters.com" },
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
        <SchemaScript schema={[getMedicalOrganizationSchema()]} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0MSPF0DPVK"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0MSPF0DPVK');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16468277860"
          strategy="afterInteractive"
        />
        <Script id="gads-init" strategy="afterInteractive">
          {`gtag('config', 'AW-16468277860');`}
        </Script>
        <Script
          src="//517993.tctm.co/t.js"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className="font-body antialiased bg-white">
        {children}
        <LiveChatLoader />
      </body>
    </html>
  );
}
