
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
      <PageHero
        title={`${service.title}`}
        description={service.description}
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
          title="Ready to Build Your Future-Ready Data Center?"
          description="Our specialists are on hand to discuss how we can tailor a data center solution to your precise needs."
          primaryButtonText="Contact a Specialist"
        />
    </>
  );
}
