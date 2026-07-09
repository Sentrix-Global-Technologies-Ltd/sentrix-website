import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "Verified Transportation Network — Security-First Mobility | Sentrix",
  description:
    "More than ride-hailing. Sentrix verifies drivers and vehicles, monitors every journey, and activates emergency response the moment something is wrong.",
  alternates: { canonical: "/verified-transport" },
};

const CAPS = [
  { icon: "shield-check", title: "Verified drivers & vehicles", d: "reveal" },
  { icon: "activity", title: "End-to-end journey monitoring", d: "reveal d1" },
  { icon: "zap", title: "Instant incident escalation", d: "reveal d2" },
  { icon: "bell", title: "Emergency response on demand", d: "reveal d3" },
];

const STEPS = [
  { n: "1", title: "Match", body: "Riders are paired only with drivers and vehicles enrolled in the network.", d: "reveal" },
  { n: "2", title: "Verify", body: "Driver identity and vehicle are confirmed before the journey begins.", d: "reveal d1" },
  { n: "3", title: "Monitor", body: "The route and trip are tracked in real time for anomalies and unsafe detours.", d: "reveal d2" },
  { n: "4", title: "Respond", body: "Any incident can be escalated immediately to an emergency response team.", d: "reveal d3" },
];

const CHIPS = [
  { icon: "car", label: "Ride operators" },
  { icon: "users", label: "Passengers" },
  { icon: "building", label: "Corporates" },
  { icon: "cap", label: "Schools" },
  { icon: "truck", label: "Logistics" },
];

const TEASERS = [
  { href: "/sentrixgo", icon: "pin", title: "SentrixGo", sub: "Shares live journey monitoring", d: "reveal" },
  { href: "/fleet", icon: "truck", title: "Fleet & Logistics", sub: "Extends verification to whole fleets", d: "reveal d1" },
  { href: "/soc", icon: "grid", title: "Operations Centre", sub: "Monitors journeys & escalations", d: "reveal d2" },
];

