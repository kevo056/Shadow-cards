# Reusable collectible card assets — 2026-10-17

## Frozen approved sources
- Original art: `approved_original_mermaid.png` (unchanged)
- Standard card: `collectibles/mermaid-standard.html`
- Holographic card: `collectibles/mermaid-holographic.html`
- Approved v27 source backup: `assets/card-effects-v27-source.html`

## Extracted reusable code
- `assets/card-effects-v27.css` — original v27 styles: tilt, foil, gold shine, glint, ocean hologram, soft sweep, orbs
- `assets/card-effects-v27.js` — original v27 behavior and runtime color masks
- These are exact source archives, not yet a generic drop-in API; current scripts assume the v27 HTML structure and original Mermaid artwork.

## Gold frame proof of concept
- `collectibles/gold-frame-extraction-test.html`
- Opens the existing approved PNG, retains warm metallic pixels near the perimeter, and previews the result as a transparent canvas over a different background.
- Adjustable threshold and frame width. Export button creates a transparent PNG locally in the viewer's browser.
- This is an experimental extraction: pixel heuristics may omit some trim or retain unwanted pixels. It requires visual review before approval as a reusable frame.
- No newly generated artwork and no change to approved versions or game loot system.

## Next
Visually inspect extraction on iPhone; if clean enough, freeze a transparent frame PNG, then refactor shared effects into a configurable renderer with `standard` and `holographic` modes.
