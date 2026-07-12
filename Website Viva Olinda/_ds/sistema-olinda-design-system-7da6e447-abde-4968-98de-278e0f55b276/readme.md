# Sistema Olinda — Design System

A paper-and-engraving visual language for **Olinda Classic**, built around the historic city of Olinda (Pernambuco, Brazil) and the 17th-century Dutch engravings that recorded it. The system serves two voices on one shared substrate:

- **Viva Olinda** — the commercial / tourism voice. Warm accents (Terracota, Carmim), image-forward, inviting.
- **Conselho de Preservação do Sítio Histórico** — the institutional / documentary voice. Cool accents (Azul-ardósia, Anil), text-forward, sober.

Everything sits on the same cream paper with grain and vignette; imagery prints onto the page via `multiply` + sepia, as if struck from an engraving plate. One accent color is chosen per project; everything else stays neutral and quiet.

### Sources
- `uploads/Sistema Olinda.dc.html` — the original brand definition (a Design Component master guide) this system was derived from. Palettes, type ramp, component patterns, and the two-voice model all come from it.
- The referenced engravings (`olinda-vista-porto.png`, `olinda-alegoria.png`, `olinda-cerco.png`) are public-domain Dutch plates (c. 1630) but were **not uploaded** — see Caveats.

No Figma, GitHub, or codebase was provided; the brand was reconstructed entirely from the master guide.

---

## Content Fundamentals

**Language.** Brazilian Portuguese, throughout. UI labels, captions, and prose are all PT-BR. Latin appears as a secondary, italic gloss on monument names (e.g. *Coenobium Franciscanorum*) — an engraving-era convention, never as primary copy.

**Tone.** Editorial, literary, unhurried — closer to a museum wall-text or a fine guidebook than to product marketing. Even the tourism voice (Viva Olinda) sells through atmosphere and history, not urgency. The institutional voice (Conselho) is documentary and precise.

**Person.** Largely impersonal / third-person ("O Conselho mantém…", "Fundada em 1535…"). The tourism voice occasionally addresses the visitor with the imperative invitation ("Caminhe pela cidade…", "Escolha o ritmo") — warm but never "you/your" hard-sell.

**Casing.** Sentence case for headings and body. UPPERCASE is reserved for the wide-tracked eyebrow/labels ("olho-d'água") and button caps — always with generous letter-spacing (0.12em–0.36em), never tight all-caps.

**Numerals carry weight.** Dates and milestones (1535, 1630, 1982) are set large in Cormorant as display elements, not buried in text — history is a design material here.

**No emoji. No exclamatory marketing.** Punctuation is calm. Italic Cormorant is used for leads, captions, and pull-quotes — the system's "spoken aside."

**Examples.**
- Eyebrow: `Sítio Histórico · Pernambuco` · `Fundamentos · 01` · `Roteiro guiado · 3h`
- Lead (italic): *"Quatro séculos à beira do oceano, vistos pelos gravadores do século XVII."*
- Caption (italic): *"Villa d'Olinda de Pernambuco — panorama do porto, séc. XVII"*
- Button: `Reservar visita` · `Consultar o acervo` · `ler o verbete`
- Pull-quote: *"Cada pedra da ladeira é um documento. Lê-la é preservá-la."*

---

## Visual Foundations

**Color.** A constant cream **paper** (`#e7ddc4`, with `#f3ecda` for raised surfaces) and a warm **ink** ramp (`#241d12` → `#7a6743`). On top, exactly one **accent** per project, chosen from six deep+soft pairs: Sépia dourado (marca-mãe / default), Terracota, Azul-ardósia, Verde-cana, Carmim, Anil. Retheme by setting `data-accent="terracota|ardosia|cana|carmim|anil|sepia"` on any container, or by overriding `--accent`/`--accent-soft`. Never introduce a color outside this set.

**Type.** Two serifs in dialogue plus one mono, **plus a sans for the Present/Future voices**. **Cormorant Garamond** (500/600) for display, titles, and numerals — wide `0.04em` tracking on the largest sizes. **EB Garamond** for body and interface in the heritage voice (17px / 1.78 line-height). **Hanken Grotesk** (`--font-sans`) for body/interface/data in the Present (tourism) and Future (corporate) voices — never replacing EB Garamond in the heritage voice. **IBM Plex Mono** only for technical metadata, captions, and labels. Fluid `clamp()` ramp from 11px meta to 168px display.

**Backgrounds.** Always the cream paper — never white, never gradients-as-decoration. Two fixed overlay layers sit above everything: a fine **grain** (`radial-gradient` dot texture at 3px, ~50% opacity) and a soft **vignette** (`multiply`). The effect is printed paper, not screen.

**Section surfaces.** To break the rhythm of a page, two surface families exist beyond the cream paper: light **Present** surfaces (Papel claro `#f3ecda`, Marfim `#faf6ec`, Branco puro `#ffffff`) and dark **Future / corporate** slate surfaces (Ardósia `#4f6173`, Ardósia profunda `#3a4654`, Carvão noturno `#222b35`, with matching panel + cool text tokens). See `colors.css`.

