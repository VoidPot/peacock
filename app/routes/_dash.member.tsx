import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMemberSummaryAmount, getMonthYear } from "~/helpers/utils";
import { getGroups } from "~/models/group.server";
import { getOneSummary, getSummaries } from "~/models/summary.server";
import { getMembersCount, getMembersWithSummary } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const members = await getMembersWithSummary();
  return json({ members });
};

export default function IndexPage() {
  const { members } = useLoaderData<typeof loader>();
  console.log({ members });
  return (
    <div className="h-full w-full">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full max-w-full flex-none px-3">
          <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid border-transparent bg-white bg-clip-border shadow-soft-xl">
            <div className="border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent bg-white p-6 pb-0">
              <h6>Authors table</h6>
            </div>
            <div className="flex-auto px-0 pb-2 pt-0">
              <div className="overflow-x-auto p-0">
                <table className="mb-0 w-full items-center border-gray-200 align-top text-slate-500">
                  <thead className="px-4 align-bottom">
                    <tr>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-left align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Name
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Joined At
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Term Deposit
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Deposit
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Balance
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Profit
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Net Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap border-b bg-transparent p-2 align-middle shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src={`https://file.iam-hussain.site/peacock/image/${member.avatar}`}
                                className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-soft-in-out"
                                alt="user1"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">
                                {member.firstName} {member.lastName}
                              </h6>

                              {member.userPassbook.holdingAmount ? (
                                <p className="mb-0 text-xs leading-tight text-slate-500">
                                  {member.userPassbook?.holdingAmountInRupee}
                                </p>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.formattedJoinedAt}
                          </span>
                        </td>
                        <td className="whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.userPassbook.termDepositInRupee}
                          </span>
                        </td>

                        <td className="whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.userPassbook.depositInRupee}
                          </span>
                        </td>
                        <td className="whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.userPassbook.balanceInRupee}
                          </span>
                        </td>
                        <td className="whitespace-nowrap border-b bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.userPassbook.eachPersonProfitInRupee}
                          </span>
                        </td>
                        <td className="whitespace-nowrap border-b bg-transparent p-2 text-center align-middle shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.userPassbook.netAmountInRupee}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
