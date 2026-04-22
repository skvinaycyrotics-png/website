
import Image from 'next/image';
import {
  Network,
  Server,
  ShieldCheck,
  Signal,
  Cloud,
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

export default function TelecomPage() {
  const solutions = [
    {
      title: 'Data Center Infrastructure',
      icon: Server,
      description: 'Building and managing high-density, scalable data centers that form the core of modern telecommunication networks, ensuring 99.99% uptime for critical services.',
    },
    {
      title: 'High-Speed Network Solutions',
      icon: Network,
      description: 'Deploying carrier-grade routing, switching, and optical transport networks to support massive data traffic and the rollout of 5G and future technologies.',
    },
    {
      title: 'Cybersecurity for Telcos',
      icon: ShieldCheck,
      description: 'Protecting network infrastructure, subscriber data, and billing systems from sophisticated cyber threats with our managed security services and next-gen firewalls.',
    },
    {
      title: 'Cloud & NFV Infrastructure',
      icon: Cloud,
      description: 'Helping telcos transition to Network Functions Virtualization (NFV) and cloud-native architectures for greater agility, scalability, and cost-efficiency.',
    },
  ];

  return (
    <>
      <PageHero
        title="Telecom"
        description="Powering the next generation of communication with robust, scalable, and secure network infrastructure."
        heroImage="/sector-telecom.png"
      />

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              The Backbone of Digital Connectivity
            </h2>
            <p className="mt-4 text-muted-foreground">
              The telecommunications industry is the lifeline of the digital economy. At CYROTICS Technologies, we provide the foundational infrastructure that enables telecom operators to deliver reliable, high-speed services to millions of users.
            </p>
            <p className="mt-4 text-muted-foreground">
              From building resilient data centers to deploying secure, high-capacity networks, our solutions are engineered to meet the demanding standards of the telecom sector.
            </p>
          </div>
          <div>
            <Image
              src="/Telecom.png"
              alt="Telecommunication tower with network signals"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="telecom tower"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Solutions for the Telecom Sector
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
          title="Build Your Network for Tomorrow"
          description="Partner with us to build a telecom infrastructure that is ready for the future of communication. Contact our experts today."
          primaryButtonText="Discuss Your Project"
        />
    </>
  );
}
