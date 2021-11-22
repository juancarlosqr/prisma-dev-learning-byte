import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  log('Prisma Client!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
