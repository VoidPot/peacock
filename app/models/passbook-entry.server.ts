import { type Passbook, type Transaction } from "@prisma/client";
import type { Passbook_Settings_Keys } from "~/configContext";
import configContext from "~/configContext";
import { prisma } from "~/db.server";

const getUserPassbooks = async (from: number, to: number, groupId: number) => {
  const passbookUser = await prisma.passbook.findMany({
    where: {
      userId: {
        in: [from, to],
      },
      entryOf: "USER",
    },
  });
  const passbookUserGroup = await prisma.passbook.findMany({
    where: {
      userId: {
        in: [from, to],
      },
      groupId: groupId,
      entryOf: "USER_GROUP",
    },
  });

  const passbookGroup = await prisma.passbook.findFirst({
    where: {
      groupId: groupId,
      entryOf: "GROUP",
    },
  });

  const club = await prisma.passbook.findFirst({
    where: {
      entryOf: "CLUB",
    },
  });

  return {
    FROM_USER: passbookUser.find((e) => e.userId === from),
    TO_USER: passbookUser.find((e) => e.userId === to),
    TO_USER_GROUP: passbookUserGroup.find((e) => e.userId === from),
    FROM_USER_GROUP: passbookUserGroup.find((e) => e.userId === to),
    GROUP: passbookGroup,
    CLUB: club,
  };
};

export const passbookMiddleware = async (params: any, result: Transaction) => {
  const action = params.action;
  if (params.model === "Transaction" && action === "create") {
    // console.log({ data: params.args?.data, action, result });

    const { mode, fromId, toId, groupId } = result;

    const group = groupId
      ? await prisma.group.findUnique({ where: { id: groupId } })
      : undefined;

    const passbooks: any = await getUserPassbooks(fromId, toId, groupId || 0);

    const values: any = {
      amount: result.amount,
      month: group ? Math.round(result.amount / group.amount) : 0,
    };

    const passbooksForUpdate: {
      where: Partial<Passbook>;
      data: Partial<Passbook>;
    }[] = [];

    const addEntry = (
      passbook: any | null | undefined,
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
          addEntry(passbooks[pbKey], pbValue?.ADD, pbValue?.SUB);
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
