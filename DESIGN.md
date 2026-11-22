---
name: אלון עבודות בניה
description: One contractor from structure to the last finishing detail; RTL Hebrew lead-generation pages drawn in architectural navy ink.
colors:
  navy: "#0F2A47"
  navy-deep: "#0A1E34"
  navy-night: "#06121F"
  navy-700: "#13314F"
  navy-600: "#1C3E63"
  navy-500: "#2E567F"
  navy-400: "#4E769F"
  navy-300: "#7E9FC2"
  navy-200: "#AEC5DC"
  navy-100: "#D6E2EE"
  navy-50: "#EEF3F8"
  teal: "#1CA3B8"
  teal-bright: "#34C2D6"
  teal-soft: "#67D9E8"
  teal-deep: "#188297"
  leaf: "#2FAE7E"
  leaf-light: "#46C795"
  whatsapp: "#25D366"
  ink: "#1B2733"
  white: "#FFFFFF"
  plaster-50: "#F8F5F2"
  plaster-100: "#F1ECE7"
  plaster-200: "#E4DCD4"
  plaster-300: "#CFC4BA"
  plaster-600: "#7A6C62"
typography:
  display:
    fontFamily: "Assistant, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 3.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Assistant, system-ui, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Assistant, system-ui, sans-serif"
    fontSize: "2.15rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Assistant, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Assistant, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  callout:
    fontFamily: "Assistant, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1
rounded:
  sm: "4px"
  md: "6px"
  xl: "12px"
  2xl: "1.25rem"
  3xl: "1.75rem"
  full: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  row: "12px"
  stack: "24px"
  block: "56px"
  section: "80px"
  section-lg: "112px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "16px 28px"
  button-header-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "10px 16px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  callout-label:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-deep}"
    typography: "{typography.callout}"
    rounded: "{rounded.md}"
    padding: "6px 10px"
  callout-pin:
    backgroundColor: "{colors.teal}"
    rounded: "{rounded.full}"
    size: "14px"
  schedule-bar:
    backgroundColor: "{colors.navy-400}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "44px"
  schedule-bar-unified:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "44px"
  lead-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.3xl}"
    padding: "32px"
---

# Design System: אלון עבודות בניה

## Overview

**Creative North Star: "The Architect's Walkthrough"**

The brand reads like a set of construction drawings laid over a finished house. Navy is the ink the drawings are made in; plaster and white are the walls and floors they are drawn on; teal is the light that the finished work gives off. Pages are right-to-left Hebrew, set in Assistant at heavy weights, large and tight, with long calm paragraphs beneath. The finishing-works surface (`/avodot-gmar`) is the fullest expression: a walk through one home, room by room, where each photographed room carries architect-style callouts naming the trade that built it.

Density is low and deliberate. Sections alternate grounds (white, plaster, navy, deeper navy) instead of separating content with boxes, and lists are ruled with hairlines rather than wrapped in cards. Proof is stated plainly in ruled definition lists, never in badges. Every section keeps a way to reach a person: WhatsApp green and navy phone buttons recur at the top, in the hero, in the contact block and in a mobile bottom bar.

The homepage (`/`) shares the tokens with a darker, more marketing-led register: navy gradient hero, blueprint grid, white cards with soft navy shadows and a teal-gradient primary button. Both surfaces are the same brand; the finishing-works vocabulary is the more architectural of the two.

**Key Characteristics:**
- Navy as ink: headings, rules, drawings, leaders and the deep section grounds.
- Plaster and gallery white as the ground; sections change ground instead of boxing content.
- Teal is light, not decoration: pins, the delivery line, light washes, focus rings, the lead-form submit.
- Leaf belongs to the one-contractor idea: the merged schedule bar and its "one" values.
- Assistant 800, tight negative tracking, balanced line breaks; 17px body at 1.75 line height.
- Hairline-ruled lists and definition rows instead of cards and icon tiles.

