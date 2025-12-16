'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'disclaimer', title: '1. Website Disclaimer' },
  { id: 'accuracy', title: '2. Accuracy & Updates of Information' },
  { id: 'advice', title: '3. No Professional or Technical Advice' },
  { id: 'intellectual-property', title: '4. Intellectual Property Rights' },
  { id: 'third-party', title: '5. Third-Party Links & External Websites' },
  { id: 'liability', title: '6. Limitation of Liability' },
  { id: 'indemnification', title: '7. Indemnification' },
  { id: 'security', title: '8. Security Disclaimer' },
  { id: 'force-majeure', title: '9. Force Majeure' },
  { id: 'governing-law', title: '10. Governing Law & Jurisdiction' },
  { id: 'amendments', title: '11. Changes to Legal Terms' },
  { id: 'contact', title: '12. Contact Information' },
];

export default function LegalTermsPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Legal Terms
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
             Establishing clarity, protection, and legal transparency across all digital interactions.
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
              <p>Welcome to the website of <strong>Cyrotics Technologies (OPC) Pvt. Ltd.</strong> ("Company", "we", "our", "us"). These Legal Terms govern your access to and use of this website and define the legal disclaimers, limitations, and protections applicable to all visitors, users, partners, and third parties.</p>
              <p>By accessing or using this website, you acknowledge that you have read, understood, and agreed to these Legal Terms.</p>
            </div>
            
            <div id="disclaimer" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">1. Website Disclaimer</h2>
                <p className="text-muted-foreground">All information, content, materials, and services provided on this website are made available on an <strong>"as-is" and "as-available" basis</strong> for general informational purposes only. While we strive to ensure accuracy, we make no representations or warranties of any kind, express or implied, regarding the completeness, reliability, or suitability of the information contained herein.</p>
            </div>

            <div id="accuracy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">2. Accuracy & Updates of Information</h2>
                <p className="text-muted-foreground">The content on this website may include technical, typographical, or factual inaccuracies. Cyrotics Technologies does not warrant that any information is complete, current, or error-free.</p>
                <p className="text-muted-foreground">We reserve the right to modify, update, or remove website content at any time without prior notice.</p>
            </div>
            
            <div id="advice" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">3. No Professional or Technical Advice</h2>
                 <p className="text-muted-foreground">Nothing on this website constitutes:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Legal advice</li>
                    <li>Financial advice</li>
                    <li>Technical consultancy</li>
                    <li>Engineering or professional services advice</li>
                 </ul>
                 <p className="text-muted-foreground">Users should not rely solely on website content for decision-making. Professional consultation should be sought before acting on any information provided.</p>
            </div>
            
            <div id="intellectual-property" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">4. Intellectual Property Rights</h2>
                 <p className="text-muted-foreground">All intellectual property displayed on this website, including but not limited to:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Company name and logos</li>
                    <li>Trademarks and service marks</li>
                    <li>Text, graphics, designs, layouts</li>
                    <li>Software code, documentation, and media</li>
                 </ul>
                 <p className="text-muted-foreground">are the exclusive property of Cyrotics Technologies (OPC) Pvt. Ltd. or its licensors and are protected under applicable intellectual property laws.</p>
                 <p className="text-muted-foreground">Unauthorized reproduction, modification, distribution, or use is strictly prohibited.</p>
            </div>
            
             <div id="third-party" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">5. Third-Party Links & External Websites</h2>
                <p className="text-muted-foreground">This website may contain links to third-party websites or services for convenience. Cyrotics Technologies has no control over and assumes no responsibility for:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Content accuracy</li>
                    <li>Privacy practices</li>
                    <li>Security measures</li>
                    <li>Availability of third-party platforms</li>
                </ul>
                <p className="text-muted-foreground">Accessing third-party links is at your own risk.</p>
            </div>
            
            <div id="liability" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">To the maximum extent permitted by applicable law, Cyrotics Technologies shall not be liable for any direct, indirect, incidental, consequential, or special damages, including but not limited to:</p>
                 <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Loss of data or profits</li>
                    <li>Business interruption</li>
                    <li>System failures</li>
                    <li>Cyber incidents</li>
                 </ul>
                 <p className="text-muted-foreground">arising out of or related to the use or inability to use this website.</p>
            </div>

            <div id="indemnification" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">7. Indemnification</h2>
                <p className="text-muted-foreground">You agree to indemnify, defend, and hold harmless Cyrotics Technologies, its directors, employees, affiliates, and partners from any claims, damages, losses, liabilities, or expenses arising from:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Your misuse of the website</li>
                    <li>Violation of these Legal Terms</li>
                    <li>Infringement of intellectual property or third-party rights</li>
                </ul>
            </div>
            
             <div id="security" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">8. Security Disclaimer</h2>
                <p className="text-muted-foreground">While we implement reasonable technical and organizational measures to protect our digital assets, we do not guarantee that this website will be free from viruses, malware, cyberattacks, or unauthorized access.</p>
                <p className="text-muted-foreground">Users are responsible for ensuring adequate protection of their systems and data.</p>
            </div>
            
            <div id="force-majeure" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">9. Force Majeure</h2>
                <p className="text-muted-foreground">Cyrotics Technologies shall not be held liable for any failure or delay in performance due to events beyond reasonable control, including but not limited to natural disasters, acts of government, network outages, labor disputes, or technical failures.</p>
            </div>
            
            <div id="governing-law" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">10. Governing Law & Jurisdiction</h2>
                 <p className="text-muted-foreground">These Legal Terms shall be governed by and construed in accordance with the laws of **India**.</p>
                 <p className="text-muted-foreground">Any disputes arising out of or relating to these Legal Terms shall be subject to the exclusive jurisdiction of the courts located in **New Delhi, India**.</p>
            </div>

            <div id="amendments" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">11. Changes to Legal Terms</h2>
                <p className="text-muted-foreground">We reserve the right to update or revise these Legal Terms at any time without prior notice. Changes shall become effective immediately upon posting on this page.</p>
                <p className="text-muted-foreground">Continued use of the website constitutes acceptance of the updated Legal Terms.</p>
            </div>
            
             <div id="contact" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                 <h2 className="font-semibold text-2xl text-foreground">12. Contact Information</h2>
                 <p className="text-muted-foreground">For any legal or compliance-related queries, please contact:</p>
                 <p className="text-muted-foreground">📧 **Email:** <a href="mailto:info@cyrotics.in" className="text-primary hover:underline">info@cyrotics.in</a></p>
                 <p className="text-muted-foreground">📞 **Phone:** <a href="tel:+919999295636" className="text-primary hover:underline">+91 9999295636</a></p>
            </div>
            
             <div className="text-center pt-8">
                <p className="font-semibold">© {new Date().getFullYear()} Cyrotics Technologies (OPC) Pvt. Ltd. All Rights Reserved.</p>
             </div>
          </main>
        </div>
      </section>
      
       <section className="bg-primary/5 py-16">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Legal Clarity. Corporate Responsibility. Digital Trust.</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Cyrotics Technologies is committed to ethical, transparent, and compliant digital practices.
            </p>
        </div>
      </section>
    </div>
  );
}
