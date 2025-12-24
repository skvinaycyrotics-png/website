

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  // Exclude services that have their own dedicated pages to prevent conflicts.
  return SERVICES.filter(service => 
    service.slug !== 'data-center-infrastructure-solutions' &&
    service.slug !== 'nextgen-cybersecurity-shield' &&
    service.slug !== 'audio-visual-communication' &&
    service.slug !== 'unified-communications' &&
    service.slug !== 'security-surveillance' &&
    service.slug !== 'managed-services' &&
    service.slug !== 'renewable-energy'
  ).map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {

  // This is a special case redirect, if a user lands here.
  if (params.slug === 'data-center-infrastructure-solutions') {
    redirect('/services/data-center-infrastructure-solutions');
  }
  if (params.slug === 'nextgen-cybersecurity-shield') {
    redirect('/services/nextgen-cybersecurity-shield');
  }
  if (params.slug === 'audio-visual-communication') {
    redirect('/services/audio-visual-communication');
  }
  if (params.slug === 'unified-communications') {
    redirect('/services/unified-communications');
  }
  if (params.slug === 'security-surveillance') {
    redirect('/services/security-surveillance');
  }
   if (params.slug === 'managed-services') {
    redirect('/services/managed-services');
  }
   if (params.slug === 'renewable-energy') {
    redirect('/services/renewable-energy');
  }

  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative bg-primary/10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={service.imageHint}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative text-primary-foreground text-center">
          <Badge variant="secondary" className="text-sm">
            {service.category}
          </Badge>
          <h1 className="mt-4 font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
            {service.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold">
              Key Features & Benefits
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              {service.features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader className="bg-muted/50">
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {service.techStack.map((tech) => (
                    <li key={tech} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{tech}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Ready to implement {service.title}?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Our specialists are on hand to discuss how we can tailor this
            solution to your precise needs.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact a Specialist <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
