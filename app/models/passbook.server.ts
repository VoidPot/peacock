import configContext from "~/configContext";
import { prisma } from "~/db.server";
import { commuteGroup } from "./group.server";
import { formatMoney } from "~/helpers/utils";

export const getClubGroupPassbook = async () => {
  return await Promise.all([
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
    prisma.group.findMany({
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
        passbook: {
          where: {
            entryOf: "GROUP",
          },
        },
        links: {
          select: {
            id: true,
          },
        },
      },
    }),
    prisma.user.count({ where: { deleted: false, type: "MEMBER" } }),
  ])
    .then(([club, groups, membersCount]) => {
      const termDeposit = club?.termDeposit || 0;
      const clubGroupConfig = configContext.group(membersCount).club;
      const totalTermBalance = clubGroupConfig.totalTermAmount - termDeposit;
      return {
        club: {
          ...(club || {}),
          membersCount,
          ...clubGroupConfig,
          totalTermBalance,
          totalTermBalanceCurrency: formatMoney(totalTermBalance),
        },
        groups: groups
          .map(commuteGroup)
          .sort((a, b) => (a.slug > b.slug ? 1 : -1)),
      };
    })
    .then(({ club, groups }) => {
      return {
        club,
        groups: groups.map((group, index) => {
          const passbook = (group?.passbook || [])[0];
          const termDeposit = passbook?.termDeposit || 0;
          const remainingTermAmount =
            groups.slice(0, index).reduce((a, b) => {
              a = a + b.totalTermAmount;
              return a;
            }, 0) + termDeposit;

          const balance = group.totalTermAmount - remainingTermAmount;
          const totalTermBalance = Number(balance) >= 0 ? balance : 0;

          return {
            ...group,
            totalTermBalance,
            totalTermBalanceCurrency: formatMoney(totalTermBalance),
            termDeposit,
            termDepositCurrency: formatMoney(termDeposit),
          };
        }),
      };
    });
};
