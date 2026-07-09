"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { FOOTER_COLUMNS, EMAILS } from "@/lib/site";

export default function Footer() {
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const em = inputRef.current;
    if (!em) return;
    if (!em.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value)) {
      em.style.borderColor = "var(--threat)";
      em.focus();
      return;
    }
    // No backend in static build — wire this to your email provider.
    setDone(true);
  }

  return (
    <footer className="footer relative overflow-hidden bg-navy-950 pt-[clamp(56px,7vw,88px)] text-on-dark-mut">
      <svg
        className="topo absolute inset-0 text-mint opacity-[0.14]"
        viewBox="0 0 1200 400"
        fill="none"
        stroke="currentColor"
        preserveAspectRatio="xMidYMid slice"
      >
        <g strokeOpacity="0.5">
          <path d="M-50 120C200 60 360 200 560 150S900 40 1260 120" />
          <path d="M-50 200C200 140 380 280 580 220S920 100 1260 200" />
          <path d="M-50 290C220 230 400 370 600 310S940 200 1260 290" />
        </g>
      </svg>

      <div className="container-x relative z-[2]">
        {/* Newsletter */}
        <div className="footer-news flex flex-wrap items-center justify-between gap-[30px] border-b border-white/[0.08] pb-10 pt-[6px]">
          <div>
            <h4 className="text-white text-[clamp(20px,2.4vw,27px)]">Stay ahead of threats.</h4>
            <p className="mt-[6px] max-w-[46ch] text-[14px] text-on-dark-mut">
              Get Sentrix insights on proactive security, AI surveillance and safety intelligence.
            </p>
          </div>
          {!done ? (
            <form className="flex flex-none gap-[10px]" onSubmit={onSubmit} noValidate>
              <label htmlFor="newsEmail" className="sr-only-x">
                Email address
              </label>
              <input
                id="newsEmail"
                ref={inputRef}
                name="email"
                type="email"
                placeholder="Your work email"
                required
                autoComplete="email"
                className="w-[min(320px,58vw)] rounded-pill border-[1.5px] border-white/[0.16] bg-white/[0.05] px-4 py-[13px] text-[14.5px] text-white outline-none placeholder:text-on-dark-mut focus:border-teal focus:shadow-[0_0_0_4px_rgba(18,181,176,0.18)]"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe <Icon name="arrow" />
              </button>
            </form>
          ) : (
            <p className="w-full font-semibold text-[14px] text-mint">Thanks — you&apos;re on the list.</p>
          )}
        </div>

        {/* 5-col */}
        <div className="footer-top grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-12 pt-12 min-[481px]:grid-cols-2 min-[1025px]:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="footer-brand">
            <Link href="/" aria-label="Sentrix home" className="flex items-center gap-[11px]">
              <span className="flex h-10 flex-none items-center" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/logo.svg" width={37} height={40} alt="" className="h-10 w-auto" />
              </span>
              <span className="font-display text-[20px] font-bold tracking-[0.06em] text-white">
                SENTRI<b className="text-teal font-bold">X</b>
              </span>
            </Link>
            <p className="my-[18px] max-w-[34ch] text-[14px] leading-[1.7]">
              An AI-powered Safety Intelligence Ecosystem. We help people, organisations and
              governments anticipate risks, monitor threats and respond faster — to know earlier,
              act faster, and stay safer.
            </p>
            <div className="my-4 grid gap-2">
              <a
                href={`mailto:${EMAILS.hello}`}
                className="flex items-center gap-[9px] text-[13.5px] text-on-dark-mut hover:text-white"
              >
                <Icon name="mail" className="h-[15px] w-[15px] text-mint" />
                {EMAILS.hello}
              </a>
              <a
                href="tel:+10000000000"
                className="flex items-center gap-[9px] text-[13.5px] text-on-dark-mut hover:text-white"
              >
                <Icon name="phone" className="h-[15px] w-[15px] text-mint" />
                +1 (000) 000-0000
              </a>
            </div>
            <div className="flex gap-[10px]">
              {[
                { icon: "in", label: "Sentrix on LinkedIn" },
                { icon: "x-social", label: "Sentrix on X" },
                { icon: "yt", label: "Sentrix on YouTube" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-[11px] border border-white/10 bg-white/[0.06] text-on-dark-mut transition-all duration-[250ms] ease-brand hover:-translate-y-[2px] hover:border-teal hover:bg-teal hover:text-[#04201f]"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <h5 className="mb-4 font-display text-[13px] uppercase tracking-[0.04em] text-white">
                {col.title}
              </h5>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block py-[6px] text-[14px] transition-[color,padding] duration-200 hover:pl-1 hover:text-mint"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom flex flex-wrap items-center justify-between gap-4 py-[26px] text-[13px] max-[480px]:flex-col max-[480px]:items-start">
          <span>© 2026 Sentrix Global Technologies Limited. All rights reserved.</span>
          <div className="flex flex-wrap gap-[22px]">
            <Link href="/privacy" className="hover:text-mint">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-mint">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-mint">
              Cookies
            </Link>
            <Link href="/security" className="hover:text-mint">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
