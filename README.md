# Intro to Prisma

> Prisma is an open-source database toolkit for Typescript and Node.js

[Prisma Documentation](https://www.prisma.io/docs/)

**Steps**

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

# add companies model and run migration
npx prisma migrate dev --name add_companies

# run companies create script
yarn script src/companies-create.ts

# run companies exchange create script
yarn script src/companies-exchange-create.ts
```

### More Resources

- https://prisma.io/docs/concepts/overview/why-prisma
- https://prisma.io/docs/concepts/overview/prisma-in-your-stack/is-prisma-an-orm
- https://prisma.io/docs/concepts/more/comparisons
- https://prisma.io/dataguide
- https://prisma.io/dataguide/types/relational/comparing-sql-query-builders-and-orms
- https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one
- https://martinfowler.com/eaaCatalog/dataMapper.html
- https://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/
