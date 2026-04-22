
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';

export const metadata = {
  title: 'Software Development | CYROTICS TECHNOLOGIES',
  description: 'From enterprise applications to cloud-native solutions, our software development services are tailored to your unique business needs, driving innovation and efficiency.',
};

export default function SoftwareDevelopmentPage() {
  const service = SERVICES.find(s => s.slug === 'software-development');

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
        <div className="container max-w-5xl mx-auto">
          <div>
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
        </div>
      </section>

      <BottomCTA 
        title="Ready to Build Your Custom Application?"
        description="Our developers are ready to turn your vision into a robust, scalable, and secure software solution."
        primaryButtonText="Contact a Development Specialist"
      />
    </>
  );
}
