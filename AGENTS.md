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
  `#rejoindre`). Pages légales : `/mentions-legales` et `/en/legal`.
- En-tête et pied de page partagent le bloc `SiteTools` : icône Instagram,
  l'autre langue (EN/FR, garde la section courante), bascule jour/nuit.
- Mobile (< 860 px) : menu burger plein écran (`Nav.tsx`), Échap ferme.
- Sections : Hero (diaporama décoratif avec bouton pause, respecte « réduire
  les animations »), Manifeste, Expositions (Grand Angle, Carte Blanche, Appel
  à projets, dessins au trait), Workshops, Membres, Rejoindre, Footer minimal.
- Rejoindre : bouton vers la page Instagram + email. Le FORMULAIRE
  (prénom, nom, email, message) n'apparaît que si la variable d'environnement
  `RESEND_API_KEY` est définie dans Vercel (Production) AU MOMENT DU BUILD :
  après l'ajout, redéployer. Envoi via `app/api/contact/route.ts` (API Resend,
  expéditeur `onboarding@resend.dev`, destinataire `site.email`). Après achat du
  domaine : vérifier le domaine dans Resend et changer l'expéditeur.
- Deux thèmes : Noir Mistral et Lumière du Sud (défaut), variables CSS +
  `localStorage("cm-theme")`. Typo : Unbounded (titres) + Inter.
- Les textes vivent dans `content/fr.ts` et `content/en.ts` (type `Copy` dans
  `content/types.ts`) ; données communes (email, Instagram, photos du Hero,
  membres) dans `content/site.ts`. Jamais de texte en dur dans les composants.
- Deux layouts racine (`app/(fr)`, `app/(en)/en`) partageant `lib/shell.tsx` et
  `lib/metadata.ts`. 404 globale : `app/global-not-found.tsx` (flag
  `experimental.globalNotFound` dans `next.config.ts`).
- Photos : `public/photos/<page>/`, 2400 px max, JPEG ~80 (mozjpeg). Les
  originaux sont gardés HORS du dépôt dans `~/projets/mistral-collectif-originals/`.
  Pour ajouter une photo, la redimensionner d'abord (`sharp` est dans
  node_modules via Next).
- En-têtes de sécurité simples dans `next.config.ts`.
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
- Grand Angle #1 : décembre, thème « Mare Nostrum » (décidé). Le lieu et la date
  exacte ne le sont pas : ne rien annoncer avant décision du collectif.
- Pas de tirets cadratins (—) ni demi-cadratins dans les textes du site :
  décision éditoriale, on utilise virgule, deux-points ou point.
- Ajouter une langue ou un texte : modifier `fr.ts` ET `en.ts` (le type `Copy`
  fait échouer le build s'il manque une clé).
- Mentions légales : rédigées pour un éditeur non professionnel anonyme (le
  collectif n'est pas encore une association). À REVOIR dès la création de
  l'association : nom, siège, numéro RNA, directeur de la publication.
- Ne pas affirmer « Association loi 1901 » tant que l'association n'est pas
  déclarée.
- CSS : les règles `@media (max-width: 860px)` qui doivent écraser une règle de
  base vont en FIN de `app/globals.css` (un bloc mobile placé plus haut est
  écrasé par les règles de base écrites après lui).
