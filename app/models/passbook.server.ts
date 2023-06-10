import { Prisma, type Passbook, type Transaction } from "@prisma/client";
import { prisma } from "~/db.server";

const getFromToUser = async (
  fromId: number,
  toId: number,
  groupId: number | null | undefined
) => {
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: [fromId, toId],
      },
    },
  });
  return {
    from: users.find((e) => e.id === fromId),
    to: users.find((e) => e.id === toId),
    group: groupId
      ? await prisma.group.findFirst({ where: { id: groupId } })
      : undefined,
  };
};

const getCommonPassbooks = async () => {
  const passbook = await prisma.passbook.findMany({
    where: {
      entryOf: {
        in: ["ALL_GROUP", "ALL_MEMBER", "ALL_VENDOR", "CLUB", "NON_GROUP"],
      },
    },
  });
  return {
    ALL_GROUP: passbook.find((e) => e.entryOf === "ALL_GROUP"),
    ALL_MEMBER: passbook.find((e) => e.entryOf === "ALL_MEMBER"),
    ALL_VENDOR: passbook.find((e) => e.entryOf === "ALL_VENDOR"),
    CLUB: passbook.find((e) => e.entryOf === "CLUB"),
    NON_GROUP: passbook.find((e) => e.entryOf === "NON_GROUP"),
  };
};

const getUserPassbooks = async (
  from: number,
  to: number,
  groupId: number | null
) => {
  const passbookUser = await prisma.passbook.findMany({
    where: {
      userId: {
        in: [from, to],
      },
      entryOf: {
        in: ["ONE_MEMBER", "ONE_VENDOR"],
      },
    },
  });
  const passbookUserGroup = groupId
    ? await prisma.passbook.findMany({
        where: {
          userId: {
            in: [from, to],
          },
          groupId: groupId,
          entryOf: {
            in: ["MEMBER_GROUP", "VENDOR_GROUP"],
          },
        },
      })
    : [];

  const passbookGroup = groupId
    ? await prisma.passbook.findFirst({
        where: {
          groupId: groupId,
          entryOf: {
            in: ["ONE_GROUP"],
          },
        },
      })
    : undefined;

  return {
    FROM_ONE_USER: passbookUser.find((e) => e.userId === from),
    TO_ONE_USER: passbookUser.find((e) => e.userId === to),
    TO_USER_GROUP: passbookUserGroup.find((e) => e.userId === from),
    FROM_USER_GROUP: passbookUserGroup.find((e) => e.userId === to),
    ONE_GROUP: passbookGroup,
  };
};

