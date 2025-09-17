'use client';

import { useState, useEffect } from 'react';

type ParticleStyle = React.CSSProperties & {
  '--particle-size': string;
  '--particle-duration': string;
  '--particle-delay': string;
  '--particle-scale': string;
};

const HeroParticleBackground = () => {
  const [styles, setStyles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const numParticles = 50;
    const generatedStyles = Array.from({ length: numParticles }).map(() => {
      const size = Math.random() * 3 + 1; // 1px to 4px
      const duration = Math.random() * 4 + 2; // 2s to 6s
      const delay = Math.random() * duration;
      const scale = Math.random() * 20 + 10; // final scale
      return {
        '--particle-size': `${size}px`,
        '--particle-duration': `${duration}s`,
        '--particle-delay': `-${delay}s`,
        '--particle-scale': `${scale}`,
      };
    });
    setStyles(generatedStyles);
  }, []);

  return (
    <div className="absolute inset-0 bg-primary/5">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {styles.map((style, i) => (
          <div
            key={i}
            className="particle"
            style={style}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroParticleBackground;
