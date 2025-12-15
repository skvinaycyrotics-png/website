'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'company-info', title: '1. Company Information' },
  { id: 'scope-of-services', title: '2. Scope of Services' },
  { id: 'eligibility', title: '3. Eligibility' },
  { id: 'user-responsibilities', title: '4. User Responsibilities' },
  { id: 'intellectual-property', title: '5. Intellectual Property Rights' },
  { id: 'payments', title: '6. Payments & Commercial Terms' },
  { id: 'confidentiality', title: '7. Confidentiality' },
  { id: 'service-availability', title: '8. Service Availability & Modifications' },
  { id: 'limitation-of-liability', title: '9. Limitation of Liability' },
  { id: 'indemnification', title: '10. Indemnification' },
  { id: 'termination', title: '11. Termination' },
  { id: 'third-party', title: '12. Third-Party Services & Links' },
  { id: 'force-majeure', title: '13. Force Majeure' },
  { id: 'governing-law', title: '14. Governing Law & Jurisdiction' },
  { id: 'amendments', title: '15. Amendments' },
  { id: 'contact', title: '16. Contact Information' },
];

export default function TermsOfServicePage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
             Defining trust, responsibility, and transparency in every digital engagement.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Effective Date: {currentDate || '...'}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* Sticky Nav */}
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

          {/* Content */}
          <main className="lg:w-3/4 space-y-8">
            <div className="prose-lg max-w-none text-muted-foreground">
              <p>Welcome to <strong>Cyrotics Technologies (OPC) Pvt. Ltd.</strong> ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your access to and use of our website, platforms, products, and services. By accessing or using our services, you agree to be bound by these Terms.</p>
            </div>
            
            <div id="company-info" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">1. Company Information</h2>
                <address className="not-italic text-muted-foreground">
                    <strong>Cyrotics Technologies (OPC) Pvt. Ltd.</strong><br/>
                    Registered Office:<br/>
                    86/2, Street No.-54/V/3, Ist 60 Feet Road,<br/>
                    Molarband Extension, Badarpur Border,<br/>
                    New Delhi – 110044, India
                </address>
                <p className="text-muted-foreground">Email: <a href="mailto:info@cyrotics.in" className="text-primary hover:underline">info@cyrotics.in</a></p>
                <p className="text-muted-foreground">Phone: <a href="tel:+919999295636" className="text-primary hover:underline">+91 9999295636</a></p>
            </div>

            <div id="scope-of-services" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">2. Scope of Services</h2>
                <p className="text-muted-foreground">Cyrotics Technologies provides services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>IT & Network Infrastructure Solutions</li>
                    <li>Data Center Design, Modification & Optimization</li>
                    <li>Network Security & Monitoring</li>
                    <li>Automation & Industrial Solutions</li>
                    <li>Software, Web & Application Development</li>
                    <li>Audio-Visual & Smart Systems</li>
                    <li>Engineering, Simulation & Automotive Technology Solutions</li>
                </ul>
                <p className="text-muted-foreground">Service scope, deliverables, timelines, and pricing shall be governed by mutually agreed proposals, quotations, or contracts.</p>
            </div>
            
            <div id="eligibility" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">3. Eligibility</h2>
                 <p className="text-muted-foreground">You must be at least 18 years of age and legally capable of entering into a binding contract to use our services. By using our services, you represent and warrant that you meet these requirements.</p>
            </div>
            
            <div id="user-responsibilities" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">4. User Responsibilities</h2>
                 <p className="text-muted-foreground">You agree to:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information when engaging our services</li>
                    <li>Use our website and services only for lawful purposes</li>
                    <li>Not misuse, disrupt, or attempt unauthorized access to our systems</li>
                    <li>Maintain confidentiality of any credentials provided to you</li>
                 </ul>
                 <p className="text-muted-foreground">You shall not:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Copy, modify, or distribute our content without authorization</li>
                    <li>Use our services for fraudulent, illegal, or harmful activities</li>
                    <li>Infringe intellectual property or proprietary rights</li>
                </ul>
            </div>
            
             <div id="intellectual-property" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">5. Intellectual Property Rights</h2>
                <p className="text-muted-foreground">All content, designs, logos, trademarks, software, documentation, and materials available on this website or provided during service delivery are the exclusive intellectual property of Cyrotics Technologies unless otherwise stated.</p>
                <p className="text-muted-foreground">Unauthorized use, reproduction, or distribution is strictly prohibited.</p>
            </div>
            
            <div id="payments" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">6. Payments & Commercial Terms</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Fees, payment milestones, and taxes shall be defined in project-specific agreements</li>
                    <li>All payments must be made within the agreed timeline</li>
                    <li>Delayed payments may result in service suspension or additional charges</li>
                    <li>Taxes shall be applicable as per Indian laws unless otherwise agreed</li>
                </ul>
            </div>
            
            <div id="confidentiality" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">7. Confidentiality</h2>
                 <p className="text-muted-foreground">Both parties agree to maintain confidentiality of all proprietary, technical, commercial, and business information shared during the engagement.</p>
                 <p className="text-muted-foreground">Confidential information shall not be disclosed to any third party without prior written consent, except where required by law.</p>
            </div>
            
            <div id="service-availability" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">8. Service Availability & Modifications</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We strive to ensure uninterrupted service but do not guarantee error-free or continuous availability.</li>
                    <li>We reserve the right to modify, suspend, or discontinue any service or website feature with or without notice.</li>
                </ul>
            </div>

            <div id="limitation-of-liability" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Cyrotics Technologies shall not be liable for any indirect, incidental, consequential, or special damages.</li>
                    <li>Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.</li>
                </ul>
            </div>

            <div id="indemnification" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">10. Indemnification</h2>
                <p className="text-muted-foreground">You agree to indemnify and hold harmless Cyrotics Technologies, its directors, employees, and partners from any claims, damages, liabilities, or expenses arising from:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Your misuse of services</li>
                    <li>Violation of these Terms</li>
                    <li>Infringement of third-party rights</li>
                </ul>
            </div>
            
             <div id="termination" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">11. Termination</h2>
                <p className="text-muted-foreground">We reserve the right to suspend or terminate access to our services:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>In case of violation of these Terms</li>
                    <li>Non-payment of dues</li>
                    <li>Illegal or unethical activities</li>
                 </ul>
                 <p className="text-muted-foreground">Termination shall not affect accrued rights or obligations.</p>
            </div>
            
            <div id="third-party" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">12. Third-Party Services & Links</h2>
                <p className="text-muted-foreground">Our website or services may include links to third-party platforms or tools. We are not responsible for their content, policies, or practices.</p>
                <p className="text-muted-foreground">Use of third-party services is at your own risk.</p>
            </div>

            <div id="force-majeure" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">13. Force Majeure</h2>
                <p className="text-muted-foreground">The Company shall not be liable for failure or delay in performance due to events beyond reasonable control, including but not limited to natural disasters, government actions, strikes, or technical failures.</p>
            </div>
            
            <div id="governing-law" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">14. Governing Law & Jurisdiction</h2>
                 <p className="text-muted-foreground">These Terms shall be governed by and construed in accordance with the laws of India.</p>
                 <p className="text-muted-foreground">Courts located in <strong>New Delhi, India</strong> shall have exclusive jurisdiction.</p>
            </div>

            <div id="amendments" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">15. Amendments</h2>
                <p className="text-muted-foreground">We reserve the right to update or modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date.</p>
                <p className="text-muted-foreground">Continued use of our services constitutes acceptance of the updated Terms.</p>
            </div>
            
             <div id="contact" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">16. Contact Information</h2>
                 <p className="text-muted-foreground">For any questions or concerns regarding these Terms of Service, please contact:</p>
                 <p className="text-muted-foreground">📧 Email: <a href="mailto:info@cyrotics.in" className="text-primary hover:underline">info@cyrotics.in</a></p>
                 <p className="text-muted-foreground">📞 Phone: <a href="tel:+919999295636" className="text-primary hover:underline">+91 9999295636</a></p>
            </div>
            
             <div className="text-center pt-8">
                <p className="font-semibold">© {new Date().getFullYear()} Cyrotics Technologies (OPC) Pvt. Ltd. All Rights Reserved.</p>
             </div>
          </main>
        </div>
      </section>
      
       <section className="bg-primary/5 py-16">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Committed to Transparency & Trust</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Cyrotics Technologies ensures clarity, accountability, and ethical engagement across all services.
            </p>
        </div>
      </section>
    </div>
  );
}