## Colors

A binding three-color brand (navy, teal, leaf) set on warm plaster and white, with WhatsApp green as the one borrowed color.

### Primary
- **Architectural Navy** (navy): the brand ink. Headline color (via the deeper navy-deep for h1 to h4), button-navy fill, FAQ toggles, Process step rules, the pergola drawing's strokes, and the full-bleed ground of the One-Contractor and Contact sections. navy-deep and navy-night are the deeper grounds (structure chapter, footer). The 50 to 700 steps carry secondary text (navy-700 body, navy-500 labels, navy-300 bullets and numerals, navy-100/200 text on navy grounds).

### Secondary
- **Light-Line Teal** (teal): the light in the house. Callout pins and numbered mobile pins, the schedule's delivery line and its label (teal-bright at 70% and teal-soft), the shadow wash in the pergola drawing (14% opacity), the global focus ring, text selection tint, link hover on navy grounds, required-field asterisks, and the lead-form submit (teal to teal-bright gradient). teal-deep is the text-weight teal on white.

### Tertiary
- **One-Contractor Leaf** (leaf): reserved for the single-contractor result. The merged schedule bars, the "whole project" bar, the active toggle thumb in "one contractor" state, and the form-success check. leaf-light sets the "one / אחד" values on navy ground.

### Neutral
- **Gallery White** (white): page base, header (95% with blur), callout labels, inputs, lead card.
- **Warm Plaster** (plaster-100): the alternate wall ground (hero, wood chapter, Process, FAQ) and the hero's fade behind the text column. plaster-50 fills the drawing panel; plaster-200 and plaster-300 are the hairline rules and borders on light grounds; plaster-600 is the stone-grey text tone.
- **Ink** (ink): default body text color set on the page root.
- **WhatsApp Green** (whatsapp): only on WhatsApp actions, everywhere they appear.

### Named Rules
**The Light-Line Rule.** Teal marks light and the single conversion submit: pins, the delivery line, light washes, focus and the lead-form button. It is never a heading color, a section ground or a decorative fill on the finishing-works surface.

**The One-Contractor Rule.** Leaf appears only where the page states the one-contractor outcome. A leaf element anywhere else dilutes the one meaning it has.

**The Ink-Not-Teal Leader Rule.** Callout leader lines are navy at 75% with a white halo, so they read on both bright walls and dark floors; the teal pin carries the color.

## Typography

**Display Font:** Assistant (with system-ui, sans-serif), loaded at 400 to 800 with Hebrew and Latin subsets.
**Body Font:** Assistant, same stack.

**Character:** One family doing everything. Weight 800 with negative tracking gives headings the mass of a drawn title block; regular-weight body at a generous 1.75 leading keeps the Hebrew paragraphs open and plain.

### Hierarchy
- **Display** (800, 2.35rem mobile, 3rem from sm, clamp(2.6rem, 3.4vw, 4rem) at xl, 1.08, -0.02em): the one h1, broken by hand into short lines. Section openers that act as page statements (walkthrough, contact) use the same 1.1 leading at 2.1 to 3rem.
- **Headline** (800, 2rem mobile to 2.6rem, 1.15, -0.015em): section h2s; often stacked as several short sentences, each its own block line.
- **Title** (800, 1.75rem mobile to 2.15rem, 1.15, -0.015em): chapter h3s in the walkthrough ("Gypsum: ...", "Flooring: ...").
- **Body** (400, 17px, 1.75): paragraphs, max width 36 to 44rem. Navy-700 on light grounds, navy-100 on navy.
- **Label** (600 to 700, 14 to 15px): ruled list items, trust line, contact rows, button text at 15 to 17px bold.
- **Callout** (700, 13px, line height 1): photo callout labels; numbered pins and legend digits are 800 with tabular numerals.

### Named Rules
**The Heavy-and-Tight Rule.** Every heading is weight 800 with negative tracking (-0.015em to -0.02em) and balanced wrapping. Lighter display weights are not part of this system.

