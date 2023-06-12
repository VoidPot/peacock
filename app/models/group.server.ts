import type { Group } from "@prisma/client";
import { prisma } from "~/db.server";
import { computeGroupTiming } from "~/helpers/utils";

export const commuteGroup = (group: Group | null) => {
  if (!group) {
    return group;
  }
  return {
    ...group,
    ...computeGroupTiming(group),
  };
};

export async function getGroups() {
  return await prisma.group
    .findMany({
      include: {
        links: {
          include: {
            user: true,
          },
        },
      },
    })
    .then((groups) => groups.map(commuteGroup));
}

export async function getGroupById(id: Group["id"]) {
  return commuteGroup(await prisma.group.findUnique({ where: { id } }));
}
