import Link from "next/link";
import Icon from "@/components/ui/Icon";

const TEASERS = [
  { href: "/sentrixgo", icon: "pin", title: "Personal Safety", sub: "SentrixGo journey monitoring", d: "reveal" },
  { href: "/verified-transport", icon: "car", title: "Verified Transport", sub: "Verified drivers & journeys", d: "reveal d1" },
  { href: "/visionguard", icon: "eye", title: "AI Surveillance", sub: "VisionGuard smart cameras", d: "reveal d2" },
  { href: "/soc", icon: "grid", title: "Operations Centre", sub: "Unified command & control", d: "reveal" },
  { href: "/insurance", icon: "scale", title: "Insurance Intelligence", sub: "Risk & claims analytics", d: "reveal d1" },
  { href: "/fleet", icon: "truck", title: "Fleet & Logistics", sub: "Total fleet visibility", d: "reveal d2" },
];

export default function SolutionsTeaser() {
  return (
    <section
      className="section"
      id="solutions"
      style={{ background: "linear-gradient(180deg,var(--bg-2) 0%, var(--bg) 100%)" }}
    >
      <div className="container-x">
        <div className="reveal mb-[clamp(36px,5vw,60px)] max-w-[720px]">
          <span className="eyebrow">Our solutions</span>
          <h2 className="section-title mt-[14px]">
            Six intelligence platforms. <span className="text-teal">One mission.</span>
          </h2>
          <p className="lead mt-[18px]">
            From the individual on a journey to a national command centre, explore each platform in
            depth.
          </p>
        </div>

        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
          {TEASERS.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className={
                "icon-tile-hover card-depth group flex items-center gap-[15px] rounded-md border border-line bg-surface px-[22px] py-5 transition-[transform,box-shadow,border-color] duration-300 ease-brand hover:-translate-y-[3px] hover:border-teal hover:shadow-md " +
                t.d
              }
            >
              <span className="icon-tile grid h-[46px] w-[46px] flex-none place-items-center rounded-[13px]">
                <Icon name={t.icon} className="h-[23px] w-[23px]" />
              </span>
              <div>
                <h4 className="text-[15.5px]">{t.title}</h4>
                <p className="mt-0.5 text-[12.5px] text-muted">{t.sub}</p>
              </div>
              <span className="ml-auto flex text-teal-600">
                <Icon
                  name="arrow"
                  className="h-[18px] w-[18px] transition-transform duration-[250ms] ease-brand group-hover:translate-x-[3px]"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-[34px]">
          <Link href="/solutions" className="btn btn-primary magnetic" data-magnetic="0.25">
            Explore all solutions <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
