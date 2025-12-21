

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format, parseISO } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | CYROTICS Insights`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const otherPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-6 font-headline text-3xl md:text-5xl font-bold">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Avatar>
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{post.author}</p>
                <p className="text-xs text-muted-foreground">
                  Published on {format(parseISO(post.date), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>
          </div>

          <div className="my-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={675}
              className="object-cover w-full"
              priority
              data-ai-hint={post.imageHint}
            />
          </div>

          <div 
            className="prose max-w-none lg:prose-lg prose-headings:font-headline prose-headings:text-foreground prose-h3:text-2xl prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </section>
      
      <section className="bg-primary/5 py-16">
        <div className="container">
           <h2 className="text-center font-headline text-3xl font-bold">
            Continue Reading
          </h2>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherPosts.map((p) => (
              <Card key={p.slug} className="group">
                <CardHeader>
                  <CardTitle>
                     <Link href={`/blog/${p.slug}`} className="hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{p.excerpt}</p>
                   <Button asChild variant="link" className="px-0 pt-4">
                    <Link href={`/blog/${p.slug}`}>
                      Read More <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
