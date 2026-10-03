import Image from "next/image";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import ContactForm from "@/components/ContactForm";
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

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      {/* HERO */}
      <section id="hero">
        <svg className="wind-lines" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <path className="w1" d="M-100 200 C 200 150, 400 260, 700 190 S 1100 140, 1300 210" />
          <path className="w2" d="M-100 420 C 250 380, 500 480, 800 400 S 1150 350, 1300 430" />
          <path className="w3" d="M-100 620 C 300 570, 550 660, 850 590 S 1150 560, 1300 610" />
        </svg>
        <div className="hero-content">
          <span className="eyebrow reveal in-view">{hero.eyebrow}</span>
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
        <div className="expo-grid">
          {expositions.items.map((expo) => (
            <div key={expo.title} className="expo-card reveal">
              <Image
                src={expo.image}
                alt={expo.alt}
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
              />
              <div className="expo-overlay">
                <span className="expo-tag">{expo.tag}</span>
                <h3>{expo.title}</h3>
                <p>{expo.meta}</p>
              </div>
            </div>
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
                <Image
                  src={member.portrait}
                  alt={`Portrait de ${member.prenom}, photographe du Collectif Mistral`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
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
          <ContactForm />
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
