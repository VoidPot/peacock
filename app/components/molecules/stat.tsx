import React from "react";
import PropTypes from "prop-types";
import type { Icons } from "../atoms/svg/icon";
import Icon from "../atoms/svg/icon";

interface StatProps {
  hed: string;
  dek: string;
  highlight?: string;
  iconName: keyof typeof Icons;
}

const Stat = ({ hed, dek, highlight, iconName }: StatProps) => {
  return (
    <div className="w-full max-w-full ">
      <div className="relative flex min-w-0 flex-col break-words rounded-xl bg-white bg-clip-border shadow-soft-xl">
        <div className="flex-auto p-4">
          <div className="-mx-3 flex flex-row">
            <div className="w-2/3 max-w-full flex-none px-3">
              <div>
                <p className="mb-0 text-sm font-semibold leading-normal">
                  {hed}
                </p>
                <h5 className="mb-0 font-bold">
                  {dek}
                  {highlight && (
                    <span className="font-weight-bolder ml-2 text-sm leading-normal text-lime-500">
                      {highlight}
                    </span>
                  )}
                </h5>
              </div>
            </div>
            <div className="basis-1/3 px-3 text-right">
              <div className="inline-flex h-12 w-12 justify-center rounded-lg bg-gradient-to-tl from-slate-100 to-gray-200 text-center align-middle">
                <div className="m-auto h-8 w-8">
                  <Icon name={iconName} color="slate" className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Stat.propTypes = {
  hed: PropTypes.string,
  dek: PropTypes.string,
  highlight: PropTypes.string,
  iconName: PropTypes.string,
};

export default Stat;
