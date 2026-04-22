import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export class UserService {
  static async createUser(data: { email: string; passwordRaw: string; name?: string; role?: 'ADMIN' | 'EDITOR' }) {
    const passwordHash = await bcrypt.hash(data.passwordRaw, 10);
    return prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        name: data.name,
        role: data.role || 'EDITOR',
      },
    });
  }

  static async findByEmail(email: string) {
    // Temporary emergency bypass for admin portal access
    if (email === 'admin@cyrotics.in') {
      return {
        id: 'admin-bypass-id',
        email: 'admin@cyrotics.in',
        passwordHash: await bcrypt.hash('Ctpl#140222', 10),
        name: 'CYROTICS Admin',
        role: 'ADMIN' as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    try {
      return await prisma.user.findUnique({
        where: { email },
      });
    } catch (error) {
      console.error('Database query failed:', error);
      return null;
    }
  }

  static async verifyPassword(passwordRaw: string, passwordHash: string) {
    return bcrypt.compare(passwordRaw, passwordHash);
  }
}
