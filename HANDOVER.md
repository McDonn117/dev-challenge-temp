# Safe Traffic Management — Handover

_Quick start for picking up the build. For full detail see `CONTEXT.md`._

## What this is
A website for **Safe Traffic Management (STM)** — a new SE Queensland traffic-control company (Five by Five client). It's a single-scroll static site, already designed and **live on Vercel**. Final platform will eventually be WordPress, but for now we're working on the static build.

## Where everything is
- **Project folder:** `/Users/waydegustavson/Projects/Clients/Safe_Traffic_Management/`
- **The file you edit:** `safe-traffic-management-website/project/index.html`
  — it's the single source of truth. All CSS is in the inline `<style>` at the top; all JS is at the bottom. (Ignore `app/*.jsx` and `Safe Traffic Management.html` — those are the old prototype.)
- **Live site:** https://safe-traffic-management.vercel.app

## How to work on it
1. **Open `index.html` in Chrome** to preview (no build step, no server needed — just open the file).
2. Edit `index.html`, save, refresh the browser.
3. **Deploy** when ready: in Terminal,
   ```
   cd /Users/waydegustavson/Projects/Clients/Safe_Traffic_Management/safe-traffic-management-website/project
   vercel --prod
   ```
   (The folder is already linked to the Vercel project `safe-traffic-management`.)

## Rules — don't break these
- **Colours: use ONLY these five** — `#F48D26` orange, `#2864A9` blue, `#383837` charcoal, `#F1F2F2` light grey, `#FEFEFE` white. (They're enforced by a "palette lock" block near the top of the CSS.)
- **Always write the name in full:** "Safe Traffic Management" / "STM".
- Headings are uppercase, with one key phrase wrapped in `<span class="hl">…</span>` for the orange highlight.
- Hazard-tape stripe (orange/charcoal diagonal) is the brand motif — used on cards and the nav scroll strip.

## What's already done
Full design pass complete: header, hero, services/compliance/industries cards (hazard-tape style), blue feature panels (Why choose us / testimonials / FAQ), stats, about, careers, capability, real Google-map location tabs, footer with social + reviews, and the closing contact CTA. Deployed and public. See `CONTEXT.md` §5 for the itemised list.

## What's next (pick up here)
- [ ] **Contact form** is front-end only — wire it to a CRM / Google Sheet / email.
- [ ] **Verify the stats** ("200+ controllers", "15+ years", "$20M PL", "76 Google reviews") with Kurt — STM is brand-new, so confirm or reword before launch.
- [ ] **Real content & links** — most `href="#"`; build out service/industry/location detail pages; add Privacy / WHS / Terms.
- [ ] **Replace placeholder photos** (currently iStock) with real STM crew/site photography; add owner profile shots (Kurt & Shanaka).
- [ ] **Secure the STM domain** (not yet purchased) and point it at the Vercel project.
- [ ] **Confirm name spellings** (Kurt, Shanaka) before any client-facing copy.
- [ ] Plan the **WordPress** port (final delivery platform) + hosting/SEO.

## Key people / docs
- Day-to-day client contact: **Clare Rachiele** — clare@klbconsultinggroup.com.au — 0402 815 090
- Owner/decision maker: **Kurt** · partner: **Shanaka**
- Full brief: `project/uploads/Safe-Traffic-Management_Context.md`
- Full project context: `CONTEXT.md` (same folder as this file)
