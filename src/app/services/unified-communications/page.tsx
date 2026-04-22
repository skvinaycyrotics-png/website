
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
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
      <PageHero
        title={`${service.title}`}
        description="{service.shortDescription}"
        heroImage={service.imageUrl}
      />

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

      <BottomCTA 
          title="Ready to Unify Your Communications?"
          description="Our specialists are ready to help you streamline collaboration across your organization."
          primaryButtonText="Contact a UC Specialist"
        />
    </>
  );
}
