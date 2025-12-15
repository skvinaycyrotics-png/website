import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForms from './contact-forms';

export const metadata = {
  title: 'Contact Us | CYROTICS TECHNOLOGIES',
  description: 'Get in touch with our team of experts. Whether you have a question, need a quote, or want to start a project, we are here to help you find the right technology solution.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We're here to answer your questions and help you find the right
            solution.
          </p>
        </div>
      </section>

      <div className="container py-12 sm:py-16 lg:py-20">
          <ContactForms />
      </div>
    </>
  );
}
