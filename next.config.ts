import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const ContentSecurityPolicy = `
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
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=()',
  },
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'credentialless',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
  {
    key: 'Origin-Agent-Cluster',
    value: '?1',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim(),
  },
];

const nextConfig: NextConfig = {
  // Generates a static HTML export
  output: 'export',

  trailingSlash: true,

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  // REMOVED: swcMinify (Deprecated warning fixed)
  // REMOVED: eslint block (Deprecated warning fixed)

  typescript: {
    ignoreBuildErrors: true,
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
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },

  /* 
    NOTE: Next.js 'headers' and 'redirects' cannot be used with 'output: export'.
    To apply your Security Headers and Redirects on Vercel, you must configure 
    them inside a root level `vercel.json` file instead.
  */
  /*
  async redirects() {
    return [
      { source: '/admin', destination: '/', permanent: false },
      { source: '/login', destination: '/', permanent: false },
      { source: '/register', destination: '/', permanent: false },
    ];
  },

  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|ttf|woff|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:all*(js|css)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/sw.js',
        headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }],
      },
    ];
  },
  */
};

export default nextConfig;
