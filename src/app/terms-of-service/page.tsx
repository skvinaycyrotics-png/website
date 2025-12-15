'use client';

import { useEffect, useState } from 'react';

export default function TermsOfServicePage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="font-headline text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Last updated: {currentDate || '...'}</p>

        <p>
          Please read these Terms of Service ("Terms", "Terms of Service")
          carefully before using the CYROTICS website (the "Service") operated
          by CYROTICS TECHNOLOGIES OPC PVT LTD ("us", "we", or "our").
        </p>

        <p>
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to all
          visitors, users, and others who access or use the Service.
        </p>

        <p>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you may not
          access the Service.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of CYROTICS TECHNOLOGIES OPC
          PVT LTD and its licensors. The Service is protected by copyright,
          trademark, and other laws of both India and foreign countries.
        </p>
        
        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Links to Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by CYROTICS TECHNOLOGIES. We have no
          control over, and assume no responsibility for, the content, privacy
          policies, or practices of any third-party web sites or services.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p>
          In no event shall CYROTICS TECHNOLOGIES, nor its directors,
          employees, partners, agents, suppliers, or affiliates, be liable for
          any indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill,
          or other intangible losses, resulting from your access to or use of
          or inability to access or use the Service.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of Karnataka, India, without regard to its conflict of law
          provisions.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. We will try to provide at least 30 days'
          notice prior to any new terms taking effect.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>By email: info@cyrotics.in</li>
        </ul>
      </div>
    </div>
  );
}
