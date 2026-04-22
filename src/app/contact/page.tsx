'use client';

import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';
import ContactForms from './contact-forms';
import { companyAddress } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui-patterns/animated-section';
import { PageHero } from '@/components/ui-patterns/page-hero';

export default function ContactPage() {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(companyAddress.full)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress.full)}`;

  return (
    <main className="w-full bg-transparent overflow-hidden">
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
                  <h3 className="font-headline text-lg font-bold mb-5 relative z-10">Contact Information</h3>
                  
                  <div className="space-y-4 relative z-10">
                    {/* Address */}
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0 mt-0.5">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Corporate Office</p>
                        <p className="text-white font-semibold leading-snug group-hover:underline decoration-white/30 underline-offset-2">
                          {companyAddress.name}, {companyAddress.line1}, {companyAddress.line2}, {companyAddress.cityStateZip}
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+919999295636" className="flex items-center gap-3 group">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Phone</p>
                        <span className="text-white font-semibold group-hover:underline decoration-white/30 underline-offset-2">+91 99992 95636</span>
                      </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:info@cyrotics.in" className="flex items-center gap-3 group">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Email</p>
                        <span className="text-white font-semibold group-hover:underline decoration-white/30 underline-offset-2">info@cyrotics.in</span>
                      </div>
                    </a>

                    {/* Business Hours */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-lg shrink-0">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="text-white/70 font-medium text-xs mb-0.5">Business Hours</p>
                        <span className="text-white font-semibold">Mon – Sat, 9:00 AM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div className="overflow-hidden rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                  <iframe
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapEmbedUrl}>
                  </iframe>
                </div>

                {/* QUICK INFO */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-4 w-4 text-brand" />
                    <h4 className="font-headline text-sm font-bold text-foreground">Pan-India Delivery</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We execute complex IT infrastructure projects across India with consistent quality and on-time delivery.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
