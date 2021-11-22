import { log } from './helper';

async function main() {
  // ... you will write your Prisma Client queries here
  log('Prisma Client!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {});
