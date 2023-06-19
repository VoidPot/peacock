import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import classNames from "classnames";
import configContext from "~/configContext";
import { findTransaction } from "~/models/transaction.server";
import { getUserSelect } from "~/models/user.server";

const transactionConfig = configContext.transaction;

const getSearchParams = (searchParams: URLSearchParams) => {
  return {
    from: Number(searchParams.get("from")) || 0,
    to: Number(searchParams.get("to")) || 0,
    page: Number(searchParams.get("page")) || 1,
    take: Number(searchParams.get("take")) || 10,
    type: searchParams.get("type") || "",
    mode: searchParams.get("mode") || "",
    sort: searchParams.get("sort") || "dot",
    order: searchParams.get("order") || "desc",
  };
};

const setParams = (searchParams: URLSearchParams) => {
  return {
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    page: searchParams.get("page") || "1",
    type: searchParams.get("type") || "",
    mode: searchParams.get("mode") || "",
    sort: searchParams.get("sort") || "dot",
    order: searchParams.get("order") || "desc",
  };
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const queryParams = getSearchParams(url.searchParams);
  const users = await getUserSelect();
  const items = await findTransaction({
    options: {
      ...queryParams,
      skip: queryParams.take * (queryParams.page - 1),
    },
  });
  return json({
    items,
    users,
  });
};

export default function TransactionPage() {
  const { items, users } = useLoaderData<typeof loader>();
  let [searchParams, setSearchParams] = useSearchParams({});
  const queryParams = getSearchParams(searchParams);
  const params = setParams(searchParams);

  const handleSetSearchParams = (key: string, value: string | number) => {
    setSearchParams({
      ...params,
      [key]: value.toString(),
    });
  };

  const handleSelectOnChange = (event: any) => {
    const { value, name } = event?.target || {};

    if (name) {
      setSearchParams({
        ...params,
        page: "1",
        [name]: value.toString(),
      });
    }
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-none">
          <div className="relative mb-6 flex min-w-0 flex-col break-words rounded-md border-0 border-solid border-transparent bg-white bg-clip-border shadow-soft-xl">
            <div className="border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent bg-white p-6 pb-0">
              <h6 className="text-neutral">Transaction Table</h6>
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
                        Transaction At / Added At
                      </th>
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
                                  src={`https://file.iam-hussain.site/peacock/image/${primary.avatar}`}
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
                            <p className="mb-0 text-xs leading-tight text-slate-500">
                              {transaction.createdAt$}
                            </p>
                          </td>
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
    </div>
  );
}
