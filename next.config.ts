import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholders picsum en attendant la Selecta (vraies photos → /public/photos)
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
