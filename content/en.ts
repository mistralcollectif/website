import type { Copy } from "./types";

// Theme and venue of Grand Angle #1 are NOT decided: announce nothing here
// until the collective has chosen (ideas in Notion > Expos).
export const en: Copy = {
  lang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Collectif Mistral, photographers in Marseille",
    description:
      "A new wind is blowing over Marseille photography. A collective of photographers running exhibitions and workshops around the light of the South.",
    keywords: [
      "photography",
      "Marseille",
      "collective",
      "photographers",
      "exhibition",
      "workshop",
      "film photography",
      "digital photography",
    ],
    jsonLdDescription:
      "Photography collective in Marseille, France: Grand Angle group exhibitions and Carte Blanche solo shows, open calls, workshops (photo walks, portfolio reviews, film photography, post-processing).",
  },
  nav: {
    homeLabel: "Collectif Mistral, back to top",
    links: [
      { id: "manifeste", label: "Manifesto" },
      { id: "expositions", label: "Exhibitions" },
      { id: "workshops", label: "Workshops" },
      { id: "membres", label: "Members" },
      { id: "rejoindre", label: "Join" },
    ],
    themeGroupLabel: "Choose the site's look",
    themes: { mistral: "Mistral Dark", lumiere: "Southern Light" },
    langGroupLabel: "Language",
  },
  hero: {
    title: ["Collectif", "Mistral"],
    tagline: "A photography collective in Marseille. Exhibitions, workshops, portfolio reviews.",
    ctaPrimary: { label: "Join the collective", href: "#rejoindre" },
    ctaSecondary: { label: "See the exhibitions", href: "#expositions" },
  },
  manifeste: {
    eyebrow: "Our manifesto",
    quote: {
      before: "Under the mistral, ",
      em: "a shared scene",
      after: " emerges.",
    },
    paragraphs: [
      "To photograph is to awaken your eye. An image starts well before the shutter, and rarely ends with it. Learning to see what goes unnoticed, then choosing what you keep in the frame and what you leave out of it.",
      "It looks like a solitary exercise, but it quickly becomes a collective one. A way of seeing is shaped by other ways of seeing: you recognise yourself in it, you push against it, you move it.",
      "Mistral brings together photographers with different sensibilities and practices. What connects us is not a style but a kind of attention: to the frame, to the light, to the right moment. We show, we talk, we exhibit, until each series finds its form.",
    ],
    pillars: [
      {
        num: "01",
        title: "Exhibitions",
        text: "Grand Angle brings together the city's photographers, known or not, around a shared theme. Carte Blanche gives each member a wall for their own series.",
      },
      {
        num: "02",
        title: "Workshops",
        text: "Photo walks, portfolio reviews, film photography, post-processing. Hands-on sessions led by members and guests.",
      },
    ],
  },
  expositions: {
    title: "Exhibitions",
    intro:
      "We put photographs on walls, together. Two formats: Grand Angle, a group exhibition around a shared theme, and Carte Blanche, a member's solo show. Open calls let other photographers from the city onto the walls.",
    whoLabel: "Who it's for",
    nextLabel: "Coming up",
    formats: [
      {
        num: "01",
        art: "grand-angle",
        kind: "Group exhibition",
        name: "Grand Angle",
        principe:
          "One shared theme, many different eyes. Each photographer reads it their own way (street, landscape, portrait, abstract) and the images hang together on the same walls.",
        pour: "Members, guest artists and photographers from the city, including ones we don't know yet.",
        statut: { label: "First edition, theme “Mare Nostrum”. Date and venue to be announced.", upcoming: true },
      },
      {
        num: "02",
        art: "carte-blanche",
        kind: "Solo exhibition",
        name: "Carte Blanche",
        principe:
          "No imposed theme. A member of the collective shows a personal, carefully worked series of their choice.",
        pour: "Members of the collective.",
        statut: { label: "Date to be announced.", upcoming: false },
      },
      {
        num: "03",
        art: "appel",
        kind: "Open to Marseille photographers",
        name: "Open call",
        principe:
          "A way to hang your images in a Grand Angle without being a member. The call is posted on Instagram and states the theme, the dates and how to apply.",
        pour: "All Marseille photographers, beginners or experienced, film or digital.",
        statut: { label: "Calls are announced on Instagram.", upcoming: false },
        cta: { label: "Follow the calls →" },
      },
    ],
  },
  workshops: {
    title: "Workshops",
    intro:
      "Sessions to learn, experiment and share techniques, led by members of the collective.",
    items: [
      {
        idx: "01",
        title: "Photo walks",
        text: "Field outings through Marseille's neighbourhoods, followed by a group review of the images.",
        when: "Coming soon",
      },
      {
        idx: "02",
        title: "Portfolio review",
        text: "We spread the images on the table, keep the ones that hold, and build series that tell something.",
        when: "Coming soon",
      },
      {
        idx: "03",
        title: "Film & darkroom",
        text: "An introduction to shooting film and developing in a black-and-white darkroom.",
        when: "Coming soon",
      },
      {
        idx: "04",
        title: "Post-processing",
        text: "Retouching and grading to build a coherent visual identity across a series.",
        when: "Coming soon",
      },
    ],
  },
  membres: {
    title: "Members",
    intro:
      "Marseille photographers who share a way of seeing, techniques and a love of the southern light.",
    portraitAlt: (prenom) => `Portrait of ${prenom}, photographer with Collectif Mistral`,
    instagramLabel: (prenom) => `${prenom} on Instagram`,
  },
  rejoindre: {
    title: "Join Mistral",
    intro:
      "To join the collective, propose a series or take part in a workshop, the most direct way is to write to us.",
    instagramCta: "Message us on Instagram",
  },
  footer: {
    navLabel: "Navigation",
    instagramLabel: "Instagram",
  },
};
