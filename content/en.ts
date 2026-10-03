import type { Copy } from "./types";

export const en: Copy = {
  lang: "en",
  ogLocale: "en_US",
  routes: {
    home: "/en",
    legal: "/en/legal",
    altHome: "/",
    altLegal: "/mentions-legales",
  },
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
    skip: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuLabel: "Main menu",
    instagramLabel: "The collective on Instagram",
    langSwitchLabel: "Voir le site en français",
    altLangCode: "FR",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
  },
  hero: {
    title: ["Collectif", "Mistral"],
    tagline: "A photography collective in Marseille. Exhibitions, workshops, portfolio reviews.",
    ctaPrimary: { label: "Join the collective", href: "#rejoindre" },
    ctaSecondary: { label: "See the exhibitions", href: "#expositions" },
    pauseLabel: "Pause slideshow",
    playLabel: "Play slideshow",
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
        href: "#expositions",
      },
      {
        num: "02",
        title: "Workshops",
        text: "Photo walks, portfolio reviews, film photography, post-processing. Hands-on sessions led by members and guests.",
        href: "#workshops",
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
        statut: { label: "First edition in December, theme “Mare Nostrum”. Venue to be announced.", upcoming: true },
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
      "To join the collective, propose a series or take part in a workshop, write to us.",
    instagramCta: "Our Instagram page",
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      message: "Message",
      submit: "Send",
      sending: "Sending",
      successTitle: "Message sent",
      successText: "Thank you, we will get back to you soon.",
      errorText: "The message could not be sent. Please write to us directly at",
      privacyBefore: "Your details are used only to reply to you. ",
      privacyLink: "Legal notice",
      privacyAfter: ".",
    },
  },
  footer: {
    navLabel: "Navigation",
    legalLabel: "Legal notice",
  },
  legal: {
    title: "Legal notice and privacy",
    updated: "Last updated: 3 October 2026",
    backHome: "Back to home",
    sections: [
      {
        title: "Publisher",
        paragraphs: [
          "Collectif Mistral, a photography collective based in Marseille, France. The collective is not, at this time, a registered association.",
          "The site is published on a non-professional, non-profit basis. In accordance with article 6, III, 2 of French law no. 2004-575 of 21 June 2004 (LCEN), the publisher has chosen to remain anonymous and has provided their details to the host.",
          "Contact: mistralcollectif@gmail.com",
        ],
      },
      {
        title: "Host",
        paragraphs: ["Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. Website: vercel.com"],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The photographs on this site belong to their authors. Any reproduction or reuse without their written permission is prohibited.",
          "The texts and the design of the site belong to the collective.",
          "If you are the author, or one of the people shown in a photograph, and want it removed, write to us: we handle removal requests as quickly as we can.",
        ],
      },
      {
        title: "Personal data",
        paragraphs: [
          "This site sets no cookies, uses no analytics or advertising tools and embeds no third-party content. Fonts are hosted with the site.",
          "Your browser keeps only your light or dark theme choice, on your own device. That information is never sent to us.",
          "Like any host, Vercel records technical logs (IP address, date, requested page) to run and secure the site. See Vercel's privacy policy.",
          "If you write to us by email or Instagram message, we use your information only to reply. Instagram is a Meta service, governed by its own privacy policy.",
          "Your messages are not kept longer than needed to handle your request, unless you join the collective.",
          "You have the right to access, correct, erase and object to the use of your data. To exercise it, write to mistralcollectif@gmail.com. You may also lodge a complaint with the CNIL (cnil.fr).",
        ],
      },
    ],
    formParagraph:
      "If you use the contact form, your first name, last name, email address and message are sent by email to the collective, through the Resend sending service, so we can reply. They are not stored on the site.",
  },
  notFound: {
    title: "Page not found",
    text: "This page does not exist or has moved.",
    home: "Back to home",
  },
};