**The Short-Lines Rule.** Multi-sentence headlines are set one sentence per line, so the rhythm of the statement is the layout.

## Layout

The finishing-works surface uses a 12-column grid inside an 84rem container with 20px, 32px and 48px gutters (mobile, sm, lg). The homepage uses a 7xl (80rem) container with 16/24/32px gutters. Sections run full bleed and carry their own ground; vertical padding is 80px, rising to 112px at lg. Inside sections, text columns take 5 to 7 columns and images the remainder, alternating sides as the walkthrough moves room to room; a wide plate (2:1, 3:1 from md) breaks the alternation for flooring.

The desktop hero (xl and up) sets the text directly on the photographed wall: the image runs edge to edge at its native 1920:1088 ratio, a plaster gradient fades in from the right 40%, and the text column occupies the right third. Below xl the photo sits on top and the text follows beneath it. Callouts switch at md: drawn leaders and labels above, numbered pins with a legend below the image under it.

Rhythm inside sections: 12px rows in ruled lists, 24px between heading and list, 40 to 64px between grid columns. On mobile a fixed two-button bar (WhatsApp, phone) appears only after the hero actions scroll out of view; the footer reserves bottom padding for it.

## Elevation & Depth

Mostly flat. Depth comes from ground changes (white to plaster to navy) and from the photographs themselves. Shadows are small, navy-tinted and functional: they lift things that sit on a photo or float over content.

### Shadow Vocabulary
- **Pin lift** (`box-shadow: 0 2px 8px rgba(10,30,52,0.35)`): callout pins on photographs.
- **Label lift** (`box-shadow: 0 4px 14px -4px rgba(10,30,52,0.35)`): callout labels on photographs.
- **Leader halo** (`box-shadow: 0 0 0 1px rgba(255,255,255,0.55)`): the white edge on navy leader lines.
- **WhatsApp glow** (`box-shadow: 0 12px 28px -10px rgba(37,211,102,0.75)`): hero WhatsApp button; 0 6px 16px -6px at 0.65 in the header.
- **Mobile bar** (`box-shadow: 0 -4px 20px -6px rgba(15,42,71,0.18)`): the fixed bottom action bar.
- **Card** (`box-shadow: 0 4px 18px -6px rgba(15,42,71,0.12), 0 12px 40px -12px rgba(15,42,71,0.14)`) and **card-hover**: homepage cards and the shared lead form.

### Named Rules
**The Photo-Only Lift Rule.** On the finishing-works surface, shadows belong to elements floating over imagery or content (pins, labels, the mobile bar, the lead card). Sections, lists and text columns are never shadowed.

## Shapes

Gently rounded, never pill-heavy. Photographic plates and the drawing panel use 1.25rem corners; buttons and inputs 12px; schedule bars and callout labels 6px; the simulation tag 4px. Pills (full radius) are kept for the header WhatsApp button, the header phone hover, the schedule toggle and its thumb, and pins. Lists use 1px hairline rules (plaster-200 on light, white at 10 to 15% on navy); Process steps carry a 2px navy top rule. The schedule's waiting gaps are hatched at -45 degrees, echoing the drawing's section hatching.

## Components

### Buttons
- **Shape:** gently rounded (12px); header and mobile-bar variants differ as noted.
- **WhatsApp (primary action on finishing works):** WhatsApp green, white bold 17px text with icon, 16px by 24px padding, green glow. Lifts 2px on hover, scales to 0.98 on press, easing cubic-bezier(0.16, 1, 0.3, 1) over 300ms.
- **Navy phone:** navy fill, white text, phone number set left-to-right; same lift and press.
- **Lead-form submit (button-primary):** teal to teal-bright gradient, white bold text, teal glow; brightens on hover. The one teal button on the finishing-works surface.
- **Text link:** navy-700 semibold with a 2px navy-300 underline at 6px offset, darkening on hover.
- **Focus:** 2px teal ring with 2px white offset on every interactive element.

