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
  const termAmountPerPerson = Math.ceil(currentMonthDiff) * amount;
  const totalTermAmount = termAmountPerPerson * membersCount;
  return {
    stateDate,
    endDate,
    amount,
    hasEndDate,
    startMonth: start.format("MMM YYYY"),
    endMonth: end.format("MMM YYYY"),
    currentMonth: current.format("MMM YYYY"),
    endMonthsDif: Math.ceil(startEndMonths),
    currentMonthsDiff: Math.ceil(currentMonthDiff),
    termAmountPerPerson,
    termAmountPerPerson$: formatMoney(termAmountPerPerson),
    totalTermAmount,
    totalTermAmount$: formatMoney(totalTermAmount),
  };
};

const message = {
  default: "Unexpected error!",
  required: "This field is required",
  invalidDate: "This is an invalid date",
  number: "This is an invalid number",
  transactionCreated: "Transaction created successfully",
  transactionCreateError: "Error on creating the transaction",
  transactionEdited: "Transaction edited successfully",
  transactionEditError: "Error on editing the transaction",
  transactionDeleted: "Transaction deleted successfully",
  transactionDeleteError: "Error on deleting the transaction",
};

const configContext = {
  user: {
    payExtra: {
      payProfitOf: ["initial_bank_interest", "chit_20l_2021"],
      joinedBefore: new Date("07/31/2023"),
      joinedAfter: new Date("09/01/2020"),
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
      MEMBERS_WITHDRAW: "Member Withdrawal",
      NEW_MEMBER_PAST_TALLY: "New Joiner's Profit Tally",
      INTER_CASH_TRANSFER: "Transfer Between Members",
      VENDOR_PERIODIC_INVEST: "Periodic Vendor Invest",
      VENDOR_PERIODIC_RETURN: "Periodic Vendor Returns",
      VENDOR_INVEST: "Vendor Investment",
      VENDOR_RETURN: "Vendor Returns",
      OTHER_EXPENDITURE: "Other Expenditures",
      MEMBER_EXIT_WITHDRAW: "Member Exit",
      MEMBER_EXIT_PROFIT_WITHDRAW: "Member Exit With Profit",
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
      const diff = moment.duration(
        moment(new Date()).diff(new Date("09/01/2020"))
      );
      let output = `${diff.years()} yrs`;
      if (diff.months()) {
        output = `${output} ${diff.months()} mth`;
      }
      return output;
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
          .matches(
            /(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))/,
            message.invalidDate
          )
          .test("dot", message.invalidDate, function (value) {
            return moment(value, "DD/MM/YYYY").isValid();
          }),
        from: yup.number().required(message.required),
        to: yup.number().required(message.required),
        amount: yup
          .number()
          .typeError(message.number)
          .min(1)
          .max(10000000)
          .required(message.required),
      })
      .required(),
  },
};

export default configContext;
