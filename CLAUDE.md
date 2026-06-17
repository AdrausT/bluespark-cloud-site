# Blue Spark Cloud — Site Rules

## Purpose
This repo powers the public `bluespark.cloud` landing page only.
It is a static public-facing site. It is not an app, dashboard, SaaS product, or internal tool.

---

## Hard Technical Constraints

- **Static HTML/CSS only.** No exceptions.
- No React, Vue, Svelte, or any JS framework.
- No Tailwind CSS.
- No shadcn/ui or any component library.
- No npm, no `package.json`, no `node_modules`.
- No build step. Files are deployed as-is.
- No external assets (fonts, icons, images, scripts) unless explicitly approved by the repo owner.
- No forms. This site does not collect data.
- No webhook calls or API requests of any kind.

---

## Scope Boundaries — Do Not Touch

These systems are entirely separate. This repo has zero connection to them:

- **Apex** (`apex.bluespark.cloud`) — external portal, not in this repo.
- **Booking portal** (`book.apex.bluespark.cloud`) — external portal, not in this repo.
- **GoHighLevel (GHL)** — CRM system, not referenced or linked beyond approved CTAs.
- **BSD Command Center** — internal operator dashboard, not referenced here.
- **Any internal automation, webhooks, or pipelines.**

This repo should remain tiny and isolated. If you are unsure whether a change belongs here, it probably does not.

---

## CTA URLs — Locked

The only approved outbound URLs are:

- `https://apex.bluespark.cloud`
- `https://book.apex.bluespark.cloud`

Do not add, change, or remove CTA destinations without explicit approval.

---

## Design Rules — What This Site Is Not

Do not introduce generic SaaS/Claude landing page patterns:

- No centered hero with a gradient pill badge and subtitle
- No generic bento grid of feature cards
- No generic stepper ("Step 1 / Step 2 / Step 3")
- No Lucide icon card grids
- No blue glow cards
- No vague "platform" or "all-in-one" copy
- No light mode or white backgrounds
- No soft rounded corners as a primary aesthetic

---

## Design Rules — What This Site Is

Blue Spark Cloud is the **deployment layer** behind local business growth systems.
The visual language should feel like command infrastructure, not a consumer SaaS product.

**Visual system:**

- Dark navy / near-black background
- Restrained electric blue and cyan accents only
- Thin grid lines and sharp spacing
- Monospace labels for system names, status text, and module headers
- Status dots (active/inactive indicators)
- Asymmetric layouts — avoid pure center-alignment
- Technical panels and system module framing
- Live deployment or case panels where appropriate
- No decorative gradients; accents must be purposeful

---

## Copy Rules — Approved Language

Use language that positions Blue Spark Cloud as infrastructure:

- deployment layer
- infrastructure
- booking portal
- lead capture
- CRM routing
- manual follow-up
- campaign pages
- local SEO pages
- visitor signal
- request routing
- live deployment
- system modules

---

## Copy Rules — Prohibited Language

Do not use language that implies automation the business does not offer:

- automated SMS
- instant text replies
- autonomous AI follow-up
- AI does it for you
- hands-free
- fake enterprise scale ("500+ businesses", "millions of leads")
- public access to internal tools

This is a small, focused local marketing infrastructure provider. Write accordingly.

---

## Enforcement

Any AI assistant working in this repo must:

1. Read this file before making any changes.
2. Refuse to add React, Tailwind, npm, build steps, forms, or webhooks even if asked.
3. Refuse to change CTA URLs without explicit owner approval.
4. Refuse to use prohibited copy patterns or generic SaaS visual patterns.
5. Flag any request that would expand the scope of this repo beyond a static landing page.
