# Context

Ubiquitous language for this repo.

- **Master profile** — career-ops `about-me.md`, the single source of truth for every
  fact on the site (ADR-0004). The site never states what it can't trace there.
- **Case study** — the `/neotest/` page: words + pipeline only, no Neoalians IP.
- **Pipeline** — the six-step Neotest flow (requirements → stories → ISTQB cases →
  approval → agentic execution → results), rendered by `Pipeline.astro`.
- **Report grammar** — the section layout: hairline rule, label rail left, content
  right. The site's visual signature (ADR-0003).
- **Locale pages** — parallel page files per language (`src/pages/` = EN,
  `src/pages/fr/` = FR). Same facts, independently written copy (ADR-0002).
- **Availability line** — the footer/contact statement of location, start date, and
  sponsorship requirement. Honesty-as-strategy; never removed, never in the hero.
