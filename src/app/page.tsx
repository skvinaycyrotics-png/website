
'use client';

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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { homeServices, PROJECTS_FOR_HOME, TESTIMONIALS } from '@/lib/constants';
import AnimatedCounter from '@/components/animated-counter';
import HeroHeadline from '@/components/hero-headline';
import PlexusBackground from '@/components/plexus-background';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const stats = [
  { value: 4, label: 'Years of Experience', icon: Calendar },
  { value: 50, label: 'Projects Completed', icon: GanttChartSquare },
  { value: 45, label: 'Satisfied Clients', icon: HeartHandshake },
  { value: 100, label: 'Team Size', icon: Users },
];

const whyChooseUs = [
  {
    icon: Globe,
    title: 'Pan-India Project Delivery',
    description:
      'We successfully execute complex IT & ELV infrastructure projects across India, from major cities to remote locations, ensuring consistent quality and on-time delivery.',
  },
  {
    icon: Building,
    title: 'Multi-Sector Expertise',
    description:
      'Our team has proven experience delivering mission-critical infrastructure for government, medical, aviation, data centers, and university projects.',
  },
  {
    icon: GraduationCap,
    title: 'Certified Professionals',
    description:
      'Our engineers hold industry-recognized certifications in networking, data centers, security, and cloud technologies, partnering with leading OEMs.',
  },
  {
    icon: PackageCheck,
    title: 'Turnkey Project Execution',
    description:
      'From design to deployment, we offer end-to-end solutions, taking full ownership to provide a seamless, hassle-free experience for our clients.',
  },
];

export default function Home() {
    const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const testimonialPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <main className="flex w-full flex-col items-center">
      <div className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full bg-background pb-16 pt-8 sm:pb-20 md:pb-32 lg:pb-40">
          <div className="absolute inset-0 z-0">
            <PlexusBackground />
          </div>
          <div className="container relative z-10">
             <div className="max-w-6xl">
              <HeroHeadline />
              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground">
                A professional approach to business results through systems integration.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-start gap-3 sm:gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/services">
                    Our Solutions <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="animate-pulse-glow">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-1/2 px-4 sm:px-6">
            <div className="rounded-lg bg-background p-4 sm:p-6 shadow-2xl max-w-6xl mx-auto">
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 sm:-ml-4">
                  {homeServices.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                    >
                      <div className="p-1 h-full">
                        <div className="h-full group text-center flex flex-col items-center justify-start p-4 transition-all hover:shadow-lg hover:-translate-y-1 rounded-lg border">
                          <div className="bg-primary text-primary-foreground rounded-lg p-3 flex items-center justify-center transition-transform group-hover:scale-110 shadow-md mb-3">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                          <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary min-h-[40px] flex-grow flex items-center">
                            {service.title}
                          </h3>
                          <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="mt-2 text-xs sm:text-sm"
                          >
                            <Link href={`/services/${service.slug}`}>
                              Learn More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-2 sm:-left-4" />
                <CarouselNext className="hidden md:flex -right-2 sm:-right-4" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section
          id="stats"
          className="bg-primary/5 w-full pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20"
        >
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                About Cyrotics
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
                Our journey and commitment to excellence in numbers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-primary" />
                  <div className="mt-2 sm:mt-3 font-headline text-2xl sm:text-4xl font-bold">
                    <AnimatedCounter to={stat.value} />+
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section
          id="why-choose-us"
          className="bg-background w-full py-12 sm:py-16 lg:py-20"
        >
          <div className="container px-4 sm:px-6 text-center">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Why Clients Trust Cyrotics Technologies
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
              Our commitment to quality, expertise, and nationwide execution.
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-fit">
                      <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-lg sm:text-xl pt-3 sm:pt-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="bg-primary/5 w-full py-12 sm:py-16 lg:py-20"
        >
          <div className="container px-4 sm:px-6 text-center">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Proven Success in Action
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
              Explore our portfolio of successfully delivered projects across
              various industries.
            </p>
            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS_FOR_HOME.map((project) => (
                <Card key={project.id} className="group overflow-hidden text-left">
                  <div className="overflow-hidden h-40 sm:h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="font-headline text-base sm:text-lg md:text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {project.client}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 sm:mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  View All Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section
          id="testimonials"
          className="relative w-full overflow-hidden bg-background py-12 sm:py-16 lg:py-20"
        >
          <div className="container px-4 sm:px-6">
            <h2 className="text-center font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base md:text-lg text-muted-foreground">
              Our commitment to quality and service speaks for itself through our
              clients&apos; experiences.
            </p>
            <Carousel
              plugins={[testimonialPlugin.current]}
              opts={{ align: 'start', loop: true }}
              className="mx-auto mt-8 sm:mt-12 w-full max-w-4xl"
            >
              <CarouselContent>
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                     <div className="p-4">
                      <Card className="h-full">
                        <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                          <Avatar className="h-16 w-16 mb-4">
                            <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <blockquote className="mt-2 flex-grow border-none p-0 text-sm sm:text-base text-muted-foreground">
                            <p>"{testimonial.quote}"</p>
                          </blockquote>
                           <div className="mt-4">
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-2rem] md:left-[-4rem]" />
              <CarouselNext className="right-[-2rem] md:right-[-4rem]" />
            </Carousel>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          id="cta"
          className="bg-primary/5 w-full py-12 sm:py-16 lg:py-20"
        >
          <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Build Your Future?
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                Let&apos;s discuss how CYROTICS can tailor a solution to meet your
                exact needs. Contact us for a consultation.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/contact">
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
