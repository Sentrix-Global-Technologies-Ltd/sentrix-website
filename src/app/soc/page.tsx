import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "Security Operations Centre — Unified Command & Control | Sentrix",
  description:
    "A unified command-and-control environment that brings every security data source into one intelligence platform — for governments, universities, corporations and smart cities.",
  alternates: { canonical: "/soc" },
};

const CAPS = [
  { icon: "grid", title: "Monitor multiple locations simultaneously", d: "reveal" },
  { icon: "bell", title: "Manage incidents & coordinate response", d: "reveal d1" },
  { icon: "target", title: "Visualise threats & analyse trends", d: "reveal d2" },
  { icon: "chart", title: "Faster, better security decisions", d: "reveal d3" },
];

const METRICS = [
  { count: "60", suffix: "%", cap: "Faster threat identification", span: true },
  { count: "24", suffix: "/7", cap: "Continuous monitoring & alerts" },
  { count: "100", suffix: "+", cap: "Locations on one dashboard" },
  { count: "1", suffix: "", cap: "Unified intelligence platform" },
];

const STEPS = [
  { n: "1", title: "Aggregate", body: "Cameras, sensors, trackers and alerts feed into a single intelligence layer.", d: "reveal" },
  { n: "2", title: "Monitor", body: "Operators watch every site from one dashboard with live, prioritised alerts.", d: "reveal d1" },
  { n: "3", title: "Coordinate", body: "Incidents are managed and responders directed from the same environment.", d: "reveal d2" },
  { n: "4", title: "Decide", body: "Trends and analytics inform better security decisions over time.", d: "reveal d3" },
];

const CHIPS = [
  { icon: "shield", label: "Governments" },
  { icon: "cap", label: "Universities" },
  { icon: "building", label: "Corporations" },
  { icon: "city", label: "Smart cities" },
  { icon: "target", label: "Security agencies" },
];

const TEASERS = [
  { href: "/visionguard", icon: "eye", title: "VisionGuard", sub: "Feeds live camera intelligence", d: "reveal" },
  { href: "/sentrixgo", icon: "pin", title: "SentrixGo", sub: "Sends personal-safety signals", d: "reveal d1" },
  { href: "/fleet", icon: "truck", title: "Fleet & Logistics", sub: "Streams vehicle & asset telemetry", d: "reveal d2" },
];

