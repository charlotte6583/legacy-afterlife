// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: false, // Disable LightningCSS to prevent native module errors
  },
  reactStrictMode: true,
};

export default nextConfig;