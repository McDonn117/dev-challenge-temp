/* @ds-bundle: {"format":3,"namespace":"SafeTrafficManagementDesignSystem_f03467","components":[{"name":"Icon","sourcePath":"components/Icon.jsx"},{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Kicker","sourcePath":"components/badges/Kicker.jsx"},{"name":"StatusPill","sourcePath":"components/badges/StatusPill.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/cards/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"ConsoleApp","sourcePath":"ui_kits/console/ConsoleApp.jsx"},{"name":"LoginScreen","sourcePath":"ui_kits/console/LoginScreen.jsx"},{"name":"Overview","sourcePath":"ui_kits/console/Overview.jsx"},{"name":"Sidebar","sourcePath":"ui_kits/console/Sidebar.jsx"},{"name":"SiteDrawer","sourcePath":"ui_kits/console/SiteDrawer.jsx"},{"name":"Topbar","sourcePath":"ui_kits/console/Topbar.jsx"},{"name":"ComplianceSection","sourcePath":"ui_kits/website/ComplianceSection.jsx"},{"name":"ContactSection","sourcePath":"ui_kits/website/ContactSection.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"HomePage","sourcePath":"ui_kits/website/HomePage.jsx"},{"name":"IndustriesSection","sourcePath":"ui_kits/website/IndustriesSection.jsx"},{"name":"ServicesSection","sourcePath":"ui_kits/website/ServicesSection.jsx"}],"sourceHashes":{"components/Icon.jsx":"2054ff46d854","components/badges/Badge.jsx":"fc1d095ee441","components/badges/Kicker.jsx":"24cbc21dfc49","components/badges/StatusPill.jsx":"30b97b64af21","components/buttons/Button.jsx":"75e027d96314","components/cards/Card.jsx":"e72c707b857d","components/cards/ServiceCard.jsx":"202fe445fcdc","components/cards/Stat.jsx":"91ce8a05419d","components/forms/Input.jsx":"d26d058a1c33","components/navigation/SiteHeader.jsx":"44aa71f0f086","ui_kits/console/ConsoleApp.jsx":"545807739c5f","ui_kits/console/LoginScreen.jsx":"fa9224d7b424","ui_kits/console/Overview.jsx":"3ad0d246bf48","ui_kits/console/Sidebar.jsx":"da367b691c26","ui_kits/console/SiteDrawer.jsx":"5682901689b6","ui_kits/console/Topbar.jsx":"462ee941340c","ui_kits/website/ComplianceSection.jsx":"3cba1a380e9c","ui_kits/website/ContactSection.jsx":"06b2a8f3a282","ui_kits/website/Footer.jsx":"d78e8edea542","ui_kits/website/Hero.jsx":"3413be1b0ec6","ui_kits/website/HomePage.jsx":"6a6ac03c9260","ui_kits/website/IndustriesSection.jsx":"aa701d836bcb","ui_kits/website/ServicesSection.jsx":"a12873c4222b"},"inlinedExternals":[],"unexposedExports":[{"name":"sites","sourcePath":"ui_kits/console/Overview.jsx"}]} */

