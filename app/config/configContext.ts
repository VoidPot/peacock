import * as yup from "yup";
import moment from "moment";
import { formatMoney } from "../helpers/utils";
import { passbookConfig } from "./passbookConfig";

export type GroupSlugs = "alpha" | "bravo";

const computeGroupData = ({
  stateDate,
  endDate,
  amount,
  membersCount = 0,
}: {
  stateDate: Date;
  endDate?: Date;
  amount: number;
  membersCount: number;
}) => {
  const hasEndDate = Boolean(endDate);
  const start = moment(stateDate);
  const end = moment(endDate || new Date());
  const current = moment(new Date());
  const startEndMonths = end.diff(start, "months", true);
  const startCurrentMonths = current.diff(start, "months", true);
  const currentMonthDiff = startCurrentMonths >= 0 ? startCurrentMonths : 0;
  const endMonthsDif = Math.ceil(startEndMonths);
  const monthDiff = end.isAfter(current) ? currentMonthDiff : endMonthsDif;
  const termAmountPerPerson = Math.ceil(monthDiff) * amount;
  const totalTermAmount = termAmountPerPerson * membersCount;
  return {
    stateDate,
    endDate,
    amount,
    hasEndDate,
    startMonth: start.format("MMM YYYY"),
    endMonth: end.format("MMM YYYY"),
    currentMonth: current.format("MMM YYYY"),
    endMonthsDif,
    currentMonthsDiff: Math.ceil(currentMonthDiff),
    termAmountPerPerson,
    termAmountPerPerson$: formatMoney(termAmountPerPerson),
    totalTermAmount,
    totalTermAmount$: formatMoney(totalTermAmount),
  };
};

const message = {
  default: "Unexpected error!",
  invalidPassword: "The password is incorrect",
  required: "This field is required",
  invalid: "The value is invalid",
  invalidDate: "This is an invalid date",
  invalidSlug: "Must be small case a-z and numbers",
  minTwo: "Must be at least 2 characters",
  number: "This is an invalid number",
  transactionCreated: "Transaction created successfully",
  transactionCreateError: "Error on creating the transaction",
  transactionEdited: "Transaction edited successfully",
  transactionEditError: "Error on editing the transaction",
  transactionDeleted: "Transaction deleted successfully",
  transactionDeleteError: "Error on deleting the transaction",
  memberCreated: "Member created successfully",
  memberCreateError: "Error on creating the member",
  memberEdited: "Member edited successfully",
  memberEditError: "Error on editing the member",
  memberDeleted: "Member deleted successfully",
  memberDeleteError: "Error on deleting the member",
  vendorCreated: "Vendor created successfully",
  vendorCreateError: "Error on creating the vendor",
  vendorEdited: "Vendor edited successfully",
  vendorEditError: "Error on editing the vendor",
  vendorDeleted: "Member deleted successfully",
  vendorDeleteError: "Error on deleting the member",
  avatarUpdate: "Avatar updated successfully",
  avatarUpdateError: "Error on updating the avatar",
  backupSuccess: "DB data backup successfully",
  backupError: "Error on DB data backup",
  backupDone: "DB data backup already created",
};

