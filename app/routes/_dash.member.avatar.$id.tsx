import fs from "fs-extra";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import {
  json,
  redirect,
  unstable_createFileUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { toast } from "react-toastify";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import { prisma } from "~/db.server";
import { getIsLoggedIn } from "~/session.server";
import { findUserWithPassbook } from "~/models/user.server";
import sharp from "sharp";
import { responseData } from "~/helpers/utils";

export const loader = async ({ request, params }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect("/member");
  }
  const id = Number(params.id || 0);

  const user = await findUserWithPassbook(id, "MEMBER");
  if (!user) {
    return redirect("/member");
  }

  return json({
    user,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  try {
    const directory = `${process.cwd()}/public/image`;
    const uploadHandler = unstable_createFileUploadHandler({
      directory,
      file: ({ filename }) => {
        const name = filename.split(".");
        return `upload_${new Date().getTime()}.${name[name.length - 1]}`;
      },
      maxPartSize: 50_000_000,
    });

    const formData = await unstable_parseMultipartFormData(
      request,
      uploadHandler
    );

    const file = formData.get("avatar") as File;
    const existingAvatar = formData.get("existingAvatar");

    const tempURL = `${directory}/${file.name}`;
    const fileName = `avatar_${params.id}_${new Date().getTime()}.webp`;
    const filePath = `${directory}/${fileName}`;
    const existingAvatarPath = `${directory}/${existingAvatar}`;

    console.log({
      url: `${directory}${file.name}`,
      file,
      size: file.size,
      name: file.name,
      fileName,
      filePath,
      existingAvatar,
      existingAvatarPath,
    });

    await sharp(tempURL).resize(200, 200).webp().toFile(filePath); //webp

    fs.remove(tempURL);

    if (existingAvatar !== "no_image_available.jpeg") {
      fs.remove(existingAvatarPath);
    }

    await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: {
        avatar: fileName,
      },
    });

    return responseData({
      success: true,
      message: "avatarUpdate",
      data: { id: Number(params.id), filePath, fileName },
    });
  } catch (err) {
    console.error(err);
    return responseData({
      success: false,
      message: "avatarUpdateError",
    });
  }
};

export default function TransactionAddPage() {
  const navigate = useNavigate();

  const { user } = useLoaderData<typeof loader>();
  // const data = useActionData<typeof action>();

  // useEffect(() => {
  //   if (data?.message) {
  //     if (data?.success) {
  //       toast.success(data?.message);
  //     } else {
  //       toast.error(data?.message);
  //     }
  //   }
  //   if (data?.success) {
  //     navigate("/member");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  return (
    <>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box flex flex-col items-center justify-center gap-4 bg-white align-middle">
          <div className="flex flex-col items-center justify-center align-middle">
            <div className="mb-2 text-center">
              <p className="m-0 p-0 text-center text-sm font-normal text-neutral">
                Choose a image and upload to change the avatar image
              </p>
            </div>
            <img
              src={`/image/${user.avatar}`}
              className="m-0 inline-flex h-52 w-52 items-center justify-center rounded-xl border-2 text-sm text-white transition-all duration-200 ease-soft-in-out"
              alt="user1"
            />
            <div className="text-center">
              <p className="m-0 p-0 text-neutral">
                {user.firstName} {user.lastName} - {user.id}
              </p>
            </div>
          </div>
          <Form method="post" encType="multipart/form-data">
            <input
              type="text"
              className="hidden"
              name="existingAvatar"
              value={user.avatar || ""}
            />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              className="file-input-bordered file-input-accent file-input w-full max-w-xs"
            />
            <div className="col-span-full mt-6 flex justify-between gap-2 align-middle ">
              <Link to={`/member`} className="btn-outline btn-sm btn px-6">
                Close
              </Link>
              <button type="submit" className="btn-success btn-sm btn px-6">
                Upload
              </button>
            </div>
          </Form>
        </div>
      </dialog>
    </>
  );
}
