
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
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Unified Communications (UC) | CYROTICS TECHNOLOGIES',
  description: 'Integrates all communication tools into a single, easy-to-use platform, enabling teams to collaborate efficiently from anywhere.',
};

export default function UnifiedCommunicationsPage() {
  const service = SERVICES.find(s => s.slug === 'unified-communications');

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative bg-primary/10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/Unified-Communications-(UC).png"
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
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div>
            <h2 className="font-headline text-3xl font-bold text-center">
              Key Features & Benefits
            </h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Ready to Unify Your Communications?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Our specialists are ready to help you streamline collaboration across your organization.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact a UC Specialist <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
