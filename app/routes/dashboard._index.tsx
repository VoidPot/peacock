import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGroups } from "~/models/group.server";
import { getOneSummary, getSummaries } from "~/models/summary.server";
import { getMembersCount } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const groups = await getGroups();
  const summaries = await getSummaries();
  const summary = await getOneSummary({ type: "DEFAULT" });
  const membersCount = await getMembersCount();
  console.log({ summaries });
  return json({ summaries, groups, summary, membersCount });
};

function monthDiff(d1: any, d2: any) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export default function IndexPage() {
  const { groups, summaries, membersCount, summary } =
    useLoaderData<typeof loader>();
  console.log({ groups, summaries, membersCount, summary });
  return (
    <div className="h-full w-full">
      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="shadow-xs rounded-lg border bg-white dark:bg-gray-800">
          <div className="flex items-center justify-start p-3">
            <div className="mr-4 rounded-full bg-green-100 p-3 text-[#349b7b]">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-medium uppercase text-gray-600 dark:text-gray-400">
                Members
              </p>
              <p className="font-sans text-2xl font-semibold text-gray-700 dark:text-gray-200">
                {membersCount}
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-xs rounded-lg border bg-white dark:bg-gray-800">
          <div className="flex items-center justify-start p-3">
            <div className="mr-4 rounded-full bg-green-100 p-3 text-[#349b7b]">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-medium uppercase text-gray-600 dark:text-gray-400">
                Started
              </p>
              <p className="font-sans text-2xl font-semibold text-gray-700 dark:text-gray-200">
                {new Date("09/01/2020").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-xs rounded-lg border bg-white dark:bg-gray-800">
          <div className="flex items-center justify-start p-3">
            <div className="mr-4 rounded-full bg-green-100 p-3 text-[#349b7b]">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-medium uppercase text-gray-600 dark:text-gray-400">
                Months till
              </p>
              <p className="font-sans text-2xl font-semibold text-gray-700 dark:text-gray-200">
                {monthDiff(new Date("09/01/2020"), new Date())}
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-xs rounded-lg border bg-white dark:bg-gray-800">
          <div className="flex items-center justify-start p-3">
            <div className="mr-4 rounded-full bg-green-100 p-3 text-[#349b7b]">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-medium uppercase text-gray-600 dark:text-gray-400">
                Amount
              </p>
              <p className="font-sans text-2xl font-semibold text-gray-700 dark:text-gray-200">
                {summary?.holding.toLocaleString("en-IN") || 0} ₹
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
