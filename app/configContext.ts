import type { TRANSACTION_MODE } from "@prisma/client";
import moment from "moment";
import { formatMoney } from "./helpers/utils";

export type Passbook_Settings_Keys =
  | "termDeposit"
  | "deposit"
  | "totalDeposit"
  | "termWithdraw"
  | "withdraw"
  | "profitWithdraw"
  | "totalWithdraw"
  | "termInvest"
  | "invest"
  | "totalInvest"
  | "termReturns"
  | "returns"
  | "totalReturns"
  | "accountBalance"
  | "holdingAmount"
  | "depositMonths"
  | "withdrawMonths"
  | "investMonths"
  | "returnsMonths";

// export type ConfigContext = {
//   transaction: {
//     method: { [key: string]: string };
//     type: { [key: string]: string };
//     mode: { [key: string]: string };
//     sortBy: { [key: string]: string };
//     orderby: { [key: string]: string };
//   };
//   group: {
//     [key in "alpha" | "bravo"]: {
//       stateDate: Date;
//       endDate?: Date;
//       amount: number;
//       hasEndDate: boolean;
//       startMonth: string;
//       endMonth: string;
//       currentMonth: string;
//       endMonthsDif: number;
//       currentMonthsDiff: number;
//       termAmountPerPerson: number;
//     };
//   };
//   passbook:
// };

const computeGroupDate = ({
  stateDate,
  endDate,
  amount,
}: {
  stateDate: Date;
  endDate?: Date;
  amount: number;
}) => {
  const hasEndDate = Boolean(endDate);
  const start = moment(stateDate);
  const end = moment(endDate || new Date());
  const current = moment(new Date());
  const startEndMonths = end.diff(start, "months", true);
  const startCurrentMonths = current.diff(start, "months", true);
  const currentMonthDiff = startCurrentMonths >= 0 ? startCurrentMonths : 0;
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
    termAmountPerPerson: Math.ceil(currentMonthDiff) * amount,
    termAmountPerPersonCurrency: formatMoney(
      Math.ceil(currentMonthDiff) * amount
    ),
  };
};

export type PassbookConfig = {
  settings: {
    [key in TRANSACTION_MODE]?: {
      [key in
        | "FROM_USER"
        | "TO_USER"
        | "GROUP"
        | "FROM_USER_GROUP"
        | "TO_USER_GROUP"
        | "CLUB"]?: {
        [key in "ADD" | "SUB"]?: {
          [key in Passbook_Settings_Keys]?: "amount" | "month" | "balance";
        };
      };
    };
  };
};

const passbook: PassbookConfig = {
  settings: {
    INTER_CASH_TRANSFER: {
      FROM_USER: {
        SUB: {
          holdingAmount: "amount",
        },
      },
      TO_USER: {
        ADD: {
          holdingAmount: "amount",
        },
      },
    },
    MEMBERS_PERIODIC_DEPOSIT: {
      FROM_USER: {
        ADD: {
          termDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      GROUP: {
        ADD: {
          termDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      FROM_USER_GROUP: {
        ADD: {
          termDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
          depositMonths: "month",
        },
      },
      TO_USER_GROUP: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      CLUB: {
        ADD: {
          termDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
    NEW_MEMBER_PAST_TALLY: {
      FROM_USER: {
        ADD: {
          deposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      GROUP: {
        ADD: {
          deposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      FROM_USER_GROUP: {
        ADD: {
          deposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER_GROUP: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      CLUB: {
        ADD: {
          deposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
    MEMBERS_WITHDRAW: {
      FROM_USER: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      GROUP: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      FROM_USER_GROUP: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER_GROUP: {
        ADD: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      CLUB: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
    VENDOR_PERIODIC_INVEST: {
      FROM_USER: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        ADD: {
          termInvest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          accountBalance: "amount",
        },
      },
      GROUP: {
        ADD: {
          termInvest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      FROM_USER_GROUP: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      CLUB: {
        ADD: {
          termInvest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
    },
    VENDOR_INVEST: {
      FROM_USER: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        ADD: {
          invest: "amount",
          totalInvest: "amount",
        },
        SUB: {
          accountBalance: "amount",
        },
      },
      GROUP: {
        ADD: {
          invest: "amount",
          totalInvest: "amount",
        },
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      FROM_USER_GROUP: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      CLUB: {
        ADD: {
          invest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
    },
    VENDOR_PERIODIC_RETURN: {
      FROM_USER: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      GROUP: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER_GROUP: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      CLUB: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
    },
    VENDOR_RETURN: {
      FROM_USER: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      GROUP: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER_GROUP: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      CLUB: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
    },
    OTHER_EXPENDITURE: {
      FROM_USER: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      GROUP: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      FROM_USER_GROUP: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO_USER_GROUP: {
        ADD: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      CLUB: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
  },
};

const configContext = {
  user: {
    payExtra: {
      payProfitOf: ["bank_interest", "chit_20"],
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
      NEW_MEMBER_PAST_TALLY: "New Joiner's Old Profit Tally",
      INTER_CASH_TRANSFER: "Transfer the Club Money Between Members",
      VENDOR_PERIODIC_INVEST: "Periodic Vendor Invest",
      VENDOR_PERIODIC_RETURN: "Periodic Vendor Returns",
      VENDOR_INVEST: "Vendor Investment",
      VENDOR_RETURN: "Vendor Returns",
      OTHER_EXPENDITURE: "Other Expenditures",
    },
    sortBy: {
      createdAt: "Date of Added",
      dot: "Date of Transaction",
    },
    orderby: {
      ACE: "⬆ Ascending",
      DCE: "⬇ Descending",
    },
  },
  group: function () {
    const data = {
      alpha: computeGroupDate({
        amount: 1000,
        stateDate: new Date("09/01/2020"),
        endDate: new Date("07/31/2023"),
      }),
      bravo: computeGroupDate({
        amount: 2000,
        stateDate: new Date("08/01/2023"),
      }),
    };
    const totalTerm =
      data.alpha.termAmountPerPerson + data.bravo.termAmountPerPerson;
    return {
      ...data,
      totalTermAmountPerPerson: totalTerm,
      totalTermAmountPerPersonCurrency: formatMoney(totalTerm),
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
  passbook,
};

export default configContext;
