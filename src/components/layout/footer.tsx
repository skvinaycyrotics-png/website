'use client';

import Link from 'next/link';
import {
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { socialLinks, footerQuickLinks } from '@/lib/constants';

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 px-4">
        {/* Sub-Footer Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4">
            <Logo />
            <h3 className="font-semibold mt-4">Cyrotics Technologies (OPC) Pvt. Ltd.</h3>
            <p className="text-sm italic text-muted-foreground mt-1">
              Engineering the Future. Securing the Present.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              A future‑driven technology company delivering{' '}
              <span className="font-semibold text-foreground">
                Data Centre Transformation, Network & Cyber Security, Automation, AV Solutions, Software Engineering, and Advanced Automotive Technologies
              </span>
              . We design, build, and secure intelligent infrastructures that empower businesses to scale with confidence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-5">
            <h3 className="font-semibold tracking-wide">Quick Links</h3>
            <div className="mt-4 grid grid-cols-3 gap-8">
                {footerQuickLinks.map((column, index) => (
                     <ul key={index} className="space-y-2">
                        {column.map(link => (
                             <li key={link.href}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                                    {link.label}
                                </Link>
                             </li>
                        ))}
                     </ul>
                ))}
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold tracking-wide">Contact Information</h3>
            <div className="mt-4 space-y-4 text-sm">
                <div>
                    <h4 className="font-medium text-foreground">Corporate Office</h4>
                    <address className="not-italic text-muted-foreground">
                        Cyrotics Technologies (OPC) Pvt. Ltd.<br/>
                        86/2, Street No.-54/V/3, Ist 60 Feet Road,<br/>
                        Molarband Extension, Badarpur Border,<br/>
                        New Delhi – 110044, India
                    </address>
                </div>
                 <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <a href="tel:+919999295636" className="text-muted-foreground hover:text-primary">+91 99992 95636</a>
                </div>
                 <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:info@cyrotics.in" className="text-muted-foreground hover:text-primary">info@cyrotics.in</a>
                </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Sub-Footer Row 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                {legalLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-xs text-muted-foreground hover:text-primary">
                        {link.label}
                    </Link>
                ))}
           </div>
            <div className="flex items-center gap-4">
               <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                        <a
                        key={social.name}
                        href={social.href}
                        className="text-muted-foreground hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                        </a>
                    ))}
                </div>
                 <Button variant="outline" size="icon" onClick={handleScrollToTop} aria-label="Go to top">
                    <ArrowUp className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
      
       <div className="border-t bg-primary/10">
         <div className="container py-4 text-center text-xs text-muted-foreground">
            <p>&copy; {year} CYROTICS TECHNOLOGIES OPC PVT LTD. All Rights Reserved.</p>
            <p className="italic mt-1">Built with precision, security, and innovation — Made in India, Trusted Globally.</p>
         </div>
       </div>
    </footer>
  );
}
