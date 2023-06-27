import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useOutletContext,
  useSearchParams,
} from "@remix-run/react";
import TransactionTable from "~/components/organisms/transactionTable";
import { pickValidInObject } from "~/helpers/utils";
import { findTransaction } from "~/models/transaction.server";
import { getUserSelect } from "~/models/user.server";
import { getIsLoggedIn } from "~/session.server";

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
  const isLoggedIn = await getIsLoggedIn(request);
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
    isLoggedIn
  });
};

export default function TransactionPage() {
  const { items, users, isLoggedIn } = useLoaderData<typeof loader>();
  const { alert, setAlert }: any = useOutletContext();
  let [searchParams, setSearchParams] = useSearchParams({});
  const queryParams = getSearchParams(searchParams);
  const params = setParams(searchParams);

  const handleSetSearchParams = (key: string, value: string | number) => {
    setSearchParams(
      pickValidInObject({
        ...params,
        [key]: value.toString(),
      })
    );
  };

  const handleSelectOnChange = (event: any) => {
    const { value, name } = event?.target || {};

    if (name) {
      setSearchParams(
        pickValidInObject({
          ...params,
          page: "1",
          [name]: value.toString(),
        })
      );
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <Outlet context={{ alert, setAlert }} />
      <TransactionTable
        handleSetSearchParams={handleSetSearchParams}
        handleSelectOnChange={handleSelectOnChange}
        queryParams={queryParams}
        users={users}
        items={items as unknown as Awaited<ReturnType<typeof findTransaction>>}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}
