# REDESIGN SKILL — Refonte Ciblée

Audit complet d'un projet existant et améliorations ciblées.

## Workflow d'audit

### Phase 1 : Analyse (avant de toucher au code)
1. Lire TOUS les fichiers existants
2. Identifier les problèmes de design
3. Identifier les problèmes de performance
4. Identifier les incohérences de style
5. Lister les opportunités d'amélioration

### Phase 2 : Prioritisation
- **P0** (critique) : Problèmes qui cassent l'expérience
- **P1** (important) : Incohérences majeures, manque de polish
- **P2** (nice-to-have) : Optimisations et détails

### Phase 3 : Implémentation
Traiter dans l'ordre P0 → P1 → P2.

## Checklist d'audit design
- [ ] Cohérence de la palette (max 3 couleurs actives)
- [ ] Hiérarchie typographique claire
- [ ] Espacement régulier (système 4px ou 8px)
- [ ] États hover sur tous les éléments interactifs
- [ ] Animations fluides (pas de flash, pas de saccade)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Performances (images optimisées, lazy loading)
- [ ] Accessibilité (contraste, focus states)

## Anti-patterns courants à corriger
- Trop de couleurs différentes → unifier
- Fonts système → ajouter une display font
- Pas d'animations → ajouter du motion premium
- Layout trop rigide → ajouter de l'asymétrie
- CTA peu visibles → augmenter la hiérarchie
