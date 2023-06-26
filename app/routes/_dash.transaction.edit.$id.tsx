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
import {
  formatLocalDate,
  responseData,
  validateLocalDate,
} from "~/helpers/utils";
import { getUserSelect } from "~/models/user.server";
import configContext from "~/config/configContext";
import type { Transaction } from ".prisma/client";
import { useEffect } from "react";
import { findOneTransaction } from "~/models/transaction.server";

const { schema } = configContext;
type FormData = yup.InferType<typeof schema.transaction>;

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

    const created = await prisma.transaction.update({
      data: {
        ...transaction,
      },
      where: {
        id: Number(data?.id || 0),
      },
    });
    return responseData({
      success: true,
      message: "transactionEdited",
      data: created,
    });
  } catch (err) {
    console.error(err);
    return responseData({
      success: false,
      message: "transactionEditError",
    });
  }
}

export default function TransactionEditPage() {
  const navigate = useNavigate();
  const { setAlert }: any = useOutletContext();

  const { userSelect, transaction } = useLoaderData<typeof loader>();
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
