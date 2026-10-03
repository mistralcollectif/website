"use client";

import { useState } from "react";
import { site } from "@/content/site";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-spam honeypot
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam : si le honeypot est rempli, rejeter silencieusement
    if (honeypot) {
      setStatus("success");
      return;
    }

    // Empêcher double submit
    if (submitting) return;

    setSubmitting(true);
    setStatus("loading");

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setNom("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  // État de succès
  if (status === "success") {
    return (
      <div className="contact-success reveal in-view">
        <div className="success-icon">✓</div>
        <h3>Message envoyé</h3>
        <p>On vous répond vite.</p>
      </div>
    );
  }

  // État d'erreur
  if (status === "error") {
    return (
      <div className="contact-error reveal in-view">
        <h3>Erreur d'envoi</h3>
        <p>
          Une erreur s'est produite. Écrivez-nous directement à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <button
          type="button"
          className="btn"
          onClick={() => setStatus("idle")}
          style={{ marginTop: 16 }}
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <form className="contact reveal" onSubmit={onSubmit}>
      {/* Honeypot anti-spam (caché) */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        aria-label="Nom"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email"
        required
      />
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-label="Votre message"
        required
      />
      <button
        type="submit"
        className="btn primary"
        disabled={status === "loading"}
        style={{ alignSelf: "flex-start", marginTop: 6 }}
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}
