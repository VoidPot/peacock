import type { TRANSACTION_MODE } from "@prisma/client";
import moment from "moment";
import { formatMoney } from "./helpers/utils";

export type GroupSlugs = "alpha" | "bravo";

export type Passbook_Settings_Keys =
  | "termDeposit"
  | "deposit"
  | "tallyDeposit"
  | "totalDeposit"
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
  | "profit"
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

export type PassbookConfig = {
  settings: {
    [key in TRANSACTION_MODE]?: {
      [key in "FROM" | "TO" | "GROUP" | "CLUB"]?: {
        [key in "ADD" | "SUB"]?: {
          [key in Passbook_Settings_Keys]?:
            | "amount"
            | "month"
            | "balance"
            | "profit";
        };
      };
    };
  };
};

const passbook: PassbookConfig = {
  settings: {
    INTER_CASH_TRANSFER: {
      FROM: {
        SUB: {
          holdingAmount: "amount",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
        },
      },
    },
    MEMBERS_PERIODIC_DEPOSIT: {
      FROM: {
        ADD: {
          termDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
        },
      },
      GROUP: {
        ADD: {
          termDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
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
      FROM: {
        ADD: {
          tallyDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
        },
      },
      GROUP: {
        ADD: {
          tallyDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
      CLUB: {
        ADD: {
          tallyDeposit: "amount",
          totalDeposit: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
    MEMBERS_WITHDRAW: {
      FROM: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO: {
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
      FROM: {
        SUB: {
          holdingAmount: "amount",
        },
      },
      TO: {
        ADD: {
          termInvest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          holdingAmount: "amount",
          profit: "profit",
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
          profit: "profit",
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
          profit: "profit",
        },
      },
    },
    VENDOR_INVEST: {
      FROM: {
        SUB: {
          holdingAmount: "amount",
        },
      },
      TO: {
        ADD: {
          invest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          holdingAmount: "amount",
          profit: "profit",
        },
      },
      GROUP: {
        ADD: {
          invest: "amount",
          totalInvest: "amount",
          investMonths: "month",
        },
        SUB: {
          holdingAmount: "amount",
          profit: "profit",
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
          profit: "profit",
        },
      },
    },
    VENDOR_PERIODIC_RETURN: {
      FROM: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "profit",
        },
      },
      GROUP: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
        },
      },
      CLUB: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
        },
      },
    },
    VENDOR_RETURN: {
      FROM: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "profit",
        },
      },
      GROUP: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
        },
      },
      CLUB: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
        },
      },
    },
    OTHER_EXPENDITURE: {
      FROM: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
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
      CLUB: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
    MEMBER_EXIT_WITHDRAW: {
      FROM: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO: {
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
      CLUB: {
        SUB: {
          withdraw: "amount",
          totalWithdraw: "amount",
          accountBalance: "amount",
          holdingAmount: "amount",
        },
      },
    },
    MEMBER_EXIT_PROFIT_WITHDRAW: {
      FROM: {
        SUB: {
          holdingAmount: "amount",
          accountBalance: "amount",
        },
      },
      TO: {
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
  group: function (membersCount: number = 0) {
    const data = {
      alpha: computeGroupData({
        amount: 1000,
        stateDate: new Date("09/01/2020"),
        endDate: new Date("07/31/2023"),
        membersCount,
      }),
      bravo: computeGroupData({
        amount: 2000,
        stateDate: new Date("08/01/2023"),
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
  passbook,
};

export default configContext;
