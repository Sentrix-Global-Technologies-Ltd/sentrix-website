import Icon from "@/components/ui/Icon";

const OLD_POINTS = [
  "Cameras that only record incidents",
  "Disconnected tools & blind spots",
  "Manual monitoring, slow response",
  "Unverified people & vehicles",
  "Evidence gathered after the loss",
];

const NEW_POINTS = [
  "AI that detects threats as they form",
  "One connected intelligence ecosystem",
  "Real-time alerts & faster response",
  "Verified identities, vehicles & activity",
  "Incidents prevented before they escalate",
];

export default function Problem() {
  return (
    <section className="section aura" id="problem">
      <div className="container-x">
        <div className="reveal mb-[clamp(36px,5vw,60px)] max-w-[720px]">
          <span className="eyebrow">The shift</span>
          <h2 className="section-title mt-[14px]">
            Security should not be reactive. It should be{" "}
            <span className="text-teal">intelligent.</span>
          </h2>
          <p className="lead mt-[18px]">
            Most systems record what already went wrong. Sentrix is built to see risk forming and
            to act before it becomes an incident.
          </p>
        </div>

        <div className="reveal d1 mt-[14px] grid grid-cols-1 items-stretch gap-4 min-[761px]:grid-cols-[1fr_auto_1fr] min-[761px]:gap-0">
          {/* Old */}
          <div className="rounded-lg border border-line bg-surface p-[clamp(26px,3.4vw,40px)]">
            <span className="mb-[18px] inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-threat">
              Traditional security
            </span>
            <h3 className="mb-1.5 text-[21px]">Reacts after the fact</h3>
            <ul className="mt-[18px] grid gap-[14px]">
              {OLD_POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-[1.5] text-muted">
                  <Icon name="x" className="mt-px h-5 w-5 flex-none text-threat" /> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="grid place-items-center px-[10px] max-[760px]:p-1">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-line bg-surface font-display text-[14px] font-bold text-navy shadow-md max-[760px]:rotate-90 dark:text-mint">
              VS
            </span>
          </div>

          {/* New */}
          <div className="relative overflow-hidden rounded-lg bg-grad-navy p-[clamp(26px,3.4vw,40px)] text-on-dark shadow-navy">
            <svg
              className="absolute inset-0 text-mint opacity-25"
              viewBox="0 0 400 400"
              fill="none"
              stroke="currentColor"
              preserveAspectRatio="xMidYMid slice"
            >
              <g strokeOpacity="0.4">
                <path d="M0 120C100 80 160 160 260 130S400 60 420 100" />
                <path d="M0 200C100 160 160 240 260 210S400 140 420 180" />
                <path d="M0 290C100 250 160 330 260 300S400 230 420 270" />
              </g>
            </svg>
            <span className="relative mb-[18px] inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-mint">
              The Sentrix way
            </span>
            <h3 className="relative mb-1.5 text-[21px] text-white">Predicts &amp; prevents</h3>
            <ul className="relative mt-[18px] grid gap-[14px]">
              {NEW_POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-[1.5] text-on-dark">
                  <Icon name="check" className="mt-px h-5 w-5 flex-none text-mint" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
