# ADR-0001: Astro static output, strict TypeScript, zero client JS

Date: 2026-07-21 · Status: accepted

## Context

Two content pages per locale, read by recruiters in a 10-second skim. Plain HTML
would ship the same UX; the repo itself, however, is public proof of engineering
craft for a job search.

## Decision

Astro 7, static output, `astro/tsconfigs/strict`, no adapter, no UI framework, no
client JavaScript (dark mode is `prefers-color-scheme` only — no toggle). Hand-written
CSS, no utility framework.

`compressHTML: false`: Astro's default HTML compression collapses whitespace between
inline elements, which joined words around `<strong>` and made the footer link row an
unbreakable string that overflowed 360px viewports. Pages are small; gzip covers the
difference.

## Consequences

Shared layout/components across 4 pages; Lighthouse-perfect static delivery; nothing
to hydrate or break. Any future interactivity must justify its first `<script>`.
