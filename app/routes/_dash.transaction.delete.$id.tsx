import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
  useOutletContext,
} from "@remix-run/react";
import { useEffect } from "react";
import { prisma } from "~/db.server";
import { responseData } from "~/helpers/utils";

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

    return responseData({
      success: true,
      message: "transactionDeleted",
    });
  } catch (err) {
    console.error(err);
    return responseData({
      success: false,
      message: "transactionDeleteError",
    });
  }
}

export default function TransactionPage() {
  const navigate = useNavigate();
  const { setAlert }: any = useOutletContext();

  const { id } = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();

  useEffect(() => {
    if (data?.success) {
      setAlert(data);
      navigate("/transaction");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
