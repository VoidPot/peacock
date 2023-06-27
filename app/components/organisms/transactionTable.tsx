import { Link } from "@remix-run/react";
import classNames from "classnames";
import { useNavigate } from "@remix-run/react";
import Icon from "../svg/icon";
import configContext from "~/config/configContext";
import type { getUserSelect } from "~/models/user.server";
import type { findTransaction } from "~/models/transaction.server";

const transactionConfig = configContext.transaction;

function TransactionTable({
  handleSetSearchParams,
  handleSelectOnChange,
  queryParams,
  users,
  items,
  isLoggedIn,
}: {
  handleSetSearchParams: any;
  handleSelectOnChange: any;
  queryParams: any;
  users: Awaited<ReturnType<typeof getUserSelect>>;
  items: Awaited<ReturnType<typeof findTransaction>>;
  isLoggedIn: Boolean;
}) {
  let navigate = useNavigate();
  return (
    <div className="flex flex-wrap">
      <div className="flex w-full max-w-full flex-col gap-6">
        <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-md bg-white bg-clip-border ">
          <div className="border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent bg-white p-6 pb-0">
            <div className="mb-2 flex items-center justify-between align-middle">
              <h6 className="m-0 text-neutral">Transaction Table</h6>
              <button
                type="button"
                onClick={() => navigate("add")}
                className="btn-ghost btn-square btn stroke-slate-500 hover:bg-white hover:stroke-secondary"
              >
                <Icon name="add-box" className="h-6 w-6" />
              </button>
            </div>
            <div className="block w-full overflow-x-auto">
              <div className="flex flex-row justify-start gap-4 py-4 lg:join lg:justify-center">
                <select
                  name="from"
                  onChange={handleSelectOnChange}
                  defaultValue={queryParams.from}
                  className="select-bordered select input-xs min-h-10 w-auto pl-4 pr-10 lg:join-item"
                >
                  <option disabled>From</option>
                  <option value={""}>From - ALL</option>
                  {users.map((e, i) => (
                    <option key={i} value={e.id}>
                      {e.firstName} {e.lastName}
                    </option>
                  ))}
                </select>
                <select
                  name="to"
                  onChange={handleSelectOnChange}
                  defaultValue={queryParams.to}
                  className="select-bordered select input-xs min-h-10 w-auto pl-4 pr-10 lg:join-item"
                >
                  <option disabled>To</option>
                  <option value={""}>To - ALL</option>
                  {users.map((e, i) => (
                    <option key={i} value={e.id}>
                      {e.firstName} {e.lastName}
                    </option>
                  ))}
                </select>
                <select
                  name="mode"
                  onChange={handleSelectOnChange}
                  defaultValue={queryParams.mode}
                  className="select-bordered select input-xs min-h-10 w-auto pl-4 pr-10 lg:join-item"
                >
                  <option disabled>Mode</option>
                  <option value={""}>Mode - ALL</option>
                  {Object.entries(transactionConfig.mode).map(
                    ([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    )
                  )}
                </select>
                <select
                  name="type"
                  onChange={handleSelectOnChange}
                  defaultValue={queryParams.type}
                  className="select-bordered select input-xs min-h-10 w-auto pl-4 pr-10 lg:join-item"
                >
                  <option disabled>Transaction Type</option>
                  <option value={""}>Transaction Type - ALL</option>
                  {Object.entries(transactionConfig.type).map(
                    ([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    )
                  )}
                </select>
                <select
                  name="sort"
                  onChange={handleSelectOnChange}
                  defaultValue={queryParams.sort}
                  className="select-bordered select input-xs min-h-10 w-auto pl-4 pr-10 lg:join-item"
                >
                  <option disabled>Sort By</option>
                  {Object.entries(transactionConfig.sortBy).map(
                    ([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    )
                  )}
                </select>
                <select
                  name="order"
                  onChange={handleSelectOnChange}
                  defaultValue={queryParams.order}
                  className="select-bordered select input-xs min-h-10 w-auto pl-4 pr-10 lg:join-item"
                >
                  <option disabled>Order By</option>
                  {Object.entries(transactionConfig.orderby).map(
                    ([key, value]) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="flex-auto px-0 pb-2 pt-0">
            <div className="overflow-x-auto p-0">
              <table className="mb-0 table w-full items-center border-gray-200 align-top text-slate-500">
                <thead className="px-4 align-bottom">
                  <tr>
                    <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-5 py-3 text-left align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                      From / To
                    </th>
                    <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                      Amount
                    </th>
                    <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                      Type / Mode
                    </th>
                    <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                      Transaction At
                    </th>
                    <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                      ID / Added At
                    </th>
                    {isLoggedIn && (
                      <th className="border-b-solid whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-center align-middle text-xxs font-bold uppercase tracking-none text-slate-500 opacity-70 shadow-none">
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {items.map(
                    ({ primary, secondary, ...transaction }, index) => (
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
                                src={`/image/${primary.avatar}`}
                                className="mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm text-white transition-all duration-200 ease-soft-in-out"
                                alt="user1"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">
                                {primary.firstName} {primary.lastName}
                              </h6>
                              <p className="mb-0 text-xs leading-tight text-slate-500">
                                {secondary.firstName} {secondary.lastName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                              "text-error": transaction.type === "WITHDRAWAL",
                              "text-success": transaction.type === "DEPOSIT",
                              "text-info": transaction.type === "TRANSFER",
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight ">
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
                            {transactionConfig.type[transaction.type]}
                          </span>

                          <p className="mb-0 text-xs leading-tight text-slate-500">
                            {transactionConfig.mode[transaction.mode]}
                          </p>
                        </td>

                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm uppercase leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight text-secondary">
                            {transaction.dot$}
                          </span>
                        </td>

                        <td
                          className={classNames(
                            "whitespace-nowrap bg-transparent p-2 text-center align-middle text-sm uppercase leading-normal shadow-transparent",
                            {
                              "border-b": index !== items.length - 1,
                            }
                          )}
                        >
                          <span className="text-xs font-semibold leading-tight text-slate-500">
                            {transaction.id}
                          </span>
                          <p className="mb-0 text-xs leading-tight text-slate-500">
                            {transaction.createdAt$}
                          </p>
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
                                pathname: `/transaction/edit/${transaction.id}`,
                              }}
                              className="btn-ghost btn-square btn w-auto stroke-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                            >
                              <Icon name="edit" className="h-4 w-4" />
                            </Link>
                            <Link
                              to={{
                                pathname: `/transaction/delete/${transaction.id}`,
                              }}
                              className="btn-ghost btn-square btn w-auto stroke-slate-500 px-2 hover:bg-white hover:stroke-secondary"
                            >
                              <Icon name="delete" className="h-4 w-4" />
                            </Link>
                          </td>
                        )}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex w-full max-w-full items-center justify-center pb-4 ">
            <div className="join whitespace-nowrap rounded border border-solid border-gray-200 bg-base-100">
              <button
                disabled={queryParams.page <= 1}
                className="btn-ghost btn-md join-item btn text-2xl text-slate-600"
                onClick={() =>
                  handleSetSearchParams("page", queryParams.page - 1)
                }
              >
                «
              </button>
              <span className="btn-ghost btn-md join-item btn select-none text-xs text-slate-500">
                Page: {queryParams.page}
              </span>
              <button
                disabled={items.length < queryParams.take}
                className="btn-ghost btn-md join-item btn text-2xl text-slate-600"
                onClick={() =>
                  handleSetSearchParams("page", queryParams.page + 1)
                }
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;
