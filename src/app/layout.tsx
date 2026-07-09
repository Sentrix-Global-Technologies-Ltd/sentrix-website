import type { Metadata, Viewport } from "next";
// @ts-ignore
import "./globals.css";
import IconSprite from "@/components/layout/IconSprite";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Concierge from "@/components/layout/Concierge";
import ClientFX from "@/components/layout/ClientFX";
import { EMAILS, SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

const SITE_DESC =
  "Sentrix is an AI-powered Safety Intelligence Ecosystem. We unify surveillance, mobility, emergency response, fleet and insurance intelligence to help people, organisations and governments know earlier, act faster, and stay safer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sentrix Global Technologies — AI-Powered Safety Intelligence Ecosystem",
  description: SITE_DESC,
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
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

// Every URL/@id below is the same origin (SITE_URL) — previously this mixed
// three different domain spellings, which meant the Organization's @id
// didn't even resolve consistently with its own url/logo/email fields, and
// broke the WebSite entity's publisher reference. Now they all agree.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_LEGAL_NAME,
      alternateName: "Sentrix",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo.svg`,
      description:
        "AI-powered Safety Intelligence Ecosystem unifying AI surveillance, mobility, emergency response, fleet and insurance intelligence.",
      email: EMAILS.hello,
      sameAs: [
        "https://www.linkedin.com/company/sentrix",
        "https://x.com/sentrix",
        "https://www.youtube.com/@sentrix",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAILS.hello,
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Sentrix",
      publisher: { "@id": `${SITE_URL}/#org` },
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
