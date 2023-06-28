import { yupResolver } from "@hookform/resolvers/yup";
import type * as yup from "yup";
import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { toast } from "react-toastify";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "@remix-run/react";
import { getValidatedFormData } from "remix-hook-form";
import { prisma } from "~/db.server";
import { responseData, validateLocalDate } from "~/helpers/utils";
import configContext from "~/config/configContext";
import type { User } from ".prisma/client";
import { useEffect } from "react";
import { getIsLoggedIn } from "~/session.server";
import MemberForm from "~/components/forms/member-form";
import { getGroupsLinks } from "~/models/group.server";

const { schema } = configContext;
type FormData = yup.InferType<typeof schema.member>;

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect("/member");
  }
  return json({});
};

export async function action({ request }: any) {
  try {
    const { errors, data } = await getValidatedFormData<FormData>(
      request,
      yupResolver(schema.member) as any
    );

    if (errors) {
      return responseData({ errors, success: false, message: "default" });
    }

    const user = {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      mobileNumber: data.mobileNumber || "",
      nickName: data.nickName || "",
      avatar: "no_image_available.jpeg",
      type: "MEMBER",
      joinedAt: validateLocalDate(data.joinedAt),
    } as unknown as any;

    const groupLinks = await getGroupsLinks();

    const created = await prisma.user.create({
      data: {
        ...user,
        links: {
          createMany: {
            data: groupLinks,
            skipDuplicates: true,
          },
        },
        passbook: {
          create: {
            entryOf: "USER",
          },
        },
      },
    });
    return responseData({
      success: true,
      message: "memberCreated",
      data: created,
    });
  } catch (err) {
    console.error(err);
    return responseData({
      success: false,
      message: "memberCreateError",
    });
  }
}

export default function TransactionAddPage() {
  const navigate = useNavigate();

  const data = useActionData<typeof action>();

  useEffect(() => {
    if (data?.message) {
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    }
    if (data?.success) {
      navigate("/member");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box bg-white">
          <MemberForm className="z-990 p-0" />
        </div>
      </dialog>
    </>
  );
}
