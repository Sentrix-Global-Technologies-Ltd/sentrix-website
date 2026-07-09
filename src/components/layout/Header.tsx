"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { NAV_LINKS, SOLUTION_PAGES } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  // Close the mobile menu on Escape and on route change.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => setMenuOpen(false), [pathname]);

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("sentrix-theme", next);
    } catch {
      /* ignore */
    }
    setDark(next === "dark");
  }

  const isActive = (href: string) => {
    if (href === "/solutions") return SOLUTION_PAGES.includes(pathname);
    return pathname === href;
  };

  const navLinkClass = (href: string) =>
    "nav-link relative text-[14.5px] font-medium px-[14px] py-[9px] rounded-pill transition-[color,background] duration-200 ease-brand" +
    (isActive(href)
      ? " is-active text-navy bg-[rgba(18,181,176,0.08)] dark:text-white"
      : " text-ink-2 hover:text-navy hover:bg-[rgba(18,181,176,0.09)] dark:hover:text-mint");

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="nav-wrap fixed inset-x-0 top-[14px] z-50 px-[var(--gut)]">
        <nav
          id="nav"
          aria-label="Primary"
          className={
            "mx-auto flex max-w-container items-center gap-6 rounded-pill border border-[var(--glass-border)] bg-[var(--glass)] py-[11px] pl-5 pr-[14px] backdrop-blur-[18px] backdrop-saturate-[1.6] transition-[box-shadow,background] duration-300 ease-brand " +
            (scrolled
              ? "bg-[var(--glass-strong)] shadow-[0_14px_36px_-14px_rgba(13,27,76,0.26)]"
              : "shadow-[0_10px_30px_-12px_rgba(13,27,76,0.18),inset_0_1px_0_rgba(255,255,255,0.6)]")
          }
        >
          <Link href="/" aria-label="Sentrix home" className="brand mr-auto flex items-center gap-[11px] group">
            <span
              className="logo flex h-10 flex-none items-center transition-transform duration-300 ease-brand group-hover:-rotate-[4deg] group-hover:scale-[1.04]"
              style={{ filter: "drop-shadow(0 4px 10px rgba(13,27,76,.18))" }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.svg" width={37} height={40} alt="" className="h-10 w-auto" />
            </span>
            <span className="font-display text-[20px] font-bold tracking-[0.06em] text-navy dark:text-ink">
              SENTRI<b className="text-teal font-bold">X</b>
            </span>
          </Link>

          <div className="nav-links hidden items-center gap-1 min-[761px]:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={navLinkClass(l.href)}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta flex items-center gap-[10px]">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title="Toggle theme"
              className="theme-toggle grid h-11 w-11 flex-none place-items-center rounded-full border-[1.5px] border-line-2 bg-surface text-navy transition-[color,border-color,background,transform] duration-[250ms] ease-brand hover:-translate-y-px hover:border-teal hover:text-teal-600 dark:bg-[var(--surface-tint)] dark:text-mint"
            >
              <Icon name="sun" className="i-sun h-[19px] w-[19px]" />
              <Icon name="moon" className="i-moon h-[19px] w-[19px]" />
            </button>
            <Link
              href="/contact"
              className="btn btn-primary magnetic hidden min-[761px]:inline-flex"
              data-magnetic="0.25"
            >
              Request a Demo <Icon name="arrow" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="nav-toggle grid h-11 w-11 place-items-center rounded-full text-navy min-[761px]:hidden dark:text-ink"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={
          "fixed inset-0 z-[49] bg-[rgba(8,18,52,0.5)] backdrop-blur-[6px] transition-opacity duration-300 ease-brand " +
          (menuOpen ? "opacity-100" : "pointer-events-none opacity-0")
        }
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
      >
        <div
          className={
            "absolute left-[var(--gut)] right-[var(--gut)] top-[76px] rounded-lg bg-surface p-4 shadow-lg transition-transform duration-300 ease-brand " +
            (menuOpen ? "translate-y-0" : "-translate-y-[12px]")
          }
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-4 py-[14px] text-[16px] font-semibold text-navy hover:bg-bg-2 dark:text-ink dark:hover:bg-bg-2"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary mt-[10px] w-full"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </>
  );
}
