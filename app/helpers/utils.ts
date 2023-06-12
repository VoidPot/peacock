import type { Group } from "@prisma/client";
import moment from "moment";

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

export const getValidDate = (date: any) => (date ? new Date(date) : new Date());

export const getFirstLetterUpperCase = (str: string) => {
  const spaced = str.split("_").join(" ").toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.substring(1);
};

export const getMonthYear = (input: any = new Date()) => {
  const date = moment(input);
  return date.format("MMM YYYY");
};

export const formatMoney = (input: any = 0) => {
  return `${Number(input).toLocaleString("en-IN") || 0} ₹`;
};

export const computeGroupTiming = ({ startAt, endAt, amount }: Group) => {
  const start = moment(startAt);
  const end = moment(endAt || new Date());
  const current = moment(new Date());
  const hasEndTime = Boolean(endAt);
  const startEndMonths = end.diff(start, "months", true);
  const startCurrentMonths = current.diff(start, "months", true);
  const currentMonthDiff = startCurrentMonths >= 0 ? startCurrentMonths : 0;
  return {
    startMonth: start.format("MMM YYYY"),
    hasEndTime,
    endMonth: end.format("MMM YYYY"),
    currentMonth: current.format("MMM YYYY"),
    endMonthsDif: Math.ceil(startEndMonths),
    currentMonthsDiff: Math.ceil(currentMonthDiff),
    personTermAmount: Math.ceil(currentMonthDiff) * amount,
  };
};

export const getMemberSummaryAmount = (
  member: any,
  key: string = "deposit"
) => {
  return formatMoney(
    member.summaries
      .map((each: any) => each[key])
      .reduce((a: any, e: any) => {
        a = a + e;
        return a;
      }, 0)
  );
};

export const getMemberBalance = (member: any, key: string = "deposit") => {
  return formatMoney(
    member.summaries
      .map((each: any) => each[key])
      .reduce((a: any, e: any) => {
        a = a + e;
        return a;
      }, 0)
  );
};
