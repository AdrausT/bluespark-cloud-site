# Blue Spark Cloud — Site Rules

## Purpose
This repo powers the public `bluespark.cloud` landing page only.
It is a premium, conversion-focused marketing site for Blue Spark Digital.

---

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (brand tokens in `tailwind.config.ts`)
- **Animation:** framer-motion (scroll reveal, hover, mobile nav)
- **3D:** @react-three/fiber + @react-three/drei (hero scene, desktop only, lazy-loaded)
- **Fonts:** Self-hosted via @fontsource (Inter + Space Grotesk)
- **Deploy:** Netlify — base directory blank, build command `npm run build`, publish `dist`

---

## Scope Boundaries — Do Not Touch

These systems are entirely separate. This repo has zero connection to them:

- **Apex** (`apex.bluespark.cloud`) — external portal, not in this repo.
- **Booking portal** (`book.apex.bluespark.cloud`) — external portal, not in this repo.
- **GoHighLevel (GHL)** — CRM system, not referenced or linked beyond approved CTAs.
- **BSD Command Center** — internal operator dashboard, not referenced here.
- **Any internal automation, webhooks, or pipelines.**

---

## CTA URLs — Locked

The only approved outbound URLs are:

- `https://apex.bluespark.cloud`
- `https://book.apex.bluespark.cloud`

Do not add, change, or remove CTA destinations without explicit approval.

---

## Design System

- **Background palette:** `#080C18` (base) / `#0D1221` (panel) / `#101828` (card)
- **Accents:** Electric blue `#3B82F6` / Cyan `#22D3EE`
- **Type:** Space Grotesk (display headings) / Inter (body)
- **Cards:** Glassmorphism — backdrop-blur, gradient hairline border, hover lift + glow
- **Animations:** framer-motion whileInView (once:true), staggered children
- **3D hero:** Perspective grid + particles + camera parallax; lazy-loaded Canvas; disabled on mobile and prefers-reduced-motion

---

## Content Rules

- Do not invent testimonials, fake metrics, or fake client results.
- Apex Mobile Detailing is the only live example — link to real URLs only.
- XDealer Detailing is a placeholder card only — no links, no metrics.
- Do not use prohibited copy: automated SMS, instant AI replies, hands-free, fake scale.
- Do not claim capabilities that aren't real and live.

---

## Performance Rules

- The Three.js chunk must NOT appear in `<link rel="modulepreload">`.
- The 3D Canvas only renders on desktop (width >= 768px) and when prefers-reduced-motion is false.
- All font assets are self-hosted; no external font requests.
- framer-motion animations respect `prefers-reduced-motion` via global CSS.

---

## File Structure

```
/                      <- repo root = Vite project root
├── index.html         <- Vite entry (SEO/OG meta lives here)
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── netlify.toml       <- command + publish only, no base dir
├── legacy-static.html <- backup of previous static site
├── public/
│   ├── favicon.svg
│   └── _redirects
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── lib/           <- content.ts, motion.ts
    ├── hooks/         <- useReducedMotion.ts
    ├── components/    <- ui/, layout/
    ├── three/         <- HeroScene.tsx (lazy)
    └── sections/      <- Hero, Problem, BlueSparkSystem, Workflow,
                          Services, Niche, Proof, FinalCTA
```
