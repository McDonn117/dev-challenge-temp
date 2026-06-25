/* global React */
// Services grid (9 cards + view all) and animated statistics band.
const STMStatsCSS = `
.stm-stats { background: var(--gradient-blue); color: var(--white); position: relative; overflow: hidden; }
.stm-stats__photo { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.16; }
.stm-stats::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(18,46,74,0.35), rgba(11,28,46,0.65)); }
.stm-stats__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); position: relative; z-index: 1; }
.stm-stat-card { padding-left: var(--space-6); border-left: 3px solid var(--orange-500); }
.stm-stat-card__value { font-family: var(--font-display); font-weight: var(--fw-black); font-size: var(--text-4xl); line-height: 1; color: var(--hivis-yellow); font-stretch: 108%; letter-spacing: var(--tracking-tight); display: block; }
.stm-stat-card__label { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--text-md); color: var(--white); margin-top: var(--space-3); }
.stm-stat-card__caption { font-size: var(--text-sm); color: var(--blue-100); margin-top: 4px; line-height: 1.4; }
@media (max-width: 720px){ .stm-stat-card__value { font-size: var(--text-3xl); } }
`;

function ServicesPanel() {
  const { ServiceCard, Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal, SectionHeader } = window.STM;
  const D = window.STM_DATA;
  return (
    <section className="stm-section" id="services" style={{ background: "var(--surface-page)" }}>
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            kicker="Traffic Management Services"
            title="Everything a compliant worksite needs"
            lead="Safety-led traffic management across government, infrastructure, civil, utilities and maintenance works, delivered by qualified, ticketed crews."
            action={<Button variant="outline" href="#services" iconRight={<Icon name="ArrowRight" size={18} />}>View all services</Button>}
          />
        </Reveal>
        <div className="stm-svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {D.services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <ServiceCard
                icon={<Icon name={s.icon} size={24} />}
                title={s.title}
                description={s.desc}
                linkLabel="Learn more"
                href="#"
                style={{ height: "100%" }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsPanel() {
  const { Counter, Reveal } = window.STM;
  const D = window.STM_DATA;
  React.useEffect(() => {
    if (!document.getElementById("stm-stats-css")) {
      const s = document.createElement("style"); s.id = "stm-stats-css"; s.textContent = STMStatsCSS; document.head.appendChild(s);
    }
  }, []);
  return (
    <section className="stm-stats stm-section--tight">
      <div className="stm-stats__photo" style={{ backgroundImage: `url(${D.img.grader})` }}></div>
      <div className="stm-container">
        <div className="stm-stats-grid stm-stats__grid">
          {D.stats.map((st, i) => (
            <Reveal key={st.label} delay={i * 90} className="stm-stat-card">
              <span className="stm-stat-card__value">
                <Counter value={st.value} prefix={st.prefix || ""} suffix={st.suffix || ""} />
              </span>
              <div className="stm-stat-card__label">{st.label}</div>
              <div className="stm-stat-card__caption">{st.caption}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.STM.ServicesPanel = ServicesPanel;
window.STM.StatsPanel = StatsPanel;
