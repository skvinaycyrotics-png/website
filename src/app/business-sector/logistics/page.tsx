import Image from 'next/image';
import {
  Truck,
  Warehouse,
  Signal,
  Bot,
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

export default function LogisticsPage() {
  const solutions = [
    {
      title: 'IoT-Based Asset Tracking',
      icon: Signal,
      description: 'Real-time tracking of shipments, vehicles, and assets using GPS and IoT sensors to provide complete visibility across your supply chain and prevent losses.',
    },
    {
      title: 'Smart Warehouse & Automation',
      icon: Warehouse,
      description: 'Implementing warehouse management systems (WMS), automated sorting, and robotic process automation (RPA) to improve inventory accuracy and order fulfillment speed.',
    },
    {
      title: 'Supply Chain Visibility Platforms',
      icon: Bot,
      description: 'Developing custom platforms that integrate data from various sources (ERP, GPS, sensors) to provide end-to-end visibility and predictive analytics for your supply chain.',
    },
    {
      title: 'Cybersecurity for Logistics',
      icon: ShieldCheck,
      description: 'Securing your logistics and supply chain systems from cyber threats, ensuring the integrity of your data and the continuity of your operations.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Logistics & Supply Chain
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Driving efficiency, visibility, and resilience in your supply chain with intelligent technology solutions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Optimizing the Flow of Commerce
            </h2>
            <p className="mt-4 text-muted-foreground">
              In the fast-paced world of logistics and supply chain management, efficiency and visibility are key to success. CYROTICS Technologies provides advanced solutions that help logistics companies streamline their operations, reduce costs, and deliver better service to their customers.
            </p>
            <p className="mt-4 text-muted-foreground">
              From real-time asset tracking with IoT to smart warehouse automation, our technologies are designed to solve the most pressing challenges in the logistics industry. We help you build a smarter, more connected, and more resilient supply chain.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/logistics/600/400"
              alt="Warehouse with automated robots"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="logistics warehouse"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Logistics Solutions
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
            Transform Your Supply Chain
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Let's discuss how our technology can bring greater efficiency and visibility to your logistics operations.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
