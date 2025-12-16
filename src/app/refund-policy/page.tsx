'use client';

import { useEffect, useState } from 'react';
import {
  FileText,
  Ban,
  Clock,
  RotateCw,
  MessageSquare,
  ShieldCheck,
  Landmark,
  Layers,
  Check,
  AlertTriangle,
} from 'lucide-react';

const sections = [
  { id: 'scope', title: '1. Scope of Services Covered' },
  { id: 'confirmation', title: '2. Order Confirmation & Advance Payments' },
  { id: 'cancellation-client', title: '3. Cancellation by Client' },
  { id: 'cancellation-cyrotics', title: '4. Cancellation by Cyrotics Technologies' },
  { id: 'refund-policy', title: '5. Refund Policy' },
  { id: 'non-refundable', title: '6. Non-Refundable Items' },
  { id: 'modifications', title: '7. Modifications & Rescheduling' },
  { id: 'dispute-resolution', title: '8. Dispute Resolution' },
  { id: 'governing-law', title: '9. Governing Law & Jurisdiction' },
  { id: 'changes', title: '10. Changes to This Policy' },
  { id: 'contact', title: '11. Contact Information' },
];

export default function RefundPolicyPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Transparent, fair, and professional engagement practices.
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
                <p>Cyrotics Technologies (OPC) Pvt. Ltd. ("Company", "we", "our", "us") believes in transparency, fairness, and professional integrity in all commercial engagements. This Refund & Cancellation Policy outlines the terms under which cancellations, refunds, and adjustments are handled for our services.</p>
                <p>By engaging with our services, you acknowledge and agree to the terms set forth in this policy.</p>
            </div>
            
            <div id="scope" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Layers /> 1. Scope of Services Covered</h2>
                <p className="text-muted-foreground">This policy applies to all services offered by Cyrotics Technologies, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>IT & Network Infrastructure Services</li>
                    <li>Data Center Design, Modification & Optimization</li>
                    <li>Network Security & Monitoring Solutions</li>
                    <li>Automation & Engineering Services</li>
                    <li>Software, Web & Application Development</li>
                    <li>Audio-Visual & Smart Systems</li>
                    <li>Consulting, AMC, and Support Services</li>
                </ul>
                <p className="text-muted-foreground">Specific project agreements or contracts may override this policy where explicitly stated.</p>
            </div>
            
            <div id="confirmation" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Check /> 2. Order Confirmation & Advance Payments</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>All service engagements are initiated based on approved proposals, quotations, or work orders</li>
                    <li>Advance payments, if applicable, are collected to allocate resources, tools, and manpower</li>
                    <li>Once an order is confirmed and payment is received, resources are reserved exclusively for the client</li>
                </ul>
            </div>

            <div id="cancellation-client" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Ban /> 3. Cancellation by Client</h2>
                 <h3 className="font-semibold text-lg text-foreground pt-2">3.1 Before Project Initiation</h3>
                <p className="text-muted-foreground">Cancellations requested <strong>before project initiation</strong> may be eligible for a partial refund. Administrative, documentation, and planning costs may be deducted.</p>
                
                 <h3 className="font-semibold text-lg text-foreground pt-4">3.2 After Project Initiation</h3>
                 <p className="text-muted-foreground">Cancellations requested <strong>after project initiation</strong> are generally <strong>non-refundable</strong>. Costs incurred toward manpower, licensing, procurement, or third-party services shall be deducted.</p>
                
                 <h3 className="font-semibold text-lg text-foreground pt-4">3.3 Mid-Project Cancellation</h3>
                <p className="text-muted-foreground">If a project is cancelled mid-way, the client shall be liable to pay for:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Work completed up to the cancellation date</li>
                  <li>Resources deployed</li>
                  <li>Any committed third-party costs</li>
                </ul>
            </div>
            
             <div id="cancellation-cyrotics" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><AlertTriangle /> 4. Cancellation by Cyrotics Technologies</h2>
                <p className="text-muted-foreground">We reserve the right to cancel or suspend services if:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Required information or approvals are not provided by the client</li>
                    <li>Payment milestones are not met</li>
                    <li>The engagement involves unlawful, unethical, or non-compliant activities</li>
                    <li>Force majeure or circumstances beyond reasonable control arise</li>
                </ul>
                 <p className="text-muted-foreground">In such cases, refunds (if applicable) shall be assessed after deducting incurred costs.</p>
            </div>
            
            <div id="refund-policy" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><RotateCw /> 5. Refund Policy</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Refunds, where applicable, are processed after internal review and approval.</li>
                    <li>Approved refunds shall be processed within <strong>7–14 working days</strong>.</li>
                    <li>Refunds will be issued via the original payment method or bank transfer.</li>
                    <li>No interest shall be payable on refunded amounts.</li>
                 </ul>
            </div>

            <div id="non-refundable" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Ban /> 6. Non-Refundable Items</h2>
                 <p className="text-muted-foreground">The following are strictly <strong>non-refundable</strong>:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Consultation fees</li>
                    <li>AMC or subscription-based services once activated</li>
                    <li>Licensing or third-party service fees</li>
                    <li>Customized software or engineering deliverables</li>
                    <li>Manpower deployment costs</li>
                    <li>Travel, logistics, or on-site expenses</li>
                 </ul>
            </div>

            <div id="modifications" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Clock /> 7. Modifications & Rescheduling</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Service rescheduling requests must be communicated in writing.</li>
                    <li>Approval is subject to resource availability.</li>
                    <li>Additional charges may apply based on revised scope or timelines.</li>
                 </ul>
            </div>

            <div id="dispute-resolution" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><MessageSquare /> 8. Dispute Resolution</h2>
                <p className="text-muted-foreground">In case of disputes related to refunds or cancellations:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Parties shall attempt resolution through mutual discussion.</li>
                    <li>Unresolved disputes shall be governed by applicable laws of India.</li>
                 </ul>
            </div>
            
            <div id="governing-law" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><Landmark /> 9. Governing Law & Jurisdiction</h2>
                <p className="text-muted-foreground">This policy shall be governed by and construed in accordance with the laws of <strong>India</strong>.</p>
                <p className="text-muted-foreground">Courts located in <strong>New Delhi, India</strong> shall have exclusive jurisdiction.</p>
            </div>
            
            <div id="changes" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3"><FileText /> 10. Changes to This Policy</h2>
                <p className="text-muted-foreground">Cyrotics Technologies reserves the right to modify or update this Refund & Cancellation Policy at any time without prior notice.</p>
                <p className="text-muted-foreground">Continued engagement with our services constitutes acceptance of the updated policy.</p>
            </div>

            <div id="contact" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">11. Contact Information</h2>
                 <p className="text-muted-foreground">For any questions regarding this Refund & Cancellation Policy, please contact:</p>
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
            <h2 className="font-headline text-3xl font-bold">Fair Policies. Transparent Partnerships.</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Our commercial practices are designed to ensure clarity, fairness, and mutual trust in every project engagement.
            </p>
        </div>
      </section>
    </div>
  );
}
