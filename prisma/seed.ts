import type { Prisma, TRANSACTION_TYPE } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import seedData from "./seeds/seed-data";
import { usePassbookMiddleware } from "~/models/passbook-entry.server";
import { profitCalculator } from "./seeds/seed-profit";

const prisma = new PrismaClient();

prisma.$use(usePassbookMiddleware);

const userSeedMap = () =>
  seedData.users.map(
    (each) =>
      ({
        firstName: each.role === "member" ? each.name.split(" ")[0] : each.name,
        lastName: each.role === "member" ? each.name.split(" ")[1] || "" : "",
        nickName: each.value,
        mobileNumber: each.phone || each.value,
        type: each.role === "member" ? "MEMBER" : "VENDOR",
        joinedAt: new Date(each.joined || new Date()),
        avatar: each.image,
      } as any)
  );

const getUser = (users: any[], oldId: string) => {
  const formOld = seedData.users.find((each) => each._id === oldId);
  const fromUser = users.find((each) => each.nickName === formOld?.value);
  return fromUser;
};

const transactionSeedMap = (users: any[], group: any) => {
  const transactions: Prisma.Enumerable<Prisma.TransactionCreateInput>[] =
    seedData.transactions.map((each) => {
      const from = getUser(users, each.from);
      const to = getUser(users, each.to);

      let mode: any = "MEMBERS_PERIODIC_DEPOSIT";
      let type: TRANSACTION_TYPE =
        each.transactionType === "credit" ? "DEPOSIT" : "WITHDRAWAL";

      if (each.method === "withdraw") {
        mode = "MEMBERS_WITHDRAW";
      } else if (each.method === "deposit") {
        mode = "MEMBERS_PERIODIC_DEPOSIT";
        type = "DEPOSIT";
      } else if (each.method === "transfer") {
        mode = "INTER_CASH_TRANSFER";
        type = "TRANSFER";
      } else if (each.method === "expenditure") {
        mode = "OTHER_EXPENDITURE";
      } else if (each.method === "invest" && to.nickName === "chit_20l_2021") {
        mode = "VENDOR_PERIODIC_INVEST";
        // type = "WITHDRAWAL";
      } else if (
        each.method === "return_on_invest" &&
        from.nickName === "chit_20l_2021"
      ) {
        mode = "VENDOR_RETURN";
        // type = "DEPOSIT";
      } else if (each.method === "invest") {
        mode = "VENDOR_INVEST";
        // type = "WITHDRAWAL";
      } else if (each.method === "return_on_invest") {
        mode = "VENDOR_RETURN";
        // type = "DEPOSIT";
      }

      return {
        type,
        method: "ACCOUNT",
        mode,
        dot: new Date(each.transactionOn),
        amount: each.amount,
        from: {
          connect: {
            id: from.id,
          },
        },
        to: {
          connect: {
            id: to.id,
          },
        },
        group: {
          connect: {
            id: group.id,
          },
        },
      };
    });
  return transactions;
};
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
  const userSeed = userSeedMap();

  for (const user of userSeed) {
    await prisma.user.create({
      data: {
        ...user,
        passbook: {
          create: {
            entryOf: "USER",
          },
        },
      },
    });
  }

  const users = await prisma.user.findMany();

  const userLinkIds = users.map((each) => ({ userId: each.id }));

  for (const each of seedData.group) {
    await prisma.group.create({
      data: {
        ...each,
        passbook: {
          create: {
            entryOf: "GROUP",
          },
        },
        links: {
          createMany: {
            data: userLinkIds,
            skipDuplicates: true,
          },
        },
      },
    });
  }

  const alphaGroup = await prisma.group.findUnique({
    where: {
      slug: "alpha",
    },
  });

  const transactions = transactionSeedMap(users, alphaGroup);

  for (const each of transactions) {
    await prisma.transaction.create({
      data: { ...each } as any,
    });
  }

  await profitCalculator();
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
