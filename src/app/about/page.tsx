import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "About Sentrix — Building the World's Most Trusted Safety Intelligence Ecosystem",
  description:
    "Sentrix Global Technologies is an AI-powered Safety Intelligence Company on a mission to make every journey, organisation, community and environment safer through intelligent technology.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  { icon: "radar", title: "Advanced Awareness", body: "Real-time intelligence that keeps you ahead of what's happening around you." },
  { icon: "shield-check", title: "Proactive Safety", body: "Predict hazards before they happen — and prevent incidents before they escalate." },
  { icon: "route", title: "Smart Navigation", body: "Reroute, avoid, arrive safe. Intelligence that guides better decisions in the moment." },
  { icon: "cpu", title: "Trusted Technology", body: "Built for real people and serious operations. Backed by data and human oversight." },
];

const METRICS = [
  { count: "8", suffix: "", cap: "Intelligence modules unified" },
  { count: "6", suffix: "", cap: "Flagship safety platforms" },
  { count: "21", suffix: "+", cap: "Industries & sectors served" },
  { count: "24", suffix: "/7", cap: "Real-time monitoring" },
];

const DISCIPLINES = [
  { icon: "cpu", title: "Artificial Intelligence" },
  { icon: "activity", title: "Real-Time Monitoring" },
  { icon: "route", title: "Mobility Intelligence" },
  { icon: "chart", title: "Security Analytics" },
  { icon: "radar", title: "Predictive Detection" },
  { icon: "bell", title: "Emergency Response" },
  { icon: "shield-check", title: "Verification Technology" },
  { icon: "layers", title: "Data Intelligence" },
  { icon: "users", title: "Human Oversight" },
];

const ROADMAP = [
  { ph: "HORIZON 01", icon: "city", title: "Smart City Integrations", body: "Connecting urban infrastructure into one responsive safety fabric." },
  { ph: "HORIZON 02", icon: "network", title: "National Safety Networks", body: "Intelligence shared securely across agencies and regions." },
  { ph: "HORIZON 03", icon: "cpu", title: "AI Command Centres", body: "Autonomous detection and coordination at scale." },
  { ph: "HORIZON 04", icon: "bell", title: "Emergency Ecosystems", body: "Faster, connected response when seconds matter most." },
  { ph: "HORIZON 05", icon: "globe", title: "International Expansion", body: "Bringing safety intelligence to communities worldwide." },
  { ph: "HORIZON 06", icon: "radar", title: "Predictive Risk Systems", body: "Anticipating threats before they ever take shape." },
];

