import type { Group, User, Passbook } from "@prisma/client";

export const addPassbookEntry = (users: User[], groups: Group[]) => {
  const passbooks: Partial<Passbook>[] = [
    {
      entryOf: "CLUB",
    },
  ];

  users.forEach((user) => {
    passbooks.push({
      userId: user.id,
      entryOf: "USER",
    });
    groups.forEach((group) => {
      passbooks.push({
        userId: user.id,
        groupId: group.id,
        entryOf: "USER_GROUP",
      });
    });
  });

  groups.forEach((group) => {
    passbooks.push({
      groupId: group.id,
      entryOf: "GROUP",
    });
  });

  return passbooks;
};
