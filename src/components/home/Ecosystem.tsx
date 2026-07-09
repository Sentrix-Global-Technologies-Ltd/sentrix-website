import Link from "next/link";
import Icon from "@/components/ui/Icon";

const ECO_LIST = [
  {
    icon: "cpu",
    title: "AI & Predictive Detection",
    body: "Models that recognise risk patterns and surface threats before they escalate.",
  },
  {
    icon: "activity",
    title: "Real-Time Monitoring",
    body: "Continuous situational awareness across every connected location and asset.",
  },
  {
    icon: "users",
    title: "Human Oversight",
    body: "Expert review and verification keep automated intelligence accountable.",
  },
];

const NODES = [
  { icon: "eye", left: "50%", top: "0" },
  { icon: "car", left: "100%", top: "50%" },
  { icon: "truck", left: "50%", top: "100%" },
  { icon: "scale", left: "0", top: "50%" },
  { icon: "radar", left: "85%", top: "15%" },
  { icon: "bell", left: "15%", top: "85%" },
];

export default function Ecosystem() {
  return (
    <section
      className="section"
      id="ecosystem"
      style={{ background: "linear-gradient(180deg,var(--bg) 0%, var(--bg-2) 100%)" }}
    >
      <div className="container-x grid items-center gap-[clamp(36px,5vw,72px)] min-[1025px]:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">Connected intelligence</span>
          <h2 className="section-title mt-[14px]">
            Not separate tools. <br />
            One unified ecosystem.
          </h2>
          <p className="lead my-[18px] mb-[30px]">
            Sentrix brings cameras, tracking, monitoring and analytics into a single platform, so
            you can see more, understand more, and act faster. Every signal feeds one intelligent
            core.
          </p>
          <div className="grid gap-[18px]">
            {ECO_LIST.map((row) => (
              <div key={row.title} className="flex items-start gap-[15px]">
                <span className="icon-tile grid h-11 w-11 flex-none place-items-center rounded-xl">
                  <Icon name={row.icon} className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <h4 className="mb-0.5 text-[16.5px]">{row.title}</h4>
                  <p className="text-[14px] leading-[1.55] text-muted">{row.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-link mt-[26px]">
            Why Sentrix is different <Icon name="arrow" />
          </Link>
        </div>

        <div className="reveal d2">
          <div className="relative mx-auto aspect-square w-full max-w-[500px]" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border border-dashed border-line-2" />
            <div className="absolute inset-[16%] rounded-full border border-dashed border-line-2" />
            <div className="absolute inset-[32%] rounded-full border border-dashed border-line-2" />

            <div className="orbit-core absolute inset-[28%] z-[4] flex items-end justify-center overflow-hidden rounded-full text-center">
              <div
                className="relative z-[2] w-full px-1.5 pb-3 pt-[18px]"
                style={{
                  background:
                    "linear-gradient(transparent, rgba(4,9,26,.55) 45%, rgba(4,9,26,.9))",
                }}
              >
                <div
                  className="font-display text-[clamp(12px,1.5vw,16px)] font-bold text-white"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,.6)" }}
                >
                  Sentrix Core
                </div>
                <div className="mt-[3px] font-mono text-[9px] tracking-[0.14em] text-mint">
                 INTELLIGENCE 
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-spin360">
              {NODES.map((n, i) => (
                <div
                  key={i}
                  className="orbit-node absolute grid h-[clamp(58px,9vw,74px)] w-[clamp(58px,9vw,74px)] -translate-x-1/2 -translate-y-1/2 animate-spin-rev place-items-center rounded-[18px]"
                  style={{ left: n.left, top: n.top }}
                >
                  <Icon name={n.icon} className="h-7 w-7" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
