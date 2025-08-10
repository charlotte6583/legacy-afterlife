// next.config.ts
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  experimental: {
    useLightningcss: false, // Disable LightningCSS to prevent native module errors
  },
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(baseConfig);