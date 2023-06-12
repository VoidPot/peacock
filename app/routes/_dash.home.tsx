import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Icon from "~/components/atoms/svg/icon";
import GroupCard from "~/components/molecules/group";
import Stat from "~/components/molecules/stat";
import UpdateCard from "~/components/molecules/update";
import { getClubTimes } from "~/helpers/utils";
import { getGroups } from "~/models/group.server";
import { getClubGroupPassbook } from "~/models/passbook.server";
import { getOneSummary, getSummaries } from "~/models/summary.server";
import { getMembersCount } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const summaries = await getSummaries();
  const summary = await getOneSummary({ type: "DEFAULT" });
  const membersCount = await getMembersCount();
  const passbookData = await getClubGroupPassbook();
  return json({ passbookData });
};

export default function IndexPage() {
  const { passbookData } = useLoaderData<typeof loader>();
  const { club, groups } = passbookData;
  console.log({ club });
  return (
    <>
      {club && (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <Stat
              hed="No Of Members"
              dek={club?.noOfMembers || 0}
              iconName="member"
            />
            <Stat
              hed="Members Deposit"
              dek={`${(club.termDeposit || 0).toLocaleString("en-IN")} ₹`}
              iconName="archive"
            />
            <Stat
              hed="Members Balance"
              dek={`${(club.balance || 0).toLocaleString("en-IN")} ₹`}
              iconName="trans"
            />
            <Stat
              hed="Net Members Amount"
              dek={`${
                (club.totalTeamAmount || 0).toLocaleString("en-IN") || 0
              } ₹`}
              iconName="group"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <Stat
              hed="Net Invest"
              dek={`${(club.invest || 0).toLocaleString("en-IN")} ₹`}
              iconName="member"
            />
            <Stat
              hed="Net Returns"
              dek={`${(club.totalDeposit || 0).toLocaleString("en-IN")} ₹`}
              iconName="archive"
            />
            <Stat
              hed="Profit"
              dek={`${(club.profit || 0).toLocaleString("en-IN")} ₹`}
              iconName="trans"
            />
            <Stat
              hed="Member Profit"
              dek={`${(club.eachProfit || 0).toLocaleString("en-IN") || 0} ₹`}
              iconName="group"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <Stat
              hed="Member Value"
              dek={`${(club.invest || 0).toLocaleString("en-IN")} ₹`}
              iconName="member"
            />
            <Stat
              hed="Net Value"
              dek={`${(club.accountBalance || 0).toLocaleString("en-IN")} ₹`}
              iconName="archive"
            />
            <Stat
              hed="Net Liquidity"
              dek={`${(club.holding || 0).toLocaleString("en-IN")} ₹`}
              iconName="trans"
            />
          </div>
        </>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          {groups?.map((each, key) => (
            <GroupCard key={key} {...each} noOfMembers={club.noOfMembers} />
          ))}
        </div>
        <UpdateCard />
      </div>
    </>
  );
}
