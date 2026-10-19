# Story Forge collectible cards — approved checkpoint (2026-10-19)

## Approved / frozen
- **Mermaid Rare Holographic v27:** `collectibles/mermaid-holographic.html` — https://kevo056.github.io/Shadow-cards/collectibles/mermaid-holographic.html
- **Dragon Rare Holographic v24:** `collectibles/dragon-holographic-v24-full-frame-foil-fix.html` — https://kevo056.github.io/Shadow-cards/collectibles/dragon-holographic-v24-full-frame-foil-fix.html
- Both files verified present in repository on 2026-10-19. **Do not overwrite or modify approved versions.**
- Dragon v24 is approved **as it stands**, with corrected full-resolution gold-foil mask, smooth touch tilt, holographic background, embers, centered ruby gems, and black lower border. The automatic gold-only glint remains disabled in v24; do not claim it was approved or restored.
- Mermaid v27 remains the visual/effects reference, with automatic passing glint and underwater orbs.
- Mermaid standard: `collectibles/mermaid-standard.html`.
- Approved Dragon artwork/frame source PNGs are separate. Do not modify their source pixels or change frame geometry.

## Important technical discoveries
- v23 gold foil mask used a 1024×1536 canvas but incorrectly called `getImageData(0,0,384,576)`. v24 corrects this to `getImageData(0,0,1024,1536)`, resolving incomplete left-corner foil and visual artifacts.
- The lower gold frame is an independent image overlay. To achieve black behind its open ornament, edit the **artwork/backing** layer only, not the gold PNG.
- v21 `collectibles/dragon-holographic-v21-artwork-only-black-bottom.html` was the approved bottom-border breakthrough; v24 retains that composition.
- Earlier v1–v23 experiments are historical diagnostics, not approved replacements. In particular, do not reintroduce v12-v20 frame/crop mistakes.
- The holographic intensity/mask is based on v14 onward, balanced to preserve black silhouette and full-image reflections.
- The gold-only glint remains disabled in Dragon v24. If testing later, branch to a new uniquely named file and preserve v24.
- No new artwork should be generated unless the user explicitly requests it; the approved Dragon and Mermaid source artwork should be reused unchanged.

## Planned collectible theme
- Twelve creature silhouette cards, including Mermaid, Dragon, Phoenix, Kraken, Griffin, Basilisk, Hydra, Chimera, Manticore, Minotaur, Treant, and a gorgon-like creature (creature Medusa is based on).
- Black creature silhouette against rich colored fantasy environment; gem at top/bottom centered in the gold frame setting, colors can vary.
- Standard and holographic cosmetic variants intended to have identical gameplay stats. No integration into main Story Forge loot system yet.
- Repo for card prototypes: `kevo056/Shadow-cards` (public GitHub Pages); do not modify separate private Story Forge game repo.

## Next steps (not started)
- Optional separate experiment adding Mermaid-style automatic gold glint to Dragon, **without modifying approved v24**.
- Continue the remaining creature artwork/cards when requested.
