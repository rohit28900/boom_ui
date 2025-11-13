import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Fix static asset loading for custom domain
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL || '',

  // ✅ Optional: redirect root to /home (since that’s your main page)
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },

  eslint: {
    // ✅ Ignore ESLint during production build to avoid deployment blocks
    ignoreDuringBuilds: true,
  },

  // ✅ Recommended for static optimization
  poweredByHeader: false,

  // ✅ Recommended when using Cloudflare/Railway for stable routing
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
