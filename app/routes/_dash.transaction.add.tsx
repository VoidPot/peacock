import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TransactionForm from "~/components/forms/transaction-form";
import { getUserSelect } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userSelect = await getUserSelect();
  return json({
    userSelect,
  });
};

export async function action({ request }: any) {
  const formData = await request.formData();

  console.log({ formData });
  return json({ message: "created" });
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
