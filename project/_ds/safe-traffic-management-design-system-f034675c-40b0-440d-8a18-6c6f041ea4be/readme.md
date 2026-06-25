# Safe Traffic Management — Design System

> **Governed By Safety.** The brand system for Safe Traffic Management (STM),
> a Queensland safety-governed traffic management provider.

This project is a **design system**: a compiler reads it, bundles the React
components into a runtime library, and indexes the tokens, fonts and assets so
other projects (decks, mocks, prototypes, production code) can design *as STM*.

---

## 1. Company & product context

**Safe Traffic Management (STM)** delivers **safety-governed traffic management**
across Queensland, Australia. The business positions itself not as a labour-hire
traffic crew but as a **compliance-and-accountability operator** — qualified
personnel plus structured WHS systems plus real-time digital reporting.

- **What they do:** traffic control personnel, implementation of Traffic
  Management Plans (TMPs), lane/shoulder/pedestrian/cyclist management, night &
  after-hours works, emergency/reactive traffic management, and safety-led site
  monitoring with compliance reporting.
- **Who they serve:** two audiences, each with its own capability statement —
  1. **Government** — Transport & Main Roads (TMR) and local councils.
  2. **Non-government** — builders, utilities, civil contractors, infrastructure
     and maintenance projects, events & private works.
- **The differentiator:** *traceable* compliance. GPS-verified inspections,
  digital audit trails, corrective-action tracking, end-of-shift client
  reporting, drug/alcohol/fatigue management, SWMS & risk assessments.
- **Standards referenced:** MUTCD QLD, TMR Code of Practice, AS 1742, Austroads,
  WHS Act & Regulation (Qld), Queensland Traffic Management for Works on Roads
  Manual.
- **Tagline:** *Governed By Safety.*

### Mission
Deliver safe, reliable, and compliant traffic management solutions that protect
people, reduce risk, and keep projects moving — through structured systems,
qualified personnel, and operational accountability.

### Vision
To be Queensland's most trusted safety-governed traffic management provider,
recognised for compliance excellence, innovation, and industry-leading
accountability.

### Values
Safety First · Accountability · Compliance Excellence · Reliability · Integrity ·
Continuous Improvement.

### Source materials provided
- `uploads/Safe Traffic Management Full.png` — stacked logo + tagline
- `uploads/Safe Traffic Management.png` — stacked logo, no tagline
- `uploads/STM_Full[1].png` — horizontal "STM" lockup + tagline
- `uploads/STM.png` — horizontal "STM" lockup
- `uploads/Capability Statement - Government Version (TMR and Councils).pdf`
- `uploads/Capability Statement - Non-Government Version (Builders and Utilities).pdf`
- `uploads/Safe Traffic Management _ Web Design Briefing Form.md` — the client's
  website design brief (drives §2 below).

> No live website, Figma file or codebase was provided. The UI kits are a brand-led
> **construction** of the surfaces STM plausibly needs (marketing site + a
> compliance/reporting console), built from the brand colours, the logos, the
> capability-statement copy and the design brief — not a recreation of an existing
> product. Treat them as a proposal to validate, not a copy of a live site.

---

## 2. Brand personality & design principles

> Sourced directly from the client's web design brief. These are the load-bearing
> decisions — when a design choice is ambiguous, resolve it in favour of these.

**First five seconds, the site must feel:** *Professional. Accountable. Safety-led.*

**Guiding metaphor:** *"A modern infrastructure operations centre — professional,
organised, technology-driven, and built around safety, compliance and operational
accountability."* Every surface should feel like it belongs in that room. (The
compliance console UI kit leans into this literally.)

**Personality dials (client-chosen):**

| Dial | Choice | What it means for design |
|------|--------|--------------------------|
| Bold ↔ Subtle | **Bold** | Confident scale, strong hero, decisive hi-vis orange. Not timid or washed-out. |
| Classic ↔ Contemporary | **Classic & timeless** | Avoid of-the-moment trends, novelty layouts, faddish effects. Build to age well. |
| Serious ↔ Casual | **Serious & formal** | Professional register, no jokes/emoji, restrained tone. |
| Minimal ↔ Rich | **Minimal & clean** | Generous whitespace, few elements per view, no decorative clutter. |
| Structured ↔ Unexpected | **Structured & conventional** | Predictable grids, familiar patterns, clear hierarchy. Don't surprise the user. |

**Layout principle:** spacious, high-impact **hero**, then **structured,
information-rich** content below. Enough whitespace to read as trustworthy and
credible while still showcasing STM's compliance systems and capability.

