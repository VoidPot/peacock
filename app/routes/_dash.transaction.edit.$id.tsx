import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TransactionForm from "~/components/forms/transaction-form";
import { prisma } from "~/db.server";
import { formatLocalDate, validateLocalDate } from "~/helpers/utils";
import { findOneTransaction } from "~/models/transaction.server";
import { getUserSelect } from "~/models/user.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  const userSelect = await getUserSelect();
  const transaction = await findOneTransaction(Number(params.id || 0));
  if (!transaction) {
    return redirect("/transaction");
  }
  return json({
    userSelect,
    transaction: {
      id: transaction.id,
      mode: transaction.mode,
      dot: formatLocalDate(transaction.dot),
      from: transaction.from.id,
      to: transaction.to.id,
      amount: transaction.amount,
      note: transaction.note || "",
    },
  });
};

export async function action({ request }: any) {
  try {
    const formData = await request.formData();
    const transaction = {
      mode: formData.get("mode"),
      dot: validateLocalDate(formData.get("dot")),
      fromId: Number(formData.get("from")),
      toId: Number(formData.get("to")),
      amount: Number(formData.get("amount")) || 0,
      note: formData.get("note") || "",
    };

    const created = await prisma.transaction.update({
      data: {
        ...transaction,
      },
      where: {
        id: Number(formData.get("id") || 0),
      },
    });
    return json({
      success: true,
      message: "transaction updated successfully",
      data: created,
    });
  } catch (err) {
    console.error(err);
    return json({
      success: false,
      message: "error on updating the transaction",
      data: {},
    });
  }
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
