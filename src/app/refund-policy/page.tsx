'use client';

import { useEffect, useState } from 'react';

export default function RefundPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container max-w-4xl py-12 sm:py-16 lg:py-20">
      <h1 className="font-headline text-4xl font-bold mb-8">Refund & Cancellation Policy</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Last updated: {currentDate || '...'}</p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">General Policy</h2>
        <p>
          At CYROTICS TECHNOLOGIES OPC PVT LTD, we are committed to providing high-quality services and solutions to our clients. Our Refund and Cancellation Policy is designed to be transparent and fair. Due to the nature of our business, which involves project-based services, consulting, and custom solutions, our policies vary depending on the type of service rendered.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Consulting & Professional Services</h2>
        <p>
          Fees for consulting, project management, and professional services are based on the hours and resources committed to the project. As such, payments for these services are generally non-refundable. Any advance payments made are considered a commitment to the project and cover the initial resources allocated.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Project-Based Work (IT Infrastructure, Software Development, etc.)</h2>
        <p>
          For project-based work, the refund and cancellation terms will be explicitly defined in the project proposal or contract signed by both parties. This will typically include:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Cancellation:</strong> A client may cancel a project by providing written notice. Depending on the project stage, cancellation fees may apply to cover the work completed and resources allocated up to the point of cancellation.</li>
          <li><strong>Refunds:</strong> Refunds are generally not provided for work already completed. In the event of a project cancellation, any advance payment that exceeds the cost of work performed may be partially refundable, as stipulated in the contract.</li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Annual Maintenance Contracts (AMC) & Managed Services</h2>
        <p>
          For services billed on a recurring basis, such as AMCs or managed services, clients may cancel their subscription by providing a notice period as defined in the service agreement (typically 30-90 days). No refunds will be issued for the period already serviced.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Refund and Cancellation Policy, please contact us before entering into any agreement.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Email: info@cyrotics.in</li>
        </ul>
      </div>
    </div>
  );
}
