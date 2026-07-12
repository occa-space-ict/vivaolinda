/* @ds-bundle: {"format":3,"namespace":"SistemaOlindaDesignSystem_7da6e4","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Numeral","sourcePath":"components/content/Numeral.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ImageCard","sourcePath":"components/surfaces/ImageCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"f1642cd6747b","components/buttons/IconButton.jsx":"017909528865","components/content/Divider.jsx":"dc2baf4acab5","components/content/Numeral.jsx":"20e4d739e596","components/content/SectionHeader.jsx":"c700f60f2e61","components/disclosure/Accordion.jsx":"ff772591c01e","components/labels/Badge.jsx":"bdeeda8ecad2","components/labels/Eyebrow.jsx":"03527a708932","components/surfaces/Card.jsx":"55e26191d68d","components/surfaces/ImageCard.jsx":"a5d916db93f7","ui_kits/conselho/AcervoScreens.jsx":"ea9800cf1615","ui_kits/conselho/CPChrome.jsx":"afb7cb536a93","ui_kits/conselho/Verbete.jsx":"47a525a2b418","ui_kits/viva-olinda/HomeScreens.jsx":"f94503c255cb","ui_kits/viva-olinda/RoteiroDetail.jsx":"e6a1915e6d44","ui_kits/viva-olinda/VOChrome.jsx":"37237fd2db96"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SistemaOlindaDesignSystem_7da6e4 = window.SistemaOlindaDesignSystem_7da6e4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Sistema Olinda's primary action control.
 * Pill-shaped, uppercase EB Garamond caps. Primary fills with the active
 * accent; secondary is an outline; text is an italic Cormorant link.
 */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon = true,
  iconGlyph = '\u2192',
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const pad = size === 'sm' ? '10px 22px' : size === 'lg' ? '17px 38px' : '14px 30px';
  const fontSize = size === 'sm' ? '13px' : size === 'lg' ? '16px' : '15px';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    fontFamily: "var(--font-body, 'EB Garamond', serif)",
    fontSize,
    letterSpacing: 'var(--tracking-ui, 0.12em)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill, 999px)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-base,.25s) var(--ease-paper,ease), box-shadow var(--dur-base,.25s) var(--ease-paper,ease), background var(--dur-base,.25s) ease',
    padding: pad,
    border: '1px solid',
    lineHeight: 1.1
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent, #f3ecda)',
      borderColor: 'var(--accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'var(--border-strong, rgba(120,96,48,0.4))'
    },
    text: {
      background: 'transparent',
      color: 'var(--accent)',
      border: 'none',
      borderRadius: 0,
      padding: '4px 0',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      fontStyle: 'italic',
      fontSize: size === 'lg' ? '20px' : '18px',
      borderBottom: '1px solid transparent'
    }
  };
  const merged = {
    ...base,
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'var(--lift, translateY(-2px))';
      e.currentTarget.style.boxShadow = 'var(--shadow-md, 0 10px 24px rgba(120,96,48,0.28))';
    } else if (variant === 'secondary') {
      e.currentTarget.style.background = 'rgba(120,96,48,0.10)';
      e.currentTarget.style.transform = 'var(--lift, translateY(-2px))';
    } else {
      e.currentTarget.style.borderBottomColor = 'var(--accent)';
    }
  };
  const onLeave = e => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'none';
    if (variant === 'secondary') e.currentTarget.style.background = 'transparent';
    if (variant === 'text') e.currentTarget.style.borderBottomColor = 'transparent';
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, icon && variant !== 'text' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.13em',
      lineHeight: 1
    }
  }, iconGlyph), icon && variant === 'text' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.95em'
    }
  }, " ", iconGlyph));
  const Tag = href && !disabled ? 'a' : 'button';
  const tagProps = Tag === 'a' ? {
    href
  } : {
    disabled,
    type: 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: merged,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, tagProps, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — round, hairline-bordered control for single glyphs (carousel
 * arrows, close, chevrons). 38px by default; inherits the active accent.
 */
function IconButton({
  glyph = '\u2039',
  label,
  size = 38,
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: '1px solid var(--border-strong, rgba(120,96,48,0.4))',
    background: 'rgba(240,233,217,0.82)',
    color: 'var(--accent)',
    fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
    fontSize: Math.round(size * 0.63) + 'px',
    lineHeight: 1,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background var(--dur-fast,.2s) ease, transform var(--dur-fast,.2s) ease',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      e.currentTarget.style.background = '#f4eede';
      e.currentTarget.style.transform = 'scale(1.07)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(240,233,217,0.82)';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), glyph);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — ornamental section rule. `diamond` = filete with a centered ◆;
 * `dots` = dot–line–dot; `stars` = spaced ✦ ✦ ✦.
 */
function Divider({
  variant = 'diamond',
  glyph = '\u25C6',
  style = {},
  ...rest
}) {
  const wrap = {
    maxWidth: '560px',
    margin: '0 auto',
    ...style
  };
  if (variant === 'stars') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        textAlign: 'center',
        fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
        fontSize: '22px',
        letterSpacing: '0.5em',
        color: 'var(--accent)',
        paddingLeft: '0.5em',
        ...wrap
      }
    }, rest), '\u2726 \u2726 \u2726');
  }
  if (variant === 'dots') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        ...wrap
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 1 220px',
        height: '1px',
        background: 'rgba(120,96,48,0.4)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--accent)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '18px',
      ...wrap
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(120,96,48,0.5))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      color: 'var(--accent)',
      fontSize: '18px'
    }
  }, glyph), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, rgba(120,96,48,0.5), transparent)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Numeral.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numeral — a large Cormorant figure for dates and milestones (e.g. "1630").
 * Accent-colored by default; pass tone="ink" for a dark display number.
 */
