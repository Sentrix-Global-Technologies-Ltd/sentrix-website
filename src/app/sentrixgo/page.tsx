import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "SentrixGo — Personal Safety Intelligence | Sentrix",
  description:
    "SentrixGo makes every journey smarter and safer with intelligent journey monitoring, route analysis, emergency alerts and trusted-contact systems for individuals, families and commuters.",
  alternates: { canonical: "/sentrixgo" },
};

const CAPS = [
  { icon: "route", title: "Live journey monitoring & route analysis", d: "reveal" },
  { icon: "bell", title: "One-tap emergency alerts", d: "reveal d1" },
  { icon: "users", title: "Trusted-contact safety network", d: "reveal d2" },
  { icon: "pin", title: "Real-time location intelligence", d: "reveal d3" },
];

const STEPS = [
  { n: "1", title: "Start your journey", body: "Share a trip and your route is analysed for risk in real time as you move.", d: "reveal" },
  { n: "2", title: "Stay monitored", body: "Trusted contacts can follow your movement and receive safety notifications.", d: "reveal d1" },
  { n: "3", title: "Escalate instantly", body: "A single tap raises an alert and shares your live location when seconds matter.", d: "reveal d2" },
  { n: "4", title: "Arrive safely", body: "Confirmation closes the loop — everyone who matters knows you made it.", d: "reveal d3" },
];

const CHIPS = [
  { icon: "users", label: "Families" },
  { icon: "cap", label: "Students" },
  { icon: "car", label: "Commuters" },
  { icon: "globe", label: "Travellers" },
  { icon: "building", label: "Lone workers" },
];

const TEASERS = [
  { href: "/verified-transport", icon: "car", title: "Verified Transport", sub: "Shares verified, monitored journeys", d: "reveal" },
  { href: "/soc", icon: "grid", title: "Operations Centre", sub: "Escalates alerts to a command team", d: "reveal d1" },
  { href: "/visionguard", icon: "eye", title: "VisionGuard", sub: "Adds situational awareness on-route", d: "reveal d2" },
];

