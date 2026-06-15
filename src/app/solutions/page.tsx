import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import CtaCenter from "@/components/ui/CtaCenter";

export const metadata: Metadata = {
  title: "Solutions — Six AI Safety Intelligence Platforms | Sentrix",
  description:
    "Explore the Sentrix ecosystem: SentrixGo personal safety, Verified Transportation, VisionGuard AI surveillance, the Security Operations Centre, Insurance Intelligence and Fleet & Logistics monitoring.",
  alternates: { canonical: "/solutions" },
};

const CARDS = [
  { icon: "pin", pname: "SentrixGo", title: "Personal Safety Intelligence", body: "Intelligent journey monitoring, route analysis and emergency alerts that help individuals, families and commuters travel with confidence.", href: "/sentrixgo", cta: "Explore SentrixGo", d: "reveal" },
  { icon: "car", pname: "Verified Transport", title: "Verified Transportation Network", body: "Verified drivers and vehicles, monitored journeys and instant incident escalation — security-first mobility, not just ride-hailing.", href: "/verified-transport", cta: "Explore Verified Transport", d: "reveal d1" },
  { icon: "eye", pname: "VisionGuard", title: "AI Surveillance & Monitoring", body: "Turn the cameras you already own into intelligent systems that detect threats, recognise behaviour and raise real-time alerts.", href: "/visionguard", cta: "Explore VisionGuard", d: "reveal d2" },
  { icon: "grid", pname: "Unified SOC", title: "Security Operations Centre", body: "One command-and-control environment that unifies every security data source for governments, campuses and smart cities.", href: "/soc", cta: "Explore the SOC", d: "reveal" },
  { icon: "scale", pname: "Insurance Intelligence", title: "Risk & Claims Analytics", body: "Behavioural data and analytics that help insurers validate claims, reconstruct incidents, assess risk and detect fraud in real time.", href: "/insurance", cta: "Explore Insurance Intelligence", d: "reveal d1" },
  { icon: "truck", pname: "Fleet Intelligence", title: "Fleet Security & Logistics", body: "Total visibility across vehicles and assets — driver behaviour, route optimisation, fuel monitoring and real-time anomaly alerts.", href: "/fleet", cta: "Explore Fleet & Logistics", d: "reveal d2" },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero crumb="Solutions">
        <span className="eyebrow reveal">Our solutions</span>
        <h1 className="reveal d1" style={{ fontSize: "clamp(34px,5.4vw,58px)", margin: "16px 0 20px", maxWidth: "18ch" }}>
          Six intelligence platforms. <span className="text-grad">One mission.</span>
        </h1>
        <p className="lead reveal d2" style={{ fontSize: "clamp(16px,1.7vw,20px)", maxWidth: "60ch" }}>
          From the individual on a journey to a national command centre, Sentrix protects every
          layer of the safety chain. Explore each platform — or talk to us about a connected
          deployment.
        </p>
      </PageHero>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        <div className="container-x">
          <div className="sol-cards">
            {CARDS.map((c) => (
              <article key={c.pname} className={"sol-card " + c.d}>
                <span className="icon-box">
                  <Icon name={c.icon} />
                </span>
                <div className="pname">{c.pname}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <Link className="more" href={c.href}>
                  {c.cta} <Icon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaCenter
        eyebrow="One connected ecosystem"
        title="Most powerful when they work as one."
        body="Deploy a single platform or the full ecosystem. We'll tailor Sentrix to your industry, risk profile and the infrastructure you already own."
        buttons={[
          { href: "/contact", label: "Request a Demo", variant: "primary" },
          { href: "/industries", label: "See Industries", variant: "dark" },
        ]}
      />
    </>
  );
}
