import Image from 'next/image';
import {
  Landmark,
  ShieldCheck,
  Server,
  Cloud,
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
  title: 'E-Governance Solutions | CYROTICS TECHNOLOGIES',
  description: 'Empowering digital governance with secure, scalable, and citizen-centric technology solutions for public service delivery.',
};

export default function EGovernancePage() {
  const solutions = [
    {
      title: 'Digital Service Delivery Platforms',
      icon: Server,
      description: 'Building robust web and mobile platforms for delivering citizen services, from online applications to digital payments and document verification.',
    },
    {
      title: 'Secure Government Data Centers',
      icon: ShieldCheck,
      description: 'Designing and managing secure data centers and cloud infrastructure to host critical government applications and citizen data.',
    },
    {
      title: 'Government Community Cloud (GCC)',
      icon: Cloud,
      description: 'Assisting government agencies in migrating to and managing workloads on secure government community clouds for enhanced efficiency and security.',
    },
    {
      title: 'Inter-Departmental Secure Networks',
      icon: Landmark,
      description: 'Creating secure and high-speed networks to facilitate seamless data sharing and communication between different government departments.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            E-Governance
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Facilitating transparent, efficient, and citizen-centric public services through digital transformation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Powering Digital India
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies is committed to supporting the Digital India mission by providing the technology infrastructure for effective e-governance. We help government agencies build and manage the digital platforms needed to deliver services to citizens efficiently and securely.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our solutions focus on creating scalable, secure, and user-friendly systems that enhance transparency, reduce paperwork, and make public services more accessible to all. We are your trusted partner in building the future of digital governance.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/egov/600/400"
              alt="Person using a government service on a laptop"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="digital governance"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our E-Governance Solutions
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
            Modernize Your Public Services
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Let's work together to build the digital infrastructure for a more connected and efficient government.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Consult with Our E-Gov Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
