import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  const updatedExchange = await prisma.exchange.update({
    where: {
      id: 1,
    },
    data: {
      country: 'US',
    },
  });
  // return result to client
  log('updatedExchange', updatedExchange);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
