
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
  title: 'Renewable Energy | CYROTICS TECHNOLOGIES',
  description: 'Harness the power of the sun with our end-to-end solar energy solutions. We help businesses reduce their carbon footprint and energy costs with reliable and efficient solar power systems.',
};

export default function RenewableEnergyPage() {
  const service = SERVICES.find(s => s.slug === 'renewable-energy');

  if (!service) {
    notFound();
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
        </div>
      </section>

      <BottomCTA 
          title="Ready to Go Solar?"
          description="Our energy specialists are ready to design a renewable energy solution that cuts costs and powers your sustainability goals."
          primaryButtonText="Contact an Energy Specialist"
        />
    </>
  );
}
