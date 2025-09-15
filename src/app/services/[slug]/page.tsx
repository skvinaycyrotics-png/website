import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="relative bg-primary/10 pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            data-ai-hint={service.imageHint}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative text-primary-foreground">
          <Badge variant="secondary">{service.title}</Badge>
          <h1 className="mt-4 font-headline text-4xl md:text-5xl font-bold">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-headline text-3xl font-bold">
              Key Features & Benefits
            </h2>
            <div className="mt-8 space-y-8">
              {service.features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.techStack.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{tech}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold">
            Ready to implement {service.title}?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Our specialists are on hand to discuss how we can tailor this
            solution to your precise needs.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact a Specialist <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
