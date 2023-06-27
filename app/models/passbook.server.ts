import configContext from "~/config/configContext";
import { prisma } from "~/db.server";
import { commuteGroup } from "./group.server";
import { formatMoney } from "~/helpers/utils";
import type { Group, Passbook } from "@prisma/client";

export const formatPassbook = (passbook: Passbook) => {
  const {
    termDeposit,
    deposit,
    tallyDeposit,
    totalDeposit,
    tallyBalance,
    withdraw,
    profitWithdraw,
    totalWithdraw,
    accountBalance,
    termInvest,
    invest,
    totalInvest,
    termReturns,
    returns,
    totalReturns,
    profit,
    tallyProfit,
    totalProfit,
    holdingAmount,
    depositMonths,
    withdrawMonths,
    investMonths,
    returnsMonths,
    calcProfit,
  } = passbook;

  return {
    ...passbook,
    termDeposit$: formatMoney(termDeposit),
    deposit$: formatMoney(deposit),
    tallyDeposit$: formatMoney(tallyDeposit),
    totalDeposit$: formatMoney(totalDeposit),
    tallyBalance$: formatMoney(tallyBalance),
    withdraw$: formatMoney(withdraw),
    profitWithdraw$: formatMoney(profitWithdraw),
    totalWithdraw$: formatMoney(totalWithdraw),
    accountBalance$: formatMoney(accountBalance),
    termInvest$: formatMoney(termInvest),
    invest$: formatMoney(invest),
    totalInvest$: formatMoney(totalInvest),
    termReturns$: formatMoney(termReturns),
    returns$: formatMoney(returns),
    totalReturns$: formatMoney(totalReturns),
    profit$: formatMoney(profit),
    tallyProfit$: formatMoney(tallyProfit),
    totalProfit$: formatMoney(totalProfit),
    holdingAmount$: formatMoney(holdingAmount),
    termDeposit,
    deposit,
    tallyBalance,
    tallyDeposit,
    totalDeposit,
    withdraw,
    profitWithdraw,
    totalWithdraw,
    accountBalance,
    termInvest,
    invest,
    totalInvest,
    termReturns,
    returns,
    totalReturns,
    tallyProfit,
    totalProfit,
    profit,
    holdingAmount,
    depositMonths,
    withdrawMonths,
    investMonths,
    returnsMonths,
    calcProfit,
  };
};

export const getClubPassbook = async () => {
  const club = await prisma.passbook.findFirst({
    where: {
      entryOf: "CLUB",
    },
  });
  return club ? formatPassbook(club) : club;
};

export const getClubGroupPassbook = async () => {
  return await Promise.all([
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
    prisma.group.findMany({
      where: {
        deleted: false,
      },
    }),
    prisma.user.count({ where: { deleted: false, type: "MEMBER" } }),
  ])
    .then(
      ([club, groups, membersCount]) =>
        [club, groups, membersCount] as unknown as [Passbook, Group[], number]
    )
    .then(([club, groups, membersCount]) => {
      const clubGroupConfig = configContext.group(membersCount).club;
      const termBalance = clubGroupConfig.totalTermAmount - club.termDeposit;
      const perMemberNetValue =
        (clubGroupConfig.totalTermAmount + club.totalProfit) / membersCount;
      return {
        club: {
          ...club,
          ...clubGroupConfig,
          ...formatPassbook(club),
          membersCount,
          termBalance,
          termBalance$: formatMoney(termBalance),
          perMemberNetValue,
          perMemberNetValue$: formatMoney(perMemberNetValue),
        },
        groups: groups
          .map((e) => commuteGroup(e, membersCount))
          .sort((a, b) => (a.slug > b.slug ? 1 : -1)),
      };
    })
    .then(({ club, groups }) => {
      let clubTermDeposit = Number(club.termDeposit);
      return {
        club,
        groups: groups.map((group) => {
          const groupBalance = group.totalTermAmount - clubTermDeposit;
          const termDeposit =
            groupBalance >= 0
              ? group.totalTermAmount - groupBalance
              : group.totalTermAmount;

          const termBalance = Number(groupBalance) >= 0 ? groupBalance : 0;
          clubTermDeposit = clubTermDeposit - termDeposit;

          return {
            ...group,
            amount$: formatMoney(group.amount),
            termBalance,
            termBalance$: formatMoney(termBalance),
            termDeposit,
            termDeposit$: formatMoney(termDeposit),
          };
        }),
      };
    });
};
