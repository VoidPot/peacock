import type { StatProps } from "./stat";
import Stat from "./stat";

function GroupCard(props: any) {
  const startMonth = props.startMonth;
  const endMonth = props.hasEndTime ? props.endMonth : "Now";

  const amount = `${props.amount.toLocaleString("en-IN")} ₹ / Month`;
  const netAmount = `${(
    props.personTermAmount * props.noOfMembers
  ).toLocaleString("en-IN")} ₹`;

  const statsData: StatProps[] = [
    {
      hed: "Members Deposit",
      dek: `${props.passbook.termDeposit.toLocaleString("en-IN")} ₹`,
      iconName: "trans",
      align: "start",
    },
    {
      hed: "Members Balance",
      dek: `${props.passbook.balance.toLocaleString("en-IN")} ₹`,
      iconName: "trans",
      align: "end",
      hedColor: "accent",
    },
  ];

  return (
    <div className="mb-0 mt-0 w-full max-w-full text-center lg:mb-0 lg:flex-none">
      <div className="relative z-20 flex min-w-0 flex-col break-words rounded-2xl bg-base-100 bg-clip-border p-4 shadow-soft-xl">
        <div className="flex flex-col">
          <div className="flex justify-between p-2 pb-4">
            <h3 className="m-0 uppercase text-neutral">{props.name}</h3>
            <div className="text-right">
              <p className="m-0 p-0 text-sm font-semibold leading-normal text-slate-500">
                {amount}
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-screen-2xl rounded-xl">
            <div className="flex flex-col px-2">
              <div className="flex justify-between pb-1">
                <p className="m-0 p-0 text-xs font-semibold leading-normal text-slate-500">
                  {startMonth}
                </p>
                <p className="m-0 p-0 text-xs font-semibold leading-normal text-slate-500">
                  {endMonth}
                </p>
              </div>
              <progress
                className="progress progress-secondary h-3 w-full"
                value={props.passbook.termDeposit}
                max={props.personTermAmount * props.noOfMembers}
              ></progress>
              <div className="flex justify-between pt-1">
                <p className="m-0 p-0 text-sm font-semibold leading-normal text-slate-500">
                  {0}
                </p>
                <p className="m-0 p-0 text-sm font-semibold leading-normal text-slate-500">
                  {netAmount}
                </p>
              </div>
              <div className="flex flex-row gap-4 pt-6">
                {statsData.map(
                  (each: any, index: number | null | undefined) => (
                    <Stat
                      key={index}
                      {...each}
                      theme="ghost"
                      iconPlacement="none"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
