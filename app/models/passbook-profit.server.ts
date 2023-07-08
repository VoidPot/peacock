import { prisma } from "~/db.server";

export const profitCalculator = () => {
  return Promise.all([
    prisma.user.findMany({
      where: {
        type: "VENDOR",
        deleted: false,
      },
      include: {
        vendorInterLinks: {
          where: {
            includeProfit: true,
          },
        },
        passbook: true,
      },
    }),
    prisma.user.findMany({
      where: {
        type: "MEMBER",
        deleted: false,
      },
      select: {
        id: true,
        nickName: true,
        passbook: true,
      },
    }),
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
  ])
    .then(([vendors, members, club]) => {
      const passbooks: Map<
        number,
        {
          tallyBalance: number;
          profit: number;
        }
      > = new Map(
        members.map((e) => [e.passbook.id, { tallyBalance: 0, profit: 0 }])
      );

      return {
        passbooks,
        vendors,
        members: members.map((e) => ({ ...e.passbook, memberId: e.id })),
        club,
        clubTallyProfit: 0,
      };
    })
    .then(({ passbooks, vendors, members, club, clubTallyProfit }) => {
      for (let { vendorInterLinks, passbook, ...vendor } of vendors) {
        const excludeProfitIds = vendorInterLinks.map((e) => e.memberId);
        const unlinkMembers = members.filter((e) =>
          excludeProfitIds.includes(e.memberId)
        );
        const linkMembers = members.filter(
          (e) => !excludeProfitIds.includes(e.memberId)
        );

        const { profit } = passbook;

        const eachMemberProfit = Math.round(profit / linkMembers.length);

        const totalTallyProfit = Math.round(
          eachMemberProfit * unlinkMembers.length
        );

        clubTallyProfit = clubTallyProfit + totalTallyProfit;

        for (const { id } of unlinkMembers) {
          const memberMap = passbooks.get(id);
          passbooks.set(id, {
            profit: memberMap?.profit || 0,
            tallyBalance: (memberMap?.tallyBalance || 0) + eachMemberProfit,
          });
        }

        for (const { id } of linkMembers) {
          const memberMap = passbooks.get(id);
          passbooks.set(id, {
            tallyBalance: memberMap?.tallyBalance || 0,
            profit: (memberMap?.profit || 0) + eachMemberProfit,
          });
        }
      }
      return { passbooks, club, clubTallyProfit };
    })
    .then(({ passbooks, club, clubTallyProfit }) => ({
      club,
      clubTallyProfit,
      passbooks: Array.from(passbooks, ([id, data]) => ({ id, data })),
    }))
    .then(({ club, passbooks, clubTallyProfit }) => {
      const takenProfit = club?.profitWithdraw || 0;
      const reduceEachMember = takenProfit / passbooks.length;
      return {
        clubTallyProfit,
        club,
        passbooks: passbooks.map((each) => {
          let balance = reduceEachMember;
          let tallyBalance = each.data.tallyBalance;
          let profit = each.data.profit;

          if (tallyBalance > 0) {
            const remain = tallyBalance - balance;
            tallyBalance = remain >= 0 ? remain : 0;

            if (remain < 0) {
              balance = balance - tallyBalance;
            }

            if (each.data.tallyBalance < 0) {
              each.data.tallyBalance = 0;
            }
          }

          if (balance > 0) {
            profit = profit - balance;
          }
          console.log({
            tallyBalance,
            balance,
            profit,
            reduceEachMember,
            takenProfit,
            data: each.data,
            clubTallyProfit,
            clubProfit: club?.profit,
          });
          return {
            ...each,
            data: {
              ...each.data,
              tallyBalance,
              profit,
            },
          };
        }),
      };
    })
    .then(({ club, passbooks, clubTallyProfit }) => ({
      club,
      clubTallyProfit,
      passbooks: passbooks.map((each) => ({
        where: { id: each.id },
        data: each.data,
      })),
    }))
    .then(async ({ club, passbooks, clubTallyProfit }) => {
      for (let item of passbooks) {
        await prisma.passbook.update(item);
      }
      if (club?.id) {
        await prisma.passbook.update({
          where: {
            id: club?.id,
          },
          data: {
            tallyProfit: clubTallyProfit,
          },
        });
      }
      return;
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
};
