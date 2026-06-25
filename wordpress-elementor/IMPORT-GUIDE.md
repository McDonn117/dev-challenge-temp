# Safe Traffic Management — Elementor Import Guide

Convert the homepage mockup (`project/index.html`) into your Kinsta WordPress site
using **Elementor Pro**. This folder contains an importable page template plus the
brand CSS, so most of the page is placed for you in one click. A short finishing
pass in the editor wires up the bits that can't travel inside a template file.

> **Why this isn't 100% "zero-touch":** I can't log into your Kinsta site from
> here, so I can't build it directly. Elementor pages *are* JSON, though, so the
> template below imports the whole page automatically — you then upload the
> images/fonts, paste the CSS once, and do the Theme-Builder/form steps Elementor
> can't carry inside a page export.

---

## What's in this folder

| File | What it is |
|------|------------|
| `stm-homepage-elementor.json` | The full homepage as an importable Elementor page (18 sections). |
| `stm-global.css` | All brand + component styling (palette, fonts, card accents, hovers, frosted-on-blue cards, ghost testimonial text). |
| `build.py` | The script that regenerated the two files from the mockup (re-run if the mockup changes). |

**Images & fonts to upload** live in the existing repo (not duplicated here):
- Images: `project/assets/` (photos, logos, certs, maps, `fivebyfive-icon-white.png`).
- Fonts: `project/_ds/safe-traffic-management-design-system-*/assets/fonts/` (`archivo-var.woff2`, `ibmplexmono-400/500/600.woff2`).

