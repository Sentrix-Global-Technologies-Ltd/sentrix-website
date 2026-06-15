import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "Insights — Safety Intelligence Perspectives | Sentrix",
  description:
    "Perspectives on proactive security, AI surveillance, mobility safety and the future of safety intelligence from the Sentrix team.",
  alternates: { canonical: "/insights" },
};

const LIVE = [
  { href: "/insight-proactive-vs-reactive", icon: "radar", meta: "Strategy · 6 min read", title: "Why proactive security beats reactive — and what it takes", body: "Most systems tell you what already went wrong. Moving from evidence to prevention is a shift in mindset, data and response. Here's what changes.", d: "reveal" },
  { href: "/insight-smarter-cameras", icon: "eye", meta: "AI Surveillance · 5 min read", title: "You don't need more cameras. You need smarter ones.", body: "Organisations are sitting on a goldmine of underused video. The opportunity isn't more hardware — it's intelligence layered onto what you already own.", d: "reveal d1" },
];

const SOON = [
  { icon: "car", meta: "Mobility", title: "Building trust into transportation", body: "Verification, monitoring and emergency response are turning ride safety from a hope into a system.", d: "reveal d2" },
  { icon: "grid", meta: "Operations", title: "What a modern Security Operations Centre looks like", body: "One operating picture, many sources — how unified command changes response at scale.", d: "reveal" },
  { icon: "scale", meta: "Insurance", title: "How behavioural data is reshaping risk", body: "From after-the-fact claims to real-time risk — what telematics and analytics unlock for insurers.", d: "reveal d1" },
  { icon: "users", meta: "Responsible AI", title: "Keeping humans in the loop", body: "Why the most trustworthy safety systems pair automation with accountable human oversight.", d: "reveal d2" },
];

export default function InsightsPage() {
  return (
    <>
      <SkipLink />
      <section className="legal-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="glow-a" data-parallax="0.06" />
          <div className="glow-b" data-parallax="0.1" />
        </div>
        <div className="container-x">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link> <Icon name="arrow" /> <span>Insights</span>
          </div>
          <span className="eyebrow reveal">Insights</span>
          <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.2vw,56px)", margin: "14px 0 18px", maxWidth: "18ch" }}>
            Perspectives on <span className="text-grad">safety intelligence.</span>
          </h1>
          <p className="lead reveal d2" style={{ maxWidth: "58ch" }}>
            Ideas on proactive security, AI surveillance, mobility safety and the future of
            protecting people, assets and communities.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,36px)" }} id="main">
        <div className="container-x">
          <div className="article-grid">
            {LIVE.map((a) => (
              <Link key={a.href} className={"article-card " + a.d} href={a.href}>
                <div className="meta">
                  <Icon name={a.icon} style={{ width: 14, height: 14 }} /> {a.meta}
                </div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <span className="more">
                  Read article <Icon name="arrow" />
                </span>
              </Link>
            ))}
            {SOON.map((a) => (
              <div key={a.title} className={"article-card " + a.d}>
                <div className="meta">
                  <Icon name={a.icon} style={{ width: 14, height: 14 }} /> {a.meta}
                </div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <span className="tag-soon">Coming soon</span>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 46 }}>
            <p className="lead" style={{ marginBottom: 18 }}>Want these in your inbox as we publish?</p>
            <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
              Get in touch <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
