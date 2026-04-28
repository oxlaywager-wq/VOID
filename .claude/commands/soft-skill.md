# SOFT SKILL — Esthétique Premium & Soft

Style premium doux : whitespace généreux, motion fluide, double-bezel, glassmorphism subtil.

## Signature visuelle
- Backgrounds : off-white (#FAFAF9), cream (#F5F0EB), very light purple (#F3F0FF)
- Accents : violet doux, rose pâle, bleu lavande
- Texte : near-black (#1A1A2E) jamais noir pur
- Shadows : très douces, multicouches, colorées

## Double-Bezel Pattern
```css
.card {
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 
    0 0 0 1px rgba(0,0,0,0.04),
    0 2px 4px rgba(0,0,0,0.04),
    0 8px 16px rgba(0,0,0,0.06),
    0 24px 48px rgba(0,0,0,0.08);
}
```

## Motion Fluide
- Ease : cubic-bezier(0.22, 1, 0.36, 1) — overshoot doux
- Durées : 0.4s–0.8s (jamais trop rapide)
- Hover : lift + glow subtil
- Scroll : parallax léger (0.3x)

## Glassmorphism subtil
```css
.glass {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.5);
}
```

## Composants signature
- Pills/badges avec gradient très doux
- Avatars avec border gradient animé
- Inputs avec focus glow coloré
- Boutons avec shimmer on hover
