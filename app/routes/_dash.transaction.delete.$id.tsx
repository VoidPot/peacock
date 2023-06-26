import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useOutletContext,
} from "@remix-run/react";
import { useEffect } from "react";
import { prisma } from "~/db.server";

export const loader = async ({ request, params }: LoaderArgs) => {
  const id = Number(params.id || 0);
  if (!id || id === 0) {
    return redirect("/transaction");
  }
  return json({
    id: Number(params.id || 0),
  });
};

export async function action({ request }: any) {
  try {
    const formData = await request.formData();

    await prisma.transaction.delete({
      where: {
        id: Number(formData.get("id") || 0),
      },
    });

    return redirect("/transaction?alert=transaction_created_success");
    // return json({
    //   success: true,
    //   type: "success",
    //   message: "Transaction deleted successfully",
    //   data: created,
    // });
  } catch (err) {
    console.error(err);
    return redirect("/transaction?alert=transaction_create_error");
    // return json({
    //   success: false,
    //   type: "error",
    //   message: "Error on deleting the transaction",
    //   data: {},
    // });
  }
}

export default function TransactionPage() {
  const { id } = useLoaderData<typeof loader>();
  const actionReturn = useActionData<typeof action>();

  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box bg-white">
          <Form method="post">
            <input name="id" defaultValue={id} className="hidden" />
            <h6>Are you sure you wanna delete the transaction?</h6>

            <div className="col-span-full mt-4 flex justify-between gap-2 align-middle ">
              <Link to={"/transaction"} className="btn-outline btn-sm btn px-6">
                Cancel
              </Link>
              <button type="submit" className="btn-primary btn-sm btn px-6">
                Delete
              </button>
            </div>
          </Form>
        </div>
      </dialog>
    </>
  );
}
