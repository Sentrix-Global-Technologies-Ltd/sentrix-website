import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "VisionGuard — AI Surveillance & Monitoring | Sentrix",
  description:
    "VisionGuard turns the cameras you already own into intelligent systems that detect threats, recognise behaviour, monitor crowds and raise real-time alerts — across CCTV, IP cameras, dashcams and bodycams.",
  alternates: { canonical: "/visionguard" },
};

const CAPS = [
  { icon: "eye", title: "Works with CCTV, IP cameras, dashcams & bodycams", d: "reveal" },
  { icon: "shield", title: "Detects violence, weapons & suspicious activity", d: "reveal d1" },
  { icon: "users", title: "Crowd & movement-pattern analysis", d: "reveal d2" },
  { icon: "zap", title: "Real-time alerts to the right people", d: "reveal d3" },
];

const STEPS = [
  { n: "1", title: "Connect", body: "VisionGuard plugs into your existing camera feeds — no rip-and-replace.", d: "reveal" },
  { n: "2", title: "Analyse", body: "AI continuously interprets behaviour, objects and movement across every feed.", d: "reveal d1" },
  { n: "3", title: "Detect", body: "Threats, anomalies and unusual patterns are surfaced as they form.", d: "reveal d2" },
  { n: "4", title: "Alert", body: "Real-time notifications reach your team so they can act before escalation.", d: "reveal d3" },
];

const CHIPS = [
  { icon: "home", label: "Estates" },
  { icon: "cap", label: "Campuses" },
  { icon: "building", label: "Worship centres" },
  { icon: "cross", label: "Hospitals" },
  { icon: "server", label: "Critical infrastructure" },
];

const TEASERS = [
  { href: "/soc", icon: "grid", title: "Operations Centre", sub: "Streams alerts into one dashboard", d: "reveal" },
  { href: "/insurance", icon: "scale", title: "Insurance Intelligence", sub: "Reconstructs incidents from footage", d: "reveal d1" },
  { href: "/fleet", icon: "truck", title: "Fleet & Logistics", sub: "Adds visual context to vehicles", d: "reveal d2" },
];

