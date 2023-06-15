import classNames from "classnames";
// import StackedBrand from "../atoms/svg/stacked-brand";
import { Link } from "@remix-run/react";
import MenuItem from "../molecules/menu-item";

function SideBar({ isOpen, setOpen }: any) {
  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className={classNames(
          "fixed left-0 top-0 z-110 h-screen w-screen bg-secondary bg-gradient-to-r from-slate-600 to-base-300 opacity-60",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
      ></div>
      <aside
        className={classNames(
          "ease-nav-brand fixed z-990 m-0 block h-full max-h-screen w-[300px] flex-wrap items-center justify-between border-0 p-6 pr-0 transition-transform duration-200 md:pl-8 xl:left-0 xl:translate-x-0",
          {
            "translate-x-0": isOpen,
            "-translate-x-[300px]": !isOpen,
          }
        )}
      >
        <div className="flex h-full flex-col rounded-md bg-base-100 shadow-soft-xl">
          <div className="h-fit py-10 text-center">
            <Link
              to={"/"}
              className="m-auto block select-none whitespace-nowrap text-sm text-slate-700"
            >
              <h1 className="m-0 p-0 font-brand text-2xl uppercase tracking-normal text-primary">
                Peacock Club
              </h1>
            </Link>
          </div>

          <hr className="mt-0 h-px bg-transparent bg-gradient-to-r from-transparent via-black/90 to-transparent" />
          <div className="block h-auto w-full basis-full overflow-y-auto">
            <ul className="mb-0 flex h-min w-full flex-col pl-0">
              <li className="w-full">
                <MenuItem
                  onClick={() => setOpen(false)}
                  pathName="/home"
                  hed="Home"
                  iconName="home"
                />
              </li>
              <li className="w-full">
                <MenuItem
                  onClick={() => setOpen(false)}
                  pathName="/transaction"
                  hed="Transaction"
                  iconName="trans"
                />
              </li>
              <li className="w-full">
                <MenuItem
                  onClick={() => setOpen(false)}
                  pathName="/admin-panel"
                  hed="Admin Panel"
                  iconName="setting"
                />
              </li>

              <li className="mt-4 w-full">
                <h6 className="ml-2 pl-6 text-xs font-bold uppercase leading-tight opacity-80">
                  Account pages
                </h6>
              </li>

              <li className="w-full">
                <MenuItem
                  onClick={() => setOpen(false)}
                  pathName="/member"
                  hed="Members"
                  iconName="member"
                />
              </li>

              <li className="w-full">
                <MenuItem
                  onClick={() => setOpen(false)}
                  pathName="/vendor"
                  hed="Vendors"
                  iconName="archive"
                />
              </li>
            </ul>
          </div>

          {/* <div className="block h-auto w-auto items-center overflow-y-auto">
           
          </div> */}
        </div>
      </aside>
    </>
  );
}

export default SideBar;