const DELAY = ["reveal", "reveal d1", "reveal d2", "reveal d3"];

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About">
        <div className="about-hero reveal">
          <span className="eyebrow">About Sentrix</span>
          <h1 style={{ fontSize: "clamp(34px,5.4vw,60px)", margin: "18px 0 22px", maxWidth: "18ch" }}>
            A safety intelligence ecosystem for an unpredictable world.
          </h1>
          <p className="lead" style={{ fontSize: "clamp(17px,1.8vw,21px)", maxWidth: "62ch" }}>
            Sentrix Global Technologies Limited is an AI-powered Safety Intelligence Company helping
            people, organisations, communities and governments stay safer,by making security
            intelligent, predictive, connected and proactive.
          </p>
          <p className="about-tagline">&ldquo;Know the road before it knows you.&rdquo;</p>
        </div>
      </PageHero>

      {/* Mission / Vision */}
      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        <div className="container-x">
          <div className="mv-grid">
            <div className="mv-card reveal">
              <span className="icon-box">
                <Icon name="target" />
              </span>
              <span className="mv-tag">Our Mission</span>
              <h2>
                To make every journey, organisation, community and environment safer through
                intelligent technology.
              </h2>
            </div>
            <div className="mv-card dark reveal d1 spotlight">
              <svg className="topo-mini" viewBox="0 0 400 400" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
                <g strokeOpacity="0.4">
                  <path d="M0 130C100 90 160 170 260 140S400 80 420 110" />
                  <path d="M0 220C100 180 160 260 260 230S400 170 420 200" />
                  <path d="M0 310C100 270 160 350 260 320S400 260 420 290" />
                </g>
              </svg>
              <span className="icon-box navy">
                <Icon name="eye" />
              </span>
              <span className="mv-tag teal">Our Vision</span>
              <h2>To become the world&apos;s most trusted AI-powered safety intelligence ecosystem.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Belief */}
      <section className="section" id="belief">
        <div className="container-x center" style={{ maxWidth: 880 }}>
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            What we believe
          </span>
          <p className="belief-quote reveal d1">
            Security should not be <span className="strike">reactive</span>. It should be{" "}
            <span className="text-grad">intelligent, predictive, connected and proactive.</span>
          </p>
          <p className="lead reveal d2" style={{ margin: "24px auto 0" }}>
            Traditional systems react after incidents occur. Every day, millions face risks while
            travelling, working, running businesses, protecting assets and safeguarding the people
            they love. Sentrix exists to change that, to help people know earlier, act faster, and
            stay safer.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section" id="pillars" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">What guides us</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Four principles behind <span className="text-teal">everything we build.</span>
            </h2>
          </div>
          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={"pillar " + DELAY[i]}>
                <span className="icon-box">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOC band */}
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
          <div className="section-head reveal" style={{ maxWidth: 720 }}>
            <span className="eyebrow on-dark">By design</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              One ecosystem. <span className="text-grad">Built to connect everything.</span>
            </h2>
            <p className="lead">
              Instead of separate cameras, trackers, monitors and analytics, Sentrix unifies it all,
              so organisations see more, understand more, and act faster.
            </p>
          </div>
          <div className="soc-grid">
            {METRICS.map((m, i) => (
              <div key={m.cap} className={"soc-metric reveal spotlight " + (i ? "d" + i + " " : "")}>
                <div className="num" data-count={m.count} data-suffix={m.suffix}>
                  0
                </div>
                <div className="cap">{m.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section" id="positioning">
        <div className="container-x pos-grid">
          <div className="reveal">
            <span className="eyebrow">More than one thing</span>
            <h2 className="section-title" style={{ margin: "14px 0 18px" }}>
              We&apos;re not just a security company.
            </h2>
            <p className="lead">
              Sentrix is not simply a software company, a surveillance company, a mobility company,
              or a security company. We bring it all together into something greater.
            </p>
          </div>
          <div className="pos-card reveal d1">
            <ul className="pos-list">
              <li><Icon name="x" /> Not just a software company</li>
              <li><Icon name="x" /> Not just a surveillance company</li>
              <li><Icon name="x" /> Not just a mobility company</li>
              <li><Icon name="x" /> Not just a security company</li>
            </ul>
            <div className="pos-result">
              <span className="icon-box">
                <Icon name="layers" />
              </span>
              <div>
                <div className="pos-result-label">We are a</div>
                <div className="pos-result-title">Safety Intelligence Ecosystem</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section" id="approach" style={{ background: "linear-gradient(180deg,var(--bg-2) 0%, var(--bg) 100%)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Why Sentrix · our approach</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Nine disciplines, working as one.
            </h2>
            <p className="lead">
              We don&apos;t build isolated tools, we build connected intelligence. A platform that
              doesn&apos;t just identify threats, but helps prevent them.
            </p>
          </div>
          <div className="why-grid">
            {DISCIPLINES.map((d, i) => (
              <div key={d.title} className={"why-chip " + DELAY[i % 4]}>
                <span className="ic">
                  <Icon name={d.icon} />
                </span>
                <h4>{d.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="section" id="future" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">The future of Sentrix</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Building the foundation for <span className="text-teal">safety intelligence.</span>
            </h2>
            <p className="lead">
              Our roadmap reaches beyond products, toward connected, predictive safety
              infrastructure for the world.
            </p>
          </div>
          <div className="roadmap">
            {ROADMAP.map((r, i) => (
              <div key={r.ph} className={"rm-card " + DELAY[i % 4]}>
                <div className="ph">{r.ph}</div>
                <span className="ic icon-tile">
                  <Icon name={r.icon} />
                </span>
                <h4>{r.title}</h4>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="Join the mission"
        title="Let's build a safer world together."
        body="Whether you're protecting people, assets, journeys or entire cities, see how Sentrix helps you know earlier, act faster, and stay safer."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/solutions", label: "Explore Solutions", variant: "dark" },
        ]}
      />
    </>
  );
}
