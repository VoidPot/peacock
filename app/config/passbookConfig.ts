import type { TRANSACTION_MODE } from "@prisma/client";

export type PassbookConfig = {
  settings: {
    [key in TRANSACTION_MODE]?: {
      [key in "FROM" | "TO" | "GROUP" | "CLUB"]?: {
        [key in "ADD" | "SUB"]?: {
          [key in Passbook_Settings_Keys]?:
            | "amount"
            | "month"
            | "balance"
            | "profit"
            | "one";
        };
      };
    };
  };
};

export type Passbook_Settings_Keys =
  | "termDeposit"
  | "deposit"
  | "tallyDeposit"
  | "totalDeposit"
  | "withdraw"
  | "profitWithdraw"
  | "totalWithdraw"
  | "tallyBalance"
  | "termInvest"
  | "invest"
  | "totalInvest"
  | "termReturns"
  | "returns"
  | "totalReturns"
  | "accountBalance"
  | "holdingAmount"
  | "profit"
  | "tallyProfit"
  | "totalProfit"
  | "calcProfit"
  | "depositMonths"
  | "withdrawMonths"
  | "investMonths"
  | "returnsMonths";

export const passbookConfig: PassbookConfig = {
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
        SUB: {
          tallyBalance: "amount",
        },
      },
      TO: {
        ADD: {
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
          investMonths: "one",
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
          investMonths: "one",
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
          totalProfit: "profit",
          returnsMonths: "one",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "profit",
        },
      },
      CLUB: {
        ADD: {
          termReturns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
          totalProfit: "profit",
          returnsMonths: "one",
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
          totalProfit: "profit",
        },
      },
      TO: {
        ADD: {
          holdingAmount: "amount",
          accountBalance: "profit",
        },
      },
      CLUB: {
        ADD: {
          returns: "amount",
          totalReturns: "amount",
          holdingAmount: "amount",
          accountBalance: "profit",
          profit: "profit",
          totalProfit: "profit",
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
