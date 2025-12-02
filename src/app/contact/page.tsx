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
              <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.079944686414!2d77.30256887529402!3d28.5062534888258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6c981254339%3A0x8979a143890f8981!2sCyrotics%20Technologies!5e0!3m2!1sen!2sin!4v1700033083559!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
