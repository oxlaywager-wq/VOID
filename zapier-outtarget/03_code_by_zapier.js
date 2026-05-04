// ============================================================
// Code by Zapier — Step 6
// Parse familles_list + normalise Oui/Non + prépare le Looping
// ============================================================
//
// INPUT FIELDS requis (à configurer dans Zapier) :
//   - raw_json     : {{step5.output}}  (JSON complet retourné par l'IA)
//   - familles_raw : {{step5.familles_list}}  (fallback si parsing partiel)
//

const rawJson = inputData.raw_json || "";
const famillesRaw = inputData.familles_raw || "";

// ── 1. Parse le JSON principal ────────────────────────────────────────────────

let data = {};

try {
  // Nettoie les blocs markdown au cas où l'IA en aurait ajouté
  const cleaned = rawJson
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  data = JSON.parse(cleaned);
} catch (e) {
  // Tentative de récupération avec regex si le JSON est partiellement cassé
  const match = rawJson.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      data = JSON.parse(match[0]);
    } catch (e2) {
      throw new Error(`JSON invalide : ${e2.message} — Reçu : ${rawJson.substring(0, 200)}`);
    }
  } else {
    throw new Error(`Aucun JSON trouvé dans : ${rawJson.substring(0, 200)}`);
  }
}

// ── 2. Normalise les valeurs Oui/Non/Non mentionné ───────────────────────────

function normalizeOuiNon(val) {
  if (!val && val !== 0) return "Non mentionné";
  const s = String(val).toLowerCase().trim();
  if (["oui", "yes", "true", "vrai", "1"].includes(s)) return "Oui";
  if (["non", "no", "false", "faux", "0"].includes(s)) return "Non";
  return "Non mentionné";
}

const certFields = ["fsc", "pefc", "ecovadis", "gots", "oeko_tex"];
certFields.forEach((field) => {
  data[field] = normalizeOuiNon(data[field]);
});

// ── 3. Parse familles_list ────────────────────────────────────────────────────

let famillesList = [];

if (Array.isArray(data.familles_list) && data.familles_list.length > 0) {
  // Cas normal : l'IA a retourné un tableau propre
  famillesList = data.familles_list;
} else if (typeof data.familles_list === "string") {
  // L'IA a retourné familles_list comme string JSON imbriquée
  try {
    famillesList = JSON.parse(data.familles_list);
  } catch (e) {
    famillesList = [{ famille: "Autres", sous_type: "", commentaire_produit: data.familles_list }];
  }
} else if (famillesRaw) {
  // Fallback sur le champ inputData.familles_raw
  try {
    famillesList = JSON.parse(famillesRaw);
  } catch (e) {
    famillesList = [{ famille: "Autres", sous_type: "", commentaire_produit: famillesRaw }];
  }
}

// Garantit qu'on a au moins une famille
if (!Array.isArray(famillesList) || famillesList.length === 0) {
  famillesList = [{ famille: "Autres", sous_type: "", commentaire_produit: "" }];
}

// Nettoie chaque entrée
famillesList = famillesList.map((f) => ({
  famille: (f.famille || "Autres").trim(),
  sous_type: (f.sous_type || "").trim(),
  commentaire_produit: (f.commentaire_produit || "").trim(),
}));

// ── 4. Construit l'output pour le Looping ────────────────────────────────────
//
// Looping by Zapier attend soit :
//   - Un champ "familles" contenant un tableau JSON (mode Line Items)
//   - Ou des champs séparés par virgule (moins fiable)
//
// On exporte le tableau sérialisé + les métadonnées fournisseur à plat.

output = {
  // Métadonnées fournisseur (réutilisées à chaque ligne du loop)
  fournisseur: data.fournisseur || "",
  statut: data.statut || "Inactif",
  contact_prenom_nom: data.contact_prenom_nom || "",
  email: data.email || "",
  site_web: data.site_web || "",
  pays: data.pays || "",
  continent: data.continent || "",
  conditions_livraison: data.conditions_livraison || "Non mentionné",
  port_depart: data.port_depart || "",
  fsc: data.fsc,
  pefc: data.pefc,
  ecovadis: data.ecovadis,
  gots: data.gots,
  oeko_tex: data.oeko_tex,
  score_total: String(data.score_total || ""),
  score_detail: data.score_detail || "",
  resume: data.resume || "",
  visite: data.visite || "Non",

  // familles_list sérialisé pour le Looping
  familles_json: JSON.stringify(famillesList),

  // Nombre de familles (debug)
  familles_count: String(famillesList.length),

  // Line items pour Looping by Zapier
  // Zapier détecte automatiquement les tableaux si on les passe en JSON string
  familles_famille: famillesList.map((f) => f.famille).join(",,,"),
  familles_sous_type: famillesList.map((f) => f.sous_type).join(",,,"),
  familles_commentaire: famillesList.map((f) => f.commentaire_produit).join(",,,"),
};
