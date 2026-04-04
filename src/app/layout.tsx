import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, AllLocalBusinessSchemas } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { getMedicalOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

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
  metadataBase: new URL("https://www.desertrecoverycenters.com"),
  title: {
    default: "Desert Recovery Centers, Luxury Behavioral Health Treatment in Arizona",
    template: "%s, Desert Recovery Centers",
  },
  description:
    "Desert Recovery Centers offers luxury mental health and addiction treatment in Glendale, Scottsdale, and Phoenix, Arizona. Evidence-based care in a serene desert setting.",
  alternates: {
    canonical: "https://www.desertrecoverycenters.com",
    languages: { "en-US": "https://www.desertrecoverycenters.com" },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <SchemaScript schema={[getMedicalOrganizationSchema(), getWebSiteSchema()]} />
      </head>
      <body className="font-body antialiased bg-white">
        <OrganizationSchema />
        <AllLocalBusinessSchemas />
        {children}
      </body>
    </html>
  );
}