**Single-scroll mandate (explicit dislike):** the client dislikes *"clicking into
lots of different areas to find the answer/information."* Favour **one long,
well-sectioned scrolling page** with in-page anchor navigation over deep
multi-page trees. The website kit follows this.

**Competitive stance:** stand out from typical traffic-management companies as more
**professional, modern and compliance-focused** — position STM as a *trusted safety
& compliance partner*, not just a traffic-control provider. Stay familiar to
construction/infrastructure, and meet **government, utilities and major-contractor**
expectations.

**Colour direction (from brief):** brand palette confirmed (`#f48d26` orange,
`#2864a9` blue, `#383837` charcoal, `#f1f2f2`, `#fefefe`); families **blue, orange,
charcoal**. Overall mood *open to recommendation* → this system uses a **light-
dominant** page with **dark charcoal/asphalt bands** for emphasis (hero stat card,
compliance section, footer). The brief notes *"analogous"* colour application; note
that orange + blue is actually a **complementary** pairing — treat the two brand
hues as the complementary anchors, and build **analogous ramps within each hue**
(the `--orange-*` / `--blue-*` scales) for harmony.

**Reference sites the client admires** (visual style only — not yet reviewed
visually by this system; share screenshots to align precisely):
- `safetraffic-yupes7ql.manus.space` — an early AI draft; *layout worked in areas.*
- `avadagroup.com.au` — *colourway with personality, not generic or boring.*
- `altustraffic.com.au` — *clean; movement within images/videos works well.*

**Voice:** authoritative, calm, plain-spoken. The reader is a risk-aware client
(a council engineer, a site manager, a utilities PM). Copy reassures through
**specificity and proof**, never hype.

