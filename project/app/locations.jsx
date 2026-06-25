/* global React */
// Locations tabs (map + contact), closing CTA form, footer.
const STMLocCSS = `
.stm-loc__tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: var(--space-10); }
.stm-loc__tab { appearance: none; cursor: pointer; border: 1px solid var(--border-default); background: var(--surface-card); border-radius: var(--radius-md); padding: 11px 20px; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--text-sm); color: var(--text-body); display: inline-flex; align-items: center; gap: 8px; transition: all var(--dur-fast) var(--ease-standard); }
.stm-loc__tab svg { width: 16px; height: 16px; }
.stm-loc__tab:hover { border-color: var(--border-strong); }
.stm-loc__tab--active { background: var(--orange-500); border-color: var(--orange-500); color: var(--neutral-950); }
.stm-loc__grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: var(--space-12); align-items: stretch; }
.stm-loc__info h3 { font-size: var(--text-2xl); margin: var(--space-2) 0 var(--space-3); }
.stm-loc__contact { list-style: none; margin: var(--space-6) 0 var(--space-8); padding: 0; display: grid; gap: var(--space-4); }
.stm-loc__contact li { display: flex; align-items: center; gap: 12px; color: var(--text-body); font-weight: var(--fw-semibold); font-size: var(--text-base); }
.stm-loc__contact a { color: var(--text-body); text-decoration: none; }
.stm-loc__contact a:hover { color: var(--orange-700); }
.stm-loc__ci { width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--blue-50); color: var(--blue-600); display: inline-flex; align-items: center; justify-content: center; flex: none; }
.stm-loc__ci svg { width: 19px; height: 19px; }

.stm-map { position: relative; border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--border-default); min-height: 360px; background:
  linear-gradient(var(--neutral-200) 1px, transparent 1px) 0 0 / 100% 44px,
  linear-gradient(90deg, var(--neutral-200) 1px, transparent 1px) 0 0 / 44px 100%,
  var(--neutral-100);
}
.stm-map__road { position: absolute; background: var(--neutral-300); }
.stm-map__road--h { left: -5%; right: -5%; top: 58%; height: 16px; transform: rotate(-6deg); }
.stm-map__road--v { top: -5%; bottom: -5%; left: 38%; width: 13px; transform: rotate(4deg); }
.stm-map__road--d { left: 10%; right: -10%; top: 22%; height: 9px; transform: rotate(18deg); background: var(--blue-200); }
.stm-map__pin { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -100%); display: flex; flex-direction: column; align-items: center; z-index: 2; }
.stm-map__pin-dot { width: 30px; height: 30px; border-radius: 50% 50% 50% 0; background: var(--orange-500); transform: rotate(-45deg); border: 3px solid var(--white); box-shadow: var(--shadow-md); }
.stm-map__pin-label { transform: translateY(8px); background: var(--neutral-950); color: var(--white); font-size: var(--text-xs); font-weight: var(--fw-bold); padding: 4px 10px; border-radius: var(--radius-sm); white-space: nowrap; }
.stm-map__coords { position: absolute; left: var(--space-4); bottom: var(--space-4); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); background: rgba(254,254,254,0.9); padding: 5px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); z-index: 2; }
.stm-map__open { position: absolute; right: var(--space-4); top: var(--space-4); display: inline-flex; align-items: center; gap: 7px; background: var(--surface-card); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 8px 14px; font-weight: var(--fw-bold); font-size: var(--text-sm); color: var(--text-strong); text-decoration: none; box-shadow: var(--shadow-sm); z-index: 2; }
.stm-map__open:hover { border-color: var(--orange-500); text-decoration: none; }
.stm-map__open svg { width: 16px; height: 16px; color: var(--orange-600); }

.stm-close { background: var(--gradient-blue); color: var(--white); }
.stm-close .stm-h2 { color: var(--white); }
.stm-close .stm-lead { color: var(--blue-100); }
.stm-close .stm-kicker { color: var(--orange-400); }
.stm-close__grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: var(--space-16); align-items: start; }
.stm-close__points { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-3); }
.stm-close__points li { display: flex; gap: 10px; align-items: flex-start; color: #eaf1f8; font-size: var(--text-base); font-weight: var(--fw-medium); }
.stm-close__points svg { width: 19px; height: 19px; color: var(--orange-400); flex: none; margin-top: 2px; }
.stm-close__call { display: inline-flex; align-items: center; gap: 12px; margin-top: var(--space-8); padding: var(--space-4) var(--space-5); background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: var(--radius-lg); text-decoration: none; }
.stm-close__call .ic { width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--orange-500); color: var(--neutral-950); display: inline-flex; align-items: center; justify-content: center; }
.stm-close__call:hover { text-decoration: none; background: rgba(255,255,255,0.16); }
.stm-close__num { font-family: var(--font-display); font-weight: var(--fw-black); font-size: var(--text-lg); color: var(--white); }
.stm-close__sub { font-size: var(--text-xs); color: var(--blue-100); }

.stm-foot { background: var(--neutral-950); color: var(--neutral-300); }
.stm-foot__top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr; gap: var(--space-10); }
.stm-foot__logo { background: var(--white); padding: 12px 16px; border-radius: var(--radius-md); display: inline-block; }
.stm-foot__logo img { height: 54px; display: block; }
.stm-foot__about { font-size: var(--text-sm); line-height: var(--leading-normal); color: var(--neutral-400); max-width: 38ch; margin: var(--space-5) 0; }
.stm-foot__contact { list-style: none; margin: 0 0 var(--space-5); padding: 0; display: grid; gap: 10px; }
.stm-foot__contact li { display: flex; align-items: center; gap: 10px; font-size: var(--text-sm); }
.stm-foot__contact a { color: var(--neutral-300); text-decoration: none; }
.stm-foot__contact a:hover { color: var(--white); }
.stm-foot__contact svg { width: 16px; height: 16px; color: var(--orange-400); flex: none; }
.stm-foot__google { display: inline-flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-pill); padding: 8px 14px 8px 8px; text-decoration: none; color: var(--neutral-200); font-weight: var(--fw-bold); font-size: var(--text-sm); }
.stm-foot__google:hover { border-color: var(--orange-500); color: var(--white); text-decoration: none; }
.stm-foot__gdot { width: 28px; height: 28px; border-radius: var(--radius-pill); background: var(--white); color: var(--blue-600); display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: var(--fw-black); }
.stm-foot__gstars { display: inline-flex; color: var(--orange-400); }
.stm-foot__gstars svg { width: 13px; height: 13px; fill: currentColor; }
.stm-foot h4 { font-family: var(--font-sans); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.12em; color: var(--neutral-500); font-weight: 700; margin: 0 0 var(--space-4); }
.stm-foot__col ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.stm-foot__col a { color: var(--neutral-300); font-size: var(--text-sm); text-decoration: none; }
.stm-foot__col a:hover { color: var(--white); }
.stm-foot__certs { display: grid; grid-template-columns: 1fr 1px 1fr; align-items: center; gap: var(--space-8); margin: var(--space-12) 0; padding: var(--space-10) 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); }
.stm-foot__certs-divider { width: 1px; align-self: stretch; background: rgba(255,255,255,0.16); }
.stm-foot__certs-left { display: flex; flex-direction: column; gap: var(--space-5); }
.stm-foot__cert-row { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-4); }
.stm-foot__cert { height: 72px; background: var(--white); border-radius: var(--radius-md); display: inline-flex; align-items: center; justify-content: center; padding: 10px 18px; }
.stm-foot__cert img { height: 100%; max-height: 50px; width: auto; object-fit: contain; display: block; }
.stm-foot__certs-label { font-size: var(--text-2xs); text-transform: uppercase; letter-spacing: 0.12em; color: var(--neutral-500); font-weight: 700; }
.stm-foot__certs-right { display: flex; justify-content: flex-end; align-items: center; }
.stm-foot__greview { background: var(--white); border-radius: var(--radius-md); padding: 12px 20px; display: inline-flex; align-items: center; transition: transform var(--dur-fast) var(--ease-standard); }
.stm-foot__greview:hover { transform: translateY(-2px); }
.stm-foot__greview img { height: 46px; width: auto; display: block; }
.stm-foot__fbf { display: inline-flex; align-items: center; gap: 12px; background: #0a3d36; color: #87aaa1; border-radius: var(--radius-md); padding: 10px 16px; text-decoration: none; font-weight: var(--fw-semibold); font-size: var(--text-sm); }
.stm-foot__fbf:hover { color: #aecabf; text-decoration: none; }
.stm-foot__fbf img { height: 22px; width: auto; display: block; }
.stm-foot__legal { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-4); font-size: var(--text-xs); color: var(--neutral-500); }
.stm-foot__legal-links { display: inline-flex; gap: var(--space-4); align-items: center; }
.stm-foot__legal a { color: var(--neutral-400); }
@media (max-width: 980px){ .stm-loc__grid { grid-template-columns: 1fr; } .stm-close__grid { grid-template-columns: 1fr; gap: var(--space-10); } .stm-foot__top { grid-template-columns: 1fr 1fr 1fr; } .stm-foot__certs { grid-template-columns: 1fr; } .stm-foot__certs-divider { display: none; } .stm-foot__certs-right { justify-content: flex-start; } }
@media (max-width: 720px){ .stm-foot__top { grid-template-columns: 1fr 1fr; } }
`;

