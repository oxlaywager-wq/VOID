# Checklist de debug — Zap Outtarget

## Problème 1 : VRAI/FAUX au lieu de Oui/Non ✅ Résolu

**Cause :** L'IA retourne des booléens JSON (true/false) que Zapier
affiche comme VRAI/FAUX selon la locale française.

**Fix :** 
1. Le prompt force explicitement `"Oui"`, `"Non"`, `"Non mentionné"` en texte
2. Le Code by Zapier (Step 6) normalise toutes les valeurs avec `normalizeOuiNon()`

---

## Problème 2 : familles_list en JSON brut dans Excel ✅ Résolu

**Cause :** Zapier injectait `[{"famille":"..."}]` comme string dans la cellule.

**Fix :** Code by Zapier parse le tableau et exporte 3 champs séparés
(`familles_famille`, `familles_sous_type`, `familles_commentaire`) 
en line items que Looping comprend.

---

## Problème 3 : Looping ne crée pas plusieurs lignes ✅ Résolu

**Cause :** `familles_list` arrivait comme string non parsée → Looping
voyait 1 seul item.

**Fix :** Code by Zapier produit des line items avec séparateur `,,,`
que Looping traite nativement.

---

## Problème 4 : Gemini "Unknown name raw" ✅ Résolu

**Cause :** Le body du webhook utilisait `{"raw": "..."}` — champ
inexistant dans l'API Gemini v1beta.

**Fix :** Structure correcte :
```json
{
  "contents": [{"parts": [{"text": "PROMPT"}]}],
  "generationConfig": {"temperature": 0, "responseMimeType": "application/json"}
}
```

---

## Tests à effectuer

### Test 1 : Valider le JSON de l'IA
Dans Zapier, après Step 4, cliquez "Test Step" et vérifiez que :
- [ ] La réponse contient un JSON valide
- [ ] `fsc`/`pefc`/`gots`/`oeko_tex`/`ecovadis` = "Oui", "Non" ou "Non mentionné"
- [ ] `familles_list` est un tableau avec au moins 1 entrée

### Test 2 : Valider le Code by Zapier
Dans Step 6, vérifiez que les outputs contiennent :
- [ ] `familles_count` > 0
- [ ] `familles_famille` contient des noms séparés par `,,,`
- [ ] `fsc` = "Oui", "Non" ou "Non mentionné" (pas VRAI/FAUX)

### Test 3 : Valider le Looping
- [ ] Le Looping crée autant d'itérations que `familles_count`
- [ ] Chaque itération a sa propre famille/sous_type/commentaire

### Test 4 : Valider Excel
- [ ] Chaque famille crée une ligne séparée dans "Feuil1"
- [ ] Les colonnes sont correctement mappées
- [ ] Les certifications sont en "Oui"/"Non"/"Non mentionné"

---

## Emails de test recommandés

Pour tester le Zap avec un vrai email, utilisez un email contenant :
- Un nom d'entreprise clair
- Au moins une URL de site web
- Des mots-clés : bag, packaging, sac, factory, manufacturer

Vous pouvez vous envoyer un email test depuis une adresse externe avec :
```
Objet: Supplier Introduction - Bag and Packaging Manufacturer

Hello,

We are XYZ Packaging Co., a manufacturer of eco-friendly bags and packaging.
Our products include cotton bags, paper bags, and cardboard boxes.
FSC certified. FOB Shanghai terms. MOQ 500 pcs.

Visit us: https://www.example-supplier.com

Best regards,
John Smith - Sales Manager
john@xyz-packaging.com
```
