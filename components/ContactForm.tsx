"use client";

import { useState } from "react";
import Link from "next/link";
import type { Copy } from "@/content/types";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  copy: Copy["rejoindre"]["form"];
  email: string;
  legalHref: string;
};

export default function ContactForm({ copy, email, legalHref }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>{copy.successTitle}</h3>
        <p>{copy.successText}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-prenom">{copy.firstName}</label>
          <input id="cf-prenom" name="prenom" type="text" required maxLength={80} autoComplete="given-name" />
        </div>
        <div className="field">
          <label htmlFor="cf-nom">{copy.lastName}</label>
          <input id="cf-nom" name="nom" type="text" required maxLength={80} autoComplete="family-name" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-email">{copy.email}</label>
        <input id="cf-email" name="email" type="email" required maxLength={160} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="cf-message">{copy.message}</label>
        <textarea id="cf-message" name="message" required rows={5} maxLength={4000} />
      </div>
      {/* Piège à robots : invisible pour les humains, un robot le remplit */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && (
        <p className="form-error" role="alert">
          {copy.errorText} <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
      <div className="form-actions">
        <button type="submit" className="btn primary" disabled={status === "sending"}>
          {status === "sending" ? copy.sending : copy.submit}
        </button>
        <p className="form-note">
          {copy.privacyBefore}
          <Link href={legalHref}>{copy.privacyLink}</Link>
          {copy.privacyAfter}
        </p>
      </div>
    </form>
  );
}
