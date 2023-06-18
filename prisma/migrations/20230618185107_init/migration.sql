-- CreateEnum
CREATE TYPE "USER_TYPE" AS ENUM ('MEMBER', 'VENDOR');

-- CreateEnum
CREATE TYPE "PERIOD" AS ENUM ('DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('TRANSFER', 'DEPOSIT', 'WITHDRAWAL');

-- CreateEnum
CREATE TYPE "TRANSACTION_METHOD" AS ENUM ('CASH', 'ACCOUNT', 'UPI', 'BANK');

-- CreateEnum
CREATE TYPE "TRANSACTION_MODE" AS ENUM ('MEMBERS_PERIODIC_DEPOSIT', 'MEMBERS_WITHDRAW', 'NEW_MEMBER_PAST_TALLY', 'INTER_CASH_TRANSFER', 'VENDOR_PERIODIC_INVEST', 'VENDOR_PERIODIC_RETURN', 'VENDOR_INVEST', 'VENDOR_RETURN', 'OTHER_EXPENDITURE', 'MEMBER_EXIT_WITHDRAW', 'MEMBER_EXIT_PROFIT_WITHDRAW');

-- CreateEnum
CREATE TYPE "PASSBOOK_ENTRY_OF" AS ENUM ('USER', 'GROUP', 'CLUB');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "email" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "nickName" TEXT NOT NULL,
    "avatar" TEXT,
    "type" "USER_TYPE" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "passbookId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extra" (
    "password" TEXT,
    "passcode" TEXT,
    "mobileVerified" BOOLEAN NOT NULL DEFAULT false,
    "isPasswordSet" BOOLEAN NOT NULL DEFAULT false,
    "isPasscodeSet" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "period" "PERIOD" NOT NULL DEFAULT 'MONTH',
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3),
    "passbookId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "type" "TRANSACTION_TYPE" NOT NULL DEFAULT 'DEPOSIT',
    "method" "TRANSACTION_METHOD" NOT NULL DEFAULT 'ACCOUNT',
    "mode" "TRANSACTION_MODE" NOT NULL DEFAULT 'MEMBERS_PERIODIC_DEPOSIT',
    "dot" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fromId" INTEGER NOT NULL,
    "toId" INTEGER NOT NULL,
    "groupId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passbook" (
    "id" SERIAL NOT NULL,
    "entryOf" "PASSBOOK_ENTRY_OF" NOT NULL DEFAULT 'CLUB',
    "termDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "deposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tallyDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "withdraw" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "profitWithdraw" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalWithdraw" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tallyBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "accountBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "termInvest" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "invest" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalInvest" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "termReturns" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "returns" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalReturns" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "profit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tallyProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "calcProfit" BOOLEAN NOT NULL DEFAULT true,
    "holdingAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "depositMonths" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "withdrawMonths" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "investMonths" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "returnsMonths" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Passbook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "User"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickName_key" ON "User"("nickName");

-- CreateIndex
CREATE UNIQUE INDEX "User_passbookId_key" ON "User"("passbookId");

-- CreateIndex
CREATE UNIQUE INDEX "Extra_userId_key" ON "Extra"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Group_slug_key" ON "Group"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Group_passbookId_key" ON "Group"("passbookId");

-- CreateIndex
CREATE UNIQUE INDEX "Link_userId_groupId_key" ON "Link"("userId", "groupId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_passbookId_fkey" FOREIGN KEY ("passbookId") REFERENCES "Passbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_passbookId_fkey" FOREIGN KEY ("passbookId") REFERENCES "Passbook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
