import type { User } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getMembers() {
  return prisma.user.findMany({ where: { type: "MEMBER" } });
}

export async function getMembersWithSummary() {
  const members = await prisma.user.findMany({
    where: { type: "MEMBER", deleted: false },
    include: {
      summaries: {
        include: {
          group: true,
        },
      },
      links: {
        include: {
          group: true,
        },
      },
    },
  });

  return members;
}

export async function getVendors() {
  return prisma.user.findMany({ where: { type: "VENDOR" } });
}

export async function getMembersCount() {
  return prisma.user.count({ where: { type: "MEMBER" } });
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}
