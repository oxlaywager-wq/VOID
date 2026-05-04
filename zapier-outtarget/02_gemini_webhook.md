# Gemini API — Configuration Webhook Zapier

Résout l'erreur : `Invalid JSON payload received. Unknown name "raw": Cannot find field`

---

## Cause du problème

Zapier envoyait probablement `{"raw": "..."}` dans le body au lieu du format officiel Gemini.

---

## Configuration correcte du Webhook Zapier (Step 4)

### Action : Webhooks by Zapier → POST

**URL :**
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=VOTRE_CLE_API
```

> Remplacez `VOTRE_CLE_API` par votre clé Google AI Studio

**Method :** POST

**Data Pass-Through :** Non

**Data (Body — à saisir en mode Raw/JSON) :**

```json
{
  "contents": [
    {
      "parts": [
        {
          "text": "VOTRE_PROMPT_ICI\n\n=== EMAIL ===\n{{step1.body_plain}}\n\n=== SITE WEB ===\n{{step3.body_text}}"
        }
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0,
    "responseMimeType": "application/json"
  }
}
```

**Headers :**
```
Content-Type: application/json
```

---

## Extraction de la réponse Gemini (Step 5)

La réponse Gemini a cette structure :
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "{\"fournisseur\": \"...\", ...}"
          }
        ]
      }
    }
  ]
}
```

Dans Zapier, le champ à utiliser pour le JSON est :
```
{{step4.candidates[0].content.parts[0].text}}
```

---

## Alternative : modèle Gemini 1.5 Pro (plus précis)

Remplacer dans l'URL :
```
gemini-1.5-flash  →  gemini-1.5-pro
```

Pro est plus fiable pour le JSON structuré, mais plus lent et plus cher.

---

## Test avec curl (pour valider votre clé API avant Zapier)

```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=VOTRE_CLE_API" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"parts": [{"text": "Retourne uniquement: {\"test\": \"ok\"}"}]}],
    "generationConfig": {"temperature": 0, "responseMimeType": "application/json"}
  }'
```
