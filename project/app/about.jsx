/* global React */
// Tabbed About / Careers panel + USP "why choose us" panel.
const STMAboutCSS = `
.stm-tabs { display: inline-flex; gap: 4px; background: var(--neutral-100); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 4px; }
.stm-tab {
  appearance: none; border: 0; cursor: pointer; background: transparent; font-family: var(--font-sans);
  font-weight: var(--fw-bold); font-size: var(--text-sm); color: var(--text-muted);
  padding: 10px 20px; border-radius: var(--radius-sm); transition: all var(--dur-fast) var(--ease-standard);
  display: inline-flex; align-items: center; gap: 8px;
}
.stm-tab svg { width: 16px; height: 16px; }
.stm-tab--active { background: var(--surface-card); color: var(--text-strong); box-shadow: var(--shadow-sm); }
.stm-about__grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); align-items: center; margin-top: var(--space-10); }
.stm-about__media { position: relative; aspect-ratio: 4 / 3.2; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); }
.stm-about__media image-slot { width: 100%; height: 100%; display: block; }
.stm-about__values { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin: var(--space-6) 0 var(--space-8); }
.stm-about__value { display: flex; gap: 10px; align-items: flex-start; }
.stm-about__value svg { width: 20px; height: 20px; color: var(--green-700); flex: none; margin-top: 1px; }
.stm-about__value b { display: block; color: var(--text-strong); font-size: var(--text-sm); }
.stm-about__value span { color: var(--text-muted); font-size: var(--text-sm); }

.stm-usp { background: var(--blue-50); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); }
.stm-usp__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.stm-usp__card { background: var(--surface-card); border: 1px solid var(--border-subtle); border-top: 3px solid var(--orange-500); border-radius: var(--radius-lg); padding: var(--space-8); box-shadow: var(--shadow-sm); }
.stm-usp__icon { width: 56px; height: 56px; border-radius: var(--radius-md); background: var(--orange-50); color: var(--orange-600); display: inline-flex; align-items: center; justify-content: center; margin: 0 0 var(--space-5); }
.stm-usp__icon svg { width: 26px; height: 26px; }
.stm-usp__card h3 { font-size: var(--text-md); margin: 0 0 8px; }
.stm-usp__card p { color: var(--text-muted); font-size: var(--text-sm); margin: 0; line-height: var(--leading-normal); }
@media (max-width: 720px){ .stm-usp__grid { grid-template-columns: 1fr; } .stm-about__values { grid-template-columns: 1fr; } }
`;

const ABOUT_CONTENT = {
  about: {
    kicker: "Who we are",
    title: "A safety and compliance partner, not just a traffic controller",
    body: "Safe Traffic Management is a Queensland traffic management provider built around safety, compliance and operational accountability. We combine qualified, ticketed crews with structured WHS systems, digital reporting and real-time compliance visibility, so government, utilities and major contractors can deliver complex, high-risk works with confidence.",
    values: [
      { t: "Safety first", d: "Every decision made with risk control at the core." },
      { t: "Accountability", d: "We own our work, our people and our outcomes." },
      { t: "Compliance excellence", d: "Held to the highest regulatory standards." },
      { t: "Reliability", d: "Consistent, professional delivery, on time." },
    ],
    cta: null,
    slot: "about-team",
    src: window.STM_DATA.img.works,
    placeholder: "Drop a photo of the owners / crew on site",
  },
  careers: {
    kicker: "Careers at STM",
    title: "Build a career on the tools, backed by real support",
    body: "We recruit screened, ticketed traffic controllers and implementers who take safety seriously. If you want reliable work across South East Queensland and Northern NSW, structured induction and a team that backs its people, we want to hear from you.",
    values: [
      { t: "Ticketed roles", d: "Traffic controller and implementer positions." },
      { t: "Ongoing work", d: "Day, night and after-hours shifts available." },
      { t: "Real support", d: "Structured induction and safety systems." },
      { t: "Career pathways", d: "Develop towards supervisory and TMP roles." },
    ],
    cta: { label: "Explore careers", href: "#" },
    slot: "about-careers",
    src: window.STM_DATA.img.excavator,
    placeholder: "Drop a careers / on-site photo",
  },
};

function AboutPanel() {
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal } = window.STM;
  const [tab, setTab] = React.useState("about");
  React.useEffect(() => {
    if (!document.getElementById("stm-about-css")) {
      const s = document.createElement("style"); s.id = "stm-about-css"; s.textContent = STMAboutCSS; document.head.appendChild(s);
    }
  }, []);
  const c = ABOUT_CONTENT[tab];
  return (
    <section className="stm-section" id="about" style={{ background: "var(--surface-page)" }}>
      <div className="stm-container">
        <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--space-5)" }}>
          <span className="stm-kicker">About Safe Traffic Management</span>
          <div className="stm-tabs" role="tablist">
            <button className={`stm-tab ${tab === "about" ? "stm-tab--active" : ""}`} role="tab" aria-selected={tab === "about"} onClick={() => setTab("about")}>
              <Icon name="Building2" size={16} /> Who we are
            </button>
            <button className={`stm-tab ${tab === "careers" ? "stm-tab--active" : ""}`} role="tab" aria-selected={tab === "careers"} onClick={() => setTab("careers")}>
              <Icon name="HardHat" size={16} /> Careers
            </button>
          </div>
        </Reveal>

        <div className="stm-about__grid stm-2col" key={tab}>
          <Reveal>
            <span className="stm-kicker">{c.kicker}</span>
            <h2 className="stm-h2" style={{ marginTop: "var(--space-3)" }}>{c.title}</h2>
            <p className="stm-lead" style={{ marginBottom: "var(--space-2)" }}>{c.body}</p>
            <div className="stm-about__values">
              {c.values.map((v) => (
                <div className="stm-about__value" key={v.t}>
                  <Icon name="Check" size={20} />
                  <span><b>{v.t}</b>{v.d}</span>
                </div>
              ))}
            </div>
            {c.cta ? <Button variant="primary" href={c.cta.href} iconRight={<Icon name="ArrowRight" size={18} />}>{c.cta.label}</Button> : null}
          </Reveal>
          <Reveal delay={120} className="stm-about__media">
            <image-slot id={c.slot} fit="cover" src={c.src} placeholder={c.placeholder}></image-slot>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function UspPanel() {
  const { Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal, SectionHeader } = window.STM;
  const D = window.STM_DATA;
  return (
    <section className="stm-section stm-usp">
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            align="center"
            kicker="Why choose us"
            title="Why clients trust Safe Traffic Management"
            lead="Owned and operated by safety professionals, STM gives government, civil and utilities clients the accountability and visibility to keep projects safe, compliant and moving."
            maxWidth="62ch"
          />
        </Reveal>
        <div className="stm-usp__grid">
          {D.usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 90} className="stm-usp__card">
              <span className="stm-usp__icon"><Icon name={u.icon} size={28} /></span>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.STM.AboutPanel = AboutPanel;
window.STM.UspPanel = UspPanel;
