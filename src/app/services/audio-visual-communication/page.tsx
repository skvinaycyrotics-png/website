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
import { notFound } from 'next/navigation';

// 1. Target AV Keywords Integrated into Metadata
export const metadata: Metadata = {
  title: 'Audio Visuals Center Builders & Modifications | CYROTICS TECHNOLOGIES',
  description: 'Premium audio visuals center builders delivering tailored workspace design modifications and automated enterprise AV communication transformations.',
  keywords: ['Audio Visuals center builders', 'Audio Visuals modifications', 'Audio Visuals transformations'],
  alternates: {
    canonical: '/services/audio-visual-communication/',
  },
};

export default function AudioVisualCommunicationPage() {
  const service = SERVICES.find(s => s.slug === 'audio-visual-communication');

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
                alt="Audio Visuals Center Builders Platform"
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
            Next-Gen AV Integration & Engineering
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            As industry-recognized <strong className="text-foreground font-semibold">Audio Visuals center builders</strong>, Cyrotics Technologies engineers seamless interactive environments. From minor conference room structural alignments and <strong className="text-foreground font-semibold">Audio Visuals modifications</strong> to fully immersive acoustic and workspace <strong className="text-foreground font-semibold">Audio Visuals transformations</strong>, we optimize collaboration for the modern enterprise.
          </p>
        </div>
      </section>

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
        title="Ready to Enhance Your Communication?"
        description="Our AV specialists are ready to design a solution that transforms your meeting and collaboration spaces."
        primaryButtonText="Contact an AV Specialist"
      />
    </>
  );
}