(() => {

const __ds_ns = (window.SafeTrafficManagementDesignSystem_f03467 = window.SafeTrafficManagementDesignSystem_f03467 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Renders a Lucide icon by name. Lucide is loaded globally (CDN) on the host
 * page; this reads window.lucide at render time. Bundled helper — not a
 * documented primitive.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style = {},
  className = "",
  ...rest
}) {
  const lib = typeof window !== "undefined" ? window.lucide : null;
  const node = lib && lib.icons && lib.icons[name];
  if (!node) return null;
  const svg = lib.createElement(node);
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("stroke-width", strokeWidth);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg.outerHTML
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.jsx", error: String((e && e.message) || e) }); }

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-sans); font-weight: var(--fw-bold);
  font-size: var(--text-xs); line-height: 1; letter-spacing: 0.01em;
  padding: 5px 10px; border-radius: var(--radius-sm);
  background: var(--neutral-100); color: var(--neutral-700);
  border: var(--border-hairline) solid transparent;
}
.stm-badge svg { width: 1.05em; height: 1.05em; }
.stm-badge--orange { background: var(--orange-50); color: var(--orange-700); }
.stm-badge--blue   { background: var(--blue-50); color: var(--blue-700); }
.stm-badge--solid  { background: var(--orange-500); color: var(--neutral-950); }
.stm-badge--outline{ background: transparent; color: var(--text-strong); border-color: var(--border-strong); }
.stm-badge--mono   { font-family: var(--font-mono); font-weight: 500; letter-spacing: 0; }
`;
function Badge({
  variant = "neutral",
  icon,
  mono = false,
  className = "",
  children,
  ...rest
}) {
  useStyles("stm-badge-styles", CSS);
  const cls = ["stm-badge", variant !== "neutral" ? `stm-badge--${variant}` : "", mono ? "stm-badge--mono" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The brand's signature eyebrow: tracked uppercase label above a heading.
 */
function Kicker({
  color = "orange",
  as = "span",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const colors = {
    orange: "var(--orange-600)",
    blue: "var(--blue-600)",
    muted: "var(--text-subtle)",
    onDark: "var(--orange-400)"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `stm-kicker ${className}`.trim(),
    style: {
      color: colors[color] || colors.orange,
      display: "inline-block"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/badges/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-status {
  display: inline-flex; align-items: center; gap: 0.5em;
  font-family: var(--font-sans); font-weight: var(--fw-bold);
  font-size: var(--text-xs); line-height: 1; letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 5px 11px 5px 9px; border-radius: var(--radius-pill);
  border: var(--border-hairline) solid;
}
.stm-status__dot { width: 8px; height: 8px; border-radius: var(--radius-pill); flex: none; }
.stm-status--pass { background: var(--status-pass-bg); color: var(--status-pass-fg); border-color: color-mix(in srgb, var(--status-pass-bd) 40%, transparent); }
.stm-status--pass  .stm-status__dot { background: var(--status-pass-bd); }
.stm-status--warn { background: var(--status-warn-bg); color: var(--status-warn-fg); border-color: color-mix(in srgb, var(--status-warn-bd) 45%, transparent); }
.stm-status--warn  .stm-status__dot { background: var(--status-warn-bd); }
.stm-status--fail { background: var(--status-fail-bg); color: var(--status-fail-fg); border-color: color-mix(in srgb, var(--status-fail-bd) 40%, transparent); }
.stm-status--fail  .stm-status__dot { background: var(--status-fail-bd); }
.stm-status--info { background: var(--status-info-bg); color: var(--status-info-fg); border-color: color-mix(in srgb, var(--status-info-bd) 40%, transparent); }
.stm-status--info  .stm-status__dot { background: var(--status-info-bd); }
.stm-status--neutral { background: var(--neutral-100); color: var(--neutral-700); border-color: var(--border-default); }
.stm-status--neutral .stm-status__dot { background: var(--neutral-500); }
`;
const LABELS = {
  pass: "Compliant",
  warn: "Caution",
  fail: "Non-compliant",
  info: "Notice",
  neutral: "Pending"
};
function StatusPill({
  status = "pass",
  children,
  className = "",
  ...rest
}) {
  useStyles("stm-status-styles", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["stm-status", `stm-status--${status}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "stm-status__dot"
  }), children || LABELS[status]);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. */
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-btn {
  --_bg: var(--orange-500); --_fg: var(--neutral-950); --_bd: transparent; --_bgh: var(--orange-600);
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
  font-family: var(--font-sans); font-weight: var(--fw-bold);
  letter-spacing: 0.005em; line-height: 1; white-space: nowrap;
  border: var(--border-thin) solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-md); cursor: pointer; text-decoration: none;
  transition: background var(--dur-fast) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast);
}
.stm-btn:hover { background: var(--_bgh); }
.stm-btn:active { transform: scale(0.98); }
.stm-btn:focus-visible { outline: none; box-shadow: var(--ring); }
.stm-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }
.stm-btn--sm { font-size: var(--text-sm); padding: 8px 14px; }
.stm-btn--md { font-size: var(--text-base); padding: 11px 20px; }
.stm-btn--lg { font-size: var(--text-md); padding: 15px 28px; }
.stm-btn--full { width: 100%; }
.stm-btn--secondary { --_bg: var(--blue-500); --_fg: var(--white); --_bgh: var(--blue-600); }
.stm-btn--outline  { --_bg: transparent; --_fg: var(--text-strong); --_bd: var(--border-strong); --_bgh: var(--neutral-100); }
.stm-btn--ghost    { --_bg: transparent; --_fg: var(--text-strong); --_bgh: var(--neutral-100); }
.stm-btn--danger   { --_bg: var(--red-500); --_fg: var(--white); --_bgh: var(--red-700); }
.stm-btn__icon { display: inline-flex; }
.stm-btn__icon svg { width: 1.15em; height: 1.15em; display: block; }
`;
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  as,
  href,
  className = "",
  children,
  ...rest
}) {
  useStyles("stm-button-styles", CSS);
  const Tag = as || (href ? "a" : "button");
  const cls = ["stm-btn", `stm-btn--${size}`, variant !== "primary" ? `stm-btn--${variant}` : "", fullWidth ? "stm-btn--full" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: Tag === "a" ? href : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "stm-btn__icon"
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "stm-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-card {
  position: relative; background: var(--surface-card);
  border: var(--border-hairline) solid var(--border-subtle);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  padding: var(--space-6); overflow: hidden;
  transition: box-shadow var(--dur-base) var(--ease-standard),
              transform var(--dur-base) var(--ease-standard);
}
.stm-card--pad-sm { padding: var(--space-4); }
.stm-card--pad-lg { padding: var(--space-8); }
.stm-card--interactive { cursor: pointer; }
.stm-card--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
.stm-card--accent-left { border-left: var(--border-heavy) solid var(--_accent, var(--orange-500)); }
.stm-card--accent-top  { border-top: var(--border-heavy) solid var(--_accent, var(--orange-500)); }
.stm-card--inverse { background: var(--gradient-asphalt); border-color: transparent; color: var(--text-on-dark); }
.stm-card--inverse :where(h1,h2,h3,h4) { color: var(--white); }
`;
function Card({
  accent,
  // "orange" | "blue" | undefined
  accentSide = "left",
  pad = "md",
  interactive = false,
  inverse = false,
  className = "",
  style = {},
  children,
  ...rest
}) {
  useStyles("stm-card-styles", CSS);
  const accentColor = accent === "blue" ? "var(--blue-500)" : accent === "orange" ? "var(--orange-500)" : undefined;
  const cls = ["stm-card", pad !== "md" ? `stm-card--pad-${pad}` : "", interactive ? "stm-card--interactive" : "", inverse ? "stm-card--inverse" : "", accent ? `stm-card--accent-${accentSide}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: accentColor ? {
      "--_accent": accentColor,
      ...style
    } : style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-service__icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 48px; height: 48px; border-radius: var(--radius-md);
  background: var(--orange-50); color: var(--orange-600); margin-bottom: var(--space-4);
}
.stm-service__icon svg { width: 24px; height: 24px; }
.stm-service__icon--blue { background: var(--blue-50); color: var(--blue-600); }
.stm-service__title { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--text-md); color: var(--text-strong); margin: 0 0 6px; }
.stm-service__desc { font-size: var(--text-sm); line-height: var(--leading-normal); color: var(--text-muted); margin: 0; }
.stm-service__link {
  display: inline-flex; align-items: center; gap: 6px; margin-top: var(--space-4);
  font-weight: var(--fw-bold); font-size: var(--text-sm); color: var(--text-link);
}
.stm-service__link svg { width: 16px; height: 16px; transition: transform var(--dur-fast) var(--ease-standard); }
.stm-card--interactive:hover .stm-service__link svg { transform: translateX(3px); }
`;
function ServiceCard({
  icon,
  iconColor = "orange",
  title,
  description,
  linkLabel,
  href,
  className = "",
  ...rest
}) {
  useStyles("stm-service-styles", CSS);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!href,
    accent: "orange",
    accentSide: "top",
    className: className
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: ["stm-service__icon", iconColor === "blue" ? "stm-service__icon--blue" : ""].filter(Boolean).join(" ")
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    className: "stm-service__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "stm-service__desc"
  }, description) : null, linkLabel ? /*#__PURE__*/React.createElement("a", {
    className: "stm-service__link",
    href: href || "#"
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-stat { display: flex; flex-direction: column; gap: 4px; }
.stm-stat__value {
  font-family: var(--font-display); font-weight: var(--fw-black);
  font-size: var(--text-3xl); line-height: 1; letter-spacing: var(--tracking-tight);
  color: var(--text-strong); font-stretch: 105%;
}
.stm-stat__value--orange { color: var(--orange-600); }
.stm-stat__value--blue   { color: var(--blue-600); }
.stm-stat__value--onDark  { color: var(--orange-400); }
.stm-stat__label {
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  font-size: var(--text-sm); color: var(--text-body);
}
.stm-stat--onDark .stm-stat__label { color: var(--text-on-dark); }
.stm-stat__caption { font-size: var(--text-xs); color: var(--text-muted); }
.stm-stat--onDark .stm-stat__caption { color: var(--neutral-400); }
.stm-stat--lg .stm-stat__value { font-size: var(--text-4xl); }
.stm-stat--sm .stm-stat__value { font-size: var(--text-2xl); }
`;
function Stat({
  value,
  label,
  caption,
  color = "default",
  size = "md",
  onDark = false,
  className = "",
  ...rest
}) {
  useStyles("stm-stat-styles", CSS);
  const valCls = ["stm-stat__value", color !== "default" ? `stm-stat__value--${color}` : "", onDark ? "stm-stat__value--onDark" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["stm-stat", size !== "md" ? `stm-stat--${size}` : "", onDark ? "stm-stat--onDark" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: valCls
  }, value), label ? /*#__PURE__*/React.createElement("span", {
    className: "stm-stat__label"
  }, label) : null, caption ? /*#__PURE__*/React.createElement("span", {
    className: "stm-stat__caption"
  }, caption) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.stm-field__label { font-weight: var(--fw-semibold); font-size: var(--text-sm); color: var(--text-strong); }
.stm-field__req { color: var(--red-500); margin-left: 2px; }
.stm-field__wrap { position: relative; display: flex; align-items: center; }
.stm-field__icon { position: absolute; left: 12px; display: inline-flex; color: var(--text-subtle); pointer-events: none; }
.stm-field__icon svg { width: 18px; height: 18px; }
.stm-input {
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--text-body); background: var(--surface-card);
  border: var(--border-thin) solid var(--border-default); border-radius: var(--radius-md);
  padding: 11px 14px; transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.stm-input::placeholder { color: var(--text-subtle); }
.stm-input--has-icon { padding-left: 40px; }
.stm-input:hover { border-color: var(--border-strong); }
.stm-input:focus { outline: none; border-color: var(--border-focus); box-shadow: var(--ring); }
.stm-input:disabled { background: var(--neutral-100); color: var(--text-subtle); cursor: not-allowed; }
.stm-field--error .stm-input { border-color: var(--red-500); }
.stm-field--error .stm-input:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--red-500) 28%, transparent); }
.stm-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.stm-field__hint--error { color: var(--red-700); font-weight: var(--fw-medium); }
textarea.stm-input { resize: vertical; min-height: 88px; line-height: var(--leading-normal); }
`;
function Input({
  label,
  hint,
  error,
  icon,
  required = false,
  id,
  multiline = false,
  rows = 3,
  className = "",
  ...rest
}) {
  useStyles("stm-field-styles", CSS);
  const fieldId = id || (label ? "stm-" + String(label).toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    className: ["stm-field", error ? "stm-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "stm-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "stm-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "stm-field__wrap"
  }, icon && !multiline ? /*#__PURE__*/React.createElement("span", {
    className: "stm-field__icon"
  }, icon) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    className: ["stm-input", icon && !multiline ? "stm-input--has-icon" : ""].filter(Boolean).join(" "),
    rows: multiline ? rows : undefined,
    "aria-invalid": error ? "true" : undefined
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "stm-field__hint stm-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "stm-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.stm-header { position: relative; background: var(--surface-card); border-bottom: var(--border-hairline) solid var(--border-subtle); }
.stm-header::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 3px; background: var(--gradient-hivis); }
.stm-header--sticky { position: sticky; top: 0; z-index: 50; }
.stm-header__inner {
  max-width: var(--container-xl); margin: 0 auto; height: var(--header-h);
  display: flex; align-items: center; gap: var(--space-8); padding: 0 var(--space-6);
}
.stm-header__logo { display: inline-flex; align-items: center; }
.stm-header__logo img { height: 34px; width: auto; display: block; }
.stm-header__nav { display: flex; align-items: center; gap: var(--space-6); margin-left: var(--space-2); }
.stm-header__link {
  font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: var(--text-sm);
  color: var(--text-body); text-decoration: none; padding: 6px 2px; position: relative;
  transition: color var(--dur-fast) var(--ease-standard);
}
.stm-header__link:hover { color: var(--orange-600); text-decoration: none; }
.stm-header__link--active { color: var(--text-strong); }
.stm-header__link--active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px; background: var(--orange-500); }
.stm-header__spacer { flex: 1; }
.stm-header__actions { display: flex; align-items: center; gap: var(--space-3); }
@media (max-width: 860px) { .stm-header__nav { display: none; } }
`;
function SiteHeader({
  logoSrc = "../../assets/logos/stm-logo-horizontal.png",
  logoAlt = "Safe Traffic Management",
  links = [],
  activeHref,
  cta,
  secondaryCta,
  sticky = false,
  className = "",
  ...rest
}) {
  useStyles("stm-header-styles", CSS);
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["stm-header", sticky ? "stm-header--sticky" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "stm-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "stm-header__logo",
    href: "#",
    "aria-label": logoAlt
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logoAlt
  })), /*#__PURE__*/React.createElement("nav", {
    className: "stm-header__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href + l.label,
    className: ["stm-header__link", l.href === activeHref ? "stm-header__link--active" : ""].filter(Boolean).join(" "),
    href: l.href
  }, l.label))), /*#__PURE__*/React.createElement("span", {
    className: "stm-header__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stm-header__actions"
  }, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    href: secondaryCta.href
  }, secondaryCta.label) : null, cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: cta.href
  }, cta.label) : null)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/LoginScreen.jsx
