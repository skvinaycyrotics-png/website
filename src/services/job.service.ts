import { prisma } from '@/lib/prisma';

const CACHE_TTL = 1000 * 60 * 5; // 5 minutes
let jobCache: { data: any; timestamp: number } | null = null;

export class JobService {
  static async getAll(activeOnly = true) {
    if (activeOnly && jobCache && Date.now() - jobCache.timestamp < CACHE_TTL) {
      return jobCache.data;
    }

    const jobs = await prisma.job.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    if (activeOnly) {
      jobCache = { data: jobs, timestamp: Date.now() };
    }

    return jobs;
  }

  private static clearCache() {
    jobCache = null;
  }

  static async create(data: {
    title: string;
    department: string;
    location: string;
    description: string;
    isActive?: boolean;
  }) {
    this.clearCache();
    return prisma.job.create({ data });
  }

  static async update(id: string, data: any) {
    this.clearCache();
    return prisma.job.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    this.clearCache();
    return prisma.job.delete({ where: { id } });
  }
}
