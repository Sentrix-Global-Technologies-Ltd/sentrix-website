import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "Fleet Security & Logistics Monitoring | Sentrix",
  description:
    "Total visibility across your fleet — live vehicle and asset tracking, driver-behaviour and fuel monitoring, route optimisation, geofencing and real-time anomaly alerts.",
  alternates: { canonical: "/fleet" },
};

const CAPS = [
  { icon: "pin", title: "Live vehicle & asset tracking", d: "reveal" },
  { icon: "fuel", title: "Driver-behaviour & fuel monitoring", d: "reveal d1" },
  { icon: "route", title: "Route optimisation & geofencing", d: "reveal d2" },
  { icon: "zap", title: "Real-time anomaly alerts", d: "reveal d3" },
];

const STEPS = [
  { n: "1", title: "Connect", body: "Vehicles and assets join the platform with live location and telemetry.", d: "reveal" },
  { n: "2", title: "Track", body: "Every movement, stop and behaviour is visible from one dashboard.", d: "reveal d1" },
  { n: "3", title: "Optimise", body: "Routes, fuel and driver performance are continuously improved.", d: "reveal d2" },
  { n: "4", title: "Alert", body: "Unusual activity triggers an instant alert so you can act fast.", d: "reveal d3" },
];

const CHIPS = [
  { icon: "truck", label: "Transport companies" },
  { icon: "server", label: "Logistics providers" },
  { icon: "car", label: "Delivery businesses" },
  { icon: "building", label: "Vehicle owners" },
];

const TEASERS = [
  { href: "/soc", icon: "grid", title: "Operations Centre", sub: "Monitors every vehicle live", d: "reveal" },
  { href: "/insurance", icon: "scale", title: "Insurance Intelligence", sub: "Uses behaviour for risk scoring", d: "reveal d1" },
  { href: "/verified-transport", icon: "car", title: "Verified Transport", sub: "Extends verification fleet-wide", d: "reveal d2" },
];

