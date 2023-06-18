import configContext from "~/configContext";
import { prisma } from "~/db.server";
import { formatDate, formatMoney } from "~/helpers/utils";
import type { Transaction } from "@prisma/client";

export const formatTransaction = (transaction: Transaction) => {
  const { amount } = transaction;
  return {
    ...transaction,
    amount$: formatMoney(amount),
  };
};

export const findTransaction = async () => {
  const transactions = await prisma.transaction.findMany({
    where: {
      deleted: false,
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
      dot: "desc",
    },
    skip: 0,
    take: 10,
  });
  return transactions.map((transaction) => {
    return {
      ...transaction,
      dot$: formatDate(transaction.dot),
      createdAt$: formatDate(transaction.createdAt),
      amount$: formatMoney(transaction.amount),
    };
  });
};
