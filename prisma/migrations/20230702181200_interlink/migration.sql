/*
  Warnings:

  - You are about to drop the `VendorUnlink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VendorUnlink" DROP CONSTRAINT "VendorUnlink_memberId_fkey";

-- DropForeignKey
ALTER TABLE "VendorUnlink" DROP CONSTRAINT "VendorUnlink_vendorId_fkey";

-- DropTable
DROP TABLE "VendorUnlink";

-- CreateTable
CREATE TABLE "InterLink" (
    "id" SERIAL NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "connected" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "InterLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InterLink_vendorId_memberId_key" ON "InterLink"("vendorId", "memberId");

-- AddForeignKey
ALTER TABLE "InterLink" ADD CONSTRAINT "InterLink_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterLink" ADD CONSTRAINT "InterLink_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
