import { dateExtract } from "~/helpers/utils";
import type { Icons } from "../atoms/svg/icon";
import Icon from "../atoms/svg/icon";

function GroupCard(props: any) {
  const groupDate = dateExtract(props.startAt, props.endAt || new Date());
  let dek = `${groupDate.start} to ${groupDate.end}`;
  const months =
    groupDate.monthsDif > 0 ? `(${groupDate.monthsDif} months)` : ``;

  if (!props.endAt) {
    dek = `${groupDate.start} to now`;
  }
  const stats: {
    title: string;
    value: string;
    icon: keyof typeof Icons;
  }[] = [
    {
      title: "Started Before",
      value:
        groupDate.monthsDif > 0
          ? `${groupDate.monthsDif} / Months`
          : `0 / Months`,
      icon: "trans",
    },
    {
      title: "Monthly Amount",
      value: `${props.amount.toLocaleString("en-IN")} ₹`,
      icon: "trans",
    },
  ];
  return (
    <div className="mb-0 mt-0 w-full max-w-full lg:mb-0 lg:flex-none">
      <div className="relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid border-black/12.5 bg-white bg-clip-border shadow-soft-xl">
        <div className="flex-auto p-4">
          <h4 className="mb-0 ml-2 mt-6 uppercase text-primary">
            {props.name}
          </h4>
          <p className="ml-2 text-sm leading-normal">{dek}</p>
          <div className="mx-auto w-full max-w-screen-2xl rounded-xl px-6">
            <div className="-mx-3 mt-0 flex flex-wrap">
              {stats.map((each, key) => (
                <div
                  key={key}
                  className="mt-0 w-2/4 max-w-full flex-none py-4 pl-0 pr-3 lg:w-1/4"
                >
                  <div className="mb-2 flex">
                    <div className="mr-2 flex h-5 w-5 items-center justify-center rounded bg-gradient-to-tl from-slate-100 to-gray-200 bg-center fill-current text-center text-neutral-900 shadow-soft-2xl">
                      <Icon
                        className="h-3 w-3"
                        color="slate"
                        name={each.icon}
                      />
                    </div>
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
