# Intro to Prisma

```sh
# add typescript dependencies
yarn add -D typescript ts-node @types/node

# add prisma dependency
yarn add -D prisma

# initialise prisma
npx prisma init

# edit .env
# add exchange model

# run first migration
npx prisma migrate dev

# run country migration
npx prisma migrate dev --name add_country

# run read script
yarn script src/exchange-read.ts

# add seed script and run it
npx prisma db seed

# run read script again
yarn script src/exchange-read.ts

# run update script
yarn script src/exchange-update.ts

# run create script
yarn script src/exchange-create.ts

# run delete script
yarn script src/exchange-delete.ts
```
