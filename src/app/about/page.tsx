import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TEAM_MEMBERS } from '@/lib/constants';
import { Target, Eye, Handshake } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with robust, secure, and intelligent technology solutions that drive growth, efficiency, and peace of mind.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted technology infrastructure and security partner for enterprises in India and emerging markets, known for our innovation and reliability.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    description:
      'Integrity, Excellence, Customer-Centricity, and Innovation form the bedrock of our operations and relationships.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            About CYROTICS TECHNOLOGIES
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Your partner in building a secure, efficient, and technologically
            advanced future.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded with the vision of bridging the technology gap for Tier 2
              and Tier 3 enterprises, CYROTICS TECHNOLOGIES OPC PVT LTD started
              as a small team of passionate engineers. We recognized the need
              for integrated, enterprise-grade solutions that were both
              accessible and scalable.
            </p>
            <p className="mt-4 text-muted-foreground">
              Over the years, we've grown into a leading provider of technology
              infrastructure and security solutions, serving hundreds of clients
              across diverse industries. Our journey is one of relentless
              commitment to quality, innovation, and customer success. We believe in
              building long-term partnerships, and our growth is a testament to
              the trust our clients place in us.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/teamwork/600/400"
              alt="Diverse team collaborating in an office"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl pt-4">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The driving force behind our innovation and commitment to excellence.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto shadow-lg"
                    data-ai-hint="professional headshot"
                  />
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Ready to build the future with us?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Explore career opportunities at CyroSecure or get in touch to discuss your next project.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/careers">Join Our Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
