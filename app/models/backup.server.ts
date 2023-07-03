import fs from "fs-extra";
import type { PrismaClient } from "@prisma/client";

async function backup(prisma: PrismaClient, filePath: string) {
  return await Promise.all([
    prisma.user.findMany({
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
    prisma.group.findMany({
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
    prisma.transaction.findMany({
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
    prisma.interLink.findMany({
      select: {
        id: true,
        vendor: {
          select: {
            id: true,
            nickName: true,
          },
        },
        member: {
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
  ])
    .then(([user, group, transaction, interLink]) => ({
      user,
      group,
      transaction,
      interLink,
    }))
    .then((data) => fs.writeJson(filePath, data))
    .then(() => ({ success: true }))
    .catch((error) => {
      console.error(error);
      return { success: false };
    });
}

export default backup;
