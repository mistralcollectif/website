// Données communes aux deux langues. Les textes vivent dans content/fr.ts
// et content/en.ts : toute modification de texte se fait là, jamais dans les
// composants.

export const site = {
  name: "Collectif Mistral",
  email: "mistralcollectif@gmail.com",
  instagram: "https://www.instagram.com/mistral.collectif",
  instagramHandle: "@mistral.collectif",
  instagramDM: "https://ig.me/m/mistral.collectif",
  url: "https://mistralcollectif.com",
};

// Date ISO (AAAA-MM-JJ) à mettre à jour quand le contenu public change.
// Sert au lastModified du sitemap (évite new Date() à chaque build).
export const contentLastModified = "2026-10-05";

// Photos plein cadre du slideshow (fichiers dans public/photos/accueil/)
export const heroPhotos = [
  {
    src: "/photos/accueil/0036-rade-de-marseille.jpg",
    alt: {
      fr: "Proue d'un bateau pneumatique vers un fort insulaire dans la rade de Marseille, noir et blanc argentique",
      en: "Bow of an inflatable boat facing an island fort in the bay of Marseille, black and white film",
    },
  },
  { src: "/photos/accueil/mistral_main_page.jpg" },
  { src: "/photos/accueil/mistral_main_page_2.jpg" },
  { src: "/photos/accueil/mistral_main_page_3.jpg" },
  {
    src: "/photos/accueil/cite-radieuse.jpg",
    alt: {
      fr: "Toit-terrasse de la Cité Radieuse à Marseille, pilier central et collines au loin, noir et blanc",
      en: "Rooftop terrace of the Cité Radieuse in Marseille, central pillar and hills in the distance, black and white",
    },
  },
  { src: "/photos/accueil/mistral_main_page_4.jpg" },
  { src: "/photos/accueil/mistral_main_page_4-2.jpg" },
  { src: "/photos/accueil/mistral_main_page_4-3.jpg" },
  {
    src: "/photos/accueil/glacier.jpg",
    alt: {
      fr: "Glacier accroché à une paroi rocheuse sombre, noir et blanc contrasté",
      en: "Glacier clinging to a dark rock face, high-contrast black and white",
    },
  },
  { src: "/photos/accueil/mistral_main_page_4-4.jpg" },
  { src: "/photos/accueil/mistral_main_page_4-5.jpg" },
  { src: "/photos/accueil/mistral_main_page_4-6.jpg" },
] as { src: string; alt?: { fr: string; en: string } }[];

export const genericPhotoAlt = {
  fr: "Photographie du collectif Mistral",
  en: "Photograph by Collectif Mistral",
};

export type Member = {
  prenom: string;
  portrait?: string; // /photos/membres/prenom.jpg, absent = placeholder
  instagram?: string; // handle sans @
  portfolio?: string; // URL complète du portfolio
};

export const membres: Member[] = [
  { prenom: "Hugo", portrait: "/photos/membres/hugo.jpg", instagram: "101_neo", portfolio: "https://hugoboure.myportfolio.com/" },
  { prenom: "David", portrait: "/photos/membres/david.jpg", instagram: "davidperiers", portfolio: "https://davidperiers.com/" },
  { prenom: "Jocelyn", portrait: "/photos/membres/jocelyn.jpg", instagram: "jocelynroos", portfolio: "https://roosjocelyn.myportfolio.com/" },
];