export default function VisionGuardPage() {
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
              <Link href="/solutions">Solutions</Link> <Icon name="arrow" /> <span>VisionGuard</span>
            </div>
            <div className="sol-info" style={{ marginBottom: 0 }}>
              <span className="badge reveal">
                <Icon name="eye" style={{ width: 14, height: 14 }} /> AI Surveillance &amp; Monitoring
              </span>
            </div>
            <h1 className="reveal d1" style={{ fontSize: "clamp(32px,4.6vw,52px)", margin: "14px 0 10px" }}>
              You don&apos;t need more cameras. You need smarter ones.
            </h1>
            <p className="reveal d1 text-teal" style={{ fontFamily: "var(--font-display),sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 18 }}>
              VisionGuard
            </p>
            <p className="lead reveal d2" style={{ marginBottom: 30 }}>
              Most cameras record incidents instead of preventing them. VisionGuard transforms your
              existing infrastructure into intelligent surveillance that identifies threats and
              raises alerts in real time.
            </p>
            <div className="hero-actions reveal d3">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Upgrade your cameras <Icon name="arrow" />
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
                  <div className="mock-bar">
                    <span className="dot3"><i /><i /><i /></span>
                    <span className="ttl">VISIONGUARD · CAM-07</span>
                    <span className="live"><i />ANALYSING</span>
                  </div>
                  <div className="scene-wrap">
                    <svg className="scene-svg" viewBox="0 0 360 210" role="img" aria-label="Live AI camera feed detecting people and an anomaly">
                      <defs>
                        <linearGradient id="feed" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#0b1733" />
                          <stop offset="1" stopColor="#06101f" />
                        </linearGradient>
                      </defs>
                      <rect x="6" y="6" width="348" height="198" rx="10" fill="url(#feed)" />
                      <g stroke="#6ED8D2" strokeOpacity="0.07">
                        <line x1="6" y1="150" x2="354" y2="150" />
                        <line x1="120" y1="150" x2="60" y2="204" />
                        <line x1="240" y1="150" x2="300" y2="204" />
                        <line x1="180" y1="150" x2="180" y2="204" />
                      </g>
                      <g fill="#16233f">
                        <circle cx="78" cy="96" r="12" />
                        <rect x="65" y="109" width="26" height="50" rx="12" />
                      </g>
                      <g fill="#16233f">
                        <circle cx="182" cy="104" r="11" />
                        <rect x="170" y="116" width="24" height="46" rx="11" />
                      </g>
                      <g fill="#2a1620">
                        <circle cx="286" cy="100" r="12" />
                        <rect x="273" y="113" width="26" height="50" rx="12" />
                      </g>
                      <g fill="none" stroke="#16B981" strokeWidth="2.4">
                        <rect x="58" y="80" width="40" height="86" rx="4" />
                      </g>
                      <text x="58" y="74" fill="#6ED8D2" fontSize="10" fontFamily="monospace">person 0.98</text>
                      <g fill="none" stroke="#16B981" strokeWidth="2.4">
                        <rect x="162" y="90" width="40" height="78" rx="4" />
                      </g>
                      <text x="162" y="84" fill="#6ED8D2" fontSize="10" fontFamily="monospace">person 0.95</text>
                      <g fill="none" stroke="#F25C5C" strokeWidth="2.6">
                        <rect x="266" y="84" width="42" height="84" rx="4">
                          <animate attributeName="opacity" values="1;0.35;1" dur="1.1s" repeatCount="indefinite" />
                        </rect>
                      </g>
                      <text x="266" y="78" fill="#F25C5C" fontSize="10" fontFamily="monospace">anomaly 0.81</text>
                      <rect x="6" y="6" width="348" height="6" fill="#6ED8D2" opacity="0.25">
                        <animate attributeName="y" values="6;198;6" dur="3.6s" repeatCount="indefinite" />
                      </rect>
                      <g stroke="#6ED8D2" strokeWidth="2.5" fill="none" strokeLinecap="round">
                        <path d="M16 30 V16 H30" />
                        <path d="M330 16 H344 V30" />
                        <path d="M344 180 V194 H330" />
                        <path d="M30 194 H16 V180" />
                      </g>
                    </svg>
                  </div>
                  <div className="scene-foot">
                    <div className="scene-stat"><div className="k">Tracked</div><div className="v">12</div></div>
                    <div className="scene-stat"><div className="k">Cameras</div><div className="v">24</div></div>
                    <div className="scene-stat"><div className="k">Alerts</div><div className="v" style={{ color: "#F8A8A8" }}>1</div></div>
                  </div>
                </div>
              </div>
              <div className="fcard f1">
                <div className="fc-top">
                  <span className="fc-ic warn"><Icon name="eye" /></span>
                  <span className="fc-ttl">Anomaly detected</span>
                </div>
                <div className="fc-body">Unusual behaviour flagged · Sector 7.</div>
              </div>
              <div className="fcard f0">
                <div className="fc-top">
                  <span className="fc-ic teal"><Icon name="users" /></span>
                  <span className="fc-ttl">Crowd monitored</span>
                </div>
                <div className="fc-body">Density normal across all zones.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(30px,4vw,56px)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">What it delivers</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Intelligence from infrastructure you already own.
            </h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>From passive footage to active prevention.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>Anywhere cameras already watch.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>Eyes for the entire ecosystem.</h2>
            <p className="lead">
              VisionGuard turns video into structured intelligence — feeding the command centre,
              validating insurance claims and adding visual context to fleet and transport
              operations.
            </p>
            <div className="ecolink-flow reveal d1">
              <b>VisionGuard</b> <Icon name="arrow" /> real-time detections <Icon name="arrow" />{" "}
              Security Operations Centre
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
        title="Make your cameras think."
        body="See VisionGuard turn existing footage into real-time intelligence."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/soc", label: "Next: Operations Centre", variant: "dark" },
        ]}
      />
    </>
  );
}
