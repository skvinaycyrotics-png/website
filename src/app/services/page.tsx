import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import { SERVICES } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'Our Services | CYROTICS TECHNOLOGIES',
  description:
    'Explore our comprehensive technology solutions including Infrastructure, Security, AV, Smart Buildings, Software, and Renewable Energy. End-to-end services for your enterprise.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Technology Solutions"
        description="End-to-end services designed to build, manage, and secure your enterprise technology landscape."
        heroImage="/sector-overview.png"
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card
                key={service.slug}
                className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="flex-grow">
                    {service.shortDescription}
                  </CardDescription>
                  <Button
                    asChild
                    variant="link"
                    className="px-0 pt-4 self-start"
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container max-w-4xl text-center">
           <h2 className="font-headline text-3xl font-bold flex items-center justify-center gap-3 mb-8">
             <HelpCircle className="h-8 w-8 text-primary" />
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Find quick answers in our dedicated FAQ section or contact us for a detailed consultation.
          </p>
          <Button asChild size="lg">
            <Link href="/faqs">Go to FAQs</Link>
          </Button>
        </div>
      </section>

      <BottomCTA 
          title="Have a specific requirement?"
          description="Our experts are ready to understand your challenges and design a custom solution that fits your needs."
          primaryButtonText="Request a Free Consultation"
        />
    </>
  );
}
