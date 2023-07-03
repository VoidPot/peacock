import type { Prisma } from "@prisma/client";
import { type Passbook, type Transaction } from "@prisma/client";
import type { Passbook_Settings_Keys } from "~/config/passbookConfig";
import configContext from "~/config/configContext";
import { prisma } from "~/db.server";
import { profitCalculator } from "./passbook-profit.server";

const getUserPassbooks = async (from: number, to: number) => {
  return await Promise.all([
    prisma.passbook.findFirst({
      where: {
        user: {
          id: from,
        },
      },
    }),
    prisma.passbook.findFirst({
      where: {
        user: {
          id: to,
        },
      },
    }),
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
  ]).then(([FROM, TO, CLUB]) => ({
    FROM,
    TO,
    CLUB,
  }));
};

const passbookEntry = async (
  transaction: Transaction,
  shouldReverse: boolean = false
) => {
  const { mode, fromId, toId } = transaction;

  const passbooks: any = await getUserPassbooks(fromId, toId);

  const values: any = {
    amount: transaction.amount,
    profit: 0,
    onePlus: 1,
  };

  if (["VENDOR_RETURN", "VENDOR_PERIODIC_RETURN"].includes(transaction.mode)) {
    const from = passbooks.FROM;
    if (from && from.calcProfit) {
      values.profit = from.totalReturns + transaction.amount - from.totalInvest;

      if (shouldReverse) {
        values.profit =
          transaction.amount -
          from.totalInvest -
          (from.totalReturns - transaction.amount);
      }
    }
  }

  const passbooksForUpdate: {
    where: Partial<Passbook>;
    data: Partial<Passbook>;
  }[] = [];

  const addEntry = (
    passbook: any | null | undefined | unknown,
    add: { [key in Passbook_Settings_Keys]?: number } = {},
    sub: { [key in Passbook_Settings_Keys]?: number } = {}
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
              Number(passbook[key]) + values[value],
            ])
          ),
          ...Object.fromEntries(
            Object.entries(sub).map(([key, value]) => [
              key,
              Number(passbook[key]) - values[value],
            ])
          ),
        },
      });
    }
    return;
  };

  const settings = configContext.passbook.settings;

  Object.entries(settings).forEach(([key, value]) => {
    if (mode === key) {
      Object.entries(value).forEach(([pbKey, pbValue]: any[]) => {
        if (shouldReverse) {
          addEntry(passbooks[pbKey], pbValue?.SUB, pbValue?.ADD);
        } else {
          addEntry(passbooks[pbKey], pbValue?.ADD, pbValue?.SUB);
        }
      });
    }
  });

  const mapper = passbooksForUpdate.map(({ where, data }) =>
    prisma.passbook
      .update({
        where,
        data,
      })
      .catch(console.error)
  );

  return await Promise.all(mapper).catch((e) => console.error(e));
};

export const usePassbookMiddleware: Prisma.Middleware = async (param, next) => {
  const { action, model } = param;
  let transaction;
  if (model === "Transaction" && ["update", "delete"].includes(action)) {
    const where = param?.args?.where;
    transaction = where
      ? await prisma.transaction.findFirst({ where })
      : undefined;
  }
  const response = await next(param);

  if (model === "Transaction") {
    if (action === "create") {
      await passbookEntry(response, false);
    }

    if (["update", "delete"].includes(action)) {
      if (transaction && action === "update") {
        await passbookEntry(transaction, true);
        await passbookEntry(response, false);
      } else if (transaction && action === "delete") {
        await passbookEntry(transaction, true);
      }
    }

    if (
      (response &&
        ["VENDOR_RETURN", "VENDOR_PERIODIC_RETURN"].includes(response?.mode)) ||
      (transaction &&
        ["VENDOR_RETURN", "VENDOR_PERIODIC_RETURN"].includes(transaction?.mode))
    ) {
      await profitCalculator();
    }
  }

  if (model === "User" && ["create", "delete"].includes(action)) {
    await profitCalculator();
  }

  // if (model === "InterLink") {
  //   await profitCalculator();
  // }

  return response;
};
