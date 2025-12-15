
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FileText,
  ShieldCheck,
  Building,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Trust & Compliance | CYROTICS TECHNOLOGIES',
  description:
    'Learn about our commitment to trust, compliance, and security. Access our company certifications, policies, and governance standards.',
};

const certifications = [
  {
    title: 'MSME Registered Organization',
    icon: Award,
    href: '/msme-certificate.pdf',
  },
  {
    title: 'Startup India Recognized Entity',
    icon: Award,
    href: '/startup-india-certificate.pdf',
  },
  {
    title: 'GST Compliant Company',
    icon: FileText,
    href: '/gst-certificate.pdf',
  },
  {
    title: 'Company Business Brochure',
    icon: FileText,
    href: '/cyrotics-brochure.pdf',
  },
];

const pillars = [
  {
    title: 'Strong Cybersecurity Practices',
    description: 'We implement a Zero-Trust aligned approach to secure our infrastructure and protect client data.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure Data Handling & Access Control',
    description: 'Your data is handled with the utmost care, with strict access controls and encryption to ensure confidentiality.',
    icon: ShieldCheck,
  },
  {
    title: 'Compliance with Government & Enterprise Norms',
    description: 'Our solutions and processes are designed to meet the stringent requirements of government tenders and enterprise audits.',
    icon: Building,
  },
   {
    title: 'Transparent Documentation & Audit Readiness',
    description: 'We maintain clear, comprehensive documentation for all projects, ensuring we are always ready for audits and reviews.',
    icon: FileText,
  },
];

export default function TrustAndCompliancePage() {
  return (
    <>
      <section className="bg-primary/5 py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Trust & Compliance
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Building Confidence Through Transparency, Security & Governance
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl text-center">
          <p className="text-lg text-muted-foreground">
            At Cyrotics Technologies OPC Pvt. Ltd., trust is the foundation of
            every partnership. Our compliance framework ensures that our
            clients—government, enterprise, and private—work with a partner
            that meets the highest standards of reliability, security, and
            regulatory adherence.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Certifications & Registrations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg pt-4">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline">
                    <Link href={cert.href} target="_blank">
                      View Document
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold mb-12">
            Our Commitment to Security & Governance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
               <Card key={pillar.title} className="text-left">
                <CardHeader className="flex-row items-start gap-4">
                    <pillar.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <CardTitle className="text-xl font-semibold">
                      {pillar.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Why Trust Cyrotics?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
             <div className="flex items-center gap-3">
                 <CheckCircle className="h-8 w-8 text-primary-foreground flex-shrink-0" />
                <span className="text-lg">Proven delivery across PAN India</span>
            </div>
             <div className="flex items-center gap-3">
                 <CheckCircle className="h-8 w-8 text-primary-foreground flex-shrink-0" />
                <span className="text-lg">Experience with government & enterprise projects</span>
            </div>
             <div className="flex items-center gap-3">
                 <CheckCircle className="h-8 w-8 text-primary-foreground flex-shrink-0" />
                <span className="text-lg">Transparent documentation & audit readiness</span>
            </div>
             <div className="flex items-center gap-3">
                 <CheckCircle className="h-8 w-8 text-primary-foreground flex-shrink-0" />
                <span className="text-lg">Secure & scalable technology solutions</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