- **Person:** Speaks as **"we"** ("We are committed to…", "our crews"), addresses
  the client as **"you"/"your project"** ("ready when you need us", "keep your
  project safe"). Never first-person singular.
- **Casing:** Sentence case for body and most headings. **ALL-CAPS** is reserved
  for short section labels / kickers (e.g. `TRAFFIC MANAGEMENT SERVICES`,
  `INSURANCE`, `COMPLIANCE & STANDARDS`) — mirrors the tracked "MANAGEMENT" in the
  logo. The company name often appears spaced as `S A F E   T R A F F I C   M A N A G E M E N T`.
- **Spelling:** **Australian English** — "recognised", "minimise", "organisation",
  "labour", "programme". Use it everywhere.
- **Sentence shape:** Short, declarative, benefit-led. Many bullets. A recurring
  pattern is **`Label | benefit clause`** — e.g.
  *"Night works & emergency response | available 24/7 when it matters"*,
  *"Safety-first operations | every decision made with safety and risk control at
  the core"*. Use the pipe `|` to pair a capability with its payoff.
- **Vocabulary that signals the brand:** *safety-governed, compliance, accountable,
  audit-ready, traceable, GPS-verified, real-time, structured systems, qualified /
  ticketed personnel, operational accountability, risk control, corrective action.*
- **Numbers as proof:** concrete figures build trust — "$20M Public Liability
  Insurance", "available 24/7". Use sparingly and only when real.
- **No emoji. No exclamation-heavy marketing.** Tone is professional services, not
  consumer. Icons (line icons) carry visual emphasis instead of emoji.

**Example phrases (house style):**
> "Safety-first traffic management delivered by experienced safety professionals,
> supported by digital compliance and real-time accountability."
> "Our approach combines qualified traffic crews, structured WHS systems, digital
> reporting, and real-time compliance visibility to reduce risk and support
> audit-ready project delivery."

---

## 3. Visual foundations

**Overall feel:** structured, engineered, hi-vis. Think roadwork signage meeting
a government compliance dossier — confident orange against deep governance blue,
weighted on asphalt charcoal.

### Colour
- **Primary — hi-vis orange `#f48d26`.** Action, energy, safety/PPE. Used for
  primary buttons, kickers, key accents, the "road" gradient. On orange, text is
  **dark charcoal**, not white (legibility + hi-vis convention).
- **Secondary — governance blue `#2864a9`.** Trust, government, compliance.
  Section backgrounds, links, info states, the secondary brand gradient.
- **Charcoal `#383837`.** Body text and the "asphalt" weight — dark panels,
  footers, headings.
- **Neutrals** ramp from `#fefefe` (page) through `#f1f2f2` (sunken surface) to
  charcoal. **Off-white `#fefefe` is the page**, pure white is reserved for cards.
- **Status:** green = compliant/pass, amber = caution/pending, red =
  non-compliant/incident, blue = info. These matter — this is a safety domain.
- **Gradients** are used deliberately, only echoing the logo: the hi-vis
  yellow→orange "road" gradient and the blue triangle gradient. **No purple, no
  random multi-stop gradients.**

### Type
- **Archivo** (variable grotesque) for everything — display and UI. Headings are
  **heavy (800) and tight**; can stretch to ~110% for hero display to echo the
  logo's confident width. Body is 400.
- **IBM Plex Mono** for compliance data: codes (AS 1742, MUTCD QLD), inspection
  IDs, timestamps, reference numbers. It signals "traceable / on the record".
- **Kicker labels:** uppercase, tracked `0.14em`, bold, often orange — the
  brand's signature eyebrow.

### Space, shape, depth
- **4px spacing base.** Generous section padding; dense, scannable cards.
- **Modest radii** (`8px` default, `12–16px` on larger cards). Engineered, not
  pill-soft. Status chips may use the full pill radius.
- **Borders** do real work — `1px` hairlines in neutral-200/300 define cards and
  tables. A **left or top accent bar** in orange/blue marks emphasised panels.
- **Shadows** are cool, soft and restrained (`--shadow-sm`→`lg`); never coloured
  except `--shadow-hivis` for deliberate warning emphasis. Cards = white surface +
  hairline border + `--shadow-sm`.

### Motion & states
- **Motion is purposeful:** 120–320ms, `--ease-standard`/`--ease-out`. Fades and
  short translates. **No bounce, no infinite decorative loops.**
- **Hover:** buttons darken one step (orange-500→600); cards lift via shadow +
  `translateY(-2px)`; links underline.
- **Press:** subtle scale-down (`0.98`) and/or darker shade.
- **Focus:** 3px blue focus ring (`--ring`), never removed.

### Imagery
- Real, **on-site documentary photography** — crews in hi-vis PPE, signage,
  cones, road works, night works lit by floods. Warm, natural, slightly
  high-contrast; avoid heavy filters or b&w. Where photos aren't available, use
  the brand gradients or charcoal panels with the mark watermarked, and an
  `image-slot` placeholder. **Never** illustrate scenes with hand-drawn SVG.

---

## 4. Iconography

- **System:** [Lucide](https://lucide.dev) — clean 1.5–2px stroke line icons,
  loaded from CDN. The even stroke weight and rounded joins read as modern,
  professional and safety-adjacent (close to signage pictograms without imitating
  regulatory symbols). Relevant glyphs: `shield-check`, `clipboard-check`,
  `map-pin`, `traffic-cone`, `hard-hat`, `cctv`/`camera`, `file-check`,
  `alert-triangle`, `clock`, `route`, `cone`.
  - **Substitution flag:** no proprietary STM icon set was provided, so Lucide is
    a substitution chosen to match the brand's stroke-based, professional feel.
    Swap if STM has a house set.
- **Emoji:** never used.
- **Unicode glyphs:** avoid as UI icons; use Lucide.
- **The mark** (`assets/logos/stm-mark.png`) — the orange triangle with the
  receding asphalt road — is the brand's hero pictogram. Use it as a favicon,
  watermark, and loading splash. Don't redraw it; reference the PNG.

---

## 5. Index / manifest

**Root**
- `styles.css` — entry point (consumers link this). `@import`s the token layer.
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`,
`spacing.css` (spacing/radius/shadow/motion), `base.css` (element defaults).

**`assets/`**
- `assets/logos/` — `stm-logo-stacked-tagline.png`, `stm-logo-stacked.png`,
  `stm-logo-horizontal-tagline.png`, `stm-logo-horizontal.png`, `stm-mark.png`.
- `assets/fonts/` — Archivo (variable) + IBM Plex Mono woff2.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown
in the Design System tab.

**`components/`** — reusable React primitives (see each `.prompt.md`):
Button, Badge, StatusPill, Card, Kicker, Input, Stat, ServiceCard, SiteHeader.

**`ui_kits/`**
- `ui_kits/website/` — marketing site surfaces (hero, services, capability).
- `ui_kits/console/` — STM compliance / live-operations console.

---

### Caveats
- Fonts are **substitutions** (Archivo + IBM Plex Mono from Google Fonts) chosen
  to match "clean modern sans-serif" — STM provided no font files.
- Logos are supplied on a **white background** (no transparency); use them on
  light surfaces. `stm-mark.png` is an extracted crop of the triangle mark.
- The UI kit is a **brand-led proposal**, not a recreation of an existing STM
  product (none was provided).
