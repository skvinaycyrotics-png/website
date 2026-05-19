'use client';

import { motion } from 'framer-motion';

export function TechAuthBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
      
      {/* Moving Light Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 blur-[120px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"
      />

      {/* Cyber Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
    </div>
  );
}