export default function SocPage() {
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
              <Link href="/solutions">Solutions</Link> <Icon name="arrow" /> <span>Operations Centre</span>
            </div>
            <div className="sol-info" style={{ marginBottom: 0 }}>
              <span className="badge reveal">
                <Icon name="grid" style={{ width: 14, height: 14 }} /> Security Operations Centre
              </span>
            </div>
            <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5vw,56px)", margin: "14px 0 10px" }}>
              One command view across every location.
            </h1>
            <p className="reveal d1 text-teal" style={{ fontFamily: "var(--font-display),sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 18 }}>
              Unified SOC
            </p>
            <p className="lead reveal d2" style={{ marginBottom: 30 }}>
              For governments, universities, corporations and smart cities — a single
              command-and-control environment that unifies every security data source into one
              intelligence platform.
            </p>
            <div className="hero-actions reveal d3">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Stand up your SOC <Icon name="arrow" />
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
                      <path d="M0 160C100 120 160 200 260 170S400 110 420 140" />
                    </g>
                  </svg>
                  <div className="mock-bar">
                    <span className="dot3"><i /><i /><i /></span>
                    <span className="ttl">COMMAND CENTRE</span>
                    <span className="live"><i />18 SITES</span>
                  </div>
                  <div className="scene-wrap">
                    <svg className="scene-svg" viewBox="0 0 360 200" role="img" aria-label="Security operations command centre video wall">
                      <defs>
                        <radialGradient id="cfade" cx="50%" cy="50%" r="62%">
                          <stop offset="0" stopColor="#fff" stopOpacity="1" />
                          <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                        <mask id="cmask">
                          <rect x="98" y="20" width="164" height="104" fill="url(#cfade)" />
                        </mask>
                      </defs>
                      <polygon points="16,42 88,30 88,120 16,132" fill="#0c1a36" stroke="rgba(110,216,210,.2)" />
                      <g transform="translate(0,0)">
                        <rect x="26" y="96" width="8" height="18" fill="#12B5B0" opacity=".8" />
                        <rect x="38" y="84" width="8" height="30" fill="#12B5B0" opacity=".8" />
                        <rect x="50" y="74" width="8" height="40" fill="#6ED8D2" opacity=".9" />
                        <rect x="62" y="88" width="8" height="26" fill="#12B5B0" opacity=".8" />
                        <polyline points="30,70 44,60 56,66 70,50" fill="none" stroke="#6ED8D2" strokeWidth="2" />
                      </g>
                      <polygon points="272,30 344,42 344,132 272,120" fill="#0c1a36" stroke="rgba(110,216,210,.2)" />
                      <g transform="translate(308,80)">
                        <circle r="30" fill="none" stroke="#6ED8D2" strokeOpacity=".25" />
                        <circle r="18" fill="none" stroke="#6ED8D2" strokeOpacity=".25" />
                        <line x1="-30" y1="0" x2="30" y2="0" stroke="#6ED8D2" strokeOpacity=".15" />
                        <line x1="0" y1="-30" x2="0" y2="30" stroke="#6ED8D2" strokeOpacity=".15" />
                        <path d="M0 0 L0 -30 A30 30 0 0 1 21 -21 Z" fill="#6ED8D2" opacity=".18">
                          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
                        </path>
                      </g>
                      <rect x="96" y="18" width="168" height="108" rx="6" fill="#081428" stroke="rgba(110,216,210,.25)" />
                      <g fill="#6ED8D2" opacity="0.4" mask="url(#cmask)">
                        {[
                          [118, 40], [132, 46], [146, 42], [160, 50], [176, 44], [190, 52], [206, 46], [222, 54], [238, 48],
                          [124, 64], [140, 70], [158, 66], [176, 74], [196, 68], [214, 76], [232, 70],
                          [132, 90], [152, 96], [172, 92], [194, 98], [214, 94],
                        ].map(([cx, cy], i) => (
                          <circle key={i} cx={cx} cy={cy} r="1.3" />
                        ))}
                      </g>
                      <g>
                        <circle cx="150" cy="60" r="3" fill="#6ED8D2" />
                        <circle cx="150" cy="60" r="3" fill="none" stroke="#6ED8D2">
                          <animate attributeName="r" values="3;13" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.7;0" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      <g>
                        <circle cx="210" cy="84" r="3" fill="#F25C5C" />
                        <circle cx="210" cy="84" r="3" fill="none" stroke="#F25C5C">
                          <animate attributeName="r" values="3;13" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.7;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      <g>
                        <circle cx="190" cy="50" r="2.5" fill="#16B981" />
                        <circle cx="190" cy="50" r="2.5" fill="none" stroke="#16B981">
                          <animate attributeName="r" values="2.5;11" dur="2.4s" begin="1.5s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.7;0" dur="2.4s" begin="1.5s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      <ellipse cx="180" cy="168" rx="120" ry="14" fill="#0c1a36" />
                      <rect x="150" y="150" width="60" height="20" rx="3" fill="#0e1f3e" />
                      <circle cx="120" cy="160" r="3" fill="#12B5B0" opacity=".7" />
                      <circle cx="240" cy="160" r="3" fill="#12B5B0" opacity=".7" />
                    </svg>
                  </div>
                  <div className="scene-foot">
                    <div className="scene-stat"><div className="k">Sites</div><div className="v">18</div></div>
                    <div className="scene-stat"><div className="k">Incidents</div><div className="v">3</div></div>
                    <div className="scene-stat"><div className="k">Uptime</div><div className="v">99.9<small>%</small></div></div>
                  </div>
                </div>
              </div>
              <div className="fcard f1">
                <div className="fc-top">
                  <span className="fc-ic warn"><Icon name="bell" /></span>
                  <span className="fc-ttl">Incident escalated</span>
                </div>
                <div className="fc-body">Responders dispatched · Site 12.</div>
              </div>
              <div className="fcard f0">
                <div className="fc-top">
                  <span className="fc-ic ok"><Icon name="grid" /></span>
                  <span className="fc-ttl">All sites online</span>
                </div>
                <div className="fc-body">18 locations on one view.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(30px,4vw,56px)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">What it delivers</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Situational awareness, centralised.</h2>
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

      <section className="section soc">
        <svg className="topo" viewBox="0 0 1200 600" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
          <g strokeOpacity="0.5">
            <path d="M-50 150C200 80 360 240 560 180S900 60 1260 150" />
            <path d="M-50 230C200 160 380 320 580 260S920 140 1260 230" />
            <path d="M-50 330C220 260 400 420 600 360S940 240 1260 330" />
          </g>
        </svg>
        <div className="glow" />
        <div className="container-x">
          <div className="section-head reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow on-dark">At scale</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Greater awareness. Faster response. <span className="text-grad">At national scale.</span>
            </h2>
            <p className="lead">
              When every signal flows into one intelligence platform, decisions get sharper and
              response gets faster — across a building, a campus, or an entire city.
            </p>
          </div>
          <div className="soc-grid">
            {METRICS.map((m, i) => (
              <div key={m.cap} className={"soc-metric reveal spotlight " + (i ? "d" + i + " " : "")}>
                <div className="num" data-count={m.count} data-suffix={m.suffix}>
                  {m.span ? <span></span> : "0"}
                </div>
                <div className="cap">{m.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Many sources, one operating picture.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>Built for large, complex operations.</h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>The Operations Centre is the hub.</h2>
            <p className="lead">
              Every Sentrix platform feeds the SOC. It&apos;s where personal-safety signals, verified
              journeys, camera detections, fleet telemetry and insurance risk converge into one
              operating picture — and where coordinated response begins.
            </p>
            <div className="ecolink-flow reveal d1">
              All platforms <Icon name="arrow" /> <b>Security Operations Centre</b> <Icon name="arrow" />{" "}
              one operating picture
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
        title="See everything. Respond faster."
        body="Let's design a command centre around your operation."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/insurance", label: "Next: Insurance Intelligence", variant: "dark" },
        ]}
      />
    </>
  );
}
