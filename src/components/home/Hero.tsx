import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden pb-[clamp(60px,8vw,96px)] pt-[clamp(130px,17vw,188px)]">
      <div className="absolute inset-0 z-[-2] overflow-hidden" aria-hidden="true">
        <svg
          className="hero-topo absolute inset-[-10%_-5%] text-navy opacity-50"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          opacity={0.5}
        >
          <g strokeOpacity="0.12">
            <path d="M-50 200C200 120 360 280 560 220S900 80 1260 180" />
            <path d="M-50 260C200 180 360 340 560 280S900 140 1260 240" />
            <path d="M-50 330C220 250 380 410 580 350S920 210 1260 310" />
            <path d="M-50 420C220 340 400 500 600 440S940 300 1260 400" />
            <path d="M-50 520C240 440 420 600 620 540S960 400 1260 500" />
            <path d="M-50 630C240 550 440 710 640 650S980 510 1260 610" />
          </g>
        </svg>
        <div className="hero-photo" data-parallax="0.05" />
        <div className="glow-a" data-parallax="0.06" />
        <div className="glow-b" data-parallax="0.1" />
      </div>

      <div className="container-x grid items-center gap-[clamp(32px,5vw,64px)] min-[1025px]:grid-cols-[1.08fr_0.92fr]">
        {/* Copy */}
        <div>
          <span className="hero-pill reveal mb-[26px] inline-flex items-center gap-[10px] rounded-pill border border-line bg-[var(--glass)] px-[14px] py-[7px] pr-[7px] text-[13px] font-medium text-ink-2 shadow-sm">
            <span className="rounded-pill bg-grad-teal px-[10px] py-1 font-mono text-[11px] font-semibold text-[#04201f]">
              AI · SAFETY INTELLIGENCE
            </span>{" "}
            Predictive, connected &amp; proactive security
          </span>

          <h1 className="mb-6 text-[clamp(38px,6vw,70px)] font-extrabold tracking-[-0.03em]">
            <span className="line">
              <span className="line-i">Know earlier.</span>
            </span>
            <span className="line">
              <span className="line-i">Act faster.</span>
            </span>
            <span className="line">
              <span className="line-i text-grad">Stay safer.</span>
            </span>
          </h1>

          <p className="hero-sub reveal d2 mb-[34px] max-w-[54ch] text-[clamp(16.5px,1.8vw,20px)] text-muted">
            Traditional security <strong className="font-semibold text-ink">reacts after incidents happen.</strong>{" "}
            Sentrix unifies AI surveillance, mobility, emergency response, fleet and insurance
            intelligence into one ecosystem that detects threats early and helps prevent them.
          </p>

          <div className="hero-actions reveal d3 flex flex-wrap items-center gap-[14px]">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg magnetic max-[480px]:w-full"
              data-magnetic="0.3"
            >
              Request a Demo <Icon name="arrow" />
            </Link>
            <a href="#ecosystem" className="btn btn-ghost btn-lg max-[480px]:w-full">
              <Icon name="play" /> See the Ecosystem
            </a>
          </div>

          <div className="hero-trust reveal d4 mt-[38px] flex flex-wrap items-center gap-[18px]">
            <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted-2">
              Trusted across
            </span>
            <div className="flex flex-wrap gap-[18px] text-[13.5px] font-semibold text-slate">
              <span>Government</span>
              <span>Transport</span>
              <span>Insurance</span>
              <span>Education</span>
              <span>Smart Cities</span>
            </div>
          </div>

          <div className="reveal d4 mt-[44px] grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line shadow-md min-[761px]:grid-cols-3">
            <div className="bg-[var(--surface-tint)] px-[22px] py-5 max-[760px]:flex max-[760px]:items-baseline max-[760px]:gap-3">
              <div className="stat-num" data-count="8" data-suffix="">
                0<span></span>
              </div>
              <div className="mt-[3px] text-[12.5px] text-muted">Intelligence modules, one platform</div>
            </div>
            <div className="bg-[var(--surface-tint)] px-[22px] py-5 max-[760px]:flex max-[760px]:items-baseline max-[760px]:gap-3">
              <div className="stat-num" data-count="24" data-suffix="/7">
                0
              </div>
              <div className="mt-[3px] text-[12.5px] text-muted">Real-time threat monitoring</div>
            </div>
            <div className="bg-[var(--surface-tint)] px-[22px] py-5 max-[760px]:flex max-[760px]:items-baseline max-[760px]:gap-3">
              <div className="stat-num" data-count="21" data-suffix="+">
                0
              </div>
              <div className="mt-[3px] text-[12.5px] text-muted">Industries &amp; sectors served</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="reveal d2 relative">
          <div
            className="tilt spotlight gradient-border relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-xl border border-white/[0.08] bg-grad-navy shadow-navy"
            data-tilt="6"
          >
            <div className="radar-grid absolute inset-0" />
            <div className="absolute inset-x-0 top-0 z-[4] flex items-center justify-between px-[18px] py-4">
              <span className="flex items-center gap-2 font-mono text-[11.5px] tracking-[0.12em] text-mint">
                <span
                  className="h-2 w-2 rounded-full bg-safe animate-pulse-led"
                  style={{ boxShadow: "0 0 8px var(--safe)" }}
                />{" "}
                THREAT DETECTION
              </span>
              <span className="font-mono text-[10.5px] text-on-dark-mut">LAT 6.524 · LON 3.379</span>
            </div>

            <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="h-[78%] w-[78%] overflow-visible">
                <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(110,216,210,.22)" strokeWidth={1} />
                <circle cx="100" cy="100" r="64" fill="none" stroke="rgba(110,216,210,.22)" strokeWidth={1} />
                <circle cx="100" cy="100" r="36" fill="none" stroke="rgba(110,216,210,.22)" strokeWidth={1} />
                <line x1="100" y1="8" x2="100" y2="192" stroke="rgba(110,216,210,.16)" strokeWidth={1} />
                <line x1="8" y1="100" x2="192" y2="100" stroke="rgba(110,216,210,.16)" strokeWidth={1} />
                <g className="animate-sweep [transform-origin:100px_100px]">
                  <defs>
                    <linearGradient id="sweepG" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#6ED8D2" stopOpacity="0.5" />
                      <stop offset="1" stopColor="#6ED8D2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M100 100 L100 8 A92 92 0 0 1 168 38 Z" fill="url(#sweepG)" />
                </g>
                <circle cx="142" cy="74" r="4" fill="var(--mint)" style={{ filter: "drop-shadow(0 0 6px var(--teal))" }}>
                  <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="128" r="3.5" fill="var(--mint)" style={{ filter: "drop-shadow(0 0 6px var(--teal))" }}>
                  <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="1.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="142" r="4.5" fill="var(--threat)" style={{ filter: "drop-shadow(0 0 6px var(--threat))" }}>
                  <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="70" r="3" fill="var(--mint)" style={{ filter: "drop-shadow(0 0 6px var(--teal))" }}>
                  <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="3.2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            <div className="absolute inset-x-[14px] bottom-[14px] z-[4] rounded-md border border-white/[0.08] bg-[rgba(5,11,34,0.6)] px-[14px] py-3 backdrop-blur-[8px]">
              <div className="flex items-center gap-[10px] py-[3px] font-mono text-[11px] text-on-dark-mut">
                <span className="h-[7px] w-[7px] flex-none rounded-full bg-safe" />{" "}
                <b className="font-medium text-on-dark">Vehicle verified</b> · NG-PLT-4471
                <span className="ml-auto text-mint">12:04:31</span>
              </div>
              <div className="flex items-center gap-[10px] py-[3px] font-mono text-[11px] text-on-dark-mut">
                <span className="h-[7px] w-[7px] flex-none rounded-full bg-warn" />{" "}
                <b className="font-medium text-on-dark">Anomaly flagged</b> · Sector 7 crowd
                <span className="ml-auto text-mint">12:04:38</span>
              </div>
              <div className="flex items-center gap-[10px] py-[3px] font-mono text-[11px] text-on-dark-mut">
                <span className="h-[7px] w-[7px] flex-none rounded-full bg-safe" />{" "}
                <b className="font-medium text-on-dark">Responder dispatched</b> · ETA 3m
                <span className="ml-auto text-mint">12:04:45</span>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute left-[-7%] top-[16%] z-[5] flex animate-floaty items-center gap-[11px] rounded-md border border-line bg-surface px-[15px] py-3 shadow-lg max-[760px]:left-0">
            <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[11px] bg-[rgba(22,185,129,0.12)] text-safe">
              <Icon name="shield-check" className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-[13.5px] font-semibold text-navy dark:text-ink">Identity Verified</div>
              <div className="text-[11.5px] text-muted">Driver &amp; vehicle matched</div>
            </div>
          </div>
          <div className="absolute bottom-[20%] right-[-8%] z-[5] flex animate-floaty items-center gap-[11px] rounded-md border border-line bg-surface px-[15px] py-3 shadow-lg [animation-delay:0.8s] max-[760px]:right-0">
            <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[11px] bg-[rgba(18,181,176,0.12)] text-teal-600">
              <Icon name="zap" className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-[13.5px] font-semibold text-navy dark:text-ink">Threat Predicted</div>
              <div className="text-[11.5px] text-muted">Prevented before escalation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