try { (() => {
const points = ["Real-time compliance visibility", "GPS-verified inspections & audit trails", "Corrective-action tracking to closure"];
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--surface-page)"
    },
    className: "stm-login"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-asphalt)",
      color: "var(--white)",
      padding: "var(--space-16)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    className: "stm-login-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/stm-mark.png",
    alt: "",
    style: {
      position: "absolute",
      right: "-90px",
      bottom: "-70px",
      width: "440px",
      opacity: 0.08,
      filter: "grayscale(1) brightness(3)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/stm-logo-horizontal-tagline.png",
    alt: "Safe Traffic Management",
    style: {
      height: "52px",
      background: "var(--white)",
      padding: "10px 14px",
      borderRadius: "var(--radius-md)",
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stm-kicker",
    style: {
      color: "var(--orange-400)"
    }
  }, "STM Compliance Console"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "var(--white)",
      fontSize: "var(--text-3xl)",
      lineHeight: 1.05,
      margin: "var(--space-3) 0 var(--space-6)"
    }
  }, "Every shift, on the record."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      color: "var(--neutral-200)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-400)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ShieldCheck",
    size: 18
  })), p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--neutral-500)"
    }
  }, "Governed By Safety \xB7 MUTCD QLD \xB7 AS 1742")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      width: "100%",
      maxWidth: "360px",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      margin: "0 0 6px"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      margin: 0
    }
  }, "Supervisors & compliance staff only.")), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Work email",
    type: "email",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Mail",
      size: 18
    }),
    defaultValue: "j.lee@safetrafficmgmt.com.au",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Password",
    type: "password",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Lock",
      size: 18
    }),
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      accentColor: "var(--orange-500)",
      width: "15px",
      height: "15px"
    }
  }), " Keep me signed in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-link)",
      fontWeight: 600
    }
  }, "Forgot?")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Sign in to console"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "11px",
      color: "var(--text-subtle)",
      margin: 0,
      fontFamily: "var(--font-mono)"
    }
  }, "Access is logged for audit purposes."))));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Overview.jsx
