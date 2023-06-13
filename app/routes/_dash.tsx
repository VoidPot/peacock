import { Outlet } from "@remix-run/react";
import { useState } from "react";
import NavBar from "~/components/organisms/nav-bar";
import SideBar from "~/components/organisms/side-bar";

export default function NotesPage() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <SideBar isOpen={isOpen} setOpen={setOpen} />
      <main className="relative h-full overflow-x-hidden transition-all duration-200 ease-soft-in-out lg:mb-0 xl:ml-[300px]">
        <NavBar isOpen={isOpen} setOpen={setOpen} />
        <div className="mx-auto flex w-full flex-col gap-4 px-6 py-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}
