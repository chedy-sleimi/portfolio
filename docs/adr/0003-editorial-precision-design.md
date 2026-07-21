# ADR-0003: "Editorial precision" visual direction

Date: 2026-07-21 · Status: accepted

## Context

Brand personality: precise and rigorous — the site itself is the QA candidate's proof
of craft. Reader: an EU recruiter at a desk in daylight. Rejected directions:
dev-terminal cosplay, flashy animation showcase, monochrome-only.

## Decision

- Pure white body (`oklch(1 0 0)`) light default; pure near-black dark via
  `prefers-color-scheme`. No theme toggle (would need JS; ADR-0001).
- One accent: terracotta, hue 36° (`--primary: oklch(0.52 0.14 36)` light /
  `oklch(0.68 0.13 40)` dark). No second decorative color.
- Type: Spectral (display serif) + Public Sans (body) — deliberate pair on a
  serif/grotesque contrast axis; both self-hosted.
- "Report grammar": hairline-ruled sections with the heading in a left label rail
  (sticky on desktop) — echoes a test report without terminal costume.
- Motion: essentially none; hover/focus transitions only, with a
  `prefers-reduced-motion` kill switch. Restraint is the voice.
- The only numbered element is the Neotest pipeline — a real sequence.

## Consequences

The design lives or dies on typography, spacing, and flawless execution. Any broken
detail contradicts the positioning; verification (screenshots at 3 viewports × 2
schemes, link checks, Lighthouse) is part of the definition of done.
