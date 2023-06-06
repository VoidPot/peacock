import classNames from "classnames";
import StackedBrand from "../atoms/svg/stacked-brand";
import { Link } from "@remix-run/react";
import MenuItem from "../molecules/menu-item";

function SideBar({ isOpen, setOpen }: any) {
  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className={classNames(
          "fixed left-0 top-0 z-110 h-screen w-screen bg-black opacity-60",
          {
            "translate-x-0 shadow-soft-xl": isOpen,
            "-translate-x-full shadow-none": !isOpen,
          }
        )}
      ></div>
      <aside
        className={classNames(
          "ease-nav-brand fixed inset-y-0 z-990 mx-4 my-4 block w-full max-w-62.5 flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent",
          {
            "translate-x-0 shadow-soft-xl": isOpen,
            "-translate-x-[275px] shadow-none": !isOpen,
          }
        )}
      >
        <div className="h-fit">
          <Link
            to={"/"}
            className="m-0 block whitespace-nowrap px-8 py-6 text-sm text-slate-700"
          >
            <StackedBrand />
          </Link>
        </div>

        <hr className="mt-0 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

        <div className="block h-min max-h-screen w-auto grow basis-full items-center overflow-auto">
          <ul className="mb-0 flex flex-col pl-0">
            <li className="mt-0.5 w-full">
              <MenuItem
                onClick={() => setOpen(false)}
                pathName="/home"
                hed="Home"
                iconName="home"
              />
            </li>
            <li className="mt-0.5 w-full">
              <MenuItem
                onClick={() => setOpen(false)}
                pathName="/transaction"
                hed="Transaction"
                iconName="trans"
              />
            </li>
            <li className="mt-0.5 w-full">
              <MenuItem
                onClick={() => setOpen(false)}
                pathName="/admin-panel"
                hed="Admin Panel"
                iconName="setting"
              />
            </li>

            <li className="mt-4 w-full">
              <h6 className="ml-2 pl-6 text-xs font-bold uppercase leading-tight opacity-60">
                Account pages
              </h6>
            </li>

            <li className="mt-0.5 w-full">
              <MenuItem
                onClick={() => setOpen(false)}
                pathName="/member"
                hed="Members"
                iconName="member"
              />
            </li>

            <li className="mt-0.5 w-full">
              <MenuItem
                onClick={() => setOpen(false)}
                pathName="/vendor"
                hed="Vendors"
                iconName="archive"
              />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
