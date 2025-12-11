import Image from 'next/image';
import {
  GraduationCap,
  Network,
  ShieldCheck,
  Presentation,
  Building,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EducationPage() {
  const solutions = [
    {
      title: 'Smart Campus Solutions',
      icon: Building,
      description: 'Comprehensive IT and ELV infrastructure for universities and schools, including campus-wide networking, surveillance, and access control for a secure and connected environment.',
    },
    {
      title: 'High-Speed Campus Networking',
      icon: Network,
      description: 'Designing and deploying robust Wi-Fi and fiber-optic networks to provide seamless, high-speed internet access for students, faculty, and staff across the entire campus.',
    },
    {
      title: 'E-Learning & Smart Classrooms',
      icon: Presentation,
      description: 'Equipping educational institutions with smart classroom technology, including interactive displays, lecture capture systems, and AV solutions to enhance the learning experience.',
    },
    {
      title: 'Cybersecurity for Education',
      icon: ShieldCheck,
      description: 'Protecting student data, research, and administrative systems from cyber threats with our tailored security solutions, ensuring a safe digital learning environment.',
    },
  ];

  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Education
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Creating modern, connected, and secure learning environments for the next generation of innovators.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">
              Technology-Driven Learning
            </h2>
            <p className="mt-4 text-muted-foreground">
              CYROTICS Technologies is committed to transforming the education sector with cutting-edge technology. We specialize in building smart campuses for universities, colleges, and schools, providing the infrastructure needed for modern teaching and learning.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our solutions range from high-speed campus-wide Wi-Fi to state-of-the-art smart classrooms and robust cybersecurity. We partner with educational institutions to create environments that foster collaboration, innovation, and academic excellence.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/education/600/400"
              alt="Students collaborating in a modern classroom"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="modern classroom"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Solutions for the Education Sector
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
            Build a Campus for the Future
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Let's work together to create a learning environment that inspires and empowers your students.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Speak to an Education Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
