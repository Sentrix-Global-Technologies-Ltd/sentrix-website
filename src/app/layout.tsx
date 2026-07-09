import type { Metadata, Viewport } from "next";
// @ts-ignore
import "./globals.css";
import IconSprite from "@/components/layout/IconSprite";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Concierge from "@/components/layout/Concierge";
import ClientFX from "@/components/layout/ClientFX";

const SITE_DESC =
  "Sentrix is an AI-powered Safety Intelligence Ecosystem. We unify surveillance, mobility, emergency response, fleet and insurance intelligence to help people, organisations and governments know earlier, act faster, and stay safer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sentrixtechglobal.com/"),
  title: "Sentrix Global Technologies — AI-Powered Safety Intelligence Ecosystem",
  description: SITE_DESC,
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Sentrix Global Technologies",
    url: "https://sentrixtechglobal.com/",
    title: "Sentrix Global Technologies — AI-Powered Safety Intelligence Ecosystem",
    description: SITE_DESC,
    images: ["/assets/hero-city.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentrix Global Technologies — AI-Powered Safety Intelligence Ecosystem",
    description: SITE_DESC,
    images: ["/assets/hero-city.webp"],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 4 56 13v18c0 16-11 25-24 31C19 56 8 47 8 31V13z' fill='%230D1B4C'/%3E%3Cpath d='M32 4 56 13v18c0 16-11 25-24 31z' fill='%2312B5B0'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1B4C",
};

const NO_FLASH_THEME = `(function(){try{var t=localStorage.getItem('sentrix-theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sentrix.global/#org",
      name: "Sentrix Global Technologies Limited",
      alternateName: "Sentrix",
      url: "https://sentrixtechglobal.com/",
      logo: "https://sentrixtechglobal.com/assets/logo.svg",
      description:
        "AI-powered Safety Intelligence Ecosystem unifying AI surveillance, mobility, emergency response, fleet and insurance intelligence.",
      email: "hello@sentrixtechglobal.com",
      sameAs: [
        "https://www.linkedin.com/company/sentrix",
        "https://x.com/sentrix",
        "https://www.youtube.com/@sentrix",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@sentrixtechglobal.com",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://sentrix.global/#website",
      url: "https://sentrix.global/",
      name: "Sentrix",
      publisher: { "@id": "https://sentrix.global/#org" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </head>
      <body>
        <IconSprite />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <Concierge />
        <ClientFX />
      </body>
    </html>
  );
}
