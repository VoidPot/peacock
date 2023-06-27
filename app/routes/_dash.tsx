import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import NavBar from "~/components/organisms/nav-bar";
import SideBar from "~/components/organisms/side-bar";
import { getIsLoggedIn, getSessionData } from "~/session.server";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const loader = async ({ request }: LoaderArgs) => {
  const sessionAlert = await getSessionData(request, "ALERT");
  const isLoggedIn = await getIsLoggedIn(request);
  return json({ isLoggedIn, sessionAlert });
};

export default function DashTemplate() {
  const { isLoggedIn } = useLoaderData<typeof loader>();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={8000} />
      <div className="fixed left-0 right-0 top-0 -z-100 h-full w-full bg-gradient-to-tr from-base-100 to-blue-100"></div>
      <SideBar isOpen={isOpen} setOpen={setOpen} isLoggedIn={isLoggedIn} />
      <main className="relative h-full transition-all duration-200 ease-soft-in-out md:px-6 lg:mb-0 xl:ml-[300px]">
        <NavBar isOpen={isOpen} setOpen={setOpen} />

        <div className="mx-auto flex w-full flex-col gap-8 p-6 pt-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
