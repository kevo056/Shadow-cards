# Story Forge — Approved Phoenix Card Baselines

**Saved:** October 20, 2026  
**Repository:** `kevo056/Shadow-cards`, branch `main`  
**Status:** Both Phoenix variants approved by the user; preserve them as independent canonical designs.

## 1. Standard Phoenix — approved

- **Active file:** `collectibles/phoenix-standard.html`
- **Git blob SHA when saved:** `d0471e258fd56370f6d38152a6154a3d814e71c4`
- **Live link:** https://kevo056.github.io/Shadow-cards/collectibles/phoenix-standard.html
- Exact approved Phoenix image: `Shadow Phoenix Over the Golden City (1).png`.
- Original separate gold trim: `AF2C4600-A57F-4B3C-8599-5641C23128FE.png`.
- Two gold gemstones, with bottom gemstone at 92.60% and native 2:3 card dimensions.
- **Tilt is required:** phone touch/drag, mouse/pointer fallback, horizontal/vertical sliders, and Reset tilt. A non-tilting static card is *not* the approved standard.
- **No holographic layer, moving glint, gold foil animation, floating orbs, or sparkles.**

## 2. Holographic Phoenix — approved

- **Active file:** `collectibles/phoenix-holographic.html`
- **Git blob SHA when saved:** `d57b804b240caf9695799ef6f2a5145abebcefa8`
- **Live link:** https://kevo056.github.io/Shadow-cards/collectibles/phoenix-holographic.html
- Based on the approved v7 sparkle preview.
- Same approved Phoenix image, frame, gold gemstones, and correct 2:3 geometry.
- Tilt-responsive crisp colored holographic reflections, strong gold-frame foil/glint, passing artwork glint, floating gold orbs and twinkling sparkles.
- Existing cutout mask must protect the **pure-black, completely featureless Phoenix** from holographic light.
- Mobile performance optimizations and animation visibility pausing must be preserved.

## Preservation requirements

1. **Do not replace either approved canonical file with an experiment.** Use new versioned preview pages for future changes until separately approved.
2. **Do not modify** the approved artwork image, gold trim image, relative art alignment, gemstone positions, or underlying card geometry without user direction.
3. Preserve previous experimental v1–v7 Phoenix versions as development history.
4. Both files and their current implementation passed GitHub readback and JavaScript syntax checks; a live mobile device validation is separate from these static checks.
5. Later work on collectible cards or Story Forge integration should use these two exact file paths as the Phoenix standard/holographic starting point.
