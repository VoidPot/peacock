import configContext from "~/config/configContext";
import type { User } from "@prisma/client";
import { prisma } from "~/db.server";
import { formatMoney, getMonthYear } from "~/helpers/utils";
import { formatPassbook, getClubPassbook } from "./passbook.server";

export async function getMembersPassbook() {
  const members = await prisma.user.findMany({
    where: { type: "MEMBER", deleted: false },
    include: {
      passbook: true,
    },
  });
  const clubPassbook = await getClubPassbook();
  const perMemberProfit = (clubPassbook?.totalProfit || 0) / members.length;
  return members
    .map((member) => {
      const club = configContext.group(members.length).club;
      const passbook = formatPassbook(member.passbook);
      const balance = 0;
      const termBalance = club.totalTermAmountPerPerson - passbook.termDeposit;
      const totalBalance = termBalance + balance + passbook.tallyBalance;
      const netAmount =
        passbook.totalDeposit + perMemberProfit - passbook.tallyBalance;
      const actualMemberProfit = Number(
        perMemberProfit - passbook.tallyBalance
      ).toFixed(2);
      return {
        ...member,
        ...passbook,
        id: member.id,
        joinedAt$: getMonthYear(member.joinedAt),
        balance,
        balance$: formatMoney(balance),
        termBalance,
        termBalance$: formatMoney(termBalance),
        totalBalance,
        totalBalance$: formatMoney(totalBalance),
        perMemberProfit: Number(actualMemberProfit),
        perMemberProfit$: formatMoney(actualMemberProfit),
        netAmount,
        netAmount$: formatMoney(netAmount),
      };
    })
    .sort((a, b) => (a.nickName > b.nickName ? 1 : -1));
}

export async function getVendorsWithSummary() {
  const vendors = await prisma.user.findMany({
    where: { type: "VENDOR", deleted: false },
    include: {
      passbook: true,
    },
  });

  return vendors
    .map((vendor) => {
      const passbook = formatPassbook(vendor.passbook);
      return {
        ...vendor,
        ...passbook,
        id: vendor.id,
        joinedAt$: getMonthYear(vendor.joinedAt),
      };
    })
    .sort((a, b) => (a.nickName > b.nickName ? 1 : -1));
}

export async function getMembers() {
  return prisma.user.findMany({ where: { type: "MEMBER" } });
}

export async function getUserSelect() {
  const users = prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      nickName: true,
      type: true,
    },
  });
  const members = (await users)
    .filter((e) => e.type === "MEMBER")
    .sort((a, b) => (a.nickName > b.nickName ? 1 : -1));
  const vendor = (await users)
    .filter((e) => e.type === "VENDOR")
    .sort((a, b) => (a.nickName > b.nickName ? 1 : -1));
  return [...members, ...vendor];
}

export async function getVendors() {
  return prisma.user.findMany({ where: { type: "VENDOR" } });
}

export async function getMembersCount() {
  return prisma.user.count({ where: { type: "MEMBER" } });
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findFirst({ where: { id } });
}

export async function getUserFindFirst(id: User["id"], type: User["type"]) {
  return prisma.user.findFirst({ where: { id, type } });
}

export async function findUserWithPassbook(id: User["id"], type: User["type"]) {
  return prisma.user.findFirst({
    where: { id, type },
    include: {
      passbook: true,
    },
  });
}
