import { PrismaClient } from "@prisma/client";
import seedData from "../public/seed.json";
import { usePassbookMiddleware } from "~/models/passbook-entry.server";

const prisma = new PrismaClient();

const tables = ["Transaction", "VendorUnlink", "Group", "User", "Passbook"];

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

  const member = seedData.user
    .filter((e) => e.type === "MEMBER")
    .sort((a, b) => (a.nickName < b.nickName ? 1 : -1))
    .sort((a, b) => (new Date(a.joinedAt) > new Date(b.joinedAt) ? 1 : -1));

  const vendor = seedData.user
    .filter((e) => e.type === "VENDOR")
    .sort((a, b) => (a.nickName < b.nickName ? 1 : -1));

  for (const { id, nickName, ...user } of [...member, ...vendor]) {
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

  for (const { id, vendor, member, ...vendorUnlink } of seedData.vendorUnlink) {
    sqlTransaction.push(
      prisma.vendorUnlink.create({
        data: {
          ...(vendorUnlink as any),
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
