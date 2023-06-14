import type { User } from "@prisma/client";
import { prisma } from "~/db.server";
import { getMonthYear } from "~/helpers/utils";

export async function getMembers() {
  return prisma.user.findMany({ where: { type: "MEMBER" } });
}

export async function getMembersWithSummary() {
  const response = await prisma.user.findMany({
    where: { type: "MEMBER", deleted: false },
    include: {
      passbook: {
        where: {
          entryOf: { in: ["USER", "USER_GROUP"] },
        },
        include: {
          group: {
            select: { slug: true },
          },
        },
      },
    },
  });

  const members = response.map((each) => {
    const { passbook, ...member } = each;
    const userPassbook = passbook.find((pass) => pass.entryOf === "USER");

    return {
      ...member,
      formattedJoinedAt: getMonthYear(member.joinedAt),
      userPassbook: {
        ...userPassbook,
        ...(userPassbook && {
          holdingAmountInRupee: `${userPassbook.holdingAmount.toLocaleString(
            "en-IN"
          )} ₹`,
          termDepositInRupee: `${userPassbook.termDeposit.toLocaleString(
            "en-IN"
          )} ₹`,
          depositInRupee: `${userPassbook.deposit.toLocaleString("en-IN")} ₹`,
          eachPersonProfitInRupee: `0 ₹`,
          balanceInRupee: `0 ₹`,
          netAmountInRupee: userPassbook.totalDeposit,
        }),
      },
      groupPassbook: passbook
        .filter((pass) => pass.entryOf === "USER_GROUP")
        .sort((a, b) =>
          (a.group?.slug || "") > (b.group?.slug || "") ? 1 : -1
        ),
    };
  });

  return members;
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
