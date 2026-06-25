# Elementor Build Recipe — STM Homepage (Phase E)

This is the presentation layer: reusable **Theme Builder** templates and the
**dynamic Loop** sections that pull from the CPTs you seeded in Phases A–D. Do these
in the Elementor editor — the dynamic ACF bindings are picked from real fields here,
which is more reliable than importing blind JSON.

Prereqs done: Elementor Pro + ACF Pro active, `acf-export.json` imported, content
seeded, `stm-global.css` pasted into **Elementor → Site Settings → Custom CSS**,
**Flexbox Container** enabled.

---

## E1 — Baseline homepage (pixel-perfect, fast)

1. **Templates → Saved Templates → Import** → `stm-homepage-elementor.json`
   (the proven full-design import).
2. Create a page **Home**, Edit with Elementor, insert the **STM Homepage** template.
3. **Settings → Reading → Homepage displays → A static page → Home.**

This gives you the pixel-perfect design immediately. E2–E5 then replace the
**Services**, **Industries/Testimonials/Locations**, and add **Team** sections with
*dynamic* versions, and lift the header/footer/CTA into reusable templates.

---

## E2 — Reusable templates (Theme Builder)

The whole point: build once, reused on every page — edit in one place.

### Header
1. **Templates → Theme Builder → Header → Add New**.
2. Build the nav: **Site Logo**, an Elementor **Nav Menu** (or **Mega Menu**) with the
   sitemap items (Services, Safety & Compliance, Industries, Capability, About, Contact),
   a **Button** "Request A Quote" (link `#contact`), and a phone link `1300 786 233`.
3. Style: transparent background; **Motion Effects → Sticky = Top**; under
   **Advanced → Custom CSS** (or the global CSS) the `header--scrolled` look is already
   defined. Add CSS class `mainnav` to match.
4. **Display Conditions → Entire Site → Publish.**

### Footer
1. **Theme Builder → Footer → Add New** → rebuild the 6-column footer (services,
   safety, industries, locations, company), the contact bar, the certifications row,
   and the legal line. Reuse classes `footer`, `footer__top`, `footer__col`, etc.
2. **Display Conditions → Entire Site → Publish.**

### Closing CTA strip (reused element)
1. **Templates → Saved Templates → Add New → Section**, name it **CTA Strip**.
2. Build the orange "Need a compliant crew on site?" strip (class `ctastrip`).
3. On any page, insert it via **Add Template**. Editing the saved template updates it
   everywhere — exactly the "don't edit on 40 pages" requirement.

---

## E3 — Services as a dynamic Loop Carousel ⭐ (the CPT showcase)

Replaces the static services carousel with one that renders every **Service** post.

**a) Build the loop item (the tile):**
1. Drag a **Loop Carousel** widget into the Services section (delete the static one).
2. **Edit Loop Carousel → Choose source → Create a Template** → a blank Loop Item opens.
3. In the loop item, add a **Container** (CSS class `svc-tile`) and inside it:
   - **Image** widget → click the **dynamic** (cylinder) icon → **ACF Image Field → `image`**
     (or **Featured Image**). Add class `svc-tile__bg`.
   - **Heading** widget → dynamic → **Post Title**. Add class `svc-tile__title`.
   - An **Icon** (static plus) → class `svc-tile__plus`.
   - Set the container **Link → dynamic → ACF Field `link`** (fallback: Post URL).
4. **Publish** the loop item.

**b) Query:**
5. Back in the Loop Carousel → **Query → Source = Services**, Order by **menu_order**
   (or the ACF `order` field), Posts per page 9.
6. **Carousel options:** slides to show 4 (responsive 2 / 1), arrows + dots on,
   to match the design.

> Repeat the same pattern for **Industries** (Loop Grid, source Industries, class
> `ind-card`, bind icon + title + `excerpt`) and **Testimonials** (Loop Carousel,
> source Testimonials, bind `quote` + `author_role`, class `tst-*`).

---

## E4 — Team section (dynamic, mirrors Wado's example)

1. In the About area add a **Loop Grid** widget.
2. **Create loop item** → Container (class `about-value`/card) with **Image** (dynamic
   ACF `photo` or Featured Image), **Heading** (Post Title = name), **Text** (dynamic
   ACF `role`), **Text** (dynamic ACF `bio`). Publish.
3. **Query → Source = Team**, order by `order`.

---

## E5 — Locations (dynamic, keep the tab UX)

Two options:
- **Simple:** a **Loop Grid** of Location cards (bind `blurb`, `phone`, `email`,
  `address`, `map_image`).
- **Faithful to the design (tabs):** keep the Tabs widget; in each tab panel use a
  single-item Loop or **dynamic ACF tags** on Text/Image widgets pointing at the
  matching Location post. (The simple Loop Grid is the more maintainable choice.)

---

## E6 — Finish

1. **Delete** the page's static Header/Footer/CTA sections now that Theme Builder
   serves them site-wide.
2. **Contact form:** replace the static form markup with an **Elementor Pro Form**
   widget → **Actions After Submit → Email** to `operations@safetrafficmanagement.com.au`.
3. Re-check against the live mockup: https://safe-traffic-management.vercel.app
4. Apply the pre-launch content flags in `WP-SETUP-GUIDE.md` (stats, team names,
   socials, Northern NSW, real photos).

---

### Why this architecture wins the brief
- **Custom post types** (Services, Industries, Locations, Testimonials, Team) with
  **custom fields** — editable in wp-admin like a normal project.
- **Dynamic content**: Loop Carousel/Grid render CPT posts; add a Service post and the
  carousel updates itself — no page editing.
- **Reusable templates**: header, footer and CTA strip defined once via Theme Builder
  / Saved Templates, used everywhere.
- **Pixel-perfect**: the brand CSS + the baseline import match the approved design.
