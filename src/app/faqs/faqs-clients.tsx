'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  HelpCircle,
  Briefcase,
  ShieldCheck,
  CreditCard,
  Wrench,
  Users,
  Mail,
  Phone,
} from 'lucide-react';

const faqSections = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What services does Cyrotics Technologies provide?',
        answer:
          'We specialize in IT & Network Infrastructure, Data Center Modifications, Automation, Network Security, Audio-Visual Systems, Software & Web Development, Automotive Engineering, and Consulting services.',
      },
      {
        question: 'Where is Cyrotics Technologies located?',
        answer:
          'Our corporate office is located at 86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension, Badarpur Border, New Delhi – 110044, India.',
      },
      {
        question: 'How can I contact your support team?',
        answer:
          'You can reach us at info@cyrotics.in or call +91 9999295636. A dedicated support desk is also available through our website portal.',
      },
    ],
  },

  {
    id: 'services-projects',
    title: 'Services & Projects',
    icon: Briefcase,
    faqs: [
      {
        question: 'How can I request a quote or proposal for a project?',
        answer:
          'Submit your requirements through our Contact Us page. Our team typically responds with a proposal within 2–3 business days.',
      },
      {
        question: 'Can you handle government or OEM projects?',
        answer:
          'Yes. We have experience delivering corporate, OEM, and government-sector projects while complying with required standards and certifications.',
      },
      {
        question: 'Do you provide AMC or maintenance services?',
        answer:
          'Yes. We provide Annual Maintenance Contracts (AMC) for IT infrastructure, networking, security systems, AV solutions, and data center environments.',
      },
    ],
  },

  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    icon: ShieldCheck,
    faqs: [
      {
        question: 'Where can I access your company policies?',
        answer:
          'All legal documents including Privacy Policy, Terms of Service, Cookies Policy, Refund Policy, and Legal Terms are available through our website footer and compliance pages.',
      },
      {
        question: 'How is my data privacy protected?',
        answer:
          "We follow industry best practices and applicable regulations including India's IT Act 2000 to protect customer information.",
      },
      {
        question: 'Can I download company certificates and brochures?',
        answer:
          'Yes. Corporate certificates and company profile documents are available from our Trust & Compliance section.',
      },
    ],
  },

  {
    id: 'payments-refunds',
    title: 'Payments & Refunds',
    icon: CreditCard,
    faqs: [
      {
        question: 'What is your refund and cancellation policy?',
        answer:
          'Refund and cancellation conditions are outlined in our Refund & Cancellation Policy available on our website.',
      },
      {
        question: 'Are advance payments required?',
        answer:
          'Some projects require advance payments for resource allocation, procurement, and project scheduling. Specific terms are defined in project proposals.',
      },
    ],
  },

  {
    id: 'technical-support',
    title: 'Technical Support',
    icon: Wrench,
    faqs: [
      {
        question: 'How do I raise a support request?',
        answer:
          'Support requests can be submitted through our Support Desk page or by emailing support@cyrotics.in.',
      },
      {
        question: 'Do you provide on-site installation and training?',
        answer:
          'Yes. We provide installation, commissioning, configuration, testing, and end-user training for applicable solutions.',
      },
    ],
  },

  {
    id: 'careers-opportunities',
    title: 'Careers & Opportunities',
    icon: Users,
    faqs: [
      {
        question: 'How can I apply for a job?',
        answer:
          'Visit our Careers page and submit your resume. Qualified candidates will be contacted by our HR team.',
      },
      {
        question: 'Do you offer internships?',
        answer:
          'Yes. Internship and training opportunities are periodically available and announced through our Careers section.',
      },
    ],
  },
];

export default function FaqsClient() {
  return (
    <div className="bg-background text-foreground">

      {/* HERO SECTION */}
      <section className="py-20 bg-primary/5 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most common questions about our services,
            projects, compliance, support, and business operations.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">

          {/* SIDEBAR */}
          <aside
            className="lg:w-1/4 sticky top-24 h-max hidden lg:block"
            aria-label="FAQ Navigation"
          >
            <h2 className="text-lg font-semibold mb-4">
              On This Page
            </h2>

            <ul className="space-y-2">
              {faqSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* MAIN CONTENT */}
          <main
            role="main"
            className="lg:w-3/4 space-y-12"
          >
            {faqSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-xl border bg-card p-6 shadow-sm scroll-mt-24"
              >
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-6">
                  <section.icon className="h-6 w-6 text-primary" />
                  {section.title}
                </h2>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                >
                  {section.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.id}-${index}`}
                    >
                      <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="text-base text-muted-foreground pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}

            {/* CONTACT BLOCK */}
            <section
              id="contact"
              className="rounded-xl border bg-card p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Contact Us
              </h2>

              <p className="text-muted-foreground mb-4">
                If your question is not listed above, our team will be happy to assist you.
              </p>

              <div className="space-y-3">

                <a
                  href="mailto:info@cyrotics.in"
                  aria-label="Email Cyrotics Technologies"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-5 w-5" />
                  info@cyrotics.in
                </a>

                <a
                  href="tel:+919999295636"
                  aria-label="Call Cyrotics Technologies"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  +91 99992 95636
                </a>

              </div>
            </section>

            {/* COPYRIGHT */}
            <div className="text-center pt-8">
              <p className="text-sm text-muted-foreground font-medium">
                © {new Date().getFullYear()} Cyrotics Technologies (OPC) Pvt. Ltd.
                All Rights Reserved.
              </p>
            </div>

          </main>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold">
            Have a Specific Question?
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact our team for detailed consultation, project discussions,
            support requests, or partnership opportunities.
          </p>
        </div>
      </section>

    </div>
  );
}
