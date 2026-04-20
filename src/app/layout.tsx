import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, AllLocalBusinessSchemas } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { getMedicalOrganizationSchema, getWebSiteSchema, getMedicalBusinessSchema } from "@/lib/schema";
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
  robots: {
    index: true,
    follow: true,
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
        <SchemaScript schema={[getMedicalOrganizationSchema(), getWebSiteSchema(), getMedicalBusinessSchema()]} />
      </head>
      <body className="font-body antialiased bg-white">
        <OrganizationSchema />
        <AllLocalBusinessSchemas />
        {children}
        <LiveChatLoader />
      </body>
    </html>
  );
}
