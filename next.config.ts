import type { NextConfig } from "next";

// En-têtes simples et sans effet visible : empêche d'afficher le site dans un
// cadre d'un autre site, limite ce que le navigateur devine ou transmet.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Deux layouts racine (fr / en) : la 404 globale remplace la page par défaut
  experimental: { globalNotFound: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
