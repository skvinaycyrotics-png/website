import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Users,
  BarChart,
  Lightbulb,
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

const stats = [
  { value: 15, label: 'Years of Experience', icon: BarChart },
  { value: 500, label: 'Projects Completed', icon: Server },
  { value: 250, label: 'Satisfied Clients', icon: Users },
  { value: 10, label: 'Industry Awards', icon: Lightbulb },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[500px] w-full bg-primary/10">
        <Image
          src="https://picsum.photos/seed/hero/1920/1080"
          alt="Modern data center"
          fill
          className="object-cover"
          priority
          data-ai-hint="data center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Building Tomorrow's Infrastructure, Securing Today's World
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl">
              CYROTICS TECHNOLOGIES: Your trusted partner for integrated
              infrastructure, security, and smart technology solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/services">
                  Explore Our Services <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="bg-background py-12 sm:py-16 lg:py-20">
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

      <section id="services" className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Comprehensive Service Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Delivering excellence across the full spectrum of technology
            solutions.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card
                key={service.slug}
                className="transform text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.shortDescription}</CardDescription>
                  <Button asChild variant="link" className="px-0 pt-4">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-primary/5 py-12 sm:py-16 lg:py-20"
      >
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

      <section
        id="testimonials"
        className="relative py-12 sm:py-16 lg:py-20"
      >
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
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                        data-ai-hint="professional portrait"
                      />
                      <blockquote className="mt-6 border-none p-0 text-lg font-medium">
                        <p>"{testimonial.quote}"</p>
                      </blockquote>
                      <div className="mt-4 font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </div>
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

      <section
        id="cta"
        className="bg-primary/10 py-12 sm:py-16 lg:py-20"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Build Your Future?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how CYROTICS can tailor a solution to meet your exact needs. Contact us for a consultation.
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
