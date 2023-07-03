import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { getIsLoggedIn } from "~/session.server";
import { getUserFindFirst } from "~/models/user.server";
import { responseData } from "~/helpers/utils";
import { useRemixForm } from "remix-hook-form";
import {
  getInterLinkObject,
  setInterLinkObject,
} from "~/models/inter-link.server";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const loader = async ({ request, params }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect("/vendor");
  }
  const id = Number(params.id || 0);

  const vendor = await getUserFindFirst(id, "VENDOR");
  if (!vendor) {
    return redirect("/vendor");
  }

  const { membersValue, members } = await getInterLinkObject(id);

  return json({
    vendor,
    members,
    membersValue,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  try {
    const id = Number(params.id) || 0;
    const formData = await request.formData();
    const data = formData.get("formData");

    const parsedData = JSON.parse(data as any);

    await setInterLinkObject(id, parsedData as any);

    return responseData({
      success: true,
      message: "transactionEdited",
      data: { id },
    });
  } catch (err) {
    console.error(err);
    return responseData({
      success: false,
      message: "transactionEditError",
    });
  }
};

export default function TransactionAddPage() {
  const { members, vendor, membersValue } = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.message) {
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    }
    if (data?.success) {
      navigate("/vendor");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { register, handleSubmit } = useRemixForm<FormData | any>({
    mode: "onSubmit",
    defaultValues: membersValue,
  });

  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box bg-white">
          <h6 className="text-center font-normal text-neutral">
            Select the users you want to exclude them from this vendor profit
          </h6>
          <h5 className="text-center">
            {vendor.id} - {vendor.firstName} {vendor.lastName}
          </h5>

          <Form
            method="post"
            className="flex h-full w-full flex-col px-2"
            onSubmit={handleSubmit}
          >
            <div className="grid w-full grow grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2">
              {members.map((e, i) => (
                <div className="form-control col-span-1 border-b-2" key={i}>
                  <label className="label flex cursor-pointer gap-3">
                    <span className="label-text">
                      {e.id} - {e.firstName} {e.lastName}
                    </span>
                    <input
                      type="checkbox"
                      // name={e.id.toString()}
                      className="toggle-error toggle"
                      {...register(e.id.toString())}
                    />
                  </label>
                </div>
              ))}
            </div>
            <div className="col-span-full mt-4 flex justify-between gap-2 align-middle">
              <Link to={"/vendor"} className="btn-outline btn-sm btn px-6">
                Cancel
              </Link>
              <button type="submit" className="btn-primary btn-sm btn px-6">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </dialog>
    </>
  );
}
