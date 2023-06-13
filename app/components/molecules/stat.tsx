import React from "react";
import PropTypes from "prop-types";
import type { Icons } from "../atoms/svg/icon";
import Icon from "../atoms/svg/icon";
import configContext from "~/configContext";
interface StatProps {
  hed: string | number;
  dek: string | number;
  highlight?: string;
  iconName: keyof typeof Icons;
}

const Stat = ({ hed, dek, highlight, iconName }: StatProps) => {
  const randomColor =
    configContext.statColors[
      Math.floor(Math.random() * configContext.statColors.length)
    ];
  return (
    <div className="w-full max-w-full ">
      <div className="relative flex min-w-0 flex-col break-words rounded-md bg-base-content bg-clip-border">
        <div className="flex-auto px-8 py-3">
          <div className="-mx-3 flex flex-row justify-between">
            <div className="w-auto flex-none">
              <div className="text-left">
                <p className="mb-0 text-xs font-semibold leading-normal text-white">
                  {hed}
                </p>
                <h5 className="text-1xl mb-0 font-bold text-primary-content">
                  {dek}
                  {highlight && (
                    <span className="font-weight-bolder ml-2 text-sm leading-normal text-lime-500">
                      {highlight}
                    </span>
                  )}
                </h5>
              </div>
            </div>
            <div
              className={`bg-${randomColor} inline-flex h-12 w-12 justify-center rounded-lg text-center align-middle`}
            >
              <div className="m-auto h-8 w-8">
                <Icon name={iconName} color="white" className="h-6 w-6" />
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
