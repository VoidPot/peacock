import configContext from "~/configContext";
import { prisma } from "~/db.server";
import { commuteGroup } from "./group.server";
import { formatMoney } from "~/helpers/utils";
import type { Passbook } from "@prisma/client";

export const formatPassbook = (passbook: Passbook) => {
  return {
    ...passbook,
    termDeposit$: formatMoney(passbook.termDeposit),
  };
};

export const getClubGroupPassbook = async () => {
  return await Promise.all([
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
    prisma.group.findMany({
      include: {
        passbook: true,
      },
    }),
    prisma.user.count({ where: { deleted: false, type: "MEMBER" } }),
  ])
    .then(([club, groups, membersCount]) => {
      const termDeposit = club?.termDeposit || 0;
      const clubGroupConfig = configContext.group(membersCount).club;
      const termBalance = clubGroupConfig.totalTermAmount - termDeposit;

      return {
        club: {
          ...(club || {}),
          membersCount,
          ...clubGroupConfig,
          termBalance,
          termBalanceCurrency: formatMoney(termBalance),
          termDeposit,
          termDepositCurrency: formatMoney(termDeposit),
        },
        groups: groups
          .map((e) => commuteGroup(e, membersCount))
          .sort((a, b) => (a.slug > b.slug ? 1 : -1)),
      };
    })
    .then(({ club, groups }) => {
      return {
        club,
        groups: groups.map((group, index) => {
          const passbook = group.passbook as Passbook;
          const termDeposit = passbook?.termDeposit || 0;
          const remainingTermAmount =
            groups.slice(0, index).reduce((a, b) => {
              a = a + b.totalTermAmount;
              return a;
            }, 0) + termDeposit;

          const balance = group.totalTermAmount - remainingTermAmount;
          const termBalance = Number(balance) >= 0 ? balance : 0;

          return {
            ...group,
            amountCurrency: formatMoney(group.amount),
            termBalance,
            termBalanceCurrency: formatMoney(termBalance),
            termDeposit,
            termDepositCurrency: formatMoney(termDeposit),
          };
        }),
      };
    });
};
