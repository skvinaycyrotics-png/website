import Link from 'next/link';
import {
  Building2,
  Landmark,
  Network,
  Truck,
  HeartPulse,
  GraduationCap,
  Wind,
  Car,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const sectors = [
  {
    title: 'Urban Development',
    icon: Building2,
    href: '/business-sector/urban-development',
    description: 'Smart infrastructure for modern cities, including smart lighting, traffic management, and public safety solutions.',
  },
  {
    title: 'Public Sector Undertakings',
    icon: Landmark,
    href: '/business-sector/public-sector-undertakings',
    description: 'Robust and secure IT infrastructure for government agencies to enhance public service delivery and operational efficiency.',
  },
  {
    title: 'Telecom',
    icon: Network,
    href: '/business-sector/telecom',
    description: 'Scalable network solutions, data center infrastructure, and cybersecurity for the telecommunications industry.',
  },
  {
    title: 'Logistics',
    icon: Truck,
    href: '/business-sector/logistics',
    description: 'IoT-based asset tracking, warehouse automation, and supply chain management solutions for the logistics sector.',
  },
  {
    title: 'Health & Pharmacy',
    icon: HeartPulse,
    href: '/business-sector/health-pharmacy',
    description: 'Smart hospital solutions, secure data management for patient records, and IT infrastructure for medical colleges.',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    href: '/business-sector/education',
    description: 'Smart campus solutions, e-learning platforms, and secure network infrastructure for universities and schools.',
  },
   {
    title: 'Energy',
    icon: Wind,
    href: '/business-sector/energy',
    description: 'Renewable energy solutions, including solar power systems and energy storage for sustainable operations.',
  },
  {
    title: 'Mobility & Automotive',
    icon: Car,
    href: '/business-sector/mobility-automotive-engineering',
    description: 'IT solutions for the automotive industry, including smart factory infrastructure and connected vehicle technologies.',
  },
];

export default function BusinessSectorsOverviewPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Powering Progress Across Industries
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We deliver specialized technology solutions tailored to the unique
            challenges and opportunities of each business sector.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card key={sector.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <sector.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle>{sector.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{sector.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline">
                    <Link href={sector.href}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-primary/5">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Your Industry, Our Expertise
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Don't see your sector? Our solutions are adaptable. Contact us to discuss how we can meet your specific needs.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
