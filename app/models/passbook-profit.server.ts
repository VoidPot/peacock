import { prisma } from "~/db.server";

export const profitCalculator = async () => {
  const [vendors, members, club] = await Promise.all([
    prisma.user.findMany({
      where: {
        type: "VENDOR",
        deleted: false,
      },
      include: {
        unlinkedOfVendor: true,
        passbook: true,
      },
    }),
    prisma.user.findMany({
      where: {
        type: "MEMBER",
        deleted: false,
      },
      include: {
        passbook: true,
      },
    }),
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
  ]);
  let profitWithdraw = club?.profitWithdraw || 0;

  const data = new Map();
  const clubId = club?.id || undefined;

  if (club && !data.has(clubId)) {
    data.set(clubId, { tallyProfit: 0 });
  }

  for (let member of members) {
    const memberId = member.passbook.id;
    if (!data.has(memberId)) {
      data.set(memberId, { tallyBalance: 0, profit: 0 });
    }
  }

  for (let vendor of vendors) {
    const unlinkMemberIds = vendor.unlinkedOfVendor.map((e) => e.memberId);
    const unlinkMembers = members.filter((e) => unlinkMemberIds.includes(e.id));
    const linkMembers = members.filter((e) => !unlinkMemberIds.includes(e.id));

    const vendorProfit = vendor.passbook.profit;

    const shareSubProfit = vendorProfit - profitWithdraw;
    profitWithdraw = 0;

    const perPersonProfit = shareSubProfit / linkMembers.length;

    const tallyProfit = perPersonProfit * unlinkMembers.length;

    const clubMap = data.get(clubId);

    data.set(clubId, {
      ...clubMap,
      tallyProfit: clubMap.tallyProfit + tallyProfit,
    });

    for (const member of unlinkMembers) {
      const memberId = member.passbook.id;
      const memberMap = data.get(memberId);

      data.set(memberId, {
        ...memberMap,
        tallyBalance: memberMap.tallyBalance + perPersonProfit,
      });
    }

    for (const member of linkMembers) {
      const memberId = member.passbook.id;
      const memberMap = data.get(memberId);

      data.set(memberId, {
        ...memberMap,
        profit: memberMap.profit + perPersonProfit,
      });
    }
  }

  const array = Array.from(data, ([id, data]) => ({
    where: {
      id,
    },
    data,
  }));

  for (let item of array) {
    await prisma.passbook.update(item);
  }

  return;
};
