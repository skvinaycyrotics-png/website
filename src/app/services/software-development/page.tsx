import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';

// 1. Target Software Keywords Integrated into Metadata
export const metadata: Metadata = {
  title: 'Custom Software Builders & System Modifications | CYROTICS TECHNOLOGIES',
  description: 'Expert software builders managing system architecture modifications, application modernization, and legacy platform transformations.',
  keywords: ['Software builders', 'Software modifications', 'Software transformations'],
  alternates: {
    canonical: '/services/software-development/',
  },
};

export default function SoftwareDevelopmentPage() {
  const service = SERVICES.find(s => s.slug === 'software-development');

  if (!service) {
    notFound();
  }

  const hasImage = !!service.imageUrl;

  return (
    <>
      {/* 2. Inline Hero Layout replacing the deleted PageHero component */}
      <section className={`relative w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 ${hasImage ? 'bg-[#0a1628]' : 'bg-transparent'}`}>
        {hasImage && (
          <>
            <div className="absolute inset-0 z-0 opacity-50">
              <Image
                src={service.imageUrl}
                alt="Software Builders Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628]/80"></div>
          </>
        )}
        <div className="container relative z-30 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight ${hasImage ? 'text-white' : 'text-foreground'}`}>
              {service.title}
            </h1>
            <p className={`mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium ${hasImage ? 'text-white' : 'text-foreground'}`}>
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. On-Page Keyword Context Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Enterprise Application Development
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Operating as strategic engineering <strong className="text-foreground font-semibold">software builders</strong>, Cyrotics Technologies programs agile digital ecosystems. We handle lifecycle platform optimizations, routine code <strong className="text-foreground font-semibold">software modifications</strong>, and complex cloud-native <strong className="text-foreground font-semibold">software transformations</strong> tailored to complex security mandates.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container max-w-5xl mx-auto">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Key Features & Benefits
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              {/* FIXED: serviceData changed to service below to prevent prerender errors */}
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