try { (() => {
const kpis = [{
  value: "6",
  label: "Active sites",
  caption: "2 night works",
  color: "default",
  icon: "MapPin"
}, {
  value: "18",
  label: "Crew on shift",
  caption: "RIISS verified",
  color: "blue",
  icon: "Users"
}, {
  value: "100%",
  label: "Inspections passed",
  caption: "last 24h",
  color: "orange",
  icon: "ClipboardCheck"
}, {
  value: "1",
  label: "Open correction",
  caption: "due 11:00",
  color: "default",
  icon: "Wrench"
}];
const sites = [{
  id: "QLD-M1-0042",
  name: "M1 Pacific Mwy — Stage 2",
  crew: "C-118",
  lead: "A. Okafor",
  status: "pass",
  next: "06:15",
  type: "Lane closure"
}, {
  id: "QLD-BR-0207",
  name: "Bruce Hwy upgrade",
  crew: "C-104",
  lead: "S. Patel",
  status: "pass",
  next: "06:30",
  type: "Shoulder works"
}, {
  id: "QLD-IPS-088",
  name: "Ipswich Rd resurfacing",
  crew: "C-131",
  lead: "M. Nguyen",
  status: "warn",
  next: "now",
  type: "Night works"
}, {
  id: "QLD-UTL-0319",
  name: "Energex pit replacement",
  crew: "C-127",
  lead: "R. Davies",
  status: "pass",
  next: "07:00",
  type: "Utilities"
}, {
  id: "QLD-GC-0410",
  name: "Gold Coast LRT corridor",
  crew: "C-142",
  lead: "K. Brooks",
  status: "fail",
  next: "hold",
  type: "Pedestrian mgmt"
}, {
  id: "QLD-TWB-0061",
  name: "Toowoomba range detour",
  crew: "C-109",
  lead: "D. Hughes",
  status: "pass",
  next: "06:45",
  type: "Detour"
}];
const feed = [{
  icon: "MapPinCheck",
  color: "var(--green-700)",
  text: "GPS inspection passed",
  site: "M1 Pacific Mwy",
  time: "05:41"
}, {
  icon: "FileCheck2",
  color: "var(--blue-700)",
  text: "SWMS verified",
  site: "Bruce Hwy",
  time: "05:33"
}, {
  icon: "TriangleAlert",
  color: "var(--amber-700)",
  text: "Signage spacing flagged",
  site: "Ipswich Rd",
  time: "05:20"
}, {
  icon: "Wrench",
  color: "var(--orange-700)",
  text: "Corrective action opened",
  site: "Gold Coast LRT",
  time: "05:08"
}, {
  icon: "Truck",
  color: "var(--neutral-700)",
  text: "Crew C-142 mobilised",
  site: "Gold Coast LRT",
  time: "04:55"
}];
function Overview({
  onOpenSite
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-4)"
    },
    className: "stm-kpi-grid"
  }, kpis.map(k => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: k.label,
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: k.value,
    label: k.label,
    caption: k.caption,
    color: k.color
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-subtle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 20
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    },
    className: "stm-ops-grid"
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-3) var(--space-3) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-md)"
    }
  }, "Active sites"), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "orange",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Radio",
      size: 12
    })
  }, "Live")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      color: "var(--text-subtle)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 12px",
      fontWeight: 700
    }
  }, "Site"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 12px",
      fontWeight: 700
    }
  }, "Crew"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 12px",
      fontWeight: 700
    }
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 12px",
      fontWeight: 700
    }
  }, "Next insp."))), /*#__PURE__*/React.createElement("tbody", null, sites.map(s => /*#__PURE__*/React.createElement("tr", {
    key: s.id,
    onClick: () => onOpenSite && onOpenSite(s),
    className: "stm-row",
    style: {
      borderTop: "1px solid var(--border-subtle)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--text-subtle)"
    }
  }, s.id, " \xB7 ", s.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, s.crew, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, s.lead)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: s.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "11px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: s.next === "hold" ? "var(--red-700)" : s.next === "now" ? "var(--amber-700)" : "var(--text-body)"
    }
  }, s.next)))))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    pad: "sm"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      padding: "var(--space-3) var(--space-3) var(--space-4)",
      fontSize: "var(--text-md)"
    }
  }, "Compliance feed"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, feed.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      padding: "11px 12px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: f.color,
      flex: "none",
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)",
      fontWeight: 500
    }
  }, f.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      color: "var(--text-muted)"
    }
  }, f.site)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--text-subtle)"
    }
  }, f.time)))))));
}
Object.assign(__ds_scope, { sites, Overview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Sidebar.jsx
try { (() => {
const nav = [{
  id: "overview",
  label: "Live operations",
  icon: "Activity"
}, {
  id: "sites",
  label: "Sites",
  icon: "MapPin"
}, {
  id: "inspections",
  label: "Inspections",
  icon: "ClipboardCheck"
}, {
  id: "incidents",
  label: "Incidents",
  icon: "AlertTriangle"
}, {
  id: "reports",
  label: "Reports",
  icon: "FileBarChart"
}, {
  id: "crews",
  label: "Crews",
  icon: "Users"
}];
function Sidebar({
  active = "overview",
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "248px",
      flex: "none",
      background: "var(--neutral-950)",
      color: "var(--neutral-300)",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "var(--space-5) var(--space-5)",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/stm-mark.png",
    alt: "",
    style: {
      height: "32px",
      width: "32px",
      objectFit: "contain",
      background: "var(--white)",
      borderRadius: "var(--radius-sm)",
      padding: "2px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-base)",
      color: "var(--white)"
    }
  }, "STM Console"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      color: "var(--orange-400)",
      letterSpacing: "0.08em"
    }
  }, "GOVERNED BY SAFETY"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "var(--space-4) var(--space-3)",
      display: "grid",
      gap: "2px"
    }
  }, nav.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate && onNavigate(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        textAlign: "left",
        border: 0,
        cursor: "pointer",
        borderRadius: "var(--radius-md)",
        padding: "10px 12px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: on ? 700 : 500,
        background: on ? "rgba(244,141,38,0.14)" : "transparent",
        color: on ? "var(--orange-400)" : "var(--neutral-300)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: n.icon,
      size: 18,
      strokeWidth: on ? 2.4 : 2
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "var(--space-4)",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "34px",
      borderRadius: "var(--radius-pill)",
      background: "var(--gradient-hivis)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "13px",
      color: "var(--neutral-950)",
      flex: "none"
    }
  }, "JL"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--white)",
      fontSize: "var(--text-sm)",
      fontWeight: 600
    }
  }, "J. Lee"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--neutral-500)",
      fontSize: "11px"
    }
  }, "Safety supervisor")))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/SiteDrawer.jsx
