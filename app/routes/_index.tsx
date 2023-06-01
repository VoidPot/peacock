import { Link, NavLink, Outlet } from "@remix-run/react";
import { Navbar, Footer } from "flowbite-react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <div className="flex h-full w-full items-center justify-center align-middle gap-12 lg:flex-row flex-col-reverse">
      <div className="flex min-w-max gap-12 text-center lg:text-left">
        <h1 className="font-normal text-3xl lg:text-5xl text-gray-900 dark:text-white font-serif leading-normal lg:leading-normal">
          Start your journey with <br />
          <span className="text-4xl lg:text-6xl font-brand font-black uppercase text-green-500">
            Peacock Club
          </span>
        </h1>
      </div>
      <div className="w-3/5 lg:w-1/5 relative">
        <img
          className="w-full rounded-md"
          src="https://images.unsplash.com/photo-1536514900905-0d5511b9d489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=800&q=80"
          alt="Peacock Bird"
        />

          <div className="absolute bottom-0 left-0">
            <svg
              className="ml-auto h-auto w-2/3 text-white dark:text-gray-800"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="531"
                y="352"
                width="99"
                height="99"
                fill="currentColor"
              />
              <rect
                x="140"
                y="352"
                width="106"
                height="99"
                fill="currentColor"
              />
              <rect
                x="482"
                y="402"
                width="64"
                height="49"
                fill="currentColor"
              />
              <rect
                x="433"
                y="402"
                width="63"
                height="49"
                fill="currentColor"
              />
              <rect
                x="384"
                y="352"
                width="49"
                height="50"
                fill="currentColor"
              />
              <rect
                x="531"
                y="328"
                width="50"
                height="50"
                fill="currentColor"
              />
              <rect x="99" y="303" width="49" height="58" fill="currentColor" />
              <rect x="99" y="352" width="49" height="50" fill="currentColor" />
              <rect x="99" y="392" width="49" height="59" fill="currentColor" />
              <rect x="44" y="402" width="66" height="49" fill="currentColor" />
              <rect
                x="234"
                y="402"
                width="62"
                height="49"
                fill="currentColor"
              />
              <rect
                x="334"
                y="303"
                width="50"
                height="49"
                fill="currentColor"
              />
              <rect x="581" width="49" height="49" fill="currentColor" />
              <rect x="581" width="49" height="64" fill="currentColor" />
              <rect
                x="482"
                y="123"
                width="49"
                height="49"
                fill="currentColor"
              />
              <rect
                x="507"
                y="124r"
                width="49"
                height="24"
                fill="currentColor"
              />
              <rect x="531" y="49" width="99" height="99" fill="currentColor" />
            </svg>
          </div>
      </div>
    </div>
  );
}
