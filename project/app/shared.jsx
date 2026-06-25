/* global React */
// Shared helpers + central content data for the STM homepage.
// Exposed on window.STM (helpers) and window.STM_DATA (content).
const { useRef, useState, useEffect } = React;

/* ----------------------------------------------------------------
   Reveal — scroll-triggered fade/lift. Defaults visible; only hides
   elements safely below the fold, then reveals on intersection.
   (DS bundle does not export its internal Reveal, so we ship our own.)
----------------------------------------------------------------- */
function Reveal({ delay = 0, y = 18, as = "div", style = {}, children, ...rest }) {
  const ref = useRef(null);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 0) * 0.92) return;
    setHidden(true);
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHidden(false); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    const t = setTimeout(() => { setHidden(false); io.disconnect(); }, 1800);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{
      opacity: hidden ? 0 : 1,
      transform: hidden ? `translateY(${y}px)` : "none",
      transition: "opacity 620ms var(--ease-out), transform 620ms var(--ease-out)",
      transitionDelay: `${delay}ms`,
      ...style,
    }} {...rest}>{children}</Tag>
  );
}

/* ----------------------------------------------------------------
   Counter — animates a number from 0 to `value` once it scrolls into
   view. Honours reduced-motion (shows final value immediately).
----------------------------------------------------------------- */
function Counter({ value = 0, duration = 1600, prefix = "", suffix = "", decimals = 0, className, style }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") { setN(value); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setN(value * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setN(value);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  const display = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-AU");
  return <span ref={ref} className={className} style={style}>{prefix}{display}{suffix}</span>;
}

/* ----------------------------------------------------------------
   SectionHeader — kicker + h2 + optional lead, with optional action.
----------------------------------------------------------------- */
function SectionHeader({ kicker, kickerColor = "orange", title, lead, align = "left", action, maxWidth = "62ch", id }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      gap: "var(--space-8)", marginBottom: "var(--space-12)", flexWrap: "wrap",
      ...(align === "center" ? { flexDirection: "column", alignItems: "center", textAlign: "center" } : {}),
    }}>
      <div style={{ maxWidth, ...(align === "center" ? { margin: "0 auto" } : {}) }}>
        {kicker ? <span className="stm-kicker" style={{ color: kickerColor === "blue" ? "var(--blue-600)" : kickerColor === "onDark" ? "var(--orange-400)" : "var(--orange-600)" }}>{kicker}</span> : null}
        {title ? <h2 id={id} className="stm-h2">{title}</h2> : null}
        {lead ? <p className="stm-lead">{lead}</p> : null}
      </div>
      {action ? <div style={{ flex: "none", paddingBottom: "4px" }}>{action}</div> : null}
    </div>
  );
}

window.STM = { Reveal, Counter, SectionHeader };

