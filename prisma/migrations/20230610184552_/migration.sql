/*
  Warnings:

  - The values [ONE_MEMBER,ONE_GROUP,ONE_VENDOR,MEMBER_GROUP,VENDOR_GROUP,ALL_MEMBER,ALL_VENDOR,ALL_GROUP,NON_GROUP] on the enum `PASSBOOK_ENTRY_OF` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `balance` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `expense` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `months` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `returnMonths` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `termBalance` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `termExpense` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `termInvest` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `termReturns` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `totalBalance` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `totalExpense` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `totalInvest` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `totalProfit` on the `Passbook` table. All the data in the column will be lost.
  - You are about to drop the column `totalReturns` on the `Passbook` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PASSBOOK_ENTRY_OF_new" AS ENUM ('USER', 'GROUP', 'USER_GROUP', 'CLUB');
ALTER TABLE "Passbook" ALTER COLUMN "entryOf" DROP DEFAULT;
ALTER TABLE "Passbook" ALTER COLUMN "entryOf" TYPE "PASSBOOK_ENTRY_OF_new" USING ("entryOf"::text::"PASSBOOK_ENTRY_OF_new");
ALTER TYPE "PASSBOOK_ENTRY_OF" RENAME TO "PASSBOOK_ENTRY_OF_old";
ALTER TYPE "PASSBOOK_ENTRY_OF_new" RENAME TO "PASSBOOK_ENTRY_OF";
DROP TYPE "PASSBOOK_ENTRY_OF_old";
ALTER TABLE "Passbook" ALTER COLUMN "entryOf" SET DEFAULT 'CLUB';
COMMIT;

-- AlterTable
ALTER TABLE "Passbook" DROP COLUMN "balance",
DROP COLUMN "expense",
DROP COLUMN "months",
DROP COLUMN "returnMonths",
DROP COLUMN "termBalance",
DROP COLUMN "termExpense",
DROP COLUMN "termInvest",
DROP COLUMN "termReturns",
DROP COLUMN "totalBalance",
DROP COLUMN "totalExpense",
DROP COLUMN "totalInvest",
DROP COLUMN "totalProfit",
DROP COLUMN "totalReturns",
ADD COLUMN     "accountBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "eachProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "monthsIn" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "monthsOut" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "profit" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "profitWithdraw" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "termWithdraw" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalWithdraw" DOUBLE PRECISION NOT NULL DEFAULT 0;
