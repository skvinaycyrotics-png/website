
import Image from 'next/image';
import {
  Building,
  TrafficCone,
  Lightbulb,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UrbanDevelopmentPage() {
  const solutions = [
    {
      title: 'Smart City Infrastructure',
      icon: Building,
      description:
        'We build the foundational IT and network infrastructure that powers smart cities, ensuring high-speed connectivity and robust data processing capabilities for all urban services.',
    },
    {
      title: 'Intelligent Traffic Management',
      icon: TrafficCone,
      description:
        'Our solutions include AI-powered traffic monitoring, smart signaling, and real-time analytics to reduce congestion, improve traffic flow, and enhance road safety.',
    },
    {
      title: 'Smart Lighting',
      icon: Lightbulb,
      description:
        'We deploy energy-efficient smart lighting systems that adapt to real-time conditions, significantly reducing energy consumption and maintenance costs for municipalities.',
    },
    {
      title: 'Public Safety & Surveillance',
      icon: ShieldCheck,
      description:
        'City-wide surveillance with AI-driven analytics, emergency response systems, and integrated command and control centers to ensure the safety and security of citizens.',
    },
    {
      title: 'Integrated Command & Control Center (ICCC)',
      icon: Globe,
      description:
        'We design and build centralized command centers that provide a unified view of all city operations, enabling data-driven decision-making and efficient resource management.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Urban Development
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Building the smart, sustainable, and resilient cities of tomorrow
            through integrated technology solutions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Engineering the Future of Urban Living
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies is at the forefront of urban innovation,
              providing the technology backbone for smart city projects. We
              understand that modern cities require an integrated approach where
              data, connectivity, and intelligent systems work together to
              improve the quality of life for all residents.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our expertise spans from deploying robust fiber-optic networks to
              implementing AI-driven public safety solutions. We partner with
              municipalities and urban planners to create infrastructure that is
              not only efficient and scalable but also secure and sustainable.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/smartcity/600/400"
              alt="A modern cityscape with digital overlays"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="smart city"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Urban Development Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.title}>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-center pt-4">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Let's Build a Smarter City Together
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Contact our specialists to learn how our technology solutions can
            transform your urban development projects.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
