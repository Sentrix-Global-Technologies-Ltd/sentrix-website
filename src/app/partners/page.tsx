import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "Partnerships — Build Safer Communities with Sentrix",
  description:
    "Partner with Sentrix. We work with governments, security agencies, insurers, universities, estates, logistics firms and corporates to deliver AI safety intelligence at scale.",
  alternates: { canonical: "/partners" },
};

const PARTNERS = [
  { icon: "shield", title: "Governments & agencies", d: "reveal" },
  { icon: "target", title: "Law enforcement & security", d: "reveal d1" },
  { icon: "scale", title: "Insurance companies", d: "reveal d2" },
  { icon: "cap", title: "Universities & schools", d: "reveal d3" },
  { icon: "building", title: "Worship centres", d: "reveal" },
  { icon: "home", title: "Estates & real estate", d: "reveal d1" },
  { icon: "truck", title: "Logistics & transport", d: "reveal d2" },
  { icon: "city", title: "Corporates & smart cities", d: "reveal d3" },
];

const MODELS = [
  { icon: "layers", title: "Deployment partners", body: "System integrators and installers who deliver Sentrix into customer environments." },
  { icon: "cpu", title: "Technology partners", body: "Hardware, camera, telematics and platform providers integrating with our ecosystem." },
  { icon: "network", title: "Channel & resellers", body: "Partners who bring Sentrix to new markets and customer segments." },
  { icon: "globe", title: "Public-sector & NGO", body: "Working with governments and communities on safety at city and national scale." },
];

export default function PartnersPage() {
  return (
    <>
      <SkipLink />
      <PageHero crumb="Partnerships">
        <span className="eyebrow reveal">Partnerships</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.2vw,58px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
          Let&apos;s build safer communities <span className="text-grad">together.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "62ch" }}>
          Sentrix partners with the organisations on the front line of safety — extending our
          ecosystem through deployment, integration, channel and pilot programmes built for scale.
        </p>
        <div className="reveal d3" style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
            Become a partner <Icon name="arrow" />
          </Link>
          <a href="#pilot" className="btn btn-ghost btn-lg">
            Join a pilot programme
          </a>
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }} id="main">
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Who we partner with</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Built for the institutions that protect.</h2>
            <p className="lead">
              Whatever your sector, we tailor deployment to your mission, your risk profile and the
              infrastructure you already operate.
            </p>
          </div>
          <div className="cap-grid">
            {PARTNERS.map((p) => (
              <div key={p.title} className={"cap-item " + p.d}>
                <span className="ic"><Icon name={p.icon} /></span>
                <div><h4>{p.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="container-x">
          <div className="section-head reveal">
            <span className="eyebrow">Ways to work together</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Partnership models that scale.</h2>
          </div>
          <div className="value-grid">
            {MODELS.map((m, i) => (
              <div key={m.title} className={"value-card reveal" + (i ? " d" + i : "")}>
                <span className="icon-box"><Icon name={m.icon} /></span>
                <h4>{m.title}</h4>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pilot">
        <div className="container-x">
          <div className="cta-card reveal spotlight" style={{ gridTemplateColumns: "1.1fr .9fr" }}>
            <svg className="topo" viewBox="0 0 800 500" fill="none" stroke="currentColor" preserveAspectRatio="xMidYMid slice">
              <g strokeOpacity="0.5">
                <path d="M-20 120C150 60 260 200 420 150S680 50 820 130" />
                <path d="M-20 210C150 150 280 290 440 240S700 140 820 220" />
              </g>
            </svg>
            <div className="glow" />
            <div className="cta-left">
              <span className="eyebrow on-dark">Pilot programme</span>
              <h2 style={{ margin: "14px 0 16px" }}>Prove the value on your turf.</h2>
              <p>
                Run a focused pilot on a site, fleet or campus of your choosing. We&apos;ll define
                success criteria with you, deploy quickly, and measure the impact together.
              </p>
              <ul className="cta-points">
                <li><Icon name="check" /> Scoped to a single site or use case</li>
                <li><Icon name="check" /> Clear, measurable success criteria</li>
                <li><Icon name="check" /> Works with your existing infrastructure</li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link href="/contact" className="btn btn-primary magnetic" data-magnetic="0.25">
                  Apply for a pilot <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
              <div className="relative mx-auto aspect-square w-full max-w-[280px]" aria-hidden="true">
                <div className="absolute inset-0 rounded-full border border-dashed border-line-2" />
                <div className="absolute inset-[16%] rounded-full border border-dashed border-line-2" />
                <div className="orbit-core absolute inset-[24%] z-[4] flex items-end justify-center overflow-hidden rounded-full text-center">
                  <div className="relative z-[2] w-full px-1.5 pb-3 pt-[18px]" style={{ background: "linear-gradient(transparent, rgba(4,9,26,.55) 45%, rgba(4,9,26,.9))" }}>
                    <div className="font-display text-[clamp(12px,1.5vw,16px)] font-bold text-white" style={{ textShadow: "0 1px 6px rgba(0,0,0,.6)" }}>
                      Pilot
                    </div>
                    <div className="mt-[3px] font-mono text-[9px] tracking-[0.14em] text-mint">PROVE · SCALE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