const configContext = {
  backup: {
    path: `${process.cwd()}/public/`,
    fileName: "peacock_backup.json",
    filePath: `${process.cwd()}/public/peacock_backup.json`,
  },
  user: {
    vendorType: {
      DEFAULT: "Default",
      CHIT_FUND_COMPANY: "Chit fund company",
      LOAD_BORROWER: "Load Borrower",
    },
  },
  transaction: {
    method: {
      CASH: "Cash",
      ACCOUNT: "Account",
      UPI: "UPI",
      BANK: "Bank",
    },
    type: {
      TRANSFER: "Transfer",
      DEPOSIT: "Deposit",
      WITHDRAWAL: "Withdrawal",
    },
    mode: {
      MEMBERS_PERIODIC_DEPOSIT: "Periodic Member Deposit",
      INTER_CASH_TRANSFER: "Transfer Between Members",
      NEW_MEMBER_PAST_TALLY: "New Joiner's Profit Tally",
      VENDOR_INVEST: "Vendor Investment",
      VENDOR_PERIODIC_INVEST: "Periodic Vendor Invest",
      VENDOR_RETURN: "Vendor Capital Returns",
      VENDOR_PERIODIC_RETURN: "Vendor Profit Returns",
      OTHER_EXPENDITURE: "Other Expenditures",
      MEMBERS_WITHDRAW: "Member Withdrawal",
      MEMBERS_WITHDRAW_PROFIT: "Member Profit Withdrawal",
    },
    sortBy: {
      createdAt: "Date of Added",
      dot: "Date of Transaction",
    },
    orderby: {
      asc: "⬆ Ascending",
      desc: "⬇ Descending",
    },
  },
  group: function (membersCount: number = 0) {
    const data = {
      alpha: computeGroupData({
        amount: 1000,
        stateDate: new Date("09/01/2020"),
        endDate: new Date("08/31/2023"),
        membersCount,
      }),
      bravo: computeGroupData({
        amount: 2000,
        stateDate: new Date("09/01/2023"),
        membersCount,
      }),
    };
    const totalTermAmount =
      data.alpha.totalTermAmount + data.bravo.totalTermAmount;
    const totalTermAmountPerPerson = totalTermAmount / membersCount;

    return {
      ...data,
      club: {
        totalTermAmountPerPerson,
        totalTermAmountPerPerson$: formatMoney(totalTermAmountPerPerson),
        totalTermAmount,
        totalTermAmount$: formatMoney(totalTermAmount),
      },
    };
  },
  club: {
    clubAge: function () {
      const current = moment(new Date());
      const clubStart = moment(new Date("09/01/2020"));

      const diff = moment.duration(current.diff(clubStart));
      let inYear = `${diff.years()} yrs`;
      if (diff.months()) {
        inYear = `${inYear} ${diff.months()} mth`;
      }
      if (diff.days()) {
        inYear = `${inYear} ${diff.days()} day`;
      }

      const inMonth = current.diff(clubStart, "months", true);
      const periodString = moment("20200109", "YYYYMMDD").fromNow();
      return {
        calender: clubStart.calendar(),
        periodString,
        inYear,
        inMonth: Math.ceil(inMonth),
        since: clubStart.format("DD MMM YYYY"),
      };
    },
  },
  passbook: passbookConfig,
  message,
  schema: {
    transaction: yup
      .object({
        id: yup.number(),
        note: yup.string().optional(),
        mode: yup.string().required(message.required),
        dot: yup
          .string()
          .required(message.required)
          // .matches(
          //   /(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))/,
          //   message.invalidDate
          // )
          .test("dot", message.invalidDate, function (value) {
            return moment(new Date(value)).isValid();
          }),
        from: yup.number().required(message.required),
        method: yup.string().required(message.required),
        to: yup.number().required(message.required),
        amount: yup
          .string()
          .test("amount", message.number, function (value) {
            return !isNaN(Number(value));
          })
          .min(1)
          .max(10000000)
          .required(message.required),
      })
      .required(),
    user: yup
      .object({
        id: yup.number(),
        firstName: yup
          .string()
          .min(2, message.minTwo)
          .required(message.required),
        lastName: yup.string().optional(),
        email: yup.string().email().optional(),
        mobileNumber: yup.string().optional(),
        vendorType: yup.string().optional(),
        // nickName: yup
        //   .string()
        //   .min(2, message.minTwo)
        //   .required(message.required)
        //   .matches(/^[a-z0-9_-]+$/, message.invalidSlug),
        joinedAt: yup
          .string()
          .required(message.required)
          .test("joinedAt", message.invalidDate, function (value) {
            return moment(new Date(value)).isValid();
          }),
      })
      .required(),
  },
};

export default configContext;
