import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Handshake, Rocket, Trophy, Briefcase, TrendingUp, CheckCircle, Target, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | CYROTICS TECHNOLOGIES',
  description: 'Learn about our mission to empower businesses with robust technology solutions. Meet the leadership team driving our commitment to innovation, reliability, and customer success.',
};

const whoWeAreItems = [
    'IT Infrastructure & Networking',
    'Cybersecurity & Zero Trust Solutions',
    'ELV & Smart Building Systems',
    'AV & Multimedia Integration',
    'IoT, Automation & Robotics',
    'Automotive & Mobility Engineering',
    'Data Center Migration & Modernization',
    'Software & Web Development',
];

const values = [
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We commit to delivering the highest engineering standards in everything we do.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We think beyond boundaries and create future-ready solutions.',
  },
    {
    icon: Briefcase,
    title: 'Professionalism',
    description: 'We deliver with discipline, responsibility, and a customer-first mindset.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Learning',
    description: 'We empower our people to learn, grow, and lead with confidence.',
  },
];

const differentiators = [
    'Proven track record in PAN India government & private projects',
    'Expertise across IT, ELV, AV, IoT, Simulation, and Automotive domains',
    'Professional workforce with strong technical depth',
    'On-time delivery with seamless project execution',
    'Strong client relationships and continued support',
    'Fully compliant with MSME, Startup India, and statutory certifications',
];

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
             At Cyrotics Technologies (OPC) Private Limited, we are driven by innovation, powered by passion, and committed to transforming the future of technology—one project at a time.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto text-center">
             <p className="text-muted-foreground text-lg">
                Founded with a vision to deliver next-generation IT & ELV Infrastructure solutions, we have grown into a trusted partner for government institutions, medical colleges, airports, commercial complexes, data centers, and leading private organizations across India.
             </p>
             <blockquote className="mt-8 text-2xl font-semibold text-primary italic border-l-4 border-primary pl-6 text-left">
                “Technology should empower progress, inspire growth, and create a smarter, safer, and more connected world.”
             </blockquote>
        </div>
      </section>

       <section className="py-16 bg-primary/5">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold">Who We Are</h2>
             <p className="mt-4 text-muted-foreground">
                We are a multidisciplinary technology company specializing in a wide range of services. Our team consists of highly skilled engineers, innovators, and industry experts who bring deep technical knowledge and unmatched dedication to every project.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
                {whoWeAreItems.map(item => (
                     <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{item}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <Card>
                 <CardHeader className="flex-row items-center gap-4">
                    <Target className="h-12 w-12 text-primary" />
                    <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
                 </CardHeader>
                 <CardContent>
                     <p className="text-muted-foreground text-lg">To empower organizations with intelligent, secure, and scalable technology solutions that simplify operations, enhance communication, and enable long-term digital transformation.</p>
                 </CardContent>
             </Card>
              <Card>
                 <CardHeader className="flex-row items-center gap-4">
                    <Eye className="h-12 w-12 text-primary" />
                    <CardTitle className="font-headline text-3xl">Our Vision</CardTitle>
                 </CardHeader>
                 <CardContent>
                     <p className="text-muted-foreground text-lg">To become India’s most trusted technology solutions provider by delivering world-class engineering, uncompromising quality, and customer-centric innovation.</p>
                 </CardContent>
             </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl pt-4">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                  src="https://picsum.photos/seed/teamwork/600/400"
                  alt="A team of professionals collaborating on a project"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  data-ai-hint="team collaboration"
                />
            </div>
            <div>
                 <h2 className="font-headline text-3xl font-bold">What Sets Us Apart</h2>
                <ul className="mt-6 space-y-4">
                    {differentiators.map(item => (
                         <li key={item} className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-lg">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            A Partner You Can Trust
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            At Cyrotics Technologies, we don’t just deliver projects—we build long-term partnerships. With the right technology and the right people, every organization can unlock limitless possibilities.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
