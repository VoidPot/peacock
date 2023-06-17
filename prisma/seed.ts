import type { Prisma, TRANSACTION_TYPE } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import seedData from "./seeds/seed-data";
import { passbookMiddleware } from "~/models/passbook-entry.server";
import { addPassbookEntry } from "./seeds/passbook-entry";

const prisma = new PrismaClient();

prisma.$use(async (param, next) => {
  const result = await next(param);
  await passbookMiddleware(param, result);
  return result;
});

const userSeedMap = () =>
  seedData.users.map(
    (each) =>
      ({
        firstName: each.name.split(" ")[0],
        lastName: each.name.split(" ")[1] || "",
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
        each.transactionType === "debit" ? "DEPOSIT" : "WITHDRAWAL";

      if (each.method === "withdraw") {
        mode = "MEMBERS_WITHDRAW";
      } else if (each.method === "transfer") {
        mode = "INTER_CASH_TRANSFER";
        type = "TRANSFER";
      } else if (each.method === "expenditure") {
        mode = "OTHER_EXPENDITURE";
      } else if (each.method === "invest" && to.nickName === "chit_20") {
        mode = "VENDOR_PERIODIC_INVEST";
      } else if (
        each.method === "return_on_invest" &&
        from.nickName === "chit_20"
      ) {
        mode = "VENDOR_PERIODIC_RETURN";
      } else if (each.method === "invest") {
        mode = "VENDOR_INVEST";
      } else if (each.method === "return_on_invest") {
        mode = "VENDOR_RETURN";
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
  await prisma.passbook.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.link.deleteMany();
  await prisma.group.deleteMany();
  await prisma.user.deleteMany();

  await prisma.passbook.create({
    data: {
      entryOf: "CLUB",
    },
  });
  const userSeed = userSeedMap();
  await Promise.all(
    userSeed.map(async (user) => {
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
    })
  );

  const users = await prisma.user.findMany();

  const userLinkIds = users.map((each) => ({ userId: each.id }));

  await Promise.all(
    seedData.group.map(async (each) => {
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
    })
  );

  const alphaGroup = await prisma.group.findUnique({
    where: {
      slug: "alpha",
    },
  });

  const groups = await prisma.group.findMany();
  const passbookEntries = addPassbookEntry(users, groups);
  await prisma.passbook.createMany({
    data: passbookEntries,
    skipDuplicates: true,
  });

  const transactions = transactionSeedMap(users, alphaGroup);

  for (const each of transactions) {
    await prisma.transaction.create({
      data: { ...each } as any,
    });
  }
  // await Promise.all(
  //   transactions.map(async (each: any) => {
  //     return await prisma.transaction.create({
  //       data: each,
  //     });
  //   })
  // );

  // await generateSummary();
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
