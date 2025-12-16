
'use client';

import { useEffect, useState } from 'react';
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
    title: '1. General Questions', 
    icon: HelpCircle,
    faqs: [
      {
        question: 'What services does Cyrotics Technologies provide?',
        answer: 'We specialize in IT & Network Infrastructure, Data Center Modifications, Automation, Network Security, Audio-Visual Systems, Software & Web Development, Automotive Engineering, and Consulting services.'
      },
      {
        question: 'Where is Cyrotics Technologies located?',
        answer: 'Our corporate office is located at: 86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension, Badarpur Border, New Delhi – 110044, India.'
      },
      {
        question: 'How can I contact your support team?',
        answer: 'You can reach us at info@cyrotics.in or call +91 9999295636. A dedicated Support Desk is also available via our website portal for clients.'
      }
    ]
  },
  { 
    id: 'services-projects', 
    title: '2. Services & Projects', 
    icon: Briefcase,
    faqs: [
      {
        question: 'How can I request a quote or proposal for a project?',
        answer: 'Visit our Contact Us page and fill out the inquiry form with your project details. Our team will respond with a detailed proposal, typically within 2–3 business days.'
      },
      {
        question: 'Can you handle government or OEM projects?',
        answer: 'Yes, we have extensive experience with corporate, OEM, and government projects. We are compliant with necessary certifications like MSME and Startup India, and adhere to the stringent standards required for public sector tenders.'
      },
      {
        question: 'Do you provide AMC or maintenance services?',
        answer: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC) for IT, Network, Data Center, Security, and AV systems to ensure their long-term performance and reliability.'
      }
    ]
  },
  { 
    id: 'legal-compliance', 
    title: '3. Legal & Compliance', 
    icon: ShieldCheck,
    faqs: [
      {
        question: 'Where can I access your company policies?',
        answer: 'All legal documents including our Terms of Service, Privacy Policy, Cookies Policy, Legal Terms, and Refund & Cancellation Policy are available in the footer of our website and on the Trust & Compliance page.'
      },
      {
        question: 'How is my data privacy protected?',
        answer: 'We follow strict data privacy policies in compliance with India’s IT Act, 2000 and international best practices. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.'
      },
      {
        question: 'Can I download your official certificates and company brochures?',
        answer: 'Yes, our key corporate documents, such as MSME and Startup India certificates, are available for viewing and download on our Trust & Compliance page.'
      }
    ]
  },
   { 
    id: 'payments-refunds', 
    title: '4. Payments & Refunds', 
    icon: CreditCard,
    faqs: [
        {
            question: 'What is your refund and cancellation policy?',
            answer: 'Our refund and cancellation terms are outlined in our Refund & Cancellation Policy. You can review this policy via the link in our website footer.'
        },
        {
            question: 'Are advance payments required for services?',
            answer: 'Certain services and large-scale projects may require an advance payment to allocate resources, procure materials, and schedule manpower. Specific payment terms will be clearly detailed in your project proposal or work order.'
        }
    ]
  },
   { 
    id: 'technical-support', 
    title: '5. Technical & Support', 
    icon: Wrench,
    faqs: [
        {
            question: 'How do I raise a technical support request?',
            answer: 'You can submit your request via our Support Desk page, which is accessible from the main menu, or contact our support team directly at support@cyrotics.in for prompt assistance.'
        },
        {
            question: 'Can you provide on-site installation and training?',
            answer: 'Yes, we provide on-site installation, configuration, and operational training for all applicable systems and solutions to ensure your team is fully equipped to manage the new technology.'
        }
    ]
  },
  { 
    id: 'careers-opportunities', 
    title: '6. Careers & Opportunities', 
    icon: Users,
    faqs: [
        {
            question: 'How can I apply for a job at Cyrotics Technologies?',
            answer: 'Please visit our Careers page to see current openings and submit your resume. If your profile matches our requirements, our HR team will contact you for the next steps.'
        },
        {
            question: 'Do you provide internships or training programs?',
            answer: 'Yes, we periodically offer internships and training programs for students and recent graduates. All such opportunities are posted on our Careers page.'
        }
    ]
  }
];

export default function FaqsPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const navSections = faqSections.map(s => ({ id: s.id, title: s.title, icon: s.icon }));

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center bg-primary/5">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Clear answers to your most common queries.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4 sticky top-24 h-max hidden lg:block">
            <h3 className="font-semibold text-lg mb-4">On This Page</h3>
            <ul className="space-y-2">
              {navSections.map(section => (
                 <li key={section.id}>
                    <a href={`#${section.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <section.icon className="h-4 w-4" /> {section.title}
                    </a>
                </li>
              ))}
            </ul>
          </aside>

          <main className="lg:w-3/4 space-y-12">
            {faqSections.map(section => (
              <div key={section.id} id={section.id} className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm scroll-mt-24">
                <h2 className="font-semibold text-2xl text-foreground flex items-center gap-3">
                  <section.icon className="h-6 w-6 text-primary"/> {section.title}
                </h2>
                 <Accordion type="single" collapsible className="w-full">
                    {section.faqs.map((faq, index) => (
                      <AccordionItem value={`item-${section.id}-${index}`} key={index}>
                        <AccordionTrigger className="text-left hover:no-underline text-lg font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 text-base text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
            
            <div id="contact" className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="font-semibold text-2xl text-foreground">Contact Us</h2>
                 <p className="text-muted-foreground">For further questions not listed here, please reach out to:</p>
                 <p className="text-muted-foreground flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary"/> <strong>Email:</strong> <a href="mailto:info@cyrotics.in" className="text-primary hover:underline">info@cyrotics.in</a>
                 </p>
                 <p className="text-muted-foreground flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary"/> <strong>Phone:</strong> <a href="tel:+919999295636" className="text-primary hover:underline">+91 9999295636</a>
                 </p>
            </div>

            <div className="text-center pt-8">
                <p className="font-semibold">© {new Date().getFullYear()} Cyrotics Technologies (OPC) Pvt. Ltd. All Rights Reserved.</p>
            </div>
          </main>
        </div>
      </section>
      
       <section className="bg-primary/5 py-16">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Have a Specific Question?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                Our team is ready to provide the information you need. Contact us for a detailed consultation.
            </p>
        </div>
      </section>
    </div>
  );
}
