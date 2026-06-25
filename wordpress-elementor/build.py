#!/usr/bin/env python3
"""Assemble the Safe Traffic Management Elementor deliverables from the proven
project/index.html mockup:
  - stm-global.css                 (self-contained brand + component CSS)
  - stm-homepage-elementor.json    (one-click importable Elementor page)
Run from repo root: python3 wordpress-elementor/build.py
"""
import re, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DS = ROOT / "project/_ds/safe-traffic-management-design-system-f034675c-40b0-440d-8a18-6c6f041ea4be"
OUT = ROOT / "wordpress-elementor"
SRC = (ROOT / "project/index.html").read_text(encoding="utf-8")

ASSET_TOKEN = "STM_ASSETS"  # find/replace target -> WP uploads URL

# ---------------------------------------------------------------- CSS ----------
def read(p): return p.read_text(encoding="utf-8")

token_css = "\n\n".join([
    read(DS / "tokens/colors.css"),
    read(DS / "tokens/spacing.css"),
    read(DS / "tokens/typography.css"),
    read(DS / "tokens/fonts.css"),
    read(DS / "tokens/base.css"),
])
# fonts.css uses url("../assets/fonts/..") -> point at uploads token
token_css = token_css.replace('../assets/fonts/', f'{ASSET_TOKEN}/fonts/')

# the page's own inline <style> (layout + every component)
inline_style = re.search(r"<style>(.*?)</style>", SRC, re.S).group(1)
inline_style = inline_style.replace("assets/", f"{ASSET_TOKEN}/")

global_css = f"""/* ============================================================
   Safe Traffic Management — Global brand + component CSS
   Paste into  Elementor > Site Settings > Custom CSS
   (or load via the child theme / a code snippet).
   Before using: find/replace  {ASSET_TOKEN}  with your WordPress
   uploads base URL, e.g.  https://YOURSITE.com/wp-content/uploads/stm
   ============================================================ */

/* ---------- 1. DESIGN TOKENS (colours, spacing, type, fonts) ---------- */
{token_css}

/* ---------- 2. PAGE LAYOUT + COMPONENTS (from the approved mockup) ---------- */
{inline_style}
"""
(OUT / "stm-global.css").write_text(global_css, encoding="utf-8")

# --------------------------------------------------------------- JSON ----------
# isolate <body> ... </body>, drop wrappers we don't want as content
body = re.search(r"<body>(.*?)</body>", SRC, re.S).group(1)
body = body.replace("<main>", "").replace("</main>", "")
# point image/src/href assets at the uploads token
body = body.replace('"assets/', f'"{ASSET_TOKEN}/').replace("'assets/", f"'{ASSET_TOKEN}/")
# drop the third-party BugHerd tracker
body = re.sub(r"<!-- BugHerd -->\s*<script[^>]*bugherd[^>]*>\s*</script>", "", body, flags=re.I)

# split on the section banner comments  <!-- ══ TITLE ═══ -->
parts = re.split(r"<!--\s*[═=]+\s*(.*?)\s*[═=]+\s*-->", body)
# parts = [pre, title1, html1, title2, html2, ...]
sections = []
for i in range(1, len(parts), 2):
    title = re.sub(r"[═=]", "", parts[i]).strip()
    html = parts[i + 1].strip()
    if html:
        sections.append((title, html))

_uid = [0x100000]
def uid():
    _uid[0] += 7
    return format(_uid[0], "07x")

def container(children, settings=None):
    return {"id": uid(), "elType": "container",
            "settings": settings or {}, "elements": children, "isInner": False}

def html_widget(markup, label):
    return {"id": uid(), "elType": "widget", "widgetType": "html",
            "settings": {"html": markup, "_title": label}, "elements": []}

content = []
for title, html in sections:
    nice = title.title().replace("Cta", "CTA").replace("Faq", "FAQ").replace("Usp", "USP")
    # full-bleed container so section backgrounds reach edge-to-edge
    c = container(
        [html_widget(html, nice)],
        settings={
            "content_width": "full",
            "padding": {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": True},
            "_title": nice,
        },
    )
    content.append(c)

template = {
    "version": "0.4",
    "title": "STM Homepage",
    "type": "page",
    "content": content,
    "page_settings": {
        "hide_title": "yes",
        "template": "elementor_canvas",   # full-width, no theme header/footer
    },
}
(OUT / "stm-homepage-elementor.json").write_text(json.dumps(template, indent=1), encoding="utf-8")

print(f"sections embedded: {len(sections)}")
for t, _ in sections: print("  -", t.title())
print("css bytes:", (OUT / 'stm-global.css').stat().st_size)
print("json bytes:", (OUT / 'stm-homepage-elementor.json').stat().st_size)
