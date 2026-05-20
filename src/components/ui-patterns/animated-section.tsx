'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 70, 
      damping: 20, 
      mass: 1 
    } 
  },
};

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 70, 
      damping: 20 
    } 
  },
};

export const slideInFromLeftVariant = {
  hidden: { opacity: 0, x: -40 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 60, 
      damping: 20 
    } 
  },
};

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  stagger?: boolean;
  once?: boolean;
}

const buildFadeVariant = (direction: 'left' | 'right' | 'up' | 'down' = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      delay,
    },
  },
});

interface AnimatedItemProps extends HTMLMotionProps<'div'> {
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

export function AnimatedSection({
  children,
  stagger = false,
  once = true,
  variants,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      variants={variants || (stagger ? staggerContainerVariant : fadeUpVariant)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, direction = 'up', delay = 0, ...props }: AnimatedItemProps) {
  return (
    <motion.div variants={buildFadeVariant(direction, delay)} {...props}>
      {children}
    </motion.div>
  );
}
