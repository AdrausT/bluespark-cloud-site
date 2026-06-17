# Blue Spark Cloud — Public Landing Page

This repo powers the public landing page at **bluespark.cloud**.

## What this is

A single-file static HTML landing page for the Blue Spark Cloud public brand. No build system, no dependencies, no framework.

## What this is NOT

- This is **not** the internal Command Center (`digital-fortress-security`).
- This is **not** the Apex Mobile Detailing site (`apex.bluespark.cloud`).
- This is **not** the booking portal (`book.apex.bluespark.cloud`).
- This is **not** the backend agent system (`blue_spark_agent_v1`).

Each of those systems is intentionally isolated in its own repo.

## Deployment

**Platform:** Netlify

| Setting | Value |
|---|---|
| Repository | `AdrausT/bluespark-cloud-site` |
| Branch | `main` |
| Build command | *(leave blank)* |
| Publish directory | `.` (repo root) |
| Domain | `bluespark.cloud` |

No build step required. Netlify serves `index.html` directly from the repo root.

## Live links in the page

- Apex Example: https://apex.bluespark.cloud
- Booking Portal: https://book.apex.bluespark.cloud

Do not modify those sites from this repo. They are managed separately.
