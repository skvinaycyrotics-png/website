import Image from 'next/image';
import {
  Shield,
  Network,
  Command,
  Satellite,
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
  title: 'Defence Solutions | CYROTICS TECHNOLOGIES',
  description: 'Providing mission-critical IT, communication, and security infrastructure for defence and national security applications.',
};

export default function DefencePage() {
  const solutions = [
    {
      title: 'Secure Communication Networks',
      icon: Network,
      description: 'Deploying encrypted, resilient, and multi-layered communication networks (wired & wireless) for tactical and strategic operations.',
    },
    {
      title: 'Integrated Command & Control Centers',
      icon: Command,
      description: 'Building state-of-the-art command centers with integrated surveillance, communication, and data analytics for real-time situational awareness.',
    },
    {
      title: 'Cybersecurity & Information Warfare',
      icon: Shield,
      description: 'Implementing robust cybersecurity frameworks, threat intelligence platforms, and defensive measures to protect critical digital assets.',
    },
    {
      title: 'Advanced Surveillance Systems',
      icon: Satellite,
      description: 'Deploying long-range surveillance, thermal imaging, and AI-driven video analytics for border security and asset protection.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Defence & National Security
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Engineering secure, reliable, and mission-critical technology solutions for national defence.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Strengthening National Security
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies provides specialized technology infrastructure for the defence sector. We understand the stringent requirements for security, reliability, and performance in mission-critical environments.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our solutions are designed to support tactical and strategic operations, from building secure communication networks to developing integrated command and control centers. We are committed to providing the technological backbone that enhances our nation's security posture.
            </p>
          </div>
          <div>
            <Image
              src="/Defence.png"
              alt="Military personnel in a command center"
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
            Our Defence Sector Solutions
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
            Partnering for a Secure Nation
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Contact us to discuss how our expertise in secure and resilient infrastructure can support your defence projects.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Engage with Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