function Numeral({
  children,
  tone = 'accent',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      fontWeight: 500,
      fontSize: 'var(--type-numeral, clamp(46px,7vw,84px))',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display, 0.04em)',
      color: tone === 'ink' ? 'var(--text-display, #241d12)' : 'var(--accent)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Numeral });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Numeral.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion — the "lista de legendas" disclosure: each row has a round
 * Cormorant key badge, a bilingual label, and an expanding description.
 * Single-open. `items: [{ key, label, sub, body }]`.
 */
function Accordion({
  items = [],
  defaultOpen = null,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), items.map(it => {
    const on = open === it.key;
    return /*#__PURE__*/React.createElement("div", {
      key: it.key,
      style: {
        borderBottom: '1px solid rgba(120,96,48,0.16)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setOpen(on ? null : it.key),
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.transform = 'translateX(3px)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.transform = 'none';
      },
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '14px',
        padding: '9px 12px 9px 10px',
        borderLeft: '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
        borderRadius: '3px',
        cursor: 'pointer',
        background: on ? 'rgba(120,96,48,0.16)' : 'transparent',
        transform: on ? 'translateX(3px)' : 'none',
        transition: 'background var(--dur-base,.25s) ease, border-color var(--dur-base,.25s) ease, transform var(--dur-fast,.2s) ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: 1.1,
        width: '1.5em',
        height: '1.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        borderRadius: '50%',
        transition: 'background .25s ease, color .25s ease, border-color .25s ease',
        background: on ? 'var(--accent)' : 'transparent',
        color: on ? 'var(--text-on-accent, #f3ecda)' : 'var(--accent)',
        borderColor: on ? 'var(--accent)' : 'var(--border-strong, rgba(120,96,48,0.4))'
      }
    }, it.key), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '15.5px',
        lineHeight: 1.4,
        color: 'var(--ink-1, #3f3422)'
      }
    }, it.label, it.sub && /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: 'var(--ink-faint, #857150)',
        fontSize: '13.5px'
      }
    }, " ", '\u2014', " ", it.sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        marginLeft: 'auto',
        alignSelf: 'center',
        color: 'var(--accent)',
        fontSize: '12px',
        transition: 'transform .3s ease',
        transform: on ? 'rotate(180deg)' : 'rotate(0deg)'
      }
    }, '\u2304')), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        fontSize: '14px',
        lineHeight: 1.55,
        color: 'var(--ink-3, #5b4c30)',
        transition: 'max-height .45s var(--ease-paper,ease), opacity .35s ease, padding .35s ease',
        maxHeight: on ? '240px' : '0',
        opacity: on ? 1 : 0,
        padding: on ? '2px 14px 14px 46px' : '0 14px 0 46px'
      }
    }, it.body));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small pill. `solid` fills with the accent (destaque); `outline`
 * is a hairline capsule label (etiqueta); `quiet` is a soft counter chip.
 */
