import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function LegalPage({
  crumb,
  title,
  updated,
  toc,
  children,
}: {
  crumb: string;
  title: string;
  updated: string;
  toc: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="legal-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="glow-a" />
        </div>
        <div className="container-x">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link> <Icon name="arrow" /> <span>{crumb}</span>
          </div>
          <span className="eyebrow reveal">Legal</span>
          <h1 className="reveal d1" style={{ fontSize: "clamp(32px,4.6vw,50px)", marginTop: 14 }}>
            {title}
          </h1>
          <p className="updated reveal d2">{updated}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,36px)" }} id="main">
        <div className="container-x">
          <div className="legal-layout">
            <aside className="legal-toc" aria-label="On this page">
              <h5>On this page</h5>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`}>
                  {t.label}
                </a>
              ))}
            </aside>
            <div className="prose reveal">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
