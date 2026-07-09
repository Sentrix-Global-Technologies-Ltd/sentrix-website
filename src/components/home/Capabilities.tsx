import Icon from "@/components/ui/Icon";

const CAPS = [
  { icon: "radar", title: "Detect threats earlier" },
  { icon: "activity", title: "Monitor in real time" },
  { icon: "shield-check", title: "Verify people & vehicles" },
  { icon: "eye", title: "Improve situational awareness" },
  { icon: "clock", title: "Reduce response times" },
  { icon: "zap", title: "Prevent incidents early" },
  { icon: "lock", title: "Protect lives & assets" },
  { icon: "chart", title: "Improve operational visibility" },
  { icon: "target", title: "Strengthen decision-making" },
  { icon: "network", title: "Build safer communities" },
];

const DELAY = ["reveal", "reveal d1", "reveal d2", "reveal d3"];

export default function Capabilities() {
  return (
    <section className="section relative overflow-hidden border-y border-line bg-surface" id="capabilities">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(90% 60% at 50% 0%, rgba(18,181,176,.05), transparent 55%)" }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="reveal mb-[clamp(36px,5vw,60px)] max-w-[720px]">
          <span className="eyebrow">What the ecosystem does</span>
          <h2 className="section-title mt-[14px]">
            Built to help you <span className="text-teal">stay ahead of threats</span>
          </h2>
        </div>

        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(230px,1fr))]">
          {CAPS.map((c, i) => (
            <div
              key={c.title}
              className={
                "icon-tile-hover card-depth flex items-start gap-[14px] rounded-md border border-line bg-surface p-5 transition-all duration-300 ease-brand hover:-translate-y-[3px] hover:border-teal hover:shadow-md " +
                DELAY[i % 4]
              }
            >
              <span className="icon-tile grid h-10 w-10 flex-none place-items-center rounded-[11px]">
                <Icon name={c.icon} className="h-[21px] w-[21px]" />
              </span>
              <div>
                <h4 className="text-[15.5px] leading-[1.3]">{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
