import { PrismaClient } from "@prisma/client";
import seedData from "../public/seed.json";
import { usePassbookMiddleware } from "~/models/passbook-entry.server";

const prisma = new PrismaClient();

prisma.$use(usePassbookMiddleware);
async function seed() {
  await prisma.transaction.deleteMany();
  await prisma.link.deleteMany();
  await prisma.group.deleteMany();
  await prisma.user.deleteMany();
  await prisma.passbook.deleteMany();
  await prisma.passbook.create({
    data: {
      entryOf: "CLUB",
    },
  });

  for (const { id, nickName, ...user } of seedData.user) {
    await prisma.user.create({
      data: {
        ...(user as any),
        nickName,
        passbook: {
          create: {
            entryOf: "USER",
          },
        },
      },
    });
  }

  for (const { id, ...group } of seedData.group) {
    await prisma.group.create({
      data: {
        ...(group as any),
      },
    });
  }

  for (const { id, from, to, ...transaction } of seedData.transaction) {
    await prisma.transaction.create({
      data: {
        ...(transaction as any),
        from: {
          connect: {
            nickName: from.nickName,
          },
        },
        to: {
          connect: {
            nickName: to.nickName,
          },
        },
      },
    });
  }

  return;
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
