import { PrismaClient } from '@prisma/client';
import { log } from '../src/helper';

const prisma = new PrismaClient();

async function main() {
  const seedExchanges = await prisma.exchange.createMany({
    data: [
      {
        name: 'NYSE',
        website: 'https://www.nyse.com',
      },
      {
        name: 'Frankfurt Stock Exchange',
        website: 'https://www.boerse-frankfurt.de',
      },
    ],
  });

  log('seedExchanges', seedExchanges);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
