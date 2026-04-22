
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

// --- Components & Utils ---

/**
 * Animated underline component that moves with the cursor or active state
 */
const NavIndicator = ({ activeRect, isHovering }: { activeRect: DOMRect | null, isHovering: boolean }) => {
  if (!activeRect) return null;

  return (
    <motion.div
      className="absolute bottom-0 h-0.5 bg-brand rounded-full z-10"
      initial={false}
      animate={{
        left: activeRect.left,
        width: activeRect.width,
        opacity: isHovering ? 1 : 0.6,
        bottom: 8
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
    />
  );
};

/**
 * AI-like dynamic cursor highlight blob
 */
const CursorHighlight = ({ mouseX, mouseY, opacity }: { mouseX: any, mouseY: any, opacity: any }) => {
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 z-0"
      style={{
        background: useTransform(
          [smoothX, smoothY],
          ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(var(--brand-rgb), 0.25), transparent 80%)`
        ),
        opacity,
        filter: "blur(20px)"
      }}
    />
  );
};

/**
 * 3D Tilt Navigation Item
 */
const NavItem = ({ 
  link, 
  pathname, 
  onHover, 
  isHovered, 
  isActive 
}: { 
  link: NavLink, 
  pathname: string, 
  onHover: (rect: DOMRect | null) => void,
  isHovered: boolean,
  isActive: boolean
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    // Safe harbor delay
    setTimeout(() => {
      onHover(null);
    }, 200);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (ref.current) {
      onHover(ref.current.getBoundingClientRect());
    }
  };

  const handleLinkClick = () => {
    onHover(null);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        ref={ref}
        href={link.href}
        onClick={handleLinkClick}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative z-10 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl flex items-center gap-1.5",
          isActive ? "text-primary" : "text-foreground/90 hover:text-primary",
          "group/item [transform-style:preserve-3d] antialiased"
        )}
      >
        <motion.span 
          className="relative z-10 flex items-center gap-1.5 antialiased"
          style={{ translateZ: 20 }}
        >
          {link.label}
          {link.subLinks && (
            <motion.span
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover/item:opacity-100 transition-opacity" />
            </motion.span>
          )}
        </motion.span>
        
        {/* Magnet / Hover Indicator */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              layoutId="nav-hover-bg"
              className="absolute inset-0 bg-brand/5 dark:bg-white/5 rounded-xl border border-brand/10 dark:border-white/10 -z-10 shadow-[0_0_20px_rgba(var(--brand-rgb),0.1)]"
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          )}
        </AnimatePresence>
      </Link>

      {/* Mega Menu / Dropdown */}
      <AnimatePresence>
        {isHovered && link.subLinks && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 10, scale: 0.95, rotateX: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 pointer-events-auto"
            style={{ perspective: "2000px" }}
          >
            <div className="w-[640px] bg-background border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[32px] p-8 grid grid-cols-2 gap-x-10 gap-y-6 overflow-hidden relative antialiased group/menu">
               {/* Safe Harbor Bridge */}
               <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
               
               {/* Advanced Glassmorphic Accents */}
               <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
               <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />
               
               <div className="col-span-2 mb-2">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 flex items-center gap-2">
                   <Sparkles className="h-3 w-3 text-brand" />
                   {link.label} Solutions
                 </h4>
               </div>

               {link.subLinks.map((sub, idx) => (
                 <motion.div
                  key={sub.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                 >
                   {sub.subLinks ? (
                     <div className="space-y-3">
                        <div className="flex items-center gap-2 font-semibold text-sm">
                          {sub.icon && <sub.icon className="h-4 w-4 text-brand" />}
                          {sub.label}
                        </div>
                        <ul className="space-y-1.5 pl-6 border-l border-border/50 ml-2">
                          {sub.subLinks.slice(0, 4).map(inner => (
                            <li key={inner.href}>
                              <Link 
                                href={inner.href} 
                                onClick={handleLinkClick}
                                className="text-xs text-muted-foreground hover:text-brand transition-colors block py-0.5"
                              >
                                {inner.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                     </div>
                   ) : (
                    <Link 
                      href={sub.href} 
                      onClick={handleLinkClick}
                      className="group/sub flex items-start gap-3 p-2 rounded-xl hover:bg-secondary/50 transition-all border border-transparent hover:border-border/50"
                    >
                      <div className="mt-1 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover/sub:bg-brand group-hover/sub:text-white transition-colors">
                        {sub.icon && <sub.icon className="h-4 w-4" />}
                      </div>
                      <div>
                        <div className="text-sm font-semibold group-hover/sub:text-brand transition-colors flex items-center gap-1">
                          {sub.label}
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover/sub:opacity-100 transition-all -translate-x-1 group-hover/sub:translate-x-0" />
                        </div>
                        <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                          Enterprise-grade technology solutions.
                        </div>
                      </div>
                    </Link>
                   )}
                 </motion.div>
               ))}
               
               <div className="col-span-2 mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
                  <div className="text-[10px] text-muted-foreground italic flex items-center gap-1">
                    <Headphones className="h-3 w-3" /> 24/7 Expert Support Available
                  </div>
                  <Link 
                    href={link.href} 
                    onClick={handleLinkClick}
                    className="text-xs font-bold text-brand hover:underline flex items-center gap-1"
                  >
                    View All {link.label} <Menu className="h-3 w-3" />
                  </Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);
  const pathname = usePathname();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const highlightOpacity = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Premium Metallic Top-Line Reflection */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-50 pointer-events-none" />
      
      {/* Light Reflection Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      </div>

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

              <NavIndicator activeRect={hoverRect} isHovering={!!hoveredLink} />
            </nav>

            <div className="ml-6 hidden items-center gap-3 md:flex relative z-20">
              <ThemeToggle />
              <Button 
                onClick={openSupportDesk} 
                className="rounded-full px-5 bg-primary text-primary-foreground hover:bg-brand hover:text-white transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-brand/20 active:scale-95"
              >
                <Headphones className="mr-2 h-4 w-4" /> 
                <span className="text-sm font-bold">Support</span>
              </Button>
            </div>

            {/* Mobile Nav */}
            <div className="ml-auto flex items-center md:hidden gap-2 relative z-20">
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary transition-colors">
                    <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}>
                      {isMobileMenuOpen ? <X /> : <Menu />}
                    </motion.div>
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-xl border-l border-white/10 p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex h-full flex-col">
                    <div className="p-6 flex items-center justify-between border-b border-border/50 bg-secondary/10">
                      <Logo />
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <X className="h-6 w-6" />
                        </Button>
                      </SheetTrigger>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto px-6 py-8">
                      <nav className="flex flex-col gap-6">
                        {PRIMARY_NAV_LINKS.map((link, idx) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {link.subLinks ? (
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={link.label} className="border-none">
                                  <AccordionTrigger className="py-2 text-2xl font-bold hover:no-underline text-foreground tracking-tight">
                                    {link.label}
                                  </AccordionTrigger>
                                  <AccordionContent className="pt-2 pb-4 px-4">
                                    <div className="grid gap-4">
                                      {link.subLinks.map(sub => (
                                        <div key={sub.href}>
                                          <Link 
                                            href={sub.href} 
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 py-2 text-lg font-medium text-muted-foreground hover:text-brand transition-colors"
                                          >
                                            {sub.icon && <sub.icon className="h-5 w-5 text-brand" />}
                                            {sub.label}
                                          </Link>
                                          {sub.subLinks && (
                                            <div className="pl-8 mt-2 space-y-2 border-l-2 border-secondary">
                                              {sub.subLinks.map(inner => (
                                                <Link 
                                                  key={inner.href} 
                                                  href={inner.href}
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                                  className="block text-sm text-muted-foreground/70 hover:text-brand"
                                                >
                                                  {inner.label}
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "text-2xl font-bold tracking-tight transition-colors",
                                  pathname === link.href ? "text-brand" : "text-foreground"
                                )}
                              >
                                {link.label}
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </nav>
                    </div>

                    <div className="p-6 border-t border-border/50 bg-secondary/5 space-y-4">
                       <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-muted-foreground">More Links</p>
                          <div className="h-px flex-1 bg-border/50 ml-4" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          {SECONDARY_NAV_LINKS.map(link => (
                            <Link 
                              key={link.href} 
                              href={link.href} 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-sm text-muted-foreground hover:text-brand"
                            >
                              {link.label}
                            </Link>
                          ))}
                       </div>
                       <Button 
                        size="lg" 
                        className="w-full rounded-2xl h-14 text-lg font-bold bg-brand hover:bg-brand/90 text-white"
                        onClick={() => { setIsMobileMenuOpen(false); openSupportDesk(); }}
                       >
                         <Headphones className="mr-3 h-6 w-6" /> Contact Support
                       </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
