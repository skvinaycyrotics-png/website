
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForms from './contact-forms';

export const metadata = {
  title: 'Contact Us | CYROTICS TECHNOLOGIES',
  description: 'Get in touch with our team of experts. Whether you have a question, need a quote, or want to start a project, we are here to help you find the right technology solution.',
};

export default function ContactPage() {
  const address = "Cyrotics Technologies (OPC) Pvt. Ltd. 86/2, Street No.-54/V/3, Ist 60 Feet Road, Molarband Extension, Badarpur Border, New Delhi – 110044, India";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

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

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForms />
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3 group">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-medium text-foreground">Corporate Office</h4>
                        <address className="not-italic text-muted-foreground">
                            {address}
                        </address>
                    </div>
                </div>
                 <a href="tel:+919999295636" className="flex items-center gap-3 group">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-medium text-foreground">Phone</h4>
                        <span className="text-muted-foreground transition-colors group-hover:text-primary">+91 99992 95636</span>
                    </div>
                </a>
                 <a href="mailto:info@cyrotics.in" className="flex items-center gap-3 group">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-medium text-foreground">Email</h4>
                        <span className="text-muted-foreground transition-colors group-hover:text-primary">info@cyrotics.in</span>
                    </div>
                </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
