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

export type Copy = {
  lang: Lang;
  ogLocale: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    jsonLdDescription: string;
  };
  nav: {
    homeLabel: string;
    links: { id: string; label: string }[];
    themeGroupLabel: string;
    themes: { mistral: string; lumiere: string };
    langGroupLabel: string;
  };
  hero: {
    title: [string, string];
    tagline: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  manifeste: {
    eyebrow: string;
    quote: { before: string; em: string; after: string };
    paragraphs: string[];
    pillars: { num: string; title: string; text: string }[];
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
  };
  rejoindre: {
    title: string;
    intro: string;
    instagramCta: string;
  };
  footer: {
    navLabel: string;
    instagramLabel: string;
  };
};
