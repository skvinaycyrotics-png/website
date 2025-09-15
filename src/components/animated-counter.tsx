'use client';

import { useEffect, useState, useRef } from 'react';

type AnimatedCounterProps = {
  to: number;
  duration?: number;
};

export default function AnimatedCounter({
  to,
  duration = 1500,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = to;
          const increment = end / (duration / 16); // 60fps

          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{Math.floor(count)}</span>;
}
