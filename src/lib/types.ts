
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
  subLinks?: NavLink[];
};

export interface Service {
  slug: string;
  title: string;
  category: string;
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

export type HomeService = {
  slug: string;
  title: string;
  icon: LucideIcon;
};

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
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
  careerLevel: string;
  occupation: string;
  segment: string;
  experienceLevel: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
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

export interface LocationFilter {
  name: string;
  states: {
    name: string;
    cities: string[];
  }[];
}

export interface OccupationFilter {
  level: string;
  roles: string[];
}

export interface EmployeeTestimonial {
    quote: string;
    name: string;
    role: string;
}

export interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface CareerFAQ {
    question: string;
    answer: string;
}

    
