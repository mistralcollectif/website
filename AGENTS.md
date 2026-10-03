# mistral-collectif

Site vitrine du collectif photographique "Mistral". Voir le workspace
`~/projets/AGENTS.md` pour le contexte global.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (PostCSS)
- Encore à déployer (Vercel à connecter)

## Commandes

```bash
npm run dev       # port 3001 (ou `-p <port>`)
npm run build
npm run lint
```

## État actuel

- One-pager complet recodé depuis le brief Notion ("Brief .md" + "HTML skeleton",
  page Website du workspace Mistral Collectif) : Hero, Manifeste (texte réel v3),
  Expositions (vraies infos Grand Angle #1/#2), Workshops, Rejoindre, Footer.
- Système de 3 thèmes (Noir Mistral / Lumière du Sud par défaut / Bleu
  Méditerranée) via variables CSS + `localStorage("cm-theme")`, typo
  Fraunces + Inter, animations reveal au scroll.
- Tout le contenu éditorial vit dans `content/site.ts` — modifier là,
  jamais dans les composants.
- Photos : placeholders picsum en attendant la Selecta (vraies photos →
  `public/photos/`, puis retirer le remotePattern picsum de `next.config.ts`).
- Formulaire de contact : mailto (pas de backend) — à brancher plus tard.
- Pas encore déployé sur Vercel ; repo GitHub `mistralcollectif/website`.

## Règles

- Voir le CLAUDE.md du projet pour toute convention locale.
- Aucune couleur en dur dans les composants : tout passe par les variables
  de thème de `app/globals.css`.
- La section "Identité visuelle" du brief est volontairement exclue du site
  public (matériau interne).