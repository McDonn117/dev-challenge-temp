/* global React */
// Safety & Compliance cards (+ standards strip) and dual-audience Capability band.
const STMCompCSS = `
.stm-standards { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; margin-top: var(--space-10); padding-top: var(--space-8); border-top: 1px solid var(--border-subtle); }
.stm-standards__label { font-size: var(--text-2xs); text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-subtle); font-weight: var(--fw-bold); margin-right: var(--space-2); }
.stm-standards__chip { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-body); background: var(--neutral-100); border: 1px solid var(--border-subtle); padding: 6px 12px; border-radius: var(--radius-sm); }

.stm-cap { background: var(--gradient-asphalt); color: var(--text-on-dark); position: relative; overflow: hidden; }
.stm-cap__photo { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.14; }
.stm-cap__grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); position: relative; z-index: 1; }
.stm-cap__card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg);
  padding: var(--space-8); display: flex; flex-direction: column; gap: var(--space-4);
  transition: border-color var(--dur-base) var(--ease-standard), background var(--dur-base), transform var(--dur-base);
}
.stm-cap__card:hover { border-color: var(--orange-500); background: rgba(255,255,255,0.06); transform: translateY(-2px); }
.stm-cap__tag { display: inline-flex; align-items: center; gap: 8px; font-size: var(--text-2xs); text-transform: uppercase; letter-spacing: 0.12em; font-weight: var(--fw-bold); color: var(--orange-400); }
.stm-cap__tag svg { width: 16px; height: 16px; }
.stm-cap__card h3 { color: var(--white); font-size: var(--text-lg); margin: 0; }
.stm-cap__card p { color: var(--neutral-300); font-size: var(--text-sm); margin: 0; line-height: var(--leading-normal); }
.stm-cap__list { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.stm-cap__list li { display: flex; align-items: center; gap: 9px; color: var(--neutral-100); font-size: var(--text-sm); font-weight: var(--fw-medium); }
.stm-cap__list svg { width: 16px; height: 16px; color: var(--orange-400); flex: none; }
@media (max-width: 720px){ .stm-cap__grid { grid-template-columns: 1fr; } }
`;

function SafetyPanel() {
  const { ServiceCard, Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal, SectionHeader } = window.STM;
  const D = window.STM_DATA;
  React.useEffect(() => {
    if (!document.getElementById("stm-comp-css")) {
      const s = document.createElement("style"); s.id = "stm-comp-css"; s.textContent = STMCompCSS; document.head.appendChild(s);
    }
  }, []);
  return (
    <section className="stm-section" id="compliance" style={{ background: "var(--surface-page)" }}>
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            kicker="Safety & Compliance"
            title="Compliance built into every shift"
            lead="Structured WHS systems and traceable, audit-ready reporting underpin everything we do, from the first risk assessment to the end-of-shift report."
            action={<Button variant="outline" href="#compliance" iconRight={<Icon name="ArrowRight" size={18} />}>View all</Button>}
          />
        </Reveal>
        <div className="stm-svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {D.safety.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <ServiceCard
                accent="blue"
                iconColor="blue"
                icon={<Icon name={s.icon} size={24} />}
                title={s.title}
                description={s.desc}
                linkLabel="Learn more"
                href={s.href}
                style={{ height: "100%" }}
              />
            </Reveal>
          ))}
        </div>
        <Reveal className="stm-standards">
          <span className="stm-standards__label">Operating to</span>
          {D.standards.map((st) => <span className="stm-standards__chip" key={st}>{st}</span>)}
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityPanel() {
  const { Icon, Button } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal, SectionHeader } = window.STM;
  const D = window.STM_DATA;
  const cards = [
    { tag: "Government", icon: "Landmark", title: "Transport & Main Roads and councils", desc: "Audit-ready delivery aligned to TMR and local government requirements.", points: ["TMR Code of Practice", "GPS-verified inspections", "End-of-shift reporting"] },
    { tag: "Non-government", icon: "Building2", title: "Builders, utilities and contractors", desc: "Reliable crews and structured systems for civil, utilities and infrastructure works.", points: ["$20M Public Liability", "SWMS & risk assessments", "24/7 reactive response"] },
  ];
  return (
    <section className="stm-section stm-cap" id="capability">
      <div className="stm-cap__photo" style={{ backgroundImage: `url(${D.img.works})` }}></div>
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            kicker="Capability"
            kickerColor="onDark"
            title="One capability statement, tailored to how you work"
            lead="We deliver two ways, for government, and for builders, utilities and contractors. See exactly how we operate, all in one place."
            maxWidth="62ch"
            action={<Button variant="primary" size="lg" href="#capability" iconRight={<Icon name="ArrowRight" size={18} />}>View our capability</Button>}
          />
        </Reveal>
        <div className="stm-cap__grid stm-2col">
          {cards.map((c, i) => (
            <Reveal key={c.tag} delay={i * 110} className="stm-cap__card">
              <span className="stm-cap__tag"><Icon name={c.icon} size={16} />{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul className="stm-cap__list">
                {c.points.map((p) => <li key={p}><Icon name="Check" size={16} />{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.STM.SafetyPanel = SafetyPanel;
window.STM.CapabilityPanel = CapabilityPanel;
