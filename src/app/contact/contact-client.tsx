'use client';

// ─────────────────────────────────────────────────────────────────────────────
// All contact page UI — completely updated with a bulletproof local CSS map card
// ─────────────────────────────────────────────────────────────────────────────

import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';
import ContactForms from './contact-forms';
import { companyAddress } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui-patterns/animated-section';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { Button } from '@/components/ui/button';

export default function ContactClient() {
  const mapUrl = `https://google.com{encodeURIComponent(companyAddress.full)}`;

  return (
    <main
        className="w-full bg-transparent overflow-hidden"
        role="main"
    >   
      {/* COMPACT HERO */}
      <PageHero
        title="Get in Touch"
        description="We're here to answer your questions and help you find the right technology solution for your enterprise."
        icon={Send}
        heroImage="/bg-tech-v2.png"
      />

      {/* TWO-COLUMN CONTACT LAYOUT */}
      <section className="pb-16 sm:pb-20 relative">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT: FORM */}
            <AnimatedSection
              className="lg:col-span-7 xl:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 p-5 sm:p-8">
                <ContactForms />
              </div>
            </AnimatedSection>

            {/* RIGHT: INFO + MAP (Sticky Sidebar) */}
            <AnimatedSection
              className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="space-y-5">
                {/* CONTACT INFO CARD */}
                <div className="bg-brand text-white rounded-2xl shadow-lg p-6 overflow-hidden relative">
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <h2 className="font-headline text-lg font-bold mb-5 relative z-10">
                    Contact Information
                  </h2>

                  <div className="space-y-4 relative z-10">
                    {/* Address */}
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Cyrotics office location in Google Maps"
                      className="flex items-start gap-3 group"
                    >
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0 mt-0.5">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Corporate Office</p>
                        <p className="text-white font-semibold leading-snug group-hover:underline decoration-white/30 underline-offset-2">
                          {companyAddress.name}, {companyAddress.line1}, {companyAddress.line2},{' '}
                          {companyAddress.cityStateZip}
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a 
                        href="tel:+919999295636" 
                        aria-label="Call Cyrotics"
                        className="flex items-center gap-3 group"
                    >
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Phone</p>
                        <span className="text-white font-semibold group-hover:underline decoration-white/30 underline-offset-2">
                          +91 99992 95636
                        </span>
                      </div>
                    </a>

                    {/* Email */}
                    <a 
                        href="mailto:info@cyrotics.in?subject=Business%20Inquiry%20-%20Cyrotics" 
                        aria-label="Email Cyrotics"
                        className="flex items-center gap-3 group"
                    >
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Email</p>
                        <span className="text-white font-semibold group-hover:underline decoration-white/30 underline-offset-2">
                          info@cyrotics.in
                        </span>
                      </div>
                    </a>

                    {/* Business Hours */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-lg shrink-0">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Business Hours</p>
                        <span className="text-white font-semibold">
                          Mon – Sat, 9:00 AM – 6:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BULLETPROOF LOCAL INTERACTIVE MAP CARD (No External Connections) */}
                <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 space-y-4 shadow-sm">
                  <div 
                    className="w-full h-[180px] rounded-xl relative overflow-hidden bg-zinc-950 flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:opacity-95 transition-all group"
                    onClick={() => window.open(mapUrl, '_blank', 'noopener,noreferrer')}
                  >
                    {/* Fixed inline CSS properties with clean string syntax */}
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none" 
                      style={{ 
                        backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
                        backgroundSize: '24px 24px, 48px 48px, 48px 48px'
                      }} 
                    />
                    
                    {/* Subtle Radar Wave Animation */}
                    <div className="absolute h-24 w-24 rounded-full bg-brand/20 animate-ping pointer-events-none" />

                    <div className="bg-brand text-white p-3.5 rounded-full shadow-xl relative z-10 group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white fill-white/20" />
                    </div>
                    
                    <p className="text-xs text-zinc-200 font-semibold mt-4 relative z-10 tracking-wide drop-shadow-md">
                      {companyAddress.line2 || 'Molarband Extension, New Delhi'}
                    </p>
                    <p className="text-[10px] text-zinc-400 mt-1 relative z-10 max-w-[200px] font-medium">
                      Click card to open navigation
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Our corporate headquarters location is fully verified. Select the connection link below to pull active mapping routes securely.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full text-xs font-semibold py-4 flex items-center justify-center gap-2 border-zinc-200 dark:border-zinc-800 bg-transparent text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-800"
                      onClick={() => window.open(mapUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>

                {/* QUICK INFO */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-4 w-4 text-brand" />
                    <h4 className="font-headline text-sm font-bold text-foreground">
                      Pan-India Delivery
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We execute complex IT infrastructure projects across India with consistent
                    quality and on-time delivery.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
