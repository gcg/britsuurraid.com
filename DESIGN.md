---
name: Brit Suurraid
description: A pastel community noticeboard for a community builder and strength coach.
colors:
  blush: "#FFF0F4"
  blush-2: "#FFDDE9"
  paper: "#FFFFFF"
  pink: "#F7A8C8"
  pink-deep: "#B5175E"
  pink-soft: "#FFD3E2"
  butter: "#FFE39A"
  butter-soft: "#FFF3CC"
  ink: "#2A1436"
  muted-ink: "#6E5470"
  night: "#2B1238"
  night-2: "#3B1D4B"
  on-night: "#FFE9F1"
  muted-night: "#D2BBDA"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(44px, 7.2vw, 104px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  hero-name:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(60px, 11vw, 140px)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 56px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, Helvetica Neue, Arial, sans-serif"
    fontSize: "25px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  accent-serif:
    fontFamily: "Instrument Serif, Georgia, Times New Roman, serif"
    fontWeight: 400
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(19px, 1.8vw, 23px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
  marker:
    fontFamily: "Permanent Marker, Marker Felt, Comic Sans MS, cursive"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1
rounded:
  polaroid: "3px"
  card: "8px"
  tile: "14px"
  box: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  chapter: "clamp(96px, 13vw, 176px)"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.blush}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-light:
    backgroundColor: "{colors.on-night}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-small:
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  eyebrow-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.blush}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
  fork-card:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(40px, 4.5vw, 56px) clamp(24px, 3.4vw, 44px)"
  offer-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "22px"
  client-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "22px"
  polaroid:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.polaroid}"
    padding: "14px 14px 58px"
---

# Design System: Brit Suurraid

## Overview

**Creative North Star: "The Community Noticeboard"**

The site is the board outside a community kitchen: things pinned, taped and stuck to it by a real person. Name tags, taped polaroids, pushpin cards, round stickers and a flyer with tear-off strips carry the content. The objects are physical and slightly crooked; the type is loud, chunky and tight; the palette is soft pastel on a warm plum ink. It should feel hand-assembled and friendly, never corporate and never loud in colour.

Density is generous. Sections (called chapters in the code) are tall, with big display headlines and plenty of blush space around a few pinned objects. Fitness shows up as small, live details rather than a gym aesthetic: a heart-rate pill, a heartbeat line that draws itself, a certificate ring that fills on scroll and a training log.

Motion is playful but optional. Things pop in with a slight overshoot, cards straighten on hover, tear-off strips swing, and everything stops under `prefers-reduced-motion`.

**Key Characteristics:**
- Pastel pink and butter yellow on blush, with deep plum ink and plum "night" sections.
- Chunky, tightly tracked Bricolage Grotesque display type, with italic Instrument Serif for the emotional word.
- Real-world noticeboard objects: tape, pushpins, polaroids, stickers, name tags, a tear-off flyer.
- Small tilts and one shared soft plum shadow on anything "pinned".
- Pill-shaped buttons, chips and tags.

## Colors

Soft pastels on a warm, almost-white pink, held together by one deep plum that does all the text and the dark sections.

### Primary
- **Bubblegum Pastel** (`pink`): the signature accent. Fills stickers, chips, seat fills, hover states, tick bullets, the heart, and accent text on dark plum sections. Never used as text on light backgrounds.
- **Raspberry Ink** (`pink-deep`): the only pink allowed as text on light backgrounds (5.8:1 on blush). The second line of the hero name, serif accents, labels, marker scribbles and the focus ring.
- **Petal** (`pink-soft`): soft fills for boxes and seats, and the halo around the wordmark dot.

### Secondary
- **Butter** (`butter`): the warm second accent. The "what's on" ticker, tape strips, card backgrounds and seat fills.
- **Butter Cream** (`butter-soft`): the coaching section background and soft offer boxes.

