import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import TransactionForm from "~/components/forms/transaction-form";
import { findOneTransaction } from "~/models/transaction.server";
import { getUserSelect } from "~/models/user.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  const userSelect = await getUserSelect();
  const transaction = await findOneTransaction(Number(params.id || 0));
  console.log({ transaction, params });
  if (!transaction) {
    return redirect("/transaction");
  }
  return json({
    userSelect,
    transaction,
  });
};

export async function action({ request }: any) {
  const formData = await request.formData();
  return json({ message: "created" });
}

export default function TransactionPage() {
  const { userSelect, transaction } = useLoaderData<typeof loader>();

  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box bg-white">
          <TransactionForm
            className="z-990 p-0"
            userSelect={userSelect}
            transaction={transaction as any}
          />
        </div>
      </dialog>
    </>
  );
}
