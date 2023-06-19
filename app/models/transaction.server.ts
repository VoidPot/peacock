import configContext from "~/configContext";
import { prisma } from "~/db.server";
import { formatDate, formatMoney } from "~/helpers/utils";
import type { Transaction } from "@prisma/client";

type TransactionProps = {
  options?: {
    from?: number;
    to?: number;
    skip?: number;
    take?: number;
    type?: string;
    mode?: string;
    sort?: string;
    order?: string;
  };
};

export const findTransaction = async ({ options }: TransactionProps) => {
  const {
    from = 0,
    to = 0,
    skip = 0,
    take = 6,
    order = "desc",
    sort = "dot",
    type = "",
    mode = "",
  } = options || {};

  const where: any = {};

  if (type) {
    where.type = type;
  }

  if (mode) {
    where.mode = mode;
  }

  // if (userId) {
  //   where.OR = [
  //     {
  //       fromId: userId,
  //     },
  //     { toId: userId },
  //   ];
  // }

  const transactions = await prisma.transaction.findMany({
    where: {
      deleted: false,
      ...where,
    },
    include: {
      from: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
      to: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          avatar: true,
        },
      },
      group: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      [sort]: order,
    },
    skip,
    take,
  });
  return transactions.map((transaction) => {
    let primary = transaction.from;
    let secondary = transaction.to;

    if (
      ["VENDOR_PERIODIC_INVEST", "VENDOR_INVEST"].includes(transaction.mode)
    ) {
      primary = transaction.to;
      secondary = transaction.from;
    }
    return {
      ...transaction,
      dot$: formatDate(transaction.dot),
      createdAt$: formatDate(transaction.createdAt),
      amount$: formatMoney(transaction.amount),
      primary,
      secondary,
    };
  });
};
