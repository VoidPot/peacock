import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import classNames from "classnames";
import Icon from "~/components/svg/icon";
import { getMembersPassbook } from "~/models/user.server";
import { getIsLoggedIn } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);
  const items = await getMembersPassbook();
  return json({
    items,
    isLoggedIn,
  });
};

export default function MemberPage() {
  const { items, isLoggedIn } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <Outlet />
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-none">
          <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-md border-0 border-solid border-transparent bg-white bg-clip-border shadow-soft-xl">
            <div className="border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent bg-white p-6 pb-0">
              <div className="mb-2 flex items-center justify-between align-middle">
                <h6 className="m-0 text-neutral">Members Table</h6>
                {isLoggedIn && (
                  <Link
                    className="btn-ghost btn-square btn stroke-slate-500 hover:bg-white hover:stroke-secondary"
                    to={{
                      pathname: `/member/add`,
                    }}
                  >
                    <Icon name="add-box" className="h-6 w-6" />
                  </Link>
                )}
              </div>
            </div>
            <div className="flex-auto px-0 pb-2 pt-0">
              <div className="overflow-x-auto p-0">
                <table className="mb-0 table w-full items-center border-gray-200 align-top text-slate-500">
                  <thead className="px-4 align-bottom">
                    <tr>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-5 py-3 text-left align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Name
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        ID / Joined At
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Term / Other Deposit
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Term / Other Balance
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Profit / Tally
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Net Value
                      </th>
                      {isLoggedIn && (
                        <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((member, index) => (
                      <tr key={index}>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 align-middle shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src={`/image/${member.avatar}`}
                                className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-soft-in-out"
                                alt="user1"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">
                                {member.firstName} {member.lastName}
                              </h6>

                              {member.holdingAmount ? (
                                <p className="mb-0 text-xs leading-tight text-slate-500">
                                  {member.holdingAmount$}
                                </p>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.id}
                          </span>
                          <p className="mb-0 text-xs leading-tight text-slate-500">
                            {member.joinedAt$}
                          </p>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {member.accountBalance$}

                            {member.tallyDeposit ? (
                              <p className="mb-0 text-xs leading-tight text-slate-500">
                                {member.termDeposit$} + {member.tallyDeposit$}
                              </p>
                            ) : (
                              ""
                            )}
                          </span>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <span
                            className={classNames(
                              "text-xs font-semibold leading-tight",
                              {
                                "text-error": member.totalBalance > 0,
                                "text-info": member.totalBalance <= 0,
                              }
                            )}
                          >
                            {member.totalBalance$}
                            {member.tallyBalance ? (
                              <p className="mb-0 text-xs leading-tight text-slate-500">
                                {member.termBalance} + {member.tallyBalance$}
                              </p>
                            ) : (
                              ""
                            )}
                          </span>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                              "text-error": member.perMemberProfit > 0,
                              "text-info": member.perMemberProfit <= 0,
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight text-success">
                            {member.perMemberProfit$}
                          </span>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight text-info">
                            {member.netAmount$}
                          </span>
                        </td>
                        {isLoggedIn && (
                          <td
                            className={classNames(
                              "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm uppercase leading-normal shadow-transparent",
                              {
                                "border-b": index !== items.length - 1,
                              }
                            )}
                          >
                            <Link
                              to={{
                                pathname: `/member/edit/${member.id}`,
                              }}
                              className="btn-ghost btn-square btn w-auto stroke-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                            >
                              <Icon name="edit" className="h-4 w-4" />
                            </Link>
                            <Link
                              to={{
                                pathname: `/member/exit/${member.id}`,
                              }}
                              className="btn-ghost btn-square btn w-auto stroke-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                            >
                              <Icon name="delete" className="h-4 w-4" />
                            </Link>
                          </td>
                        )}
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
