import React from "react";

import Team from "./icon/team";
import AddBox from "./icon/add-box";
import Shop from "./icon/shop";
import Dashboard from "./icon/dashboard";
import Archive from "./icon/archive";
import Settings from "./icon/settings";
import Transaction from "./icon/transaction";
import Close from "./icon/close";

export const Icons = {
  "add-box": AddBox,
  team: Team,
  shop: Shop,
  dash: Dashboard,
  archive: Archive,
  setting: Settings,
  transaction: Transaction,
  close: Close,
};

interface IconProps {
  name?: keyof typeof Icons;
  color?: "white" | "black" | "primary" | "slate";
  className?: string;
}

const colorObject = {
  white: "stroke-white fill-white",
  black: "stroke-black fill-black",
  slate: "stroke-slate-600 fill-slate-600",
  primary: "stroke-primary-500 fill-primary-500",
};

function Icon({ name, color, className }: IconProps) {
  let iconClasses = `h-full w-full ${
    color ? colorObject[color] : colorObject.black
  } ${className || ""}`;

  if (name && Icons[name]) {
    const Comp = Icons[name];
    return <Comp className={iconClasses} />;
  }
  return <Icons.team className={iconClasses} />;
}

export default Icon;
