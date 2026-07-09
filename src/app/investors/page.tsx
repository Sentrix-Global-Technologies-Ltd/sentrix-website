import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import CtaCenter from "@/components/ui/CtaCenter";
import SkipLink from "@/components/ui/SkipLink";
import { EMAILS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investors — The Future of Safety Intelligence | Sentrix",
  description:
    "Sentrix is building the world's most trusted AI-powered safety intelligence ecosystem. Explore our vision, the market opportunity and how to connect with our team.",
  alternates: { canonical: "/investors" },
};

const OPPORTUNITY = [
  { icon: "globe", title: "A universal problem", body: "Every person, business and government faces safety and security risk — and traditional, reactive tools leave a widening gap." },
  { icon: "layers", title: "Fragmented today", body: "Surveillance, mobility, fleet, insurance and emergency response are siloed. Sentrix unifies them into one intelligence ecosystem." },
  { icon: "network", title: "Network effects", body: "Each connected source and deployment makes the ecosystem more valuable — a durable, compounding advantage." },
  { icon: "cpu", title: "AI-native timing", body: "Advances in computer vision and real-time AI make proactive safety commercially viable now, not someday." },
];

const STRATEGY = [
  { n: "1", title: "Land with a platform", body: "Enter through a high-value entry point — personal safety, fleet, or surveillance — that delivers fast, visible impact.", d: "reveal" },
  { n: "2", title: "Expand the ecosystem", body: "Connect additional platforms and a central Security Operations Centre as trust and footprint grow.", d: "reveal d1" },
  { n: "3", title: "Deepen with data", body: "Each deployment strengthens detection, analytics and the value delivered to every customer.", d: "reveal d2" },
  { n: "4", title: "Scale across borders", body: "Extend into smart cities, national networks and international markets on shared infrastructure.", d: "reveal d3" },
];

const VISION = [
  { icon: "city", label: "Smart city integrations" },
  { icon: "network", label: "National safety networks" },
  { icon: "cpu", label: "AI command centres" },
  { icon: "bell", label: "Emergency response ecosystems" },
  { icon: "globe", label: "International expansion" },
];

export default function InvestorsPage() {
  return (
    <>
      <SkipLink />
      <PageHero crumb="Investors">
        <span className="eyebrow reveal">Investors</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.2vw,58px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
          Investing in a <span className="text-grad">safer world.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "62ch" }}>
          Sentrix is building the foundational infrastructure for AI-powered safety intelligence —
          across mobility, surveillance, emergency response, fleet and insurance. Here&apos;s the
          opportunity we&apos;re pursuing.
        </p>
        <div className="reveal d3" style={{ marginTop: 28 }}>
          <a
            href={`mailto:${EMAILS.investors}?subject=Investor%20enquiry%20%E2%80%94%20Sentrix`}
            className="btn btn-primary btn-lg magnetic"
            data-magnetic="0.3"
          >
            Contact investor relations <Icon name="arrow" />
          </a>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }} id="main">
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">The opportunity</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>A large, urgent and connected market.</h2>
          </div>
          <div className="value-grid">
            {OPPORTUNITY.map((o, i) => (
              <div key={o.title} className={"value-card reveal" + (i ? " d" + i : "")}>
                <span className="icon-box"><Icon name={o.icon} /></span>
                <h4>{o.title}</h4>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Our strategy</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>How we grow.</h2>
          </div>
          <div className="steps">
            {STRATEGY.map((s) => (
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
            <span className="eyebrow">The vision</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Where this goes next.</h2>
            <p className="lead">
              Our long-term roadmap reaches toward connected safety infrastructure for the world —
              read more about{" "}
              <Link href="/about#future" style={{ color: "var(--teal-600)" }}>
                the future of Sentrix
              </Link>
              .
            </p>
          </div>
          <div className="chips-row reveal d1">
            {VISION.map((v) => (
              <span key={v.label} className="ch"><Icon name={v.icon} /> {v.label}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="Investor relations"
        title="Let's talk about the future."
        body="For investment enquiries, our deck and a conversation with the team, reach out directly."
        buttons={[
          { href: `mailto:${EMAILS.investors}?subject=Investor%20enquiry%20%E2%80%94%20Sentrix`, label: "Contact investor relations", variant: "primary" },
          { href: "/about", label: "About Sentrix", variant: "dark" },
        ]}
      />
    </>
  );
}
