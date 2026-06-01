import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';

// 1. Target Network Keywords Embedded into Metadata
export const metadata: Metadata = {
  title: 'Network Builders & System Transformations | CYROTICS TECHNOLOGIES',
  description: 'Enterprise network builders providing secure hybrid IT setups, localized network modifications, and modern system architecture transformations.',
  keywords: ['Network builders', 'Network modifications', 'Network transformations'],
  alternates: {
    canonical: '/services/cloud-hybrid-it-solutions/',
  },
};

export default function CloudHybridITSolutionsPage() {
  const serviceData = SERVICES.find(s => s.slug === 'cloud-hybrid-it-solutions');

  if (!serviceData) {
    notFound();
  }

  const hasImage = !!serviceData.imageUrl;

  return (
    <>
      {/* 2. Inline Hero Layout replacing the deleted PageHero component */}
      <section className={`relative w-full overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32 ${hasImage ? 'bg-[#0a1628]' : 'bg-transparent'}`}>
        {hasImage && (
          <>
            <div className="absolute inset-0 z-0 opacity-50">
              <Image
                src={serviceData.imageUrl}
                alt="Network Builders Platform"
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
              {serviceData.title}
            </h1>
            <p className={`mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium ${hasImage ? 'text-white' : 'text-foreground'}`}>
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. On-Page Keyword Context Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Enterprise Networking & Architecture
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            As specialized <strong className="text-foreground font-semibold">network builders</strong>, Cyrotics Technologies delivers seamless corporate topologies. From routine topological updates and <strong className="text-foreground font-semibold">network modifications</strong> to comprehensive, complex <strong className="text-foreground font-semibold">network transformations</strong>, we bridge the gap between legacy hardware and robust hybrid agility.
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
              {serviceData.features.map((feature) => (
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
        title={`Ready to implement ${serviceData.title}?`}
        description="Our specialists are on hand to discuss how we can tailor this solution to your precise needs."
        primaryButtonText="Contact a Cloud Specialist"
      />
    </>
  );
}
