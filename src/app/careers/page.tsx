import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import CtaCenter from "@/components/ui/CtaCenter";
import SkipLink from "@/components/ui/SkipLink";
import { EMAILS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Help Build a Safer World | Sentrix Global Technologies",
  description:
    "Join Sentrix and help build the world's most trusted safety intelligence ecosystem. Explore the areas we're growing in and how to apply.",
  alternates: { canonical: "/careers" },
};

const VALUES = [
  { icon: "target", title: "Real impact", body: "Your work helps people respond faster in moments that genuinely matter." },
  { icon: "cpu", title: "Hard, meaningful problems", body: "AI, real-time systems and safety-critical engineering — at the edge of what's possible." },
  { icon: "users", title: "People-first culture", body: "Ownership, mentorship and a team that cares about doing things the right way." },
  { icon: "globe", title: "Global ambition", body: "We're building safety infrastructure with international reach — and you'll help shape it." },
];

const ROLES = [
  { icon: "cpu", title: "AI & Machine Learning", meta: "Computer vision · anomaly detection · model evaluation", subject: "AI%20%26%20ML%20at%20Sentrix", d: "reveal" },
  { icon: "layers", title: "Software Engineering", meta: "Real-time platforms · backend · mobile · frontend", subject: "Software%20Engineering%20at%20Sentrix", d: "reveal d1" },
  { icon: "grid", title: "Security Operations", meta: "SOC analysts · monitoring · incident response", subject: "Security%20Operations%20at%20Sentrix", d: "reveal d2" },
  { icon: "lock", title: "Product Security & Trust", meta: "AppSec · privacy engineering · compliance", subject: "Product%20Security%20at%20Sentrix", d: "reveal" },
  { icon: "chart", title: "Data & Analytics", meta: "Risk analytics · insurance intelligence · data engineering", subject: "Data%20%26%20Analytics%20at%20Sentrix", d: "reveal d1" },
  { icon: "users", title: "Go-to-Market", meta: "Enterprise & government sales · partnerships · customer success", subject: "Go-to-Market%20at%20Sentrix", d: "reveal d2" },
];

export default function CareersPage() {
  return (
    <>
      <SkipLink />
      <PageHero crumb="Careers">
        <span className="eyebrow reveal">Careers</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.2vw,58px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
          Build technology that <span className="text-grad">keeps people safe.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "60ch" }}>
          We&apos;re a team of engineers, analysts and operators on a mission to make every journey,
          organisation and community safer. If that mission moves you, we&apos;d love to meet you.
        </p>
        <div className="reveal d3" style={{ marginTop: 28 }}>
          <a
            href="#"
            className="btn btn-primary btn-lg magnetic"
            data-magnetic="0.3"
          >
            No Open Positions <Icon name="arrow" />
          </a>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }} id="main">
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Why Sentrix</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Work that matters, on hard problems.</h2>
          </div>
          <div className="value-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className={"value-card reveal" + (i ? " d" + i : "")}>
                <span className="icon-box">
                  <Icon name={v.icon} />
                </span>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }} id="roles">
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Where we&apos;re growing</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Areas we&apos;re hiring across.</h2>
            <p className="lead">
              We&apos;re scaling our team. If your expertise fits one of these areas — even if you
              don&apos;t see a specific opening — introduce yourself.
            </p>
          </div>
          <div className="role-list">
            {ROLES.map((r) => (
              <div key={r.title} className={"role-card " + r.d}>
                <span className="ic icon-box">
                  <Icon name={r.icon} />
                </span>
                <div className="role-body">
                  <h4>{r.title}</h4>
                  <div className="role-meta">{r.meta}</div>
                </div>
                <a className="role-cta" href={`mailto:${EMAILS.careers}?subject=${r.subject}`}>
                  Introduce yourself <Icon name="arrow" />
                </a>
              </div>
            ))}
          </div>
          <div className="legal-note" style={{ maxWidth: 880, marginTop: 30 }}>
            <Icon name="bell" />
            <div>
              Don&apos;t see your role? We&apos;re always glad to hear from exceptional people. Email{" "}
              <a href={`mailto:${EMAILS.careers}`} style={{ color: "var(--teal-600)" }}>
                {EMAILS.careers}
              </a>{" "}
              with your CV and a note about how you&apos;d help build a safer world.
            </div>
          </div>
        </div>
      </section> */}

      <CtaCenter
        eyebrow="Join the mission"
        title="Let's build it together."
        body="Send us your CV and tell us where you'd make an impact."
        buttons={[
          { href: "mailto:https://hello@sentrixglobaltech.com", label: "Check", variant: "primary" },
          { href: "/about", label: "About Sentrix", variant: "dark" },
        ]}
      />
    </>
  );
}
