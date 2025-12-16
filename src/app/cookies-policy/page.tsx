'use client';

import { useEffect, useState } from 'react';
import {
  Cookie,
  Layers,
  Settings,
  ExternalLink,
  SlidersHorizontal,
  Shield,
  History,
  Mail,
  Phone,
} from 'lucide-react';

const sections = [
  { id: 'what-are-cookies', title: '1. What Are Cookies?' },
  { id: 'types-of-cookies', title: '2. Types of Cookies We Use' },
  { id: 'how-we-use-cookies', title: '3. How We Use Cookies' },
  { id: 'third-party-cookies', title: '4. Third-Party Cookies' },
  { id: 'managing-preferences', title: '5. Managing Cookie Preferences' },
  { id: 'data-privacy', title: '6. Cookies & Data Privacy' },
  { id: 'changes-to-policy', title: '7. Changes to This Cookies Policy' },
  { id: 'contact-information', title: '8. Contact Information' },
];

export default function CookiesPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Cookies Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Enhancing experience through transparency, choice, and control.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Last Updated: {currentDate || '...'}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4 sticky top-24 h-max hidden lg:block">
            <h3 className="font-semibold text-lg mb-4">On This Page</h3>
            <ul className="space-y-2">
              {sections.map(section => (
                 <li key={section.id}>
                    <a href={`#${section.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {section.title}
                    </a>
                </li>
              ))}
            </ul>
          </aside>
          
          <main className="lg:w-3/4 space-y-8">
             <div className="prose-lg max-w-none text-muted-foreground">
              <p>Cyrotics Technologies (OPC) Pvt. Ltd. ("Company", "we", "our", "us") uses cookies and similar tracking technologies on its website to enhance user experience, improve performance, ensure security, and maintain transparency. This Cookies Policy explains what cookies are, how we use them, and how you can manage your preferences.</p>
              <p>By continuing to use our website, you consent to the use of cookies in accordance with this Cookies Policy, unless you choose to disable them.</p>
            </div>

            <div id="what-are-cookies" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Cookie /> 1. What Are Cookies?</h2>
                <p className="text-muted-foreground">Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. Cookies help websites recognize user devices, remember preferences, and improve overall functionality and performance.</p>
                <p className="text-muted-foreground">Cookies may be <strong>session-based</strong> (deleted when you close your browser) or <strong>persistent</strong> (stored for a defined period or until deleted).</p>
            </div>
            
            <div id="types-of-cookies" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Layers /> 2. Types of Cookies We Use</h2>
                <h3 className="font-semibold text-lg text-foreground pt-2">2.1 Essential Cookies</h3>
                <p className="text-muted-foreground">These cookies are necessary for the website to function properly and cannot be disabled. They enable:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Website navigation</li>
                    <li>Secure access to protected areas</li>
                    <li>Session management</li>
                    <li>Basic functionality and security</li>
                 </ul>
                 <p className="text-muted-foreground">Without these cookies, certain features of the website may not operate correctly.</p>
                
                 <h3 className="font-semibold text-lg text-foreground pt-4">2.2 Performance & Analytics Cookies</h3>
                 <p className="text-muted-foreground">These cookies help us understand how visitors interact with our website by collecting anonymous usage data. They allow us to:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website performance and usability</li>
                    <li>Identify and fix technical issues</li>
                 </ul>
                 <p className="text-muted-foreground">All data collected through these cookies is aggregated and does not directly identify individual users.</p>

                 <h3 className="font-semibold text-lg text-foreground pt-4">2.3 Functional Cookies</h3>
                 <p className="text-muted-foreground">Functional cookies enable enhanced functionality and personalization, such as:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Remembering user preferences</li>
                    <li>Language or region selection</li>

                    <li>Improved user interface experience</li>
                 </ul>
                 <p className="text-muted-foreground">Disabling these cookies may affect certain personalized features of the website.</p>
            </div>

            <div id="how-we-use-cookies" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Settings /> 3. How We Use Cookies</h2>
                <p className="text-muted-foreground">We use cookies for the following purposes:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Ensuring website security and stability</li>
                    <li>Enhancing user experience</li>
                    <li>Understanding user behavior and preferences</li>
                    <li>Measuring website effectiveness</li>
                    <li>Supporting compliance and audit requirements</li>
                 </ul>
            </div>
            
            <div id="third-party-cookies" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><ExternalLink /> 4. Third-Party Cookies</h2>
                 <p className="text-muted-foreground">In some cases, we may use cookies provided by trusted third-party service providers for:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Analytics and performance monitoring</li>
                    <li>Embedded content (e.g., videos, maps)</li>
                    <li>Social media integrations</li>
                 </ul>
                 <p className="text-muted-foreground">Cyrotics Technologies does not control third-party cookies. Their use is governed by the respective third-party privacy and cookies policies.</p>
            </div>

            <div id="managing-preferences" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><SlidersHorizontal /> 5. Managing Cookie Preferences</h2>
                <p className="text-muted-foreground">You can manage or disable cookies through your browser settings at any time. Most browsers allow you to:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>View stored cookies</li>
                    <li>Delete cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies</li>
                 </ul>
                 <p className="text-muted-foreground">Please note that disabling cookies may impact website functionality and user experience.</p>
            </div>
            
            <div id="data-privacy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Shield /> 6. Cookies & Data Privacy</h2>
                <p className="text-muted-foreground">Cookies used on our website do not store sensitive personal information such as passwords, financial details, or identification numbers.</p>
                <p className="text-muted-foreground">For more information on how we handle personal data, please refer to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</p>
            </div>

            <div id="changes-to-policy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><History /> 7. Changes to This Cookies Policy</h2>
                <p className="text-muted-foreground">We reserve the right to update or modify this Cookies Policy at any time to reflect changes in technology, legal requirements, or business practices.</p>
                <p className="text-muted-foreground">Any changes will be effective immediately upon posting the updated policy on this page with a revised date.</p>
            </div>
            
            <div id="contact-information" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">8. Contact Information</h2>
                 <p className="text-muted-foreground">If you have any questions or concerns regarding this Cookies Policy or our use of cookies, please contact:</p>
                 <p className="text-muted-foreground flex items-center gap-2"><Mail /> <strong>Email:</strong> <a href="mailto:info@cyrotics.in" className="text-primary hover:underline">info@cyrotics.in</a></p>
                 <p className="text-muted-foreground flex items-center gap-2"><Phone /> <strong>Phone:</strong> <a href="tel:+919999295636" className="text-primary hover:underline">+91 9999295636</a></p>
            </div>
            
            <div className="text-center pt-8">
                <p className="font-semibold">© {new Date().getFullYear()} Cyrotics Technologies (OPC) Pvt. Ltd. All Rights Reserved.</p>
             </div>
          </main>
        </div>
      </section>
      
       <section className="bg-primary/5 py-16">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Transparency in Technology. Control in Your Hands.</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Cyrotics Technologies uses cookies responsibly to enhance performance, security, and user experience.
            </p>
        </div>
      </section>
    </div>
  );
}
