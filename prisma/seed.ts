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

  for (const { id, vendor, member, ...interLink } of seedData.interLink) {
    sqlTransaction.push(
      prisma.interLink.create({
        data: {
          ...(interLink as any),
          vendor: {
            connect: {
              nickName: vendor.nickName,
            },
          },
          member: {
            connect: {
              nickName: member.nickName,
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

  for (const { id, from, to, ...transaction } of seedData.transaction) {
    await prisma.transaction.create({
      data: {
        ...(transaction as any),
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
