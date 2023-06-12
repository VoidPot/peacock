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
      <div className="relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid border-black/12.5 bg-white bg-clip-border shadow-soft-xl">
        <div className="flex-auto p-4">
          <h4 className="mb-0 ml-2 mt-6 uppercase text-primary">
            {props.name}
          </h4>
          <p className="ml-2 border-b-2 pb-3 text-sm leading-normal">{dek}</p>
          <div className="mx-auto w-full max-w-screen-2xl rounded-xl">
            <div className="m-auto grid max-w-md grid-flow-row-dense grid-cols-2 grid-rows-1 gap-x-4">
              {stats.map((each, index) => (
                <div
                  key={index}
                  className={classNames({
                    "col-span-1": index !== 4,
                    "col-span-2": index === 4,
                    "text-left": index % 2 === 0 && index !== 4,
                    "text-right": index % 2 !== 0 && index !== 4,
                    "text-center": index === 4,
                  })}
                >
                  <div className="mb-2 inline-flex">
                    {/* <div className="mr-2 flex h-5 w-5 items-center justify-center rounded bg-gradient-to-tl from-slate-100 to-gray-200 bg-center fill-current text-neutral-900 shadow-soft-2xl">
                      <Icon
                        className="h-3 w-3"
                        color="slate"
                        name={each.icon}
                      />
                    </div> */}
                    <p className="mb-0 mt-1 text-xs font-semibold leading-tight">
                      {each.title}
                    </p>
                  </div>
                  <h4 className="font-bold">{each.value}</h4>
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
