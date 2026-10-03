// Contenu éditorial du site — source : Notion "Mistral Collectif"
// (Brief .md + Manifeste synthèse v3 + page Expos, juillet 2026).
// Modifier ici, jamais dans les composants.

export const site = {
  name: "Collectif Mistral",
  email: "mistralcollectif@gmail.com",
  instagram: "https://www.instagram.com/mistral.collectif",
  instagramHandle: "@mistral.collectif",
  formspreeEndpoint: "https://formspree.io/f/XXXXXXX", // Public endpoint, pas de secret
};

export const hero = {
  // Photos plein cadre en alternance (fichiers dans public/photos/accueil/)
  photos: [
    { src: "/photos/accueil/mistral_main_page.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_2.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_3.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-2.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-3.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-4.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-5.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-6.jpg", alt: "Photographie du collectif Mistral" },
  ],
  eyebrow: "Association loi 1901 — Marseille",
  title: ["Collectif", "Mistral"],
  tagline:
    "Un vent nouveau souffle sur la photographie marseillaise. Nous réunissons des photographes, organisons des expositions et des workshops, et faisons de la lumière une affaire collective.",
  ctaPrimary: { label: "Rejoindre le collectif", href: "#rejoindre" },
  ctaSecondary: { label: "Voir les expositions", href: "#expositions" },
};

export const manifeste = {
  eyebrow: "Notre manifeste",
  // Grande citation — la ligne signature du manifeste v3
  quote: {
    before: "Sous le mistral, ",
    em: "une scène commune",
    after: " émerge.",
  },
  // Extraits du Manifeste — synthèse (Hugo + David, v3)
  paragraphs: [
    "Photographier, c'est poser un regard : s'arrêter l'espace d'un instant, figer une scène dans le temps, prendre du recul sur le monde pour donner une forme à la vision qu'on en a. L'exercice paraît solitaire ; il devient très vite collectif. On confronte les idées comme les réglages, les lumières comme les cadrages. On apprend en partageant, et on vibre autant devant le travail des autres que derrière son propre viseur.",
    "Marseille est pleine de photographes, chacun avec son regard et son univers, qui ne se croisent presque jamais. Mistral est né pour changer ça : argentique ou numérique, rue ou calanques, chacun garde sa langue, mais nous regardons dans la même direction — vers la ville et le sauvage, vers le vivant qui tient debout dans le vent.",
  ],
  pillars: [
    {
      num: "01",
      title: "Communauté",
      text: "Des photographes marseillais, aguerris ou débutants, qui marchent ensemble, relisent leurs portfolios et étalent les images sur la table pour garder celles qui tiennent.",
    },
    {
      num: "02",
      title: "Expositions",
      text: "Des expositions Grand Angle qui mettent en lumière les photographes anonymes de la ville autour d'un thème commun, et des Cartes Blanches où les membres présentent leurs séries personnelles.",
    },
    {
      num: "03",
      title: "Workshops",
      text: "Des ateliers pratiques — photo walks, revues de portfolio, argentique, post-traitement — animés par des membres et des invités.",
    },
  ],
};

export type Expo = {
  tag: string;
  title: string;
  meta: string;
  // Placeholder picsum en attendant la Selecta — remplacer par /photos/…
  image: string;
  alt: string;
};

export const expositions = {
  intro:
    "Entre membres et en participation libre, nos expositions donnent à voir la diversité des regards marseillais.",
  items: [
    {
      tag: "À venir — Octobre 2026",
      title: "Grand Angle #1",
      meta: "Thème : regard sur la Méditerranée · Vertigo ou Jeanne Barret, Marseille",
      image: "https://picsum.photos/seed/mistral01/700/900",
      alt: "Exposition Grand Angle #1 — photo à venir",
    },
    {
      tag: "À venir — Décembre 2026",
      title: "Grand Angle #2",
      meta: "Exposition collective · thème et lieu à annoncer",
      image: "https://picsum.photos/seed/mistral02/700/900",
      alt: "Exposition Grand Angle #2 — photo à venir",
    },
    {
      tag: "Appel ouvert",
      title: "Appel à projets",
      meta: "Photographes marseillais, proposez une série · candidatures via Instagram",
      image: "https://picsum.photos/seed/mistral03/700/900",
      alt: "Appel à projets du Collectif Mistral — photo à venir",
    },
  ] satisfies Expo[],
};

export const workshops = {
  intro:
    "Des ateliers pour progresser, expérimenter et partager des techniques, animés par des membres du collectif.",
  items: [
    {
      idx: "01",
      title: "Photo walks",
      text: "Sorties terrain dans les quartiers de Marseille, retour collectif sur les images produites.",
    },
    {
      idx: "02",
      title: "Revue de portfolio",
      text: "On étale les images sur la table, on garde celles qui tiennent, on construit des séries qui racontent.",
    },
    {
      idx: "03",
      title: "Argentique & labo",
      text: "Initiation à la prise de vue argentique et au développement en laboratoire noir & blanc.",
    },
    {
      idx: "04",
      title: "Post-traitement",
      text: "Retouche et étalonnage pour construire une identité visuelle cohérente sur une série.",
    },
  ],
};

export type Member = {
  prenom: string;
  portrait: string; // /photos/membres/prenom.jpg
  style: string;
  instagram?: string; // handle sans @
};

export const membres = {
  intro:
    "Des photographes marseillais qui partagent un regard, des techniques et l'amour de la lumière du Sud.",
  items: [
    {
      prenom: "Hugo",
      portrait: "https://picsum.photos/seed/hugo-mistral/400/533", // placeholder — remplacer par /photos/membres/hugo.jpg
      style: "Rue et lumière urbaine",
      instagram: "hugo.photo",
    },
    {
      prenom: "David",
      portrait: "/photos/membres/david.jpg",
      style: "Argentique et portraits",
      instagram: "david.analog",
    },
    {
      prenom: "Marie",
      portrait: "https://picsum.photos/seed/marie-mistral/400/533",
      style: "Paysages méditerranéens",
      instagram: "marie.mediterranee",
    },
    {
      prenom: "Lucas",
      portrait: "https://picsum.photos/seed/lucas-mistral/400/533",
      style: "Architecture et géométrie",
      instagram: "lucas.frames",
    },
  ] satisfies Member[],
};

export const rejoindre = {
  title: "Rejoindre le Mistral",
  options: [
    {
      title: "Devenir membre",
      text: "Adhésion annuelle, accès aux expositions, workshops et à la communauté.",
      cta: { label: "Adhérer →", href: `mailto:${site.email}?subject=Adhésion au Collectif Mistral` },
    },
    {
      title: "Proposer une exposition",
      text: "Photographe marseillais, soumettez une série pour un appel ouvert.",
      cta: { label: "Candidater →", href: site.instagram },
    },
    {
      title: "S'inscrire à un workshop",
      text: "Places limitées, priorité aux membres puis ouverture au public.",
      cta: { label: "Voir le calendrier →", href: site.instagram },
    },
  ],
};

export const footer = {
  identity: ["Association loi 1901", "Marseille, France"],
  nav: [
    { label: "Manifeste", href: "#manifeste" },
    { label: "Expositions", href: "#expositions" },
    { label: "Workshops", href: "#workshops" },
    { label: "Membres", href: "#membres" },
  ],
  copyright: `© ${new Date().getFullYear()} Collectif Mistral — tous droits réservés`,
};
