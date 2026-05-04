# Looping by Zapier — Configuration Step 7

## Problème racine

Le Looping ne fonctionnait pas car `familles_list` n'était pas parsé en
line items que Zapier comprend. Le Code by Zapier (Step 6) corrige ça.

---

## Configuration du Looping (Step 7)

### App : Looping by Zapier
### Action : Loop from Line Items

**Champs à configurer :**

| Champ Looping | Valeur (depuis Step 6)              |
|---------------|-------------------------------------|
| famille       | `{{step6.familles_famille}}`        |
| sous_type     | `{{step6.familles_sous_type}}`      |
| commentaire   | `{{step6.familles_commentaire}}`    |

> Le séparateur `,,,` dans le Code by Zapier est reconnu par Looping
> comme délimiteur de line items.

---

## Configuration Excel (Step 8 — dans la boucle)

### App : Microsoft Excel
### Action : Add Row

**Mapping des colonnes :**

| Colonne Excel          | Valeur Zapier                              |
|------------------------|--------------------------------------------|
| Fournisseur            | `{{step6.fournisseur}}`                    |
| Statut                 | `{{step6.statut}}`                         |
| Intérêt (score)        | `{{step6.score_total}}`                    |
| Continent              | `{{step6.continent}}`                      |
| Pays                   | `{{step6.pays}}`                           |
| Famille                | `{{step7.famille}}`  ← du Loop             |
| Sous-type              | `{{step7.sous_type}}`  ← du Loop           |
| Commentaire produit    | `{{step7.commentaire}}`  ← du Loop         |
| Contact commercial     | `{{step6.contact_prenom_nom}}`             |
| Mail                   | `{{step6.email}}`                          |
| Site web               | `{{step6.site_web}}`                       |
| Conditions livraison   | `{{step6.conditions_livraison}}`           |
| Port départ            | `{{step6.port_depart}}`                    |
| FSC                    | `{{step6.fsc}}`                            |
| PEFC                   | `{{step6.pefc}}`                           |
| Ecovadis               | `{{step6.ecovadis}}`                       |
| GOTS                   | `{{step6.gots}}`                           |
| OEKO-TEX               | `{{step6.oeko_tex}}`                       |
| Visite                 | `{{step6.visite}}`                         |

---

## Alternative si Looping ne parse pas les `,,,`

Si Zapier ne découpe pas correctement avec `,,,`, utilisez cette
approche dans Code by Zapier à la place des `.join(",,,")` :

```javascript
// Option B : Formatter + Utilities > Line Item Creator avant le Loop
// Dans ce cas, exporter chaque élément dans un champ indexé :

output.famille_0 = famillesList[0]?.famille || "";
output.famille_1 = famillesList[1]?.famille || "";
// etc.
```

Puis dans Looping, utiliser "Create Loop from Numbers" avec un index
et une étape Code qui lookup par index.

---

## Schéma du flux complet

```
Gmail Trigger
    ↓
Formatter : Extract URL
    ↓
Webhooks GET : Jina.ai scrape
    ↓
AI / Gemini : Analyse + JSON
    ↓
Formatter : Extract JSON (parse {{step4.output}})
    ↓
Code by Zapier : Parse + normalise Oui/Non + line items
    ↓
Looping : itère sur chaque famille
    ↓ (dans la boucle)
Excel : Add Row (1 ligne par famille)
```
