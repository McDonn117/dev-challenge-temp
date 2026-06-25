/* global React */
// Testimonials feed, Industries cards (+ view all), FAQ accordion.
const STMSocialCSS = `
.stm-tst { background: var(--orange-50); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); }
.stm-tst__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
.stm-tst__card { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-8); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: var(--space-4); }
.stm-tst__stars { display: inline-flex; gap: 2px; color: var(--orange-500); }
.stm-tst__stars svg { width: 18px; height: 18px; fill: currentColor; }
.stm-tst__quote { font-size: var(--text-md); color: var(--text-body); line-height: var(--leading-normal); margin: 0; }
.stm-tst__who { display: flex; align-items: center; gap: 12px; margin-top: auto; padding-top: var(--space-4); border-top: 1px solid var(--border-subtle); }
.stm-tst__avatar { width: 42px; height: 42px; border-radius: var(--radius-pill); background: var(--blue-50); color: var(--blue-700); display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: var(--fw-black); flex: none; }
.stm-tst__name { font-weight: var(--fw-bold); color: var(--text-strong); font-size: var(--text-sm); }
.stm-tst__role { color: var(--text-muted); font-size: var(--text-xs); }
.stm-tst__ghead { display: inline-flex; align-items: center; gap: 10px; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-pill); padding: 8px 16px; box-shadow: var(--shadow-sm); }
.stm-tst__ghead b { font-family: var(--font-display); font-weight: var(--fw-black); color: var(--text-strong); }
.stm-tst__gdot { width: 22px; height: 22px; border-radius: var(--radius-pill); background: var(--blue-500); color: var(--white); display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: var(--fw-black); font-size: 13px; }

.stm-ind__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-5); }
.stm-ind__card { display: block; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-sm); text-decoration: none; transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base), border-color var(--dur-base); height: 100%; }
.stm-ind__card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); border-color: var(--border-strong); text-decoration: none; }
.stm-ind__icon { width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--blue-50); color: var(--blue-600); display: inline-flex; align-items: center; justify-content: center; margin-bottom: var(--space-4); }
.stm-ind__icon svg { width: 24px; height: 24px; }
.stm-ind__card h3 { font-size: var(--text-md); margin: 0 0 6px; }
.stm-ind__card p { color: var(--text-muted); font-size: var(--text-sm); margin: 0 0 var(--space-4); line-height: var(--leading-normal); }
.stm-ind__more { display: inline-flex; align-items: center; gap: 6px; color: var(--text-link); font-weight: var(--fw-bold); font-size: var(--text-sm); }
.stm-ind__more svg { width: 15px; height: 15px; transition: transform var(--dur-fast); }
.stm-ind__card:hover .stm-ind__more svg { transform: translateX(3px); }

.stm-faq__grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: var(--space-16); align-items: start; }
.stm-faq__list { display: grid; gap: var(--space-3); }
.stm-faq__item { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden; transition: border-color var(--dur-fast); }
.stm-faq__item--open { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }
.stm-faq__q { width: 100%; text-align: left; appearance: none; background: none; border: 0; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); padding: var(--space-5) var(--space-6); font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--text-md); color: var(--text-strong); }
.stm-faq__icon { width: 30px; height: 30px; border-radius: var(--radius-sm); background: var(--orange-50); color: var(--orange-600); display: inline-flex; align-items: center; justify-content: center; flex: none; transition: background var(--dur-fast), transform var(--dur-base) var(--ease-standard); }
.stm-faq__icon svg { width: 18px; height: 18px; }
.stm-faq__item--open .stm-faq__icon { background: var(--orange-500); color: var(--neutral-950); transform: rotate(180deg); }
.stm-faq__a { display: block; max-height: 0; overflow: hidden; transition: max-height var(--dur-slow) var(--ease-standard); }
.stm-faq__item--open .stm-faq__a { max-height: 460px; }
.stm-faq__a p { margin: 0; padding: 0 var(--space-6) var(--space-6); color: var(--text-muted); font-size: var(--text-base); line-height: var(--leading-normal); }
@media (max-width: 980px){ .stm-tst__grid { grid-template-columns: 1fr; } .stm-ind__grid { grid-template-columns: 1fr 1fr; } .stm-faq__grid { grid-template-columns: 1fr; gap: var(--space-10); } }
`;

