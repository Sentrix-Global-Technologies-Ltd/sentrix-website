import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "Industries We Serve — Government, Transport, Insurance & More | Sentrix",
  description:
    "Sentrix safety intelligence adapts to every sector — government, law enforcement, transport, logistics, insurance, education, healthcare, smart cities and critical infrastructure.",
  alternates: { canonical: "/industries" },
};

const INDUSTRIES = [
  { icon: "shield", label: "Government Agencies", d: "reveal" },
  { icon: "lock", label: "Security Organisations", d: "reveal" },
  { icon: "target", label: "Law Enforcement", d: "reveal" },
  { icon: "car", label: "Transportation", d: "reveal d1" },
  { icon: "truck", label: "Logistics Providers", d: "reveal d1" },
  { icon: "scale", label: "Insurance Companies", d: "reveal d1" },
  { icon: "cap", label: "Universities", d: "reveal d2" },
  { icon: "cap", label: "Schools", d: "reveal d2" },
  { icon: "cross", label: "Healthcare & Hospitals", d: "reveal d2" },
  { icon: "building", label: "Worship Centres", d: "reveal" },
  { icon: "building", label: "Corporate Organisations", d: "reveal" },
  { icon: "bank", label: "Financial Institutions", d: "reveal" },
  { icon: "home", label: "Real Estate & Estates", d: "reveal d1" },
  { icon: "hotel", label: "Hotels & Hospitality", d: "reveal d1" },
  { icon: "city", label: "Smart City Projects", d: "reveal d1" },
  { icon: "server", label: "Critical Infrastructure", d: "reveal d2" },
];

const NODES = [
  { cx: 180, cy: 180, label: "LONDON", ty: 160, begin: "0.2s" },
  { cx: 320, cy: 330, label: "LAGOS", ty: 354, begin: "1.0s" },
  { cx: 470, cy: 150, label: "DUBAI", ty: 130, begin: "1.7s" },
  { cx: 760, cy: 200, label: "MUMBAI", ty: 180, begin: "0.6s" },
  { cx: 920, cy: 320, label: "SINGAPORE", ty: 344, begin: "2.1s" },
  { cx: 1050, cy: 160, label: "TOKYO", ty: 140, begin: "1.4s" },
];

const ARCS = [
  "M600 265 Q390 150 180 180",
  "M600 265 Q460 320 320 330",
  "M600 265 Q535 160 470 150",
  "M600 265 Q680 175 760 200",
  "M600 265 Q760 250 920 320",
  "M600 265 Q825 150 1050 160",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero crumb="Industries">
        <span className="eyebrow reveal">Industries we serve</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.4vw,58px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
          One goal across every sector — <span className="text-grad">stay safer.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "60ch" }}>
          Wherever people, assets and operations need protecting, Sentrix adapts to the mission,
          helping organisations stay safer, become more intelligent, and respond more effectively.
        </p>
      </PageHero>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        <div className="container-x">
          <div className="ind-grid">
            {INDUSTRIES.map((it, i) => (
              <div key={it.label + i} className={"ind-item " + it.d}>
                <span className="ic">
                  <Icon name={it.icon} />
                </span>
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global network */}
      <section className="section netmap" id="network">
        <div className="grain-local" aria-hidden="true" />
        <div className="container-x">
          <div className="section-head reveal" style={{ maxWidth: 740 }}>
            <span className="eyebrow on-dark">Global by design</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              One safety network, <span className="text-grad">connecting the world.</span>
            </h2>
            <p className="lead">
              From a single journey to national infrastructure, Sentrix scales across cities, borders
              and continents, coordinating intelligence wherever safety matters.
            </p>
          </div>
          <div className="netmap-wrap reveal d1">
            <svg
              className="netmap-svg"
              viewBox="0 0 1200 520"
              role="img"
              aria-label="A stylised global map showing Sentrix intelligence nodes connected across major cities worldwide."
            >
              <defs>
                <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#6ED8D2" stopOpacity="0.05" />
                  <stop offset="0.5" stopColor="#6ED8D2" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#12B5B0" stopOpacity="0.05" />
                </linearGradient>
                <pattern id="dotGrid" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.3" className="netmap-dot" />
                </pattern>
                <radialGradient id="mapFade" cx="50%" cy="48%" r="60%">
                  <stop offset="0" stopColor="#fff" stopOpacity="1" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <mask id="mapMask">
                  <rect width="1200" height="520" fill="url(#mapFade)" />
                </mask>
              </defs>
              <rect width="1200" height="520" fill="url(#dotGrid)" mask="url(#mapMask)" />
              <g stroke="#6ED8D2" strokeOpacity="0.07" fill="none">
                <path d="M0 175 Q600 135 1200 175" />
                <path d="M0 265 H1200" />
                <path d="M0 355 Q600 395 1200 355" />
                <path d="M300 40 Q260 260 300 480" />
                <path d="M600 30 V490" />
                <path d="M900 40 Q940 260 900 480" />
              </g>
              <g className="netmap-arcs" fill="none">
                {ARCS.map((d, i) => (
                  <path key={i} className="netmap-arc" d={d} />
                ))}
              </g>
              <g fontFamily="var(--font-mono), monospace" fontSize="12" fill="#9FB0CE">
                {NODES.map((n) => (
                  <g key={n.label}>
                    <circle cx={n.cx} cy={n.cy} r="6" fill="none" stroke="#6ED8D2" strokeOpacity="0.5">
                      <animate attributeName="r" values="6;20" dur="3.4s" begin={n.begin} repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" values="0.5;0" dur="3.4s" begin={n.begin} repeatCount="indefinite" />
                    </circle>
                    <circle cx={n.cx} cy={n.cy} r="4.5" className="netmap-node" />
                    <text x={n.cx} y={n.ty} textAnchor="middle">
                      {n.label}
                    </text>
                  </g>
                ))}
                <circle cx="600" cy="265" r="9" fill="#12B5B0" stroke="#fff" strokeWidth="2" />
                <circle cx="600" cy="265" r="9" fill="none" stroke="#6ED8D2">
                  <animate attributeName="r" values="9;30" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="600" y="298" textAnchor="middle" fill="#6ED8D2" fontWeight="600">
                  SENTRIX CORE
                </text>
              </g>
            </svg>
            <div className="netmap-legend">
              <span className="lg">
                <i style={{ background: "#12B5B0" }} /> Intelligence core
              </span>
              <span className="lg">
                <i style={{ background: "#6ED8D2" }} /> Connected node
              </span>
              <span className="lg">
                <i style={{ background: "rgba(110,216,210,.35)" }} /> Coverage field
              </span>
            </div>
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="Your sector, your mission"
        title="Let's make your organisation safer."
        body="Tell us your industry and risk profile, we'll tailor Sentrix to fit."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/solutions", label: "Explore Solutions", variant: "dark" },
        ]}
      />
    </>
  );
}
