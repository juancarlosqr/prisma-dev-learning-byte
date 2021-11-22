-- CreateEnum
CREATE TYPE "Country" AS ENUM ('DE', 'US');

-- AlterTable
ALTER TABLE "Exchange" ADD COLUMN     "country" "Country";
