import Link from "next/link";
import Icon from "@/components/ui/Icon";

const POINTS = [
  "Tailored to your industry & risk profile",
  "Works with the infrastructure you already own",
  "Guided walkthrough with a safety specialist",
];

export default function CtaBand() {
  return (
    <section className="section relative" id="cta">
      <div className="container-x">
        <div className="reveal spotlight relative grid grid-cols-1 items-center gap-[clamp(32px,5vw,64px)] overflow-hidden rounded-xl bg-grad-navy p-[clamp(40px,6vw,76px)] shadow-navy min-[1025px]:grid-cols-[1.1fr_0.9fr]">
          <svg
            className="absolute inset-0 text-mint opacity-30"
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
          <div
            className="absolute h-[500px] w-[500px]"
            style={{
              left: "-8%",
              bottom: "-40%",
              background: "radial-gradient(circle, rgba(18,181,176,.3), transparent 60%)",
            }}
          />

          <div className="relative z-[2]">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="mt-[14px] mb-4 text-[clamp(28px,4vw,42px)] text-white">
              See Sentrix protect your world.
            </h2>
            <p className="mb-[26px] max-w-[44ch] text-[16.5px] text-on-dark-mut">
              Book a personalised demo and discover how a unified safety intelligence ecosystem helps
              you know earlier, act faster, and stay safer.
            </p>
            <ul className="grid gap-[11px]">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-[11px] text-[14.5px] text-on-dark">
                  <Icon name="check" className="h-[19px] w-[19px] flex-none text-mint" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-[26px] flex flex-wrap gap-[14px]">
              <Link href="/contact" className="btn btn-primary btn-lg magnetic" data-magnetic="0.3">
                Request a Demo <Icon name="arrow" />
              </Link>
              <Link href="/about" className="btn btn-dark btn-lg">
                About Sentrix
              </Link>
            </div>
          </div>

          <div className="grid place-items-center" style={{ display: "grid" }}>
            <div className="relative mx-auto aspect-square w-full max-w-[300px]" aria-hidden="true">
              <div className="absolute inset-0 rounded-full border border-dashed border-line-2" />
              <div className="absolute inset-[16%] rounded-full border border-dashed border-line-2" />
              <div className="orbit-core absolute inset-[24%] z-[4] flex items-end justify-center overflow-hidden rounded-full text-center">
                <div
                  className="relative z-[2] w-full px-1.5 pb-3 pt-[18px]"
                  style={{ background: "linear-gradient(transparent, rgba(4,9,26,.55) 45%, rgba(4,9,26,.9))" }}
                >
                  <div
                    className="font-display text-[clamp(12px,1.5vw,16px)] font-bold text-white"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,.6)" }}
                  >
                    Sentrix
                  </div>
                  <div className="mt-[3px] font-mono text-[9px] tracking-[0.14em] text-mint">AI CORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
