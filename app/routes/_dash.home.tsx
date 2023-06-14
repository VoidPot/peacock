import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GroupCard from "~/components/molecules/group";
import type { StatProps } from "~/components/molecules/stat";
import Stat from "~/components/molecules/stat";
import UpdateCard from "~/components/molecules/update";
import { getClubGroupPassbook } from "~/models/passbook.server";
import type { Key } from "react";
import { getClubAge } from "~/helpers/utils";

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
      dek: club?.noOfMembers || 0,
      iconName: "member",
    },
    {
      hed: "Members Deposit",
      dek: `${(club.termDeposit || 0).toLocaleString("en-IN")} ₹`,
      iconName: "archive",
      hedColor: "secondary",
    },
    {
      hed: "Members Balance",
      dek: `${(club.balance || 0).toLocaleString("en-IN")} ₹`,
      iconName: "transaction",
      hedColor: "accent",
    },
    {
      hed: "Net Members Amount",
      dek: `${(club.totalTeamAmount || 0).toLocaleString("en-IN")} ₹`,
      iconName: "trans",
      hedColor: "primary",
    },
    // {
    //   hed: "Net Invest",
    //   dek: `${(club.invest || 0).toLocaleString("en-IN")} ₹`,
    //   iconName: "member",
    // },
    // {
    //   hed: "Net Returns",
    //   dek: `${(club.returns || 0).toLocaleString("en-IN")} ₹`,
    //   iconName: "setting",
    // },
    {
      hed: "Club Age",
      dek: getClubAge(),
      iconName: "team",
    },
    {
      hed: "Net Profit",
      dek: `${(club.returns || 0).toLocaleString("en-IN")} ₹`,
      iconName: "team",
      hedColor: "primary",
    },
    // {
    //   hed: "Member Profit",
    //   dek: `${(club.returns || 0).toLocaleString("en-IN")} ₹`,
    //   iconName: "trans",
    //   hedColor: "primary",
    // },
    // {
    //   hed: "Net Member Value",
    //   dek: `${(club.returns || 0).toLocaleString("en-IN")} ₹`,
    //   iconName: "dash",
    //   hedColor: "secondary",
    // },
    {
      hed: "Net Value",
      dek: `${(club.accountBalance || 0).toLocaleString("en-IN")} ₹`,
      iconName: "home",
      hedColor: "secondary",
    },
    {
      hed: "Net Liquidity",
      dek: `${(club.holdingAmount || 0).toLocaleString("en-IN")} ₹`,
      iconName: "trans",
      hedColor: "secondary",
    },
  ];

  return (
    <>
      {club && (
        <div className="rounded-2xl ">
          <div className="grid grid-flow-row-dense grid-cols-1 items-center justify-center gap-4 align-middle sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {statsData.map((each: any, index: Key | null | undefined) => (
              <Stat key={index} hedColor="neutral" {...each} />
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-6">
          {groups?.map((each, key) => (
            <GroupCard key={key} {...each} noOfMembers={club.noOfMembers} />
          ))}
        </div>
        <UpdateCard />
      </div>
    </>
  );
}
