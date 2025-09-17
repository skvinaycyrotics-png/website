'use client';

const HeroBackground = () => {
  // Create an array of 50 elements to render 50 lines/dots
  const elements = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 bg-slate-100/80">
      <div className="absolute inset-0 z-0">
        {elements.map((_, i) => {
          const style: React.CSSProperties = {
            '--delay': `${Math.random() * 10}s`,
            '--duration': `${Math.random() * 5 + 5}s`,
            '--left': `${Math.random() * 100}%`,
            '--size': `${Math.random() > 0.2 ? '2px' : '3px'}`,
            '--opacity': `${Math.random() * 0.3 + 0.1}`,
            '--height': `${Math.random() * 100 + 50}px`,
          };
          return (
            <div
              key={i}
              className="animated-line"
              style={style}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBackground;
