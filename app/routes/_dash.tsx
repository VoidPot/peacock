import { Outlet } from "@remix-run/react";
import { useState } from "react";
import NavBar from "~/components/organisms/nav-bar";
import SideBar from "~/components/organisms/side-bar";

export default function DashTemplate() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="fixed left-0 right-0 top-0 -z-100 h-full w-full bg-gradient-to-tr from-base-100 to-blue-100"></div>
      <SideBar isOpen={isOpen} setOpen={setOpen} />
      <main className="relative h-full overflow-x-hidden transition-all duration-200 ease-soft-in-out md:px-6 lg:mb-0 xl:ml-[300px]">
        <NavBar isOpen={isOpen} setOpen={setOpen} />
        <div className="mx-auto flex w-full flex-col gap-8 p-6 pt-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
