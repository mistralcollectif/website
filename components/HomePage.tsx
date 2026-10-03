import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import FormatArt from "@/components/FormatArt";
import { getCopy } from "@/content";
import type { Lang } from "@/content/types";
import { site, heroPhotos, genericPhotoAlt, membres } from "@/content/site";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = getCopy(lang);
  const photos = heroPhotos.map((p) => ({
    src: p.src,
    alt: p.alt?.[lang] ?? genericPhotoAlt[lang],
  }));

  // Données structurées pour moteurs de recherche et agents IA
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: lang === "en" ? `${site.url}/en` : site.url,
    email: site.email,
    description: t.meta.jsonLdDescription,
    inLanguage: lang,
    sameAs: [site.instagram],
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marseille",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Nav lang={lang} nav={t.nav} />

      {/* HERO */}
      <section id="hero">
        <HeroSlideshow photos={photos} />
        <svg className="wind-lines" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <path className="w1" d="M-100 200 C 200 150, 400 260, 700 190 S 1100 140, 1300 210" />
          <path className="w2" d="M-100 420 C 250 380, 500 480, 800 400 S 1150 350, 1300 430" />
          <path className="w3" d="M-100 620 C 300 570, 550 660, 850 590 S 1150 560, 1300 610" />
        </svg>
        <div className="hero-content">
          <h1 className="reveal in-view">
            {t.hero.title[0]}
            <br />
            {t.hero.title[1]}
          </h1>
          <p className="hero-tagline reveal in-view">{t.hero.tagline}</p>
          <div className="hero-cta reveal in-view">
            <a href={t.hero.ctaPrimary.href} className="btn primary">
              {t.hero.ctaPrimary.label}
            </a>
            <a href={t.hero.ctaSecondary.href} className="btn">
              {t.hero.ctaSecondary.label}
            </a>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="line"></span>
        </div>
      </section>

      {/* MANIFESTE */}
      <section id="manifeste">
        <span className="eyebrow reveal">{t.manifeste.eyebrow}</span>
        <p className="manifesto-quote reveal">
          {t.manifeste.quote.before}
          <em>{t.manifeste.quote.em}</em>
          {t.manifeste.quote.after}
        </p>
        <div className="manifesto-body">
          {t.manifeste.paragraphs.map((p, i) => (
            <p key={i} className="reveal">
              {p}
            </p>
          ))}
        </div>
        <div className="pillars">
          {t.manifeste.pillars.map((pillar) => (
            <div key={pillar.num} className="pillar reveal">
              <span className="num">{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPOSITIONS */}
      <section id="expositions">
        <div className="section-head">
          <h2 className="reveal">{t.expositions.title}</h2>
          <p className="reveal">{t.expositions.intro}</p>
        </div>
        <div className="formats">
          {t.expositions.formats.map((f) => (
            <article key={f.num} className="format reveal">
              <span className="num">{f.num}</span>
              <FormatArt art={f.art} />
              <span className="format-kind">{f.kind}</span>
              <h3>{f.name}</h3>
              <p className="format-principe">{f.principe}</p>
              <dl>
                <dt>{t.expositions.whoLabel}</dt>
                <dd>{f.pour}</dd>
                <dt>{t.expositions.nextLabel}</dt>
                <dd className={f.statut.upcoming ? "upcoming" : undefined}>{f.statut.label}</dd>
              </dl>
              {f.cta && (
                <a
                  href={site.instagram}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {f.cta.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* WORKSHOPS */}
      <section id="workshops">
        <div className="section-head">
          <h2 className="reveal">{t.workshops.title}</h2>
          <p className="reveal">{t.workshops.intro}</p>
        </div>
        <div className="workshop-list">
          {t.workshops.items.map((w) => (
            <div key={w.idx} className="workshop-row reveal">
              <span className="idx">{w.idx}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
              <span className="when">{w.when}</span>
              <span className="arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBRES */}
      <section id="membres">
        <div className="section-head">
          <h2 className="reveal">{t.membres.title}</h2>
          <p className="reveal">{t.membres.intro}</p>
        </div>
        <div className="members-grid">
          {membres.map((member) => (
            <div key={member.prenom} className="member-card reveal">
              <div className="member-portrait">
                {member.portrait ? (
                  <Image
                    src={member.portrait}
                    alt={t.membres.portraitAlt(member.prenom)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="member-placeholder" aria-hidden="true">
                    {member.prenom.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="member-name">{member.prenom}</h3>
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  className="member-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.membres.instagramLabel(member.prenom)}
                >
                  @{member.instagram}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* REJOINDRE */}
      <section id="rejoindre">
        <div className="section-head">
          <h2 className="reveal">{t.rejoindre.title}</h2>
          <p className="reveal">{t.rejoindre.intro}</p>
        </div>
        <div className="contact-actions reveal">
          <a
            href={site.instagramDM}
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.rejoindre.instagramCta}
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            {site.email}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-row">
          <div className="footer-links" aria-label={t.footer.navLabel}>
            {t.nav.links.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="footer-insta"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.instagramLabel} {site.instagramHandle}
          </a>
        </div>
      </footer>
    </>
  );
}
