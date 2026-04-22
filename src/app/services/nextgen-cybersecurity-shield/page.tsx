
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
  title: 'NextGen Cybersecurity Shield | CYROTICS TECHNOLOGIES',
  description: 'Defend your digital assets with our advanced, multi-layered cybersecurity services, powered by AI and a Zero Trust framework to protect against evolving threats.',
};

export default function NextGenCybersecurityShieldPage() {
  const service = SERVICES.find(s => s.slug === 'nextgen-cybersecurity-shield');

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
          title="Ready to Bolster Your Cyber Defenses?"
          description="Our security experts are ready to design a cybersecurity strategy that protects your critical assets."
          primaryButtonText="Contact a Security Specialist"
        />
    </>
  );
}
