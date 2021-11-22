import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  const deletedExchange = await prisma.exchange.delete({
    where: {
      id: 3,
    },
  });

  // return result to client
  log('deletedExchange', deletedExchange);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