### Callout Plate (signature)
A photograph of a finished room annotated like an architect's drawing. Each callout is a 14px teal pin with a 3px white border, a 1.5px navy leader at 75% opacity with a white halo, and a white 95% label in 13px bold navy. Callouts are sorted top to bottom and drawn in sequence (90ms apart): pin fades and scales in (160ms), leader scales from the pin outward (520ms), label resolves from a 6px blur (420ms). The draw only runs when the plate starts fully below the fold; plates already on screen at load, and every plate under reduced motion, show their final state. Below md, callouts become numbered 24px teal pins with a numbered legend under the image. Every AI-generated plate carries a "simulation for illustration" tag (navy-night at 60% with blur, 11px).

### Schedule Compare (signature)
A two-state comparison on navy ground: five trades as 44px bars on faint tracks. In the five-contractor state bars are navy-400 with hatched waiting gaps between them; in the one-contractor state the gaps close and every bar turns leaf, with a leaf "whole project" bar and a teal delivery line that moves earlier. It merges once, 500ms after 60% of it is in view (1100ms, 90ms stagger); toggle clicks run faster (520ms) and returning faster still (380ms). Reduced motion shows the merged state. A pill toggle (white thumb, leaf thumb when unified) switches states; an aria-live line describes each.

### Ruled Lists and Definition Rows
Lists sit between hairline rules with 12px rows, 15px semibold navy text and a 6px navy-300 dot. Proof facts use definition rows: a 7.5rem bold navy-500 key and a 17px semibold value, ruled above and below.

### Cards / Containers
- **Corner Style:** 1.25rem for plates and the drawing panel; 1.75rem for the lead card.
- **Background:** plaster-50 with a plaster-300 border for the drawing panel; white with navy-100 border for the lead card and homepage cards.
- **Shadow Strategy:** lead card and homepage cards only (card, card-hover); see Elevation.
- **Internal Padding:** 16 to 32px.

### Inputs / Fields
- **Style:** white, 1px navy-200 border, 12px radius, 12px by 16px padding, navy-300 placeholder, bold 14px navy-800 label above.
- **Focus:** border shifts to teal plus the global teal ring.
- **Error:** 12px semibold red message under the field; form-level errors in a red-50 panel.

### Navigation
A sticky 64px header (72px at lg) in white 95% with backdrop blur and a plaster-200 bottom rule: logo on the right, phone (from sm) and a pill WhatsApp button on the left. On mobile, a fixed bottom bar splits WhatsApp and phone 50/50 and slides up only once the hero actions leave the viewport. The footer is navy-night with navy-200 links that turn white on hover.

### FAQ
Native details rows ruled in plaster-300, 18px bold navy questions, a drawn plus that rotates 45 degrees to a cross on open (200ms).

## Do's and Don'ts

### Do:
- **Do** change the section ground (white, plaster-100, navy, navy-deep) to separate content instead of wrapping it in cards.
- **Do** keep teal for light, pins, the delivery line, focus and the lead-form submit (The Light-Line Rule).
- **Do** reserve leaf for the one-contractor result (The One-Contractor Rule).
- **Do** set headings in Assistant 800 with -0.015em to -0.02em tracking and balanced wrapping.
- **Do** draw callout leaders in navy at 75% with a white halo, and show final states under reduced motion.
- **Do** label every AI-generated plate as a simulation.
- **Do** offer WhatsApp (green) and phone (navy) together wherever a section asks for contact.

### Don't:
- **Don't** use teal or leaf as a heading color or a section ground on the finishing-works surface.
- **Don't** shadow sections, lists or text columns; shadows lift only what floats over imagery or content.
- **Don't** animate a callout plate that is already on screen at load; its leaders must never visibly erase and redraw.
- **Don't** present AI-generated room images as specific completed client projects.
