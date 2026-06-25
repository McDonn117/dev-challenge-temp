#!/usr/bin/env python3
"""Seed STM CPT content into WordPress over the REST API (ACF Pro fields).
Stdlib only. Idempotent: re-running updates existing posts by slug.

Prerequisites on the site: Elementor Pro + ACF Pro active, and the ACF config
(acf-export.json) already imported so the CPTs exist with "Show in REST" on.

Usage:
  export STM_SITE='https://stg-mcdonntest-devstg.kinsta.cloud'
  export STM_USER='Mcdonn-5x5'
  export STM_PW='xxxx xxxx xxxx xxxx xxxx xxxx'   # WP Application Password
  python3 seed_rest.py            # seed everything
  python3 seed_rest.py --dry-run  # show what would happen, no writes
"""
import os, sys, json, base64, mimetypes, urllib.request, urllib.error, pathlib

HERE = pathlib.Path(__file__).resolve().parent
REPO = HERE.parent.parent
ASSET_TOKEN = "STM_ASSETS"
LOCAL_ASSETS = REPO / "project" / "assets"      # STM_ASSETS/<x> -> project/assets/<x>

SITE = os.environ.get("STM_SITE", "").rstrip("/")
USER = os.environ.get("STM_USER", "")
PW   = os.environ.get("STM_PW", "").replace(" ", "")
DRY  = "--dry-run" in sys.argv
IMAGE_FIELDS = {"service": ["image"], "location": ["map_image"], "team": ["photo"]}

if not DRY and not (SITE and USER and PW):
    sys.exit("Set STM_SITE, STM_USER, STM_PW (or use --dry-run).")

AUTH = "Basic " + base64.b64encode(f"{USER}:{PW}".encode()).decode()

def api(method, path, data=None, raw=None, ctype=None, filename=None):
    # Use the ?rest_route= form: the site's trailing-slash redirect on /wp-json/
    # paths drops auth + breaks REST routing.
    if path.startswith("http"):
        url = path
    else:
        route, _, qs = path.partition("?")
        url = f"{SITE}/?rest_route={route}" + (f"&{qs}" if qs else "")
    headers = {"Authorization": AUTH}
    body = None
    if raw is not None:
        body = raw
        headers["Content-Type"] = ctype
        headers["Content-Disposition"] = f'attachment; filename="{filename}"'
    elif data is not None:
        body = json.dumps(data).encode()
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        raise SystemExit(f"{method} {url} -> {e.code}\n{e.read().decode()[:500]}")

_media_cache = {}
def upload_media(asset_url):
    """asset_url like STM_ASSETS/photos/x.jpg -> upload local file, return att ID."""
    if not asset_url or ASSET_TOKEN not in asset_url:
        return None
    rel = asset_url.split(ASSET_TOKEN + "/", 1)[1]          # photos/x.jpg
    if rel in _media_cache:
        return _media_cache[rel]
    local = LOCAL_ASSETS / rel
    if not local.exists():
        print(f"   ! missing asset {local}"); return None
    fname = local.name
    if DRY:
        print(f"   would upload {rel}"); _media_cache[rel] = 0; return 0
    ctype = mimetypes.guess_type(fname)[0] or "application/octet-stream"
    res = api("POST", "/wp/v2/media", raw=local.read_bytes(),
              ctype=ctype, filename=fname)
    _media_cache[rel] = res["id"]
    print(f"   uploaded {rel} -> media #{res['id']}")
    return res["id"]

def find_by_slug(rest_base, slug):
    if DRY: return None
    res = api("GET", f"/wp/v2/{rest_base}?slug={slug}&status=publish,draft")
    return res[0] if res else None

def slugify(s):
    return "".join(c.lower() if c.isalnum() else "-" for c in s).strip("-").replace("--", "-")

REST_BASE = {"service": "service", "industry": "industry", "location": "location",
             "testimonial": "testimonial", "team": "team"}

def seed():
    content = json.loads((HERE / "content-seed.json").read_text())
    for cpt, items in content.items():
        base = REST_BASE[cpt]
        print(f"\n== {cpt} ({len(items)}) ==")
        for it in items:
            title = it["title"]; slug = slugify(title)
            acf = dict(it["acf"])
            for fld in IMAGE_FIELDS.get(cpt, []):
                if acf.get(fld):
                    acf[fld] = upload_media(acf[fld]) or ""
            payload = {"title": title, "slug": slug, "status": "publish", "acf": acf}
            if DRY:
                print(f"   would upsert {slug}: { {k:acf[k] for k in list(acf)[:2]} } ...")
                continue
            existing = find_by_slug(base, slug)
            if existing:
                api("POST", f"/wp/v2/{base}/{existing['id']}", data=payload)
                print(f"   updated  {slug} (#{existing['id']})")
            else:
                res = api("POST", f"/wp/v2/{base}", data=payload)
                print(f"   created  {slug} (#{res['id']})")

if __name__ == "__main__":
    print(f"site={SITE or '(dry-run)'}  dry={DRY}")
    seed()
    print("\nDone.")
