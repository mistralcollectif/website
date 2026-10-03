// Le formulaire de contact n'est affiché que si l'envoi d'emails est configuré
// (variable RESEND_API_KEY dans Vercel). Valeur lue à la construction du site :
// après l'ajout de la variable, il faut redéployer.
export const contactFormEnabled = Boolean(process.env.RESEND_API_KEY);
