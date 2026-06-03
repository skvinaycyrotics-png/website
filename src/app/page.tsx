import type { Metadata } from 'next';
import { SITE_URL } from '@/app/layout';
import HomeClient from './home-client';

export const metadata: Metadata = {
title: 'Enterprise IT Infrastructure, AI Automation & Cybersecurity Solutions',

description:
'Cyrotics delivers mission-critical IT infrastructure, AI automation, cybersecurity, data center, networking, surveillance, smart building, and digital transformation solutions across India.',

keywords: [
'IT Infrastructure',
'Cybersecurity',
'AI Automation',
'Data Center Solutions',
'Networking Solutions',
'Structured Cabling',
'Smart Building Solutions',
'Digital Transformation',
'Enterprise IT Services',
'Network Security',
'Cloud Solutions',
'Surveillance Systems',
'Cyrotics',
'Cyrotics Technologies',
'India',
],

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
canonical: SITE_URL,
},

openGraph: {
type: 'website',
locale: 'en_IN',
url: SITE_URL,
siteName: 'Cyrotics Technologies',

```
title: 'Cyrotics — Enterprise IT Infrastructure & AI Automation',

description:
  'Mission-critical IT infrastructure, AI automation, cybersecurity, data center, networking, surveillance, and digital transformation solutions across India.',

images: [
  {
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'Cyrotics Technologies — Enterprise IT Solutions',
  },
],
```

},

twitter: {
card: 'summary_large_image',

```
title: 'Cyrotics — Enterprise IT Infrastructure & AI Automation',

description:
  'Mission-critical IT infrastructure, AI automation, cybersecurity, data center, networking, surveillance, and digital transformation solutions across India.',

images: [`${SITE_URL}/og-image.png`],
```

},
};

export default function HomePage() {
return <HomeClient />;
}
