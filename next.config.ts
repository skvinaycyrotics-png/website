import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

export const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  object-src 'none';

  script-src
    'self'
    'unsafe-inline'
    ${isProd ? '' : "'unsafe-eval'"}
    https:
    blob:;

  style-src
    'self'
    'unsafe-inline'
    https:;

  img-src
    'self'
    data:
    blob:
    https:;

  font-src
    'self'
    data:
    https:;

  connect-src
    'self'
    https:
    wss:;

  media-src
    'self'
    https:
    blob:;

  worker-src
    'self'
    blob:;

  manifest-src 'self';

  upgrade-insecure-requests;
`
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim();

const nextConfig: NextConfig = {
  //output: 'export',

  trailingSlash: true,

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  typescript: {
    ignoreBuildErrors: false,
  },

  compiler: {
    removeConsole: isProd
      ? {
          exclude: ['error', 'warn'],
        }
      : false,
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
