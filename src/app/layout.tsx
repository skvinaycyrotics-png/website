import type { Metadata } from 'next';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { ClientToaster } from '@/components/client-toaster';
import { LayoutClient } from '@/components/layout-client';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

// Single source of truth for your website URL
export const SITE_URL = 'https://cyrotics.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      'Cyrotics — AI Automation, Cybersecurity & Enterprise Technology Solutions',
    template: '%s | Cyrotics',
  },

  description:
    'Cyrotics delivers enterprise AI automation, cybersecurity, cloud transformation, smart infrastructure, software engineering, DevOps, networking, surveillance, and intelligent digital transformation solutions.',

  applicationName: 'Cyrotics',

  authors: [
    {
      name: 'Cyrotics',
      url: SITE_URL,
    },
  ],

  // Injects strict security policy flags directly to fix blocked maps / iframes
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://googletagmanager.com https://*.google-analytics.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; frame-src 'self' https://www.google.com https://maps.google.com; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline';",
  },

  creator: 'Cyrotics',
  publisher: 'Cyrotics',
  generator: 'Next.js',

  referrer: 'origin-when-cross-origin',

  category: 'technology',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  keywords: [
    'Cyrotics',
    'Enterprise IT Solutions India',
    'AI Automation',
    'Cybersecurity Solutions',
    'Data Center Infrastructure',
    'Cloud Transformation',
    'Networking Solutions',
    'CCTV Surveillance',
    'System Integrator Delhi',
    'IT Infrastructure India',
    'Cloud Solutions',
    'Digital Transformation',
    'Smart Building Solutions',
    'DevOps Solutions',
    'Software Development',
    'Enterprise AI',
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title:
      'Cyrotics — AI Automation, Cybersecurity & Enterprise Technology Solutions',

    description:
      'Enterprise-grade AI automation, cybersecurity, cloud engineering, networking, surveillance, software development, and digital transformation solutions.',

    url: SITE_URL,

    siteName: 'Cyrotics',

    locale: 'en_IN',

    type: 'website',

    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Cyrotics Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Cyrotics — AI Automation, Cybersecurity & Enterprise Technology Solutions',

    description:
      'Enterprise-grade AI automation, cybersecurity, cloud engineering, networking, surveillance, software development, and digital transformation solutions.',

    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'MyrJrDCPWhzGnOJXF5g3nB-SiUrUtZvFzHLU34CLvaw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-body antialiased subpixel-antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClient>{children}</LayoutClient>

          <ClientToaster />
        </ThemeProvider>

        <GoogleAnalytics gaId="G-MH5RDM6NCY" />
      </body>
    </html>
  );
}
