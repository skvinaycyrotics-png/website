import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/app/layout';
import FaqsClient from './faqs-client';

const PAGE_URL = `${SITE_URL}/faqs`;

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',

  description:
    'Get clear answers to common questions about Cyrotics Technologies, including IT infrastructure, cybersecurity, data center solutions, managed services, technical support, payments, and careers.',

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: 'FAQs | Cyrotics Technologies',

    description:
      'Answers to the most common questions about our IT infrastructure, cybersecurity, data center, networking, and managed services.',

    url: PAGE_URL,

    type: 'website',

    siteName: 'Cyrotics',

    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Cyrotics Technologies FAQ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'FAQs | Cyrotics Technologies',

    description:
      'Answers to the most common questions about our IT infrastructure, cybersecurity, data center, networking, and managed services.',

    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Cyrotics Technologies provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in IT & Network Infrastructure, Data Center Modifications, Automation, Network Security, Audio-Visual Systems, Software & Web Development, Automotive Engineering, and Consulting services.',
      },
    },

    {
      '@type': 'Question',
      name: 'Where is Cyrotics Technologies located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our corporate office is located at 86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension, Badarpur Border, New Delhi – 110044, India.',
      },
    },

    {
      '@type': 'Question',
      name: 'How can I request a quote or proposal for a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit our Contact Us page and submit your project requirements. Our team typically responds within 2–3 business days.',
      },
    },

    {
      '@type': 'Question',
      name: 'Can you handle government or OEM projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have experience delivering corporate, OEM, and government-sector projects while complying with required standards and certifications.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you provide AMC or maintenance services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide Annual Maintenance Contracts (AMC) for IT infrastructure, networking, security systems, AV solutions, and data center environments.',
      },
    },

    {
      '@type': 'Question',
      name: 'How do I raise a technical support request?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Support requests can be submitted through our Support Desk page or by emailing support@cyrotics.in.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you offer internships and training programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Internship and training opportunities are periodically available and announced through our Careers section.',
      },
    },
  ],
};

export default function FaqsPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaData),
        }}
      />

      <FaqsClient />
    </>
  );
}
