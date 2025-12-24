

import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import ContactForms from './contact-forms';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { companyAddress } from '@/lib/constants';

export const metadata = {
  title: 'Contact Us | CYROTICS TECHNOLOGIES',
  description: 'Get in touch with our team of experts. Whether you have a question, need a quote, or want to start a project, we are here to help you find the right technology solution.',
};

export default function ContactPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(companyAddress.full)}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress.full)}`;

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
              {!apiKey ? (
                 <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Google Maps API Key Missing</AlertTitle>
                  <AlertDescription>
                    To display the map, an administrator needs to add a Google Maps API key. Please create a `.env.local` file and add your key as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE`.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="overflow-hidden rounded-lg shadow-lg border">
                  <iframe
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={mapEmbedUrl}>
                  </iframe>
                </div>
              )}
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3 group">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-medium text-foreground">Corporate Office</h4>
                        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="not-italic text-muted-foreground hover:text-primary transition-colors">
                            {companyAddress.name}<br/>
                            {companyAddress.line1}<br/>
                            {companyAddress.line2}<br/>
                            {companyAddress.cityStateZip}
                        </a>
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
