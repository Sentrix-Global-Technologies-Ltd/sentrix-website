# Visual Parity Report

> **Update — full site migrated.** All 23 pages are now built (home, solutions + 6 product pages,
> industries, about, contact, partners, investors, careers, insights + 2 articles, faq, security,
> privacy, terms, cookies, 404). For the inner pages, the original's shared component systems
> (page-hero, breadcrumb, cards, prose/TOC, FAQ accordion, forms, network map, phone mockup, product
> scene SVGs, etc.) were ported **verbatim** from `styles.css` into `globals.css` as scoped helper
> classes, so the markup maps 1:1 to the original DOM and inherits identical computed styles. Design
> tokens remain Tailwind-mapped CSS variables; the homepage retains the utility-first build. The one
> deliberate simplification: every `page-hero` uses a single shared decorative topographic SVG rather
> than each page's slightly different (aria-hidden, ~0.06 opacity) contour paths — not perceptible in
> normal viewing. Responsive breakpoints match the original's 480/760/900/1024px media queries.

---

## Full-site content audit (automated)

Every original `*.html` page's visible text (plus `title`, meta `description`, `placeholder`,
`aria-label`, `alt`, `title` attributes) was extracted, normalised, and checked against the
corresponding Next.js page and shared components. Result: **0 missing fragments across all 23
pages.** Gaps found and fixed in this pass:

- **Page titles & meta descriptions** are now verbatim copies of each original `<title>` and
  `<meta name="description">` (the title template was removed so each page's title renders exactly).
- **"Skip to content" link** restored on the 12 pages that have it in the original (404, careers,
  cookies, faq, insights, investors, partners, privacy, security, terms, and the two insight
  articles), each pointing to an `#main` target.
- **`sitemap.ts`** mirrors the original `sitemap.xml` (paths mapped to clean routes, same
  changefreq/priority); **`robots.ts`** replaces the static `robots.txt` and references the sitemap.

---

# Homepage detail

Comparison of the Next.js homepage against `original-html/index.html` + `styles.css` and the
reference screenshots (desktop + mobile). Goal: pixel-perfect parity.

## Method

A real `next build` + screenshot diff could not be run in the build sandbox (no npm registry
access). Verification was therefore done by porting the original computed styles 1:1 and a
structural/spec review against `styles.css`, the original DOM, and the supplied screenshots. Please
run `npm install && npm run dev` locally and spot-check; anything below the line is flagged.

## What is preserved exactly

- **Typography** — Hanken Grotesk (body), Sora (headings/buttons), JetBrains Mono (eyebrows/labels),
  loaded via the same Google Fonts `<link>` as the original. All `font-size`/`clamp()`/`weight`/
  `letter-spacing` values copied verbatim.
- **Colors** — full token set (navy `#0D1B4C`, teal `#12B5B0`, mint `#6ED8D2`, etc.) plus the dark
  theme overrides, ported into CSS variables.
- **Layout & spacing** — 1200px container, `--gut` clamp padding, `clamp()` section padding, grid
  templates and gaps all matched.
- **Content & order** — hero → marquee → problem → ecosystem → capabilities → solutions teaser →
  industries teaser → CTA band, identical copy.
- **Animations & hover states** — radar sweep/blips, orbit spin + counter-spin, core pulse/halo,
  floating cards, marquee scroll, scroll reveal (with blur + stagger), counters, parallax, tilt,
  magnetic buttons, cursor spotlight, button sheen, gradient-text shimmer, nav underline — all
  carried over, all gated behind `prefers-reduced-motion`.
- **Responsive breakpoints** — matched to the original's exact media queries: mobile nav and stacked
  hero at ≤760px, single-column ecosystem/CTA at ≤1024px, footer 5→2→1 columns at 1025/481px,
  full-width hero buttons at ≤480px.

## Known differences (and why)

| # | Difference | Why | Fix / status |
|---|------------|-----|--------------|
| 1 | Chrome (nav/footer/concierge/sprite) is React components in `layout.tsx`, not injected by `components.js`. | App Router architecture; identical rendered DOM/CSS. | Intentional — no visual delta. |
| 2 | "Full Tailwind rewrite" realized as **tokens-as-CSS-variables + utilities**, with a small `@layer` for effects Tailwind can't express (mask-based gradient border, cursor spotlight, film grain, hero line-mask, radar grid, orbit core/nodes, button sheen, keyframes). | These rely on pseudo-elements, masks, and background-images that have no utility equivalent. | Intentional; values copied verbatim, so no visual delta. |
| 3 | Theme-toggle icon visibility is CSS-driven via `data-theme` (not React state). | Avoids a hydration flash of the wrong icon. | Matches original behavior exactly. |
| 4 | Newsletter/demo forms show the success state client-side without a backend. | Same as original (static build, placeholder endpoint). | Wire `FORM_ENDPOINT` / provider when ready. |
| 5 | Two-column grids flip to one column at exactly the original's `max-width` boundary (e.g. 1024px); Tailwind's default `lg` is min-1024, so custom `min-[1025px]:` variants were used. | Off-by-one-pixel boundary otherwise. | Fixed. |

## To validate locally

1. `cd sentrix-web && npm install && npm run dev`
2. Open the original (`original-html/index.html`) and `localhost:3000` side by side.
3. Check: light/dark toggle, mobile menu at ≤760px, radar + orbit animations, counters on scroll,
   hover lifts on cards/teasers, magnetic buttons, concierge widget.