try { (() => {
const checklist = [{
  label: "TMP implemented to plan",
  status: "pass"
}, {
  label: "Signage spacing (AS 1742)",
  status: "pass"
}, {
  label: "PPE & hi-vis compliance",
  status: "pass"
}, {
  label: "SWMS on site & signed",
  status: "pass"
}, {
  label: "Speed zone signage",
  status: "warn"
}];
function SiteDrawer({
  site,
  onClose
}) {
  const open = !!site;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(28,28,27,0.45)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-standard)",
      zIndex: 80
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      height: "100%",
      width: "440px",
      maxWidth: "92vw",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-xl)",
      zIndex: 81,
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform var(--dur-slow) var(--ease-out)",
      display: "flex",
      flexDirection: "column"
    }
  }, site && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5) var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "stm-kicker"
  }, site.type), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-lg)",
      margin: "4px 0 6px"
    }
  }, site.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, site.id)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 0,
      background: "var(--neutral-100)",
      borderRadius: "var(--radius-md)",
      width: "34px",
      height: "34px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-body)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginTop: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: site.status
  }), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "blue",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Users",
      size: 12
    })
  }, "Crew ", site.crew), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    mono: true,
    variant: "outline"
  }, "Next ", site.next))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "120px",
      borderRadius: "var(--radius-md)",
      background: "var(--gradient-blue)",
      position: "relative",
      overflow: "hidden",
      marginBottom: "var(--space-6)",
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      color: "var(--white)",
      fontSize: "11px",
      fontFamily: "var(--font-mono)",
      background: "rgba(0,0,0,0.25)",
      padding: "4px 8px",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "MapPin",
    size: 12
  }), " \u221227.4698, 153.0251")), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--text-2xs)",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--text-subtle)",
      margin: "0 0 var(--space-3)"
    }
  }, "Inspection checklist"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "0 0 var(--space-6)",
      padding: 0,
      display: "grid",
      gap: "8px"
    }
  }, checklist.map(c => /*#__PURE__*/React.createElement("li", {
    key: c.label,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      padding: "10px 12px",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: c.status === "pass" ? "var(--green-700)" : "var(--amber-700)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.status === "pass" ? "CircleCheck" : "CircleAlert",
    size: 18
  }))))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--text-2xs)",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--text-subtle)",
      margin: "0 0 var(--space-3)"
    }
  }, "Last report"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--text-muted)",
      lineHeight: 1.7,
      background: "var(--neutral-50)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)"
    }
  }, "INSP-2026-04817", /*#__PURE__*/React.createElement("br", null), "2026-06-10 05:41 AEST", /*#__PURE__*/React.createElement("br", null), "Inspector ", site.lead, " \xB7 ", site.crew, /*#__PURE__*/React.createElement("br", null), "Result: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-700)",
      fontWeight: 600
    }
  }, "PASS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-6)",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "md",
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "FileText",
      size: 16
    })
  }, "End-of-shift report"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "md",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Navigation",
      size: 16
    })
  }, "Directions")))));
}
Object.assign(__ds_scope, { SiteDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/SiteDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Topbar.jsx
try { (() => {
const TITLES = {
  overview: "Live operations",
  sites: "Sites",
  inspections: "Inspections",
  incidents: "Incidents",
  reports: "Reports",
  crews: "Crews"
};
function Topbar({
  active = "overview",
  onLogout
}) {
  const [clock, setClock] = React.useState("05:42:18");
  React.useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setClock(d.toTimeString().slice(0, 8));
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-h)",
      flex: "none",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      lineHeight: 1.1
    }
  }, TITLES[active] || "Live operations"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, "Region QLD-SE \xB7 ", clock, " AEST")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "260px",
      maxWidth: "32vw"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-subtle)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search sites, TMPs, crews\u2026",
    style: {
      width: "100%",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "9px 12px 9px 36px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      background: "var(--neutral-50)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    title: "Notifications",
    style: {
      position: "relative",
      border: "1px solid var(--border-default)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      width: "40px",
      height: "40px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Bell",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "8px",
      right: "9px",
      width: "7px",
      height: "7px",
      borderRadius: "var(--radius-pill)",
      background: "var(--red-500)"
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "danger",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "TriangleAlert",
      size: 16
    })
  }, "Report incident"), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    title: "Sign out",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "inline-flex",
      padding: "8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "LogOut",
    size: 18
  })));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleApp.jsx
