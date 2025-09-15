import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  imageHint: string;
  features: {
    title:string;
    description: string;
    icon: LucideIcon;
  }[];
  techStack: string[];
  caseStudies: {
    title: string;
    slug: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  timeline: string;
  results: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface JobOpening {
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
