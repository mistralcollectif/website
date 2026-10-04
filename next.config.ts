import type { NextConfig } from "next";

// En-têtes simples et sans effet visible : empêche d'afficher le site dans un
// cadre d'un autre site, limite ce que le navigateur devine ou transmet.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// Les anciennes adresses du site renvoient vers le domaine officiel (SEO : une
// seule adresse indexée). Les URL d'aperçu de Vercel ne sont pas concernées.
const legacyHosts = [
  "mistral-collectif.vercel.app",
  "website-five-ashen-48.vercel.app",
  "www.mistralcollectif.com",
];

const nextConfig: NextConfig = {
  // Deux layouts racine (fr / en) : la 404 globale remplace la page par défaut
  experimental: { globalNotFound: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return legacyHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://mistralcollectif.com/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
