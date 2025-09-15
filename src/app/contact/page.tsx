import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForms from './contact-forms';
import ExpertMatchForm from './expert-match-form';

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
                123 Tech Park, Bangalore, 560100, India
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Phone</h3>
              <a href="tel:+918012345678" className="text-muted-foreground hover:text-primary">
                +91 80 1234 5678
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Email</h3>
              <a href="mailto:info@cyrotics.com" className="text-muted-foreground hover:text-primary">
                info@cyrotics.com
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
