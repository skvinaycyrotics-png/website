import { prisma } from '@/lib/prisma';

const CACHE_TTL = 1000 * 60 * 5; // 5 minutes
let projectCache: { data: any; timestamp: number } | null = null;

export class ProjectService {
  static async getAll(publishedOnly = true) {
    if (publishedOnly && projectCache && Date.now() - projectCache.timestamp < CACHE_TTL) {
      return projectCache.data;
    }

    const projects = await prisma.project.findMany({
      where: publishedOnly ? { published: true } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    if (publishedOnly) {
      projectCache = { data: projects, timestamp: Date.now() };
    }

    return projects;
  }

  private static clearCache() {
    projectCache = null;
  }

  static async getById(id: string) {
    return prisma.project.findUnique({ where: { id } });
  }

  static async create(data: {
    title: string;
    slug: string;
    client: string;
    shortDescription: string;
    content: string;
    imageUrl: string;
    tags: string[];
    published?: boolean;
  }) {
    this.clearCache();
    return prisma.project.create({ data });
  }

  static async update(id: string, data: any) {
    this.clearCache();
    return prisma.project.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    this.clearCache();
    return prisma.project.delete({ where: { id } });
  }
}