export const passbookMiddleware = async (params: any, result: Transaction) => {
  const action = params.action;
  if (params.model === "Transaction" && action === "create") {
    // console.log({ data: params.args?.data, action, result });

    const { mode, fromId, toId, type, groupId } = result;
    const amount = result.amount;

    const { from, to, group } = await getFromToUser(fromId, toId, groupId);

    const { ALL_GROUP, ALL_MEMBER, ALL_VENDOR, CLUB, NON_GROUP } =
      await getCommonPassbooks();

    const {
      FROM_ONE_USER,
      TO_ONE_USER,
      TO_USER_GROUP,
      FROM_USER_GROUP,
      ONE_GROUP,
    } = await getUserPassbooks(fromId, toId, groupId);

    const passbooksForUpdate: {
      where: Partial<Passbook>;
      data: Partial<Passbook>;
    }[] = [];
    type passKey =
      | "deposit"
      | "termDeposit"
      | "totalDeposit"
      | "withdraw"
      | "termBalance"
      | "totalBalance"
      | "balance"
      | "holding"
      | "returns"
      | "expense"
      | "invest"
      | "totalProfit"
      | "months"
      | "termInvest"
      | "termReturns"
      | "totalInvest"
      | "returnMonths"
      | "totalReturns"
      | "totalExpense";
    const addEntry = (
      passbook: any | null | undefined,
      add: { [key in passKey]?: number } = {},
      sub: { [key in passKey]?: number } = {}
    ) => {
      if (passbook) {
        passbooksForUpdate.push({
          where: {
            id: passbook.id,
          },
          data: {
            ...Object.fromEntries(
              Object.entries(add).map(([key, value]) => [
                key,
                Number(passbook[key]) + value,
              ])
            ),
            ...Object.fromEntries(
              Object.entries(sub).map(([key, value]) => [
                key,
                Number(passbook[key]) - value,
              ])
            ),
          },
        });
      }
      return;
    };

    if (mode === "INTER_CASH_TRANSFER") {
      addEntry(FROM_ONE_USER, { holding: amount });
      addEntry(TO_ONE_USER, { holding: amount });
    }
    if (mode === "MEMBERS_PERIODIC_DEPOSIT" && group) {
      const paidMonths = amount / group.amount;

      addEntry(
        FROM_ONE_USER,
        { termDeposit: amount, totalDeposit: amount },
        {
          termBalance: amount,
          totalBalance: amount,
        }
      );
      addEntry(
        FROM_USER_GROUP,
        { termDeposit: amount, totalDeposit: amount, months: paidMonths },
        {
          termBalance: amount,
          totalBalance: amount,
          returnMonths: paidMonths,
        }
      );
      addEntry(TO_ONE_USER, { holding: amount });
      addEntry(TO_USER_GROUP, { holding: amount });
      addEntry(
        ONE_GROUP,
        { termDeposit: amount, totalDeposit: amount, holding: amount },
        {
          termBalance: amount,
          totalBalance: amount,
        }
      );
      addEntry(
        ALL_GROUP,
        { termDeposit: amount, totalDeposit: amount },
        {
          termBalance: amount,
          totalBalance: amount,
        }
      );
      addEntry(
        CLUB,
        { termDeposit: amount, totalDeposit: amount, holding: amount },
        {
          termBalance: amount,
          totalBalance: amount,
        }
      );
    }

    if (mode === "MEMBERS_WITHDRAW" && group) {
      const paidMonths = Math.round(amount / group.amount);

      addEntry(FROM_ONE_USER, {}, { holding: amount });
      addEntry(FROM_USER_GROUP, {}, { holding: amount });
      addEntry(
        TO_ONE_USER,
        {
          termBalance: amount,
          totalBalance: amount,
        },

        { termDeposit: amount, totalDeposit: amount }
      );
      addEntry(
        TO_USER_GROUP,
        {
          termBalance: amount,
          totalBalance: amount,
          returnMonths: paidMonths,
        },
        { termDeposit: amount, totalDeposit: amount, months: paidMonths }
      );
      addEntry(
        ONE_GROUP,
        {
          termBalance: amount,
          totalBalance: amount,
        },
        { termDeposit: amount, totalDeposit: amount, holding: amount }
      );
      addEntry(
        ALL_GROUP,
        {
          termBalance: amount,
          totalBalance: amount,
        },
        { termDeposit: amount, totalDeposit: amount }
      );
      addEntry(
        CLUB,
        {
          termBalance: amount,
          totalBalance: amount,
        },
        { termDeposit: amount, totalDeposit: amount, holding: amount }
      );
    }

    if (mode === "NEW_MEMBER_PAST_TALLY") {
      addEntry(
        FROM_ONE_USER,
        { deposit: amount, totalDeposit: amount },
        {
          balance: amount,
          totalBalance: amount,
        }
      );
      addEntry(
        FROM_USER_GROUP,
        { deposit: amount, totalDeposit: amount },
        {
          balance: amount,
          totalBalance: amount,
        }
      );
      addEntry(TO_ONE_USER, { holding: amount });
      addEntry(TO_USER_GROUP, { holding: amount });
      addEntry(
        ONE_GROUP,
        { deposit: amount, totalDeposit: amount },
        {
          balance: amount,
          totalBalance: amount,
        }
      );
      addEntry(
        ALL_GROUP,
        { deposit: amount, totalDeposit: amount },
        {
          balance: amount,
          totalBalance: amount,
        }
      );
      addEntry(
        CLUB,
        { deposit: amount, totalDeposit: amount, holding: amount },
        {
          balance: amount,
          totalBalance: amount,
        }
      );
    }

    if (mode === "VENDOR_PERIODIC_INVEST") {
      addEntry(
        FROM_ONE_USER,
        {},
        {
          holding: amount,
        }
      );
      addEntry(
        FROM_USER_GROUP,
        {},
        {
          holding: amount,
        }
      );
      addEntry(
        TO_ONE_USER,
        { termInvest: amount, totalInvest: amount },
        { totalProfit: amount }
      );
      addEntry(
        TO_USER_GROUP,
        { termInvest: amount, totalInvest: amount },
        { totalProfit: amount }
      );
      addEntry(
        ONE_GROUP,
        { termInvest: amount, totalInvest: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
      addEntry(
        ALL_GROUP,
        { termInvest: amount, totalInvest: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
      addEntry(
        CLUB,
        { termInvest: amount, totalInvest: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
    }

    if (mode === "VENDOR_INVEST") {
      addEntry(
        FROM_ONE_USER,
        {},
        {
          holding: amount,
        }
      );
      addEntry(
        FROM_USER_GROUP,
        {},
        {
          holding: amount,
        }
      );
      addEntry(
        TO_ONE_USER,
        { invest: amount, totalInvest: amount },
        { totalProfit: amount }
      );
      addEntry(
        TO_USER_GROUP,
        { invest: amount, totalInvest: amount },
        { totalProfit: amount }
      );
      addEntry(
        ONE_GROUP,
        { invest: amount, totalInvest: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
      addEntry(
        ALL_GROUP,
        { invest: amount, totalInvest: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
      addEntry(
        CLUB,
        { invest: amount, totalInvest: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
    }

    if (mode === "VENDOR_PERIODIC_RETURN") {
      addEntry(TO_ONE_USER, {
        holding: amount,
      });
      addEntry(TO_USER_GROUP, {
        holding: amount,
      });
      addEntry(FROM_ONE_USER, {
        termReturns: amount,
        totalReturns: amount,
        totalProfit: amount,
      });
      addEntry(FROM_USER_GROUP, {
        termReturns: amount,
        totalReturns: amount,
        totalProfit: amount,
      });
      addEntry(ONE_GROUP, {
        termReturns: amount,
        totalReturns: amount,
        totalProfit: amount,
        holding: amount,
      });
      addEntry(ALL_GROUP, {
        termReturns: amount,
        totalReturns: amount,
        totalProfit: amount,
        holding: amount,
      });
      addEntry(CLUB, {
        termReturns: amount,
        totalReturns: amount,
        totalProfit: amount,
        holding: amount,
      });
    }

    if (mode === "VENDOR_RETURN") {
      addEntry(TO_ONE_USER, {
        holding: amount,
      });
      addEntry(TO_USER_GROUP, {
        holding: amount,
      });
      addEntry(FROM_ONE_USER, {
        returns: amount,
        totalReturns: amount,
        totalProfit: amount,
      });
      addEntry(FROM_USER_GROUP, {
        returns: amount,
        totalReturns: amount,
        totalProfit: amount,
      });
      addEntry(ONE_GROUP, {
        returns: amount,
        totalReturns: amount,
        totalProfit: amount,
        holding: amount,
      });
      addEntry(ALL_GROUP, {
        returns: amount,
        totalReturns: amount,
        totalProfit: amount,
        holding: amount,
      });
      addEntry(CLUB, {
        returns: amount,
        totalReturns: amount,
        totalProfit: amount,
        holding: amount,
      });
    }

    if (mode === "OTHER_EXPENDITURE") {
      addEntry(
        FROM_ONE_USER,
        {},
        {
          holding: amount,
        }
      );
      addEntry(
        FROM_USER_GROUP,
        {},
        {
          holding: amount,
        }
      );
      addEntry(
        TO_ONE_USER,
        { expense: amount, totalExpense: amount },
        { totalProfit: amount }
      );
      addEntry(
        TO_USER_GROUP,
        { expense: amount, totalExpense: amount },
        { totalProfit: amount }
      );
      addEntry(
        ONE_GROUP,
        { expense: amount, totalExpense: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
      addEntry(
        ALL_GROUP,
        { expense: amount, totalExpense: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
      addEntry(
        CLUB,
        { expense: amount, totalExpense: amount },
        {
          holding: amount,
          totalProfit: amount,
        }
      );
    }
    console.log(JSON.stringify(passbooksForUpdate));

    const mapper = passbooksForUpdate.map(({ where, data }) =>
      prisma.passbook.update({
        where,
        data,
      })
    );

    await Promise.all(mapper);
  }
  return;
};
