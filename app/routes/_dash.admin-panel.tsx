import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { getUserSelect } from "~/models/user.server";
import TransactionForm from "~/components/forms/transaction-form";
import configContext from "~/config/configContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

const { transaction: transactionConfig, message } = configContext;
const validateForm = async (formData: FormData) => {
  const getValidationErrors = (err: any) => {
    const validationErrors = {} as any;

    err.inner.forEach((error: any) => {
      if (error.path) {
        validationErrors[error.path] = error.message;
      }
    });

    return validationErrors;
  };

  // convert form into JSON object
  const formJSON: { [key: string]: any } = {};
  for (var key of formData.keys()) {
    formJSON[key] = formData.get(key);
  }

  // Yup schema for the object that I am trying to validate
  const projectSchema = yup
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

  // validate the object and throw error if not valid
  try {
    const project = await projectSchema.validate(formJSON, {
      abortEarly: false,
    });
    return project;
  } catch (error) {
    throw getValidationErrors(error);
  }
};

export const loader = async ({ request }: LoaderArgs) => {
  const users = await getUserSelect();

  return json({
    users,
    usersOptions: users.map((e) => [
      e.id,
      `${e.firstName} ${e.lastName}`,
      e.type,
    ]),
  });
};

export async function action({ request, ...data }: any) {
  console.log({ data, request });
  const formData = await request.formData();
  return json({ message: `Hello, wprld` });
  // try {
  //   // validate
  //   // const project = await validateForm(formData);
  //   //save
  //   return json({ message: `Hello, wprld`, project, formData });
  // } catch (errors) {
  //   return { errors };
  // }
}

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
