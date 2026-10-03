# mistral-collectif

Site vitrine du collectif photographique "Mistral". Voir le workspace
`~/projets/AGENTS.md` pour le contexte global.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (PostCSS)
- Hébergé sur Vercel

## Commandes

```bash
npm run dev       # port 3001 (ou `-p <port>`)
npm run build
npm run lint
```

## État actuel

- One-pager bilingue : `/` (français) et `/en` (anglais), même structure, ancres
  identiques (`#manifeste`, `#expositions`, `#workshops`, `#membres`,
  `#rejoindre`). Bouton FR / EN dans la nav (garde la section courante).
- Sections : Hero (slideshow de photos), Manifeste, Expositions (Grand Angle,
  Carte Blanche, Appel à projets, avec dessins au trait), Workshops, Membres,
  Rejoindre (message privé Instagram + email, pas de formulaire), Footer minimal.
- Deux thèmes seulement : Noir Mistral (sombre) et Lumière du Sud (beige, par
  défaut), via variables CSS + `localStorage("cm-theme")`. Typo : Unbounded
  (titres) + Inter.
- Les textes vivent dans `content/fr.ts` et `content/en.ts` (même type `Copy`
  dans `content/types.ts`) ; les données communes (email, Instagram, photos du
  hero, membres) dans `content/site.ts`. Jamais de texte en dur dans les
  composants. Structure des routes : deux layouts racine (`app/(fr)`,
  `app/(en)/en`) partageant `lib/shell.tsx` et `lib/metadata.ts`.
- Photos : toutes locales dans `public/photos/<page>/`.
- Déployé sur Vercel (compte du collectif) : https://mistral-collectif.vercel.app,
  auto-deploy depuis `main`. Repo GitHub `mistralcollectif/website`.
- Domaine mistralcollectif.com : à acheter dans Vercel, puis mettre à jour
  `site.url` dans `content/site.ts` (sitemap, canonical, hreflang, JSON-LD
  en dépendent) et `public/robots.txt`, `public/llms.txt`.

## Règles

- Voir le CLAUDE.md du projet pour toute convention locale.
- Aucune couleur en dur dans les composants : tout passe par les variables
  de thème de `app/globals.css`.
- La section "Identité visuelle" du brief est volontairement exclue du site
  public (matériau interne).
- Thème et lieu de Grand Angle #1 (décembre 2026) ne sont pas arrêtés : ne rien
  annoncer sur le site avant décision du collectif (idées dans Notion > Expos).
- Pas de tirets cadratins (—) ni demi-cadratins dans les textes du site :
  décision éditoriale, on utilise virgule, deux-points ou point.
- Ajouter une langue ou un texte : modifier `fr.ts` ET `en.ts` (le type `Copy`
  fait échouer le build s'il manque une clé).
- Mentions légales à publier avant le lancement officiel (voir échange du
  3 octobre 2026) : éditeur, directeur de publication, hébergeur Vercel.
