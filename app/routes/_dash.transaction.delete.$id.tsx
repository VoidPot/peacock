import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import classNames from "classnames";
import configContext from "~/config/configContext";
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
      <div className="flex flex-wrap">Delete</div>
    </div>
  );
}