### Neutral
- **Blush** (`blush`): the page. Default background for light chapters and the header when scrolled.
- **Blush Deep** (`blush-2`): the table top, ring tracks, hover fills.
- **Paper** (`paper`): pinned objects: polaroids, the flyer, cards, the work section.
- **Plum Ink** (`ink`): all body text on light, primary buttons, stickers, tags.
- **Faded Plum** (`muted-ink`): secondary text, kickers, captions on light.
- **Night Plum** (`night`) and **Night Plum Raised** (`night-2`): dark chapters (Newsroom, Podcast) and the tiles on them.
- **Night Blush** (`on-night`) and **Lilac Mist** (`muted-night`): text and secondary text on night.
- Hairlines: `rgba(42,20,54,.14)` on light, `rgba(255,233,241,.16)` on night.

**The No-Neon Rule.** Brit hates neon. Every colour stays pastel or deep plum; no saturated electric hues, no glows, no gradients beyond the pink-to-butter podcast cover.

**The Raspberry-for-Text Rule.** Pink text on a light background is always `pink-deep`. `pink` is a fill, or text on night.

## Typography

**Display Font:** Bricolage Grotesque, 700–800 (fallback: Arial Rounded MT Bold, Helvetica Neue, Arial)
**Body Font:** Hanken Grotesk, 400–700 (fallback: system-ui)
**Accent Font:** Instrument Serif italic
**Handwriting:** Permanent Marker

**Character:** A friendly, chunky grotesque shouts the headlines with tight tracking; a plain humanist sans carries the reading; an italic serif adds the one tender word; a marker writes the notes on the board.

### Hierarchy
- **Hero name** (800, clamp 60–140px, 0.88): Brit's name only.
- **Display** (800, clamp 44–104px, 0.95, -0.035em): chapter headlines, balanced wrap.
- **Headline** (800, clamp 36–56px): card titles, podcast title.
- **Title** (800, 22–32px): client names, lower-third titles, highlight figures.
- **Lead** (400, clamp 19–23px, 1.5, max 34em): the intro paragraph under a headline.
- **Body** (400, 17px, 1.6): everything else.
- **Label** (600, 12–13px, 0.08–0.14em, uppercase): eyebrows, kickers, stat labels, metadata.
- **Marker** (17–52px): polaroid captions, the name on the name tag, "Take one!", scribbles.

**The One Tender Word Rule.** Instrument Serif italic marks a single emphasised word or short phrase inside a display line (the `em` or `.serif`), in Raspberry Ink (or Bubblegum on night). Never a whole headline, never body copy.

**The Marker-Is-Handwriting Rule.** Permanent Marker appears only where a person would have written by hand on the board: captions, notes, the name tag. Never for headings, buttons or paragraphs.

## Layout

- Container: 1200px max (1280px for the hero and photo mosaic), with a fluid gutter `clamp(16px, 4vw, 48px)` that respects safe areas.
- Chapters: tall vertical padding `clamp(96px, 13vw, 176px)`, full-bleed backgrounds.
- Split chapters: one column on mobile; at 960px, a 5fr/7fr grid with a sticky heading column (top 110px).
- Hero: one column; at 960px, text plus a 320–430px photo cluster.
- Two-card fork: one column; two columns at 880px.
- Breakpoints in use: 480, 520, 640, 760, 880, 900, 960, 1000 and 1100px (nav links appear at 1100px).
- Huge outlined "drift words" (22vw) sit behind some chapters as texture, stroked at 8% opacity.

Section rhythm, as guidance rather than a rule: light chapters alternate with plum night chapters, and the coaching chapter sits on butter cream, ending on a full pink contact chapter.

## Elevation & Depth

Depth comes from objects pinned on a board, not from UI layers. Pinned things (polaroids, the name tag, stickers, the fork cards, the flyer, the floating pulse) share one soft plum drop shadow and usually a small tilt. Flat content (offer boxes, the training log, the certificate) uses a 1px plum hairline and no shadow.

### Shadow Vocabulary
- **Pinned** (`0 18px 40px -18px rgba(42,20,54,.45)`): the shared `--shadow` for anything pinned.
- **Flyer** (`0 30px 60px -28px rgba(42,20,54,.55)`): the larger contact flyer.
- **Podcast cover** (`0 40px 80px -30px rgba(0,0,0,.6)`): the cover art on night.
- **Client card** (`0 12px 26px -20px rgba(42,20,54,.5)`): a light lift for client tiles.

