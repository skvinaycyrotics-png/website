import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BottomCTA } from '@/components/ui-patterns/bottom-cta';
import { PageHero } from '@/components/ui-patterns/page-hero';

export const metadata = {
  title: 'Our Projects | CYROTICS TECHNOLOGIES',
  description: 'Explore our portfolio of successful projects. See how we have delivered innovative and reliable technology solutions for clients in finance, healthcare, manufacturing, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        description="A showcase of our commitment to excellence and innovation across diverse industries."
        heroImage="/bg-tech-v2.png"
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground flex-grow">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA 
          title="Let's Build Your Success Story"
          description="Inspired by our work? Contact us to discuss how we can bring your next project to life."
          primaryButtonText="Start a Project With Us"
        />
    </>
  );
}
