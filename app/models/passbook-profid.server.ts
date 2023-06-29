import type { Prisma } from "@prisma/client";
import { type Passbook, type Transaction } from "@prisma/client";
import type { Passbook_Settings_Keys } from "~/config/passbookConfig";
import configContext from "~/config/configContext";
import { prisma } from "~/db.server";

export const profitCalculator = async () => {
  const data = await Promise.all([
    prisma.user.findMany({
      where: {
        type: "VENDOR",
        deleted: false,
      },
      include: {
        unlinkedOfVendor: true,
      },
    }),
    prisma.user.findMany({
      where: {
        type: "MEMBER",
        deleted: false,
      },
    }),
    prisma.passbook.findFirst({
      where: {
        entryOf: "CLUB",
      },
    }),
  ]).then(([vendor, member, club]) => ({ vendor, member, club }));
  console.log({ data });
  return;
};
