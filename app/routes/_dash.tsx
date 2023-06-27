import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import NavBar from "~/components/organisms/nav-bar";
import SideBar from "~/components/organisms/side-bar";
import type { Icons } from "~/components/svg/icon";
import Icon from "~/components/svg/icon";
import { getIsLoggedIn } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);

  return json({ isLoggedIn });
};

export default function DashTemplate() {
  const { isLoggedIn } = useLoaderData<typeof loader>();
  const [alert, setAlert]: any = useState({});
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert();
      }, 10000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);

  const state = alert?.success ? "success" : "error";

  return (
    <>
      <div className="fixed left-0 right-0 top-0 -z-100 h-full w-full bg-gradient-to-tr from-base-100 to-blue-100"></div>
      <SideBar isOpen={isOpen} setOpen={setOpen} isLoggedIn={isLoggedIn} />
      {alert?.message && (
        <div
          className={`alert alert-${state} fixed left-4 right-4 top-8 z-990 flex w-auto lg:left-[unset]`}
        >
          <Icon
            className="h-6 w-6 shrink-0 stroke-current"
            name={state as keyof typeof Icons}
          />
          <span>{alert?.message}</span>
        </div>
      )}

      <main className="relative h-full transition-all duration-200 ease-soft-in-out md:px-6 lg:mb-0 xl:ml-[300px]">
        <NavBar isOpen={isOpen} setOpen={setOpen} />

        <div className="mx-auto flex w-full flex-col gap-8 p-6 pt-4">
          <Outlet context={{ alert, setAlert }} />
        </div>
      </main>
    </>
  );
}
