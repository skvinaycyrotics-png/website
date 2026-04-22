
import Link from 'next/link';
import {
  Server,
  ShieldCheck,
  MonitorSpeaker,
  Bot,
  Code,
  Car,
  Building,
  HeartPulse,
  Landmark,
  Briefcase,
  GraduationCap,
  Plane,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/ui-patterns/page-hero';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const whatWeDo = [
  {
    title: 'IT Infrastructure & Data Center Solutions',
    icon: Server,
    description: 'Data Center setup, campus network design, cloud infrastructure, and structured cabling.',
  },
  {
    title: 'Cybersecurity & Zero-Trust Frameworks',
    icon: ShieldCheck,
    description: 'Firewall solutions, Zero Trust Architecture, NAC, SOC implementation, and threat monitoring.',
  },
  {
    title: 'ELV, AV & Smart Solutions',
    icon: MonitorSpeaker,
    description: 'Surveillance systems, public address, smart AV conference rooms, and access control.',
  },
];

const industries = [
  { title: 'Government & Public Sector', icon: Landmark },
  { title: 'Healthcare & Medical Education', icon: HeartPulse },
  { title: 'Aviation & Airports', icon: Plane },
  { title: 'Data Centers', icon: Database },
  { title: 'Automotive & EV', icon: Car },
  { title: 'Smart Buildings & Commercial Complexes', icon: Building },
  { title: 'Universities & Research Institutes', icon: GraduationCap },
  { title: 'IT/ITES & Corporate Enterprises', icon: Briefcase },
];


export default function BusinessSectorsOverviewPage() {
  return (
    <>
      <PageHero
        title="Business Sectors Overview"
        description="Engineering the future of IT, infrastructure, and intelligent systems across diverse industries."
        heroImage="/sector-overview.png"
      />

      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold">Our Vision & Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Our vision is to be a leading global technology partner empowering organizations with intelligent, secure, and future-ready digital and engineering solutions. Our mission is to deliver high-impact, technology-driven outcomes through innovation, reliability, and engineering excellence.
            </p>
          </div>

           <div className="mt-16">
            <h3 className="text-center font-headline text-3xl font-bold mb-12">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatWeDo.map((item) => (
                <Card key={item.title}>
                   <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-md">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
           <div className="mt-20">
            <h3 className="text-center font-headline text-3xl font-bold mb-12">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {industries.map(industry => (
                    <div key={industry.title} className="text-center flex flex-col items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-3">
                            <industry.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h4 className="font-semibold">{industry.title}</h4>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

       <BottomCTA 
          title="Let's Build the Future Together"
          description="Cyrotics Technologies is more than a service provider—we are your strategic partner for digital transformation, engineering innovation, and long-term operational growth."
          primaryButtonText="Request a Consultation"
        />
    </>
  );
}