Tilts are guidance, not a rule: polaroids and cards sit between roughly -3° and +3°, the name tag at -8°, stickers at +12°, the flyer at -1°. Cards straighten on hover.

## Shapes

- Pills (999px) for every button, chip, tag, the language switch and the floating pulse.
- Polaroids are near-square-cornered paper (2–3px). Cards are 8px. Tiles and boxes are 14–16px.
- Circles for stickers, the wordmark dot, pushpins, tick bullets and the certificate ring.
- Dashed lines mean "cut here" or "empty": tear-off strips and empty chairs at the long table.
- A thin translucent tape strip (pink or butter) holds polaroids to the board.

## Components

### Buttons
Rounded, solid and friendly.
- **Shape:** full pill (999px), 1.5px border matching the fill.
- **Primary:** Plum Ink fill, Blush text, 600 weight, 16px, padding 14px 24px.
- **Hover:** lifts 2px and turns Bubblegum with ink text, eased with `cubic-bezier(.2,.7,.2,1)`.
- **Ghost:** transparent with ink border. **Light:** Night Blush fill for dark chapters. **Ghost light:** transparent with a faint blush border on night.
- **Small:** 9px 16px, 14px.
- **Text link:** 600 weight with a 1.5px underline border.

### Chips
- Pill tags, 600 weight 13–14px. On the hero: paper fill with an ink border, the first one in Bubblegum. On cards: translucent white. On night: transparent with a faint border.

### Cards / Containers
- **Fork cards** ("Train with me" / "Build with me"): 8px corners, pastel fill per card, the pinned shadow, a slight tilt, a plum pushpin at the top and a marker scribble in the corner.
- **Offer boxes:** 16px, paper with a hairline, or butter-cream / petal fills without a border. Uppercase raspberry heading, round pink bullets.
- **Client cards:** 14px, paper, a 6px coloured top border, light shadow.
- **Highlights on night:** 14px, Night Plum Raised, Bubblegum figure.

### Navigation
- Fixed header, transparent over the hero; on scroll it turns translucent blush with a 12px blur and a hairline.
- Wordmark: 800 display type with a Bubblegum dot in a petal halo.
- Section links at 1100px and up, with a Bubblegum underline that wipes in on hover.
- EN/ET switch: a pill segmented control; the current language is filled ink.

### Signature components
- **Name tag:** "HELLO my name is" in Raspberry Ink, with Brit's name in marker, tilted over the hero polaroid.
- **Ticker:** butter strip with an ink "What's on" badge that pauses all motion.
- **Long table:** an SVG table whose 16 dashed chairs fill with pastel seats and initials as you scroll.
- **Lower thirds:** TV-style title bars with a pink bar that grows in, for the newsroom roles.
- **Certificate ring and training log:** a pink progress ring and a dashed-row log on paper.
- **Tear-off flyer:** pinned paper with vertical tear-off strips for each contact route; strips swing on hover.
- **Pulse pill:** floating plum pill with a beating heart, BPM and a "Say hi" button.

## Do's and Don'ts

### Do:
- **Do** use `pink-deep` for any pink text on blush, paper or butter.
- **Do** make new content look like something pinned to the board (paper, tape, pin, sticker, marker note) when it's a standalone object.
- **Do** keep every button, chip and tag a pill.
- **Do** give every animation a `prefers-reduced-motion` fallback that leaves content visible and still.
- **Do** keep the focus ring: 2px `pink-deep` on light, `pink` on night, 3px offset.

### Don't:
- **Don't** use neon, electric or fully saturated colours, or glows.
- **Don't** use `pink` as text on a light background.
- **Don't** set headlines or body copy in Permanent Marker or Instrument Serif.
- **Don't** add a new shadow when the shared pinned shadow fits.
- **Don't** add forms; contact stays as links (see PRODUCT.md).
