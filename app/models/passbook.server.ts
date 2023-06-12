import { Group, type Passbook, type Transaction } from "@prisma/client";
import type { Passbook_Settings_Keys } from "~/configContext";
import configContext from "~/configContext";
import { prisma } from "~/db.server";
import { commuteGroup } from "./group.server";

const commutePassbook = (
  passbook: Passbook | null,
  totalTeamAmount: number
) => {
  return {
    ...passbook,
    totalTeamAmount,
    balance: totalTeamAmount - (passbook?.termDeposit || 0),
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
      where: {
        deleted: false,
      },
      include: {
        passbook: {
          where: {
            entryOf: "GROUP",
          },
        },
      },
    }),
    prisma.user.count({ where: { deleted: false, type: "MEMBER" } }),
  ])
    .then(([club, groups, noOfMembers]) => {
      return {
        club,
        noOfMembers,
        groups: groups.map((each) => {
          const computer = commuteGroup(each);
          const totalTeamAmount =
            each.amount * noOfMembers * (computer?.currentMonthsDiff || 0);
          const passbook = commutePassbook(each.passbook[0], totalTeamAmount);

          return { ...each, ...computer, passbook };
        }),
      };
    })
    .then(({ club, groups, noOfMembers }) => {
      let totalTeamAmount = 0;
      groups.forEach((each) => {
        totalTeamAmount = totalTeamAmount + each.passbook.totalTeamAmount;
      });
      return {
        club: {
          ...club,
          ...commutePassbook(club, totalTeamAmount),
          noOfMembers,
        },
        groups: groups.sort((a, b) => (a.slug > b.slug ? 1 : -1)),
      };
    });
};
