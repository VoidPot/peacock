import configContext from "~/configContext";
import { prisma } from "~/db.server";
import { formatDate, formatMoney } from "~/helpers/utils";
import type { Transaction } from "@prisma/client";

export const transactionString = (
  transaction: Transaction & {
    from: {
      id: number;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
    };
    to: {
      id: number;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
    };
  }
) => {
  const { from, to, mode } = transaction;

  if (mode === "INTER_CASH_TRANSFER") {
    return `transferred cash`;
  }
  if (mode === "MEMBERS_PERIODIC_DEPOSIT") {
    return `deposited term amount`;
  }
};

type TransactionProps = {
  options?: {
    skip?: number;
    take?: number;
  };
};

export const findTransaction = async ({ options }: TransactionProps) => {
  const { skip = 0, take = 6 } = options || {};
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
    skip,
    take,
  });
  return transactions.map((transaction) => {
    return {
      ...transaction,
      dot$: formatDate(transaction.dot),
      createdAt$: formatDate(transaction.createdAt),
      amount$: formatMoney(transaction.amount),
      transactionStr: transactionString(transaction),
    };
  });
};
