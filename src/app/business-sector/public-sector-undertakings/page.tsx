import Image from 'next/image';
import {
  Landmark,
  ShieldCheck,
  Server,
  Network,
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

export default function PsuPage() {
  const solutions = [
    {
      title: 'Modern IT Infrastructure',
      icon: Server,
      description: 'Designing and deploying robust data centers, high-speed networks, and scalable IT infrastructure to support critical government operations and citizen services.',
    },
    {
      title: 'Cybersecurity Solutions',
      icon: ShieldCheck,
      description: 'Implementing multi-layered security frameworks, including next-gen firewalls, zero-trust architecture, and 24/7 monitoring to protect sensitive government data.',
    },
    {
      title: 'Data Center Modernization & Cloud Migration',
      icon: Cloud,
      description: 'Assisting PSUs in modernizing their legacy data centers and migrating workloads to secure government community clouds (GCC) or hybrid cloud environments.',
    },
    {
      title: 'Integrated Surveillance and Security',
      icon: Network,
      description: 'Deploying campus-wide surveillance, access control, and fire safety systems with integrated command centers for enhanced physical security of government facilities.',
    },
  ];

  return (
    <>
      <PageHero
        title="Public Sector Undertakings"
        description="Supporting national enterprises with robust IT infrastructure and secure digital transformation services."
        heroImage="/sector-public-sector-undertakings.png"
      />

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Your Trusted Partner for Digital India
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies has extensive experience working with Public Sector Undertakings (PSUs) and government bodies to build the digital backbone of the nation. We understand the unique challenges of the public sector, including the need for stringent security, regulatory compliance, and long-term reliability.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our solutions are designed to align with the Digital India mission, enabling government agencies to deliver services more efficiently, secure citizen data, and modernize their operations for the future.
            </p>
          </div>
          <div>
            <Image
              src="/psu.png"
              alt="Government building with digital network lines"
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
            Our Solutions for the Public Sector
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
          title="Ready to Modernize Your Infrastructure?"
          description="Contact us to learn how we can help your organization meet its technology goals while adhering to public sector standards."
          primaryButtonText="Consult with Our Experts"
        />
    </>
  );
}
