#!/usr/bin/env python3
"""Generate the WordPress data layer for the STM homepage:
  - acf-export.json     ACF Pro import file: CPTs + field groups (show_in_rest on)
  - content-seed.json   all CPT content pulled from the approved mockup
Both feed the REST seeder (seed_rest.py) when egress opens, and the ACF file
imports via  ACF > Tools > Import Field Groups, Post Types and Taxonomies.
Run: python3 wordpress-elementor/wp-build/build_wp.py
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parent
ASSET = "STM_ASSETS"  # find/replace -> https://YOURSITE/wp-content/uploads/stm

# ---------------------------------------------------------------- CPTs ---------
# (key prefixes matter: ACF routes import by post_type_/group_/taxonomy_)
def post_type(slug, name, singular, icon, rest_base=None):
    return {
        "key": f"post_type_{slug}",
        "title": name,
        "menu_order": 0,
        "active": True,
        "post_type": slug,
        "advanced_configuration": True,
        "import_source": "", "import_date": "",
        "labels": {
            "name": name, "singular_name": singular,
            "menu_name": name, "all_items": f"All {name}",
            "add_new_item": f"Add New {singular}",
            "edit_item": f"Edit {singular}", "view_item": f"View {singular}",
            "search_items": f"Search {name}",
        },
        "description": "",
        "public": True, "hierarchical": False,
        "exclude_from_search": False, "publicly_queryable": True,
        "show_ui": True, "show_in_menu": True, "show_in_admin_bar": True,
        "show_in_nav_menus": True,
        "show_in_rest": True, "rest_base": rest_base or slug,
        "rest_namespace": "wp/v2",
        "rest_controller_class": "WP_REST_Posts_Controller",
        "menu_position": None,
        "menu_icon": {"type": "dashicons", "value": icon},
        "rewrite": {"permalink_rewrite": "post_type_key", "with_front": True,
                    "feeds": False, "pages": True},
        "query_var": "post_type_key", "query_var_name": "",
        "can_export": True, "delete_with_user": False,
        "supports": ["title", "editor", "thumbnail", "custom-fields"],
        "taxonomies": [],
    }

CPTS = [
    post_type("service",     "Services",     "Service",     "dashicons-archive"),
    post_type("industry",    "Industries",   "Industry",    "dashicons-building"),
    post_type("location",    "Locations",    "Location",    "dashicons-location"),
    post_type("testimonial", "Testimonials", "Testimonial", "dashicons-format-quote"),
    post_type("team",        "Team",         "Team Member", "dashicons-groups"),
]

# ---------------------------------------------------------------- fields -------
_fk = [0]
def f(label, name, ftype, parent, **extra):
    _fk[0] += 1
    base = {
        "key": f"field_{parent}_{name}",
        "label": label, "name": name, "type": ftype,
        "instructions": "", "required": 0, "conditional_logic": 0,
        "wrapper": {"width": "", "class": "", "id": ""},
        "show_in_rest": 1,
    }
    base.update(extra)
    return base

def group(slug, fields):
    return {
        "key": f"group_{slug}",
        "title": f"{slug.title()} Fields",
        "fields": fields,
        "location": [[{"param": "post_type", "operator": "==", "value": slug}]],
        "menu_order": 0, "position": "normal", "style": "default",
        "label_placement": "top", "instruction_placement": "label",
        "hide_on_screen": "", "active": True, "description": "",
        "show_in_rest": 1,
    }

GROUPS = [
    group("service", [
        f("Lucide icon name", "icon", "text", "service",
          instructions="e.g. traffic-cone, shield-check (matches the design's Lucide set)"),
        f("Tile image", "image", "image", "service",
          return_format="url", preview_size="large", library="all"),
        f("Short description", "excerpt", "textarea", "service", rows=3),
        f("Link (optional)", "link", "url", "service"),
        f("Display order", "order", "number", "service", default_value=0),
    ]),
    group("industry", [
        f("Lucide icon name", "icon", "text", "industry"),
        f("Short description", "excerpt", "textarea", "industry", rows=3),
        f("Link (optional)", "link", "url", "industry"),
        f("Display order", "order", "number", "industry", default_value=0),
    ]),
    group("location", [
        f("Region blurb", "blurb", "textarea", "location", rows=3),
        f("Phone", "phone", "text", "location"),
        f("Email", "email", "email", "location"),
        f("Address", "address", "text", "location"),
        f("Map image", "map_image", "image", "location",
          return_format="url", preview_size="large", library="all"),
        f("Page link", "link", "url", "location"),
        f("Display order", "order", "number", "location", default_value=0),
    ]),
    group("testimonial", [
        f("Quote", "quote", "textarea", "testimonial", rows=4),
        f("Author / role", "author_role", "text", "testimonial"),
        f("Display order", "order", "number", "testimonial", default_value=0),
    ]),
    group("team", [
        f("Role", "role", "text", "team"),
        f("Bio", "bio", "textarea", "team", rows=4),
        f("Photo", "photo", "image", "team",
          return_format="url", preview_size="large", library="all"),
        f("Display order", "order", "number", "team", default_value=0),
    ]),
]

acf_export = CPTS + GROUPS
(OUT / "acf-export.json").write_text(json.dumps(acf_export, indent=1), encoding="utf-8")

# ---------------------------------------------------------------- content ------
P = f"{ASSET}/photos"
M = f"{ASSET}/maps"
PHONE = "1300 786 233"

services = [
    ("Traffic Control Personnel", "traffic-cone", "traffic-controller-slow-bat.webp",
     "Screened, ticketed traffic controllers and implementers, inducted and ready to deploy across live road environments."),
    ("Temporary Traffic Management", "traffic-cone", "hero-traffic-management-banner.webp",
     "Implementation, operation and removal of compliant temporary traffic management to MUTCD QLD and TMR standards."),
    ("Lane & Shoulder Closures", "construction", "iStock-1308371370.jpg",
     "Safe, compliant lane and shoulder closures for roadworks, maintenance and infrastructure delivery."),
    ("Pedestrian & Cyclist Management", "footprints", "iStock-1038532394.jpg",
     "Protected routes and managed crossings that guide pedestrians and cyclists safely around active works."),
    ("Emergency Response", "siren", "iStock-1321417982.jpg",
     "24/7 reactive crews and supervisors mobilised fast for incidents and unplanned works."),
    ("Night Works", "moon", "traffic-controllers-team-YRbcKPuVvSRiApanBtP4uT.webp",
     "Supervised, well-lit night and after-hours traffic management for low-impact delivery."),
    ("Site Monitoring & Compliance Reporting", "clipboard-check", "iStock-1415387571.jpg",
     "GPS-verified inspections and end-of-shift digital reports that keep every shift audit-ready."),
    ("VMS Board Hire", "monitor-play", "iStock-1038532394.jpg",
     "Variable message signs, boards and devices supplied, delivered and maintained."),
    ("Permits & Road Occupancy", "file-check-2", "iStock-1308371370.jpg",
     "Coordination of permits and road occupancy approvals so works proceed lawfully and on schedule."),
]
industries = [
    ("Civil Construction", "building-2",
     "Traffic control for roadworks, earthworks and major civil project delivery.", "civil-construction"),
    ("Utilities", "zap",
     "Safe access for water, power, gas and telecommunications works.", ""),
    ("Government Projects", "landmark",
     "Compliant, audit-ready delivery for TMR and local councils.", ""),
    ("Events & Private Projects", "calendar-days",
     "Crowd, road and access management for events and private works.", ""),
]
locations = [
    ("Brisbane", "Our central hub for South East Queensland, supporting civil, government and utilities works across the metro network.",
     "brisbane@safetrafficmanagement.com.au", "Brisbane, QLD 4000", "brisbane@2x.webp", "brisbane"),
    ("Gold Coast", "Crews servicing the M1 corridor, coastal works and events across the Gold Coast and Logan.",
     "goldcoast@safetrafficmanagement.com.au", "Southport, QLD 4215", "gold-coast@2x.webp", ""),
    ("Sunshine Coast", "Coverage from Caboolture to Noosa for infrastructure, maintenance and council projects.",
     "sunshinecoast@safetrafficmanagement.com.au", "Maroochydore, QLD 4558", "sunshine-coast@2x.webp", ""),
    ("Northern NSW", "Cross-border support for the Tweed and Northern Rivers, working to NSW and QLD requirements.",
     "nnsw@safetrafficmanagement.com.au", "Tweed Heads, NSW 2485", "northern-nsw@2x.webp", ""),
]
testimonials = [
    ('"STM\'s crews turned up ticketed, briefed and ready. The end-of-shift reports made our compliance reviews straightforward."',
     "Project Engineer, Civil contractor, Brisbane"),
    ('"Reliable through a difficult night-works program. Their supervisors kept the site safe and the traffic moving."',
     "Site Manager, Infrastructure project, Gold Coast"),
    ('"The real-time reporting and GPS-verified inspections gave us the visibility we needed for a council audit."',
     "Works Coordinator, Local council, Sunshine Coast"),
]
team = [  # NOTE: names/roles flagged in handover to confirm before launch
    ("Kurt", "Owner / Director",
     "Owner and decision maker, leading STM's safety-governed operating model. [Confirm full name + bio before launch.]"),
    ("Shanaka", "Partner",
     "Partner in the business, supporting operations and delivery. [Confirm full name + bio before launch.]"),
]

content = {"service": [], "industry": [], "location": [], "testimonial": [], "team": []}
for i, (t, icon, img, exc) in enumerate(services):
    content["service"].append({"title": t, "acf": {
        "icon": icon, "image": f"{P}/{img}", "excerpt": exc, "link": "", "order": i}})
for i, (t, icon, exc, link) in enumerate(industries):
    content["industry"].append({"title": t, "acf": {
        "icon": icon, "excerpt": exc, "link": (f"/{link}" if link else ""), "order": i}})
for i, (t, blurb, email, addr, mp, link) in enumerate(locations):
    content["location"].append({"title": t, "acf": {
        "blurb": blurb, "phone": PHONE, "email": email, "address": addr,
        "map_image": f"{M}/{mp}", "link": (f"/{link}" if link else ""), "order": i}})
for i, (q, who) in enumerate(testimonials):
    content["testimonial"].append({"title": who, "acf": {
        "quote": q, "author_role": who, "order": i}})
for i, (name, role, bio) in enumerate(team):
    content["team"].append({"title": name, "acf": {
        "role": role, "bio": bio, "photo": "", "order": i}})

(OUT / "content-seed.json").write_text(json.dumps(content, indent=1), encoding="utf-8")

print("acf-export.json   :", len(CPTS), "CPTs +", len(GROUPS), "field groups")
for k, v in content.items():
    print(f"content-seed.json : {k:11s} {len(v)} items")
