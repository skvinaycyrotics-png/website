
'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroHeadline() {
  return (
    <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
      <span className="block">Engineering Your Future in</span>
      <TypeAnimation
        sequence={[
          'Data Center Solutions.',
          2000,
          'NextGen Cybersecurity Shield.',
          2000,
          'Smart AV & Communication.',
          2000,
          'Unified Communications (UC).',
          2000,
          'Security & Surveillance.',
          2000,
          'Managed Services.',
          2000,
          'Renewable Energy.',
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="block text-primary"
        repeat={Infinity}
      />
    </h1>
  );
}