/* ================================================================
   CENTRAL CONTENT DATA
   Placeholders flagged in handoff notes: phone number, email,
   street addresses, testimonials (new business — no live reviews
   yet), and the statistics values.
================================================================ */
window.STM_DATA = {
  // Indicative roadwork stock (deterministic). Replace with the client's own
  // Australian on-site photography at build.
  img: {
    hero:       "https://loremflickr.com/1700/1100/roadworks?lock=1",
    works:      "https://loremflickr.com/1300/950/roadworks?lock=9",
    grader:     "https://loremflickr.com/1300/950/road,construction?lock=2",
    excavator:  "https://loremflickr.com/1300/950/roadworks?lock=5",
  },
  assets: {
    googleReviews: "assets/google-reviews.png",
    fivebyfive: "assets/fivebyfive-icon-white.png",
    certs: [
      { src: "assets/certs/qld-tmr.jpg", alt: "Queensland Government — Transport and Main Roads" },
      { src: "assets/certs/nationally-recognised-training.png", alt: "Nationally Recognised Training" },
      { src: "assets/certs/aqf.jpeg", alt: "Australian Qualifications Framework" },
      { src: "assets/certs/standards-australia.png", alt: "Standards Australia" },
    ],
  },

  contact: {
    phone: "1300 786 233",
    phoneHref: "tel:1300786233",
    email: "operations@safetrafficmanagement.com.au",
    region: "South East Queensland & Northern NSW",
    googleReviewUrl: "#google-business-profile",
  },

  nav: [
    { label: "Services", href: "#services", items: [
      { label: "Traffic Control Personnel", href: "#services" },
      { label: "Temporary Traffic Management", href: "#services" },
      { label: "Lane & Shoulder Closures", href: "#services" },
      { label: "Pedestrian & Cyclist Management", href: "#services" },
      { label: "Emergency Response", href: "#services" },
      { label: "Night Works", href: "#services" },
      { label: "Site Monitoring & Compliance Reporting", href: "#services" },
      { label: "VMS Board Hire", href: "#services" },
      { label: "Permits & Road Occupancy", href: "#services" },
    ]},
    { label: "Safety & Compliance", href: "#compliance", items: [
      { label: "SWMS & Risk Assessments", href: "#compliance" },
      { label: "Compliance Standards", href: "#compliance" },
      { label: "Drug & Alcohol Management", href: "#compliance" },
    ]},
    { label: "Industries", href: "#industries", items: [
      { label: "Civil Construction", href: "#industries" },
      { label: "Utilities", href: "#industries" },
      { label: "Government Projects", href: "#industries" },
      { label: "Events & Private Projects", href: "#industries" },
    ]},
    { label: "Locations", href: "#locations", items: [
      { label: "Brisbane", href: "#locations" },
      { label: "Gold Coast", href: "#locations" },
      { label: "Sunshine Coast", href: "#locations" },
      { label: "Northern NSW", href: "#locations" },
    ]},
    { label: "Capability", href: "#capability" },
    { label: "Careers", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    { icon: "TrafficCone", title: "Traffic control personnel", desc: "RIISS-ticketed controllers and implementers, site-ready and verified before they reach your works." },
    { icon: "Route", title: "Temporary traffic management", desc: "Compliant set-up, operation and removal of Traffic Management Plans on live carriageways." },
    { icon: "Construction", title: "Lane & shoulder closures", desc: "Safe, efficient access maintained around lane, shoulder and full road closures." },
    { icon: "Footprints", title: "Pedestrian & cyclist management", desc: "Protected movement and clear detours around active works for the public." },
    { icon: "Siren", title: "Emergency response", desc: "Crews and supervisors mobilised 24/7 for reactive and incident traffic management." },
    { icon: "Moon", title: "Night works", desc: "Lit, supervised night-works coverage delivered when the road is quietest." },
    { icon: "Cctv", title: "Site monitoring & compliance reporting", desc: "GPS-verified inspections, digital audit trails and end-of-shift client reporting." },
    { icon: "MonitorPlay", title: "VMS board hire", desc: "Variable message signs and electronic boards to inform and direct road users." },
    { icon: "Stamp", title: "Permits & road occupancy", desc: "Road occupancy permits and approvals managed and lodged on your behalf." },
  ],

  stats: [
    { value: 20, prefix: "$", suffix: "M", label: "Public Liability cover", caption: "Comprehensively insured for major projects" },
    { value: 24, suffix: "/7", label: "Reactive response", caption: "Crews available around the clock" },
    { value: 100, suffix: "%", label: "Audit-ready reporting", caption: "Every shift logged and traceable" },
    { value: 4, suffix: "", label: "Service regions", caption: "Across South East QLD & Northern NSW" },
  ],

  usps: [
    { icon: "ShieldCheck", title: "Safety-governed operations", desc: "Every decision is made with safety and risk control at the core, overseen end to end by experienced safety professionals." },
    { icon: "Activity", title: "Real-time compliance & accountability", desc: "GPS-verified inspections, digital reporting and corrective-action tracking give you live visibility and audit-ready records." },
    { icon: "HardHat", title: "Qualified & reliable personnel", desc: "Ticketed, screened and inducted crews you can depend on to deliver consistently, professionally and on time." },
  ],

  safety: [
    { icon: "ClipboardCheck", title: "SWMS & risk assessments", desc: "Site-specific Safe Work Method Statements and risk assessments prepared for every engagement.", href: "#" },
    { icon: "ShieldCheck", title: "Compliance standards", desc: "Operating to MUTCD QLD, TMR Code of Practice, AS 1742, Austroads and the WHS Act (Qld).", href: "#" },
    { icon: "FlaskConical", title: "Drug & alcohol management", desc: "Fitness-for-work, drug, alcohol and fatigue management built into our operating model.", href: "#" },
  ],

  standards: ["MUTCD QLD", "TMR Code of Practice", "AS 1742", "Austroads", "WHS Act (Qld)"],

  industries: [
    { icon: "Building2", title: "Civil construction", desc: "Traffic control for roadworks, earthworks and major civil project delivery.", href: "#" },
    { icon: "Zap", title: "Utilities", desc: "Safe access for water, power, gas and telecommunications works.", href: "#" },
    { icon: "Landmark", title: "Government projects", desc: "Compliant, audit-ready delivery for TMR and local councils.", href: "#" },
    { icon: "CalendarDays", title: "Events & private projects", desc: "Crowd, road and access management for events and private works.", href: "#" },
  ],

  testimonials: [
    { quote: "STM's crews turned up ticketed, briefed and ready. The end-of-shift reports made our compliance reviews straightforward.", name: "Project Engineer", role: "Civil contractor, Brisbane", rating: 5 },
    { quote: "Reliable through a difficult night-works program. Their supervisors kept the site safe and the traffic moving.", name: "Site Manager", role: "Infrastructure project, Gold Coast", rating: 5 },
    { quote: "The real-time reporting and GPS-verified inspections gave us the visibility we needed for a council audit.", name: "Works Coordinator", role: "Local council, Sunshine Coast", rating: 5 },
  ],

  faqs: [
    { q: "What areas do you service?", a: "We operate across South East Queensland, including Brisbane, the Gold Coast and the Sunshine Coast, as well as Northern New South Wales. Reach out about your site and we will confirm availability." },
    { q: "Are your traffic controllers qualified and ticketed?", a: "Yes. Every controller and implementer is screened, inducted and holds the relevant RIISS qualifications. We verify tickets and currency before crews reach your site." },
    { q: "Do you provide Traffic Management Plans?", a: "We implement, operate and remove Traffic Management Plans in line with MUTCD QLD, the TMR Code of Practice and AS 1742, and can coordinate plan preparation where required." },
    { q: "Can you respond to emergencies and after-hours works?", a: "Yes. We provide 24/7 reactive and emergency traffic management, including planned night and after-hours works with supervised, lit coverage." },
    { q: "How do you handle compliance and reporting?", a: "Inspections are GPS-verified and time-stamped, corrective actions are tracked to closure, and a report is issued at the end of each shift, keeping your project audit-ready by default." },
    { q: "What insurance do you carry?", a: "We hold $20M Public Liability cover and maintain the WHS systems, SWMS and risk assessments expected on government, utilities and major-contractor projects." },
  ],

  locations: [
    { name: "Brisbane", region: "Greater Brisbane & Ipswich", blurb: "Our central hub for South East Queensland, supporting civil, government and utilities works across the metro network.", coords: "-27.4698, 153.0251", phone: "1300 786 233", email: "brisbane@safetrafficmanagement.com.au", area: "Brisbane, QLD 4000" },
    { name: "Gold Coast", region: "Gold Coast & Logan", blurb: "Crews servicing the M1 corridor, coastal works and events across the Gold Coast and Logan.", coords: "-28.0167, 153.4000", phone: "1300 786 233", email: "goldcoast@safetrafficmanagement.com.au", area: "Southport, QLD 4215" },
    { name: "Sunshine Coast", region: "Sunshine Coast & Moreton Bay", blurb: "Coverage from Caboolture to Noosa for infrastructure, maintenance and council projects.", coords: "-26.6500, 153.0667", phone: "1300 786 233", email: "sunshinecoast@safetrafficmanagement.com.au", area: "Maroochydore, QLD 4558" },
    { name: "Northern NSW", region: "Tweed & Northern Rivers", blurb: "Cross-border support for the Tweed and Northern Rivers, working to NSW and QLD requirements.", coords: "-28.1667, 153.5500", phone: "1300 786 233", email: "nnsw@safetrafficmanagement.com.au", area: "Tweed Heads, NSW 2485" },
  ],
};
