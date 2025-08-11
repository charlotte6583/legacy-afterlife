// next.config.ts
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: false
  },
  reactStrictMode: true,
  // ✅ PWA config goes inside the wrapper, not here
};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    buildExcludes: ['middleware-manifest.json']
  }
});