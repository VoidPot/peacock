import { type Passbook, type Transaction } from "@prisma/client";
import type { Passbook_Settings_Keys } from "~/config/passbookConfig";
import configContext from "~/config/configContext";
import { prisma } from "~/db.server";

const getUserPassbooks = async (from: number, to: number, groupId: number) => {
  return await Promise.all([
    await prisma.passbook.findFirst({
      where: {
        user: {
          id: from,
        },
      },
    }),
    await prisma.passbook.findFirst({
      where: {
        user: {
          id: to,
        },
      },
    }),
    await prisma.passbook.findFirst({
      where: {
        group: {
          id: groupId,
        },
      },
    }),
    await prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
  ]).then(([FROM, TO, GROUP, CLUB]) => ({
    FROM,
    TO,
    GROUP,
    CLUB,
  }));
};

export const passbookMiddleware = async (params: any, result: Transaction) => {
  const action = params.action;
  if (params.model === "Transaction" && ["create", "delete"].includes(action)) {
    const { mode, fromId, toId, groupId } = result;

    const group = groupId
      ? await prisma.group.findUnique({ where: { id: groupId } })
      : undefined;

    const passbooks: any = await getUserPassbooks(fromId, toId, groupId || 0);

    const values: any = {
      amount: result.amount,
      month: group ? Math.round(result.amount / group.amount) : 0,
      profit: 0,
      one: 1,
    };

    if (["VENDOR_RETURN", "VENDOR_PERIODIC_RETURN"].includes(result.mode)) {
      const from = passbooks.FROM;
      if (from && from.calcProfit) {
        values.profit =
          from.totalReturns + result.amount - from.profit - from.totalInvest;
      }
    }

    const passbooksForUpdate: {
      where: Partial<Passbook>;
      data: Partial<Passbook>;
    }[] = [];

    const isReverse = action === "delete";

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
          if (isReverse) {
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

    await Promise.all(mapper).catch((e) => console.error(e));
  }
  return;
};
