# Sentrix — Next.js migration

A production-ready Next.js (App Router) rebuild of the original static HTML site, built for
pixel-perfect visual parity with `../original-html`.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens mapped to CSS variables so utilities theme-swap under
  `[data-theme="dark"]`
- Reusable components, accessible markup, responsive, light/dark mode

## Getting started

```bash
cd sentrix-web
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

> Note: dependencies were not installed in the build sandbox (no registry access there), so run
> `npm install` once locally before the first `npm run dev`.

## Project structure

```
src/
  app/
    layout.tsx        # html shell, fonts, no-flash theme script, SEO metadata + JSON-LD, chrome
    page.tsx          # homepage composition
    globals.css       # design tokens (light/dark), base styles, bespoke-effect layer
  components/
    layout/           # IconSprite, Header, Footer, Concierge, ClientFX (global motion)
    home/             # Hero, Marquee, Problem, Ecosystem, Capabilities,
                      #   SolutionsTeaser, IndustriesTeaser, CtaBand
    ui/               # Icon
  hooks/              # (motion centralised in layout/ClientFX)
  lib/site.ts         # nav + footer data, active-state helpers
public/assets/        # logo.svg, hero-city.webp, ai-core.webp, soc-command.webp
```

## How theming works

`globals.css` defines all design tokens as CSS variables under `:root` and overrides them under
`html[data-theme="dark"]`. `tailwind.config.ts` maps Tailwind color/shadow/radius/font utilities to
those variables (e.g. `bg-bg`, `text-ink`, `border-line`). Toggling the theme swaps the variables,
so every utility updates automatically — no per-component dark variants needed for tokens.

The inline `<script>` in `layout.tsx` sets `data-theme` before paint (from `localStorage` or the OS
preference) to prevent a flash of the wrong theme.

## Pages

All 23 pages of the original site are migrated:

- **Home** (`/`)
- **Solutions** (`/solutions`) and the six product pages: `/sentrixgo`, `/verified-transport`,
  `/visionguard`, `/soc`, `/insurance`, `/fleet`
- **Industries** (`/industries`) with the animated global network map
- **About** (`/about`), **Contact** (`/contact`, live demo form)
- **Company/resources**: `/partners`, `/investors`, `/careers`, `/insights`, `/faq`, `/security`,
  plus the two articles `/insight-smarter-cameras` and `/insight-proactive-vs-reactive`
- **Legal**: `/privacy`, `/terms`, `/cookies`
- **404**: `not-found.tsx`

Shared chrome (nav, footer, concierge, icon sprite, scroll-progress, grain) and all motion (scroll
reveal, counters, parallax, tilt, magnetic buttons, spotlight, marquee, hero line-mask,
smooth-scroll) are in place and respect `prefers-reduced-motion`.
