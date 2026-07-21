# Design

Visual system of record. Source: `src/styles/global.css` (tokens are the truth;
this file explains them).

## Theme

Light default, dark via `prefers-color-scheme` only (no toggle — zero client JS).
`color-scheme: light dark` declared on `:root`.

## Color (OKLCH)

| Role | Light | Dark |
|------|-------|------|
| bg | `oklch(1 0 0)` | `oklch(0.13 0 0)` |
| surface | `oklch(0.97 0.005 36)` | `oklch(0.17 0.004 36)` |
| ink | `oklch(0.22 0.012 36)` | `oklch(0.93 0.005 36)` |
| muted | `oklch(0.45 0.015 36)` | `oklch(0.72 0.01 36)` |
| primary (terracotta) | `oklch(0.52 0.14 36)` | `oklch(0.68 0.13 40)` |
| rule (hairlines) | `oklch(0.88 0.008 36)` | `oklch(0.28 0.006 36)` |

Strategy: restrained-committed. Terracotta is the only accent — CTA fill, link
underlines/hover, pipeline numbers, selection. No second decorative color.

## Typography

- Display: **Spectral** 500/600 (h1–h3, wordmark). h1 `clamp(2.1rem → 3.4rem)`,
  letter-spacing −0.015em, `text-wrap: balance`.
- Body/UI: **Public Sans** 400/600. Base 1.0625rem / 1.65.
- Measure: 68ch (`--measure`); ledes 58–60ch at 1.15rem.
- Both self-hosted via Fontsource, latin subsets.

## Layout

- Shell: `.wrap` = `min(100% − 3rem, 72rem)` centered.
- Report grammar: `.section` (hairline `border-top`, `--space-section` fluid
  padding) + `.section-grid` (11rem sticky label rail left / content right; stacks
  under 56rem).
- No cards. The only numbered element is the Neotest pipeline (a real sequence),
  rendered as a styled `<ol>`.

## Motion

Hover/focus color transitions (120ms ease-out) only. `prefers-reduced-motion`
neutralizes everything.

## Components

- `Base.astro` — head (meta, canonical, hreflang en/fr/x-default, OG), skip link, chrome.
- `Header.astro` — wordmark, nav, bordered locale switch pill.
- `Footer.astro` — availability line (strong `border-top`), contact links, colophon.
- `Pipeline.astro` — ordered list, `decimal-leading-zero` terracotta counters, ruled rows.
