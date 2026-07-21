# ADR-0005: GitHub + Netlify continuous deploy, netlify.app subdomain

Date: 2026-07-21 · Status: accepted

## Context

The URL goes on every CV. A custom domain reads marginally more professional but
blocks shipping on a purchase; Netlify's subdomain is free and available today.

## Decision

Public repo `github.com/chedy-sleimi/portfolio`; Netlify builds `npm run build` →
`dist` on every push to `main` (pinned in `netlify.toml`, which also sets basic
security headers). Site name `chedy-sleimi` → https://chedy-sleimi.netlify.app.
No adapter (static output). Default Netlify caching untouched — atomic deploys
already handle invalidation.

## Consequences

A custom domain can be attached later in Netlify DNS settings without changing the
repo. The subdomain is part of the public identity until then; renaming the Netlify
site would break printed CV links.
