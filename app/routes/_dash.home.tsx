import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GroupCard from "~/components/molecules/group";
import UpdateCard from "~/components/molecules/update";
import { getClubGroupPassbook } from "~/models/passbook.server";
import { findTransaction } from "~/models/transaction.server";
import Stats from "~/components/molecules/stats";

export const loader = async ({ request }: LoaderArgs) => {
  const passbookData = await getClubGroupPassbook();
  const transactions = await findTransaction({});
  return json({ passbookData, transactions });
};

export default function IndexPage() {
  const { passbookData, transactions } = useLoaderData<typeof loader>();
  const { club, groups } = passbookData;

  return (
    <>
      <Stats club={club} />
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