export default function VerifiedTransportPage() {
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
              <Link href="/solutions">Solutions</Link> <Icon name="arrow" /> <span>Verified Transport</span>
            </div>
            <div className="sol-info" style={{ marginBottom: 0 }}>
              <span className="badge reveal">
                <Icon name="car" style={{ width: 14, height: 14 }} /> Verified Transportation Network
              </span>
            </div>
            <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5vw,56px)", margin: "14px 0 10px" }}>
              More than ride-hailing. Verified &amp; monitored.
            </h1>
            <p className="reveal d1 text-teal" style={{ fontFamily: "var(--font-display),sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 18 }}>
              Security-first mobility
            </p>
            <p className="lead reveal d2" style={{ marginBottom: 30 }}>
              Trust is the biggest challenge in transport. Sentrix verifies drivers and vehicles,
              monitors every journey, and activates emergency response the moment something is wrong.
            </p>
            <div className="hero-actions reveal d3">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Build trusted transport <Icon name="arrow" />
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
                      <path d="M0 150C100 110 160 190 260 160S400 100 420 130" />
                      <path d="M0 250C100 210 160 290 260 260S400 200 420 230" />
                    </g>
                  </svg>
                  <div className="mock-bar">
                    <span className="dot3"><i /><i /><i /></span>
                    <span className="ttl">DRIVER VERIFICATION</span>
                    <span className="live"><i />SECURED</span>
                  </div>
                  <div className="scene-wrap">
                    <svg className="scene-svg" viewBox="0 0 360 184" role="img" aria-label="A verified vehicle being scanned for identity confirmation">
                      <defs>
                        <linearGradient id="vbody" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#1a2c5e" />
                          <stop offset="1" stopColor="#0b1640" />
                        </linearGradient>
                        <linearGradient id="vscan" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0" stopColor="#6ED8D2" stopOpacity="0" />
                          <stop offset="0.5" stopColor="#6ED8D2" stopOpacity="0.55" />
                          <stop offset="1" stopColor="#6ED8D2" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="156" x2="360" y2="156" stroke="rgba(255,255,255,.16)" strokeWidth="2" />
                      <line x1="0" y1="156" x2="360" y2="156" stroke="#6ED8D2" strokeWidth="2" strokeDasharray="14 16" strokeOpacity="0.4">
                        <animate attributeName="stroke-dashoffset" from="30" to="0" dur="0.8s" repeatCount="indefinite" />
                      </line>
                      <path d="M28 150 Q30 120 60 112 L104 92 Q128 80 168 80 H236 Q272 80 296 104 L322 116 Q336 122 336 150 Z" fill="url(#vbody)" />
                      <path d="M112 92 Q132 82 166 82 H230 Q258 82 278 102 H112 Z" fill="#6ED8D2" opacity="0.8" />
                      <line x1="196" y1="83" x2="196" y2="102" stroke="#0b1640" strokeWidth="3" />
                      <rect x="150" y="138" width="64" height="16" rx="3" fill="#fff" />
                      <text x="182" y="150" textAnchor="middle" fontFamily="var(--font-mono),monospace" fontSize="11" fontWeight="700" fill="#0D1B4C">NG-4471</text>
                      <g>
                        <circle cx="96" cy="156" r="20" fill="#0a1226" stroke="#24406e" strokeWidth="3" />
                        <g>
                          <animateTransform attributeName="transform" type="rotate" from="0 96 156" to="360 96 156" dur="1.3s" repeatCount="indefinite" />
                          <g stroke="#6ED8D2" strokeWidth="2" strokeLinecap="round">
                            <line x1="96" y1="143" x2="96" y2="169" />
                            <line x1="83" y1="156" x2="109" y2="156" />
                          </g>
                        </g>
                        <circle cx="96" cy="156" r="5" fill="#12B5B0" />
                      </g>
                      <g>
                        <circle cx="284" cy="156" r="20" fill="#0a1226" stroke="#24406e" strokeWidth="3" />
                        <g>
                          <animateTransform attributeName="transform" type="rotate" from="0 284 156" to="360 284 156" dur="1.3s" repeatCount="indefinite" />
                          <g stroke="#6ED8D2" strokeWidth="2" strokeLinecap="round">
                            <line x1="284" y1="143" x2="284" y2="169" />
                            <line x1="271" y1="156" x2="297" y2="156" />
                          </g>
                        </g>
                        <circle cx="284" cy="156" r="5" fill="#12B5B0" />
                      </g>
                      <rect x="20" y="40" width="26" height="120" fill="url(#vscan)">
                        <animate attributeName="x" values="20;314;20" dur="3.4s" repeatCount="indefinite" />
                      </rect>
                      <g transform="translate(300,44)">
                        <circle r="9" fill="none" stroke="#16B981" strokeOpacity="0.6">
                          <animate attributeName="r" values="8;20" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.6;0" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                        <circle r="14" fill="#16B981" />
                        <path d="M-6 0 L-2 5 L7 -6" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                  <div className="scene-foot">
                    <div className="scene-stat"><div className="k">Driver</div><div className="v">Verified</div></div>
                    <div className="scene-stat"><div className="k">Vehicle</div><div className="v">Matched</div></div>
                    <div className="scene-stat"><div className="k">Journey</div><div className="v">Monitored</div></div>
                  </div>
                </div>
              </div>
              <div className="fcard f1">
                <div className="fc-top">
                  <span className="fc-ic ok"><Icon name="shield-check" /></span>
                  <span className="fc-ttl">Identity confirmed</span>
                </div>
                <div className="fc-body">Driver &amp; vehicle match on file.</div>
              </div>
              <div className="fcard f0">
                <div className="fc-top">
                  <span className="fc-ic teal"><Icon name="activity" /></span>
                  <span className="fc-ttl">Journey monitored</span>
                </div>
                <div className="fc-body">Live route tracked end to end.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(30px,4vw,56px)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">What it delivers</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Safety built into every ride.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>Trust, verified end to end.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>For operators and passengers alike.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>Verification that powers the whole ecosystem.</h2>
            <p className="lead">
              Verified drivers, vehicles and journeys are trusted signals other Sentrix platforms
              build on — from personal safety to fleet oversight, insurance risk and central command.
            </p>
            <div className="ecolink-flow reveal d1">
              <b>Verified Transport</b> <Icon name="arrow" /> verified identities &amp; journeys{" "}
              <Icon name="arrow" /> the wider ecosystem
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
        title="Make every journey a verified one."
        body="See how a security-first transport network protects your passengers."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/visionguard", label: "Next: VisionGuard", variant: "dark" },
        ]}
      />
    </>
  );
}
