
'use client';

import Link from 'next/link';
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Headphones
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/logo';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { socialLinks, footerQuickLinks, companyAddress } from '@/lib/constants';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookies-policy", label: "Cookies Policy" },
    { href: "/legal-terms", label: "Legal Terms" },
    { href: "/refund-policy", label: "Refund & Cancellation" },
    { href: "/sitemap", label: "Sitemap" },
]

export function Footer() {
  const year = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const openSupportDesk = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.dispatchEvent(new Event('open-support-desk'));
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <footer ref={footerRef} className="border-t bg-background relative overflow-hidden pt-20">
        {/* Futuristic Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
        </div>

        <motion.div 
          className="container relative z-10 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Column 1: Brand Identity */}
            <motion.div className="lg:col-span-4" variants={itemVariants}>
              <Logo className="mb-6" />
              <h3 className="font-bold text-lg tracking-tight text-foreground">Cyrotics Technologies (OPC) Pvt. Ltd.</h3>
              <p className="text-xs font-semibold text-brand uppercase tracking-widest mt-1 mb-4">
                Engineering the Future. Securing the Present.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                A future‑driven technology company delivering <span className="text-foreground font-medium">data center transformation, network infrastructure, cyber security, and AI-driven solutions.</span> We empower digital growth for government and enterprise organizations with engineering excellence.
              </p>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div className="lg:col-span-5" variants={itemVariants}>
              <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-8">Navigation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {footerQuickLinks.map((column, colIdx) => (
                      <ul key={colIdx} className="space-y-4">
                          {column.map(link => (
                              <li key={link.label} className="group/link">
                                  <a 
                                    href={link.href} 
                                    onClick={link.href === '#' ? openSupportDesk : undefined}
                                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group-hover/link:translate-x-1"
                                  >
                                      <ChevronRight className="h-3 w-3 text-brand opacity-0 -ml-5 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                                      <span className="relative">
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover/link:w-full" />
                                      </span>
                                  </a>
                              </li>
                          ))}
                      </ul>
                  ))}
              </div>
            </motion.div>

            {/* Column 3: Contact Information */}
            <motion.div className="lg:col-span-3" variants={itemVariants}>
              <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-8">Connect</h3>
              <div className="space-y-6">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress.full)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-4 group/contact"
                  >
                      <div className="p-2.5 rounded-xl bg-secondary/50 group-hover/contact:bg-brand group-hover/contact:text-white transition-all duration-300">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                          <h4 className="font-semibold text-sm text-foreground mb-1">Corporate Office</h4>
                          <address className="not-italic text-xs text-muted-foreground leading-relaxed group-hover/contact:text-primary transition-colors">
                              {companyAddress.name}<br/>
                              {companyAddress.line1}<br/>
                              {companyAddress.line2}<br/>
                              {companyAddress.cityStateZip}
                          </address>
                      </div>
                  </a>
                  <a href="tel:+919999295636" className="flex items-center gap-4 group/contact">
                      <div className="p-2.5 rounded-xl bg-secondary/50 group-hover/contact:bg-brand group-hover/contact:text-white transition-all duration-300">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                          <h4 className="font-semibold text-sm text-foreground mb-0.5">Phone</h4>
                          <span className="text-xs text-muted-foreground group-hover/contact:text-primary transition-colors">+91 99992 95636</span>
                      </div>
                  </a>
                  <a href="mailto:info@cyrotics.in" className="flex items-center gap-4 group/contact">
                      <div className="p-2.5 rounded-xl bg-secondary/50 group-hover/contact:bg-brand group-hover/contact:text-white transition-all duration-300">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                          <h4 className="font-semibold text-sm text-foreground mb-0.5">Email</h4>
                          <span className="text-xs text-muted-foreground group-hover/contact:text-primary transition-colors">info@cyrotics.in</span>
                      </div>
                  </a>
              </div>
            </motion.div>
          </div>

          <Separator className="bg-white/5 dark:bg-zinc-800/50" />

          {/* Bottom Bar */}
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                  {legalLinks.map(link => (
                      <Link key={link.href} href={link.href} className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-brand transition-colors">
                          {link.label}
                      </Link>
                  ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                        <motion.div key={social.name} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="icon" asChild className="rounded-xl border-white/10 bg-secondary/30 hover:bg-brand hover:text-white hover:border-brand transition-all duration-300">
                              <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <social.icon className="h-4 w-4" />
                                <span className="sr-only">{social.name}</span>
                              </a>
                          </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </motion.div>
        
        <div className="bg-secondary/10 border-t border-white/5 py-6">
          <div className="container text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                &copy; {year} CYROTICS TECHNOLOGIES OPC PVT LTD. All Rights Reserved.
              </p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-brand/30" />
                <p className="text-[10px] italic text-muted-foreground/40 italic">Built with precision, security, and innovation — Made in India, Trusted Globally.</p>
                <div className="h-px w-8 bg-brand/30" />
              </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScroll ? 1 : 0, scale: showScroll ? 1 : 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={handleScrollToTop}
          className="rounded-xl h-12 w-12 bg-background/80 backdrop-blur-xl border-brand/20 shadow-2xl shadow-brand/20 hover:bg-brand hover:text-white hover:border-brand transition-all"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </>
  );
}
