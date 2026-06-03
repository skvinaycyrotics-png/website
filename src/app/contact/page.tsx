import type { Metadata } from 'next';
import { SITE_URL } from '@/app/layout';
import ContactClient from './contact-client';

const PAGE_URL = `${SITE_URL}/contact/`;

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Consultation',

  description:
    'Get in touch with Cyrotics Technologies for enterprise IT infrastructure, data center, cybersecurity, networking, cloud, AV, and smart building solutions. Call +91 99992 95636 or submit an inquiry for a free consultation.',

  keywords: [
    'Contact Cyrotics',
    'IT Infrastructure Company Delhi NCR',
    'Cybersecurity Consultation',
    'Data Center Solutions India',
    'Enterprise Networking Solutions',
    'Cloud Solutions India',
    'IT AMC Services',
    'Smart Building Solutions',
    'System Integrator India',
    'Free IT Consultation',
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: 'Contact Cyrotics Technologies | Free IT Consultation',

    description:
      'Reach out for enterprise IT infrastructure, data center, cybersecurity, networking, cloud, surveillance, and smart building solutions. Our experts respond within 1 business day.',

    url: PAGE_URL,

    siteName: 'Cyrotics',

    type: 'website',

    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact Cyrotics Technologies',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Contact Cyrotics Technologies | Free IT Consultation',

    description:
      'Reach out for enterprise IT infrastructure, data center, cybersecurity, networking, cloud, surveillance, and smart building solutions.',

    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
