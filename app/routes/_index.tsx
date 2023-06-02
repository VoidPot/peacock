import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Peacock Club" }];

export default function Index() {
  return (
    <div className="flex h-auto min-h-screen w-full select-none flex-col-reverse items-center justify-end bg-[#b8e1d6] align-middle lg:flex-row lg:justify-center lg:gap-20 lg:bg-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-t-3xl bg-white lg:w-1/2 lg:items-end">
        <div className="m-auto flex flex-col items-end gap-4 py-20 lg:mr-0">
          <h1 className="text-right font-serif text-3xl font-normal leading-normal text-gray-800 xl:text-5xl xl:leading-normal">
            Start your journey with <br />
            <span className="font-brand text-4xl font-black uppercase text-green-500 xl:text-6xl">
              Peacock Club
            </span>
          </h1>
          <Link
            to={"/dashboard"}
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#349b7b] hover:bg-[#2a7d63]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </Link>
        </div>
      </div>
      <div className="flex w-auto flex-grow items-center justify-center py-10 lg:w-1/2 lg:items-start lg:justify-start lg:py-0">
        <img
          className="h-auto max-h-80 w-auto rounded-md lg:h-auto lg:max-h-full lg:w-3/4"
          src="/peacock.png"
          alt="Peacock Bird"
        />
      </div>
    </div>
  );
}
