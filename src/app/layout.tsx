import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientToaster } from '@/components/client-toaster';
import { LayoutClient } from '@/components/layout-client';
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

  title: 'CYROTICS TECHNOLOGIES | Technology Infrastructure & Security',

  description:
    'Your trusted partner for integrated infrastructure, security, and smart technology solutions. We specialize in data centers, cybersecurity, cloud transformation, networking, CCTV, and enterprise infrastructure.',

  keywords: [
    'CYROTICS TECHNOLOGIES',
    'IT Infrastructure',
    'Data Center Solutions',
    'Networking Solutions',
    'CCTV Solutions',
    'Access Control',
    'Cybersecurity',
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
    'Unified Communications (UC)',
    'Security & Surveillance',
    'Managed Services',
    'Software Development',
    'AI & ML Solutions',
    'Smart Factory & Building',
    'Smart City Infrastructure',
    'Renewable Energy',
  ],

  icons: {
    icon: '/favicon.ico',
  },
};

  openGraph: {
    title: 'CYROTICS TECHNOLOGIES',
    description:
      'Integrated infrastructure, security, and smart technology solutions for enterprises and businesses.',

    url: 'https://www.cyrotics.in',
    siteName: 'CYROTICS TECHNOLOGIES',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CYROTICS TECHNOLOGIES',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CYROTICS TECHNOLOGIES',
    description:
      'Technology Infrastructure & Security Solutions Company.',

    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
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
        className="font-body antialiased subpixel-antialiased"
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
      </body>
    </html>
  );
}
