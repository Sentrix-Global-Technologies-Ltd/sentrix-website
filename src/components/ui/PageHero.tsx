import Link from "next/link";
import Icon from "@/components/ui/Icon";

function Topo() {
  return (
    <svg
      className="topo"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      opacity={0.5}
    >
      <g strokeOpacity="0.12">
        <path d="M-50 220C200 140 360 300 560 240S900 100 1260 200" />
        <path d="M-50 300C220 220 380 380 580 320S920 180 1260 280" />
        <path d="M-50 400C220 320 400 480 600 420S940 280 1260 380" />
        <path d="M-50 510C240 430 420 590 620 530S960 390 1260 490" />
      </g>
    </svg>
  );
}

export function Breadcrumb({ label }: { label: string }) {
  return (
    <div className="breadcrumb reveal">
      <Link href="/">Home</Link> <Icon name="arrow" /> <span>{label}</span>
    </div>
  );
}

export default function PageHero({
  crumb,
  children,
  className,
}: {
  crumb: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={"page-hero" + (className ? " " + className : "")}>
      <div className="hero-bg" aria-hidden="true">
        <Topo />
        <div className="glow-a" data-parallax="0.06" />
        <div className="glow-b" data-parallax="0.1" />
      </div>
      <div className="container-x">
        <Breadcrumb label={crumb} />
        {children}
      </div>
    </section>
  );
}
