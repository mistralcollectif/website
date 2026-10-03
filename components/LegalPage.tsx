import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import { getCopy } from "@/content";
import type { Lang } from "@/content/types";
import { site } from "@/content/site";
import { contactFormEnabled } from "@/lib/features";

// Rend l'adresse email des paragraphes comme un lien
function withEmailLink(text: string) {
  const parts = text.split(site.email);
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [part, <a key={i} href={`mailto:${site.email}`}>{site.email}</a>]
      : [part]
  );
}

export default function LegalPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang);

  // Le paragraphe sur le formulaire n'apparaît que si le formulaire existe
  const sections = t.legal.sections.map((section, idx) => {
    const isData = idx === t.legal.sections.length - 1;
    if (!isData || !contactFormEnabled) return section;
    const paragraphs = [...section.paragraphs];
    paragraphs.splice(3, 0, t.legal.formParagraph);
    return { ...section, paragraphs };
  });

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Nav
        variant="simple"
        homeHref={t.routes.home}
        nav={t.nav}
        instagramUrl={site.instagram}
        altLangHref={t.routes.altLegal}
      />
      <main id="main" className="legal">
        <h1>{t.legal.title}</h1>
        <p className="legal-updated">{t.legal.updated}</p>
        {sections.map((section) => (
          <section key={section.title} className="legal-section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{withEmailLink(p)}</p>
            ))}
          </section>
        ))}
        <a className="btn legal-back" href={t.routes.home}>
          {t.legal.backHome}
        </a>
      </main>
      <SiteFooter
        nav={t.nav}
        footer={t.footer}
        links={[{ label: t.legal.backHome, href: t.routes.home }]}
        legalHref={t.routes.legal}
        instagramUrl={site.instagram}
        altLangHref={t.routes.altLegal}
      />
    </>
  );
}
