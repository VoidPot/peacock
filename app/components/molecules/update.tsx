import configContext from "~/configContext";
import type { findTransaction } from "~/models/transaction.server";

const transactionConfig = configContext.transaction;

function UpdateCard({
  transactions,
}: {
  transactions: Awaited<ReturnType<typeof findTransaction>>;
}) {
  return (
    <div className="relative hidden h-full w-full flex-col break-words rounded-md border-0 border-solid border-black/12.5 bg-white bg-clip-border shadow-soft-xl lg:flex">
      <div className="mb-0 rounded-t-2xl border-b-0 border-solid border-black/12.5 bg-white p-6 pb-0">
        <h6 className="text-neutral">Recent Transactions</h6>
      </div>
      <div className="flex-auto p-4">
        <div className="before:border-r-solid relative before:absolute before:left-4 before:top-0 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
          {transactions.map((trans, i) => (
            <div
              key={i}
              className="relative mb-4 mt-0 after:clear-both after:table after:content-['']"
            >
              <img
                src={`/image/${trans.from.avatar}`}
                className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-md bg-white text-center text-base font-semibold"
                alt="user1"
              />
              <div className="relative -top-1.5 ml-11.252 flex w-auto justify-between pt-1.4 lg:max-w-120">
                <div>
                  <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-600">
                    <span className="text-secondary">
                      {trans.from.firstName}
                    </span>
                    <span className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-500">
                      {" / "}
                      {trans.to.firstName}
                    </span>
                  </h6>
                  <p className="mb-0 mt-1 text-xs font-semibold capitalize leading-tight text-slate-500">
                    <span className="text-slate-600">
                      {transactionConfig.type[trans.type]}
                    </span>
                    {" / "}
                    {transactionConfig.mode[trans.mode]}
                  </p>
                </div>
                <div className="flex flex-col items-end uppercase">
                  <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-600">
                    {trans.amount$}
                  </h6>
                  <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-500">
                    {trans.dot$}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdateCard;
