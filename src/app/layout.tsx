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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cyrotics.in'),

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
      url: 'https://www.cyrotics.in',
    },
  ],

  creator: 'Cyrotics',

  publisher: 'Cyrotics',

  generator: 'Next.js',

  referrer: 'origin-when-cross-origin',

  keywords: [
    'Cyrotics',
    'AI Automation',
    'Enterprise AI Solutions',
    'Cybersecurity',
    'Cloud Transformation',
    'IT Infrastructure',
    'Data Center Solutions',
    'Networking Solutions',
    'CCTV Solutions',
    'Access Control',
    'Cloud Services',
    'Fire Alarm Systems',
    'System Integrator',
    'BMS Solutions',
    'PA Systems',
    'Data Center Infrastructure',
    'Cloud & Hybrid IT Solutions',
    'Scalable Storage Architecture',
    'NextGen Cybersecurity Shield',
    'Audio-Visual & Communication',
    'IT Strategy & Advisory',
    'Unified Communications',
    'Security & Surveillance',
    'Managed Services',
    'Software Development',
    'AI & ML Solutions',
    'Smart Factory',
    'Smart Building',
    'Smart City Infrastructure',
    'Renewable Energy',
    'Next.js Development',
    'DevOps Solutions',
    'Enterprise SaaS',
    'Digital Transformation',
    // Targeted Intent Commercial Keywords Added Here:
    'Data center builders',
    'Data center modifications',
    'data center transformations',
    'Network builders',
    'Network modifications',
    'Network transformations',
    'Audio Visuals center builders',
    'Audio Visuals modifications',
    'Audio Visuals transformations',
    'Software builders',
    'Software modifications',
    'Software transformations'
  ],

  category: 'technology',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    title:
      'Cyrotics — AI Automation, Cybersecurity & Enterprise Technology Solutions',

    description:
      'Enterprise-grade AI automation, cybersecurity, cloud engineering, networking, surveillance, software development, and digital transformation solutions.',

    url: 'https://www.cyrotics.in',

    siteName: 'Cyrotics',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cyrotics Technologies',
      },
    ],

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Cyrotics — AI Automation, Cybersecurity & Enterprise Technology Solutions',

    description:
      'Enterprise-grade AI automation, cybersecurity, cloud engineering, networking, surveillance, software development, and digital transformation solutions.',

    images: ['/og-image.png'],
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

  alternates: {
    canonical: 'https://www.cyrotics.in',
  },

  verification: {
    google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
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
        
        {/* Google Analytics Script Delivery Platform */}
        {/* Replace G-XXXXXXXXXX with your actual Google tracking token inside your dashboard settings */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
