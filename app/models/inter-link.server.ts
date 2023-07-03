import { prisma } from "~/db.server";
import { profitCalculator } from "./passbook-profit.server";

type InterLinkObject = {
  [key in string]: Boolean;
};

export const setInterLinkObject = async (
  vendorId: number,
  interLinkObject: InterLinkObject
) => {
  const upsets: any[] = [];

  Object.entries(interLinkObject).forEach(([key, value]) => {
    let memberId = Number(key);
    let excludeProfit = Boolean(value);

    upsets.push({
      where: {
        vendorId_memberId: {
          vendorId,
          memberId,
        },
      },
      create: {
        excludeProfit,
        vendorId,
        memberId,
      },
      update: {
        excludeProfit,
      },
    });
  });

  for (let each of upsets) {
    await prisma.interLink.upsert(each);
  }

  profitCalculator();

  return true;
};

export const getInterLinkObject = async (vendorId: Number) => {
  const data = await Promise.all([
    prisma.user.findMany({
      where: {
        type: "MEMBER",
        deleted: false,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    }),
    prisma.interLink.findMany({
      where: {
        vendorId: vendorId as any,
        deleted: false,
        excludeProfit: true,
      },
      select: {
        id: true,
        vendorId: true,
        memberId: true,
      },
    }),
  ]);

  const membersValue: InterLinkObject = {};

  const members = data[0]
    .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
    .map((each) => {
      const unlink = data[1].find((e) => e.memberId === each.id);
      membersValue[each.id] = Boolean(unlink);
      return {
        ...each,
      };
    });

  return {
    membersValue,
    members,
  };
};
