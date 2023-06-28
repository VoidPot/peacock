import { prisma } from "~/db.server";
import { formatDate, formatMoney } from "~/helpers/utils";

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

  if (from) {
    where.fromId = from;
  }
  if (to) {
    where.toId = to;
  }

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
    },
    orderBy:
      // sort === "dot"
      //   ? { [sort]: order, createdAt: "desc" }
      {
        [sort]: order,
      },
    skip,
    take,
  });
  return transactions.map(({ from, to, ...transaction }) => {
    let primary = { ...from };
    let secondary = { ...to };

    if (
      [
        "VENDOR_PERIODIC_INVEST",
        "VENDOR_INVEST",
        "MEMBERS_WITHDRAW",
        "MEMBERS_WITHDRAW_PROFIT",
      ].includes(transaction.mode)
    ) {
      primary = { ...to };
      secondary = { ...from };
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

export const findOneTransaction = async (id: number) => {
  const transactions = await prisma.transaction.findFirst({
    where: {
      id,
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
    },
  });

  return transactions;
};
