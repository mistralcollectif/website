import type { Copy } from "./types";

export const fr: Copy = {
  lang: "fr",
  ogLocale: "fr_FR",
  routes: {
    home: "/",
    legal: "/mentions-legales",
    altHome: "/en",
    altLegal: "/en/legal",
  },
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
    skip: "Aller au contenu",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    menuLabel: "Menu principal",
    instagramLabel: "Instagram du collectif",
    langSwitchLabel: "Read the site in English",
    altLangCode: "EN",
    themeToDark: "Passer au thème sombre",
    themeToLight: "Passer au thème clair",
  },
  hero: {
    title: ["Collectif", "Mistral"],
    tagline: "Collectif de photographes à Marseille. Expositions, workshops, revues de portfolio.",
    ctaPrimary: { label: "Rejoindre le collectif", href: "#rejoindre" },
    ctaSecondary: { label: "Voir les expositions", href: "#expositions" },
    pauseLabel: "Mettre le diaporama en pause",
    playLabel: "Relancer le diaporama",
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
        href: "#expositions",
      },
      {
        num: "02",
        title: "Workshops",
        text: "Marches photo, revues de portfolio, argentique, post-traitement. Des ateliers pratiques animés par des membres et des invités.",
        href: "#workshops",
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
        statut: { label: "Première édition en décembre, thème « Mare Nostrum ». Lieu à définir.", upcoming: true },
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
    portfolioLabel: (prenom) => `Portfolio de ${prenom}`,
  },
  rejoindre: {
    title: "Rejoindre le Mistral",
    intro:
      "Pour rejoindre le collectif, proposer une série ou participer à un workshop, écrivez-nous.",
    instagramCta: "Notre page Instagram",
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      message: "Message",
      submit: "Envoyer",
      sending: "Envoi en cours",
      successTitle: "Message envoyé",
      successText: "Merci, on vous répond bientôt.",
      errorText: "Le message n'a pas pu partir. Écrivez-nous directement à",
      privacyBefore: "Vos informations servent uniquement à vous répondre. ",
      privacyLink: "Mentions légales",
      privacyAfter: ".",
    },
  },
  footer: {
    navLabel: "Navigation",
    legalLabel: "Mentions légales",
  },
  legal: {
    title: "Mentions légales et confidentialité",
    updated: "Dernière mise à jour : 3 octobre 2026",
    backHome: "Retour à l'accueil",
    sections: [
      {
        title: "Éditeur du site",
        paragraphs: [
          "Collectif Mistral, collectif de photographes basé à Marseille (France). Le collectif n'est pas, à ce jour, constitué en association.",
          "Le site est édité à titre non professionnel et sans but lucratif. Conformément à l'article 6, III, 2 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, l'éditeur a choisi de rester anonyme et ses coordonnées ont été communiquées à l'hébergeur.",
          "Contact : mistralcollectif@gmail.com",
        ],
      },
      {
        title: "Hébergeur",
        paragraphs: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Site : vercel.com"],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "Les photographies présentées sur ce site appartiennent à leurs auteurs. Toute reproduction ou réutilisation sans leur autorisation écrite est interdite.",
          "Les textes et le graphisme du site appartiennent au collectif.",
          "Si vous êtes l'auteur ou l'une des personnes visibles sur une photographie et souhaitez qu'elle soit retirée, écrivez-nous : nous traitons les demandes de retrait dans les meilleurs délais.",
        ],
      },
      {
        title: "Données personnelles",
        paragraphs: [
          "Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience ni de publicité et n'intègre aucun contenu de tiers. Les polices de caractères sont hébergées avec le site.",
          "Votre navigateur conserve uniquement, sur votre appareil, votre choix de thème clair ou sombre. Cette information ne nous est jamais transmise.",
          "Comme tout hébergeur, Vercel enregistre des journaux techniques (adresse IP, date, page demandée) pour assurer le fonctionnement et la sécurité du site. Voir la politique de confidentialité de Vercel.",
          "Si vous nous écrivez par email ou par message Instagram, nous utilisons vos informations uniquement pour vous répondre. Instagram est un service de Meta, soumis à sa propre politique de confidentialité.",
          "Vos messages ne sont pas conservés plus longtemps que nécessaire pour traiter votre demande, sauf si vous rejoignez le collectif.",
          "Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour l'exercer, écrivez à mistralcollectif@gmail.com. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).",
        ],
      },
    ],
    formParagraph:
      "Si vous utilisez le formulaire de contact, votre prénom, votre nom, votre adresse email et votre message sont envoyés par email au collectif, via le service d'envoi Resend, pour vous répondre. Ils ne sont pas enregistrés sur le site.",
  },
  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
  },
};