export default function FleetPage() {
  return (
    <>
      <section className="hero page-hero">
        <div className="hero-bg" aria-hidden="true">
          <svg className="topo" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth={1} opacity={0.5}>
            <g strokeOpacity="0.12">
              <path d="M-50 220C200 140 360 300 560 240S900 100 1260 200" />
              <path d="M-50 330C220 250 380 410 580 350S920 210 1260 310" />
              <path d="M-50 440C240 360 420 520 620 460S960 320 1260 420" />
            </g>
          </svg>
          <div className="hero-photo" data-parallax="0.05" />
          <div className="glow-a" data-parallax="0.06" />
          <div className="glow-b" data-parallax="0.1" />
        </div>
        <div className="container-x hero-grid">
          <div className="hero-copy">
            <div className="breadcrumb reveal">
              <Link href="/solutions">Solutions</Link> <Icon name="arrow" /> <span>Fleet &amp; Logistics</span>
            </div>
            <div className="sol-info" style={{ marginBottom: 0 }}>
              <span className="badge reveal">
                <Icon name="truck" style={{ width: 14, height: 14 }} /> Fleet Security &amp; Logistics
              </span>
            </div>
            <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5vw,56px)", margin: "14px 0 10px" }}>
              Total visibility across your fleet.
            </h1>
            <p className="reveal d1 text-teal" style={{ fontFamily: "var(--font-display),sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 18 }}>
              Fleet intelligence
            </p>
            <p className="lead reveal d2" style={{ marginBottom: 30 }}>
              For transport companies, logistics providers and delivery businesses — monitor
              vehicles, analyse driver behaviour, optimise routes and get alerted the instant
              something looks wrong.
            </p>
            <div className="hero-actions reveal d3">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Secure your fleet <Icon name="arrow" />
              </Link>
              <Link href="/solutions" className="btn btn-ghost btn-lg">
                <Icon name="arrow-left" /> All solutions
              </Link>
            </div>
          </div>

          <div className="hero-visual reveal d2">
            <div className="prod-stage">
              <div className="sol-visual tilt" data-tilt="4" style={{ aspectRatio: "4/3.4" }}>
                <div className="mock spotlight">
                  <svg className="topo-mini" viewBox="0 0 400 400" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
                    <g strokeOpacity="0.4">
                      <path d="M0 170C100 130 160 210 260 180S400 120 420 150" />
                      <path d="M0 260C100 220 160 300 260 270S400 210 420 240" />
                    </g>
                  </svg>
                  <div className="mock-bar">
                    <span className="dot3"><i /><i /><i /></span>
                    <span className="ttl">FLEET MONITOR</span>
                    <span className="live"><i />42 ACTIVE</span>
                  </div>
                  <div className="scene-wrap">
                    <svg className="scene-svg" viewBox="0 0 360 190" role="img" aria-label="Live fleet tracking of a delivery truck on a route">
                      <defs>
                        <linearGradient id="trk" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#1ec3bd" />
                          <stop offset="1" stopColor="#0c827e" />
                        </linearGradient>
                        <linearGradient id="cab" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#1a2c5e" />
                          <stop offset="1" stopColor="#0b1640" />
                        </linearGradient>
                      </defs>
                      <path d="M6 150 Q130 64 352 92" fill="none" stroke="#6ED8D2" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="3 6" />
                      <circle cx="352" cy="92" r="4" fill="#6ED8D2" />
                      <line x1="0" y1="160" x2="360" y2="160" stroke="rgba(255,255,255,.16)" strokeWidth="2" />
                      <line x1="0" y1="160" x2="360" y2="160" stroke="#6ED8D2" strokeWidth="2" strokeDasharray="14 16" strokeOpacity="0.45">
                        <animate attributeName="stroke-dashoffset" from="30" to="0" dur="0.6s" repeatCount="indefinite" />
                      </line>
                      <rect x="30" y="60" width="182" height="88" rx="10" fill="url(#trk)" />
                      <rect x="42" y="72" width="42" height="64" rx="5" fill="#ffffff" opacity="0.12" />
                      <g stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5">
                        <line x1="120" y1="64" x2="120" y2="144" />
                        <line x1="162" y1="64" x2="162" y2="144" />
                      </g>
                      <path d="M212 148 V92 Q212 86 218 86 H252 L292 122 V148 Z" fill="url(#cab)" />
                      <path d="M254 92 H274 L290 116 H254 Z" fill="#6ED8D2" opacity="0.85" />
                      <rect x="288" y="126" width="7" height="9" rx="2" fill="#FBBF24" />
                      <g fill="none" stroke="#6ED8D2" strokeLinecap="round" strokeWidth="2.4">
                        <path d="M236 80 a13 13 0 0 1 21 0">
                          <animate attributeName="opacity" values="0;0.85;0" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M231 73 a21 21 0 0 1 31 0">
                          <animate attributeName="opacity" values="0;0.55;0" dur="2s" begin="0.35s" repeatCount="indefinite" />
                        </path>
                      </g>
                      {[
                        { cx: 78, dur: "1.1s" },
                        { cx: 150, dur: "1.1s" },
                        { cx: 256, dur: "1.1s" },
                      ].map((w) => (
                        <g key={w.cx}>
                          <circle cx={w.cx} cy="160" r="20" fill="#0a1226" stroke="#24406e" strokeWidth="3" />
                          <g>
                            <animateTransform attributeName="transform" type="rotate" from={`0 ${w.cx} 160`} to={`360 ${w.cx} 160`} dur={w.dur} repeatCount="indefinite" />
                            <g stroke="#6ED8D2" strokeWidth="2" strokeLinecap="round">
                              <line x1={w.cx} y1="147" x2={w.cx} y2="173" />
                              <line x1={w.cx - 13} y1="160" x2={w.cx + 13} y2="160" />
                            </g>
                          </g>
                          <circle cx={w.cx} cy="160" r="5" fill="#12B5B0" />
                        </g>
                      ))}
                      <g transform="translate(118,28)">
                        <circle r="9" fill="none" stroke="#6ED8D2" strokeOpacity="0.6">
                          <animate attributeName="r" values="7;19" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                        <circle r="8" fill="#12B5B0" stroke="#fff" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                  <div className="scene-foot">
                    <div className="scene-stat"><div className="k">Active</div><div className="v">42</div></div>
                    <div className="scene-stat"><div className="k">On-time</div><div className="v">98<small>%</small></div></div>
                    <div className="scene-stat"><div className="k">Avg speed</div><div className="v">62<small>km/h</small></div></div>
                  </div>
                </div>
              </div>
              <div className="fcard f1">
                <div className="fc-top">
                  <span className="fc-ic teal"><Icon name="route" /></span>
                  <span className="fc-ttl">Route optimised</span>
                </div>
                <div className="fc-body">Faster path found — saves 12 min.</div>
              </div>
              <div className="fcard f0">
                <div className="fc-top">
                  <span className="fc-ic ok"><Icon name="shield-check" /></span>
                  <span className="fc-ttl">Inside geofence</span>
                </div>
                <div className="fc-body">All 42 vehicles within zone.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(30px,4vw,56px)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">What it delivers</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Every vehicle, accounted for.</h2>
          </div>
          <div className="cap-grid">
            {CAPS.map((c) => (
              <div key={c.title} className={"cap-item " + c.d}>
                <span className="ic"><Icon name={c.icon} /></span>
                <div><h4>{c.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Visibility that pays for itself.</h2>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div key={s.n} className={"step " + s.d}>
                <div className="n">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Who it&apos;s for</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>For operations that move.</h2>
          </div>
          <div className="chips-row reveal d1">
            {CHIPS.map((c) => (
              <span key={c.label} className="ch"><Icon name={c.icon} /> {c.label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="connected" style={{ background: "linear-gradient(180deg,var(--bg-2) 0%, var(--bg) 100%)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Connected ecosystem</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Fleet data makes everything smarter.</h2>
            <p className="lead">
              Live vehicle telemetry and driver behaviour don&apos;t just optimise your fleet — they
              enrich the command centre, sharpen insurance risk scoring, and extend verified transport
              at scale.
            </p>
            <div className="ecolink-flow reveal d1">
              <b>Fleet &amp; Logistics</b> <Icon name="arrow" /> telemetry &amp; behaviour{" "}
              <Icon name="arrow" /> SOC · Insurance · Transport
            </div>
          </div>
          <div className="teaser-grid">
            {TEASERS.map((t) => (
              <Link key={t.title} className={"teaser " + t.d} href={t.href}>
                <span className="ic"><Icon name={t.icon} /></span>
                <div><h4>{t.title}</h4><p>{t.sub}</p></div>
                <span className="arr"><Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="Get started"
        title="Take control of your fleet."
        body="See Fleet Intelligence bring order to every route."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/solutions", label: "Back to all solutions", variant: "dark" },
        ]}
      />
    </>
  );
}
