import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForms from './contact-forms';
import ExpertMatchForm from './expert-match-form';

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
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We're here to answer your questions and help you find the right
            solution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Our Office</h3>
              <p className="text-muted-foreground">
                86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension, Badarpur Bordar, New Delhi-110044, India
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Phone</h3>
              <a href="tel:+919999295636" className="text-muted-foreground hover:text-primary">
                +91-9999295636
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Email</h3>
              <a href="mailto:info@cyrotics.in" className="text-muted-foreground hover:text-primary">
                info@cyrotics.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-16">
        <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForms />
            </div>
            <div className="lg:col-span-2">
              <ExpertMatchForm />
            </div>
        </div>
      </div>
    </>
  );
}
