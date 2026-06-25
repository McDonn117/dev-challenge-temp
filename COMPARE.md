# Safe Traffic Management — Live vs. SEO Preview Comparison

_Generated 2026-06-11 by Five by Five (design@fivebyfive.com.au)._

Comparison of the two live Vercel deployments:

| Version | URL | Bytes |
|---|---|---|
| **Live** | https://safe-traffic-management.vercel.app/ | 98,771 |
| **SEO preview** | https://stm-seo-preview.vercel.app/ | 107,572 |

The SEO preview is an SEO-focused rework of the live site — same locked 5-colour palette, same 15 sections — but with on-page content, markup and imagery tuned for search. The changes are confined to the HTML body; the technical/structured-data layer is untouched on both.

---

## 1. H1 rewritten (keyword-first)

| | Text |
|---|---|
| **Live** | "Governed by safety. Proven by compliance." |
| **SEO** | "Traffic management services, governed by safety and compliance." |

The SEO H1 front-loads the primary keyword **"traffic management services."**

---

## 2. H2 headings changed to literal / keyword headings

Two of the twelve H2s were rewritten from marketing-flavoured to descriptive/keyword-literal:

| Live | SEO preview |
|---|---|
| "Keeping people safe while essential work gets done" | **"About Safe Traffic Management"** |
| "Trusted on site and on the record" | **"Testimonials"** |

The other 10 H2s are identical between versions.

---

## 3. Trust-strip items promoted to H3 (semantic hierarchy)

H3 count: **26 (live) → 29 (SEO)**. Three trust-strip items were promoted from `div`/`span` to `<h3>` headings:

- "$20M public liability cover"
- "24/7 reactive response"
- "South East QLD & Northern NSW"

No H3s were removed; all live H3s also appear in the SEO version.

---

## 4. Services section rebuilt as the v2 image-tile grid

The biggest structural change. The live icon cards are replaced by **9 full-photo service tiles** (the `index-v2.html` direction), each with the circular `stm-mark.png` STM badge.

- This drives the image jump from **13 (live) → 35 (SEO)** `<img>` tags.
- `stm-mark.png` appears **12×** on the SEO page (badges) vs. 0× on live.

The 9 services rendered as tiles:

1. Traffic control personnel
2. Temporary traffic management
3. Lane and shoulder closures
4. Pedestrian and cyclist management
5. Emergency response
6. Night works
7. Site monitoring and compliance reporting
8. VMS board hire
9. Permits and road occupancy

---

## 5. Descriptive alt text on imagery (the real SEO payload)

Live uses empty `alt=""` on most decorative/hero images. The SEO version adds keyword-rich alt text:

| Image | Live alt | SEO alt |
|---|---|---|
| Hero | `""` (empty) | "Safe Traffic Management traffic controller in hi-vis holding a SLOW bat at a Queensland road worksite" |
| Service tiles | n/a (icon cards) | "Traffic control personnel", "Temporary traffic management", "Lane and shoulder closures", "Pedestrian and cyclist management", "Emergency response", "Night works", "Site monitoring and compliance reporting", "VMS board hire", "Permits and road occupancy" |

`aria-label` usage also roughly doubled (7 → 14).

---

## 6. SEO-friendly image filenames

New descriptively-named assets replace the iStock numeric filenames:

| Live | SEO preview |
|---|---|
| `assets/photos/iStock-1038532394.jpg` (hero) | `assets/photos/hero-traffic-management-banner.webp` |
| — | `assets/photos/traffic-controller-slow-bat.webp` (new) |
| — | `assets/photos/iStock-1321417982.jpg` (new, additional tile photo) |

Existing iStock photos are reused across multiple tiles (e.g. `iStock-1038532394.jpg` ×3, `iStock-1308371370.jpg` ×3, `iStock-1415387571.jpg` ×2).

---

## What is identical on BOTH versions

- `<title>`: "Safe Traffic Management | Governed By Safety" — **unchanged**
- `<meta name="description">` — **identical**
- Favicon, stylesheet link, 15 `<section>`s, 4 embedded Google Maps, Lucide icons
- `loading="lazy"` count: **4 each**

## Technical-SEO gaps still present on BOTH (next-step candidates)

- ❌ No JSON-LD structured data (`application/ld+json`) — 0 blocks on either
- ❌ No `rel="canonical"`
- ❌ No Open Graph (`og:`) or Twitter card meta tags
- ❌ No `robots.txt` (both return 404)
- ❌ No `sitemap.xml` (both return 404)
- ❌ No `width`/`height` attributes on `<img>` (CLS / Core Web Vitals gap) — 0 on either

---

## Summary

The SEO preview = **live design + v2 image-tile services + on-page SEO tuning** (keyword-led H1, literal H2s, H3 hierarchy, descriptive alt text, SEO-friendly image filenames). It is a strong on-page pass but stops at the HTML body — the technical/structured-data layer (schema, canonical, OG, sitemap, robots) is the obvious remaining work before launch.

| Metric | Live | SEO preview |
|---|---|---|
| Page bytes | 98,771 | 107,572 |
| `<img>` tags | 13 | 35 |
| `stm-mark.png` badges | 0 | 12 |
| H1 | 1 | 1 |
| H2 | 12 | 12 (2 reworded) |
| H3 | 26 | 29 |
| `aria-label` | 7 | 14 |
| Keyword-rich alt text | minimal | extensive |
| JSON-LD / canonical / OG / sitemap / robots | none | none |
