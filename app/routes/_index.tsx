import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import StackedBrand from "~/components/atoms/svg/stacked-brand";

export const meta: V2_MetaFunction = () => [{ title: "Peacock Club" }];

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-base-100 px-8 align-middle">
      <div className="m-auto flex max-w-lg flex-col gap-4">
        <StackedBrand />
        <h1 className="hidden">Peacock Club</h1>
        <p className="hidden"> Creating the environment for business</p>

        <Link to={"/home"} className="btn-primary btn-block btn mt-4">
          View Dashboard
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
