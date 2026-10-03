// Contenu éditorial du site — source : Notion "Mistral Collectif"
// (Brief .md + Manifeste synthèse v3 + page Expos, juillet 2026).
// Modifier ici, jamais dans les composants.

export const site = {
  name: "Collectif Mistral",
  email: "mistralcollectif@gmail.com",
  instagram: "https://www.instagram.com/mistral.collectif",
  instagramHandle: "@mistral.collectif",
  instagramDM: "https://ig.me/m/mistral.collectif", // conversation directe
  url: "https://mistral-collectif.vercel.app",
};

export const hero = {
  // Photos plein cadre en alternance (fichiers dans public/photos/accueil/)
  photos: [
    { src: "/photos/accueil/0036-rade-de-marseille.jpg", alt: "Proue d'un bateau pneumatique vers un fort insulaire dans la rade de Marseille, noir et blanc argentique" },
    { src: "/photos/accueil/mistral_main_page.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_2.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_3.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/cite-radieuse.jpg", alt: "Toit-terrasse de la Cité Radieuse à Marseille, pilier central et collines au loin, noir et blanc" },
    { src: "/photos/accueil/mistral_main_page_4.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-2.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-3.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/glacier.jpg", alt: "Glacier accroché à une paroi rocheuse sombre, noir et blanc contrasté" },
    { src: "/photos/accueil/mistral_main_page_4-4.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-5.jpg", alt: "Photographie du collectif Mistral" },
    { src: "/photos/accueil/mistral_main_page_4-6.jpg", alt: "Photographie du collectif Mistral" },
  ],
  title: ["Collectif", "Mistral"],
  tagline:
    "Collectif de photographes à Marseille. Expositions, workshops, revues de portfolio.",
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

export type ExpoFormat = {
  num: string;
  kind: string; // "Exposition collective"
  name: string;
  principe: string;
  pour: string;
  statut: { label: string; upcoming: boolean };
  cta?: { label: string; href: string };
};

// Sources : Notion > Expos (Expo #1 Grand Angle, Expo #2 Carte Blanche) + Manifeste.
// Thème et lieu de Grand Angle #1 ne sont PAS arrêtés : ne rien annoncer ici
// tant que le collectif n'a pas tranché.
export const expositions = {
  intro:
    "On montre des photos sur des murs, ensemble. Deux formats : Grand Angle, une exposition collective autour d'un thème commun, et Carte Blanche, l'exposition personnelle d'un membre. Des appels à projets ouvrent les murs aux autres photographes de la ville.",
  formats: [
    {
      num: "01",
      kind: "Exposition collective",
      name: "Grand Angle",
      principe:
        "Un thème commun, beaucoup de regards différents. Chaque photographe l'interprète à sa manière (rue, paysage, portrait, abstrait) et les images s'accrochent ensemble sur les mêmes murs.",
      pour: "Les membres, des artistes invités et des photographes de la ville, y compris ceux qu'on ne connaît pas encore.",
      statut: { label: "Prochaine édition : décembre 2026, Marseille. Thème à annoncer.", upcoming: true },
    },
    {
      num: "02",
      kind: "Exposition personnelle",
      name: "Carte Blanche",
      principe:
        "Pas de thème imposé. Un membre du collectif présente une série personnelle et travaillée, celle de son choix.",
      pour: "Les membres du collectif.",
      statut: { label: "Date à annoncer.", upcoming: false },
    },
    {
      num: "03",
      kind: "Ouvert à tous les photographes marseillais",
      name: "Appel à projets",
      principe:
        "Pour accrocher tes images dans un Grand Angle sans être membre. L'appel est lancé sur Instagram et précise le thème, les dates et la façon de candidater.",
      pour: "Tous les photographes marseillais, débutants ou confirmés, en argentique comme en numérique.",
      statut: { label: "Les appels sont annoncés sur Instagram.", upcoming: false },
      cta: { label: "Suivre les appels →", href: site.instagram },
    },
  ] satisfies ExpoFormat[],
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
  portrait?: string; // /photos/membres/prenom.jpg — absent = placeholder
  style: string;
  instagram?: string; // handle sans @
};

export const membres = {
  intro:
    "Des photographes marseillais qui partagent un regard, des techniques et l'amour de la lumière du Sud.",
  items: [
    {
      prenom: "Hugo",
      portrait: "/photos/membres/hugo.jpg",
      style: "Rue et lumière urbaine",
      instagram: "101_neo",
    },
    {
      prenom: "David",
      portrait: "/photos/membres/david.jpg",
      style: "Argentique et portraits",
      instagram: "davidperiers",
    },
    {
      prenom: "Jocelyn",
      portrait: "/photos/membres/jocelyn.jpg",
      // style à compléter
      style: "Portrait à venir",
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
