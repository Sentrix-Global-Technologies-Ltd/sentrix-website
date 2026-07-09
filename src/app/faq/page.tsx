import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Sentrix Global Technologies",
  description:
    "Answers to common questions about Sentrix — what it is, how it's different, data security, deployment, industries and how to get started.",
  alternates: { canonical: "/faq" },
};

const FAQS: { q: string; a: React.ReactNode; open?: boolean }[] = [
  {
    q: "What exactly is Sentrix?",
    open: true,
    a: "Sentrix is an AI-powered safety intelligence ecosystem. Rather than selling isolated tools, we unify AI surveillance, mobility, emergency response, fleet and insurance intelligence into one connected platform that helps you detect threats earlier and prevent incidents before they escalate.",
  },
  {
    q: "How is Sentrix different from traditional security?",
    a: "Traditional systems are reactive — they record what already went wrong. Sentrix is built to be predictive and proactive: it interprets behaviour and signals in real time, verifies people and vehicles, and raises alerts as risk forms, so teams can act before an incident rather than after.",
  },
  {
    q: "Do I need to replace my existing cameras?",
    a: (
      <>
        No. VisionGuard works with the infrastructure you already own — CCTV, IP cameras, dashcams
        and bodycams — turning existing footage into intelligence. You don&apos;t need more cameras;
        you need smarter ones. <Link href="/visionguard">Learn more about VisionGuard</Link>.
      </>
    ),
  },
  {
    q: "Which industries does Sentrix serve?",
    a: (
      <>
        Government, law enforcement, transport, logistics, insurance, education, healthcare, worship
        centres, corporates, financial institutions, real estate, hospitality, smart cities and
        critical infrastructure — among others. <Link href="/industries">See all industries</Link>.
      </>
    ),
  },
  {
    q: "Is my data secure and private?",
    a: (
      <>
        Security is our foundation. We encrypt data in transit and at rest, apply least-privilege
        access, minimise what we collect, and keep humans accountable for decisions. Customers own
        their data. Read our <Link href="/security">Security &amp; Trust Center</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </>
    ),
  },
  {
    q: "Can the solutions be deployed individually?",
    a: "Yes. You can adopt a single platform — say SentrixGo or Fleet Intelligence — or connect several into a unified ecosystem and a central Security Operations Centre. We tailor the deployment to your needs.",
  },
  {
    q: "How does verification work?",
    a: (
      <>
        In our Verified Transportation Network, drivers and vehicles are confirmed before a journey,
        and the trip is monitored in real time, with the ability to escalate incidents and activate
        emergency response. <Link href="/verified-transport">Learn more</Link>.
      </>
    ),
  },
  {
    q: "What does it cost?",
    a: (
      <>
        Deployments vary by scale, integrations and the platforms involved, so pricing is tailored.
        The best next step is a short conversation — <Link href="/contact">request a demo</Link> and
        we&apos;ll scope it with you.
      </>
    ),
  },
  {
    q: "How do we get started?",
    a: "Request a demo and a safety specialist will walk you through the platforms relevant to your industry and risk profile, then design a deployment around the infrastructure you already have.",
  },
];

export default function FaqPage() {
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
            <Link href="/">Home</Link> <Icon name="arrow" /> <span>FAQ</span>
          </div>
          <span className="eyebrow reveal">Help &amp; answers</span>
          <h1 className="reveal d1" style={{ fontSize: "clamp(32px,4.8vw,52px)", margin: "14px 0 18px" }}>
            Frequently asked questions
          </h1>
          <p className="lead reveal d2" style={{ maxWidth: "56ch" }}>
            The essentials about Sentrix. Can&apos;t find what you need?{" "}
            <Link href="/contact" style={{ color: "var(--teal-600)" }}>
              Talk to our team
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,36px)" }} id="main">
        <div className="container-x">
          <div className="faq-list">
            {FAQS.map((f) => (
              <details key={f.q} className="faq-item reveal" open={f.open}>
                <summary>
                  {f.q}{" "}
                  <span className="pls">
                    <Icon name="cross" />
                  </span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="center" style={{ marginTop: 42 }}>
            <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
              Still have questions? Talk to us <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
