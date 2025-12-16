
'use client';

import { SERVICES } from '@/lib/constants';

const Marquee = () => {
  const serviceTitles = SERVICES.map(service => service.title);
  const marqueeContent = Array(2).fill(serviceTitles).flat();

  return (
    <div className="relative flex overflow-x-hidden bg-primary/95 text-primary-foreground py-2 text-sm font-semibold shadow-inner">
      <div className="animate-marquee whitespace-nowrap">
        {marqueeContent.map((title, index) => (
          <span key={index} className="mx-4">
            {title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