function ensureLocCss() {
  if (!document.getElementById("stm-loc-css")) {
    const s = document.createElement("style"); s.id = "stm-loc-css"; s.textContent = STMLocCSS; document.head.appendChild(s);
  }
}

function LocationsPanel() {
  const { Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal, SectionHeader } = window.STM;
  const D = window.STM_DATA;
  const [active, setActive] = React.useState(0);
  React.useEffect(ensureLocCss, []);
  const loc = D.locations[active];
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(loc.coords)}`;
  return (
    <section className="stm-section" id="locations" style={{ background: "var(--surface-page)" }}>
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            kicker="Locations"
            title="Crews ready across South East QLD & Northern NSW"
            lead="Local teams, mobilised from four regional bases. Choose a location for contact details and coverage."
            maxWidth="60ch"
          />
        </Reveal>
        <Reveal className="stm-loc__tabs">
          {D.locations.map((l, i) => (
            <button key={l.name} className={`stm-loc__tab ${i === active ? "stm-loc__tab--active" : ""}`} onClick={() => setActive(i)}>
              <Icon name="MapPin" size={16} />{l.name}
            </button>
          ))}
        </Reveal>
        <div className="stm-loc__grid" key={active}>
          <Reveal className="stm-loc__info">
            <span className="stm-kicker">{loc.region}</span>
            <h3>{loc.name}</h3>
            <p className="stm-lead">{loc.blurb}</p>
            <ul className="stm-loc__contact">
              <li><span className="stm-loc__ci"><Icon name="Phone" size={19} /></span><a href={D.contact.phoneHref}>{loc.phone}</a></li>
              <li><span className="stm-loc__ci"><Icon name="Mail" size={19} /></span><a href={`mailto:${loc.email}`}>{loc.email}</a></li>
              <li><span className="stm-loc__ci"><Icon name="MapPin" size={19} /></span>{loc.area}</li>
            </ul>
            <a className="stm-textlink" href="#">View {loc.name} page <Icon name="ArrowRight" size={16} /></a>
          </Reveal>
          <Reveal delay={120} className="stm-map" as="div">
            <span className="stm-map__road stm-map__road--h"></span>
            <span className="stm-map__road stm-map__road--v"></span>
            <span className="stm-map__road stm-map__road--d"></span>
            <a className="stm-map__open" href={mapUrl} target="_blank" rel="noreferrer"><Icon name="ExternalLink" size={16} />Open in Google Maps</a>
            <div className="stm-map__pin">
              <span className="stm-map__pin-dot"></span>
              <span className="stm-map__pin-label">{loc.name}</span>
            </div>
            <span className="stm-map__coords">GPS {loc.coords}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ClosingCtaPanel() {
  const { Card, Input, Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal } = window.STM;
  const D = window.STM_DATA;
  const [sent, setSent] = React.useState(false);
  const points = [
    "Owned and operated by experienced safety professionals",
    "Real-time compliance monitoring and visibility",
    "Reliable, ticketed crews backed by structured safety systems",
    "A supervisor responds within one business day",
  ];
  return (
    <section className="stm-section stm-close" id="contact">
      <div className="stm-container">
        <div className="stm-close__grid">
          <Reveal>
            <span className="stm-kicker">Request a crew</span>
            <h2 className="stm-h2" style={{ marginTop: "var(--space-3)" }}>Tell us about your site</h2>
            <p className="stm-lead" style={{ marginBottom: "var(--space-6)" }}>
              Send your project details and a supervisor will respond within one
              business day with availability and a compliant approach.
            </p>
            <ul className="stm-close__points">
              {points.map((p) => <li key={p}><Icon name="ShieldCheck" size={19} />{p}</li>)}
            </ul>
            <a className="stm-close__call" href={D.contact.phoneHref}>
              <span className="ic"><Icon name="Phone" size={22} /></span>
              <span>
                <div className="stm-close__num">{D.contact.phone}</div>
                <div className="stm-close__sub">Call us 24/7 for emergency response</div>
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <Card pad="lg" accent="orange" accentSide="top">
              {sent ? (
                <div style={{ textAlign: "center", padding: "var(--space-12) var(--space-4)" }}>
                  <span style={{ display: "inline-flex", color: "var(--green-700)", marginBottom: "var(--space-4)" }}><Icon name="CircleCheck" size={48} /></span>
                  <h3 style={{ fontSize: "var(--text-lg)", margin: "0 0 var(--space-2)" }}>Request received</h3>
                  <p style={{ color: "var(--text-muted)", margin: "0 0 var(--space-6)" }}>A supervisor will be in touch within one business day.</p>
                  <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: "var(--space-4)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                    <Input label="Contact name" required placeholder="Jordan Lee" />
                    <Input label="Organisation" placeholder="Council / builder / utility" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                    <Input label="Email" type="email" required icon={<Icon name="Mail" size={18} />} placeholder="name@org.qld.gov.au" />
                    <Input label="Phone" type="tel" icon={<Icon name="Phone" size={18} />} placeholder="07 0000 0000" />
                  </div>
                  <Input label="Site / project" required placeholder="e.g. Bruce Hwy upgrade — Stage 2" />
                  <Input label="Scope of works" multiline rows={3} placeholder="Lane closures, night works, duration, location…" />
                  <Button type="submit" variant="primary" size="lg" fullWidth icon={<Icon name="Send" size={18} />}>Submit request</Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FooterPanel() {
  const { Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const D = window.STM_DATA;
  React.useEffect(ensureLocCss, []);
  const cols = [
    { h: "Services", href: "#services", items: ["Traffic control personnel", "Temporary traffic management", "Lane & shoulder closures", "Night works", "Emergency response"] },
    { h: "Industries", href: "#industries", items: D.industries.map((i) => i.title) },
    { h: "Locations", href: "#locations", items: D.locations.map((l) => l.name) },
    { h: "Company", href: "#about", items: ["About us", "Safety & compliance", "Capability", "Careers", "Contact us"] },
  ];
  return (
    <footer className="stm-foot">
      <div className="stm-container" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-8)" }}>
        <div className="stm-foot__top">
          <div>
            <span className="stm-foot__logo"><img src="assets/logos/stm-logo-horizontal-tagline.png" alt="Safe Traffic Management" /></span>
            <p className="stm-foot__about">
              Safety-governed traffic management across South East Queensland and
              Northern NSW. Owned and operated by safety professionals, with
              structured WHS systems and real-time accountability that keep your
              project safe and audit-ready.
            </p>
            <ul className="stm-foot__contact">
              <li><Icon name="Phone" size={16} /><a href={D.contact.phoneHref}>{D.contact.phone}</a></li>
              <li><Icon name="Mail" size={16} /><a href={`mailto:${D.contact.email}`}>{D.contact.email}</a></li>
              <li><Icon name="MapPin" size={16} />{D.contact.region}</li>
            </ul>
          </div>
          {cols.map((c) => (
            <div className="stm-foot__col" key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.items.map((it) => <li key={it}><a href={c.href}>{it}</a></li>)}</ul>
            </div>
          ))}
        </div>

        <div className="stm-foot__certs">
          <div className="stm-foot__certs-left">
            <span className="stm-foot__certs-label">Certifications & memberships</span>
            <div className="stm-foot__cert-row">
              {D.assets.certs.map((c) => (
                <span className="stm-foot__cert" key={c.src}><img src={c.src} alt={c.alt} /></span>
              ))}
            </div>
          </div>
          <div className="stm-foot__certs-divider"></div>
          <div className="stm-foot__certs-right">
            <a className="stm-foot__greview" href={D.contact.googleReviewUrl} aria-label="Read our Google reviews">
              <img src={D.assets.googleReviews} alt="Google Reviews" />
            </a>
          </div>
        </div>

        <div className="stm-foot__legal">
          <span>© 2026 Safe Traffic Management Pty Ltd</span>
          <span className="stm-foot__legal-links">
            <a href="#">Privacy</a>
            <a href="#">WHS policy</a>
            <a href="#">Terms</a>
            <a className="stm-foot__fbf" href="https://www.fivebyfive.com.au" target="_blank" rel="noreferrer">
              Design by Five by Five
              <img src={D.assets.fivebyfive} alt="Five by Five" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.STM.LocationsPanel = LocationsPanel;
window.STM.ClosingCtaPanel = ClosingCtaPanel;
window.STM.FooterPanel = FooterPanel;
