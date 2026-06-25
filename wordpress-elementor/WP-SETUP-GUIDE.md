# STM Homepage — WordPress Build Guide (Elementor Pro + ACF Pro)

Mirrors the agency build process: real **custom post types**, **custom fields**,
**dynamic content**, and **reusable templates** — not a static HTML dump. Built
to be edited in wp-admin like any normal project.

**Target:** `https://stg-mcdonntest-devstg.kinsta.cloud`
**Stack:** Elementor Pro · ACF Pro · brand CSS (all Claude-generated)

> **Two execution modes** (you chose *both*):
> - **Live (preferred):** once this environment's egress to the Kinsta host is
>   open, Claude seeds all content over the REST API automatically (`seed_rest.py`).
> - **Manual fallback:** you import/seed via wp-admin. Either way the ACF config
>   and the Elementor templates are imported by you in a couple of clicks (REST
>   has no endpoint to *create* ACF/Elementor definitions).

---

## Folder map (`wordpress-elementor/`)

| File | Purpose |
|------|---------|
| `wp-build/acf-export.json` | ACF Pro import: 5 CPTs + 5 field groups (REST-enabled) |
| `wp-build/content-seed.json` | All CPT content (9 services, 4 industries, 4 locations, 3 testimonials, 2 team) |
| `wp-build/seed_rest.py` | REST seeder — uploads images + creates posts + sets ACF fields |
| `wp-build/build_wp.py` | Regenerates the two JSON files from source |
| `stm-global.css` | Brand + component CSS (palette, fonts, accents, hovers) |
| `templates/` | Elementor + Theme Builder templates *(next phase)* |

---

## Phase A — Plugins & theme (5 min)

1. **Plugins → Add New** → install & activate **Elementor** + **Elementor Pro** + **ACF Pro**.
2. Activate a clean Elementor-friendly theme (**Hello Elementor** recommended).
3. **Elementor → Settings → Features** → enable **Flexbox Container** (and **Nested Elements**).

## Phase B — Upload assets (5 min)

1. Upload the repo's `project/assets/` (keep `photos/ logos/ certs/ maps/`) and the
   4 fonts from `project/_ds/safe-traffic-management-design-system-*/assets/fonts/`
   into `wp-content/uploads/stm/` via Kinsta SFTP.
2. Your base URL = `STM_ASSETS`, e.g. `https://stg-mcdonntest-devstg.kinsta.cloud/wp-content/uploads/stm`.
3. In `stm-global.css` (and later the templates), find/replace `STM_ASSETS` with that URL.
   - *Live mode note:* `seed_rest.py` uploads the photos/maps to the **Media Library**
     instead and sets ACF image fields to the attachment IDs, so for content images
     you don't need step 3 — it's only for CSS backgrounds (hero, contact).

## Phase C — Import the content model (2 min)

1. **ACF → Tools → Import** (Field Groups, Post Types & Taxonomies).
2. Upload **`wp-build/acf-export.json`** → Import.
3. You should now see **Services, Industries, Locations, Testimonials, Team** in the
   admin menu, each with its custom fields, all **Show in REST = On**.

## Phase D — Seed the content

**Live mode (Claude does it):** once egress to the site is open, Claude runs:
```bash
export STM_SITE='https://stg-mcdonntest-devstg.kinsta.cloud'
export STM_USER='Mcdonn-5x5'
export STM_PW='your application password'
python3 wordpress-elementor/wp-build/seed_rest.py        # --dry-run to preview
```
This uploads each image, creates all 22 posts, and fills the ACF fields. Idempotent
— safe to re-run (updates by slug).

**Manual mode:** add the posts under each CPT menu and paste the field values from
`content-seed.json`. (Slower; only if you can't open egress.)

## Phase E — Templates & homepage

See `templates/` + the template section of this guide *(being built now)*: import the
Elementor page + Theme Builder header/footer/CTA, select the loop-item templates for
the dynamic sections, set Theme Builder display conditions, paste `stm-global.css`
into **Site Settings → Custom CSS**, and set the page as the homepage.

---

## Pre-launch content flags (from the client brief + handover)

- **Stats are placeholders.** Content brief says stats = *"New business."* The
  hero/stat numbers ("15+ years", "200+ controllers", "$20M PL", "76 reviews")
  must be confirmed or reworded — content is compliance-restricted.
- **Team names** (Kurt, Shanaka) and bios are placeholders — confirm before launch.
- **Social links** — brief says no socials yet; hide footer icons until accounts exist.
- **Northern NSW** — brief says service area is "mostly SE QLD"; confirm NNSW is in scope.
- **Photos** are iStock placeholders — swap for real STM crew shots.

## Security

Revoke the Application Password (**Users → Profile → Application Passwords**) once
the build is complete.
