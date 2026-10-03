import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import {
  site,
  hero,
  manifeste,
  expositions,
  workshops,
  membres,
  rejoindre,
  footer,
} from "@/content/site";

// Données structurées pour moteurs de recherche et agents IA
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description:
    "Association de photographes à Marseille : expositions Grand Angle et Cartes Blanches, workshops (photo walks, revues de portfolio, argentique, post-traitement), communauté ouverte aux photographes marseillais.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Nav />

      {/* HERO */}
      <section id="hero">
        <HeroSlideshow photos={hero.photos} />
        <svg className="wind-lines" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <path className="w1" d="M-100 200 C 200 150, 400 260, 700 190 S 1100 140, 1300 210" />
          <path className="w2" d="M-100 420 C 250 380, 500 480, 800 400 S 1150 350, 1300 430" />
          <path className="w3" d="M-100 620 C 300 570, 550 660, 850 590 S 1150 560, 1300 610" />
        </svg>
        <div className="hero-content">
          <h1 className="reveal in-view">
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>
          <p className="hero-tagline reveal in-view">{hero.tagline}</p>
          <div className="hero-cta reveal in-view">
            <a href={hero.ctaPrimary.href} className="btn primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn">
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
        <div className="scroll-cue">
          <span className="line"></span> Scroll
        </div>
      </section>

      {/* MANIFESTE */}
      <section id="manifeste">
        <span className="eyebrow reveal">{manifeste.eyebrow}</span>
        <p className="manifesto-quote reveal">
          {manifeste.quote.before}
          <em>{manifeste.quote.em}</em>
          {manifeste.quote.after}
        </p>
        <div className="manifesto-body">
          {manifeste.paragraphs.map((p, i) => (
            <p key={i} className="reveal">
              {p}
            </p>
          ))}
        </div>
        <div className="pillars">
          {manifeste.pillars.map((pillar) => (
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
          <h2 className="reveal">Expositions</h2>
          <p className="reveal">{expositions.intro}</p>
        </div>
        <div className="formats">
          {expositions.formats.map((f) => (
            <article key={f.num} className="format reveal">
              <span className="num">{f.num}</span>
              <span className="format-kind">{f.kind}</span>
              <h3>{f.name}</h3>
              <p className="format-principe">{f.principe}</p>
              <dl>
                <dt>Pour qui</dt>
                <dd>{f.pour}</dd>
                <dt>Prochainement</dt>
                <dd className={f.statut.upcoming ? "upcoming" : undefined}>{f.statut.label}</dd>
              </dl>
              {f.cta && (
                <a
                  href={f.cta.href}
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
          <h2 className="reveal">Workshops</h2>
          <p className="reveal">{workshops.intro}</p>
        </div>
        <div className="workshop-list">
          {workshops.items.map((w) => (
            <div key={w.idx} className="workshop-row reveal">
              <span className="idx">{w.idx}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBRES */}
      <section id="membres">
        <div className="section-head">
          <h2 className="reveal">Les membres</h2>
          <p className="reveal">{membres.intro}</p>
        </div>
        <div className="members-grid">
          {membres.items.map((member) => (
            <div key={member.prenom} className="member-card reveal">
              <div className="member-portrait">
                {member.portrait ? (
                  <Image
                    src={member.portrait}
                    alt={`Portrait de ${member.prenom}, photographe du Collectif Mistral`}
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
              <p className="member-style">{member.style}</p>
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  className="member-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${member.prenom}`}
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
          <h2 className="reveal">{rejoindre.title}</h2>
        </div>
        <div className="join-grid">
          <div className="join-options">
            {rejoindre.options.map((option) => (
              <div key={option.title} className="join-option reveal">
                <div>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </div>
                <a
                  href={option.cta.href}
                  className="btn"
                  {...(option.cta.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {option.cta.label}
                </a>
              </div>
            ))}
          </div>
          <div className="contact-box reveal">
            <span className="eyebrow">Contact</span>
            <h3>Parler à quelqu'un du collectif</h3>
            <p>
              Le plus direct : écrivez-nous sur Instagram, on répond vite. Sinon,
              un mail arrive au même endroit.
            </p>
            <div className="contact-actions">
              <a
                href={site.instagramDM}
                className="btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nous écrire sur Instagram
              </a>
              <a href={`mailto:${site.email}`} className="btn">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-col">
            <h4>{site.name}</h4>
            <p>
              {footer.identity[0]}
              <br />
              {footer.identity[1]}
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            {footer.nav.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Suivre</h4>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram — {site.instagramHandle}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
        </div>
      </footer>
    </>
  );
}
