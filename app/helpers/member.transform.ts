import type { Summary, User, Group, Link } from "@prisma/client";
import { formatMoney } from "./utils";

type MemberInclude = User & {
  links: (Link & {
    group: Group;
  })[];
  summaries: (Summary & {
    group: Group | null;
  })[];
};

export const getMemberSummaryAmount = (
  member: MemberInclude,
  key: string = "deposit"
) => {
  return formatMoney(
    member.summaries
      .map((each: any) => each[key])
      .reduce((a: any, e: any) => {
        a = a + e;
        return a;
      }, 0)
  );
};

export const transformMembers = (members: MemberInclude[]) => {
  return members.map((member) => {
    const allDeposit = getMemberSummaryAmount(member, "deposit");
    return {
      ...member,
      allDeposit,
      allTransfer: getMemberSummaryAmount(member, "transfer"),
      allHolding: getMemberSummaryAmount(member, "holding"),
      allWithdraw: getMemberSummaryAmount(member, "withdraw"),
    };
  });
};
