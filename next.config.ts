import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    useLightningcss: false,
  },
};

// Wrap only the PWA config, then merge
const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: ["middleware-manifest.json"],
});

export default withPWAConfig(nextConfig);
