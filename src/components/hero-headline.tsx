'use client';

import { TypeAnimation } from 'react-type-animation';

export default function HeroHeadline() {
  return (
    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
      <span className="block">Engineering Your Future in</span>
      <TypeAnimation
        sequence={[
          'Infrastructure.',
          2000,
          'Security.',
          2000,
          'Automation.',
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
