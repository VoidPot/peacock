import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import classNames from "classnames";
import { useMemo, useState } from "react";
import Icon from "~/components/svg/icon";
import { getVendorsWithSummary } from "~/models/user.server";
import { getIsLoggedIn } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await getIsLoggedIn(request);
  const items = await getVendorsWithSummary();
  return json({
    all: items,
    active: items.filter((e) => !e.deleted),
    isLoggedIn,
  });
};

export default function VendorPage() {
  const [fetchDeleted, setFetchDeleted] = useState(false);
  const { all, active, isLoggedIn } = useLoaderData<typeof loader>();

  const items = useMemo(() => {
    return fetchDeleted ? all : active;
  }, [all, active, fetchDeleted]);

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <Outlet />
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-none">
          <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-md border-0 border-solid border-transparent bg-white bg-clip-border shadow-soft-xl">
            <div className="border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent bg-white p-6 pb-0">
              <div className="mb-2 flex items-center justify-between align-middle">
                <h6 className="m-0 text-neutral">Vendor Table</h6>
                {isLoggedIn && (
                  <div className="flex items-center justify-center">
                    <div className="form-control w-52">
                      <label className="label cursor-pointer justify-center gap-2">
                        <span className="label-text">With Deleted</span>
                        <input
                          type="checkbox"
                          className="toggle-primary toggle"
                          onChange={(e: any) =>
                            setFetchDeleted(e.target.checked)
                          }
                        />
                      </label>
                    </div>
                    <Link
                      className="btn-ghost btn-square btn stroke-slate-500 hover:bg-white hover:stroke-secondary"
                      to={{
                        pathname: `/vendor/add`,
                      }}
                    >
                      <Icon name="add-box" className="h-6 w-6" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-auto px-0 pb-2 pt-0">
              <div className="overflow-x-auto p-0">
                <table className="mb-0 table w-full items-center border-gray-200 align-top text-slate-500">
                  <thead className="px-4 align-bottom">
                    <tr>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-5 py-3 text-left align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Name / ID
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Started At
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Term Months
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Total Invest
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Total Returns
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Profit
                      </th>
                      {isLoggedIn && (
                        <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((vendor, index) => (
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
                              {isLoggedIn && !vendor.deleted ? (
                                <Link to={`/vendor/avatar/${vendor.id}`}>
                                  <img
                                    src={`/image/${vendor.avatar}`}
                                    className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-in-out hover:scale-110"
                                    alt="user1"
                                  />
                                </Link>
                              ) : (
                                <img
                                  src={`/image/${vendor.avatar}`}
                                  className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-soft-in-out"
                                  alt="user1"
                                />
                              )}
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6
                                className={classNames(
                                  "mb-0 text-sm leading-normal",
                                  {
                                    "text-error": vendor.deleted,
                                    "text-neutral": !vendor.deleted,
                                  }
                                )}
                              >
                                {vendor.firstName} {vendor.lastName}
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-slate-500">
                                ID: {vendor.id}
                              </p>
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
                            {vendor.joinedAt$}
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
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {vendor.investMonths}
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
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {vendor.totalInvest$}
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
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {vendor.totalReturns$}
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
                          <span className="text-xs font-semibold leading-tight text-success">
                            {vendor.profit$}
                          </span>

                          {vendor.calcProfit ? (
                            <></>
                          ) : (
                            <p className="mb-0 text-xs leading-tight text-slate-500 ">
                              Not Calculated
                            </p>
                          )}
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
                            {!vendor.deleted ? (
                              <>
                                <Link
                                  to={{
                                    pathname: `/vendor/interlink/${vendor.id}`,
                                  }}
                                  className="btn-ghost btn-square btn w-auto fill-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                                >
                                  <Icon name="archive" className="h-4 w-4" />
                                </Link>
                                <Link
                                  to={{
                                    pathname: `/vendor/edit/${vendor.id}`,
                                  }}
                                  className="btn-ghost btn-square btn w-auto stroke-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                                >
                                  <Icon name="edit" className="h-4 w-4" />
                                </Link>
                                <Link
                                  to={{
                                    pathname: `/vendor/delete/${vendor.id}`,
                                  }}
                                  className="btn-ghost btn-square btn w-auto stroke-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                                >
                                  <Icon name="delete" className="h-4 w-4" />
                                </Link>
                              </>
                            ) : (
                              <span className="text-xs font-semibold leading-tight text-error">
                                Inactive
                              </span>
                            )}
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
