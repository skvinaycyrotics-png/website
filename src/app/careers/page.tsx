import Link from 'next/link';
import { JOB_OPENINGS } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Careers | CYROTICS TECHNOLOGIES',
  description: 'Join our team of passionate engineers and innovators. Explore career opportunities at CYROTICS and help us shape the future of technology infrastructure and security.',
};


export default function CareersPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Be part of a dynamic and innovative company that's shaping the
            future of technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-center font-headline text-3xl font-bold">
            Current Openings
          </h2>
          {JOB_OPENINGS.length > 0 ? (
            <Accordion type="single" collapsible className="w-full mt-8">
              {JOB_OPENINGS.map((job, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full pr-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                          <span>{job.location}</span>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    <h4 className="font-semibold mt-4 mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6">
                      {/* In a real app, this would link to an application form or ATS */}
                      <Link href={`mailto:careers@cyrotics.com?subject=Application for ${job.title}`}>
                        Apply Now
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="mt-8 text-center text-muted-foreground">
              There are no open positions at this time. Please check back
              later.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
