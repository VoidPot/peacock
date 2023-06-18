import configContext from "~/configContext";
import type { User } from "@prisma/client";
import { prisma } from "~/db.server";
import { formatMoney, getMonthYear } from "~/helpers/utils";

export async function getMembersPassbook() {
  const members = await prisma.user.findMany({
    where: { type: "MEMBER", deleted: false },
    include: {
      passbook: true,
    },
  });

  return members.map((member) => {
    const club = configContext.group().club;
    const holdingAmount = member.passbook.holdingAmount;
    const termDeposit = member.passbook.termDeposit;
    const deposit = member.passbook.deposit;
    const totalDeposit = member.passbook.totalDeposit;
    const balance = 0;
    const termBalance = club.totalTermAmountPerPerson - totalDeposit;
    const totalBalance = termBalance + balance;
    const profit = 0;
    const netAmount = totalDeposit + profit;
    return {
      ...member,
      joinedAtFormat: getMonthYear(member.joinedAt),
      holdingAmount,
      holdingAmount$: formatMoney(holdingAmount),
      termDeposit,
      termDeposit$: formatMoney(termDeposit),
      deposit,
      deposit$: formatMoney(deposit),
      totalDeposit,
      totalDeposit$: formatMoney(totalDeposit),
      balance,
      balance$: formatMoney(balance),
      termBalance,
      termBalance$: formatMoney(termBalance),
      totalBalance,
      totalBalance$: formatMoney(totalBalance),
      profit,
      profit$: formatMoney(profit),
      netAmount,
      netAmount$: formatMoney(netAmount),
    };
  });
}

export async function getVendorsWithSummary() {
  const vendors = await prisma.user.findMany({
    where: { type: "VENDOR", deleted: false },
    include: {
      passbook: true,
    },
  });

  return vendors.map((vendor) => {
    const club = configContext.group().club;
    const holdingAmount = vendor.passbook.holdingAmount;
    const termDeposit = vendor.passbook.termDeposit;
    const deposit = vendor.passbook.deposit;
    const totalDeposit = vendor.passbook.totalDeposit;
    const balance = 0;
    const termBalance = club.totalTermAmountPerPerson - totalDeposit;
    const totalBalance = termBalance + balance;
    const profit = 0;
    const netAmount = totalDeposit + profit;
    return {
      ...vendor,
      joinedAtFormat: getMonthYear(vendor.joinedAt),
      holdingAmount,
      holdingAmount$: formatMoney(holdingAmount),
      termDeposit,
      termDeposit$: formatMoney(termDeposit),
      deposit,
      deposit$: formatMoney(deposit),
      totalDeposit,
      totalDeposit$: formatMoney(totalDeposit),
      balance,
      balance$: formatMoney(balance),
      termBalance,
      termBalance$: formatMoney(termBalance),
      totalBalance,
      totalBalance$: formatMoney(totalBalance),
      profit,
      profit$: formatMoney(profit),
      netAmount,
      netAmount$: formatMoney(netAmount),
    };
  });
}

export async function getMembers() {
  return prisma.user.findMany({ where: { type: "MEMBER" } });
}

export async function getMemberSelectData() {
  return prisma.user.findMany({
    where: { deleted: false },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      nickName: true,
    },
  });
}

export async function getVendors() {
  return prisma.user.findMany({ where: { type: "VENDOR" } });
}

export async function getMembersCount() {
  return prisma.user.count({ where: { type: "MEMBER" } });
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}
