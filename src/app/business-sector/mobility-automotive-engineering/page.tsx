import Image from 'next/image';
import {
  Car,
  Factory,
  Network,
  ShieldCheck,
  Bot,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MobilityPage() {
  const solutions = [
    {
      title: 'Smart Factory & Industry 4.0',
      icon: Factory,
      description: 'Designing and implementing the IT and OT infrastructure for smart factories, including industrial networking, IoT integration, and process automation for automotive manufacturing.',
    },
    {
      title: 'Connected Vehicle Infrastructure',
      icon: Network,
      description: 'Building the robust network and data center backbone required to support connected vehicle technologies, including V2X (Vehicle-to-Everything) communication and telematics.',
    },
    {
      title: 'Cybersecurity for Automotive',
      icon: ShieldCheck,
      description: 'Securing the entire automotive ecosystem, from the factory floor to the connected car, against cyber threats to ensure product integrity and driver safety.',
    },
    {
      title: 'AI in Automotive Engineering',
      icon: Bot,
      description: 'Leveraging AI and machine learning for predictive maintenance in manufacturing, quality control through computer vision, and data analytics for improving vehicle design and performance.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Mobility & Automotive Engineering
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Driving the future of mobility with intelligent, secure, and connected solutions for the automotive industry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Engineering the Next Generation of Vehicles
            </h2>
            <p className="mt-4 text-muted-foreground">
              The automotive industry is undergoing a massive transformation, driven by connectivity, electrification, and automation. CYROTICS Technologies provides the critical technology infrastructure that automotive companies need to innovate and compete in this new era of mobility.
            </p>
            <p className="mt-4 text-muted-foreground">
              From building smart factories that leverage Industry 4.0 principles to providing the secure network backbone for connected vehicles, our solutions cover the entire automotive value chain. We help our clients build safer, smarter, and more efficient vehicles for the future.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/automotive/600/400"
              alt="Robotic arms assembling a car in a factory"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="automotive factory"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Automotive Solutions
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
            Accelerate Your Automotive Innovation
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Let's discuss how our technology expertise can support your automotive engineering and manufacturing goals.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Partner with Cyrotics</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
