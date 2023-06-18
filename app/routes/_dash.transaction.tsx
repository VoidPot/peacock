import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import classNames from "classnames";
import { getFirstLetterUpperCase } from "~/helpers/utils";
import { findTransaction } from "~/models/transaction.server";
import { getUserSelect } from "~/models/user.server";

export const loader = async ({ request }: LoaderArgs) => {
  const users = await getUserSelect();
  const items = await findTransaction();
  return json({
    items,
    users,
  });
};

export default function TransactionPage() {
  const { items, users } = useLoaderData<typeof loader>();
  console.log({ items });
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-none">
          <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-md border-0 border-solid border-transparent bg-white bg-clip-border shadow-soft-xl">
            <div className="border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent bg-white p-6 pb-0">
              <h6 className="text-neutral">Transaction Table</h6>
              <div className="join">
                <select className="select-bordered select  input-xs join-item">
                  <option disabled selected>
                    From
                  </option>
                  {users.map((e, i) => (
                    <option key={i} value={e.id}>
                      {e.firstName} {e.lastName}
                    </option>
                  ))}
                </select>
                <select className="select-bordered select  input-xs join-item">
                  <option disabled selected>
                    To
                  </option>
                  {users.map((e, i) => (
                    <option key={i} value={e.id}>
                      {e.firstName} {e.lastName}
                    </option>
                  ))}
                </select>
                <select className="select-bordered select  input-xs join-item">
                  <option disabled selected>
                    Method
                  </option>
                  <option>Sci-fi</option>
                  <option>Drama</option>
                  <option>Action</option>
                </select>
                <select className="select-bordered select  input-xs join-item">
                  <option disabled selected>
                    Transaction Type
                  </option>
                  <option>Transfer</option>
                  <option>DEPOSIT</option>
                  <option>WITHDRAWAL</option>
                </select>
                <select className="select-bordered select  input-xs join-item">
                  <option disabled selected>
                    Sort By
                  </option>
                  <option value={"recently-added"}>Added Date</option>
                  <option value={"recent"}>Transaction Date</option>
                </select>
                <select className="select-bordered select  input-xs join-item">
                  <option disabled selected>
                    Order By
                  </option>
                  <option value={"ace"}>⬆ Ascending</option>
                  <option value={"dce"}>⬇ Descending</option>
                </select>
                <button className="join-item btn">Search</button>
              </div>
            </div>
            <div className="flex-auto px-0 pb-2 pt-0">
              <div className="overflow-x-auto p-0">
                <table className="mb-0 table w-full items-center border-gray-200 align-top text-slate-500">
                  <thead className="px-4 align-bottom">
                    <tr>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-5 py-3 text-left align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        From
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Amount
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Type
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        To
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Transaction At
                      </th>
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Added At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(({ from, to, ...transaction }, index) => (
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
                                src={`https://file.iam-hussain.site/peacock/image/${from.avatar}`}
                                className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-soft-in-out"
                                alt="user1"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">
                                {from.firstName} {from.lastName}
                              </h6>
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
                            {transaction.amount$}
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
                          <span className="text-xs font-semibold capitalize leading-tight text-slate-500">
                            {getFirstLetterUpperCase(transaction.type)}
                          </span>
                        </td>

                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <div className="flex items-center justify-center px-2 py-1">
                            {/* <div>
                              <img
                                src={`https://file.iam-hussain.site/peacock/image/${from.avatar}`}
                                className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-soft-in-out"
                                alt="user1"
                              />
                            </div> */}
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">
                                {from.firstName} {from.lastName}
                              </h6>
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
                            {transaction.dot$}
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
                            {transaction.createdAt$}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex w-full max-w-full items-center justify-center pb-4">
              <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 22</button>
                <button className="join-item btn">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
