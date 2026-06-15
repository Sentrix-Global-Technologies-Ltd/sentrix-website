import Link from "next/link";
import Icon from "@/components/ui/Icon";

type Btn = { href: string; label: string; variant: "primary" | "dark" };

export default function CtaCenter({
  eyebrow,
  title,
  body,
  buttons,
}: {
  eyebrow: string;
  title: string;
  body: string;
  buttons: Btn[];
}) {
  return (
    <section className="section cta-band">
      <div className="container-x">
        <div
          className="cta-card reveal spotlight"
          style={{ gridTemplateColumns: "1fr", textAlign: "center" }}
        >
          <svg
            className="topo"
            viewBox="0 0 800 500"
            fill="none"
            stroke="currentColor"
            preserveAspectRatio="xMidYMid slice"
          >
            <g strokeOpacity="0.5">
              <path d="M-20 120C150 60 260 200 420 150S680 50 820 130" />
              <path d="M-20 210C150 150 280 290 440 240S700 140 820 220" />
              <path d="M-20 320C170 260 300 400 460 350S720 250 820 330" />
            </g>
          </svg>
          <div className="glow" />
          <div
            className="cta-left"
            style={{ position: "relative", zIndex: 2, marginInline: "auto", maxWidth: 640 }}
          >
            <span className="eyebrow on-dark" style={{ justifyContent: "center" }}>
              {eyebrow}
            </span>
            <h2 style={{ margin: "14px 0 16px" }}>{title}</h2>
            <p style={{ marginInline: "auto" }}>{body}</p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 8,
              }}
            >
              {buttons.map((b) => {
                const external = !b.href.startsWith("/");
                const cls =
                  b.variant === "primary" ? "btn btn-primary btn-lg magnetic" : "btn btn-dark btn-lg";
                const inner = (
                  <>
                    {b.label}
                    {b.variant === "primary" ? <> <Icon name="arrow" /></> : null}
                  </>
                );
                return external ? (
                  <a
                    key={b.label}
                    href={b.href}
                    className={cls}
                    {...(b.variant === "primary" ? { "data-magnetic": "0.3" } : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    key={b.label}
                    href={b.href}
                    className={cls}
                    {...(b.variant === "primary" ? { "data-magnetic": "0.3" } : {})}
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
