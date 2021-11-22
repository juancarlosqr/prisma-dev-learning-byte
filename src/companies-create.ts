import { PrismaClient } from '@prisma/client';
import { log } from './helper';

const prisma = new PrismaClient();

async function main() {
  const mastercard = await prisma.company.create({
    data: {
      name: 'Mastercard',
      price: 33972,
      symbol: 'MA',
      exchange: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const ford = await prisma.company.create({
    data: {
      name: 'Ford',
      price: 1939,
      symbol: 'F',
      exchange: {
        connect: {
          id: 1,
        },
      },
    },
  });

  // return result to client
  log('companies created', [mastercard, ford]);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
