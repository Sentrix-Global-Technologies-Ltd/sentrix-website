"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { EMAILS } from "@/lib/site";

const ACTIONS = [
  { href: "/contact", icon: "zap", label: "Request a demo", primary: true },
  { href: "/solutions", icon: "grid", label: "Explore solutions" },
  { href: "/faq", icon: "search", label: "Browse FAQs" },
  { href: "/contact", icon: "users", label: "Talk to sales" },
  { href: "/partners", icon: "network", label: "Become a partner" },
];

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (open && wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className={"concierge fixed bottom-5 right-5 z-[58]" + (open ? " open" : "")}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-label="Open quick help"
        aria-expanded={open}
        className="concierge-btn relative grid h-[58px] w-[58px] place-items-center rounded-full bg-grad-brand bg-[length:160%_160%] text-white transition-transform duration-300 ease-brand hover:-translate-y-[3px] hover:scale-[1.04]"
        style={{
          boxShadow:
            "0 14px 30px -10px rgba(18,181,176,.6), inset 0 1.5px 0 rgba(255,255,255,.4)",
        }}
      >
        <Icon
          name="chat"
          className={
            "absolute h-[25px] w-[25px] transition-[opacity,transform] duration-[250ms] ease-brand " +
            (open ? "rotate-90 scale-[0.6] opacity-0" : "opacity-100")
          }
        />
        <Icon
          name="close"
          className={
            "absolute h-[25px] w-[25px] transition-[opacity,transform] duration-[250ms] ease-brand " +
            (open ? "opacity-100" : "-rotate-90 scale-[0.6] opacity-0")
          }
        />
        {!open && (
          <span className="pointer-events-none absolute inset-0 rounded-full animate-cpulse" aria-hidden="true" />
        )}
      </button>

      <div
        role="dialog"
        aria-label="Sentrix quick help"
        aria-modal="false"
        className={
          "concierge-panel absolute bottom-[74px] right-0 w-[340px] max-w-[calc(100vw-40px)] overflow-hidden rounded-lg border border-line bg-surface shadow-lg transition-[opacity,transform] duration-300 ease-brand " +
          (open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-[0.98] opacity-0")
        }
        style={{ transformOrigin: "bottom right" }}
      >
        <div className="bg-grad-navy px-5 pb-[18px] pt-5 text-white">
          <div className="flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] text-mint">
            <span
              className="h-2 w-2 rounded-full bg-safe animate-pulse-led"
              style={{ boxShadow: "0 0 8px var(--safe)" }}
            />{" "}
            Sentrix Concierge
          </div>
          <p className="mt-2 text-[14px] leading-[1.5] text-on-dark">
            Tell us what you need and we&apos;ll point you to the right place.
          </p>
        </div>

        <div className="grid gap-1 p-3">
          {ACTIONS.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="group flex items-center gap-3 rounded-md px-3 py-[11px] font-display text-[14.5px] font-semibold text-ink transition-colors duration-200 ease-brand hover:bg-bg-2"
            >
              <span
                className={
                  "grid h-9 w-9 flex-none place-items-center rounded-[10px] " +
                  (a.primary
                    ? "bg-grad-teal text-[#04231f]"
                    : "bg-[rgba(18,181,176,0.1)] text-teal-600")
                }
              >
                <Icon name={a.icon} className="h-[18px] w-[18px]" />
              </span>
              <span>{a.label}</span>
              <Icon
                name="arrow"
                className="ml-auto h-4 w-4 text-muted-2 transition-transform duration-200 ease-brand group-hover:translate-x-[3px] group-hover:text-teal-600"
              />
            </Link>
          ))}
        </div>

        <div className="border-t border-line px-5 py-[14px] text-[12.5px] text-muted">
          Prefer email? <a href={`mailto:${EMAILS.hello}`} className="text-teal-600">{EMAILS.hello}</a>
        </div>
      </div>
    </div>
  );
}
