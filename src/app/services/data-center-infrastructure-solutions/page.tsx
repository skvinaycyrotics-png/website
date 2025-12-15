
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'Data Center Infrastructure Solutions | CYROTICS TECHNOLOGIES',
  description: 'End-to-end data center solutions. We design, build, migrate, and manage secure, scalable, and high-availability digital foundations adhering to Tier-III and Tier-IV standards.',
};

export default function DataCenterPage() {
  const service = SERVICES.find(s => s.slug === 'data-center-infrastructure-solutions');

  if (!service) {
    return null; // Or a not found component
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
          <h1 className="mt-4 font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
            {service.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
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
                <CardDescription>
                  We partner with industry leaders to deliver best-in-class solutions.
                </CardDescription>
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
            Ready to Build Your Future-Ready Data Center?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Our specialists are on hand to discuss how we can tailor a data center solution to your precise needs.
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
