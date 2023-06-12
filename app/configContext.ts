import type { TRANSACTION_MODE } from "@prisma/client";

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

export type ConfigContext = {
  group: {
    [key in "alpha" | "bravo"]: { stateDate: Date; endDate?: Date };
  };
  passbook: {
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
};

const configContext: ConfigContext = {
  group: {
    alpha: {
      stateDate: new Date("09/01/2020"),
      endDate: new Date("07/31/2023"),
    },
    bravo: {
      stateDate: new Date("08/01/2023"),
    },
  },
  passbook: {
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
  },
};

export default configContext;
