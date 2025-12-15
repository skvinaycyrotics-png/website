
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  BrainCircuit,
  Server,
  Database,
  TrendingUp,
  GanttChartSquare,
  Users,
  CheckCircle,
  Briefcase,
  Bot,
  Globe,
  Shuffle,
  Signal,
} from 'lucide-react';

export const metadata = {
  title: 'Consulting Services | CYROTICS TECHNOLOGIES',
  description:
    'Strategic IT consulting to plan, design, modernize, and transform your IT ecosystem for a smarter, secure, and scalable future.',
};

const consultingServices = [
  {
    icon: Server,
    title: 'IT Infrastructure Consulting',
    description: 'We design and optimize resilient, high-performance IT infrastructures—including network architecture, cloud strategy, and HA/DR planning—aligned with long-term business growth.',
  },
  {
    icon: Database,
    title: 'Data Center Consulting',
    description: 'End-to-end consulting for data center assessment, modernization, migration, and greenfield builds, ensuring peak efficiency, security, and compliance.',
  },
  {
    icon: TrendingUp,
    title: 'IT Strategy Consulting',
    description: 'We align technology investments with your organizational goals by developing clear IT roadmaps, digital transformation strategies, and robust governance frameworks.',
  },
  {
    icon: GanttChartSquare,
    title: 'Project Management Consultancy',
    description: 'Our PMP-certified experts ensure complex IT projects are delivered on time and within budget through structured planning, risk mitigation, and stakeholder management.',
  },
];

const emergingTech = [
    { icon: Globe, title: 'Smart Cities & Smart Campuses' },
    { icon: Bot, title: 'AI & ML Platforms' },
    { icon: Signal, title: 'IoT Solutions' },
    { icon: Shuffle, title: 'Complex IT Migrations' },
];

const whyChooseUs = [
    { title: 'Experienced Consultants', description: 'Seasoned professionals with deep expertise across IT, networking, cybersecurity, data centers, and cloud.' },
    { title: 'Tailored & Collaborative Approach', description: 'Customized strategies aligned to your business, regulatory, and operational needs.' },
    { title: 'Strategic & Actionable Insights', description: 'We don’t just provide recommendations—we guide execution and implementation.' },
    { title: 'Focus on Business Outcomes', description: 'Driving improved performance, reduced risk, cost optimization, and measurable ROI.' },
    { title: 'Vendor-Agnostic Advisory', description: 'Unbiased guidance focused on the best solutions for your organization.' },
    { title: 'Long-Term Partnership', description: 'We act as trusted advisors throughout your digital transformation journey.' },
];

export default function ConsultingServicesPage() {
  return (
    <>
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Consulting Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Strategic IT Consulting for a Smarter, Secure & Scalable Future
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold flex items-center gap-3">
              <BrainCircuit className="h-10 w-10 text-primary" /> Your Trusted
              Advisors
            </h2>
            <div className="mt-6 text-muted-foreground space-y-4 text-lg">
                <p>
                    In today’s rapidly evolving digital ecosystem, technology alone is not enough—strategic vision, expert guidance, and flawless execution define success. Cyrotics Technologies Consulting Services empower organizations to plan, design, modernize, and transform their IT ecosystems with confidence.
                </p>
                <p>
                    We partner with you to optimize infrastructure, modernize data centers, build resilient networks, strengthen cybersecurity, and execute complex IT initiatives—all aligned with your business objectives. We help you turn complexity into clarity and innovation into measurable business value.
                </p>
            </div>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/consulting-team/600/400"
              alt="A team of consultants in a strategic meeting"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="team meeting"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Comprehensive Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service) => (
              <Card key={service.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Consulting for Emerging & Future Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
             {emergingTech.map(tech => (
                 <div key={tech.title} className="text-center flex flex-col items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-3">
                        <tech.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-semibold">{tech.title}</h4>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container">
           <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Why Choose Cyrotics for Consulting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                 <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                 <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Unlock Your IT Potential with Cyrotics
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Navigate today’s digital challenges with confidence and clarity. Partner with us to gain strategic insights, technical excellence, and future-ready solutions that accelerate growth and resilience. Your transformation starts here.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