function ensureSocialCss() {
  if (!document.getElementById("stm-social-css")) {
    const s = document.createElement("style"); s.id = "stm-social-css"; s.textContent = STMSocialCSS; document.head.appendChild(s);
  }
}

function Stars({ n = 5 }) {
  const { Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  return <span className="stm-tst__stars">{Array.from({ length: n }).map((_, i) => <Icon key={i} name="Star" size={18} />)}</span>;
}

function TestimonialsPanel() {
  const { Reveal, SectionHeader } = window.STM;
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const D = window.STM_DATA;
  React.useEffect(ensureSocialCss, []);
  return (
    <section className="stm-section stm-tst" id="testimonials">
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            kicker="What clients say"
            title="Trusted on site and on the record"
            lead="Feedback from the engineers, site managers and councils who rely on our crews and our reporting."
            action={
              <img src={window.STM_DATA.assets.googleReviews} alt="Google Reviews — 5 stars" style={{ height: "34px", width: "auto", display: "block" }} />
            }
          />
        </Reveal>
        <div className="stm-tst__grid">
          {D.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90} className="stm-tst__card">
              <Stars n={t.rating} />
              <p className="stm-tst__quote">{t.quote}</p>
              <div className="stm-tst__who">
                <span className="stm-tst__avatar">{t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                <span>
                  <div className="stm-tst__name">{t.name}</div>
                  <div className="stm-tst__role">{t.role}</div>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: "var(--space-10)", textAlign: "center" }}>
          <Button variant="outline" href={D.contact.googleReviewUrl} icon={<Icon name="Star" size={18} />}>Read our Google reviews</Button>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesPanel() {
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal, SectionHeader } = window.STM;
  const D = window.STM_DATA;
  React.useEffect(ensureSocialCss, []);
  return (
    <section className="stm-section" id="industries" style={{ background: "var(--surface-page)" }}>
      <div className="stm-container">
        <Reveal>
          <SectionHeader
            kicker="Industries we support"
            title="Trusted across Queensland's most regulated work"
            lead="From major civil projects to live utilities and council works, we tailor our crews and systems to the sector."
            action={<Button variant="outline" href="#industries" iconRight={<Icon name="ArrowRight" size={18} />}>View all industries</Button>}
          />
        </Reveal>
        <div className="stm-ind__grid">
          {D.industries.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 80}>
              <a className="stm-ind__card" href={it.href}>
                <span className="stm-ind__icon"><Icon name={it.icon} size={24} /></span>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <span className="stm-ind__more">Learn more <Icon name="ArrowRight" size={15} /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  const { Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  return (
    <div className={`stm-faq__item ${open ? "stm-faq__item--open" : ""}`}>
      <button className="stm-faq__q" aria-expanded={open} onClick={onToggle}>
        <span>{q}</span>
        <span className="stm-faq__icon"><Icon name="ChevronDown" size={18} /></span>
      </button>
      <div className="stm-faq__a"><div><p>{a}</p></div></div>
    </div>
  );
}

function FaqPanel() {
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const { Reveal } = window.STM;
  const D = window.STM_DATA;
  const [open, setOpen] = React.useState(0);
  React.useEffect(ensureSocialCss, []);
  return (
    <section className="stm-section stm-usp" id="faq">
      <div className="stm-container">
        <div className="stm-faq__grid">
          <Reveal>
            <span className="stm-kicker">FAQ</span>
            <h2 className="stm-h2" style={{ marginTop: "var(--space-3)" }}>Questions, answered</h2>
            <p className="stm-lead" style={{ marginBottom: "var(--space-6)" }}>
              The things clients ask most before engaging a traffic management
              partner. Need something specific to your site? Talk to our team.
            </p>
            <Button variant="primary" href="#contact" icon={<Icon name="MessageSquare" size={18} />}>Ask a question</Button>
          </Reveal>
          <Reveal delay={120} className="stm-faq__list">
            {D.faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.STM.TestimonialsPanel = TestimonialsPanel;
window.STM.IndustriesPanel = IndustriesPanel;
window.STM.FaqPanel = FaqPanel;
