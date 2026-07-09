import Link from "next/link";
import Icon from "@/components/ui/Icon";

const CHIPS = [
  { icon: "shield", label: "Government" },
  { icon: "target", label: "Law Enforcement" },
  { icon: "car", label: "Transport" },
  { icon: "scale", label: "Insurance" },
  { icon: "cap", label: "Education" },
  { icon: "cross", label: "Healthcare" },
  { icon: "city", label: "Smart Cities" },
  { icon: "server", label: "Critical Infrastructure" },
];

export default function IndustriesTeaser() {
  return (
    <section className="section" id="industries-teaser">
      <div className="container-x">
        <div className="reveal mb-[clamp(36px,5vw,60px)] max-w-[720px]">
          <span className="eyebrow">Industries we serve</span>
          <h2 className="section-title mt-[14px]">
            One goal across every sector — <span className="text-teal">stay safer.</span>
          </h2>
          <p className="lead mt-[18px]">
            Government, transport, insurance, education, healthcare, smart cities, critical
            infrastructure and more. 16+ sectors, one mission.
          </p>
        </div>

        <div className="reveal d1 flex flex-wrap gap-[10px]">
          {CHIPS.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-4 py-[9px] text-[13.5px] font-semibold text-ink-2 shadow-sm"
            >
              <Icon name={c.icon} className="h-4 w-4 text-teal-600" /> {c.label}
            </span>
          ))}
        </div>

        <div className="mt-[30px]">
          <Link href="/industries" className="btn-link">
            See all 16 industries <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
