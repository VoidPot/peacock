import type { Group, Passbook } from "@prisma/client";
import type { GroupSlugs } from "~/configContext";
import configContext from "~/configContext";
import { prisma } from "~/db.server";

export const commuteGroup = (
  group:
    | Group & {
        links?: {
          id: number;
        }[];
        passbook?: Passbook[];
      }
) => {
  if (!group) {
    return group;
  }
  return {
    ...group,
    ...configContext.group(group?.links?.length || 0)[group.slug as GroupSlugs],
  };
};

export async function getGroups() {
  return await prisma.group
    .findMany({
      where: {
        links: {
          every: {
            user: {
              deleted: false,
            },
          },
        },
      },
      include: {
        links: {
          select: {
            id: true,
          },
        },
      },
    })
    .then((groups) => groups.map(commuteGroup));
}

export async function getGroupById(id: Group["id"]) {
  const group = await prisma.group.findUnique({ where: { id } });
  return group ? commuteGroup(group) : group;
}
