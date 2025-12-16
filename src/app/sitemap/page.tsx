'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Briefcase,
  BookOpen,
  ShieldCheck,
  Share2,
  Mail,
  Phone,
  Layers,
  Users,
  GanttChartSquare,
  Headphones,
  Newspaper,
  Award,
  Gavel,
  Cookie,
  RotateCw,
} from 'lucide-react';

const sections = [
  { id: 'core-pages', title: '1. Core Pages', icon: Home },
  { id: 'services-solutions', title: '2. Services & Solutions', icon: Briefcase },
  { id: 'knowledge-careers', title: '3. Knowledge & Careers', icon: BookOpen },
  { id: 'trust-compliance', title: '4. Trust, Compliance & Legal', icon: ShieldCheck },
  { id: 'social-channels', title: '5. External & Social Channels', icon: Share2 },
  { id: 'contact-info', title: '6. Contact Information', icon: Mail },
];

const sitemapData = {
  core: [
    { href: '/', label: 'Home', description: 'Overview of Cyrotics Technologies, vision, and core offerings' },
    { href: '/about', label: 'About Us', description: 'Company profile, mission, values, and leadership' },
    { href: '/contact', label: 'Contact Us', description: 'Corporate contact details and communication channels' },
    { href: '/services', label: 'FAQs', description: 'Frequently asked questions related to services and processes' },
  ],
  services: [
    { href: '/services', label: 'Services', description: 'Detailed overview of our professional service offerings' },
    { href: '/business-sector/overview', label: 'Business Sectors', description: 'Industries and sectors we serve' },
    { href: '/projects', label: 'Projects', description: 'Selected projects and implementation highlights' },
    { href: '#', label: 'Support Desk', description: 'Technical support and service assistance' },
  ],
  knowledge: [
    { href: '/blog', label: 'Blogs', description: 'Insights, updates, and knowledge articles' },
    { href: '/careers', label: 'Careers', description: 'Job opportunities and professional growth at Cyrotics' },
  ],
  legal: [
    { href: '/trust-and-compliance', label: 'Trust & Compliance', description: 'Security, ethics, and compliance commitments' },
    { href: '/terms-of-service', label: 'Terms of Service', description: 'Conditions governing the use of our website and services' },
    { href: '/legal-terms', label: 'Legal Terms', description: 'Legal notices, disclaimers, and IP rights' },
    { href: '/privacy-policy', label: 'Privacy Policy', description: 'How we collect, use, and protect personal data' },
    { href: '/cookies-policy', label: 'Cookies Policy', description: 'Information on cookies and tracking technologies' },
    { href: '/refund-policy', label: 'Refund & Cancellation Policy', description: 'Policies related to service cancellations and refunds' },
  ],
  social: [
      { href: '#', label: 'LinkedIn', description: 'Corporate updates and professional engagement' },
      { href: '#', label: 'Twitter (X)', description: 'News and announcements' },
      { href: '#', label: 'YouTube', description: 'Videos, demos, and presentations' },
      { href: '#', label: 'Instagram', description: 'Company culture and highlights' },
      { href: '#', label: 'Facebook', description: 'Community and brand presence' },
  ]
};

export default function SitemapPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            A structured overview of Cyrotics Technologies’ digital ecosystem.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4 sticky top-24 h-max hidden lg:block">
            <h3 className="font-semibold text-lg mb-4">On This Page</h3>
            <ul className="space-y-2">
              {sections.map(section => (
                 <li key={section.id}>
                    <a href={`#${section.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <section.icon className="h-4 w-4" /> {section.title}
                    </a>
                </li>
              ))}
            </ul>
          </aside>

          <main className="lg:w-3/4 space-y-8">
            <div className="prose-lg max-w-none text-muted-foreground">
              <p>Welcome to the Sitemap of <strong>Cyrotics Technologies</strong>. This page provides a clear, structured overview of all publicly accessible sections of our website, enabling users, partners, auditors, and search engines to easily navigate our digital presence.</p>
            </div>
            
            <div id="core-pages" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Home /> Core Pages</h2>
                <ul className="space-y-3">
                    {sitemapData.core.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="font-semibold text-primary hover:underline">{link.label}</Link>
                            <p className="text-sm text-muted-foreground ml-4">– {link.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div id="services-solutions" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Briefcase /> Services & Solutions</h2>
                <ul className="space-y-3">
                    {sitemapData.services.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="font-semibold text-primary hover:underline">{link.label}</Link>
                            <p className="text-sm text-muted-foreground ml-4">– {link.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div id="knowledge-careers" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><BookOpen /> Knowledge & Careers</h2>
                 <ul className="space-y-3">
                    {sitemapData.knowledge.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="font-semibold text-primary hover:underline">{link.label}</Link>
                            <p className="text-sm text-muted-foreground ml-4">– {link.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div id="trust-compliance" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><ShieldCheck /> Trust, Compliance & Legal</h2>
                 <ul className="space-y-3">
                    {sitemapData.legal.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="font-semibold text-primary hover:underline">{link.label}</Link>
                            <p className="text-sm text-muted-foreground ml-4">– {link.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div id="social-channels" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Share2 /> External & Social Channels</h2>
                 <ul className="space-y-3">
                    {sitemapData.social.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="font-semibold text-primary hover:underline">{link.label}</Link>
                            <p className="text-sm text-muted-foreground ml-4">– {link.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
             <div id="contact-info" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">Contact Information</h2>
                 <p className="text-muted-foreground">For any questions regarding this Sitemap or website navigation, please contact:</p>
                 <p className="text-muted-foreground flex items-center gap-2">📧 **Email:** <a href="mailto:info@cyrotics.in" className="text-primary hover:underline">info@cyrotics.in</a></p>
                 <p className="text-muted-foreground flex items-center gap-2">📞 **Phone:** <a href="tel:+919999295636" className="text-primary hover:underline">+91 9999295636</a></p>
            </div>
            
             <div className="text-center pt-8">
                <p className="font-semibold">© {new Date().getFullYear()} Cyrotics Technologies (OPC) Pvt. Ltd. All Rights Reserved.</p>
             </div>
          </main>
        </div>
      </section>
      
       <section className="bg-primary/5 py-16">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Clarity in Structure. Simplicity in Navigation.</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
               Our website is designed for transparency, enabling easy access to information for all our stakeholders.
            </p>
        </div>
      </section>
    </div>
  );
}
