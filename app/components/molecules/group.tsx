import type { Icons } from "../atoms/svg/icon";
import Icon from "../atoms/svg/icon";
import classNames from "classnames";

function GroupCard(props: any) {
  let dek = `${props.startMonth} / ${
    props.hasEndTime ? props.endMonth : "Now"
  }`;

  const stats: {
    title: string;
    value: string;
    icon: keyof typeof Icons;
  }[] = [
    {
      title: "Months",
      value: `${props.currentMonthsDiff}`,
      icon: "trans",
    },
    {
      title: "Monthly Amount",
      value: `${props.amount.toLocaleString("en-IN")} ₹`,
      icon: "trans",
    },
    {
      title: "Members Deposit",
      value: `${props.passbook.termDeposit.toLocaleString("en-IN")} ₹`,
      icon: "trans",
    },
    {
      title: "Members Balance",
      value: `${props.passbook.balance.toLocaleString("en-IN")} ₹`,
      icon: "trans",
    },
    {
      title: "Net Amount",
      value: `${(props.personTermAmount * props.noOfMembers).toLocaleString(
        "en-IN"
      )} ₹`,
      icon: "trans",
    },
  ];
  return (
    <div className="mb-0 mt-0 w-full max-w-full text-center lg:mb-0 lg:flex-none">
      <div className="relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-2 border-solid border-primary/40 bg-base-100 bg-clip-border p-8 shadow-soft-xl">
        <div className="flex-auto">
          <h4 className="m-0 uppercase text-primary">{props.name}</h4>
          <p className="ml-2 border-b-2 pb-3 text-sm leading-normal">{dek}</p>
          <div className="mx-auto w-full max-w-screen-2xl rounded-xl">
            <div className="m-auto grid max-w-md grid-flow-row-dense grid-cols-2 grid-rows-1 gap-x-4">
              {stats.map((each, index) => (
                <div
                  key={index}
                  className={classNames({
                    "mt-3": true,
                    "col-span-1": index !== 4,
                    "col-span-2": index === 4,
                    "text-left": index % 2 === 0 && index !== 4,
                    "text-right": index % 2 !== 0 && index !== 4,
                    "text-center": index === 4,
                  })}
                >
                  <div
                    className={classNames({
                      "flex items-center": true,
                      "flex-row": index % 2 === 0 && index !== 4,
                      "flex-row-reverse": index % 2 !== 0 && index !== 4,
                      "flex-col": index === 4,
                    })}
                  >
                    <div className="m-1 flex items-center justify-center rounded bg-white bg-center fill-current text-neutral-900 ">
                      <Icon
                        className="h-5 w-5"
                        color="slate"
                        name={each.icon}
                      />
                    </div>
                    <p className="m-0 text-xs font-semibold leading-normal text-slate-400">
                      {each.title}
                    </p>
                  </div>
                  <h4 className="text-1xl mx-1 font-bold text-secondary">
                    {each.value}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
