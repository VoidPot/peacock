import { Outlet } from "@remix-run/react";
import { useState } from "react";
import NavBar from "~/components/organisms/nav-bar";
import SideBar from "~/components/organisms/side-bar";

export default function NotesPage() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <SideBar isOpen={isOpen} setOpen={setOpen} />
      <main className="relative h-full bg-neutral-100 transition-all duration-200 ease-soft-in-out lg:mb-0 xl:ml-68.5 ">
        <NavBar isOpen={isOpen} setOpen={setOpen} />
        <div className="mx-auto flex w-full flex-col gap-4 px-4 py-6 lg:px-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
