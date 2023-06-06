import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Icon from "~/components/atoms/svg/icon";
import GroupCard from "~/components/molecules/group";
import Stat from "~/components/molecules/stat";
import UpdateCard from "~/components/molecules/update";
import { getClubTimes } from "~/helpers/utils";
import { getGroups } from "~/models/group.server";
import { getOneSummary, getSummaries } from "~/models/summary.server";
import { getMembersCount } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const groups = await getGroups();
  const summaries = await getSummaries();
  const summary = await getOneSummary({ type: "DEFAULT" });
  const membersCount = await getMembersCount();
  return json({ summaries, groups, summary, membersCount });
};

export default function IndexPage() {
  const { groups, summaries, membersCount, summary } =
    useLoaderData<typeof loader>();
  console.log({ groups, summaries, membersCount, summary });
  const clubDate = getClubTimes();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <Stat
          hed="Total Members"
          dek={membersCount.toString()}
          iconName="member"
        />
        <Stat
          hed="Total Months"
          dek={clubDate.monthsDif.toString()}
          iconName="archive"
        />
        <Stat
          hed="Net Invest"
          dek={`${summary?.holding.toLocaleString("en-IN") || 0} ₹`}
          iconName="trans"
          highlight="+24K"
        />
        <Stat
          hed="Net Value"
          dek={`${summary?.holding.toLocaleString("en-IN") || 0} ₹`}
          iconName="group"
          highlight="+24K"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          {groups.map((each, key) => (
            <GroupCard key={key} {...each} />
          ))}
        </div>
        <UpdateCard />
      </div>
    </>
  );
}
