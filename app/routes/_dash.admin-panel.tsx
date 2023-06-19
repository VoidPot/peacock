import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { getUserSelect } from "~/models/user.server";
import TransactionForm from "~/components/forms/transaction-form";

export const loader = async ({ request }: LoaderArgs) => {
  const users = await getUserSelect();

  return json({
    users,
  });
};

export default function AdminPage() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-none">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <TransactionForm className="col-span-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
