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

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            A showcase of our commitment to excellence and innovation across
            diverse industries.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* A full implementation would have client-side filtering controls here */}
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
                  {/* A real implementation would link to a detailed project page */}
                  {/* <Button variant="link" className="px-0 pt-4 self-start">Read Case Study</Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="container py-16 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Let's Build Your Success Story
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto text-muted-foreground">
            Inspired by our work? Contact us to discuss how we can bring your
            next project to life.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
