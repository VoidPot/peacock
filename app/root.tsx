import { cssBundleHref } from "@remix-run/css-bundle";
import type { MetaFunction,LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import "react-datepicker/dist/react-datepicker.css";

import stylesheet from "~/tailwind.css";


export const meta: MetaFunction = () => {
  return {
    title: "Peacock Club",
    description: "Creating the environment for business",
    "og:title": "Peacock Club",
    "og:description":"Creating the environment for business",
    "og:image": "https://peacock.iam-hussain.site/peacock.png",
  };
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en" className="h-full w-full" data-theme="myTheme">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full bg-base-100 bg-transparent font-body text-base font-normal leading-default text-neutral-500 antialiased">
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
