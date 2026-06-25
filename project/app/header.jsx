/* global React */
// Sticky header: slim blue utility bar + clean main nav with larger logo,
// dropdown menus and a single primary CTA. Click-to-call lives in the bar.
const STMHeaderCSS = `
.stm-top { background: var(--blue-600); color: #dbe6f3; position: relative; }
.stm-top::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: var(--gradient-hivis); }
.stm-top__inner {
  max-width: var(--container-xl); margin: 0 auto; padding: 10px var(--space-6);
  display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); font-size: var(--text-sm);
}
.stm-top__tag { display: inline-flex; align-items: center; gap: 9px; font-weight: var(--fw-semibold); letter-spacing: 0.01em; color: #cdddef; white-space: nowrap; }
.stm-top__tag svg { width: 16px; height: 16px; color: var(--orange-400); }
.stm-top__links { display: flex; align-items: center; gap: var(--space-6); }
.stm-top__link { display: inline-flex; align-items: center; gap: 8px; color: #eaf1f8; text-decoration: none; font-weight: var(--fw-semibold); white-space: nowrap; }
.stm-top__link:hover { color: var(--white); text-decoration: none; }
.stm-top__link svg { width: 16px; height: 16px; color: var(--orange-400); }
.stm-top__link--call { font-family: var(--font-display); font-weight: var(--fw-black); font-size: var(--text-md); }
@media (max-width: 1100px){ .stm-top__tag { display: none; } }
@media (max-width: 860px){ .stm-top__link--email { display: none; } }

.stm-nav { background: var(--surface-card); border-bottom: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm); }
.stm-nav__inner {
  max-width: var(--container-xl); margin: 0 auto; height: 86px;
  display: flex; align-items: center; gap: var(--space-6); padding: 0 var(--space-6);
}
.stm-nav__logo { display: inline-flex; align-items: center; flex: none; }
.stm-nav__logo img { height: 56px; width: auto; display: block; }
.stm-nav__menu { display: flex; align-items: center; gap: 1px; margin-left: var(--space-4); }
.stm-nav__item { position: relative; }
.stm-nav__link {
  display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-sans);
  font-weight: var(--fw-semibold); font-size: var(--text-sm); color: var(--text-strong);
  text-decoration: none; padding: 10px 13px; border-radius: var(--radius-sm); white-space: nowrap;
  transition: color var(--dur-fast) var(--ease-standard), background var(--dur-fast); cursor: pointer; background: none; border: 0;
}
.stm-nav__link:hover { color: var(--blue-700); background: var(--blue-50); text-decoration: none; }
.stm-nav__link svg { width: 15px; height: 15px; transition: transform var(--dur-fast); }
.stm-nav__caret--open { transform: rotate(180deg); }

.stm-dropdown {
  position: absolute; top: calc(100% + 6px); left: 0; min-width: 290px;
  background: var(--surface-card); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); padding: var(--space-2);
  display: none; z-index: 60;
}
.stm-dropdown::before { content: ""; position: absolute; top: -4px; left: 14px; right: 14px; height: 4px; background: var(--orange-500); border-radius: 4px 4px 0 0; }
.stm-dropdown--open { display: block; animation: stmDropIn var(--dur-base) var(--ease-out); }
@keyframes stmDropIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.stm-dropdown a { display: flex; align-items: center; gap: 11px; padding: 11px 12px; border-radius: var(--radius-sm); color: var(--text-body); text-decoration: none; font-size: var(--text-sm); font-weight: var(--fw-medium); }
.stm-dropdown a:hover { background: var(--blue-50); color: var(--blue-700); text-decoration: none; }
.stm-dropdown a svg { width: 16px; height: 16px; color: var(--orange-600); flex: none; }

.stm-nav__spacer { flex: 1; }
.stm-nav__actions { display: flex; align-items: center; gap: var(--space-3); flex: none; }
@media (max-width: 1060px){ .stm-nav__menu { display: none; } .stm-burger { display: inline-flex !important; } }
.stm-burger { display: none; align-items: center; justify-content: center; width: 46px; height: 46px; border: 1px solid var(--border-default); border-radius: var(--radius-md); background: var(--surface-card); cursor: pointer; color: var(--text-strong); }

.stm-sheet { display: none; }
.stm-sheet--open { display: block; position: fixed; inset: var(--nav-h) 0 0 0; background: var(--surface-card); z-index: 40; overflow-y: auto; padding: var(--space-5) var(--space-6) var(--space-16); }
.stm-sheet__group { border-bottom: 1px solid var(--border-subtle); padding: var(--space-3) 0; }
.stm-sheet__head { font-family: var(--font-display); font-weight: var(--fw-black); font-size: var(--text-md); color: var(--text-strong); padding: 8px 0; text-decoration: none; display: block; }
.stm-sheet a.sub { display: block; padding: 9px 0 9px var(--space-4); color: var(--text-muted); text-decoration: none; font-weight: var(--fw-medium); }
`;

