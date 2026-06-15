import Icon from "@/components/ui/Icon";

const ITEMS = [
  { icon: "shield", label: "Government Agencies" },
  { icon: "car", label: "Transport Operators" },
  { icon: "scale", label: "Insurance Providers" },
  { icon: "cap", label: "Universities" },
  { icon: "cross", label: "Healthcare" },
  { icon: "city", label: "Smart Cities" },
  { icon: "truck", label: "Logistics & Fleet" },
  { icon: "bank", label: "Financial Institutions" },
];

export default function Marquee() {
  return (
    <div
      className="marquee-mask group overflow-hidden border-y border-line bg-[var(--surface-soft)] py-[26px]"
      aria-hidden="true"
    >
      <div className="mb-[18px] text-center font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted-2">
        One intelligence ecosystem · built for those who protect
      </div>
      <div
        id="marquee"
        className="flex w-max animate-scrollx gap-[56px] group-hover:[animation-play-state:paused]"
      >
        {ITEMS.map((it) => (
          <span
            key={it.label}
            className="flex items-center gap-[10px] whitespace-nowrap font-display text-[16px] font-semibold text-slate"
          >
            <Icon name={it.icon} className="h-5 w-5 flex-none text-teal" /> {it.label}
          </span>
        ))}
      </div>
    </div>
  );
}
