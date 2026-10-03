"use client";

import { useSyncExternalStore } from "react";
import type { Copy } from "@/content/types";
import { InstagramIcon, MoonIcon, SunIcon } from "@/components/Icons";

// Le thème vit sur <html data-theme> (posé avant l'hydratation par le script du layout)
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const readTheme = () => document.documentElement.getAttribute("data-theme") ?? "lumiere";
const serverTheme = () => "lumiere";

type Props = {
  nav: Copy["nav"];
  instagramUrl: string;
  altLangHref: string;
};

/** Instagram, langue (l'autre langue), jour/nuit. Utilisé dans l'en-tête et le pied de page. */
export default function SiteTools({ nav, instagramUrl, altLangHref }: Props) {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);
  const isDark = theme === "mistral";

  const toggleTheme = () => {
    const next = isDark ? "lumiere" : "mistral";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cm-theme", next);
    } catch {}
  };

  // Change de langue en restant sur la même section
  const switchLang = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    window.location.assign(altLangHref + window.location.hash);
  };

  return (
    <div className="site-tools">
      <a
        className="tool"
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={nav.instagramLabel}
      >
        <InstagramIcon />
      </a>
      <span className="tool-sep" aria-hidden="true" />
      <a
        className="tool tool-lang"
        href={altLangHref}
        lang={nav.altLangCode.toLowerCase()}
        hrefLang={nav.altLangCode.toLowerCase()}
        aria-label={nav.langSwitchLabel}
        onClick={switchLang}
      >
        {nav.altLangCode}
      </a>
      <button
        type="button"
        className="tool"
        onClick={toggleTheme}
        aria-label={isDark ? nav.themeToLight : nav.themeToDark}
      >
        <SunIcon />
        <MoonIcon />
      </button>
    </div>
  );
}
