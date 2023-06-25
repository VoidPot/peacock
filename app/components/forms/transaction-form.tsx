import { Link, useSubmit } from "@remix-run/react";
import classNames from "classnames";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import configContext from "~/config/configContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "@remix-run/react";

import { TextInput, SelectInput } from "../inputs";
import moment from "moment";
import { useEffect, useState } from "react";
import type { getUserSelect } from "~/models/user.server";
import type { findOneTransaction } from "~/models/transaction.server";

const { transaction: transactionConfig, message } = configContext;

const schema = yup
  .object({
    note: yup.string().optional(),
    mode: yup.string().required(message.required),
    dot: yup
      .string()
      .required(message.required)
      .matches(
        /(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))/,
        message.invalidDate
      )
      .test("dot", message.invalidDate, function (value) {
        return moment(value, "DD/MM/YYYY").isValid();
      }),
    from: yup.string().required(message.required),
    to: yup.string().required(message.required),
    amount: yup
      .number()
      .typeError(message.number)
      .min(1)
      .max(10000000)
      .required(message.required),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const key = {
  sender: "Person sending money",
  receiver: "Person receiving money",
  exit: "Person going out of club",
};

function TransactionForm({
  className,
  userSelect,
  transaction,
}: {
  className: string;
  userSelect: Awaited<ReturnType<typeof getUserSelect>>;
  transaction?: Awaited<ReturnType<typeof findOneTransaction>>;
}) {
  const id = transaction?.id || 0;
  const usersOptions = userSelect.map((e) => [
    e.id,
    `${e.firstName} ${e.lastName}`,
    e.type,
  ]);
  // const response = useActionData<typeof action>();

  const submit = useSubmit();
  const memberOptions = usersOptions.filter((e) => e[2] === "MEMBER");
  const vendorOptions = usersOptions.filter((e) => e[2] === "VENDOR");

  const [fromToOptions, setFromToOptions] = useState([
    usersOptions,
    usersOptions,
  ]);
  const [fromToNote, setFromToNote] = useState([key.sender, key.receiver]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: yupResolver(schema),
    defaultValues:
      transaction && Object.values(transaction).length
        ? transaction
        : {
            dot: moment().format("DD/MM/YYYY"),
          },
  });
  const onSubmit: SubmitHandler<FormData> = (data, event) => {
    console.log({ data, event });
    submit(event?.target, { method: "post" });

    // response(data);
  };
  const selectedMode = watch("mode");

  useEffect(() => {
    if (
      [
        "MEMBERS_PERIODIC_DEPOSIT",
        "MEMBERS_WITHDRAW",
        "NEW_MEMBER_PAST_TALLY",
        "INTER_CASH_TRANSFER",
        "MEMBER_EXIT_WITHDRAW",
        "MEMBER_EXIT_PROFIT_WITHDRAW",
      ].includes(selectedMode)
    ) {
      setFromToOptions([memberOptions, memberOptions]);
    } else if (
      ["OTHER_EXPENDITURE", "VENDOR_PERIODIC_INVEST", "VENDOR_INVEST"].includes(
        selectedMode
      )
    ) {
      setFromToOptions([memberOptions, vendorOptions]);
    } else if (
      ["VENDOR_PERIODIC_RETURN", "VENDOR_RETURN"].includes(selectedMode)
    ) {
      setFromToOptions([vendorOptions, memberOptions]);
    } else {
      setFromToOptions([usersOptions, usersOptions]);
    }

    if (
      ["MEMBER_EXIT_WITHDRAW", "MEMBER_EXIT_PROFIT_WITHDRAW"].includes(
        selectedMode
      )
    ) {
      setFromToNote([key.sender, key.exit]);
    } else {
      setFromToNote([key.sender, key.receiver]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode]);

  return (
    <div
      className={classNames(
        "relative flex min-w-0 flex-col break-words rounded-md bg-white bg-clip-border",
        {
          [className]: Boolean(className),
        }
      )}
    >
      <div className="bg-white pb-0">
        <div className="mb-2 flex items-center justify-between align-middle">
          <h6 className="text-neutral">{id ? "Edit" : "Add"} Transaction</h6>
        </div>
      </div>

      <Form
        // method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 items-center justify-center gap-4 px-0 pb-2 pt-0 align-middle lg:grid-cols-6"
      >
        <input
          name="id"
          className="hidden"
          defaultValue={transaction?.id || 0}
        />
        <SelectInput
          title="Transaction Mode"
          className="col-span-1 lg:col-span-4"
          options={Object.entries(transactionConfig.mode)}
          register={register}
          name="mode"
          errors={errors}
        />

        <TextInput
          title="Date of Transaction"
          className="col-span-1 lg:col-span-2"
          placeholder="20/12/2023"
          register={register}
          name="dot"
          errors={errors}
        />

        <SelectInput
          title={`Transaction From <span class="text-xs text-slate-500">(${fromToNote[0]})</span>`}
          className="col-span-1 lg:col-span-3"
          options={fromToOptions[0] as [string, string][]}
          register={register}
          {...register("from")}
          name="from"
          errors={errors}
        />

        <SelectInput
          title={`Transaction To <span class="text-xs text-slate-500">(${fromToNote[1]})</span>`}
          className="col-span-1 lg:col-span-3"
          options={fromToOptions[1] as [string, string][]}
          register={register}
          name="to"
          errors={errors}
        />

        <TextInput
          title="Amount"
          className="col-span-1 lg:col-span-2"
          placeholder="1000"
          register={register}
          name="amount"
          type="number"
          errors={errors}
        />

        <TextInput
          title="Note"
          className="col-span-1 lg:col-span-4"
          placeholder="Some message..."
          register={register}
          name="note"
          errors={errors}
        />

        <div className="col-span-full mt-4 flex justify-between gap-2 align-middle">
          <Link to={"/transaction"} className="btn-outline btn-sm btn px-6">
            Cancel
          </Link>
          <button type="submit" className="btn-primary btn-sm btn px-6">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default TransactionForm;
