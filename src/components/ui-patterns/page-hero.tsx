'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 60, 
      damping: 20, 
      mass: 1 
    } 
  },
};

// FIXED: Added Omit configuration block here to resolve standard HTML attribute inheritance conflicts
interface PageHeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: LucideIcon;
  heroImage?: string;
  gradientFrom?: string;
  gradientPosition?: 'top' | 'center' | 'bottom_left' | 'bottom_right' | 'top_right';
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  description,
  icon: Icon,
  heroImage,
  gradientFrom = 'from-white/20',
  gradientPosition = 'top',
  className,
  children,
  ...props
}: PageHeroProps) {
  const gradientClass = React.useMemo(() => {
    switch (gradientPosition) {
      case 'center':
        return 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]';
      case 'bottom_left':
        return 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]';
      case 'bottom_right':
        return 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]';
      case 'top_right':
        return 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]';
      case 'top':
      default:
        return 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]';
    }
  }, [gradientPosition]);

  const hasImage = !!heroImage;

  return (
    <section className={cn('relative w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32', hasImage ? 'bg-[#0a1628]' : 'bg-transparent', className)} {...props}>
      {/* Background Image with Zoom Animation */}
      {hasImage && (
        <>
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628]/80"></div>
        </>
      )}
      
      {!hasImage && (
        <div className={cn('absolute inset-0 via-transparent to-transparent opacity-60', gradientClass, gradientFrom)}></div>
      )}

      <div className="container relative z-30 px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          className="max-w-4xl mx-auto text-center"
        >
          {Icon && (
            <div className={cn(
              "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-md",
              hasImage ? "bg-white/10" : "bg-primary/10 dark:bg-white/10"
            )}>
              <Icon className={cn("h-8 w-8", hasImage ? "text-white" : "text-primary dark:text-white")} />
            </div>
          )}
          <h1 className={cn(
            "font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight",
            hasImage ? "text-white" : "text-foreground"
          )}>
            {title}
          </h1>
          {description && (
            <p className={cn(
              "mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium",
              hasImage ? "text-white" : "text-foreground"
            )}>
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
