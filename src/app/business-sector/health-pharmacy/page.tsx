import Image from 'next/image';
import {
  HeartPulse,
  Server,
  ShieldCheck,
  GraduationCap,
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

export default function HealthPharmacyPage() {
  const solutions = [
    {
      title: 'Smart Hospital Infrastructure',
      icon: Server,
      description: 'End-to-end IT and ELV infrastructure for hospitals, including high-speed networks, secure data centers, and integrated communication systems for seamless operations.',
    },
    {
      title: 'Healthcare Data Security',
      icon: ShieldCheck,
      description: 'Protecting sensitive patient data (EMR/EHR) and ensuring HIPAA/DISHA compliance with our robust cybersecurity solutions and zero-trust frameworks.',
    },
    {
      title: 'Medical College & University Solutions',
      icon: GraduationCap,
      description: 'Building smart campuses for medical colleges with integrated solutions for e-learning, smart classrooms, campus-wide surveillance, and secure networks.',
    },
    {
      title: 'AI & IoT in Healthcare',
      icon: Bot,
      description: 'Implementing AI-driven diagnostics, IoT-based patient monitoring, and smart asset tracking to improve patient care and operational efficiency.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Health & Pharmacy
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Building the technology foundation for the future of healthcare, from smart hospitals to secure data management.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Empowering Modern Healthcare
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies is a leader in providing comprehensive technology solutions for the healthcare and pharmaceutical sectors. We have a proven track record of delivering turnkey IT and ELV infrastructure projects for some of India's largest government medical colleges and hospitals.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our solutions are designed to enhance patient care, streamline hospital operations, secure sensitive data, and create modern learning environments for medical students. We build smart, resilient, and compliant healthcare ecosystems.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/healthcare/600/400"
              alt="Doctor using a tablet in a modern hospital"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="doctor tablet"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Healthcare Solutions
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
            Build a Future-Ready Healthcare Facility
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Partner with us to implement technology that improves patient outcomes and operational excellence.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Contact Our Healthcare Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
