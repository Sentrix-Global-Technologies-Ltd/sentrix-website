import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "Insurance Intelligence — Risk & Claims Analytics | Sentrix",
  description:
    "Behavioural data and analytics that help insurers analyse driving behaviour, validate claims, reconstruct incidents, assess risk and detect fraud in real time — reducing losses and improving trust.",
  alternates: { canonical: "/insurance" },
};

const CAPS = [
  { icon: "activity", title: "Driving-behaviour & risk scoring", d: "reveal" },
  { icon: "search", title: "Incident reconstruction & claim validation", d: "reveal d1" },
  { icon: "shield-check", title: "Real-time fraud detection", d: "reveal d2" },
  { icon: "chart", title: "Lower losses, higher customer trust", d: "reveal d3" },
];

const STEPS = [
  { n: "1", title: "Capture", body: "Telematics and incident data are collected from connected vehicles and devices.", d: "reveal" },
  { n: "2", title: "Score", body: "Driving behaviour is translated into clear, defensible risk profiles.", d: "reveal d1" },
  { n: "3", title: "Validate", body: "Claims are checked against reconstructed incidents to confirm what happened.", d: "reveal d2" },
  { n: "4", title: "Detect", body: "Anomalies surface fraudulent activity before it becomes a payout.", d: "reveal d3" },
];

const CHIPS = [
  { icon: "scale", label: "Insurers" },
  { icon: "users", label: "Brokers" },
  { icon: "truck", label: "Fleet underwriters" },
  { icon: "bank", label: "Reinsurers" },
];

const TEASERS = [
  { href: "/fleet", icon: "truck", title: "Fleet & Logistics", sub: "Supplies driving-behaviour data", d: "reveal" },
  { href: "/verified-transport", icon: "car", title: "Verified Transport", sub: "Adds verified journey records", d: "reveal d1" },
  { href: "/visionguard", icon: "eye", title: "VisionGuard", sub: "Reconstructs incidents from video", d: "reveal d2" },
];

export default function InsurancePage() {
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
              <Link href="/solutions">Solutions</Link> <Icon name="arrow" /> <span>Insurance Intelligence</span>
            </div>
            <div className="sol-info" style={{ marginBottom: 0 }}>
              <span className="badge reveal">
                <Icon name="scale" style={{ width: 14, height: 14 }} /> Insurance Intelligence
              </span>
            </div>
            <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5vw,56px)", margin: "14px 0 10px" }}>
              Reduce fraud. Reconstruct the truth.
            </h1>
            <p className="reveal d1 text-teal" style={{ fontFamily: "var(--font-display),sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 18 }}>
              Risk &amp; claims analytics
            </p>
            <p className="lead reveal d2" style={{ marginBottom: 30 }}>
              Give insurers the behavioural data and analytics they&apos;ve been missing — to
              validate claims, reconstruct incidents, assess risk and detect fraudulent activity in
              real time.
            </p>
            <div className="hero-actions reveal d3">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Cut fraud &amp; loss <Icon name="arrow" />
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
                    </g>
                  </svg>
                  <div className="mock-bar">
                    <span className="dot3"><i /><i /><i /></span>
                    <span className="ttl">RISK ANALYTICS</span>
                    <span className="live"><i />SCORING</span>
                  </div>
                  <div className="scene-wrap">
                    <svg className="scene-svg" viewBox="0 0 360 210" role="img" aria-label="Animated risk-score gauge reading low risk">
                      <path d="M84 150 A96 96 0 0 1 132 67" fill="none" stroke="#16B981" strokeWidth="14" strokeLinecap="round" />
                      <path d="M132 67 A96 96 0 0 1 228 67" fill="none" stroke="#F5A524" strokeWidth="14" strokeLinecap="round" />
                      <path d="M228 67 A96 96 0 0 1 276 150" fill="none" stroke="#F25C5C" strokeWidth="14" strokeLinecap="round" />
                      <g>
                        <animateTransform attributeName="transform" type="rotate" values="62 180 150; -52 180 150; -48 180 150; -50 180 150" keyTimes="0;0.6;0.82;1" dur="3s" repeatCount="indefinite" />
                        <line x1="180" y1="150" x2="180" y2="78" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
                        <circle cx="180" cy="78" r="4" fill="#6ED8D2" />
                      </g>
                      <circle cx="180" cy="150" r="9" fill="#0b1640" stroke="#6ED8D2" strokeWidth="2" />
                      <text x="180" y="184" textAnchor="middle" fontFamily="var(--font-display),sans-serif" fontWeight="800" fontSize="34" fill="#fff">
                        A&#8722;
                      </text>
                      <text x="180" y="202" textAnchor="middle" fontFamily="var(--font-mono),monospace" fontSize="10" letterSpacing="2" fill="#6ED8D2">
                        LOW RISK
                      </text>
                      <text x="74" y="168" textAnchor="middle" fontFamily="var(--font-mono),monospace" fontSize="9" fill="#9FB0CE">LOW</text>
                      <text x="286" y="168" textAnchor="middle" fontFamily="var(--font-mono),monospace" fontSize="9" fill="#9FB0CE">HIGH</text>
                    </svg>
                  </div>
                  <div className="scene-foot">
                    <div className="scene-stat"><div className="k">Claims OK</div><div className="v">96<small>%</small></div></div>
                    <div className="scene-stat"><div className="k">Fraud flags</div><div className="v" style={{ color: "#FBBF24" }}>7</div></div>
                    <div className="scene-stat"><div className="k">Loss ↓</div><div className="v">31<small>%</small></div></div>
                  </div>
                </div>
              </div>
              <div className="fcard f1">
                <div className="fc-top">
                  <span className="fc-ic warn"><Icon name="search" /></span>
                  <span className="fc-ttl">Fraud flagged</span>
                </div>
                <div className="fc-body">Anomaly in claim #4471 — review.</div>
              </div>
              <div className="fcard f0">
                <div className="fc-top">
                  <span className="fc-ic ok"><Icon name="check-circle" /></span>
                  <span className="fc-ttl">Claim validated</span>
                </div>
                <div className="fc-body">Incident reconstructed &amp; confirmed.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(30px,4vw,56px)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">What it delivers</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Better decisions, fewer losses.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>From raw data to defensible decisions.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>For the people who price risk.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>Better data from across the ecosystem.</h2>
            <p className="lead">
              Insurance Intelligence is only as good as its inputs. Sentrix feeds it richer, verified
              signals — driving behaviour from fleets, verified journeys, and camera-based incident
              reconstruction.
            </p>
            <div className="ecolink-flow reveal d1">
              Fleet · Transport · VisionGuard <Icon name="arrow" /> <b>Insurance Intelligence</b>{" "}
              <Icon name="arrow" /> fewer losses
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
        title="Turn data into fewer losses."
        body="See how Insurance Intelligence sharpens every decision."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/fleet", label: "Next: Fleet & Logistics", variant: "dark" },
        ]}
      />
    </>
  );
}
