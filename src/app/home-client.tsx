'use client';

// ─────────────────────────────────────────────────────────────────────────────
// This file contains all the client-side UI for the homepage.
// It was extracted from page.tsx so that page.tsx can be a server component
// and properly export metadata (Next.js App Router requirement).
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  GanttChartSquare,
  Calendar,
  HeartHandshake,
  Globe,
  Building,
  GraduationCap,
  PackageCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { homeServices, PROJECTS_FOR_HOME } from '@/lib/constants';
import AnimatedCounter from '@/components/animated-counter';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { AnimatedSection, AnimatedItem } from '@/components/ui-patterns/animated-section';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';

// ── Stats Data ───────────────────────────────────────────────────────────────
// FIX: Values are real numbers (4, 50, 45, 100).
// If counters show "0+" on the live site, the bug is inside the
// AnimatedCounter component — it likely fires on page load before the
// element enters the viewport. See animated-counter.tsx fix notes.
const stats = [
  { value: 4,   label: 'Years of Experience', icon: Calendar },
  { value: 50,  label: 'Projects Completed',  icon: GanttChartSquare },
  { value: 45,  label: 'Satisfied Clients',   icon: HeartHandshake },
  { value: 100, label: 'Team Size',           icon: Users },
];

const whyChooseUs = [
  {
    icon: Globe,
    title: 'Pan-India Delivery',
    description:
      'We successfully execute complex IT infrastructure projects across India, ensuring consistent quality and on-time delivery anywhere.',
  },
  {
    icon: Building,
    title: 'Multi-Sector Expertise',
    description:
      'Delivering mission-critical infrastructure for government, medical, aviation, and data centers.',
  },
  {
    icon: GraduationCap,
    title: 'Certified Professionals',
    description:
      'Our engineers hold industry-recognized certifications in networking, security, and cloud technologies.',
  },
  {
    icon: PackageCheck,
    title: 'Turnkey Execution',
    description:
      'From design to deployment, we offer end-to-end solutions, taking full ownership for a seamless experience.',
  },
];

export default function HomeClient() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="w-full">

        {/* HERO SECTION */}
        <PageHero
          title={
            <>
              Secure. Scalable. <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Intelligent.
              </span>
            </>
          }
          description="A professional approach to business results through systems integration. We deliver mission-critical infrastructure that powers your growth."
          heroImage="/bg-tech-v2.png"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base h-14 bg-white text-[#0a1628] hover:bg-zinc-200 font-semibold shadow-lg transition-all hover:scale-105"
            >
              <Link href="/services">
                Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base h-14 border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 font-semibold transition-all hover:scale-105"
            >
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </PageHero>

        {/* SERVICES BENTO GRID */}
        <section className="bg-transparent w-full py-20 sm:py-32">
          <div className="container px-4 sm:px-6">
            <div className="mb-16">
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Our Capabilities
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-foreground/80 font-medium">
                Comprehensive infrastructure solutions tailored for modern enterprises.
              </p>
            </div>

            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeServices.slice(0, 8).map((service) => (
                <AnimatedItem
                  key={service.slug}
                  className="group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-headline text-xl font-bold">{service.title}</h3>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-brand"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* WHY CHOOSE US & STATS */}
        <section className="bg-transparent w-full py-20 sm:py-32">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Why Leading Brands Trust Us
                </h2>
                <p className="mt-6 text-lg text-foreground/90 font-medium">
                  Our commitment to quality, expertise, and nationwide execution sets us apart.
                  We don&apos;t just build infrastructure; we build resilient foundations for the future.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="border-l-2 border-brand pl-6">
                      <div className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
                        {/* AnimatedCounter receives real values — if still showing 0,
                            the bug is in the AnimatedCounter component itself.
                            See src/components/animated-counter.tsx */}
                        <AnimatedCounter to={stat.value} />+
                      </div>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <AnimatedItem
                    key={item.title}
                    className="rounded-3xl border bg-background p-6 shadow-sm"
                  >
                    <item.icon className="mb-4 h-8 w-8 text-brand" />
                    <h3 className="mb-2 font-headline text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </AnimatedItem>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE */}
        <section className="bg-transparent w-full py-20 sm:py-32">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Featured Work
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  Explore our portfolio of successfully delivered projects.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS_FOR_HOME.slice(0, 3).map((project) => (
                <AnimatedItem
                  key={project.id}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/90 mb-4 font-medium">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>

        <BottomCTA />
      </div>
    </main>
  );
}
