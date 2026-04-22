'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Handshake, Rocket, Trophy, Briefcase, TrendingUp, CheckCircle, Target, Eye } from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { AnimatedSection, AnimatedItem } from '@/components/ui-patterns/animated-section';

const whoWeAreItems = [
    'IT Infrastructure & Networking',
    'Cybersecurity & Zero Trust Solutions',
    'ELV & Smart Building Systems',
    'AV & Multimedia Integration',
    'IoT, Automation & Robotics',
    'Automotive & Mobility Engineering',
    'Data Center Migration & Modernization',
    'Software & Web Development',
];

const values = [
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We commit to delivering the highest engineering standards in everything we do.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We think beyond boundaries and create future-ready solutions.',
  },
  {
    icon: Briefcase,
    title: 'Professionalism',
    description: 'We deliver with discipline, responsibility, and a customer-first mindset.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Learning',
    description: 'We empower our people to learn, grow, and lead with confidence.',
  },
];

const differentiators = [
    'Proven track record in PAN India government & private projects',
    'Expertise across IT, ELV, AV, IoT, Simulation, and Automotive domains',
    'Professional workforce with strong technical depth',
    'On-time delivery with seamless project execution',
    'Strong client relationships and continued support',
    'Fully compliant with MSME, Startup India, and statutory certifications',
];

export default function AboutUsPage() {
  return (
    <main className="w-full bg-background overflow-hidden">
      {/* HERO SECTION */}
      <PageHero
        title="Engineering the Future"
        description="At Cyrotics Technologies, we are driven by innovation, powered by passion, and committed to transforming the future of technology—one project at a time."
        gradientFrom="from-white/20"
        gradientPosition="top_right"
      />

      {/* INTRODUCTION */}
      <section className="py-24 sm:py-32">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
             <AnimatedSection className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-light">
                Founded with a vision to deliver next-generation IT & ELV Infrastructure solutions, we have grown into a trusted partner for government institutions, medical colleges, airports, commercial complexes, data centers, and leading private organizations across India.
             </AnimatedSection>
             <AnimatedSection className="mt-16 text-2xl md:text-3xl font-semibold text-foreground italic border-l-4 border-brand pl-8 text-left bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-r-3xl shadow-sm">
                “Technology should empower progress, inspire growth, and create a smarter, safer, and more connected world.”
             </AnimatedSection>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">Who We Are</h2>
             <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We are a multidisciplinary technology company specializing in a wide range of services. Our team consists of highly skilled engineers, innovators, and industry experts who bring deep technical knowledge and unmatched dedication to every project.
            </p>
          </AnimatedSection>
          <AnimatedSection stagger className="grid sm:grid-cols-2 gap-4">
              {whoWeAreItems.map((item) => (
                  <AnimatedItem 
                    key={item} 
                    className="flex items-start gap-3 p-4 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
                  >
                      <CheckCircle className="h-6 w-6 text-brand flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                  </AnimatedItem>
              ))}
          </AnimatedSection>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 sm:py-32">
        <div className="container px-4 sm:px-6">
          <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <AnimatedItem>
               <Card className="h-full border-none shadow-xl bg-gradient-to-br from-background to-zinc-50 dark:to-zinc-900/50 p-6 sm:p-10 rounded-3xl overflow-hidden relative group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                     <Target className="w-48 h-48" />
                   </div>
                   <CardHeader className="p-0 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand">
                        <Target className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline text-3xl sm:text-4xl">Our Mission</CardTitle>
                   </CardHeader>
                   <CardContent className="p-0 relative z-10">
                       <p className="text-muted-foreground text-lg leading-relaxed">To empower organizations with intelligent, secure, and scalable technology solutions that simplify operations, enhance communication, and enable long-term digital transformation.</p>
                   </CardContent>
               </Card>
             </AnimatedItem>
             <AnimatedItem>
               <Card className="h-full border-none shadow-xl bg-gradient-to-br from-background to-zinc-50 dark:to-zinc-900/50 p-6 sm:p-10 rounded-3xl overflow-hidden relative group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                     <Eye className="w-48 h-48" />
                   </div>
                   <CardHeader className="p-0 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand">
                        <Eye className="h-8 w-8" />
                      </div>
                      <CardTitle className="font-headline text-3xl sm:text-4xl">Our Vision</CardTitle>
                   </CardHeader>
                   <CardContent className="p-0 relative z-10">
                       <p className="text-muted-foreground text-lg leading-relaxed">To become India’s most trusted technology solutions provider by delivering world-class engineering, uncompromising quality, and customer-centric innovation.</p>
                   </CardContent>
               </Card>
             </AnimatedItem>
          </AnimatedSection>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30 border-y">
        <div className="container px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make.</p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((item) => (
              <AnimatedItem key={item.title}>
                <Card className="h-full text-center border-none shadow-sm hover:shadow-md transition-shadow rounded-3xl bg-background p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="mx-auto bg-brand/10 p-4 rounded-2xl w-fit text-brand">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl pt-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>
      
       {/* DIFFERENTIATORS */}
       <section className="py-24 sm:py-32">
        <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection stagger>
                 <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">What Sets Us Apart</h2>
                <ul className="mt-8 space-y-6">
                    {differentiators.map((item) => (
                         <AnimatedItem key={item} className="flex items-start gap-4">
                            <div className="mt-1 bg-brand/10 p-1 rounded-full text-brand">
                              <CheckCircle className="h-5 w-5 flex-shrink-0" />
                            </div>
                            <span className="text-foreground font-medium text-lg">{item}</span>
                        </AnimatedItem>
                    ))}
                </ul>
            </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="container px-4 sm:px-6 py-24 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-white tracking-tight">
              A Partner You Can Trust
            </h2>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              At Cyrotics Technologies, we don’t just deliver projects—we build long-term partnerships. With the right technology and the right people, every organization can unlock limitless possibilities.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full px-8 h-14 bg-white text-brand hover:bg-zinc-100 font-semibold transition-transform hover:scale-105">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
