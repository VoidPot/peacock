import moment from "moment";

export const getValidDate = (date: any) => (date ? new Date(date) : new Date());

export const getMonthYear = (input: any = new Date()) => {
  const date = moment(input);
  return date.format("MMM YYYY");
};

export const formatMoney = (input: any | undefined = 0) => {
  return `${Number(Number(input).toFixed(2)).toLocaleString("en-IN") || 0} ₹`;
};

export const formatDate = (input: any = new Date()) => {
  const date = moment(getValidDate(input));
  return date.format("DD MMM YYYY");
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
