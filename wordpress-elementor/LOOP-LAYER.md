# Dynamic Loop Layer — Elementor 4.x

Converting the static HTML-widget homepage sections into **editable, dynamic
Elementor Loop Grids** bound to the seeded CPTs + ACF fields.

This file documents the **verified** mechanics (proven by rendering against the
live staging site, not guessed) and the current status.

---

## Verified Elementor 4.1.x recipe

All of the following were confirmed end-to-end by writing `_elementor_data`
over the REST API and reading the rendered front-end HTML.

### Loop Grid widget schema (the non-obvious part)
In Elementor 4.x the Loop Grid query controls are **skin-prefixed**. The query
is ignored unless `_skin` is set and the post-type key uses that prefix:

```jsonc
{
  "elType": "widget",
  "widgetType": "loop-grid",
  "settings": {
    "_skin": "post",                       // REQUIRED — without it the query is ignored
    "post_query_post_type": "service",     // skin-prefixed; value = post-type KEY
    "template_id": 142,                    // the loop-item template post ID
    "posts_per_page": 12,
    "_css_classes": "svc-grid"             // reuse design grid layout
  }
}
```
Post-type keys (== rest_base here): `service`, `industry`, `location`,
`testimonial`, `team`.

### Dynamic tag bindings (all confirmed rendering real data)
Bind a control by adding a `__dynamic__` map next to `settings`:

```jsonc
"settings": {
  "__dynamic__": {
    "title": "[elementor-tag id=\"pt\" name=\"post-title\" settings=\"%7B%7D\"]"
  }
}
```

| Need            | Tag name     | settings JSON                         |
|-----------------|--------------|---------------------------------------|
| Post title      | `post-title` | `{}`                                  |
| Permalink       | `post-url`   | `{}`                                  |
| ACF text/textarea/number | `acf-text` | `{"key":"field_service_excerpt"}` |
| ACF image       | `acf-image`  | `{"key":"field_service_image"}`       |
| ACF url/link    | `acf-url`    | `{"key":"field_industry_link"}`       |

ACF `key` is lenient — the field key (`field_service_excerpt`), the field name
(`excerpt`), or `key:name` all resolve. We use the field key.

### Prerequisite for CPT single pages / Theme Builder
The CPTs are **not** enabled under *Elementor → Settings → General → Post
Types* (Services/Industries/Locations/Team/Testimonials unchecked). Loop Grids
on a normal page render fine without this, but to build **single templates** for
these CPTs (so each card can link to its own page) you must tick those boxes.

---

## CSS bridge
Elementor puts our BEM classes on widget *wrappers* (`.elementor-element`), not
the inner nodes, so a small "LOOP GRID ADAPTATION" block was appended to
`stm-global.css` / `stm-global.kinsta.css` to forward the design styling
(grid layout, absolute-positioned bg image, title typography).

---

## Status

| Section      | CPT          | Plan                          | State |
|--------------|--------------|-------------------------------|-------|
| Services     | `service` (9)| Loop Grid + `svc-tile` item   | ✅ **Live & verified** — loop-item template **#142**, renders 9 services with dynamic images + titles |
| Industries   | `industry` (4)| Loop Grid + `ind-card` item  | ⏳ pending — needs decision on the per-item Lucide icon (stored in `field_industry_icon`); Elementor's icon library is not Lucide |
| Locations    | `location` (4)| tabbed panels                | ⏳ pending — bespoke tab JS; needs Loop Carousel or custom handling |
| Testimonials | `testimonial` (3)| carousel                  | ⏳ pending — custom scroll-snap carousel JS; needs Loop Carousel (Pro) or keep custom |
| Team         | `team` (2)   | n/a                           | — not present on the homepage |

### Remaining for Services to be live on the homepage
The Service loop-item template (#142) and its verifying render are done. The
homepage section (`stm-homepage.kinsta.json`, container index 4) still contains
the **static** services grid. To go live, the static grid markup is replaced
with the verified `loop-grid` widget above (header kept). Not yet applied to the
published Home page (#102) — awaiting go-ahead since that overwrites a published
page.

## Reproduce
`wp-build/build_loop.py` creates + render-verifies the Service loop-item against
the live site (same env vars as `seed_rest.py`).
