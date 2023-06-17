import type { Group } from "@prisma/client";
import moment from "moment";

export const getValidDate = (date: any) => (date ? new Date(date) : new Date());

export const getMonthYear = (input: any = new Date()) => {
  const date = moment(input);
  return date.format("MMM YYYY");
};

export const formatMoney = (input: any | undefined = 0) => {
  return `${Number(input).toLocaleString("en-IN") || 0} ₹`;
};

export const getValidNumber = (input: any | undefined = 0) => {
  return isNaN(Number(input)) ? 0 : Number(input);
};

export const getFirstLetterUpperCase = (str: string) => {
  const spaced = str.split("_").join(" ").toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.substring(1);
};

export function numDifferentiation(value: number) {
  const val = Math.abs(value);
  if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
  if (val >= 100000) return `${(value / 100000).toFixed(2)} Lac`;
  return value;
}

// ------------

export const getClubTimes = () => {
  const started = new Date("09/01/2020");
  const now = moment();
  const monthsDifDecimal = now.diff(new Date(started), "months", true);
  return {
    started: moment(started).format("MMMM YYYY"),
    current: now.format("MMMM YYYY"),
    monthsDifDecimal,
    monthsDif: Math.ceil(monthsDifDecimal),
  };
};

export const dateExtract = (from = new Date(), to = new Date()) => {
  const now = moment(to);
  const monthsDifDecimal = now.diff(new Date(from), "months", true);
  return {
    start: moment(from).format("MMM-YY"),
    end: now.format("MMM-YY"),
    monthsDifDecimal,
    monthsDif: Math.ceil(monthsDifDecimal),
  };
};
