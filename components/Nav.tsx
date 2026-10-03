"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const THEMES = [
  { id: "mistral", label: "Noir Mistral" },
  { id: "lumiere", label: "Lumière du Sud" },
  { id: "mediterranee", label: "Bleu Méditerranée" },
] as const;

const SECTIONS = ["manifeste", "expositions", "galerie", "workshops", "membres", "rejoindre"] as const;

const LINKS = [
  { id: "manifeste", label: "Manifeste" },
  { id: "expositions", label: "Expositions" },
  { id: "galerie", label: "Galerie" },
  { id: "workshops", label: "Workshops" },
  { id: "membres", label: "Membres" },
  { id: "rejoindre", label: "Rejoindre" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [theme, setThemeState] = useState("lumiere");

  useEffect(() => {
    // Resynchronise avec le thème posé avant hydratation (script inline du layout)
    setThemeState(document.documentElement.getAttribute("data-theme") ?? "lumiere");

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const setTheme = (id: string) => {
    document.documentElement.setAttribute("data-theme", id);
    setThemeState(id);
    try {
      localStorage.setItem("cm-theme", id);
    } catch {}
  };

  return (
    <nav className={scrolled ? "scrolled" : undefined} id="siteNav">
      <a href="#hero" className="logo-mark" aria-label="Collectif Mistral — haut de page">
        <Image src="/logo.png" alt="" width={40} height={40} />
        <span className="logo-word">Mistral</span>
      </a>
      <div className="nav-links">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="theme-switch" role="group" aria-label="Choisir une direction artistique">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`theme-dot${theme === t.id ? " active" : ""}`}
            data-theme={t.id}
            title={t.label}
            aria-label={t.label}
            aria-pressed={theme === t.id}
            onClick={() => setTheme(t.id)}
          />
        ))}
      </div>
    </nav>
  );
}
