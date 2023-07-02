import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GroupCard from "~/components/molecules/group";
import type { StatProps } from "~/components/molecules/stat";
import Stat from "~/components/molecules/stat";
import UpdateCard from "~/components/molecules/update";
import { getClubGroupPassbook } from "~/models/passbook.server";
import configContext from "~/config/configContext";
import { getValidNumber } from "~/helpers/utils";
import { findTransaction } from "~/models/transaction.server";

export const loader = async ({ request }: LoaderArgs) => {
  const passbookData = await getClubGroupPassbook();
  const transactions = await findTransaction({});
  return json({ passbookData, transactions });
};

export default function IndexPage() {
  const { passbookData, transactions } = useLoaderData<typeof loader>();
  const { club, groups } = passbookData;

  const statsData: StatProps[] = [
    {
      hed: "Members / Months",
      dek: `${getValidNumber(club.membersCount)} /  ${
        configContext.club.clubAge().inMonth
      } Mth`,
      iconName: "home",
    },
    {
      hed: "Members Deposit",
      dek: club.accountBalance$,
      iconName: "archive",
      hedColor: "success",
    },
    {
      hed: "Members Balance",
      dek: club.totalBalance$,
      iconName: "transaction",
      hedColor: "error",
    },
    {
      hed: "Net Members Amount",
      dek: club.netMemberAmount$,
      iconName: "trans",
      hedColor: "info",
    },
    {
      hed: "Net Profit",
      dek: club.profit$,
      iconName: "team",
      hedColor: "success",
    },
    {
      hed: "Net Value Per Member",
      dek: club.perMemberNetValue$,
      iconName: "member",
      hedColor: "info",
    },
    {
      hed: "Net Liquidity",
      dek: club.holdingAmount$,
      iconName: "trans",
      hedColor: "secondary",
    },
    {
      hed: "Club Net Value",
      dek: club.netAmount$,
      iconName: "dash",
      hedColor: "secondary",
    },
  ];

  return (
    <>
      {club && (
        <div className="rounded-md ">
          <div className="grid grid-flow-row-dense grid-cols-1 items-center justify-center gap-4 align-middle sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {statsData.map((each: any, index: any | null | undefined) => (
              <Stat key={index} hedColor="neutral" {...each} />
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
        <div className="col-span-1 flex flex-col gap-6 lg:col-span-4">
          {groups?.map((each, key) => (
            <GroupCard key={key} {...each} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6 lg:col-span-3">
          <UpdateCard transactions={transactions as any} />
        </div>
      </div>
    </>
  );
}
