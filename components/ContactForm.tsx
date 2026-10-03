"use client";

import { useState } from "react";
import { site } from "@/content/site";

/**
 * V1 sans backend : le formulaire compose un email prérempli vers
 * l'adresse du collectif. À remplacer par Formspree/Resend plus tard.
 */
export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact site — ${nom || "photographe"}`);
    const body = encodeURIComponent(`${message}\n\n— ${nom}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact reveal" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        aria-label="Nom"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email"
      />
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-label="Votre message"
      />
      <button type="submit" className="btn primary" style={{ alignSelf: "flex-start", marginTop: 6 }}>
        Envoyer
      </button>
      <p className="contact-note">
        Le bouton ouvre votre client mail — ou écrivez-nous directement à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </form>
  );
}
