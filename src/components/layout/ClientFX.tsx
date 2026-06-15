"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global interaction layer — faithful port of the original app.js motion code:
 * scroll reveal, animated counters, hero headline line-mask, scroll progress +
 * parallax, cursor spotlight, 3D tilt, magnetic buttons, marquee loop,
 * network-map reveal, and anchor smooth-scroll. All respect reduced-motion.
 *
 * Nav scroll-shadow, theme toggle and mobile menu live in <Header> (stateful).
 */
export default function ClientFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- Marquee: duplicate for seamless loop ---------- */
    const marquee = document.getElementById("marquee");
    if (marquee && !reduceMotion && marquee.dataset.looped !== "1") {
      marquee.innerHTML += marquee.innerHTML;
      marquee.dataset.looped = "1";
    }

    /* ---------- Scroll reveal ---------- */
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- Animated counters ---------- */
    function animateCount(el: HTMLElement) {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }
      const dur = 1400;
      let start: number | null = null;
      function step(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    }
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if ("IntersectionObserver" in window && !reduceMotion) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target as HTMLElement);
              cio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    } else {
      counters.forEach(animateCount);
    }

    /* ---------- Premium motion ---------- */
    const heroH1 = document.querySelector<HTMLElement>(".hero h1");
    if (reduceMotion) {
      if (heroH1) heroH1.classList.add("in");
    } else {
      if (heroH1)
        requestAnimationFrame(() => {
          setTimeout(() => heroH1.classList.add("in"), 140);
        });

      const progress = document.querySelector<HTMLElement>(".scroll-progress");
      const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      let ticking = false;
      function onScrollFX() {
        const st = window.scrollY || document.scrollingElement?.scrollTop || 0;
        if (progress) {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.transform = "scaleX(" + (h > 0 ? Math.min(st / h, 1) : 0) + ")";
        }
        for (const el of parallaxEls) {
          const speed = parseFloat(el.getAttribute("data-parallax") || "0.12") || 0.12;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          el.style.transform = "translate3d(0," + (-center * speed).toFixed(1) + "px,0)";
        }
        ticking = false;
      }
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(onScrollFX);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScrollFX();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));

      // Cursor spotlight
      document.querySelectorAll<HTMLElement>(".spotlight").forEach((el) => {
        const handler = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
          el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
        };
        el.addEventListener("pointermove", handler);
        cleanups.push(() => el.removeEventListener("pointermove", handler));
      });

      // Subtle 3D tilt
      document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
        const max = parseFloat(el.getAttribute("data-tilt") || "5") || 5;
        let raf: number | null = null;
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.style.transform =
              "perspective(1100px) rotateX(" +
              (-py * max).toFixed(2) +
              "deg) rotateY(" +
              (px * max).toFixed(2) +
              "deg)";
          });
        };
        const leave = () => {
          if (raf) cancelAnimationFrame(raf);
          el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });

      // Magnetic buttons
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
        const strength = parseFloat(el.getAttribute("data-magnetic") || "0.28") || 0.28;
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * strength;
          const y = (e.clientY - r.top - r.height / 2) * strength;
          el.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)";
        };
        const leave = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });

      // Network-map nodes/arcs reveal
      const netmap = document.querySelector<HTMLElement>(".netmap-svg");
      if (netmap && "IntersectionObserver" in window) {
        const nio = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add("live");
                nio.unobserve(en.target);
              }
            });
          },
          { threshold: 0.3 }
        );
        nio.observe(netmap);
        cleanups.push(() => nio.disconnect());
      }
    }

    /* ---------- Smooth-scroll offset for fixed nav ---------- */
    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute("href") || "";
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
      };
      a.addEventListener("click", handler);
      anchorHandlers.push([a, handler]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
