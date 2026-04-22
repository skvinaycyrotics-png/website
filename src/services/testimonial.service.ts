import { prisma } from '@/lib/prisma';

const CACHE_TTL = 1000 * 60 * 5; // 5 minutes
let testimonialCache: { data: any; timestamp: number } | null = null;

export class TestimonialService {
  static async getAll(approvedOnly = true) {
    if (approvedOnly && testimonialCache && Date.now() - testimonialCache.timestamp < CACHE_TTL) {
      return testimonialCache.data;
    }

    const testimonials = await prisma.testimonial.findMany({
      where: approvedOnly ? { approved: true } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    if (approvedOnly) {
      testimonialCache = { data: testimonials, timestamp: Date.now() };
    }

    return testimonials;
  }

  private static clearCache() {
    testimonialCache = null;
  }

  static async create(data: {
    author: string;
    company?: string;
    content: string;
    rating?: number;
    approved?: boolean;
  }) {
    this.clearCache();
    return prisma.testimonial.create({ data });
  }

  static async update(id: string, data: any) {
    this.clearCache();
    return prisma.testimonial.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    this.clearCache();
    return prisma.testimonial.delete({ where: { id } });
  }
}
