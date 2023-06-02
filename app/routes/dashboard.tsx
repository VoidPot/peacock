import { Link, NavLink, Outlet } from "@remix-run/react";
import { Footer, Navbar } from "flowbite-react";
import SideBySideBrand from "~/components/atoms/svg/side-by-side-brand";
import BottomNav from "~/components/organisms/bottom-nav";

export default function NotesPage() {
  return (
    <div className="mb-10 flex h-auto min-h-screen w-full select-none flex-col items-center justify-center bg-white pb-[83px] align-middle">
      <nav className="hidden w-full border-b border-gray-200 bg-[#fbfbfb] lg:flex">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-4">
          <NavLink to={"/"} className="flex items-center">
            <span className="self-center whitespace-nowrap font-brand text-xl font-semibold uppercase text-[#349b7b]">
              Peacock Club
            </span>
          </NavLink>
        </div>
      </nav>
      <article className="grow bg-transparent p-6 text-gray-800 lg:p-8">
        <Outlet />
      </article>
      <BottomNav />
    </div>
  );
}
