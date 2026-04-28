# GPT-TASTE — Framework Awwwards Strict

Framework strict pour créer des sites niveau Awwwards. Chaque décision de design doit être justifiable.

## AIDA Framework appliqué au web
- **Attention** : Le fold (première vue) doit capturer en <3 secondes
- **Interest** : La valeur unique doit être claire sans scroll
- **Desire** : Les preuves sociales et visuelles créent le désir
- **Action** : Un seul CTA principal, visible et désirable

## Checklist Awwwards

### Typography (30pts)
- [ ] Font display exclusive ou très bien utilisée
- [ ] Hiérarchie claire sur 4+ niveaux
- [ ] Ligne de base alignée dans les grilles
- [ ] Taille de texte adaptée (min 16px body)

### Layout (25pts)
- [ ] Grille personnalisée (pas Bootstrap 12 colonnes)
- [ ] Espace négatif intentionnel
- [ ] Éléments qui "cassent" la grille
- [ ] Mobile-first mais desktop remarquable

### Interaction (25pts)
- [ ] Chaque hover a un retour visuel premium
- [ ] Scroll déclenche des animations
- [ ] Loading state soigné
- [ ] Transitions between states fluides

### Originality (20pts)
- [ ] Concept visuel unique
- [ ] Pas de templates reconnaissables
- [ ] Solutions créatives aux problèmes UX communs

## GSAP Patterns premium
```js
// ScrollTrigger pin + scrub
gsap.to(element, {
  scrollTrigger: { trigger, pin: true, scrub: 1 },
  x: -500, ease: 'none'
})

// Stagger reveal
gsap.from(items, {
  y: 60, opacity: 0, stagger: 0.08,
  scrollTrigger: { trigger, start: 'top 80%' }
})
```

## Bento Grid Patterns
```
[  2x1 Featured  ] [ 1x1 ]
[ 1x1 ] [  2x1 Wide Card  ]
[    3x1 Full Width    ]
```
