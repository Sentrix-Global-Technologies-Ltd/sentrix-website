import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import CtaCenter from "@/components/ui/CtaCenter";
import SkipLink from "@/components/ui/SkipLink";
import { EMAILS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & Trust Center | Sentrix Global Technologies",
  description:
    "How Sentrix protects data and earns trust — our security practices, data-protection commitments, human oversight, and responsible-disclosure programme.",
  alternates: { canonical: "/security" },
};

const MEASURES = [
  { icon: "lock", title: "Encryption", body: "Data is protected in transit and at rest using strong, industry-standard encryption." },
  { icon: "users", title: "Least-privilege access", body: "Access to systems and data is role-based, logged and limited to what each task requires." },
  { icon: "activity", title: "Continuous monitoring", body: "Our own infrastructure is monitored around the clock for anomalies and threats." },
  { icon: "layers", title: "Data minimisation", body: "We collect and retain only what is necessary, and delete or anonymise data when it is no longer needed." },
  { icon: "shield-check", title: "Secure development", body: "Security review, testing and dependency management are built into how we ship software." },
  { icon: "bell", title: "Incident response", body: "We maintain a documented process to detect, contain, investigate and communicate incidents." },
];

const DISCLOSURE = [
  <>Email <a href={`mailto:${EMAILS.security}`} style={{ color: "var(--teal-600)", marginLeft: 4 }}>{EMAILS.security}</a></>,
  "Give us reasonable time to remediate before disclosure",
  "Don't access, modify or delete data that isn't yours",
  "Act in good faith and we'll do the same",
];

export default function SecurityPage() {
  return (
    <>
      <SkipLink />
      <PageHero crumb="Security & Trust">
        <span className="eyebrow reveal">Trust Center</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.2vw,56px)", margin: "16px 0 20px", maxWidth: "20ch" }}>
          Security is not a feature. <span className="text-grad">It&apos;s our foundation.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "62ch" }}>
          We build technology that protects people — so protecting the data entrusted to us is
          non-negotiable. This page explains how we approach security, privacy and accountability.
        </p>
      </PageHero>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }} id="main">
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">How we protect data</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Defence in depth, by design.</h2>
          </div>
          <div className="value-grid">
            {MEASURES.map((m, i) => (
              <div key={m.title} className={"value-card reveal" + ([0, 4].includes(i) ? "" : i < 4 ? " d" + i : " d" + (i - 4))}>
                <span className="icon-box"><Icon name={m.icon} /></span>
                <h4>{m.title}</h4>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Principles</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>The commitments behind the technology.</h2>
          </div>
          <div className="prose reveal d1" style={{ maxWidth: 820 }}>
            <div className="legal-note">
              <Icon name="shield" />
              <div>
                <strong>An honest note on certifications.</strong> Rather than display badges, we
                describe what we actually do. Formal attestations such as ISO/IEC 27001 or SOC 2 are
                part of our compliance roadmap; we are happy to share our current status and
                documentation under NDA with prospective enterprise and government customers.
              </div>
            </div>
            <h3>Human oversight</h3>
            <p>
              AI surfaces risk; people remain accountable for decisions. Our platforms are designed
              to keep a human in the loop for consequential actions, and to make automated reasoning
              reviewable.
            </p>
            <h3>Privacy by design</h3>
            <p>
              Privacy considerations are built into our products from the start — including
              data-minimisation, purpose limitation, and configurable retention. When we process data
              for a customer, we act as their processor under a data-processing agreement. See our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
            <h3>Customer ownership of data</h3>
            <p>
              Customers own their data. We process it to deliver the service they have configured —
              not to build unrelated products — and we provide mechanisms for export and deletion.
            </p>
            <h3>Responsible AI</h3>
            <p>
              We work to reduce bias, validate model performance, and clearly communicate the limits
              of automated detection. Intelligence is a decision-support tool, not an infallible
              judge.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="disclosure">
        <div className="container-x">
          <div className="eco" style={{ alignItems: "center" }}>
            <div className="reveal">
              <span className="eyebrow">Responsible disclosure</span>
              <h2 className="section-title" style={{ margin: "14px 0 18px" }}>Found a vulnerability? Tell us.</h2>
              <p className="lead" style={{ marginBottom: 22 }}>
                We welcome reports from security researchers and the community. If you believe
                you&apos;ve found a security issue in our website or services, please report it
                privately so we can investigate and fix it before details are made public.
              </p>
              <ul className="cta-points" style={{ marginBottom: 26 }}>
                {DISCLOSURE.map((d, i) => (
                  <li key={i} style={{ color: "var(--ink-2)" }}>
                    <Icon name="check" style={{ color: "var(--teal)" }} /> {d}
                  </li>
                ))}
              </ul>
              <a href={`mailto:${EMAILS.security}`} className="btn btn-primary magnetic" data-magnetic="0.25">
                Report an issue <Icon name="arrow" />
              </a>
            </div>
            <div className="reveal d2" style={{ display: "grid", placeItems: "center" }}>
              <div className="value-card" style={{ maxWidth: 360, textAlign: "center", padding: "40px 30px" }}>
                <span className="icon-box" style={{ margin: "0 auto 18px", width: 60, height: 60 }}>
                  <Icon name="shield-check" style={{ width: 30, height: 30 }} />
                </span>
                <h4 style={{ fontSize: 19 }}>Coordinated &amp; confidential</h4>
                <p style={{ marginTop: 8 }}>
                  Reports are handled confidentially. We&apos;ll acknowledge your report, keep you
                  updated, and credit researchers who wish to be recognised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="For procurement & security teams"
        title="Need our security documentation?"
        body="We're glad to walk through our practices, answer security questionnaires and share documentation under NDA."
        buttons={[
          { href: "/contact", label: "Contact our team", variant: "primary" },
          { href: "/privacy", label: "Read the Privacy Policy", variant: "dark" },
        ]}
      />
    </>
  );
}
