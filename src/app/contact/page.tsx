import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import DemoForm from "@/components/home/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo — Contact Sentrix",
  description:
    "Book a personalised demo of the Sentrix safety intelligence ecosystem. Tell us your industry and risk profile and a safety specialist will respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact">
        <span className="eyebrow reveal">Get started</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.4vw,58px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
          See Sentrix protect <span className="text-grad">your world.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "58ch" }}>
          Book a personalised demo and discover how a unified safety intelligence ecosystem helps you
          know earlier, act faster, and stay safer.
        </p>
      </PageHero>

      <section className="section cta-band" style={{ paddingTop: "clamp(20px,3vw,40px)" }} id="demo">
        <div className="container-x">
          <div className="cta-card reveal spotlight">
            <svg className="topo" viewBox="0 0 800 500" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
              <g strokeOpacity="0.5">
                <path d="M-20 120C150 60 260 200 420 150S680 50 820 130" />
                <path d="M-20 210C150 150 280 290 440 240S700 140 820 220" />
                <path d="M-20 320C170 260 300 400 460 350S720 250 820 330" />
              </g>
            </svg>
            <div className="glow" />
            <div className="cta-left">
              <span className="eyebrow on-dark">Talk to a specialist</span>
              <h2 style={{ marginTop: 14 }}>A safety partner, not just a vendor.</h2>
              <p>
                Tell us what you&apos;re protecting. We&apos;ll show you how Sentrix fits your
                industry, your risk profile, and the infrastructure you already own.
              </p>
              <ul className="cta-points">
                <li><Icon name="check" /> Tailored to your industry &amp; risk profile</li>
                <li><Icon name="check" /> Works with the infrastructure you already own</li>
                <li><Icon name="check" /> Guided walkthrough with a safety specialist</li>
                <li><Icon name="check" /> Response within one business day</li>
              </ul>
            </div>
            <DemoForm />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x">
          <div className="cap-grid">
            <a className="cap-item reveal" href="mailto:hello@sentrix.global">
              <span className="ic">
                <Icon name="mail" />
              </span>
              <div>
                <h4>hello@sentrix.global</h4>
                <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: 2 }}>Email our team</p>
              </div>
            </a>
            <a className="cap-item reveal d1" href="tel:+10000000000">
              <span className="ic">
                <Icon name="phone" />
              </span>
              <div>
                <h4>+1 (000) 000-0000</h4>
                <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: 2 }}>Mon–Fri, business hours</p>
              </div>
            </a>
            <div className="cap-item reveal d2">
              <span className="ic">
                <Icon name="pin" />
              </span>
              <div>
                <h4>Global · 24/7 Operations</h4>
                <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: 2 }}>Always-on monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
