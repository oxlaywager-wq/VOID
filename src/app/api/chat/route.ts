import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Tu es l'assistant IA de VOID, une agence digitale premium spécialisée dans la création de sites web sur mesure avec intelligence artificielle intégrée.

Ton rôle : aider les visiteurs à comprendre nos services, répondre à leurs questions, et les guider vers un premier contact.

À propos de VOID :
- Agence de création de sites web premium et performants
- Spécialité : design moderne, motion design, 3D interactif, IA intégrée
- Clients : startups, PME, créateurs de marque ambitieux
- Délais typiques : 2 à 6 semaines selon le projet
- Contact : hello@void.agency

Services proposés :
- Sites vitrine premium (à partir de 1 500€)
- E-commerce sur mesure (à partir de 3 000€)
- Intégration IA (chatbots, automatisations)
- Design system & branding digital
- Maintenance et support mensuel

Ton style : professionnel mais chaleureux, concis, jamais robotique. Réponds en français sauf si on te parle dans une autre langue. Max 3 phrases par réponse sauf si on te pose une question détaillée. Invite naturellement à prendre contact via hello@void.agency ou le formulaire de contact si le visiteur semble intéressé.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const stream = client.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Erreur serveur" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
