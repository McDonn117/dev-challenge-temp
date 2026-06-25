/* global React */
// Hero banner + primary CTA strip.
const STMHeroCSS = `
.stm-hero {
  position: relative; background: var(--gradient-asphalt); overflow: hidden;
  border-bottom: 4px solid var(--orange-500);
}
.stm-hero__photo { position: absolute; inset: 0; width: 100%; height: 100%; }
.stm-hero__photo image-slot { width: 100%; height: 100%; display: block; }
.stm-hero__scrim {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(96deg, rgba(20,20,19,0.95) 0%, rgba(20,20,19,0.88) 40%, rgba(20,20,19,0.66) 72%, rgba(20,20,19,0.5) 100%);
}
.stm-hero__mark { position: absolute; right: -60px; bottom: -70px; width: 460px; opacity: 0.10; filter: grayscale(1) brightness(3); z-index: 1; pointer-events: none; }
.stm-hero__inner {
  position: relative; z-index: 2; max-width: var(--container-xl); margin: 0 auto;
  padding: var(--space-24) var(--space-6); min-height: 560px; display: flex; flex-direction: column; justify-content: center;
}
.stm-hero__kicker { color: var(--orange-400); }
.stm-hero h1 {
  color: var(--white); font-size: var(--text-5xl); line-height: 1.02; font-stretch: 108%;
  letter-spacing: var(--tracking-tighter); margin: var(--space-4) 0 var(--space-5); max-width: 17ch;
}
.stm-hero__lead { color: var(--neutral-300); font-size: var(--text-md); line-height: var(--leading-normal); max-width: 56ch; margin: 0 0 var(--space-8); }
.stm-hero__cta { display: flex; gap: var(--space-3); flex-wrap: wrap; }
.stm-hero__trust { display: flex; flex-wrap: wrap; gap: var(--space-6) var(--space-8); margin-top: var(--space-12); padding-top: var(--space-8); border-top: 1px solid rgba(255,255,255,0.14); }
.stm-hero__trust-item { display: flex; align-items: center; gap: 10px; color: var(--neutral-100); font-weight: var(--fw-semibold); font-size: var(--text-sm); }
.stm-hero__trust-item svg { width: 20px; height: 20px; color: var(--orange-400); flex: none; }
@media (max-width: 720px){ .stm-hero h1 { font-size: var(--text-3xl); } .stm-hero__inner { padding: var(--space-16) var(--space-6); min-height: 480px; } }

.stm-ctastrip { background: var(--gradient-hivis); position: relative; }
.stm-ctastrip__inner {
  max-width: var(--container-xl); margin: 0 auto; padding: var(--space-8) var(--space-6);
  display: flex; align-items: center; justify-content: space-between; gap: var(--space-8); flex-wrap: wrap;
}
.stm-ctastrip__title { font-family: var(--font-display); font-weight: var(--fw-black); font-size: var(--text-xl); color: var(--neutral-950); margin: 0; line-height: 1.1; letter-spacing: var(--tracking-tight); }
.stm-ctastrip__sub { color: rgba(28,28,27,0.78); font-weight: var(--fw-semibold); font-size: var(--text-sm); margin: 6px 0 0; }
.stm-ctastrip__actions { display: flex; align-items: center; gap: var(--space-5); flex-wrap: wrap; }
.stm-ctastrip__call { display: inline-flex; align-items: center; gap: 9px; color: var(--neutral-950); text-decoration: none; font-family: var(--font-display); font-weight: var(--fw-black); font-size: var(--text-lg); }
.stm-ctastrip__call svg { width: 22px; height: 22px; }
.stm-ctastrip__call:hover { text-decoration: none; opacity: 0.82; }
`;

function ensureHeroCss() {
  if (!document.getElementById("stm-hero-css")) {
    const s = document.createElement("style"); s.id = "stm-hero-css"; s.textContent = STMHeroCSS; document.head.appendChild(s);
  }
}

function Hero() {
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  const D = window.STM_DATA;
  React.useEffect(ensureHeroCss, []);
  const trust = [
    { icon: "ShieldCheck", label: "$20M Public Liability cover" },
    { icon: "FileCheck2", label: "TMR Code of Practice" },
    { icon: "BadgeCheck", label: "RIISS-ticketed crews" },
    { icon: "Clock", label: "Available 24/7" },
  ];
  return (
    <section className="stm-hero" id="top">
      <div className="stm-hero__photo">
        <image-slot id="hero-photo" fit="cover" src={D.img.hero} placeholder="Drop an on-site hi-vis photograph"></image-slot>
      </div>
      <div className="stm-hero__scrim"></div>
      <div className="stm-hero__inner">
        <span className="stm-kicker stm-hero__kicker">Safety-governed traffic management · Queensland</span>
        <h1>Governed by safety. Proven by compliance.</h1>
        <p className="stm-hero__lead">
          Safe Traffic Management delivers qualified traffic crews, structured WHS
          systems and real-time compliance reporting, reducing risk and keeping
          government, infrastructure, utilities and construction projects moving.
        </p>
        <div className="stm-hero__cta">
          <Button variant="primary" size="lg" href="#contact" icon={<Icon name="HardHat" size={20} />}>Request a crew</Button>
          <Button variant="outline" size="lg" href="#capability" iconRight={<Icon name="ArrowRight" size={18} />}
            style={{ background: "rgba(255,255,255,0.06)", color: "var(--white)", borderColor: "rgba(255,255,255,0.4)" }}>
            View capability
          </Button>
        </div>
        <div className="stm-hero__trust">
          {trust.map((t) => (
            <span className="stm-hero__trust-item" key={t.label}><Icon name={t.icon} size={20} />{t.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  const { Button, Icon } = window.SafeTrafficManagementDesignSystem_f03467;
  React.useEffect(ensureHeroCss, []);
  const D = window.STM_DATA;
  return (
    <section className="stm-ctastrip">
      <div className="stm-ctastrip__inner">
        <div>
          <p className="stm-ctastrip__title">Need a compliant crew on site?</p>
          <p className="stm-ctastrip__sub">Planned works or emergency response, we mobilise across South East Queensland and Northern NSW.</p>
        </div>
        <div className="stm-ctastrip__actions">
          <a className="stm-ctastrip__call" href={D.contact.phoneHref}><Icon name="Phone" size={22} />{D.contact.phone}</a>
          <Button variant="secondary" size="lg" href="#contact" icon={<Icon name="Send" size={18} />}>Request a crew</Button>
        </div>
      </div>
    </section>
  );
}

window.STM.Hero = Hero;
window.STM.CtaStrip = CtaStrip;
