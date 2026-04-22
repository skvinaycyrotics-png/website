import { UserService } from '../services/user.service';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4] || 'Admin User';

  if (!email || !password) {
    console.log('Usage: npx tsx src/scripts/create-admin.ts <email> <password> [name]');
    process.exit(1);
  }

  try {
    const existing = await UserService.findByEmail(email);
    if (existing) {
      console.error('User already exists with this email.');
      process.exit(1);
    }

    const user = await UserService.createUser({
      email,
      passwordRaw: password,
      name,
      role: 'ADMIN',
    });

    console.log('✅ Admin user created successfully:');
    console.log('ID:', user.id);
    console.log('Email:', user.email);
    console.log('Role:', user.role);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
