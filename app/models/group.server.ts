import type { Group } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getGroups() {
  return prisma.group.findMany({
    include: {
      links: {
        include: {
          user: true,
        },
      },
    },
  });
}

export async function getGroupById(id: Group["id"]) {
  return prisma.group.findUnique({ where: { id } });
}
