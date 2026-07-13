# Dark theme redesign — how to apply

Drop-in replacements for the Astro site. Copy the contents of `astro/src/` over your repo's `src/`:

```
astro/src/styles/global.css            → src/styles/global.css            (full rewrite)
astro/src/layouts/BaseLayout.astro     → src/layouts/BaseLayout.astro     (new header/footer + Google Fonts)
astro/src/components/ProjectCard.astro → src/components/ProjectCard.astro (squared cards, summary body)
astro/src/pages/index.astro            → src/pages/index.astro
astro/src/pages/portfolio.astro        → src/pages/portfolio.astro
astro/src/pages/portfolio/[slug].astro → src/pages/portfolio/[slug].astro
astro/src/pages/services.astro         → src/pages/services.astro
astro/src/pages/pricing.astro          → src/pages/pricing.astro
astro/src/pages/about.astro            → src/pages/about.astro
astro/src/pages/contact.astro          → src/pages/contact.astro
```

Untouched: `src/data/projects.ts`, `src/data/site.ts`, all images, astro.config, CNAME.
All pages read from your existing data files, so adding a project to `projects.ts`
still just works.

## What changed

- **Theme**: near-black (`#0a0b0a`) with warm bronze/gold (`#c69a56`), thin hairline
  borders instead of soft cards.
- **Type**: Space Grotesk (headings/UI) + JetBrains Mono (labels, captions, nav),
  loaded from Google Fonts in `BaseLayout.astro`. Inter is no longer used.
- **Home**: personal Space Needle hero with "FIG. 01" caption, build-hours spec strip,
  featured-project grid (uses the `featured` flag in projects.ts), 5-step process band.
- **Portfolio**: numbered category headers, squared square-image cards.
- **Project detail**: back-link with category, framed hero w/ photo credit,
  challenges / fabrication / outcome panels, FIG-numbered gallery.
- **Copy**: "Designer, printer, and hands-on finisher." → "Every piece leaves the
  workshop finished."
- The gallery on detail pages skips the hero image so it isn't shown twice.

## Notes

- The mockups' drag-and-drop photo placeholders are a prototype-only feature; in the
  real site, just add gallery entries to `projects.ts` as you photograph future builds.
- If a hero photo crops awkwardly (they render at 4:3), adjust with `object-position`
  or change the aspect ratio in `.project-detail-hero .figure-frame img`.
