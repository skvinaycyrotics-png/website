import Image from 'next/image';
import {
  Sun,
  BatteryCharging,
  Zap,
  Building,
  ShieldCheck,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import Link from 'next/link';

export default function EnergyPage() {
  const solutions = [
    {
      title: 'Solar Power Solutions',
      icon: Sun,
      description: 'End-to-end services for rooftop and ground-mounted solar power plants, from design and installation to commissioning and maintenance, helping you achieve energy independence.',
    },
    {
      title: 'Energy Storage Systems',
      icon: BatteryCharging,
      description: 'Integration of advanced battery energy storage systems (BESS) to store excess solar power, ensure 24/7 power reliability, and manage peak load demands effectively.',
    },
    {
      title: 'Grid Integration & Net Metering',
      icon: Zap,
      description: 'Seamless integration of your solar power system with the public grid, enabling you to export surplus energy and benefit from net metering policies.',
    },
    {
      title: 'Infrastructure for Energy Sector',
      icon: Building,
      description: 'Providing robust IT infrastructure, networking, and security solutions for energy companies and power plants to ensure efficient and secure operations.',
    },
  ];

  return (
    <>
      <PageHero
        title="Energy"
        description="Optimizing energy production and distribution with intelligent grid management and sustainable technology solutions."
        heroImage="/sector-energy.png"
      />

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Clean Energy for a Greener Tomorrow
            </h2>
            <p className="mt-4 text-muted-foreground">
              At CYROTICS Technologies, we are committed to driving the transition to renewable energy. We provide end-to-end solar power solutions for businesses, industries, and institutions, helping them reduce their carbon footprint and achieve significant savings on energy costs.
            </p>
            <p className="mt-4 text-muted-foreground">
              In addition to our renewable energy offerings, we also deliver specialized IT and security infrastructure for the broader energy sector, ensuring that power generation and distribution operations are efficient, reliable, and secure.
            </p>
          </div>
          <div>
            <Image
              src="/Energy.png"
              alt="Solar panels against a blue sky"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Energy Sector Solutions
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
      
      <BottomCTA 
          title="Harness the Power of Renewable Energy"
          description="Contact us today for a consultation on how our solar and infrastructure solutions can benefit your organization."
          primaryButtonText="Go Green with Cyrotics"
        />
    </>
  );
}
