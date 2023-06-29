import { PrismaClient } from "@prisma/client";
import fs from "fs-extra";

const prisma = new PrismaClient();

async function backup() {
  return await Promise.all([
    await prisma.user.findMany({}),
    await prisma.group.findMany({}),
    await prisma.transaction.findMany({}),
  ])
    .then(([user, group, transaction]) => ({ user, group, transaction }))
    .then((data) => fs.writeJson("./prisma/seeds.json", data))
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
