"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Copy } from "@/content/types";
import SiteTools from "@/components/SiteTools";

type Props = {
  nav: Copy["nav"];
  instagramUrl: string;
  altLangHref: string;
  /** "home" : sections + menu mobile. "simple" : logo et outils seulement (pages légales). */
  variant?: "home" | "simple";
  homeHref?: string;
};

export default function Nav({ nav, instagramUrl, altLangHref, variant = "home", homeHref = "/" }: Props) {
  const isHome = variant === "home";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) return;
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
  }, [isHome, nav.links]);

  // Menu mobile : fige le défilement, Échap ferme, le focus reste dans le menu
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("menu-open");
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const close = () => {
      setOpen(false);
      burgerRef.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const links = menuRef.current?.querySelectorAll<HTMLElement>("a");
      if (!links?.length) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        logoRef.current?.focus();
      } else if (e.shiftKey && document.activeElement === logoRef.current) {
        e.preventDefault();
        last.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        burgerRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <>
      <nav className={solid ? "scrolled" : undefined} id="siteNav">
        <a
          ref={logoRef}
          href={isHome ? "#hero" : homeHref}
          className="logo-mark"
          aria-label={nav.homeLabel}
          onClick={() => setOpen(false)}
        >
          <Image src="/logo.png" alt="" width={40} height={40} />
          <span className="logo-word">Mistral</span>
        </a>
        {isHome && (
          <div className="nav-links">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? "active" : undefined}
                aria-current={active === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        <div className="nav-right">
          <SiteTools nav={nav} instagramUrl={instagramUrl} altLangHref={altLangHref} />
          {isHome && (
            <button
              ref={burgerRef}
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.menuClose : nav.menuOpen}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
      </nav>
      {isHome && open && (
        <div id="mobile-menu" className="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label={nav.menuLabel}>
          <ul>
            {nav.links.map((link, i) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  <span className="mm-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