try { (() => {
function Placeholder({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-subtle)",
      textAlign: "center",
      minHeight: "320px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginBottom: "var(--space-3)",
      color: "var(--neutral-400)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Construction",
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, "This view is part of the console kit's structure."));
}
function ConsoleApp() {
  const [authed, setAuthed] = React.useState(false);
  const [active, setActive] = React.useState("overview");
  const [site, setSite] = React.useState(null);
  if (!authed) return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LoginScreen, {
    onLogin: () => setAuthed(true)
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Sidebar, {
    active: active,
    onNavigate: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Topbar, {
    active: active,
    onLogout: () => setAuthed(false)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, active === "overview" ? /*#__PURE__*/React.createElement(__ds_scope.Overview, {
    onOpenSite: setSite
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    label: {
      sites: "Sites register",
      inspections: "Inspection log",
      incidents: "Incident register",
      reports: "Reports & exports",
      crews: "Crew roster"
    }[active]
  }))), /*#__PURE__*/React.createElement(__ds_scope.SiteDrawer, {
    site: site,
    onClose: () => setSite(null)
  }));
}
Object.assign(__ds_scope, { ConsoleApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ComplianceSection.jsx
try { (() => {
const checks = ["Real-time reporting & compliance visibility", "GPS-verified inspections", "Digital reporting & audit trails", "Corrective-action tracking", "SWMS & risk assessments", "End-of-shift client reporting"];
function ComplianceSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "compliance",
    style: {
      background: "var(--gradient-asphalt)",
      color: "var(--text-on-dark)",
      padding: "var(--space-24) var(--space-6)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/stm-mark.png",
    alt: "",
    style: {
      position: "absolute",
      left: "-80px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "420px",
      opacity: 0.05,
      filter: "grayscale(1) brightness(3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    },
    className: "stm-comp-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    color: "onDark"
  }, "The operational difference"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--white)",
      fontSize: "var(--text-2xl)",
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }, "Compliance you can trace \u2014 shift by shift"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--neutral-300)",
      fontSize: "var(--text-md)",
      maxWidth: "46ch",
      margin: "0 0 var(--space-8)",
      lineHeight: 1.55
    }
  }, "Every inspection is GPS-verified and time-stamped. Every correction is tracked to closure. Every shift ends with a report in your inbox \u2014 audit-ready by default."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: "100%",
    label: "Audit-ready records",
    color: "onDark",
    onDark: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: "$20M",
    label: "Public Liability",
    color: "onDark",
    onDark: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: "24/7",
    label: "Reactive response",
    color: "onDark",
    onDark: true
  }))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, checks.map(c => /*#__PURE__*/React.createElement("li", {
    key: c,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4) var(--space-5)",
      color: "var(--neutral-100)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--orange-400)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CheckCircle2",
    size: 20
  })), c)))));
}
Object.assign(__ds_scope, { ComplianceSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ComplianceSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
const reasons = ["Owned & operated by experienced safety professionals", "Safety professionals overseeing operations end to end", "Real-time compliance monitoring & visibility", "Reliable crews backed by structured safety systems"];
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--surface-page)",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    },
    className: "stm-contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    color: "orange"
  }, "Request a crew"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }, "Tell us about your site"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-md)",
      margin: "0 0 var(--space-8)",
      lineHeight: 1.55
    }
  }, "Send the project details and a supervisor will respond within one business day with availability and a compliant approach."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "var(--space-3)"
    }
  }, reasons.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      color: "var(--text-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-700)",
      display: "inline-flex",
      flex: "none",
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Check",
    size: 18
  })), r)))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    pad: "lg",
    accent: "orange",
    accentSide: "top"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-10) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--green-700)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "CheckCircle2",
    size: 48
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      margin: "0 0 var(--space-2)"
    }
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: "0 0 var(--space-6)"
    }
  }, "A supervisor will be in touch within one business day."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Contact name",
    required: true,
    placeholder: "Jordan Lee"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Organisation",
    placeholder: "Council / builder / utility"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email",
    type: "email",
    required: true,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Mail",
      size: 18
    }),
    placeholder: "name@org.qld.gov.au"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Phone",
    type: "tel",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Phone",
      size: 18
    }),
    placeholder: "07 \u2026"
  })), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Site / project",
    required: true,
    placeholder: "e.g. Bruce Hwy upgrade \u2014 Stage 2"
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Scope of works",
    multiline: true,
    rows: 3,
    placeholder: "Lane closures, night works, duration\u2026"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Send",
      size: 18
    })
  }, "Submit request")))));
}
Object.assign(__ds_scope, { ContactSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const cols = [{
  h: "Services",
  items: ["Traffic control", "TMP implementation", "Lane closures", "Night works", "Emergency response"]
}, {
  h: "Company",
  items: ["About STM", "Compliance", "Safety systems", "Careers", "Contact"]
}, {
  h: "Industries",
  items: ["Government & councils", "Civil & construction", "Infrastructure", "Utilities", "Events"]
}];
const standards = ["MUTCD QLD", "TMR Code of Practice", "AS 1742", "Austroads", "WHS Act (Qld)"];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--neutral-950)",
      color: "var(--neutral-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    },
    className: "stm-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/stm-logo-horizontal-tagline.png",
    alt: "Safe Traffic Management",
    style: {
      height: "44px",
      marginBottom: "var(--space-4)",
      background: "var(--white)",
      padding: "8px 12px",
      borderRadius: "var(--radius-md)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.55,
      maxWidth: "34ch",
      margin: 0,
      color: "var(--neutral-400)"
    }
  }, "Safety-governed traffic management across Queensland \u2014 qualified personnel, structured systems, operational accountability.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--neutral-500)",
      fontWeight: 700,
      margin: "0 0 var(--space-4)"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: "10px"
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--neutral-300)",
      fontSize: "var(--text-sm)",
      textDecoration: "none"
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      alignItems: "center",
      margin: "var(--space-12) 0 var(--space-8)",
      paddingTop: "var(--space-8)",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--neutral-500)",
      fontWeight: 700,
      marginRight: "var(--space-2)"
    }
  }, "Compliant with"), standards.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--neutral-300)",
      background: "rgba(255,255,255,0.06)",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      fontSize: "var(--text-xs)",
      color: "var(--neutral-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Safe Traffic Management Pty Ltd \xB7 Governed By Safety"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--neutral-400)"
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--neutral-400)"
    }
  }, "WHS policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--neutral-400)"
    }
  }, "Terms")))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const proof = [{
  icon: "ShieldCheck",
  label: "$20M Public Liability"
}, {
  icon: "FileCheck2",
  label: "TMR Code of Practice"
}, {
  icon: "Clock",
  label: "24/7 response"
}];
function Hero({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-16)",
      alignItems: "center"
    },
    className: "stm-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    color: "orange"
  }, "Safety-governed traffic management \xB7 QLD"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      fontStretch: "108%",
      lineHeight: 1.02,
      margin: "var(--space-4) 0 var(--space-5)"
    }
  }, "Governed by safety.", /*#__PURE__*/React.createElement("br", null), "Proven by compliance."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-muted)",
      maxWidth: "52ch",
      margin: "0 0 var(--space-8)",
      lineHeight: 1.55
    }
  }, "Qualified traffic crews, structured WHS systems and real-time compliance visibility \u2014 reducing risk and keeping government, infrastructure and construction projects moving."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "HardHat",
      size: 20
    }),
    onClick: onRequest
  }, "Request a crew"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Capability statement")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      flexWrap: "wrap",
      marginTop: "var(--space-10)"
    }
  }, proof.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "var(--text-body)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-600)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: p.icon,
    size: 18
  })), p.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3.4",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--gradient-asphalt)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/stm-mark.png",
    alt: "",
    style: {
      position: "absolute",
      right: "-40px",
      bottom: "-30px",
      width: "62%",
      opacity: 0.12,
      filter: "grayscale(1) brightness(3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      alignSelf: "flex-start",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "rgba(255,255,255,0.12)",
      color: "var(--white)",
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      marginBottom: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Camera",
    size: 14
  }), " On-site photography"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stm-kicker"
  }, "Live site \xB7 M1 northbound"), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "orange",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Radio",
      size: 12
    })
  }, "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      color: "var(--green-700)"
    }
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "Inspections passed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-2xl)",
      color: "var(--blue-600)"
    }
  }, "6"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "Crews on shift")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      alignSelf: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-subtle)",
      textAlign: "right"
    }
  }, "GPS \u221227.46, 153.02", /*#__PURE__*/React.createElement("br", null), "2026-06-10 05:42")))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IndustriesSection.jsx
