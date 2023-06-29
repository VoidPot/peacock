import { PrismaClient } from "@prisma/client";
import fs from "fs-extra";

const prisma = new PrismaClient();

async function backup() {
  return await Promise.all([
    await prisma.user.findMany({
      select: {
        id: true,
        mobileNumber: true,
        email: true,
        firstName: true,
        lastName: true,
        nickName: true,
        avatar: true,
        type: true,
        joinedAt: true,
        createdAt: true,
        deleted: true,
        deletedAt: true,
      },
    }),
    await prisma.group.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        amount: true,
        period: true,
        startAt: true,
        createdAt: true,
        deleted: true,
        deletedAt: true,
      },
    }),
    await prisma.transaction.findMany({
      select: {
        id: true,
        type: true,
        method: true,
        mode: true,
        dot: true,
        amount: true,
        note: true,
        from: {
          select: {
            id: true,
            nickName: true,
          },
        },
        to: {
          select: {
            id: true,
            nickName: true,
          },
        },
        createdAt: true,
        deleted: true,
        deletedAt: true,
      },
    }),
    await prisma.vendorUnlink.findMany({
      select: {
        id: true,
        vendor: {
          select: {
            nickName: true,
          },
        },
        member: {
          select: {
            nickName: true,
          },
        },
        createdAt: true,
        deleted: true,
        deletedAt: true,
      },
    }),
  ])
    .then(([user, group, transaction, vendorUnlink]) => ({
      user,
      group,
      transaction,
      vendorUnlink,
    }))
    .then((data) => fs.writeJson("./public/seed.json", data))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
      process.exit(1);
    });
}

backup()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