function Badge({
  variant = 'outline',
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: 'var(--radius-pill, 999px)',
    lineHeight: 1.1
  };
  const variants = {
    solid: {
      fontFamily: "var(--font-body, 'EB Garamond', serif)",
      fontSize: '11px',
      letterSpacing: 'var(--tracking-meta, 0.2em)',
      textTransform: 'uppercase',
      color: 'var(--text-on-accent, #f3ecda)',
      background: 'var(--accent)',
      padding: '6px 14px'
    },
    outline: {
      fontFamily: "var(--font-body, 'EB Garamond', serif)",
      fontSize: '10.5px',
      letterSpacing: 'var(--tracking-label, 0.28em)',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--ink-3, #5a4824)',
      background: 'rgba(231,221,196,0.9)',
      border: '1px solid var(--border-default, rgba(120,96,48,0.3))',
      padding: '7px 16px'
    },
    quiet: {
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      fontSize: '15px',
      color: 'var(--ink-4, #6a5836)',
      background: 'rgba(231,221,196,0.78)',
      padding: '4px 14px'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow ("olho-d'água") — the wide-tracked uppercase label that opens
 * sections and tops headers. Accent-colored by default.
 */
function Eyebrow({
  children,
  tone = 'accent',
  align,
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-body, 'EB Garamond', serif)",
    fontSize: 'var(--type-caption, 13px)',
    letterSpacing: 'var(--tracking-eyebrow, 0.36em)',
    textTransform: 'uppercase',
    color: tone === 'muted' ? 'var(--text-meta, #7a6743)' : 'var(--accent)',
    paddingLeft: '0.36em',
    textAlign: align,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — the house opening block: eyebrow → Cormorant title →
 * accent filete (rule) → short lead. Centered or left-aligned.
 */
function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  rule = true,
  style = {},
  ...rest
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: align
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      fontWeight: 500,
      fontSize: 'var(--type-h2, clamp(30px,4.4vw,54px))',
      lineHeight: 'var(--leading-tight, 1.08)',
      margin: 0,
      color: 'var(--text-title, #2b2418)'
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '90px',
      height: '1px',
      background: 'var(--accent)',
      margin: center ? '22px auto' : '22px 0'
    }
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body, 'EB Garamond', serif)",
      fontSize: 'var(--type-body-lg, clamp(16px,1.7vw,19px))',
      lineHeight: 'var(--leading-relaxed, 1.7)',
      margin: center ? '0 auto' : 0,
      maxWidth: 'var(--measure-text, 640px)',
      color: 'var(--text-body, #4a3e29)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the translucent paper panel: soft cream fill, hairline border, gentle
 * radius. The workhorse container for content blocks and feature tiles.
 */
function Card({
  as = 'div',
  padding = '34px 32px',
  hover = false,
  children,
  style = {},
  ...rest
}) {
  const Tag = as;
  const base = {
    padding,
    background: 'var(--surface-card, rgba(243,236,218,0.6))',
    border: '1px solid var(--border-hairline, rgba(120,96,48,0.18))',
    borderRadius: 'var(--radius-lg, 6px)',
    transition: 'transform var(--dur-base,.25s) var(--ease-paper,ease), box-shadow var(--dur-base,.25s) var(--ease-paper,ease)',
    ...style
  };
  const handlers = hover ? {
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg, 0 12px 28px rgba(90,72,36,0.18))';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'none';
    }
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ImageCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ImageCard — a figure whose image prints onto the page (multiply + sepia)
 * with an italic Cormorant caption beneath. The house way to show imagery.
 */
function ImageCard({
  src,
  alt = '',
  caption,
  ratio = '3/2',
  contain = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-md, 4px)',
      aspectRatio: ratio,
      background: 'rgba(231,221,196,0.55)',
      boxShadow: 'var(--shadow-inset-hairline, inset 0 0 0 1px rgba(120,96,48,0.18))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: contain ? 'auto' : '100%',
      height: contain ? 'auto' : '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: contain ? 'contain' : 'cover',
      mixBlendMode: 'var(--img-blend, multiply)',
      filter: 'var(--img-filter, sepia(0.14) contrast(1.04))'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--ink-faint, #857150)',
      letterSpacing: '0.04em'
    }
  }, "gravura")), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--ink-4, #6a5836)',
      marginTop: '12px',
      lineHeight: 1.4
    }
  }, caption));
}
Object.assign(__ds_scope, { ImageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ImageCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conselho/AcervoScreens.jsx
try { (() => {
/* Conselho de Preservação — Acervo (register) + Verbete (monument entry). */
const {
  Eyebrow,
  SectionHeader,
  Divider,
  ImageCard,
  Card,
  Badge,
  Numeral,
  Accordion,
  Button
} = window.SistemaOlindaDesignSystem_7da6e4;
const CP_MONUMENTOS = [{
  id: 'franciscano',
  nome: 'Convento de São Francisco',
  lat: 'Coenobium Franciscanorum',
  ano: '1585',
  tomb: 'IPHAN · 1938',
  desc: 'Tido como o conjunto franciscano mais antigo do Brasil, reúne igreja, claustro e capela com azulejaria portuguesa setecentista.'
}, {
  id: 'se',
  nome: 'Basílica e Sé de Olinda',
  lat: 'Basilica',
  ano: '1537',
  tomb: 'IPHAN · 1938',
  desc: 'Igreja-matriz e sede do bispado de Pernambuco, reconstruída após o incêndio de 1631. Domina o Alto da Sé.'
}, {
  id: 'jesuita',
  nome: 'Antigo Colégio dos Jesuítas',
  lat: 'Iesuitarum Coenobium',
  ano: '1582',
  tomb: 'IPHAN · 1941',
  desc: 'Um dos primeiros centros de ensino da colônia; hoje seminário, mantém a fachada e parte do claustro originais.'
}, {
  id: 'carmo',
  nome: 'Igreja do Carmo',
  lat: 'Ecclesia Carmelitarum',
  ano: '1580',
  tomb: 'IPHAN · 1938',
  desc: 'A mais antiga igreja carmelita das Américas, restaurada ao longo do século XX.'
}];
function CPHome({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: 'clamp(60px,9vh,110px) clamp(24px,6vw,90px) clamp(30px,5vh,50px)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Patrim\xF4nio Mundial \xB7 desde 1982"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(40px,7vw,86px)',
      lineHeight: 1.0,
      margin: '20px 0 24px',
      color: 'var(--ink)',
      maxWidth: '14ch'
    }
  }, "O invent\xE1rio vivo do S\xEDtio Hist\xF3rico"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(16px,1.7vw,19px)',
      lineHeight: 1.78,
      color: 'var(--ink-2)',
      maxWidth: '620px',
      margin: 0
    }
  }, "O Conselho mant\xE9m o registro documental dos monumentos tombados da cidade alta \u2014 verbetes, plantas e as gravuras holandesas do s\xE9culo XVII que fixaram cada marco."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '30px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('acervo')
  }, "Consultar o acervo"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => go('sobre')
  }, "sobre o Conselho"))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'clamp(30px,5vh,50px) auto clamp(50px,7vh,80px)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0 clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(24px,3vw,44px)'
    }
  }, [['68', 'monumentos tombados'], ['1535', 'fundação da vila'], ['1982', 'inscrição na UNESCO']].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(Numeral, null, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      letterSpacing: '0.04em',
      color: 'var(--ink-3)',
      marginTop: '6px'
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: 'clamp(50px,7vh,90px) clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Acervo \xB7 destaques",
    title: "Monumentos em registro"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, CP_MONUMENTOS.slice(0, 3).map((m, i) => /*#__PURE__*/React.createElement(CPRow, {
    key: m.id,
    m: m,
    i: i,
    go: go
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: false,
    onClick: () => go('acervo')
  }, "Ver acervo completo"))));
}
function CPRow({
  m,
  i,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go('verbete:' + m.id),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '24px',
      alignItems: 'baseline',
      padding: '22px 6px',
      borderTop: '1px solid var(--border-hairline)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '23px',
      margin: 0,
      color: 'var(--ink-1)'
    }
  }, m.nome), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--ink-faint)'
    }
  }, m.lat)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '8px 0 0',
      maxWidth: '640px'
    }
  }, m.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Numeral, {
    tone: "ink",
    style: {
      fontSize: '34px'
    }
  }, m.ano), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, m.tomb)));
}
function CPAcervo({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: 'clamp(50px,7vh,80px) clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Acervo \xB7 tombamentos",
    title: "Registro de monumentos",
    lead: "Invent\xE1rio dos bens tombados no S\xEDtio Hist\xF3rico de Olinda, por data de edifica\xE7\xE3o."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px'
    }
  }, CP_MONUMENTOS.map((m, i) => /*#__PURE__*/React.createElement(CPRow, {
    key: m.id,
    m: m,
    i: i,
    go: go
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  })));
}
Object.assign(window, {
  CPHome,
  CPAcervo,
  CP_MONUMENTOS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conselho/AcervoScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conselho/CPChrome.jsx
try { (() => {
/* Conselho de Preservação — institutional chrome (sober, cool accent). */
const {
  Eyebrow
} = window.SistemaOlindaDesignSystem_7da6e4;
function CPHeader({
  route,
  go
}) {
  const links = [['acervo', 'Acervo'], ['verbete', 'Verbete'], ['sobre', 'O Conselho']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      padding: '14px clamp(20px,4vw,48px)',
      background: 'var(--surface-nav)',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '19px',
      letterSpacing: '0.02em',
      color: 'var(--ink)'
    }
  }, "Conselho de Preserva\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '9.5px',
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      color: 'var(--ink-5)'
    }
  }, "S\xEDtio Hist\xF3rico de Olinda")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(14px,2.4vw,30px)',
      alignItems: 'center',
      fontSize: '12.5px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go(k),
    style: {
      color: route === k ? 'var(--accent)' : 'var(--ink-3)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))));
}
function CPFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'clamp(40px,6vh,60px) 24px clamp(46px,7vh,70px)',
      textAlign: 'center',
      borderTop: '1px solid var(--border-default)',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '19px',
      color: 'var(--ink)',
      marginBottom: '8px'
    }
  }, "Conselho de Preserva\xE7\xE3o do S\xEDtio Hist\xF3rico"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--ink-5)'
    }
  }, "Patrim\xF4nio Mundial \xB7 UNESCO 1982 \xB7 Olinda, Pernambuco"));
}
Object.assign(window, {
  CPHeader,
  CPFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conselho/CPChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/conselho/Verbete.jsx
try { (() => {
/* Conselho de Preservação — Verbete (monument entry, document layout). */
const {
  Eyebrow,
  ImageCard,
  Card,
  Badge,
  Divider,
  Accordion,
  Numeral
} = window.SistemaOlindaDesignSystem_7da6e4;
function CPVerbete({
  id,
  go
}) {
  const m = (window.CP_MONUMENTOS || []).find(x => x.id === id) || window.CP_MONUMENTOS[0];
  const ficha = [['Denominação latina', m.lat], ['Edificação', m.ano], ['Tombamento', m.tomb], ['Categoria', 'Bem imóvel · arquitetura religiosa'], ['Localização', 'Alto da Sé · 08°00′S 34°51′O']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: 'clamp(40px,6vh,70px) clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('acervo'),
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '17px',
      color: 'var(--accent)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, "\u2039 voltar ao acervo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Verbete \xB7 documento"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(38px,5.5vw,72px)',
      lineHeight: 1.0,
      margin: '14px 0 6px',
      color: 'var(--ink)'
    }
  }, m.nome), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(18px,2.2vw,24px)',
      color: 'var(--ink-faint)'
    }
  }, m.lat)), /*#__PURE__*/React.createElement(Divider, {
    variant: "dots",
    style: {
      margin: '36px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.5fr) minmax(260px,1fr)',
      gap: 'clamp(32px,4vw,56px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImageCard, {
    ratio: "3/2",
    caption: 'Vista seiscentista — ' + m.nome + ', detalhe da gravura holandesa'
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.78,
      color: 'var(--ink-2)',
      margin: '24px 0 0'
    }
  }, m.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.78,
      color: 'var(--ink-2)',
      margin: '16px 0 0'
    }
  }, "O conjunto sobreviveu ao inc\xEAndio de 1631, quando as tropas da Companhia das \xCDndias Ocidentais ocuparam a vila. As campanhas de restauro do s\xE9culo XX, conduzidas sob orienta\xE7\xE3o do Conselho, recuperaram a volumetria e a azulejaria originais."), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '22px',
      margin: '36px 0 14px',
      color: 'var(--ink-1)'
    }
  }, "Legenda da gravura"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: "A",
    items: [{
      key: 'A',
      label: 'Nave principal',
      sub: 'Navis',
      body: 'Planta em cruz latina, característica das ordens primeiras da colônia.'
    }, {
      key: 'B',
      label: 'Claustro',
      sub: 'Claustrum',
      body: 'Pátio interno com arcadas, em torno do qual se organizam as celas.'
    }, {
      key: 'C',
      label: 'Capela-mor',
      sub: 'Sacrarium',
      body: 'Talha dourada barroca, intervenção do século XVIII.'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    as: "aside",
    style: {
      position: 'sticky',
      top: '90px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ficha t\xE9cnica"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, ficha.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10.5px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-5)',
      marginBottom: '4px'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      color: 'var(--ink-1)'
    }
  }, v)))))));
}
Object.assign(window, {
  CPVerbete
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/conselho/Verbete.jsx", error: String((e && e.message) || e) }); }

// ui_kits/viva-olinda/HomeScreens.jsx
try { (() => {
/* Viva Olinda — Home + Roteiros listing screens. */
const {
  Button,
  Eyebrow,
  SectionHeader,
  Divider,
  ImageCard,
  Card,
  Badge,
  Numeral
} = window.SistemaOlindaDesignSystem_7da6e4;
const VO_ROTEIROS = [{
  id: 'ladeiras',
  titulo: 'Ladeiras & conventos',
  dur: '3h',
  preco: 'R$ 90',
  cap: 'O Convento de São Francisco — o mais antigo do Brasil',
  txt: 'Subida pela cidade alta entre igrejas barrocas, miradouros e o casario colonial.'
}, {
  id: 'porto',
  titulo: 'Do alto ao porto',
  dur: '2h',
  preco: 'R$ 70',
  cap: 'Panorama do porto do Recife, séc. XVII',
  txt: 'Da Sé ao mar, seguindo a vista que os gravadores holandeses registraram em 1630.'
}, {
  id: 'carnaval',
  titulo: 'Olinda em fevereiro',
  dur: '4h',
  preco: 'R$ 120',
  cap: 'Os bonecos gigantes e a ladeira tomada',
  txt: 'O roteiro do frevo e dos bonecos, com a história das agremiações centenárias.'
}];
function VOHome({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 'clamp(70px,11vh,120px) clamp(24px,6vw,90px) clamp(50px,7vh,80px)',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center"
  }, "S\xEDtio Hist\xF3rico \xB7 Pernambuco"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(52px,10vw,120px)',
      lineHeight: 0.9,
      margin: '22px 0 0',
      letterSpacing: '0.04em',
      color: 'var(--ink)'
    }
  }, "Viva Olinda"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '90px',
      height: '1px',
      background: 'var(--accent)',
      margin: '26px auto 22px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(17px,2.2vw,25px)',
      maxWidth: '600px',
      margin: '0 auto 30px',
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, "Quatro s\xE9culos \xE0 beira do oceano. Caminhe pela cidade que os gravadores do s\xE9culo XVII deixaram em papel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('roteiros')
  }, "Ver roteiros"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: false,
    onClick: () => go('agenda')
  }, "Agenda do m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement(ImageCard, {
    ratio: "21/9",
    caption: "Villa d'Olinda de Pernambuco \u2014 panorama do porto, s\xE9c. XVII"
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'clamp(50px,7vh,80px) auto'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 clamp(24px,6vw,90px) clamp(40px,6vh,70px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "O que ver",
    title: "Tr\xEAs modos de subir a ladeira",
    lead: "Roteiros guiados que partem da S\xE9. Escolha o ritmo \u2014 da hist\xF3ria ao frevo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
      gap: '24px',
      marginTop: '40px'
    }
  }, VO_ROTEIROS.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.id,
    hover: true,
    padding: "0",
    style: {
      overflow: 'hidden',
      cursor: 'pointer'
    },
    onClick: () => go('roteiro:' + r.id)
  }, /*#__PURE__*/React.createElement(ImageCard, {
    caption: null,
    ratio: "3/2",
    style: {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '23px',
      margin: 0,
      color: 'var(--ink-1)'
    }
  }, r.titulo), /*#__PURE__*/React.createElement(Badge, {
    variant: "quiet"
  }, r.dur)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15.5px',
      lineHeight: 1.6,
      color: 'var(--ink-2)',
      margin: '0 0 16px'
    }
  }, r.txt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--accent)'
    }
  }, r.preco), /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "reservar"))))))));
}
function VORoteiros({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: 'clamp(50px,7vh,80px) clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Roteiros \xB7 2026",
    title: "Agenda de visitas guiadas",
    lead: "Sa\xEDdas di\xE1rias da Pra\xE7a da S\xE9. Reserve com 24h de anteced\xEAncia."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      marginTop: '34px'
    }
  }, VO_ROTEIROS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => go('roteiro:' + r.id),
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: '22px',
      alignItems: 'center',
      padding: '22px 8px',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: i === VO_ROTEIROS.length - 1 ? '1px solid var(--border-hairline)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Numeral, {
    tone: "ink",
    style: {
      fontSize: '40px'
    }
  }, '0' + (i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      margin: '0 0 4px',
      color: 'var(--ink-1)'
    }
  }, r.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--ink-3)',
      margin: 0
    }
  }, r.txt)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, r.dur), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--accent)'
    }
  }, r.preco))))));
}
Object.assign(window, {
  VOHome,
  VORoteiros,
  VO_ROTEIROS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/viva-olinda/HomeScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/viva-olinda/RoteiroDetail.jsx
try { (() => {
/* Viva Olinda — Roteiro detail + booking screen. */
const {
  Button,
  Eyebrow,
  ImageCard,
  Card,
  Badge,
  Divider,
  Accordion
} = window.SistemaOlindaDesignSystem_7da6e4;
function VORoteiroDetail({
  id,
  go
}) {
  const r = (window.VO_ROTEIROS || []).find(x => x.id === id) || window.VO_ROTEIROS[0];
  const [pessoas, setPessoas] = React.useState(2);
  const [confirmado, setConfirmado] = React.useState(false);
  const precoNum = parseInt(r.preco.replace(/\D/g, ''), 10);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: 'clamp(40px,6vh,70px) clamp(24px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('roteiros'),
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '17px',
      color: 'var(--accent)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, "\u2039 todos os roteiros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(280px,1fr)',
      gap: 'clamp(32px,4vw,56px)',
      marginTop: '24px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Roteiro guiado \xB7 ", r.dur), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(38px,5.5vw,68px)',
      lineHeight: 1.02,
      margin: '16px 0 22px',
      color: 'var(--ink)'
    }
  }, r.titulo), /*#__PURE__*/React.createElement(ImageCard, {
    ratio: "3/2",
    caption: r.cap
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.78,
      color: 'var(--ink-2)',
      margin: '24px 0 0',
      maxWidth: '600px'
    }
  }, r.txt, " O guia conduz o grupo a p\xE9, com paradas para fotografia e a leitura das gravuras seiscentistas que fixaram cada marco da vila."), /*#__PURE__*/React.createElement(Divider, {
    variant: "dots",
    style: {
      margin: '36px 0'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '22px',
      margin: '0 0 14px',
      color: 'var(--ink-1)'
    }
  }, "O percurso"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: "A",
    items: [{
      key: 'A',
      label: 'Praça da Sé',
      sub: 'ponto de encontro',
      body: 'Saída pontual da Catedral. Recomenda-se chegar 10 minutos antes.'
    }, {
      key: 'B',
      label: 'Convento de São Francisco',
      sub: 'Coenobium Franciscanorum',
      body: 'O mais antigo do Brasil, fundado em 1585, com seus azulejos portugueses.'
    }, {
      key: 'C',
      label: 'Alto da Sé',
      sub: 'miradouro',
      body: 'A vista sobre o porto do Recife e o Atlântico — o enquadramento das gravuras.'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      position: 'sticky',
      top: '90px'
    }
  }, confirmado ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      color: 'var(--accent)',
      lineHeight: 1
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      margin: '16px 0 8px',
      color: 'var(--ink-1)'
    }
  }, "Reserva confirmada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--ink-2)',
      margin: '0 0 18px'
    }
  }, pessoas, " ", pessoas > 1 ? 'pessoas' : 'pessoa', " \xB7 ", r.titulo, ". Envi\xE1mos os detalhes por e-mail."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: false,
    onClick: () => setConfirmado(false)
  }, "Nova reserva")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Reservar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      margin: '14px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '44px',
      color: 'var(--accent)',
      lineHeight: 1
    }
  }, r.preco), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--ink-4)'
    }
  }, "por pessoa")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-5)',
      marginBottom: '10px'
    }
  }, "Pessoas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPessoas(p => Math.max(1, p - 1)),
    style: stepBtn
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      color: 'var(--ink-1)',
      minWidth: '28px',
      textAlign: 'center'
    }
  }, pessoas), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPessoas(p => Math.min(12, p + 1)),
    style: stepBtn
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--ink-2)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      color: 'var(--ink-1)'
    }
  }, "R$ ", precoNum * pessoas)), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setConfirmado(true),
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "Confirmar reserva")))));
}
const stepBtn = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--border-strong)',
  background: 'transparent',
  color: 'var(--accent)',
  fontFamily: 'var(--font-display)',
  fontSize: '22px',
  lineHeight: 1,
  cursor: 'pointer'
};
Object.assign(window, {
  VORoteiroDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/viva-olinda/RoteiroDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/viva-olinda/VOChrome.jsx
try { (() => {
/* Viva Olinda — shared chrome: top nav + footer (tourism voice, warm accent). */
const {
  Button,
  Eyebrow
} = window.SistemaOlindaDesignSystem_7da6e4;
function VOHeader({
  route,
  go
}) {
  const links = [['roteiros', 'Roteiros'], ['agenda', 'Agenda'], ['mapa', 'Mapa']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      padding: '14px clamp(20px,4vw,48px)',
      background: 'var(--surface-nav)',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '21px',
      letterSpacing: '0.04em',
      color: 'var(--ink)'
    }
  }, "Viva Olinda"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Turismo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(14px,2.4vw,32px)',
      alignItems: 'center',
      fontSize: '13px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go(k),
    style: {
      color: route === k ? 'var(--accent)' : 'var(--ink-3)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('roteiros')
  }, "Reservar")));
}
function VOFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'clamp(40px,6vh,60px) 24px clamp(46px,7vh,70px)',
      textAlign: 'center',
      borderTop: '1px solid var(--border-default)',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '21px',
      color: 'var(--ink)',
      marginBottom: '8px'
    }
  }, "Viva Olinda"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--ink-5)'
    }
  }, "S\xEDtio Hist\xF3rico \xB7 Pernambuco \xB7 desde 1535"));
}
Object.assign(window, {
  VOHeader,
  VOFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/viva-olinda/VOChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Numeral = __ds_scope.Numeral;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ImageCard = __ds_scope.ImageCard;

})();
