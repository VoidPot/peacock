import configContext from "~/configContext";
import { prisma } from "~/db.server";

export const profitCalculator = async () => {
  const payExtra = configContext.user.payExtra;
  let lateUsers = await prisma.user.findMany({
    where: {
      joinedAt: {
        gt: payExtra.joinedAfter,
      },
      type: "MEMBER",
    },
    include: {
      passbook: true,
    },
  });

  let user = await prisma.user.count({
    where: {
      type: "MEMBER",
      deleted: false,
    },
  });

  const newUsers = lateUsers.length;
  const oldUsers = user - lateUsers.length;

  const vendors = await prisma.user.findMany({
    where: {
      deleted: false,
    },
    include: {
      passbook: true,
    },
  });

  for (const each of vendors) {
    if (each.passbook && payExtra.payProfitOf.includes(each.nickName)) {
      const onePersonProfit = each.passbook.profit / oldUsers;
      const tallyProfit = onePersonProfit * newUsers;
      await prisma.passbook.update({
        where: {
          id: each.passbook.id,
        },
        data: {
          tallyProfit,
          totalProfit: each.passbook.totalProfit + tallyProfit,
        },
      });
      // console.log({
      //   id: each.passbook.id,
      //   tallyProfit,
      //   totalProfit: each.passbook.profit + tallyProfit,
      // });
      let club = await prisma.passbook.findFirst({
        where: {
          entryOf: "CLUB",
        },
      });
      if (club) {
        // console.log({
        //   isClub: true,
        //   club: "hey",
        //   id: club.id,
        //   tallyProfit: club?.tallyProfit + tallyProfit,
        //   totalProfit: club.totalProfit + tallyProfit,
        // });
        await prisma.passbook.update({
          where: {
            id: club.id,
          },
          data: {
            tallyProfit: club?.tallyProfit + tallyProfit,
            totalProfit: club.totalProfit + tallyProfit,
          },
        });
      }

      for (const user of lateUsers) {
        await prisma.passbook.update({
          where: {
            id: user.passbook.id,
          },
          data: {
            tallyBalance: user.passbook.tallyBalance + onePersonProfit,
          },
        });
      }
      lateUsers = await prisma.user.findMany({
        where: {
          joinedAt: {
            gt: payExtra.joinedAfter,
          },
          type: "MEMBER",
        },
        include: {
          passbook: true,
        },
      });
    }
  }
};
