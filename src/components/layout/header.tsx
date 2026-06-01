'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X, ChevronDown, Headphones, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { PRIMARY_NAV_LINKS, SECONDARY_NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { NavLink } from '@/lib/types';

// --- Updated NavIndicator: supports both hover and active ---
const NavIndicator = ({ 
  hoverRect, 
  activeRect, 
  isHovering 
}: { 
  hoverRect: DOMRect | null, 
  activeRect: DOMRect | null,
  isHovering: boolean 
}) => {
  // Use hoverRect if hovering, otherwise use activeRect
  const targetRect = isHovering && hoverRect ? hoverRect : activeRect;
  
  if (!targetRect) return null;

  return (
    <motion.div
      className="absolute bottom-0 h-0.5 bg-brand rounded-full z-10"
      initial={false}
      animate={{
        left: targetRect.left,
        width: targetRect.width,
        bottom: 8,
        opacity: isHovering ? 1 : 0.8,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
    />
  );
};

// ... (CursorHighlight, NavItem remain exactly the same as your original) ...
// (I keep them unchanged – only the logic for active underline is fixed in the main Header)

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);
  
  // NEW: state for active link's position
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
  
  const pathname = usePathname();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const highlightOpacity = useMotionValue(0);

  // --- NEW: measure active link position ---
  useEffect(() => {
    if (!isMounted) return;

    const measureActiveLink = () => {
      // Find the <a> element that matches the current pathname
      // We assume each NavItem link has an href equal to pathname
      // For nested routes (e.g., /services/consulting), we match startsWith
      const activeAnchor = Array.from(document.querySelectorAll('nav a')).find((anchor) => {
        const href = anchor.getAttribute('href');
        if (!href) return false;
        // exact match for home, or startsWith for subpages (avoid false positives)
        if (pathname === '/') return href === '/';
        return href === pathname || (href !== '/' && pathname.startsWith(href));
      });

      if (activeAnchor) {
        setActiveRect(activeAnchor.getBoundingClientRect());
      } else {
        setActiveRect(null);
      }
    };

    measureActiveLink();

    // Re-measure on resize / scroll (e.g., mobile view change, window resize)
    window.addEventListener('resize', measureActiveLink);
    window.addEventListener('scroll', measureActiveLink);
    
    return () => {
      window.removeEventListener('resize', measureActiveLink);
      window.removeEventListener('scroll', measureActiveLink);
    };
  }, [pathname, isMounted]);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname.startsWith('/portal') || pathname.startsWith('/admin')) {
    return null;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    highlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    highlightOpacity.set(0);
    setHoveredLink(null);
  };

  const openSupportDesk = () => {
    document.dispatchEvent(new Event('open-support-desk'));
  };

  return (
    <header 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-700",
        scrolled 
          ? "bg-background/80 backdrop-blur-3xl border-b border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] py-2" 
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      {/* ... decorative divs ... */}

      <div className={cn(
        "container flex items-center transition-all duration-500 px-4 md:px-6",
        scrolled ? "h-14" : "h-16"
      )}>
        <Logo className="transition-all hover:scale-105 active:scale-95 duration-300 relative z-20" />
        
        {isMounted && (
          <>
            <nav className="ml-auto hidden items-center gap-1 md:flex relative px-4 py-1 rounded-2xl bg-secondary/20 border border-white/5 group">
              <CursorHighlight mouseX={mouseX} mouseY={mouseY} opacity={highlightOpacity} />
              
              {PRIMARY_NAV_LINKS.map((link) => (
                <NavItem 
                  key={link.href}
                  link={link}
                  pathname={pathname}
                  isActive={pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))}
                  isHovered={hoveredLink === link.href}
                  onHover={(rect) => {
                    setHoveredLink(rect ? link.href : null);
                    setHoverRect(rect);
                  }}
                />
              ))}

              {/* NavIndicator always present – now uses activeRect + hoverRect */}
              <NavIndicator 
                hoverRect={hoverRect} 
                activeRect={activeRect} 
                isHovering={!!hoveredLink} 
              />
            </nav>

            {/* ... rest of your Header (ThemeToggle, Support button, Mobile menu) remains exactly the same ... */}
          </>
        )}
      </div>
    </header>
  );
}
