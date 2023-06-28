import { Link } from "@remix-run/react";
import { useRemixForm } from "remix-hook-form";
import classNames from "classnames";
import configContext from "~/config/configContext";
import { yupResolver } from "@hookform/resolvers/yup";
import type * as yup from "yup";
import { Form } from "@remix-run/react";

import { TextInput } from "../inputs";
import moment from "moment";
import type { getUserById, getUserSelect } from "~/models/user.server";

const { schema } = configContext;

type FormData = yup.InferType<typeof schema.member>;

function MemberForm({
  className,
  member,
}: {
  className: string;
  member?: Awaited<ReturnType<typeof getUserById>>;
}) {
  const id = member?.id || 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRemixForm<FormData | any>({
    resolver: yupResolver(schema.member),
    mode: "onSubmit",
    defaultValues:
      member && Object.values(member).length
        ? member
        : {
            joinedAt: moment().format("DD/MM/YYYY"),
          },
  });

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
          <h6 className="text-neutral">
            {id ? "Edit" : "Add"} Member{" "}
            <span className="text-secondary">{id ? ` - ID:${id}` : ""}</span>
          </h6>
        </div>
      </div>

      <Form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 items-center justify-center gap-4 px-0 pb-2 pt-0 align-middle lg:grid-cols-6"
      >
        <input name="id" className="hidden" defaultValue={member?.id || 0} />

        <TextInput
          title="First Name"
          className="col-span-1 lg:col-span-3"
          placeholder="Enter first name"
          register={register}
          name="firstName"
          errors={errors}
        />

        <TextInput
          title="Last Name"
          className="col-span-1 lg:col-span-3"
          placeholder="Enter last name"
          register={register}
          name="lastName"
          errors={errors}
        />

        <TextInput
          title="Email"
          className="col-span-1 lg:col-span-3"
          placeholder="Enter Email ID"
          register={register}
          name="email"
          errors={errors}
        />

        <TextInput
          title="Mobile Number"
          className="col-span-1 lg:col-span-3"
          placeholder="Enter mobile number"
          register={register}
          name="mobileNumber"
          errors={errors}
        />

        <TextInput
          title="Slug"
          className="col-span-1 lg:col-span-3"
          placeholder="Enter slug"
          register={register}
          name="nickName"
          errors={errors}
        />

        <TextInput
          title="Date of Join"
          className="col-span-1 lg:col-span-3"
          placeholder="20/12/2023"
          register={register}
          name="joinedAt"
          errors={errors}
        />

        <div className="col-span-full mt-4 flex justify-between gap-2 align-middle">
          <Link to={"/member"} className="btn-outline btn-sm btn px-6">
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

export default MemberForm;