**Build approach:** *Hybrid.* Structure + interactivity import automatically; the
brand look lives in `stm-global.css` (the editable "global" layer). Each section is
its own Elementor container, so you can progressively rebuild any block with native
widgets later — see [§7](#7-optional-make-sections-natively-editable).

---

## Prerequisites

- WordPress on Kinsta with **Elementor** + **Elementor Pro** active.
- A theme that plays well with Elementor (Hello Elementor recommended).
- Admin access to **Elementor → Site Settings** and **Templates**.

---

## Step 1 — Upload the assets and note your uploads URL

1. Gather the upload bundle from the repo:
   - everything in `project/assets/` (keep the `photos/ logos/ certs/ maps/`
     subfolders), and
   - the 4 webfonts from
     `project/_ds/safe-traffic-management-design-system-*/assets/fonts/` into a
     `fonts/` subfolder.
   Upload them via SFTP/Kinsta file manager into `wp-content/uploads/stm/` so you
   end up with, e.g.:
   `https://YOURSITE.com/wp-content/uploads/stm/photos/...`,
   `.../stm/logos/...`, `.../stm/fonts/...`
   - SFTP/Kinsta file manager keeps the folder structure intact (easiest).
   - If you use the Media Library instead, the subfolder paths change — SFTP is
     strongly recommended so the paths in the template "just work".
2. Note your base URL — everything below calls it **`STM_ASSETS`**:
   ```
   STM_ASSETS  =  https://YOURSITE.com/wp-content/uploads/stm
   ```

## Step 2 — Point the files at your uploads URL

Both `stm-global.css` and `stm-homepage-elementor.json` contain the placeholder
`STM_ASSETS`. Replace it with your real base URL **before** importing/pasting.

- **Easiest:** open each file in a text editor and Find & Replace
  `STM_ASSETS` → `https://YOURSITE.com/wp-content/uploads/stm` (no trailing slash).
- **Command line (optional):**
  ```bash
  sed -i 's#STM_ASSETS#https://YOURSITE.com/wp-content/uploads/stm#g' \
      stm-global.css stm-homepage-elementor.json
  ```

## Step 3 — Register the brand fonts

The CSS already includes `@font-face` rules for **Archivo** and **IBM Plex Mono**
pointing at `STM_ASSETS/fonts/...`, so once Step 2 is done the fonts load
automatically — no extra plugin needed.

*Preferred (cleaner) alternative with Elementor Pro:*
**Elementor → Custom Fonts → Add New**, upload `archivo-var.woff2` (weights 100–900)
and the three `ibmplexmono-*.woff2` files, name them exactly **Archivo** and
**IBM Plex Mono**. If you do this you can delete the `@font-face` block at the top
of `stm-global.css`.

## Step 4 — Set Global Colors & Fonts (brand lock)

**Elementor → Site Settings → Global Colors.** Set the four brand colours so any
native widgets you add later inherit them:

| Role | HEX |
|------|-----|
| Primary | `#F48D26` (hi-vis orange) |
| Secondary | `#2864A9` (governance blue) |
| Text | `#383837` (charcoal) |
| Accent | `#1A4169` (deep blue) |

Plus greys used throughout: `#F1F2F2` (light grey) and `#FEFEFE` (off-white).
**Use only these** — the brand has a strict 5-colour palette lock.

**Site Settings → Global Fonts:** Primary = **Archivo**, Secondary = **IBM Plex Mono**.
Headings are **uppercase**, heavy weight (800), tight letter-spacing.

## Step 5 — Paste the global CSS

**Site Settings → Custom CSS**, paste the entire contents of `stm-global.css`, then
**Update**. (On very large sites you may prefer to load it via a child theme
stylesheet or a code snippet — either works.) This is what makes the imported
page look pixel-correct.

## Step 6 — Import the homepage template

1. **Templates → Saved Templates → Import Templates** → choose
   `stm-homepage-elementor.json` → Import.
2. Create/open the page you want as the homepage, click **Edit with Elementor**.
3. In the editor: **folder icon (Add Template) → My Templates →** insert
   **STM Homepage**.
4. The page template is set to **Elementor Canvas** (full-width, no theme
   chrome) inside the file. Confirm under the page's **⚙ Settings → Page Layout =
   Elementor Canvas** if needed.
5. **Settings → Reading → Homepage displays → A static page →** select this page.

You should now have the full homepage: hero, orange CTA strip, intro, **services
carousel**, animated **stat counters**, about, why-choose-us, compliance,
**testimonial slider**, careers, capability, industries, **FAQ accordion**,
**location tabs + maps**, contact form, and footer. The carousel, counters,
accordion, tabs, FAQ and form all work out of the box — their JavaScript (and the
Lucide icon library) rides along in the final "Scripts" section of the template.

---

## Step 7 (recommended) — Finishing pass

These are the parts a page export can't carry. Budget ~30–60 min.

### a) Header & footer → Theme Builder
The template includes the header and footer as page sections so you see the whole
design immediately, but for a real site they should be **site-wide**:
1. **Templates → Theme Builder → Header → Add New.** Rebuild the nav with the
   Elementor Pro **Nav Menu / Mega Menu** widget (Services, Safety & Compliance,
   Industries, Capability, About, Contact + the "Request A Quote" button and
   `1300 786 233` call link). Set the orange top-strip + transparent→solid-on-scroll
   behaviour via the header settings (sticky + background-on-scroll).
2. **Theme Builder → Footer → Add New** for the 6-column footer, contact bar,
   certifications row and legal line.
3. Once both exist, **delete the Header and Footer sections from the page** so they
   aren't duplicated.

### b) Contact form email routing
The imported contact form is the mockup's front-end markup (shows a success
message but doesn't send). Replace it with an **Elementor Pro Form** widget so
submissions actually email you:
1. Delete the HTML form inside the Contact section's card.
2. Drop in a **Form** widget with fields: Contact name*, Organisation, Email*,
   Phone, Site/project*, Scope of works.
3. **Form → Actions After Submit → Email**: send to
   `operations@safetrafficmanagement.com.au` (confirm address with the client).
   Optionally add the **Webhook** action to push to a CRM/Google Sheet later
   (this was on the project to-do list).

### c) Internal links
Service/industry/location links currently point at the mockup's `.html` files
(e.g. `services.html`). Update them to your real WordPress page URLs as those pages
are built, or set to `#` for launch.

### d) Content to confirm before launch (from the project handover)
- **Verify the stats** — "200+ controllers", "15+ years", "$20M PL",
  "76 Google reviews" — STM is brand-new; confirm or reword with Kurt.
- **Replace placeholder photos** (currently iStock) with real STM crew/site shots.
- Add **Privacy / WHS / Terms** pages and link them in the footer.
- Confirm name spellings (Kurt, Shanaka) in any client-facing copy.

---

## Step 7 (optional) — Make sections natively editable

Each section imported as one **HTML widget** inside its own container, which keeps
it pixel-perfect but means you edit that section as HTML. To make a section fully
visual-editable, rebuild it with native widgets and reuse the brand styling via CSS
classes (the global CSS already targets these classes, so the look is preserved):

| Mockup section | Native Elementor widgets to use | Reuse these CSS classes |
|----------------|----------------------------------|--------------------------|
| Hero | Heading, Text Editor, Button ×2, Icon List | `hero`, `hl`, `btn btn--primary`, `hero__trust` |
| Intro points | Icon Box ×6 | `intro-point`, `intro-point__icon` |
| Services carousel | **Loop Carousel** / Media Carousel | `svc-tile`, `svc-tile__title` |
| Stats | **Counter** ×4 | `stat-card`, `stat-card__value`, `stat-card__bar` |
| About / Careers | Heading, Text Editor, Icon List, Image | `about-grid`, `about-value`, `hl` |
| Why-choose / Compliance / Industries | Icon Box (in a 3/4-col container) | `usp-card`, `svc-card`, `ind-card` |
| Testimonials | **Testimonial Carousel** | `tst-card`, `tst-text`, `google-badge` |
| Capability | Icon Box / Icon List (on dark container) | `cap-card`, `cap-list`, `cap-tag` |
| FAQ | **Accordion** | `faq-item`, `faq-q`, `faq-a` |
| Locations | **Tabs** + Image | `loc-tab`, `loc-grid`, `loc-map` |
| Contact | **Form** (see 7b) | `contact-card`, `close-points` |

Add the class names under each widget's **Advanced → CSS Classes**. Convert
sections one at a time and preview as you go.

---

## Notes & caveats

- **Icons:** the design uses **Lucide** icons (`data-lucide="…"`). The template
  loads Lucide from a CDN and renders them automatically. If you later rebuild a
  section natively, swap to Elementor's icon picker (Font Awesome) or keep Lucide
  via an HTML/Icon widget.
- **Palette lock:** stick to the 5 approved colours. The CSS enforces them; don't
  introduce new hues.
- **Fidelity vs. Elementor versions:** the JSON targets Elementor's container
  (flexbox) format. If your Elementor is older than the container era, enable
  **Experiments → Flexbox Container**, or import still works but as a flat page.
- **Re-generating:** if the mockup changes, re-run `python3 wordpress-elementor/build.py`
  from the repo root to rebuild both files, then repeat Steps 2, 5, 6.
- **Live reference:** the original mockup is deployed at
  https://safe-traffic-management.vercel.app for side-by-side checking.
