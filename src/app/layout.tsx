import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { OrganizationSchema, AllLocalBusinessSchemas } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { getMedicalOrganizationSchema, getWebSiteSchema, getMedicalBusinessSchema } from "@/lib/schema";

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
  title: {
    default: "Luxury Addiction & Mental Health Treatment in Arizona | Desert Recovery Centers",
    template: "%s | Desert Recovery Centers",
  },
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
        <Script
          id="livechat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__lc = window.__lc || {};
              window.__lc.license = 19366980;
              window.__lc.integration_name = "manual_onboarding";
              window.__lc.product_name = "livechat";
              ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
            `,
          }}
        />
      </body>
    </html>
  );
}
