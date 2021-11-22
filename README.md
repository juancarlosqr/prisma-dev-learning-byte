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
```
