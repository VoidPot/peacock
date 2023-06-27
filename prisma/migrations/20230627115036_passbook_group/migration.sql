/*
  Warnings:

  - The values [GROUP] on the enum `PASSBOOK_ENTRY_OF` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `passbookId` on the `Group` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PASSBOOK_ENTRY_OF_new" AS ENUM ('USER', 'CLUB');
ALTER TABLE "Passbook" ALTER COLUMN "entryOf" DROP DEFAULT;
ALTER TABLE "Passbook" ALTER COLUMN "entryOf" TYPE "PASSBOOK_ENTRY_OF_new" USING ("entryOf"::text::"PASSBOOK_ENTRY_OF_new");
ALTER TYPE "PASSBOOK_ENTRY_OF" RENAME TO "PASSBOOK_ENTRY_OF_old";
ALTER TYPE "PASSBOOK_ENTRY_OF_new" RENAME TO "PASSBOOK_ENTRY_OF";
DROP TYPE "PASSBOOK_ENTRY_OF_old";
ALTER TABLE "Passbook" ALTER COLUMN "entryOf" SET DEFAULT 'CLUB';
COMMIT;

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_passbookId_fkey";

-- DropIndex
DROP INDEX "Group_passbookId_key";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "passbookId";
