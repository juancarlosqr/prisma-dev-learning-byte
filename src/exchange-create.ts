import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  const exchangeCreated = await prisma.exchange.create({
    data: {
      name: 'Nasdaq',
      website: 'https://www.nasdaq.com',
      country: 'US',
    },
  });

  // return result to client
  log('exchangeCreated', exchangeCreated);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
