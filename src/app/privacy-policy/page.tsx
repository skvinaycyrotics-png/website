'use client';

import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container max-w-4xl py-12 sm:py-16 lg:py-20">
      <h1 className="font-headline text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Last updated: {currentDate || '...'}</p>

        <p>
          CYROTICS TECHNOLOGIES OPC PVT LTD ("us", "we", or "our") operates
          the CYROTICS website (the "Service"). This page informs you of our
          policies regarding the collection, use, and disclosure of personal
          data when you use our Service and the choices you have associated with
          that data.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <h3 className="text-foreground mt-6 text-xl font-semibold mb-2">Types of Data Collected</h3>
        <h4 className="text-foreground mt-4 text-lg font-semibold">Personal Data</h4>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Company Name</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Use of Data</h2>
        <p>
          CYROTICS TECHNOLOGIES uses the collected data for various purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially
          acceptable means to protect your Personal Data, we cannot guarantee
          its absolute security.
        </p>
        
        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are

          posted on this page.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>By email: info@cyrotics.in</li>
        </ul>
      </div>
    </div>
  );
}
