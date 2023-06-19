import { useLoaderData } from "@remix-run/react";
import classNames from "classnames";
import configContext from "~/configContext";
import type { loader } from "~/routes/_dash.admin-panel";

const transactionConfig = configContext.transaction;

function TransactionForm({ className }: any) {
  const { users } = useLoaderData<typeof loader>();
  return (
    <div
      className={classNames(
        "relative flex min-w-0 flex-col break-words rounded-md border-0 border-solid border-transparent bg-white bg-clip-border px-4 py-6 shadow-soft-xl lg:px-6",
        {
          [className]: Boolean(className),
        }
      )}
    >
      <div className="border-b-solid rounded-t-2xl border-b-0 border-b-transparent bg-white pb-0">
        <h6 className="text-neutral">Transaction</h6>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-2 px-0 pb-2 pt-0 align-middle lg:grid-cols-6">
        <div className="form-control relative col-span-1 w-full lg:col-span-4">
          <label className="label">
            <span className="label-text">Transaction Mode</span>
          </label>
          <select className="select-bordered select-error select">
            {Object.entries(transactionConfig.mode).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <label className="label absolute bottom-[-24px] right-0">
            <span className="label-text-alt text-error">Alt label</span>
          </label>
        </div>
        <div className="form-control col-span-1 w-full lg:col-span-2">
          <label className="label">
            <span className="label-text">Date Of Transaction</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full"
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">Bottom Right label</span>
          </label>
        </div>
        <div className="form-control col-span-1 w-full lg:col-span-3">
          <label className="label">
            <span className="label-text">Transaction From</span>
          </label>
          <select className="select-bordered select">
            {users.map((e, i) => (
              <option key={i} value={e.id}>
                {e.firstName} {e.lastName}
              </option>
            ))}
          </select>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">Alt label</span>
          </label>
        </div>
        <div className="form-control col-span-1 w-full lg:col-span-3">
          <label className="label">
            <span className="label-text">Transaction To</span>
          </label>
          <select className="select-bordered select">
            {users.map((e, i) => (
              <option key={i} value={e.id}>
                {e.firstName} {e.lastName}
              </option>
            ))}
          </select>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">Alt label</span>
          </label>
        </div>

        <div className="form-control col-span-1 w-full lg:col-span-2">
          <label className="label">
            <span className="label-text">Transaction Amount</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input-bordered input w-full"
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">Bottom Right label</span>
          </label>
        </div>

        <div className="form-control col-span-1 w-full lg:col-span-4">
          <label className="label">
            <span className="label-text">Transaction Note</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input w-full"
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">Bottom Right label</span>
          </label>
        </div>
        <div className="col-span-full flex justify-center align-middle">
          <button className="btn-secondary btn px-6">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionForm;
