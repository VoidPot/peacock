import { yupResolver } from "@hookform/resolvers/yup";
import type * as yup from "yup";
import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useOutletContext,
} from "@remix-run/react";
import { getValidatedFormData } from "remix-hook-form";
import TransactionForm from "~/components/forms/transaction-form";
import { prisma } from "~/db.server";
import { responseData, validateLocalDate } from "~/helpers/utils";
import { getUserSelect } from "~/models/user.server";
import configContext from "~/config/configContext";
import type { Transaction } from ".prisma/client";
import { useEffect } from "react";
import { getIsLoggedIn } from "~/session.server";

const { schema } = configContext;
type FormData = yup.InferType<typeof schema.transaction>;

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect("/transaction");
  }
  const userSelect = await getUserSelect();
  return json({
    userSelect,
  });
};

export async function action({ request }: any) {
  try {
    const { errors, data } = await getValidatedFormData<FormData>(
      request,
      yupResolver(schema.transaction) as any
    );

    if (errors) {
      return responseData({ errors, success: false, message: "default" });
    }

    const transaction = {
      mode: data.mode,
      dot: validateLocalDate(data.dot),
      fromId: Number(data.from),
      toId: Number(data.to),
      amount: Number(data.amount) || 0,
      note: data.note || "",
    } as unknown as Transaction;

    const created = await prisma.transaction.create({
      data: {
        ...transaction,
      },
    });
    return responseData({
      success: true,
      message: "transactionCreated",
      data: created,
    });
  } catch (err) {
    console.error(err);
    return responseData({
      success: false,
      message: "transactionCreateError",
      data: {},
    });
  }
}

export default function TransactionAddPage() {
  const navigate = useNavigate();
  const { setAlert }: any = useOutletContext();

  const { userSelect } = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();

  useEffect(() => {
    console.log({ data });
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
          <TransactionForm className="z-990 p-0" userSelect={userSelect} />
        </div>
      </dialog>
    </>
  );
}
