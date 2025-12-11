import Image from 'next/image';
import {
  Factory,
  Bot,
  Cpu,
  Network,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing Units | CYROTICS TECHNOLOGIES',
  description: 'Driving Industry 4.0 with smart factory solutions, industrial automation, and robust IT/OT infrastructure for modern manufacturing units.',
};

export default function ManufacturingUnitsPage() {
  const solutions = [
    {
      title: 'Smart Factory & Industry 4.0',
      icon: Factory,
      description: 'Implementing digital twin technology, IoT-enabled machinery, and predictive maintenance to create intelligent and efficient manufacturing environments.',
    },
    {
      title: 'Industrial Robotics & Automation',
      icon: Bot,
      description: 'Deploying robotic arms for welding, assembly, and material handling, alongside PLC and SCADA systems for process control and automation.',
    },
    {
      title: 'IT/OT Converged Networks',
      icon: Network,
      description: 'Designing secure and high-performance converged networks that allow seamless communication between information technology (IT) and operational technology (OT) systems.',
    },
    {
      title: 'Manufacturing Execution Systems (MES)',
      icon: Cpu,
      description: 'Developing and integrating MES to monitor and manage work-in-progress on the factory floor, improving production efficiency and quality control.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Manufacturing Units
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Building the smart, connected, and automated factories of the future.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Embracing Industry 4.0
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies empowers manufacturing units to embrace the fourth industrial revolution. We provide end-to-end solutions for industrial automation and smart factory infrastructure, helping businesses increase productivity, reduce costs, and improve quality.
            </p>
            <p className="mt-4 text-muted-foreground">
              From deploying industrial robots on the assembly line to building converged IT/OT networks, our expertise ensures that your manufacturing operations are ready for the future. We help you leverage technology to gain a competitive edge in the global market.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/manufacturing/600/400"
              alt="Automated factory assembly line"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="manufacturing factory"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Solutions for Manufacturing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Build a Smarter Factory
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Let's discuss how our industrial automation and IT solutions can revolutionize your manufacturing process.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Consult with an Industry 4.0 Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
