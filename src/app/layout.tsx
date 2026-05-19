
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
  title: 'CYROTICS TECHNOLOGIES | Technology Infrastructure & Security',
  description:
    'Your trusted partner for integrated infrastructure, security, and smart technology solutions. We specialize in data centers, cybersecurity, and cloud transformation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased subpixel-antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClient>
            {children}
          </LayoutClient>
          <ClientToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
