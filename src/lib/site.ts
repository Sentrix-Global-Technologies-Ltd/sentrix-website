/**
 * Single source of truth for the site's own domain and contact emails.
 * Previously each page/component hardcoded its own copy, and they'd drifted
 * into three different spellings (sentrix.global, sentrixtechglobal.com,
 * and the real registered domain). Every reference should import from here
 * — never hardcode the domain or an @sentrixglobaltech.com address again.
 */
export const SITE_URL = "https://sentrixglobaltech.com";
export const SITE_NAME = "Sentrix Global Technologies";
export const SITE_LEGAL_NAME = "Sentrix Global Technologies Limited";

export const EMAILS = {
  hello: "hello@sentrixglobaltech.com",
  careers: "careers@sentrixglobaltech.com",
  security: "security@sentrixglobaltech.com",
  investors: "investors@sentrixglobaltech.com",
  legal: "legal@sentrixglobaltech.com",
  privacy: "privacy@sentrixglobaltech.com",
} as const;

/**
 * The backend API's base URL. Defaults to production (api.sentrixglobaltech.com);
 * override with NEXT_PUBLIC_API_BASE_URL for local development against a
 * locally running sentrix-backend (see .env.local.example).
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.sentrixglobaltech.com/api/v1";

export const SOLUTION_PAGES = [
  "/solutions",
  "/sentrixgo",
  "/verified-transport",
  "/visionguard",
  "/soc",
  "/insurance",
  "/fleet",
];

export const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { href: "/sentrixgo", label: "Personal Safety" },
      { href: "/verified-transport", label: "Verified Transport" },
      { href: "/visionguard", label: "AI Surveillance" },
      { href: "/soc", label: "Operations Centre" },
      { href: "/insurance", label: "Insurance Intelligence" },
      { href: "/fleet", label: "Fleet & Logistics" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/industries", label: "Industries" },
      { href: "/partners", label: "Partnerships" },
      { href: "/investors", label: "Investors" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/faq", label: "FAQ" },
      { href: "/security", label: "Security & Trust" },
      { href: "/contact", label: "Request a Demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/security", label: "Trust Center" },
    ],
  },
];
