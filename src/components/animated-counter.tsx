'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  from?: number;
  className?: string;
}

export default function AnimatedCounter({
  to,
  duration = 2000,
  from = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);

  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setCount(to);
      return;
    }

    const startAnimation = () => {
      if (hasAnimated.current) return;

      hasAnimated.current = true;

      const startTime = performance.now();
      const range = to - from;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out cubic animation
        const eased = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.round(from + range * eased);

        setCount(currentValue);

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [to, from, duration]);

  return (
    <span
      ref={counterRef}
      className={className}
      aria-label={`${count}`}
    >
      {count}
    </span>
  );
}
