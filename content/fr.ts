import type { Copy } from "./types";

// Thème et lieu de Grand Angle #1 ne sont PAS arrêtés : ne rien annoncer ici
// tant que le collectif n'a pas tranché (idées dans Notion > Expos).
export const fr: Copy = {
  lang: "fr",
  ogLocale: "fr_FR",
  meta: {
    title: "Collectif Mistral, photographes à Marseille",
    description:
      "Un vent nouveau souffle sur la photographie marseillaise. Collectif de photographes réunissant des artistes, organisant expositions et workshops autour de la lumière du Sud.",
    keywords: [
      "photographie",
      "Marseille",
      "collectif",
      "photographes",
      "exposition",
      "workshop",
      "argentique",
      "numérique",
    ],
    jsonLdDescription:
      "Collectif de photographes à Marseille : expositions Grand Angle et Cartes Blanches, appels à projets, workshops (marches photo, revues de portfolio, argentique, post-traitement).",
  },
  nav: {
    homeLabel: "Collectif Mistral, haut de page",
    links: [
      { id: "manifeste", label: "Manifeste" },
      { id: "expositions", label: "Expositions" },
      { id: "workshops", label: "Workshops" },
      { id: "membres", label: "Membres" },
      { id: "rejoindre", label: "Rejoindre" },
    ],
    themeGroupLabel: "Choisir l'ambiance du site",
    themes: { mistral: "Noir Mistral", lumiere: "Lumière du Sud" },
    langGroupLabel: "Langue",
  },
  hero: {
    title: ["Collectif", "Mistral"],
    tagline: "Collectif de photographes à Marseille. Expositions, workshops, revues de portfolio.",
    ctaPrimary: { label: "Rejoindre le collectif", href: "#rejoindre" },
    ctaSecondary: { label: "Voir les expositions", href: "#expositions" },
  },
  manifeste: {
    eyebrow: "Notre manifeste",
    quote: {
      before: "Sous le mistral, ",
      em: "une scène commune",
      after: " émerge.",
    },
    paragraphs: [
      "Photographier, c'est éveiller son regard. Une image commence bien avant le déclenchement, et finit rarement avec lui. Apprendre à voir ce qui passe inaperçu, puis choisir ce qu'on garde dans le cadre et ce qu'on laisse hors-champ.",
      "L'exercice paraît solitaire ; il devient très vite collectif. Un regard se forme au contact d'autres regards : on s'y reconnaît, on s'y oppose, on le déplace.",
      "Mistral réunit des photographes aux sensibilités et aux pratiques différentes. Ce qui nous relie n'est pas un style, mais une attention : au cadre, à la lumière, au bon moment. On montre, on discute, on expose, jusqu'à ce que chaque série trouve sa forme.",
    ],
    pillars: [
      {
        num: "01",
        title: "Expositions",
        text: "Grand Angle réunit, autour d'un thème commun, les photographes de la ville, connus ou non. Cartes Blanches laisse à chaque membre un mur pour sa propre série.",
      },
      {
        num: "02",
        title: "Workshops",
        text: "Marches photo, revues de portfolio, argentique, post-traitement. Des ateliers pratiques animés par des membres et des invités.",
      },
    ],
  },
  expositions: {
    title: "Expositions",
    intro:
      "On montre des photos sur des murs, ensemble. Deux formats : Grand Angle, une exposition collective autour d'un thème commun, et Carte Blanche, l'exposition personnelle d'un membre. Des appels à projets ouvrent les murs aux autres photographes de la ville.",
    whoLabel: "Pour qui",
    nextLabel: "Prochainement",
    formats: [
      {
        num: "01",
        art: "grand-angle",
        kind: "Exposition collective",
        name: "Grand Angle",
        principe:
          "Un thème commun, beaucoup de regards différents. Chaque photographe l'interprète à sa manière (rue, paysage, portrait, abstrait) et les images s'accrochent ensemble sur les mêmes murs.",
        pour: "Les membres, des artistes invités et des photographes de la ville, y compris ceux qu'on ne connaît pas encore.",
        statut: { label: "Prochaine édition : décembre 2026, Marseille. Thème à annoncer.", upcoming: true },
      },
      {
        num: "02",
        art: "carte-blanche",
        kind: "Exposition personnelle",
        name: "Carte Blanche",
        principe:
          "Pas de thème imposé. Un membre du collectif présente une série personnelle et travaillée, celle de son choix.",
        pour: "Les membres du collectif.",
        statut: { label: "Date à annoncer.", upcoming: false },
      },
      {
        num: "03",
        art: "appel",
        kind: "Ouvert aux photographes marseillais",
        name: "Appel à projets",
        principe:
          "Pour accrocher tes images dans un Grand Angle sans être membre. L'appel est lancé sur Instagram et précise le thème, les dates et la façon de candidater.",
        pour: "Tous les photographes marseillais, débutants ou confirmés, en argentique comme en numérique.",
        statut: { label: "Les appels sont annoncés sur Instagram.", upcoming: false },
        cta: { label: "Suivre les appels →" },
      },
    ],
  },
  workshops: {
    title: "Workshops",
    intro:
      "Des ateliers pour progresser, expérimenter et partager des techniques, animés par des membres du collectif.",
    items: [
      {
        idx: "01",
        title: "Photo walks",
        text: "Sorties terrain dans les quartiers de Marseille, retour collectif sur les images produites.",
        when: "Prochainement",
      },
      {
        idx: "02",
        title: "Revue de portfolio",
        text: "On étale les images sur la table, on garde celles qui tiennent, on construit des séries qui racontent.",
        when: "Prochainement",
      },
      {
        idx: "03",
        title: "Argentique & labo",
        text: "Initiation à la prise de vue argentique et au développement en laboratoire noir & blanc.",
        when: "Prochainement",
      },
      {
        idx: "04",
        title: "Post-traitement",
        text: "Retouche et étalonnage pour construire une identité visuelle cohérente sur une série.",
        when: "Prochainement",
      },
    ],
  },
  membres: {
    title: "Les membres",
    intro:
      "Des photographes marseillais qui partagent un regard, des techniques et l'amour de la lumière du Sud.",
    portraitAlt: (prenom) => `Portrait de ${prenom}, photographe du Collectif Mistral`,
    instagramLabel: (prenom) => `Instagram de ${prenom}`,
  },
  rejoindre: {
    title: "Rejoindre le Mistral",
    intro:
      "Pour rejoindre le collectif, proposer une série ou participer à un workshop, le plus direct est de nous écrire.",
    instagramCta: "Nous écrire sur Instagram",
  },
  footer: {
    navLabel: "Navigation",
    instagramLabel: "Instagram",
  },
};
