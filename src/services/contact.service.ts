import { prisma } from '@/lib/prisma';

export class ContactService {
  static async getAll() {
    return prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async create(data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) {
    return prisma.contactSubmission.create({ data });
  }

  static async updateStatus(id: string, status: 'UNREAD' | 'READ' | 'REPLIED') {
    return prisma.contactSubmission.update({
      where: { id },
      data: { status },
    });
  }
}