export default function SentrixGoPage() {
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
              <Link href="/solutions">Solutions</Link> <Icon name="arrow" /> <span>SentrixGo</span>
            </div>
            <div className="sol-info" style={{ marginBottom: 0 }}>
              <span className="badge reveal">
                <Icon name="pin" style={{ width: 14, height: 14 }} /> Personal Safety Intelligence
              </span>
            </div>
            <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5vw,56px)", margin: "14px 0 10px" }}>
              Every journey, smarter and safer.
            </h1>
            <p className="reveal d1 text-teal" style={{ fontFamily: "var(--font-display),sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 18 }}>
              Powered by SentrixGo
            </p>
            <p className="lead reveal d2" style={{ marginBottom: 30 }}>
              SentrixGo helps individuals, families, students, professionals and commuters stay safer
              wherever they go — with intelligent monitoring that protects every movement, day or
              night.
            </p>
            <div className="hero-actions reveal d3">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Protect your journeys <Icon name="arrow" />
              </Link>
              <Link href="/solutions" className="btn btn-ghost btn-lg">
                <Icon name="arrow-left" /> All solutions
              </Link>
            </div>
            <div className="reveal d4" style={{ marginTop: 22 }}>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted-2)", marginBottom: 11 }}>
                Get the SentrixGo app
              </div>
              <div className="store-badges">
                <a className="store-badge" href="https://www.apple.com/app-store/" target="_blank" rel="noopener" aria-label="Download SentrixGo on the App Store">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 12.04c-.03-2.6 2.12-3.84 2.22-3.9-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.75.03-3.35 1.02-4.25 2.58-1.81 3.15-.46 7.81 1.3 10.37.86 1.25 1.89 2.66 3.23 2.61 1.29-.05 1.79-.84 3.35-.84 1.56 0 2.01.84 3.39.81 1.4-.02 2.28-1.27 3.14-2.53.99-1.45 1.39-2.86 1.41-2.93-.03-.01-2.72-1.05-2.75-4.16zM14.6 4.7c.71-.87 1.19-2.07 1.06-3.27-1.03.04-2.27.69-3.01 1.55-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.59 3.03-1.46z" />
                  </svg>
                  <span className="sb-txt">
                    <span className="sb-small">Download on the</span>
                    <span className="sb-big">App Store</span>
                  </span>
                </a>
                <a className="store-badge" href="https://play.google.com/store/apps" target="_blank" rel="noopener" aria-label="Get SentrixGo on Google Play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 2.4v19.2c0 .5.55.8.97.54l16-9.6a.63.63 0 0 0 0-1.08l-16-9.6A.63.63 0 0 0 4 2.4z" />
                  </svg>
                  <span className="sb-txt">
                    <span className="sb-small">Get it on</span>
                    <span className="sb-big">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal d2">
            <div className="phone-stage">
              <div className="phone tilt" data-tilt="4">
                <span className="side-btn a" />
                <span className="side-btn b" />
                <span className="side-btn c" />
                <div className="phone-screen">
                  <div className="ph-island" />
                  <div className="ph-status">
                    <span>9:41</span>
                    <span className="ph-sig">
                      <svg viewBox="0 0 18 12" fill="currentColor">
                        <rect x="0" y="7" width="3" height="5" rx="1" />
                        <rect x="4.5" y="5" width="3" height="7" rx="1" />
                        <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
                        <rect x="13.5" y="0" width="3" height="12" rx="1" />
                      </svg>
                      <svg viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M2 6a14 14 0 0 1 20 0" />
                        <path d="M5 9.5a9 9 0 0 1 14 0" />
                        <path d="M8.5 13a4 4 0 0 1 7 0" />
                      </svg>
                      <svg viewBox="0 0 26 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                        <rect x="1" y="2" width="20" height="10" rx="2.5" />
                        <rect x="3" y="4" width="14" height="6" rx="1" fill="currentColor" stroke="none" />
                        <rect x="22.4" y="5" width="2" height="4" rx="1" fill="currentColor" stroke="none" />
                      </svg>
                    </span>
                  </div>
                  <div className="ph-app">
                    <div className="ph-greet">
                      <div className="ph-hi">Good morning, Tunde</div>
                      <div className="ph-q">Where are you headed?</div>
                    </div>
                    <div className="ph-checkin">
                      <div className="ph-checkin-top">
                        <span className="l">
                          <Icon name="pin" /> Active Check-in
                        </span>
                        <span className="ph-ontrip">
                          <i /> On Trip
                        </span>
                      </div>
                      <div className="ph-loc">Computer Village, Ikeja</div>
                      <div className="ph-sub">Traveling on Allen Avenue</div>
                      <div className="ph-ago">12 min ago</div>
                    </div>
                    <div className="ph-sec-title">Sentrix is watching for</div>
                    <div className="ph-watch">
                      <div className="ph-row">
                        <span className="ph-ic">
                          <Icon name="car" />
                        </span>
                        <div className="ph-tx">
                          <b>Traffic build-up</b>
                          <small>Monitoring real-time flow</small>
                        </div>
                        <i className="ph-dot" />
                      </div>
                      <div className="ph-row">
                        <span className="ph-ic warn">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3 2 20h20L12 3z" />
                            <path d="M12 10v4M12 17h.01" />
                          </svg>
                        </span>
                        <div className="ph-tx">
                          <b>Accidents &amp; incidents</b>
                          <small>Scanning your route</small>
                        </div>
                        <i className="ph-dot" />
                      </div>
                      <div className="ph-row">
                        <span className="ph-ic">
                          <Icon name="shield" />
                        </span>
                        <div className="ph-tx">
                          <b>Suspicious activity</b>
                          <small>Checking nearby area</small>
                        </div>
                        <i className="ph-dot" />
                      </div>
                    </div>
                    <div className="ph-sec-title">Recommended for you</div>
                    <div className="ph-rec">
                      <div className="ph-rec-body">
                        <b>Heavy traffic ahead</b>
                        <small>Slow traffic reported on Allen Ave. Consider alternate route via Opebi Road.</small>
                        <span className="ph-rec-cta">View alternate routes</span>
                      </div>
                      <div className="ph-rec-map">
                        <svg viewBox="0 0 64 90" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                          <rect width="64" height="90" fill="#dbe7ea" />
                          <path d="M-5 58 Q30 38 70 68" fill="none" stroke="#b9ccd1" strokeWidth="6" />
                          <path d="M12 -5 Q24 42 14 95" fill="none" stroke="#cdd9dd" strokeWidth="5" />
                          <path d="M4 50 Q34 34 60 54" fill="none" stroke="#12B5B0" strokeWidth="3" strokeDasharray="4 4" />
                          <circle cx="48" cy="44" r="5" fill="#12B5B0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="ph-nav">
                    <span className="on">
                      <Icon name="home" />
                      Home
                    </span>
                    <span>
                      <Icon name="route" />
                      Trips
                    </span>
                    <span>
                      <Icon name="bell" />
                      Alerts
                    </span>
                    <span>
                      <Icon name="users" />
                      Profile
                    </span>
                  </div>
                </div>
              </div>
              <div className="fcard f1">
                <div className="fc-top">
                  <span className="fc-ic warn">
                    <Icon name="shield" />
                  </span>
                  <span className="fc-ttl">Unusual event detected</span>
                </div>
                <div className="fc-body">Police checkpoint reported ahead. Stay alert.</div>
                <div className="fc-time">2 min ago</div>
              </div>
              <div className="fcard f2">
                <div className="fc-top">
                  <span className="fc-ic teal">
                    <Icon name="zap" />
                  </span>
                  <span className="fc-ttl">Safety action recommended</span>
                </div>
                <div className="fc-body">Share your trip status with a trusted contact.</div>
                <span className="fc-btn">Share trip</span>
              </div>
              <div className="fcard f0">
                <div className="fc-top">
                  <span className="fc-ic ok">
                    <Icon name="shield-check" />
                  </span>
                  <span className="fc-ttl">Trip is on track</span>
                </div>
                <div className="fc-body">You&apos;re driving safely. Keep it up!</div>
                <div className="fc-time">8 min ago</div>
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
              Confidence on every trip.
            </h2>
          </div>
          <div className="cap-grid">
            {CAPS.map((c) => (
              <div key={c.title} className={"cap-item " + c.d}>
                <span className="ic">
                  <Icon name={c.icon} />
                </span>
                <div>
                  <h4>{c.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Protection that travels with you.
            </h2>
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
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Made for everyday safety.
            </h2>
          </div>
          <div className="chips-row reveal d1">
            {CHIPS.map((c) => (
              <span key={c.label} className="ch">
                <Icon name={c.icon} /> {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="connected" style={{ background: "linear-gradient(180deg,var(--bg-2) 0%, var(--bg) 100%)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Connected ecosystem</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              SentrixGo is one piece of the picture.
            </h2>
            <p className="lead">
              A personal-safety signal rarely stays personal. Every monitored journey and alert can
              flow into the wider Sentrix ecosystem — turning one person&apos;s situation into a
              coordinated, verified, monitored response.
            </p>
            <div className="ecolink-flow reveal d1">
              <b>SentrixGo</b> <Icon name="arrow" /> Security Operations Centre <Icon name="arrow" />{" "}
              coordinated response
            </div>
          </div>
          <div className="teaser-grid">
            {TEASERS.map((t) => (
              <Link key={t.title} className={"teaser " + t.d} href={t.href}>
                <span className="ic">
                  <Icon name={t.icon} />
                </span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.sub}</p>
                </div>
                <span className="arr">
                  <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="Get started"
        title="Bring intelligent safety to every journey."
        body="See how SentrixGo protects the people you care about."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/verified-transport", label: "Next: Verified Transport", variant: "dark" },
        ]}
      />
    </>
  );
}
