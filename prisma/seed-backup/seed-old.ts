import { PrismaClient } from "@prisma/client";
import seedData from "../public/peacock_backup.json";
import { usePassbookMiddleware } from "~/models/passbook-entry.server";

const prisma = new PrismaClient();

const tables = ["Transaction", "InterLink", "Group", "User", "Passbook"];

prisma.$use(usePassbookMiddleware);
async function seed() {
  const sqlTransaction: any[] = [
    ...tables.map((tableName) =>
      prisma.$executeRawUnsafe(
        `TRUNCATE "${tableName}" RESTART IDENTITY CASCADE;`
      )
    ),
    prisma.passbook.create({
      data: {
        entryOf: "CLUB",
      },
    }),
  ];

  for (const { id, nickName, ...user } of seedData.user) {
    sqlTransaction.push(
      prisma.user.create({
        data: {
          ...(user as any),
          nickName,
          passbook: {
            create: {
              entryOf: "USER",
            },
          },
        },
      })
    );
  }

  for (const { id, ...group } of seedData.group) {
    sqlTransaction.push(
      prisma.group.create({
        data: {
          ...(group as any),
        },
      })
    );
  }

  // for (const { id, from, to, ...transaction } of seedData.transaction) {
  //   sqlTransaction.push(
  //     prisma.transaction.create({
  //       data: {
  //         ...(transaction as any),
  //         from: {
  //           connect: {
  //             nickName: from.nickName,
  //           },
  //         },
  //         to: {
  //           connect: {
  //             nickName: to.nickName,
  //           },
  //         },
  //       },
  //     })
  //   );
  // }

  await prisma.$transaction(sqlTransaction);

  const userMap = new Map();

  const dbUsers = await prisma.user.findMany({
    select: {
      id: true,
      nickName: true,
      type: true,
      deleted: true,
    },
  });
  dbUsers.forEach((user) => {
    const localUser = seedData.user.find((le) => le.nickName === user.nickName);
    if (localUser) {
      userMap.set(localUser.id, user.id);
    }
  });

  for (const { id, from, to, ...transaction } of seedData.transaction) {
    await prisma.transaction.create({
      data: {
        ...(transaction as any),
        from: {
          connect: {
            id: userMap.get(from.id),
          },
        },
        to: {
          connect: {
            id: userMap.get(to.id),
          },
        },
      },
    });
  }

  const linterLinks: any[] = [];

  for (const { vendor, member, includeProfit } of seedData.interLink) {
    linterLinks.push({
      vendorId: vendor.id,
      memberId: member.id,
      includeProfit,
    });
  }

  // const vendors = dbUsers.filter((e) => e.type === "VENDOR");
  // const members = dbUsers.filter((e) => e.type === "MEMBER");

  // for (const member of members) {
  //   for (const vendor of vendors) {
  //     linterLinks.push({
  //       vendorId: vendor.id,
  //       memberId: member.id,
  //       includeProfit: !(member.deleted || vendor.deleted),
  //     });
  //   }
  // }

  await prisma.interLink.createMany({
    data: linterLinks,
    skipDuplicates: true,
  });

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
