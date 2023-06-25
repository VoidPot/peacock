import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TransactionForm from "~/components/forms/transaction-form";
import { prisma } from "~/db.server";
import { validateLocalDate } from "~/helpers/utils";
import { getUserSelect } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userSelect = await getUserSelect();
  return json({
    userSelect,
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

    const created = await prisma.transaction.create({
      data: {
        ...transaction,
      },
    });
    return json({
      success: true,
      message: "transaction created successfully",
      data: created,
    });
  } catch (err) {
    console.error(err);
    return json({
      success: false,
      message: "error on creating the transaction",
      data: {},
    });
  }
}

export default function TransactionPage() {
  const { userSelect } = useLoaderData<typeof loader>();
  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box bg-white">
          <TransactionForm className="z-990 p-0" userSelect={userSelect} />
        </div>
      </dialog>
    </>
  );
}