function Header() {
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const D = window.STM_DATA;
  const [open, setOpen] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(-1);
  React.useEffect(() => {
    if (!document.getElementById("stm-header-css")) {
      const s = document.createElement("style"); s.id = "stm-header-css"; s.textContent = STMHeaderCSS; document.head.appendChild(s);
    }
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div className="stm-top">
        <div className="stm-top__inner">
          <span className="stm-top__tag"><Icon name="ShieldCheck" size={16} />Owned and operated by safety professionals</span>
          <div className="stm-top__links">
            <a className="stm-top__link stm-top__link--email" href={`mailto:${D.contact.email}`}><Icon name="Mail" size={16} />{D.contact.email}</a>
            <a className="stm-top__link stm-top__link--call" href={D.contact.phoneHref}><Icon name="Phone" size={16} />{D.contact.phone}</a>
          </div>
        </div>
      </div>

      <nav className="stm-nav">
        <div className="stm-nav__inner">
          <a className="stm-nav__logo" href="#top" aria-label="Safe Traffic Management home">
            <img src="assets/logos/stm-logo-horizontal.png" alt="Safe Traffic Management" />
          </a>
          <div className="stm-nav__menu">
            {D.nav.map((item, i) => (
              <div className="stm-nav__item" key={item.label}
                onMouseEnter={() => setOpenIdx(item.items ? i : -1)}
                onMouseLeave={() => setOpenIdx(-1)}
                onFocus={() => setOpenIdx(item.items ? i : -1)}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpenIdx(-1); }}>
                <a className="stm-nav__link" href={item.href}>
                  {item.label}
                  {item.items ? <span className={"stm-nav__caret" + (openIdx === i ? " stm-nav__caret--open" : "")} style={{ display: "inline-flex" }}><Icon name="ChevronDown" size={15} /></span> : null}
                </a>
                {item.items ? (
                  <div className={"stm-dropdown" + (openIdx === i ? " stm-dropdown--open" : "")} role="menu">
                    {item.items.map((s) => (
                      <a key={s.label} href={s.href} role="menuitem" onClick={() => setOpenIdx(-1)}><Icon name="ChevronRight" size={16} />{s.label}</a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <span className="stm-nav__spacer" />
          <div className="stm-nav__actions">
            <Button variant="primary" size="lg" href="#contact" icon={<Icon name="HardHat" size={18} />}>Request a crew</Button>
            <button className="stm-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <Icon name={open ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className={open ? "stm-sheet stm-sheet--open" : "stm-sheet"}>
        {D.nav.map((item) => (
          <div className="stm-sheet__group" key={item.label}>
            <a className="stm-sheet__head" href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            {item.items ? item.items.map((s) => (
              <a className="sub" key={s.label} href={s.href} onClick={() => setOpen(false)}>{s.label}</a>
            )) : null}
          </div>
        ))}
        <a className="stm-top__link stm-top__link--call" href={D.contact.phoneHref} style={{ marginTop: "var(--space-6)", color: "var(--blue-700)" }}><Icon name="Phone" size={18} />{D.contact.phone}</a>
      </div>
    </header>
  );
}

window.STM.Header = Header;
