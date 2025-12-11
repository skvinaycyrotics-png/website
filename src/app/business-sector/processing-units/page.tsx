import Image from 'next/image';
import {
  Cog,
  Bot,
  Cpu,
  ShieldCheck,
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
  title: 'Processing Units | CYROTICS TECHNOLOGIES',
  description: 'Specialized technology solutions for processing units, including process automation, quality control, and robust IT infrastructure.',
};

export default function ProcessingUnitsPage() {
  const solutions = [
    {
      title: 'Process Automation & Control',
      icon: Cog,
      description: 'Implementing PLC, SCADA, and DCS systems to automate and control critical processes, ensuring consistency, efficiency, and safety.',
    },
    {
      title: 'AI-Based Quality Control',
      icon: Bot,
      description: 'Using computer vision and AI algorithms to automate quality inspection, detect defects, and ensure products meet high standards.',
    },
    {
      title: 'Real-Time Monitoring & Data Analytics',
      icon: Cpu,
      description: 'Deploying IoT sensors and data analytics platforms to monitor process parameters in real-time, enabling predictive maintenance and optimization.',
    },
    {
      title: 'Secure & Resilient Infrastructure',
      icon: ShieldCheck,
      description: 'Building robust and secure IT and OT networks to ensure the continuous and safe operation of your processing facility.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Processing Units
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Enhancing efficiency, quality, and safety in processing industries with intelligent automation and technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Optimizing Your Operations
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies provides specialized solutions for processing units across various sectors, including food processing, pharmaceuticals, and chemicals. We help businesses automate their operations, improve quality control, and ensure a safe and compliant environment.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our expertise in process automation, AI-driven quality control, and real-time monitoring helps you to not only enhance efficiency but also to gain valuable insights from your operational data. We build the technology foundation for smarter, safer, and more productive processing.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/processing/600/400"
              alt="Industrial processing plant interior"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="processing plant"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Solutions for Processing Units
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
            Streamline Your Processing
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Contact us to learn how our automation and technology solutions can transform your processing operations.
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
