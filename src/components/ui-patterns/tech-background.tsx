'use client';

import React, { useEffect, useRef } from 'react';

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; baseSize: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 10000); // Increased density
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2.5 + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: size,
          baseSize: size,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const isDark = document.documentElement.classList.contains('dark');
      
      // Ultra-High Visibility Neon (Cyan for Light, Brilliant Sky Blue for Dark)
      const primaryColor = isDark ? '56, 189, 248' : '14, 165, 233';
      
      particles.forEach((p, i) => {
        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        
        // Stronger Magnetic Influence
        if (distm < 350) {
          const force = (350 - distm) / 350;
          const angle = Math.atan2(dym, dxm);
          p.x -= Math.cos(angle) * force * 2.5;
          p.y -= Math.sin(angle) * force * 2.5;
          p.size = p.baseSize * (1 + force * 2);
        } else {
          p.size = p.baseSize;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw Particle with Glow
        ctx.shadowBlur = isDark ? 10 : 0;
        ctx.shadowColor = `rgb(${primaryColor})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${isDark ? 0.9 : 0.6})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Mouse Neural Link (Thicker & Brighter)
        if (distm < 350) {
          ctx.lineWidth = 1.2;
          ctx.strokeStyle = `rgba(${primaryColor}, ${0.7 * (1 - distm / 350)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Inter-particle Neural Web
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `rgba(${primaryColor}, ${isDark ? 0.35 : 0.15} * (1 - dist / 180))`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-background transition-colors duration-500">
      {/* Structural Grid for Tech Feel */}
      <div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]" 
        style={{ 
          backgroundImage: `linear-gradient(#0ea5e9 1.5px, transparent 1.5px), linear-gradient(90deg, #0ea5e9 1.5px, transparent 1.5px)`,
          backgroundSize: '80px 80px'
        }} 
      />
      
      {/* Animated Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
}
