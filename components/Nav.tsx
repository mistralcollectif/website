"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { Copy, Lang } from "@/content/types";

const THEME_IDS = ["mistral", "lumiere"] as const;

const LANGS: { id: Lang; label: string; href: string }[] = [
  { id: "fr", label: "FR", href: "/" },
  { id: "en", label: "EN", href: "/en" },
];

// Le thème vit sur <html data-theme> (posé avant l'hydratation par le script du layout)
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const readTheme = () => document.documentElement.getAttribute("data-theme") ?? "lumiere";
const serverTheme = () => "lumiere";

export default function Nav({ lang, nav }: { lang: Lang; nav: Copy["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const theme = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);

  useEffect(() => {
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
    nav.links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [nav.links]);

  const setTheme = (id: string) => {
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem("cm-theme", id);
    } catch {}
  };

  // Change de langue en restant sur la même section
  const switchLang = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    window.location.assign(href + window.location.hash);
  };

  return (
    <nav className={scrolled ? "scrolled" : undefined} id="siteNav">
      <a href="#hero" className="logo-mark" aria-label={nav.homeLabel}>
        <Image src="/logo.png" alt="" width={40} height={40} />
        <span className="logo-word">Mistral</span>
      </a>
      <div className="nav-links">
        {nav.links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="nav-tools">
        <div className="lang-switch" role="group" aria-label={nav.langGroupLabel}>
          {LANGS.map((l, i) => (
            <span key={l.id}>
              {i > 0 && <span className="lang-sep" aria-hidden="true">/</span>}
              <a
                href={l.href}
                lang={l.id}
                hrefLang={l.id}
                aria-current={lang === l.id ? "true" : undefined}
                className={lang === l.id ? "active" : undefined}
                onClick={lang === l.id ? undefined : (e) => switchLang(e, l.href)}
              >
                {l.label}
              </a>
            </span>
          ))}
        </div>
        <div className="theme-switch" role="group" aria-label={nav.themeGroupLabel}>
          {THEME_IDS.map((id) => (
            <button
              key={id}
              type="button"
              className={`theme-dot${theme === id ? " active" : ""}`}
              data-theme={id}
              title={nav.themes[id]}
              aria-label={nav.themes[id]}
              aria-pressed={theme === id}
              onClick={() => setTheme(id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
