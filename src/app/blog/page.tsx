import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/constants';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format, parseISO } from 'date-fns';

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            CyroSecure Insights
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Expert analysis on technology infrastructure, security, and the future of enterprise IT.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.slug} className="flex flex-col group overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="pt-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0 flex items-center gap-4 mt-auto">
                  <Avatar>
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(parseISO(post.date), 'MMMM d, yyyy')}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