**Imagery.** Engraving-on-paper by default: every image is `mix-blend-mode: multiply` + `filter: sepia(0.14) contrast(1.04)`, so it sinks into the page rather than sitting on it.

**Camadas de tempo (time layers).** The same substrate carries three image treatments so contemporary photos can join the engravings without breaking the heritage. What stays constant: cream paper, display serif, olho-d'água, registry frame. What changes per era is the treatment, grain, border, accent and motion (tokens in `effects.css`):
- **Passado** — engraving: `multiply` + sépia 20% + strong grain + vignette, radius 4, slow parallax.
- **Presente** — warm natural photo: `saturate(1.03) sepia(0.06)`, no grain, soft radius 9, crisp reveal.
- **Futuro** — cold projection: `saturate(0.9)` desaturation + slate tint, technical inset border, radius 2, precise motion.

**Spacing & layout.** 4px base grid. Sections breathe with fluid vertical padding (`clamp(70px,11vh,130px)`) and a `clamp(24px,6vw,90px)` gutter. Content holds to a ~1180px measure; prose to a ~640px column. Generous whitespace is structural, not incidental.

**Corners & borders.** Barely-there radii — 3/4/6px on cards and images, full pills (999px) on buttons and badges. Borders are warm brown at low alpha (`rgba(120,96,48,0.18–0.40)`), used as hairlines and dividers. No heavy outlines.

**Cards.** Translucent cream panels (`rgba(243,236,218,0.6)`) with a single hairline border and a 6px radius — no drop shadow at rest. Image figures get an *inset* hairline instead of a border.

**Shadows.** Warm and low, used sparingly: `0 10px 24px rgba(120,96,48,0.18)` on hover only. Ink lifting off paper, never a hard elevation system.

**Motion.** Slow and eased — house easing `cubic-bezier(0.2,0.7,0.2,1)`. Content reveals on scroll (fade + 28px rise over ~1s). No bounce, no spring, no spin. All motion respects `prefers-reduced-motion`.

**Hover / press.** Buttons lift `translateY(-2px)` + gain the soft shadow; secondary buttons wash to `rgba(120,96,48,0.10)`; text links draw an underline. Cards lift `-3px`. Icon buttons scale to 1.07 and brighten. Accordion rows shift `translateX(3px)` and fill with a faint accent wash. No shrink-on-press.

**Ornament.** Engraving-era dividers between blocks: a filete with a centered `◆`, a dot–line–dot, or spaced `✦ ✦ ✦`. Used as breathing punctuation, not constant decoration.

---

## Iconography

Sistema Olinda is **deliberately icon-light** — it is a typographic, engraving-led system, not a UI with a dense icon language. There is **no icon font, no SVG icon set, and no PNG icon sprite** in the source material, so none is bundled.

Where glyphs are needed they are **Unicode typographic characters set in the brand serif**, not drawn icons:
- Navigation / arrows: `→` (button trailing), `‹` `›` (carousel / back), `⌄` (accordion chevron), `↓` (scroll cue).
- Ornaments: `◆` `✦` `●` (dividers, palette check-dots).
- Close: `×`.

These render in Cormorant/EB Garamond so they read as part of the typography. **Emoji are never used.** If a future product genuinely needs a lined icon set, substitute **Lucide** (CDN) at ~1.5px stroke to stay close to the hairline border weight, and document the addition here — but prefer typographic glyphs first.

(No icon assets were available to copy in. If Olinda Classic has an official mark or seal, add it to `assets/` and document it here.)

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** — `fonts.css` (Google Fonts import), `colors.css` (neutrals, ink ramp, 6 accent pairs, semantic aliases, `data-accent` theme scopes), `typography.css` (families, weights, fluid scale, tracking), `spacing.css` (4px grid, section rhythm, radii), `effects.css` (shadows, motion, imagery treatment, grain/vignette, `.ol-divider`).

**`components/`** — reusable primitives (namespace `window.SistemaOlindaDesignSystem_7da6e4`):
- `buttons/` — **Button** (primary / secondary / text; sm·md·lg), **IconButton**
- `labels/` — **Eyebrow** (olho-d'água), **Badge** (solid / outline / quiet)
- `content/` — **SectionHeader**, **Divider** (diamond / dots / stars), **Numeral**
- `surfaces/` — **Card**, **ImageCard** (engraving figure + caption)
- `disclosure/` — **Accordion** (legend list)

**`ui_kits/`** — full-screen click-through recreations:
- `viva-olinda/` — tourism site (home, roteiros, booking flow, agenda)
- `conselho/` — heritage register (home, acervo, verbete document, sobre)

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.

---

## Caveats
- **Missing imagery.** The three public-domain engravings referenced by the source were not uploaded. `ImageCard` and the kits render labelled placeholder frames in their place. Drop the real plates into `assets/` and pass `src` to light them up.
- **Fonts via CDN.** Cormorant Garamond, EB Garamond, and IBM Plex Mono load from Google Fonts (no `@font-face` binaries are bundled). For offline / self-hosted use, add `.woff2` files under `assets/fonts/` and replace the `@import` in `tokens/fonts.css`.
- **No official Olinda Classic mark** was provided — the wordmark is set typographically in Cormorant.
