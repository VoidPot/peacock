import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GroupCard from "~/components/molecules/group";
import type { StatProps } from "~/components/molecules/stat";
import Stat from "~/components/molecules/stat";
import UpdateCard from "~/components/molecules/update";
import { getClubGroupPassbook } from "~/models/passbook.server";
import configContext from "~/configContext";
import { formatMoney, getValidNumber } from "~/helpers/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const passbookData = await getClubGroupPassbook();
  return json({ passbookData });
};

export default function IndexPage() {
  const { passbookData } = useLoaderData<typeof loader>();
  const { club, groups } = passbookData;

  const statsData: StatProps[] = [
    {
      hed: "No Of Members",
      dek: getValidNumber(club.membersCount),
      iconName: "member",
    },
    {
      hed: "Members Deposit",
      dek: club.termDeposit$,
      iconName: "archive",
      hedColor: "secondary",
    },
    {
      hed: "Members Balance",
      dek: club.termBalance$,
      iconName: "transaction",
      hedColor: "accent",
    },
    {
      hed: "Net Members Amount",
      dek: club.totalTermAmount$,
      iconName: "trans",
      hedColor: "primary",
    },
    {
      hed: "Club Age",
      dek: configContext.club.clubAge(),
      iconName: "team",
    },
    {
      hed: "Net Profit",
      dek: formatMoney(club.returns),
      iconName: "team",
      hedColor: "primary",
    },
    {
      hed: "Net Value",
      dek: formatMoney(club.accountBalance),
      iconName: "home",
      hedColor: "secondary",
    },
    {
      hed: "Net Liquidity",
      dek: formatMoney(club.holdingAmount),
      iconName: "trans",
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
          <UpdateCard />
        </div>
      </div>
    </>
  );
}
