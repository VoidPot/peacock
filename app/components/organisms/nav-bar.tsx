import classNames from "classnames";
import SideBySideBrand from "../atoms/svg/side-by-side-brand";

function NavBar({ isOpen, setOpen }: any) {
  return (
    <nav
      className="relative mx-2 flex grow flex-col flex-wrap items-center justify-between rounded-2xl px-0 py-2 shadow-none transition-all duration-250 ease-soft-in lg:mx-6 lg:flex-nowrap lg:justify-start"
      navbar-scroll="true"
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 py-1 flex-wrap-inherit lg:px-0">
        <nav>
          <ol className="mr-12 flex flex-wrap rounded-lg bg-transparent pt-1 sm:mr-16">
            <li className="text-sm leading-normal">
              <span className="text-slate-700 opacity-50">Pages</span>
            </li>
            <li
              className="pl-2 text-sm capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
        </nav>

        <div className="mt-2 flex items-center sm:mr-6 sm:mt-0 md:mr-0 lg:flex lg:basis-auto">
          <ul className="mb-0 flex list-none flex-row justify-end pl-0 md-max:w-full">
            <li className="flex items-center pl-4 xl:hidden">
              <button
                className="ease-nav-brand block p-0 text-sm text-slate-500 transition-all"
                onClick={() => setOpen(!isOpen)}
              >
                <div className="w-4.5 overflow-hidden">
                  <i
                    className={classNames(
                      "relative mb-0.75 block h-0.5 rounded-sm bg-slate-500 transition-all ease-soft",
                      {
                        "translate-x-[5px]": isOpen,
                      }
                    )}
                  ></i>
                  <i className="relative mb-0.75 block h-0.5 rounded-sm bg-slate-500 transition-all ease-soft"></i>
                  <i
                    className={classNames(
                      "relative block h-0.5 rounded-sm bg-slate-500 transition-all ease-soft",
                      {
                        "translate-x-[5px]": isOpen,
                      }
                    )}
                  ></i>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;