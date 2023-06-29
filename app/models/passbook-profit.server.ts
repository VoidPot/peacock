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
  const data = new Map();
  for (let vendor of vendors) {
    const unlinkMemberIds = vendor.unlinkedOfVendor.map((e) => e.memberId);
    const unlinkMembers = members.filter((e) => unlinkMemberIds.includes(e.id));
    const linkMembers = members.filter((e) => !unlinkMemberIds.includes(e.id));
    const linkedPersonShare = vendor.passbook.profit / linkMembers.length;
    const tallyProfit = unlinkMembers.length * linkedPersonShare;
    const totalProfit = vendor.passbook.profit + tallyProfit;

    const vendorId = vendor.passbook.id;
    const clubId = club?.id || undefined;

    if (!data.has(vendorId)) {
      data.set(vendorId, { tallyProfit: 0, totalProfit: 0 });
    }
    if (club && !data.has(clubId)) {
      data.set(clubId, { tallyProfit: 0, totalProfit: 0 });
    }

    const vendorMap = data.get(vendorId);
    const clubMap = data.get(clubId);

    data.set(vendorId, {
      tallyProfit: vendorMap.tallyProfit + tallyProfit,
      totalProfit: vendorMap.totalProfit + totalProfit,
    });

    data.set(clubId, {
      tallyProfit: clubMap.tallyProfit + tallyProfit,
      totalProfit: clubMap.totalProfit + totalProfit,
    });

    for (const member of unlinkMembers) {
      const memberId = member.passbook.id;
      if (!data.has(memberId)) {
        data.set(memberId, { tallyBalance: 0 });
      }
      const memberMap = data.get(memberId);

      data.set(memberId, {
        tallyBalance: memberMap.tallyBalance + linkedPersonShare,
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
