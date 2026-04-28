# STITCH SKILL — DESIGN.md pour Google Stitch

Génère un fichier DESIGN.md avec des règles sémantiques optimisées pour Google Stitch (outil de design IA).

## Format DESIGN.md

```markdown
# Design System — [Projet]

## Identité visuelle
- **Nom** : [Nom du projet]
- **Tagline** : [Slogan]
- **Ton** : [Professional/Playful/Luxe/Tech]

## Palette
- Primary : #[HEX] — utilisé pour les CTAs, accents
- Secondary : #[HEX] — utilisé pour les backgrounds de sections
- Neutral : #[HEX] — textes corps
- Dark : #[HEX] — backgrounds sombres
- Light : #[HEX] — backgrounds clairs

## Typographie
- Display : [Font name], weights 700/800/900
- Body : [Font name], weights 400/500/600
- Mono : [Font name] (optionnel, pour code/labels)

## Composants
### Boutons
- Primary : bg-primary, text-white, rounded-full, px-6 py-3
- Secondary : border border-primary, text-primary, rounded-full
- Ghost : text-primary, hover:bg-primary/10

### Cards
- Border : 1px solid [border-color]
- Radius : 16px
- Shadow : subtle multi-layer
- Hover : lift -8px + border-color intensifié

## Layout rules
- Max-width : 1280px
- Padding horizontal : 64px (desktop) / 24px (mobile)
- Section padding : 112px vertical
- Grid : 12 colonnes, gap 24px
```

## Instructions Stitch
Utiliser des termes sémantiques précis : "hero section", "service card", "testimonial carousel", etc.
Toujours spécifier les états : default, hover, active, disabled.
