'use client';

import { useEffect, useState } from 'react';
import {
  Database,
  Settings,
  Gavel,
  Network,
  Clock,
  Shield,
  UserCheck,
  Cookie,
  ExternalLink,
  Globe,
  History,
  Mail,
  Phone,
} from 'lucide-react';

const sections = [
  { id: 'information-we-collect', title: '1. Information We Collect' },
  { id: 'how-we-use-information', title: '2. How We Use Your Information' },
  { id: 'legal-basis', title: '3. Legal Basis for Processing' },
  { id: 'data-sharing', title: '4. Data Sharing & Disclosure' },
  { id: 'data-retention', title: '5. Data Retention' },
  { id: 'data-security', title: '6. Data Security' },
  { id: 'user-rights', title: '7. User Rights' },
  { id: 'cookies-policy', title: '8. Cookies Policy Reference' },
  { id: 'third-party', title: '9. Third-Party Websites' },
  { id: 'data-transfers', title: '10. International Data Transfers' },
  { id: 'childrens-privacy', title: '11. Children’s Privacy' },
  { id: 'changes-to-policy', title: '12. Changes to This Privacy Policy' },
  { id: 'contact-information', title: '13. Contact Information' },
];

export default function PrivacyPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Protecting your data. Respecting your privacy. Ensuring digital trust.
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
              <p>Cyrotics Technologies (OPC) Pvt. Ltd. ("Company", "we", "our", "us") is committed to protecting the privacy and personal data of visitors, clients, partners, and users of our website and services. This Privacy Policy explains how we collect, use, disclose, store, and protect personal information in accordance with applicable data protection laws, including the Information Technology Act, 2000 and applicable global best practices.</p>
              <p>By accessing or using our website or services, you consent to the practices described in this Privacy Policy.</p>
            </div>

            <div id="information-we-collect" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Database /> 1. Information We Collect</h2>
                <p className="text-muted-foreground">We may collect the following categories of information:</p>
                <h3 className="font-semibold text-lg text-foreground pt-2">1.1 Personal Information</h3>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name and designation</li>
                    <li>Billing or business contact details</li>
                 </ul>
                 <h3 className="font-semibold text-lg text-foreground pt-2">1.2 Technical & Usage Information</h3>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Website usage data, pages visited, and interaction logs</li>
                 </ul>
                  <h3 className="font-semibold text-lg text-foreground pt-2">1.3 Cookies & Tracking Technologies</h3>
                  <p className="text-muted-foreground">We use cookies and similar technologies to improve user experience, analyze website performance, and enhance security. Detailed information is provided in our Cookies Policy.</p>
            </div>
            
            <div id="how-we-use-information" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Settings /> 2. How We Use Your Information</h2>
                <p className="text-muted-foreground">We use collected information for purposes including:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Providing and managing our services</li>
                    <li>Responding to inquiries and support requests</li>
                    <li>Business communication and updates</li>
                    <li>Website analytics and performance improvement</li>
                    <li>Legal, regulatory, and compliance obligations</li>
                    <li>Security monitoring and fraud prevention</li>
                 </ul>
            </div>

            <div id="legal-basis" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Gavel /> 3. Legal Basis for Processing</h2>
                <p className="text-muted-foreground">We process personal data based on one or more of the following legal grounds:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>User consent</li>
                    <li>Performance of contractual obligations</li>
                    <li>Compliance with legal obligations</li>
                    <li>Legitimate business interests</li>
                 </ul>
            </div>
            
            <div id="data-sharing" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Network /> 4. Data Sharing & Disclosure</h2>
                <p className="text-muted-foreground">We do not sell, rent, or trade personal information. Information may be shared only with:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Authorized employees and internal teams</li>
                    <li>Trusted service providers under confidentiality obligations</li>
                    <li>Government or regulatory authorities where required by law</li>
                 </ul>
            </div>

            <div id="data-retention" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Clock /> 5. Data Retention</h2>
                <p className="text-muted-foreground">We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
            </div>
            
            <div id="data-security" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Shield /> 6. Data Security</h2>
                <p className="text-muted-foreground">We implement reasonable technical and organizational measures to safeguard personal data against unauthorized access, alteration, disclosure, or destruction, including:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Secure servers and access controls</li>
                    <li>Network and system security measures</li>
                    <li>Periodic security reviews</li>
                 </ul>
                 <p className="text-muted-foreground">However, no method of data transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div id="user-rights" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><UserCheck /> 7. User Rights</h2>
                <p className="text-muted-foreground">Subject to applicable laws, users may have the right to:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access personal data</li>
                    <li>Request correction or update of data</li>
                    <li>Request deletion of personal data</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Object to certain processing activities</li>
                 </ul>
                 <p className="text-muted-foreground">Requests may be submitted using the contact details provided below.</p>
            </div>

            <div id="cookies-policy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Cookie /> 8. Cookies Policy Reference</h2>
                <p className="text-muted-foreground">Our use of cookies and similar technologies is governed by our separate <a href="/cookies-policy" className="text-primary hover:underline">Cookies Policy</a>, which provides detailed information on cookie types, usage, and management options.</p>
            </div>
            
            <div id="third-party" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><ExternalLink /> 9. Third-Party Websites</h2>
                <p className="text-muted-foreground">Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of external websites. Users are encouraged to review the privacy policies of those websites.</p>
            </div>

            <div id="data-transfers" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Globe /> 10. International Data Transfers</h2>
                <p className="text-muted-foreground">Where required for business operations, personal data may be processed or stored outside India in compliance with applicable data protection laws and adequate safeguards.</p>
            </div>
            
            <div id="childrens-privacy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Shield /> 11. Children’s Privacy</h2>
                <p className="text-muted-foreground">Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
            </div>

             <div id="changes-to-policy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><History /> 12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting the updated version on this page with a revised date.</p>
                 <p className="text-muted-foreground">Continued use of our website or services constitutes acceptance of the updated Privacy Policy.</p>
            </div>
            
            <div id="contact-information" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">13. Contact Information</h2>
                 <p className="text-muted-foreground">For questions, concerns, or requests regarding this Privacy Policy or personal data handling, please contact:</p>
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
            <h2 className="font-headline text-3xl font-bold">Privacy by Design. Security by Default. Trust by Commitment.</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Cyrotics Technologies safeguards data with responsibility, transparency, and compliance.
            </p>
        </div>
      </section>
    </div>
  );
}
