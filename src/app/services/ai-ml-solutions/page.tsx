import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';

export const metadata = {
  title: 'AI & ML Solutions | CYROTICS TECHNOLOGIES',
  description: 'Unlock the power of real-time intelligence with our bespoke AI and Machine Learning ecosystems. We move beyond simple automation to deliver predictive accuracy, deep-data insights, and cognitive workflows that transform how your organization makes strategic decisions in a data-driven world.',
};

export default function AIMLSolutionsPage() {
  const serviceData = SERVICES.find(s => s.slug === 'ai-ml-solutions');

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={`${serviceData.title}`}
        description={serviceData.description}
        heroImage={serviceData.imageUrl}
      />

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
        primaryButtonText="Contact an AI Specialist"
      />
    </>
  );
}