try { (() => {
const industries = [{
  icon: "Landmark",
  label: "Government & councils"
}, {
  icon: "Building2",
  label: "Civil & construction"
}, {
  icon: "Construction",
  label: "Infrastructure"
}, {
  icon: "Zap",
  label: "Utilities"
}, {
  icon: "Wrench",
  label: "Maintenance works"
}, {
  icon: "CalendarDays",
  label: "Events & private"
}];
function IndustriesSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "industries",
    style: {
      background: "var(--surface-sunken)",
      padding: "var(--space-20) var(--space-6)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    color: "blue"
  }, "Industries we support"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      margin: "var(--space-3) 0 0"
    }
  }, "Trusted across Queensland's most regulated work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "var(--space-4)"
    },
    className: "stm-ind-grid"
  }, industries.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5) var(--space-3)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--blue-600)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 26,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)",
      lineHeight: 1.3
    }
  }, it.label))))));
}
Object.assign(__ds_scope, { IndustriesSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IndustriesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
const services = [{
  icon: "TrafficCone",
  title: "Traffic control personnel",
  desc: "RIISS-ticketed controllers and implementers — site-ready, ticketed and verified."
}, {
  icon: "Route",
  title: "TMP implementation",
  desc: "Compliant set-up, operation and removal of Traffic Management Plans."
}, {
  icon: "SplitSquareVertical",
  title: "Lane & shoulder closures",
  desc: "Maintaining safe, efficient access on live carriageways."
}, {
  icon: "Footprints",
  title: "Pedestrian & cyclist management",
  desc: "Protected movement around active works and detours."
}, {
  icon: "Moon",
  title: "Night & after-hours works",
  desc: "Lit, supervised night-works coverage when the road is quietest."
}, {
  icon: "Siren",
  title: "Emergency & reactive response",
  desc: "Crews and supervisors mobilised 24/7 when it matters."
}];
function ServicesSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--surface-page)",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "60ch",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    color: "orange"
  }, "Traffic Management Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }, "Everything a compliant worksite needs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Safety-led operations across government, infrastructure, civil, maintenance and construction works.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    },
    className: "stm-svc-grid"
  }, services.map(s => /*#__PURE__*/React.createElement(__ds_scope.ServiceCard, {
    key: s.title,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon,
      size: 24
    }),
    title: s.title,
    description: s.desc
  })))));
}
Object.assign(__ds_scope, { ServicesSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function HomePage() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logoSrc: "../../assets/logos/stm-logo-horizontal.png",
    links: [{
      label: "Services",
      href: "#services"
    }, {
      label: "Compliance",
      href: "#compliance"
    }, {
      label: "Industries",
      href: "#industries"
    }, {
      label: "Contact",
      href: "#contact"
    }],
    activeHref: "#services",
    secondaryCta: {
      label: "Capability statement",
      href: "#"
    },
    cta: {
      label: "Request a crew",
      href: "#contact"
    },
    sticky: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Hero, {
    onRequest: () => scrollTo("contact")
  }), /*#__PURE__*/React.createElement(__ds_scope.ServicesSection, null), /*#__PURE__*/React.createElement(__ds_scope.ComplianceSection, null), /*#__PURE__*/React.createElement(__ds_scope.IndustriesSection, null), /*#__PURE__*/React.createElement(__ds_scope.ContactSection, null), /*#__PURE__*/React.createElement(__ds_scope.Footer, null));
}
Object.assign(__ds_scope, { HomePage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ConsoleApp = __ds_scope.ConsoleApp;

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.Overview = __ds_scope.Overview;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.SiteDrawer = __ds_scope.SiteDrawer;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.ComplianceSection = __ds_scope.ComplianceSection;

__ds_ns.ContactSection = __ds_scope.ContactSection;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.HomePage = __ds_scope.HomePage;

__ds_ns.IndustriesSection = __ds_scope.IndustriesSection;

__ds_ns.ServicesSection = __ds_scope.ServicesSection;

})();
