import { site } from "@/content/site";

const MAX = { prenom: 80, nom: 80, email: 160, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "";
// Une seule ligne, sans retour chariot : pour les champs qui finissent dans le sujet
const oneLine = (v: string) => v.replace(/\s+/g, " ");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Piège à robots : champ caché rempli, on fait semblant d'accepter
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const prenom = oneLine(clean(body.prenom, MAX.prenom));
  const nom = oneLine(clean(body.nom, MAX.nom));
  const email = oneLine(clean(body.email, MAX.email));
  const message = clean(body.message, MAX.message);

  if (!prenom || !nom || !message || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const endpoint = process.env.RESEND_API_URL ?? "https://api.resend.com/emails";
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `Collectif Mistral <onboarding@resend.dev>`,
        to: [site.email],
        reply_to: email,
        subject: `Message du site : ${prenom} ${nom}`,
        text: `${message}\n\n${prenom} ${nom}\n${email}`,
      }),
    });
    if (!res.ok) {
      return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch {
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
