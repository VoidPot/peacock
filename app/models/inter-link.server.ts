import { prisma } from "~/db.server";

type InterLinkObject = {
  [key in string]: Boolean;
};

export const setInterLinkObject = async (
  vendorId: number,
  interLinkObject: InterLinkObject
) => {
  const ids: number[] = [];
  const creates: any[] = [];

  Object.entries(interLinkObject).map(([key, value]) => {
    ids.push(Number(key));

    if (value) {
      creates.push({
        vendorId: Number(vendorId),
        memberId: Number(key),
      });
    }
  });
  await prisma.interLink.deleteMany({
    where: { vendorId },
  });
  await prisma.interLink.createMany({
    data: creates,
  });

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
      },
      select: {
        id: true,
        vendorId: true,
        memberId: true,
      },
    }),
  ]);

  const membersValue: InterLinkObject = {};

  const members = data[0].map((each) => {
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
