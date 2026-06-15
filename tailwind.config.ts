import type { Config } from "tailwindcss";

/**
 * Tokens are mapped to CSS custom properties (defined in globals.css) so that
 * Tailwind utilities (bg-bg, text-ink, border-line, ...) automatically swap
 * values under [data-theme="dark"] — mirroring the original design system.
 */
const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        "navy-700": "var(--navy-700)",
        "navy-900": "var(--navy-900)",
        "navy-950": "var(--navy-950)",
        teal: "var(--teal)",
        "teal-600": "var(--teal-600)",
        mint: "var(--mint)",
        slate: "var(--slate)",
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        brandwhite: "var(--white)",
        safe: "var(--safe)",
        warn: "var(--warn)",
        threat: "var(--threat)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        "on-dark": "var(--on-dark)",
        "on-dark-mut": "var(--on-dark-mut)",
        line: "var(--line)",
        "line-2": "var(--line-2)",
        surface: "var(--surface)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        pill: "var(--r-pill)",
      },
      boxShadow: {
        sm: "var(--sh-sm)",
        md: "var(--sh-md)",
        lg: "var(--sh-lg)",
        teal: "var(--sh-teal)",
        navy: "var(--sh-navy)",
      },
      maxWidth: {
        container: "var(--maxw)",
      },
      backgroundImage: {
        "grad-brand": "var(--grad-brand)",
        "grad-teal": "var(--grad-teal)",
        "grad-navy": "var(--grad-navy)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.22,.61,.36,1)",
        "brand-out": "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        pulse2: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".35" } },
        sweep: { to: { transform: "rotate(360deg)" } },
        spin360: { to: { transform: "rotate(360deg)" } },
        "spin-rev": { to: { transform: "rotate(-360deg)" } },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollx: { to: { transform: "translateX(-50%)" } },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: { to: { backgroundPosition: "220% center" } },
        corepulse: {
          "0%,100%": {
            boxShadow:
              "0 0 0 6px rgba(18,181,176,.06), 0 0 50px rgba(18,181,176,.45), 0 0 110px rgba(18,181,176,.3), inset 0 0 40px rgba(0,0,0,.45)",
          },
          "50%": {
            boxShadow:
              "0 0 0 10px rgba(18,181,176,.1), 0 0 70px rgba(18,181,176,.6), 0 0 150px rgba(18,181,176,.4), inset 0 0 40px rgba(0,0,0,.45)",
          },
        },
        corehalo: {
          "0%,100%": { opacity: ".7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        cpulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(18,181,176,.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(18,181,176,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(18,181,176,0)" },
        },
      },
      animation: {
        pulse2: "pulse2 2.4s cubic-bezier(.22,.61,.36,1) infinite",
        "pulse-fast": "pulse2 1.6s infinite",
        "pulse-led": "pulse2 1.8s infinite",
        "pulse-live": "pulse2 1.4s infinite",
        sweep: "sweep 4s linear infinite",
        spin360: "spin360 40s linear infinite",
        "spin-rev": "spin-rev 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        scrollx: "scrollx 32s linear infinite",
        fadeUp: "fadeUp .5s cubic-bezier(.16,1,.3,1) both",
        shimmer: "shimmer 7s linear infinite",
        corepulse: "corepulse 4.5s ease-in-out infinite",
        corehalo: "corehalo 4.5s ease-in-out infinite",
        cpulse: "cpulse 2.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
