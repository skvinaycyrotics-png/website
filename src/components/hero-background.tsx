'use client';

import { useState, useEffect } from 'react';

type LineStyle = {
  '--delay': string;
  '--duration': string;
  '--left': string;
  '--size': string;
  '--opacity': string;
  '--height': string;
};

const HeroBackground = () => {
  const [styles, setStyles] = useState<LineStyle[]>([]);

  useEffect(() => {
    // Generate styles only on the client-side to prevent hydration mismatch
    const generatedStyles = Array.from({ length: 50 }).map(() => ({
      '--delay': `${Math.random() * 10}s`,
      '--duration': `${Math.random() * 5 + 5}s`,
      '--left': `${Math.random() * 100}%`,
      '--size': `${Math.random() > 0.2 ? '2px' : '3px'}`,
      '--opacity': `${Math.random() * 0.3 + 0.1}`,
      '--height': `${Math.random() * 100 + 50}px`,
    }));
    setStyles(generatedStyles);
  }, []);

  return (
    <div className="absolute inset-0 bg-slate-100/80">
      <div className="absolute inset-0 z-0">
        {styles.map((style, i) => (
          <div
            key={i}
            className="animated-line"
            style={style as React.CSSProperties}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
