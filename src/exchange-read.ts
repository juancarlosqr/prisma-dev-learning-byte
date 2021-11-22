import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  const allExchanges = await prisma.exchange.findMany();
  // return result to client
  log('allExchanges', allExchanges);

  const firstExchange = await prisma.exchange.findUnique({
    where: {
      id: 1,
    },
  });
  // return result to client
  log('firstExchange', firstExchange);

  const firstExchangeUs = await prisma.exchange.findFirst({
    where: {
      country: 'US',
    },
    select: { website: true },
  });
  // return result to client
  log('firstExchangeUs', firstExchangeUs);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
