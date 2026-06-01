import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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

// 1. Target Keywords Integrated into Metadata
export const metadata: Metadata = {
  title: 'Data Center Builders & Modifications | CYROTICS TECHNOLOGIES',
  description: 'Leading data center builders specializing in data center modifications, high-availability data center transformations, and Tier-III/IV systems architecture design.',
  keywords: ['Data center builders', 'Data center modifications', 'data center transformations'],
  alternates: {
    canonical: '/services/data-center-infrastructure-solutions/',
  },
};

export default function DataCenterPage() {
  const service = SERVICES.find(s => s.slug === 'data-center-infrastructure-solutions');

  if (!service) {
    return null; 
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
                alt="Data Center Builders Platform"
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

      {/* 3. Narrative Keyword Context Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Enterprise Infrastructure Engineering
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            As premier <strong className="text-foreground font-semibold">data center builders</strong>, Cyrotics Technologies delivers robust digital foundations. Whether you require micro-facility updates, routine <strong className="text-foreground font-semibold">data center modifications</strong>, or full-scale mission-critical <strong className="text-foreground font-semibold">data center transformations</strong>, our engineers ensure elite operational resiliency and structural scale.
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

      <BottomCTA 
        title="Ready to Build Your Future-Ready Data Center?"
        description="Our specialists are on hand to discuss how we can tailor a data center solution to your precise needs."
        primaryButtonText="Contact a Specialist"
      />
    </>
  );
}
