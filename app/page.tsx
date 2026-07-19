export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 pt-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <h1
                className="font-display font-black uppercase tracking-tighter leading-none mb-8"
                style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
              >
                Mistral
                <br />
                Collectif
              </h1>
              <p className="font-sans text-lg md:text-xl max-w-2xl leading-relaxed">
                Collectif photo basé à Marseille, argentique et numérique, sur invitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-6">
                À propos
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Mistral Collectif réunit des photographes passionnés à Marseille,
                  travaillant en argentique et numérique.
                </p>
                <p>
                  Un espace d'échange et de création, fonctionnant sur invitation,
                  où se croisent regards contemporains et techniques traditionnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-6">
                Contact
              </h2>
              <a
                href="mailto:contact@mistralcollectif.fr"
                className="inline-block text-mediterranee hover:underline text-lg md:text-xl font-medium transition-all"
              >
                contact@mistralcollectif.fr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-16 py-12 border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
              <p className="text-sm text-ink/60">
                © {new Date().getFullYear()} Mistral Collectif — Marseille
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
