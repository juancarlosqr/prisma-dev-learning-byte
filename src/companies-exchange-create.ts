import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  const nasdaq = await prisma.exchange.create({
    data: {
      country: 'US',
      name: 'Nasdaq',
      website: 'https://www.nasdaq.com/',
      companies: {
        createMany: {
          data: [
            {
              name: 'Amazon',
              price: 367657,
              symbol: 'AMZN',
            },
            {
              name: 'Apple',
              price: 16055,
              symbol: 'AAPL',
            },
            {
              name: 'Tesla',
              price: 113706,
              symbol: 'TSLA',
            },
          ],
        },
      },
    },
    include: {
      companies: true,
    },
  });

  // return result to client
  log('nasdaq created', nasdaq);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
