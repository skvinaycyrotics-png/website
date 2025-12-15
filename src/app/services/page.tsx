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
import { SERVICES, FAQS } from '@/lib/constants';
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
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Our Technology Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            End-to-end services designed to build, manage, and secure your
            enterprise technology landscape.
          </p>
        </div>
      </section>

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
        <div className="container max-w-4xl">
           <h2 className="text-center font-headline text-3xl font-bold flex items-center justify-center gap-3 mb-8">
             <HelpCircle className="h-8 w-8 text-primary" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Have a specific requirement?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Our experts are ready to understand your challenges and design a
            custom solution that fits your needs.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
