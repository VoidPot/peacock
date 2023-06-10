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
