
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  GanttChartSquare,
  Calendar,
  HeartHandshake,
  Globe,
  Building,
  GraduationCap,
  HardHat,
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
import { Input } from '@/components/ui/input';
import { SERVICES, PROJECTS, TESTIMONIALS } from '@/lib/constants';
import AnimatedCounter from '@/components/animated-counter';
import HeroHeadline from '@/components/hero-headline';
import PlexusBackground from '@/components/plexus-background';

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
    description: 'We successfully execute complex IT & ELV infrastructure projects across India, from major cities to remote locations, ensuring consistent quality and on-time delivery.'
  },
    {
    icon: Building,
    title: 'Multi-Sector Expertise',
    description: 'Our team has proven experience delivering mission-critical infrastructure for government, medical, aviation, data centers, and university projects.'
  },
  {
    icon: GraduationCap,
    title: 'Certified Professionals',
    description: 'Our engineers hold industry-recognized certifications in networking, data centers, security, and cloud technologies, partnering with leading OEMs.'
  },
    {
    icon: PackageCheck,
    title: 'Turnkey Project Execution',
    description: 'From design to deployment, we offer end-to-end solutions, taking full ownership to provide a seamless, hassle-free experience for our clients.'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full pb-24 bg-primary/5">
        <div className="absolute inset-0 z-0">
          <PlexusBackground />
        </div>
        <div className="relative z-10">
          <div className="container px-4 pt-20 pb-32 md:pt-32 md:pb-48 text-left">
            <div className="max-w-3xl">
              <HeroHeadline />
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                A professional approach to business results through systems
                integration.
              </p>
              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/services">
                    Our Solutions <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%]">
            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-6">
                {SERVICES.map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group text-center pt-12 pb-4 px-4 relative transition-colors hover:bg-primary/10 rounded-lg"
                  >
                    {index > 0 && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-border" />
                    )}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110 border-4 border-white shadow-md">
                        <service.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {service.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="bg-background pt-32 pb-12 sm:pt-32 lg:pb-20"
      >
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto h-12 w-12 text-primary" />
                <div className="mt-3 font-headline text-4xl font-bold">
                  <AnimatedCounter to={stat.value} />+
                </div>
                <p className="mt-1 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-background py-12 sm:py-16 lg:py-20">
        <div className="container px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Why Clients Trust Cyrotics Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
             Our commitment to quality, expertise, and nationwide execution.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl pt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="projects" className="bg-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="container px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Proven Success in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our portfolio of successfully delivered projects across
            various industries.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden text-left"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative py-12 sm:py-16 lg:py-20">
        <div className="container px-4">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            Our commitment to quality and service speaks for itself through our
            clients' experiences.
          </p>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mx-auto mt-12 w-full max-w-4xl"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-transparent shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <blockquote className="mt-6 border-none p-0 text-lg font-medium">
                        <p>"{testimonial.quote}"</p>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="cta" className="bg-primary/10 py-12 sm:py-16 lg:py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Build Your Future?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how CYROTICS can tailor a solution to meet your
              exact needs. Contact us for a consultation.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
