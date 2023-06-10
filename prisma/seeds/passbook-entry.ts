import type { Group, User, Passbook } from "@prisma/client";

export const addPassbookEntry = (users: User[], groups: Group[]) => {
  const passbooks: Partial<Passbook>[] = [
    {
      entryOf: "CLUB",
    },
    {
      entryOf: "ALL_GROUP",
    },
    {
      entryOf: "ALL_MEMBER",
    },
    {
      entryOf: "ALL_VENDOR",
    },
    {
      entryOf: "NON_GROUP",
    },
  ];

  users.forEach((user) => {
    passbooks.push({
      userId: user.id,
      entryOf: user.type === "MEMBER" ? "ONE_MEMBER" : "ONE_VENDOR",
    });
    groups.forEach((group) => {
      passbooks.push({
        userId: user.id,
        groupId: group.id,
        entryOf: user.type === "MEMBER" ? "MEMBER_GROUP" : "VENDOR_GROUP",
      });
    });
  });

  groups.forEach((group) => {
    passbooks.push({
      groupId: group.id,
      entryOf: "ONE_GROUP",
    });
  });

  return passbooks;
};
