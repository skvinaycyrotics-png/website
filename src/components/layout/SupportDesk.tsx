'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  MapPin,
  X,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Headphones,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Logo } from '../logo';
import { useState, useEffect } from 'react';

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export function SupportDesk() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleOpenSupportDesk = () => setIsOpen(true);
    
    document.addEventListener('open-support-desk', handleOpenSupportDesk);

    return () => {
      document.removeEventListener('open-support-desk', handleOpenSupportDesk);
    };
  }, []);

  if (!isMounted) {
    return null; // Don't render on the server
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* The trigger is not rendered, but Sheet needs a trigger */}
      <SheetTrigger asChild>
        <button className="sr-only" aria-hidden="true">Open Support Desk</button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-md p-0">
        <div className="flex h-full flex-col">
          <SheetHeader className="p-6 text-left">
            <SheetTitle className="sr-only">Support Desk</SheetTitle>
            <div className="flex items-center justify-between">
              <Logo />
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 font-semibold text-lg">About Us</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <p>
                    At Cyrotics Technologies (OPC) Private Limited, we are driven
                    by innovation, powered by passion, and committed to
                    transforming the future of technology—one project at a time.
                  </p>
                  <p>
                    Founded with a vision to deliver next-generation IT & ELV
                    Infrastructure solutions, we have grown into a trusted
                    partner for government institutions, medical colleges,
                    airports, commercial complexes, data centers, and leading
                    private organizations across India.
                  </p>
                  <blockquote className="border-l-2 border-primary pl-4 italic">
                    “Technology should empower progress, inspire growth, and
                    create a smarter, safer, and more connected world.”
                  </blockquote>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="mb-4 font-semibold text-lg">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold text-foreground">
                        Corporate Office
                      </span>
                      <span className="text-muted-foreground">
                        Cyrotics Technologies (OPC) Pvt. Ltd.
                        <br />
                        86/2, Street No.-54/V/3, Ist 60 Feet Road,
                        <br />
                        Molarband Extension, Badarpur Border,
                        <br />
                        New Delhi – 110044, India
                      </span>
                    </div>
                  </div>
                  <a
                    href="tel:+919999295636"
                    className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="flex flex-col text-sm">
                      <span className="font-semibold text-foreground">Phone</span>
                      <span>+91 9999295636</span>
                    </span>
                  </a>
                  <a
                    href="mailto:info@cyrotics.in"
                    className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="flex flex-col text-sm">
                      <span className="font-semibold text-foreground">Email</span>
                      <span>info@cyrotics.in</span>
                    </span>
                  </a>
                </div>
              </div>
              <Separator />
               <div>
                  <h3 className="mb-4 font-semibold text-lg">Follow Us</h3>
                   <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="text-muted-foreground hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
