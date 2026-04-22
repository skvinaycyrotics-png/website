'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui-patterns/animated-section';

interface BottomCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function BottomCTA({
  title = "Ready to Build Your Future?",
  description = "Let's discuss how CYROTICS can tailor a solution to meet your exact needs. Schedule a consultation with our experts today.",
  primaryButtonText = "Start a Project",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore Services",
  secondaryButtonHref = "/services",
}: BottomCTAProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a1628] py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image 
          src="/bg-tech-v2.png" 
          alt="" 
          fill 
          className="object-cover opacity-40" 
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]/80"></div>
      <div className="container relative z-10 px-4 sm:px-6 text-center">
        <AnimatedSection className="mx-auto max-w-3xl">
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 bg-white text-[#0a1628] hover:bg-zinc-200 font-semibold shadow-lg transition-all hover:scale-105">
              <Link href={primaryButtonHref}>
                {primaryButtonText}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 font-semibold transition-all hover:scale-105">
              <Link href={secondaryButtonHref}>
                {secondaryButtonText}
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
