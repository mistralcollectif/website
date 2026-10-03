export type Lang = "fr" | "en";

export type ExpoFormat = {
  num: string;
  art: "grand-angle" | "carte-blanche" | "appel";
  kind: string;
  name: string;
  principe: string;
  pour: string;
  statut: { label: string; upcoming: boolean };
  cta?: { label: string };
};

export type LegalSection = { title: string; paragraphs: string[] };

export type Copy = {
  lang: Lang;
  ogLocale: string;
  routes: {
    home: string;
    legal: string;
    altHome: string;
    altLegal: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
    jsonLdDescription: string;
  };
  nav: {
    homeLabel: string;
    links: { id: string; label: string }[];
    skip: string;
    menuOpen: string;
    menuClose: string;
    menuLabel: string;
    instagramLabel: string;
    langSwitchLabel: string;
    altLangCode: string;
    themeToDark: string;
    themeToLight: string;
  };
  hero: {
    title: [string, string];
    tagline: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    pauseLabel: string;
    playLabel: string;
  };
  manifeste: {
    eyebrow: string;
    quote: { before: string; em: string; after: string };
    paragraphs: string[];
    pillars: { num: string; title: string; text: string; href: string }[];
  };
  expositions: {
    title: string;
    intro: string;
    whoLabel: string;
    nextLabel: string;
    formats: ExpoFormat[];
  };
  workshops: {
    title: string;
    intro: string;
    items: { idx: string; title: string; text: string; when: string }[];
  };
  membres: {
    title: string;
    intro: string;
    portraitAlt: (prenom: string) => string;
    instagramLabel: (prenom: string) => string;
    portfolioLabel: (prenom: string) => string;
  };
  rejoindre: {
    title: string;
    intro: string;
    instagramCta: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      errorText: string;
      privacyBefore: string;
      privacyLink: string;
      privacyAfter: string;
    };
  };
  footer: {
    navLabel: string;
    legalLabel: string;
  };
  legal: {
    title: string;
    updated: string;
    backHome: string;
    sections: LegalSection[];
    formParagraph: string;
  };
  notFound: {
    title: string;
    text: string;
    home: string;
  };
};
