# ADR-0002: Full English + French locales

Date: 2026-07-21 · Status: accepted

## Context

Target roles are English-language (Spain/Portugal/Poland), but the candidate's French
is a certified B2, and francophone consultancies (Capgemini, Siveco-adjacent networks)
are realistic readers. Cost acknowledged during planning: every content edit doubles.

## Decision

Two complete locales. English at `/` (default, `x-default`), French at `/fr/` via
Astro built-in i18n (`prefixDefaultLocale: false`). Separate page files per locale
(copy differs beyond string substitution); shared chrome strings in `src/i18n/ui.ts`.
Manual hreflang alternates in `Base.astro`; both locales carry identical facts.

## Consequences

Any content change edits two files. The facts rule (ADR-0004) applies to both.
French copy is reviewed by the owner before ship.
