-- CreateEnum
CREATE TYPE "PASSBOOK_ENTRY_OF" AS ENUM ('ONE_MEMBER', 'ONE_GROUP', 'ONE_VENDOR', 'MEMBER_GROUP', 'VENDOR_GROUP', 'ALL_MEMBER', 'ALL_VENDOR', 'ALL_GROUP', 'NON_GROUP', 'CLUB');

-- CreateTable
CREATE TABLE "Passbook" (
    "id" SERIAL NOT NULL,
    "entryOf" "PASSBOOK_ENTRY_OF" NOT NULL DEFAULT 'CLUB',
    "termDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "deposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "withdraw" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "termBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "holding" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "return" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "expense" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "userId" INTEGER,
    "groupId" INTEGER,

    CONSTRAINT "Passbook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Passbook" ADD CONSTRAINT "Passbook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passbook" ADD CONSTRAINT "Passbook_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
