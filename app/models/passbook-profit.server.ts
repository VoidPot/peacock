import { prisma } from "~/db.server";

export const profitCalculator = () => {
  return Promise.all([
    prisma.user.findMany({
      where: {
        type: "VENDOR",
        deleted: false,
      },
      select: {
        vendorInterLinks: {
          select: {
            id: true,
            memberId: true,
            includeProfit: true,
            member: {
              select: {
                deleted: true,
                passbook: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },
        passbook: {
          select: {
            id: true,
            profit: true,
          },
        },
      },
    }),
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
  ])
    .then(([vendors, club]) => {
      const passbooks: Map<
        number,
        {
          tallyBalance: number;
          profit: number;
        }
      > = new Map();
      let totalTallyProfit = 0;

      for (let { vendorInterLinks, passbook } of vendors) {
        const linkedMembers = vendorInterLinks
          .filter((e) => e.includeProfit)
          .map((e) => ({
            memberId: e.memberId,
            passbookId: e.member.passbook.id,
          }));

        const unlinkedMembers = vendorInterLinks
          .filter((e) => !e.includeProfit && !e.member.deleted)
          .map((e) => ({
            memberId: e.memberId,
            passbookId: e.member.passbook.id,
          }));

        const memberProfit =
          Math.round(passbook.profit / linkedMembers.length) || 0;

        const tallyProfit =
          Math.round(memberProfit * unlinkedMembers.length) || 0;

        totalTallyProfit = totalTallyProfit + tallyProfit;

        for (let { member, includeProfit } of vendorInterLinks) {
          const passId = member.passbook.id;
          if (!passbooks.has(passId)) {
            passbooks.set(passId, {
              tallyBalance: 0,
              profit: 0,
            });
          }
          const memberMap = passbooks.get(passId);

          if (member.deleted) {
            if (includeProfit) {
              passbooks.set(passId, {
                tallyBalance: memberMap?.tallyBalance || 0,
                profit: (memberMap?.profit || 0) + memberProfit,
              });
            }
          } else {
            if (includeProfit) {
              passbooks.set(passId, {
                tallyBalance: memberMap?.tallyBalance || 0,
                profit: (memberMap?.profit || 0) + memberProfit,
              });
            } else {
              passbooks.set(passId, {
                profit: memberMap?.profit || 0,
                tallyBalance: (memberMap?.tallyBalance || 0) + memberProfit,
              });
            }
          }
        }
      }
      return { passbooks, club, totalTallyProfit };
    })
    .then(({ passbooks, club, totalTallyProfit }) => ({
      club,
      totalTallyProfit,
      passbooks: Array.from(passbooks, ([id, data]) => ({
        where: { id },
        data,
      })),
    }))
    .then(async ({ club, passbooks, totalTallyProfit }) => {
      for (let item of passbooks) {
        await prisma.passbook.update(item);
      }
      if (club?.id) {
        await prisma.passbook.update({
          where: {
            id: club?.id,
          },
          data: {
            tallyProfit: totalTallyProfit,
          },
        });
      }
      return;
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
};
