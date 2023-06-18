import configContext from "~/configContext";
import type { User } from "@prisma/client";
import { prisma } from "~/db.server";
import { formatMoney, getMonthYear } from "~/helpers/utils";
import { formatPassbook } from "./passbook.server";

export async function getMembersPassbook() {
  const members = await prisma.user.findMany({
    where: { type: "MEMBER", deleted: false },
    include: {
      passbook: true,
    },
  });

  return members.map((member) => {
    const club = configContext.group(members.length).club;
    const passbook = formatPassbook(member.passbook);
    const balance = 0;
    const termBalance = club.totalTermAmountPerPerson - passbook.termDeposit;
    const totalBalance = termBalance + balance + passbook.tallyBalance;
    const profit = 0;
    const netAmount = passbook.totalDeposit + profit;
    return {
      ...member,
      ...passbook,
      joinedAt$: getMonthYear(member.joinedAt),
      balance,
      balance$: formatMoney(balance),
      termBalance,
      termBalance$: formatMoney(termBalance),
      totalBalance,
      totalBalance$: formatMoney(totalBalance),
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
    const passbook = formatPassbook(vendor.passbook);
    const balance = 0;
    const termBalance = club.totalTermAmountPerPerson - passbook.totalDeposit;
    const totalBalance = termBalance + balance + passbook.tallyBalance;
    const profit = 0;
    const netAmount = passbook.totalDeposit + profit;
    return {
      ...vendor,
      ...passbook,
      joinedAt$: getMonthYear(vendor.joinedAt),
      balance,
      balance$: formatMoney(balance),
      termBalance,
      termBalance$: formatMoney(termBalance),
      totalBalance,
      totalBalance$: formatMoney(totalBalance),
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
